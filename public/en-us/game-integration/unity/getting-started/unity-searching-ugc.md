---
id: unity-searching-ugc
title: Searching for UGC
slug: /unity/searching-ugc
custom_edit_url: https://github.com/modio/modio-unity-internal/tree/main/docs/public/getting-started/unity-searching-ugc.md
---

# Searching for UGC

So you've activated the ability to add UGC, now you'll want to give users a way to find it. Searching for UGC is a simple task, especially as it's revisiting a previous step from the [Adding UGC Guide](/unity/adding-ugc). 

This guide covers:

* [Searching with GetMods](#searching-with-getmods)
* [Search filters](#search-filters)
* [Downloading images](#downloading-images)

## Searching with GetMods

To get a list of all<sup>1</sup> available UGC you can use the `GetMods` method:

```csharp
using System; // Add this to the top of your class

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
```


A *mod* is a read-only mutable representation of the state of any given UGC. It will be updated by the mod.io plugin whenever new data for that piece of UGC is received. Each mod can be listened to for any changes so UI elements can be updated accordingly. 

In order to edit UGC, call `edit` on the UGC instance you want to modify, which will provide a `modbuilder` class in edit mode.

If we add the above to our example class, and then head back up to our `OnAuth` method we can quickly log a list of all<sup>1</sup> of our available UGC:

```csharp
using System.Linq; // Add this to the top of your class

ModProfile[] allMods;

async void OnAuth()
{
    // ...
    
    allMods = await GetAllMods();
    Debug.Log($"Available mods:\n{string.Join("\n", allMods.Select(mod => $"{mod.Name} (id: {mod.Id})"))}");
}
```

:::note
We write *all<sup>1</sup>* as using the default *UGC search filter* settings will return all of *your* UGC, which at this stage you don't have much of.
:::

## Search filters

The maximum number of results returned can be set in the search filter using its `SetPageSize()` method. However, the default value of 100 is also the limit. In order to return later results, you can use the search filter's `SetPageIndex()` method.

This is fairly simple in practice and is explained best with the following snippet:

```csharp
var searchFilter = new ModSearchFilter();
searchFilter.SetPageSize(10);
searchFilter.SetPageIndex(0); // Will return results 1-10
searchFilter.SetPageIndex(1); // Will return results 11-20
searchFilter.SetPageIndex(2); // Will return results 21-30

// You can also set pageIndex and pageSize using the constructor
new ModSearchFilter(0, 10); // Will return results 1-10
new ModSearchFilter(1, 10); // Will return results 11-20
new ModSearchFilter(2, 10); // Will return results 21-30
```

:::note
UGC search filters have a number of options for filtering and ordering your results. See the [documentation](/unity) (or use code completion in your IDE) for its available options.
:::
> If you're looking for more granular filtering, check out the `ModioAPI.Mods.GetModsFilter` class.

## Downloading images

More specifically: downloading a piece of *UGC's* images. We'll cover subscribing to and installing UGC soon.

A common feature when listing mods is to display an image along with its name and summary. Metadata images such as logos, screenshots, and avatars don't require subscribing to a mod to view them, and can be downloaded separately from a mod's in-game files.

As we know, [all pieces of UGC have a logo](/unity/adding-ugc). So let's write a short method that selects a random mod, downloads its logo and displays it alongside its name:

```csharp
[SerializeField] Text randomName;
[SerializeField] Image randomLogo;

async void SetRandomMod()
{
    Mod mod = allMods[UnityEngine.Random.Range(0, allMods.Length - 1)];

    randomName.text = mod.name;
    
    (Error error, Texture2D texture) = await mod.Logo.DownloadAsTexture2D(Mod.LogoResolution.X320_Y180);

    if (error)
    {
        Debug.LogError($"Error downloading {mod.Name}'s logo: {error}");
        return;
    }
    
    randomLogo.sprite = Sprite.Create(texture, new Rect(0, 0, texture.width, texture.height), Vector2.zero);
}
```

:::warning
The code above relies on `allmods`, which is set in the first [searching with get mods](#searching-with-getmods) section. **Ensure that `allmods` has been set before running this method.**
:::

This method is downloading the smallest version of the logo, `320x180`. However, UGC have a number of sizes for each image as defined in `Mod.LogoResolution` &amp; `Mod.GalleryResolution`. See the [documentation](/unity/cs-ref) (or use code completion in your IDE) to view available options.

## Next steps

Now your users can add and search for UGC, it's time to set up the ability to subscribe to and download UGC by implementing the [Subscribing to UGC Guide](/unity/subscribing).

If you've already done this, we recommend working your way through the [Unity Getting Started Guides](/unity#unity-core-plugin-guides) as they will teach you how to implement the fundamentals before moving onto exploring our [Features](/features).