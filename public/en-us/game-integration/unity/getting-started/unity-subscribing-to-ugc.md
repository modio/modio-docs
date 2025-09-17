---
id: unity-subscribing
title: Subscribing to UGC
slug: /unity/subscribing
---

# Subscribing to UGC

So you've shown the user a variety of UGC, and now they need to pick one they'd like to install. Users do this by **subscribing** to specific UGC, which will then **install the UGC** onto all the devices that the user plays the game on. 

This guide covers:

* [Subscriptions](#subscriptions)
* [Installing UGC](#installing-ugc)
* [Using UGC](#using-ugc)

## Subscriptions

We're going to cover mod subscriptions in what will seem like a backward way. First, we'll learn how to get a list of our subscribed UGC, then we'll learn how to subscribe to a mod.

The reason we do it this way is because when a user authenticates, their subscriptions will be automatically synced with the mod.io plugin. All UGC retrieved from the mod.io API will be cached and updated with the most recent data, with the User's subscriptions updated and stored in `User.Current.ModRepository`.

This makes getting Subscribed UGC incredibly convenient as no requests need to be made:

```csharp
static Mod[] GetSubscribedMods() => User.Current.ModRepository.GetSubscribed().ToArray();
```

Getting the user's subscribed UGC first requires they be authenticated. This will be handled automatically when a user authenticates with mod.io. In order to know when everything has finished syncing, we'll want to wait until `User.Current.IsUpdating` comes back as false:

```csharp
async void OnAuth()
{
    // ...
    
    while (User.Current.IsUpdating)
        await Task.Yield();

    Mod[] subscribedMods = GetSubscribedMods();
    Debug.Log($"Subscribed mods:\n{(subscribedMods.Length > 0 ? string.Join("\n", subscribedMods.Select(mod => $"{mod.Name} (id: {mod.Id})")) : "None")}");
}
```

:::important
`sync()` will typically only be called automatically by the plugin on authentication. if you make any changes using the web interface, they won't be reflected in the mod.io plugin until this `sync()` runs. this method is available to you under `user.current.sync()`. however, this is an expensive method and it's recommended it be called as little as possible.
:::

Subscribing to UGC is very simple. We call the async method `mod.Subscribe()`. This method already contains checks for if you're already subscribed, short-cutting to the success result if so:

```csharp
async Task SubscribeToMod(Mod mod)
{
    var error = await mod.Subscribe();

    if (error)
    {
        Debug.LogError($"Error subscribing to {mod.Name}: {error}");
        return;
    }

    Debug.Log($"Subscribed to mod: {mod.Name}");
}
```

:::note
The web interface at your game's mod.io page can also be used to subscribe to UGC. However, you'll need to exit and enter play mode to see the changes, as `sync()` needs to be run to synchronise the local state.
:::

To test it out, in your `OnAuth()` method, after we log all subscribed UGC add the following line to subscribe to a random mod:

```csharp
async void OnAuth()
{
    // ...
       
    await SubscribeToMod(allMods[UnityEngine.Random.Range(0, allMods.Length - 1)]);
}
```

Enter Play mode and you should see one of the generated UGC appear in your "Subscribed UGC" log!

## Installing UGC

Now, the moment we've all been waiting for. Downloading, installing, updating, and deleting UGC are all handled automatically by the plugin. This behavior can be disabled using the `ModioSettings` you configured above.

In the following code we'll presume this has been disabled, so we can show how to activate &amp; deactivate it at will. We'll also leverage `ModInstallationManagement.ManagementEvents` to see the download progress:

```csharp
Mod currentDownload;
float downloadProgress;
float timeToProgressCheck = 1f;

void WakeUpModManagement()
{
    void HandleModManagementEvent(
        Mod mod, 
        Modfile modfile, 
        ModInstallationManagement.OperationType jobType, 
        ModInstallationManagement.OperationPhase jobPhase
    ){
        Debug.Log($"{jobType} {jobPhase}: {mod.Name}");

        switch (jobPhase)
        {
            case ModInstallationManagement.OperationPhase.Started
                when jobType is not ModInstallationManagement.OperationType.Uninstall:
                currentDownload = mod;
                break;

            case ModInstallationManagement.OperationPhase.Cancelled:
            case ModInstallationManagement.OperationPhase.Failed:
                currentDownload = null;
                break;
            
            case ModInstallationManagement.OperationPhase.Completed
                when jobType is not ModInstallationManagement.OperationType.Uninstall:
                Debug.Log($"Mod {mod.Name} installed at {mod.File.InstallLocation}");
                currentDownload = null;
                break;
            
            case ModInstallationManagement.OperationPhase.Completed:
                Debug.Log($"Mod {mod.Name} uninstalled");
                break;
    }
    
    ModInstallationManagement.ManagementEvents += HandleModManagementEvent;
}

void Update()
{
    if (currentDownload == null)
        return;

    timeToProgressCheck -= Time.deltaTime;

    if (timeToProgressCheck > 0)
        return;

    Debug.Log($"Downloading {currentDownload.Name}: [{Mathf.RoundToInt(currentDownload.File.FileStateProgress * 100)}%]");
    timeToProgressCheck += 1f;
}
```

In a real implementation, you'll likely track the `modId`'s download and install progress separately to display in your UI. But, this should give you an idea of what's possible with the mod management feature.

:::note
There are a number of mod management events available. See the [documentation](https://sdkdocs.mod.io/unity/) (or use code completion in your IDE) for a complete list.
:::

## Using UGC

We’re nearing the end now. You've [initialized](/unity/initialization). You've [authenticated](/unity/user-authentication). You've [uploaded](/unity/adding-UGC). You've [searched](/unity/searching-UGC). You've subscribed and installed. It's all led to this single question:

*"How do I find installed UGC?"*

The answer is very straight forward: `mod.File.InstallLocation`. Using this is as simple as expected, in the previous method lets move `OperationPhase.Completed` to its own case and print the install location to the console:

```csharp
case ModInstallationManagement.OperationPhase.Completed:
    Debug.Log($"Mod {mod.Name} installed at {mod.File.InstallLocation}");
    break;
```

In order to get a list of all installed UGC on the file system, we simply call `ModInstallationManagement.GetAllInstalledMods()`:

```csharp
async void OnAuth()
{
    // ...
       
    var installedMods = ModInstallationManagement.GetAllInstalledMods();
    Debug.Log($"Installed mods:\n{(installedMods.Count > 0 ? string.Join("\n", installedMods.Select(mod => $"{mod.Name} (id: {mod.Id})")) : "None")}");
}
```

We're currently logging each installed mod and the path to its files (`mod.File.InstallLocation`). However, *you* are only limited by how you want to utilize user-generated content. A mod's installation directory is exactly the same as when we uploaded it: uncompressed and ready for action.

One last thing to note, this will provide UGC installed by *any user* on the file system. This is to facilitate offline mod management so the user doesn't ever get stuck if they're offline. Use `installedMod.IsSubscribed()` to determine if the mod is subscribed to by the current authenticated user.

And that’s it, we’re done! The time has come to build a bridge to your creator community using mod.io.

Please join us on our [Discord server](https://discord.mod.io) if you have any questions or need some help.

## Complete class

:::note
You can also find the following class (along with an example scene) in `assets/plugins/modio/unity/example`.
:::

<details>

<summary><i>Click to expand</i></summary>

```csharp
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Modio;
using Modio.Authentication;
using Modio.Mods;
using Modio.Unity;
using Modio.Users;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;
using Random = System.Random;

public class ModioUnityExample : MonoBehaviour
{
    // Reusing a single byte-array is a small memory-conscious
    // optimization for when we are generating our dummy files.
    static readonly byte[] Megabyte = new byte[1024 * 1024];
    static readonly Random RandomBytes = new Random();

    [Header("Authentication")]
    [SerializeField] GameObject authContainer;
    [SerializeField] InputField authInput;
    [SerializeField] Button authRequest;
    [SerializeField] Button authSubmit;

    // Downloading images
    [Header("Random Mod")]
    [SerializeField] GameObject randomContainer;
    [SerializeField] Text randomName;
    [SerializeField] Image randomLogo;
    [SerializeField] Button randomButton;
    
    // Searching for mods
    Mod[] allMods;

    // Installing mods
    Mod currentDownload;
    float downloadProgress;
    float timeToProgressCheck = 1f;

    void Awake()
    {
        // This enforces email auth to be used, a higher priority can be used if needed
        ModioServices.Bind<IModioAuthPlatform>()
                          .FromInstance(new ModioEmailAuthPlatform(GetAuthCode));
        
        randomContainer.SetActive(false);
    }

#region Initialization

    void Start()
    {
        InitPlugin();
    }

    async Task InitPlugin()
    {
        Error error = await ModioClient.Init();

        if (error)
        {
            Debug.LogError($"Error initializing mod.io: {error}");
            return;
        }

        Debug.Log("mod.io plugin initialized");
        OnInit();
    }

    void OnInit()
    {
        if (User.Current.IsAuthenticated)
        {
            OnAuth();
            return;
        }

        // You can assign these using the Inspector if you prefer
        authRequest.onClick.AddListener(() => Authenticate());
    }

#endregion

#region Authentication

    async Task Authenticate()
    {
        Error error = await ModioClient.AuthPlatform.Authenticate(true, authInput.text);

        if (error)
        {
            Debug.LogError($"Error authenticating with email: {error}");
            return;
        }

        OnAuth();
    }

    async Task<string> GetAuthCode()
    {
        bool codeEntered = false;

        authSubmit.onClick.AddListener(() => codeEntered = true);
        
        while (!codeEntered)
            await Task.Yield();

        return authInput.text;
    }

    async void OnAuth()
    {
        Debug.Log($"Authenticated user: {User.Current.Profile.Username}");

        await AddModsIfNone();
        
        allMods = await GetAllMods();
        Debug.Log($"Available mods:\n{string.Join("\n", allMods.Select(mod => $"{mod.Name} (id: {mod.Id})"))}");
        
        randomButton.onClick.AddListener(SetRandomMod);
        randomContainer.SetActive(true);
        SetRandomMod();
        
        while (User.Current.IsUpdating)
            await Task.Yield();

        Mod[] subscribedMods = GetSubscribedMods();
        Debug.Log($"Subscribed mods:\n{(subscribedMods.Length > 0 ? string.Join("\n", subscribedMods.Select(mod => $"{mod.Name} (id: {mod.Id})")) : "None")}");

        await SubscribeToMod(allMods[UnityEngine.Random.Range(0, allMods.Length - 1)]);
        
        WakeUpModManagement();
    }

#endregion

#region Uploading Mods

    async Task AddModsIfNone()
    {
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

        DummyModData[] mods =
        {
            await GenerateDummyMod("Cool Weapon", "A really cool weapon.", "24466B", "FDA576", 10),
            await GenerateDummyMod( "Funny Sound Pack", "You'll laugh a lot using this.", "B85675", "633E63", 50),
            await GenerateDummyMod("Klingon Language Pack", "tlhIngan Hol Dajatlh'a'?", "93681C", "FFEAD0", 1),
            await GenerateDummyMod( "Ten New Missions", "Ported from the sequel to the prequel!", "FDA576", "D45B7A", 99),
        };
        
        foreach (DummyModData mod in mods)
        {
            await UploadMod(mod.name, mod.summary, mod.logo, mod.path);
            // Directory.Delete(mod.path, true); // Uncomment if you generated dummy mods
        }
    }

    async Task UploadMod(string modName, string summary, Texture2D logo, string path)
    {
        Debug.Log($"Starting upload: {modName}");
    
        var builder = Mod.Create();
    
        builder.SetName(modName)
               .SetSummary(summary)
               .SetLogo(logo.GetRawTextureData())
               .EditModfile()
               .SetSourceDirectoryPath(path)
               .FinishModfile();
    
        (Error error, Mod mod) = await builder.Publish();
    
        if (error)
        {
            Debug.LogError($"Error uploading mod {modName}: {error}");
            return;
        }

        Debug.Log($"Successfully created mod {mod.Name} with Id {mod.Id}");
    }

#endregion

#region Searching for Mods

    async Task<Mod[]> GetAllMods()
    {
        (Error error, ModioPage<Mod> page) = await Mod.GetMods(new ModSearchFilter());
        if (error)
        {
            Debug.LogError($"Error getting mods: {error}");
            return Array.Empty<Mod>();
        }

        return page.Data;
    }

#endregion

#region Downloading Images

    async void SetRandomMod()
    {
        Mod mod = allMods[UnityEngine.Random.Range(0, allMods.Length - 1)];
        
        randomName.text = mod.Name;

        (Error error, Texture2D texture) = await mod.Logo.DownloadAsTexture2D(Mod.LogoResolution.X320_Y180);

        if (error)
        {
            Debug.LogError($"Error downloading {mod.Name}'s logo: {error}");
            return;
        }
        
        randomLogo.sprite = Sprite.Create(texture, new Rect(0, 0, texture.width, texture.height), Vector2.zero);
    }

#endregion

#region Subscribing to Mods

    static Mod[] GetSubscribedMods() => User.Current.ModRepository.GetSubscribed().ToArray();

    async Task SubscribeToMod(Mod mod)
    {
        var error = await mod.Subscribe();

        if (error)
        {
            Debug.LogError($"Error subscribing to {mod.Name}: {error}");
            return;
        }
        
        Debug.Log($"Subscribed to mod: {mod.Name}");
    }

#endregion

#region Installing Mods

    void WakeUpModManagement()
    {
        void HandleModManagementEvent(
            Mod mod, 
            Modfile modfile, 
            ModInstallationManagement.OperationType jobType, 
            ModInstallationManagement.OperationPhase jobPhase
        ){
            Debug.Log($"{jobType} {jobPhase}: {mod.Name}");

            switch (jobPhase)
            {
                case ModInstallationManagement.OperationPhase.Started
                    when jobType is not ModInstallationManagement.OperationType.Uninstall:
                    currentDownload = mod;
                    break;

                case ModInstallationManagement.OperationPhase.Cancelled:
                case ModInstallationManagement.OperationPhase.Failed:
                    currentDownload = null;
                    break;
                
                case ModInstallationManagement.OperationPhase.Completed
                    when jobType is not ModInstallationManagement.OperationType.Uninstall:
                    Debug.Log($"Mod {mod.Name} installed at {mod.File.InstallLocation}");
                    currentDownload = null;
                    break;
                
                case ModInstallationManagement.OperationPhase.Completed:
                    Debug.Log($"Mod {mod.Name} uninstalled");
                    break;
            }
        }
        
        ModInstallationManagement.ManagementEvents += HandleModManagementEvent;
    }

    void Update()
    {
        if (currentDownload == null)
            return;

        timeToProgressCheck -= Time.deltaTime;

        if (timeToProgressCheck > 0)
            return;

        Debug.Log($"Downloading {currentDownload.Name}: [{Mathf.RoundToInt(currentDownload.File.FileStateProgress * 100)}%]");
        timeToProgressCheck += 1f;
    }

#endregion

#region Generate Dummy Mods

    async Task<DummyModData> GenerateDummyMod(
        string dummyName,
        string summary,
        string backgroundColor,
        string textColor,
        int megabytes
    )
    {
        Debug.Log($"Writing temporary mod file: {dummyName}");

        string path = Path.Combine(Application.dataPath, $"../_temp_dummy_mods/{dummyName}");
        Directory.CreateDirectory(path);

        using (FileStream fs = File.OpenWrite(Path.Combine(path, $"{dummyName}.dummy")))
        {
            for (int i = 0; i < megabytes; i++)
            {
                RandomBytes.NextBytes(Megabyte);
                await fs.WriteAsync(Megabyte, 0, Megabyte.Length);
            }
        }

        return new DummyModData(
            dummyName,
            summary,
            await GenerateLogo(dummyName.Replace(' ', '+'), backgroundColor, textColor),
            path
        );
    }

    // Uses a third-party API to generate a logo for each
    // mod, adding some variety when we display them later
    async Task<Texture2D> GenerateLogo(string text, string backgroundColor, string textColor)
    {
        UnityWebRequest request = UnityWebRequestTexture.GetTexture(
            $"https://placehold.co/512x288/{backgroundColor}/{textColor}.png?text={text}"
        );

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

#endregion
}

```

</details>

## Next steps

Congratulations! You have completed all the [Unity Getting Started Guides](/unity#unity-core-plugin-guides)! Your Unity game should now be equipped with mod.io's core UGC functionally.

The time's come to customize your game by exploring our [Features](https://docs.mod.io/features) section. Here you can select features that meet your game's needs and elevate your UGC experience.

You can also learn more about UGC and loading methods in our [UGC Best Practices Guide](/unity/ugc-best-practices).