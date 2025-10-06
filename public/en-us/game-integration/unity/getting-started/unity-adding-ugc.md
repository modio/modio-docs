---
id: unity-adding-ugc
title: Adding UGC
slug: /unity/adding-ugc
---

# Adding UGC

In this section, we're going to run through adding or submitting UGC using the plugin and API. Feel free to skip this section if you'd prefer to use the web interface.

This guide covers:

* [Scanning for UGC](#scanning-for-ugc)
* [Generating dummy UGC for testing](#generating-dummy-ugc-for-testing)
* [Uploading UGC](#uploading-ugc)

:::note
Among a range of other functionality, players can also use the mod.io website for creating, modifying, and removing mods for your game.
:::

## Scanning for UGC

Before we can interact with your game's UGC via the API, we're going to need to create some test mods. We’ll start by adding some functionality that checks to see if your game has any UGC. If it doesn't then we'll upload some using the API:

```csharp
using System.Threading.Tasks; // Add these to the top of your class
using Modio.Mods;

void OnAuth()
{
    // Authenticated ...
    
    await AddModsIfNone();
}

async Task AddModsIfNone()
{
    // This section ensures we only upload our mods once. Don't worry too much
    // about the specifics for now, we will introduce ModSearchFilters and GetMods 
    // properly later on.
    (Error error, ModioPage<Mod> page) = await Mod.GetMods(new ModSearchFilter());
    if (error)
    {
        Debug.LogError($"Error getting mods: {error}");
        return;
    }

    if (page.Data.Length != 0)
    {
        Debug.Log($"{page.Data.Length} mods found. Not adding mods");
        return;
    }

    // TODO: Keep reading the Getting Started guide
}
```

## Generating dummy UGC for testing

Let's generate a few dummy UGC for you to use for testing. We'll use a third-party API to generate a logo for each of your mods, and we'll create a temporary folder and dummy file in each in your Unity project's directory. 

Don't worry if you don't understand the code below. Its only job is to generate our dummy mods, and it doesn't have any relation to the plugin!

:::note
This section is going to generate some dummy UGC for use throughout the rest of this guide. If you already have mods or test files ready to upload, you can skip to the [uploading UGC](#uploading-ugc) section.
:::

At a minimum, UGC requires the following:

* A name
* A summary
* A logo (image file with a minimum resolution of 512x288)
* At least one file

:::warning
The following code is going to generate a handful of 10-100 mb files, the size of which will give us enough time to show download progress later on. Ensure you have some free space available in your project directory.
:::

```csharp
using System.IO; // Add these to the top of your class
using UnityEngine.Networking;

// Reusing a single byte-array is a small memory-conscious
// optimization for when we are generating our dummy files.
static readonly byte[] Megabyte = new byte[1024 * 1024];
static readonly Random RandomBytes = new Random();

async Task AddModsIfNone()
{
    // Return if any mods exist ...
    
    DummyModData[] mods =
    {
        await GenerateDummyMod("Cool Weapon", "A really cool weapon.", "24466B", "FDA576", 10),
        await GenerateDummyMod("Funny Sound Pack", "You'll laugh a lot using this.", "B85675", "633E63", 50),
        await GenerateDummyMod("Klingon Language Pack", "tlhIngan Hol Dajatlh'a'?", "93681C", "FFEAD0", 1),
        await GenerateDummyMod("Ten New Missions", "Ported from the sequel to the prequel!", "FDA576", "D45B7A", 99),
    };
}

async Task<DummyModData> GenerateDummyMod(string name, string summary, string backgroundColor, string textColor, int megabytes)
{
    Debug.Log($"Writing temporary mod file: {name}");

    string path = Path.Combine(Application.dataPath, $"../_temp_dummy_mods/{name}");
    Directory.CreateDirectory(path);

    using (FileStream fs = File.OpenWrite(Path.Combine(path, $"{name}.dummy")))
    {
        for (int i = 0; i < megabytes; i++)
        {
            RandomBytes.NextBytes(Megabyte);
            await fs.WriteAsync(Megabyte, 0, Megabyte.Length);
        }
    }

    return new DummyModData(
        name,
        summary,
        await GenerateLogo(name.Replace(' ', '+'), backgroundColor, textColor),
        path
    );
}

// Uses a third-party API to generate a logo for each
// mod, adding some variety when we display them later
async Task<Texture2D> GenerateLogo(string text, string backgroundColor, string textColor)
{
    UnityWebRequest request = UnityWebRequestTexture.GetTexture($"https://placehold.co/512x288/{backgroundColor}/{textColor}.png?text={text}");
    request.SendWebRequest();

    while (!request.isDone)
        await Task.Yield();

    if (request.result != UnityWebRequest.Result.Success)
    {
        Debug.LogError($"GenerateLogo failed: {request.error}");

        return null;
    }

    return DownloadHandlerTexture.GetContent(request);
}

readonly struct DummyModData
{
    public readonly string name;
    public readonly string summary;
    public readonly Texture2D logo;
    public readonly string path;

    public DummyModData(string name, string summary, Texture2D logo, string path)
    {
        this.name = name;
        this.summary = summary;
        this.logo = logo;
        this.path = path;
    }
}
```

## Uploading UGC

Uploading UGC is a relatively simple two-step process:

1. In order to upload a new piece of UGC, we need to prepare all the data with a *Mod Builder*. This builder stores and allows you to mutate all the data related to a piece of UGC, including its files.
2. We then call `Publish()` on the builder to push all changes to the mod.io API.

Let's add a method that handles both steps:

```csharp
async Task UploadMod(string name, string summary, Texture2D logo, string path)
{
    Debug.Log($"Starting upload: {name}");
    
    var builder = Mod.Create();
    
    builder.SetName(name)
           .SetSummary(summary)
           .SetLogo(logo.GetRawTextureData())
               .EditModfile()
               .SetSourceDirectoryPath(path)
               .FinishModfile();
    
    (Error error, Mod mod) = await builder.Publish();
    
    if (error)
    {
        Debug.LogError($"Error uploading mod {name}: {error}");
        return;
    }
    else
    {
        Debug.Log($"Successfully created mod {mod.Name} with Id {mod.Id}");
    }
}
```

All that's left now is to feed some UGC to our brand new `UploadMod` method. After we test to see if any mods exist in `AddModsIfNone`, we will iterate our list of mods and upload them.

:::important
if you didn't generate dummy UGC in the previous section, modify the below to suit your UGC files.
:::

```csharp
async Task AddModsIfNone()
{
    // Return if any mods exist ...
    
    DummyModData[] mods =
    {
        // ...
    };
    
    foreach (DummyModData mod in mods)
    {
        await UploadMod(mod.name, mod.summary, mod.logo, mod.path);
        // Directory.Delete(mod.path, true); // Uncomment if you generated dummy mods
    }
}
```
When uploading UGC, the plugin expects a directory (for each piece of UGC) that it will compress before uploading. You do not need to zip your files before uploading.

That’s it! Enter Play mode now and, after authentication, the Unity console should come to life with the uploading of your UGC. If you're eager, you can view UGC as soon as they upload by going to your game's mod.io page and using the web interface.

## Next steps

Now your users can add UGC to your game via the plugin and API, the next step is to allow users to find UGC by implementing the [Searching for UGC Guide](/unity/searching-ugc).

If you've already done this, we recommend working your way through the [Unity Getting Started Guides](/unity#unity-core-plugin-guides) as they will teach you how to implement the fundamentals before moving on to explore our [Features](/features).