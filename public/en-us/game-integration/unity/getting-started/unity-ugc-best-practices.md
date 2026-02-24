---
id: unity-ugc-best-practices
title: UGC Best Practices
slug: /unity/ugc-best-practices
custom_edit_url: https://github.com/modio/modio-unity-internal/tree/main/docs/public/getting-started/unity-ugc-best-practices.md
---

# UGC Best Practices

## Introduction
To integrate user-generated content into your game, you'll need to get a handle on the right tools and practices for the job. 

This guide will help you understand how UGC works within Unity games and will take you through:

* [Content approaches](#content-approaches)
* [Packaging UGC](#packaging-ugc)
* [Loading UGC](#loading-ugc)
* [Creation tools](#creation-tools)
* [Best practices](#best-practices)
* [Contacts](#contacts)

## Content approaches
For the purposes of integrating UGC into your Unity game, there are three approaches we can take, each with their own pros (**++**) and cons (**--**).

### Generic data types
Generic Data Types are files (such as JSON or XML) which contain pieces of game data to be loaded by a custom solution into the game state. For most UGC cases, it’s not recommended to choose this approach.

**++** Simple to set up  
**--** Additional work needed to translate files into game data  
**--** Scene dependent loading  
**--** Greatly limits the kinds of UGC Creators can make  
    
### Asset bundles
Asset Bundles are how Unity packages up and loads Unity serialised data. It can contain both Unity data (such as Prefabs with Serialized References) and generic data types making it best for sharing UGC between Unity games. This is the most common approach to UGC loading in Unity and is recommended for most use cases. It is particularly useful for cases where Creators are making UGC which use Unity-specific data though is most effective when the volume of content the game has to manage is reasonable.

**++** Supports native Unity content  
**++** Dynamically load and unload content  
**++** Relatively simple to use  
**++** Performant  
**--** Somewhat inflexible, limited functionality  
**--** Limited tools to manage multiple Bundles

### Addressables *(recommended)*
Addressables are a wrapper API around Asset Bundles, providing a native solution to manage, organise, load & unload content on demand. All of which can be interfaced with asynchronously to reduce burden on the game/main thread. It is the most comprehensive content management solution that Unity has to offer, maximising performance and extensibility at the cost of a more complex integration being required in the consuming game. This additional burden on the game developer is easily offset by the benefits that it provides, particularly for complex games that support large volumes of UGC to be managed and loaded without consuming an unreasonable amount of system resources from players’ machines.

**++** Most performant option  
**++** Supports native Unity data  
**++** Dynamically load and unload content  
**++** Flexible  
**++** Extensive tooling & profiling  
**--** Complex integration, requiring significant effort
    
### Data volume & complexity
When considering UGC loading approaches within Unity, you should consider both the volume and the complexity of the content being loaded. These can be considered with three levels each. Both figures represent an **average** for what a single piece of UGC will contain.

| File Size      | Volume |
|----------------|--------|
| < 1 MB - 10 MB | Low    |
| 10 MB - 100 MB | Med    |
| 100 MB - 1 GB+ | High   |

| Data Types | Complexity | Nature                                                                                                                                                                         |
|------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 - 2      | Low        | One to two types of files, such as a JSON or 2D texture.                                                                                                                       |
| 2 - 7      | Med        | Multiple files/data types used, such as Normal/Bump/Mipmaps alongside a texture, model and animation, or prefabs for multiple different smaller pieces of content.             |
| 7+         | High       | Lots of data types involving modifying a significant portion of content within the core game. Many different files may be created/stored to allow for extensive modifications. |

You can use the below table to quickly determine which approach would be the most appropriate for your use case:

|        |        |                    |               | Complexity    |
|--------|--------|--------------------|---------------|---------------|
|        |        | Low                | Medium        | High          |
|        | Low    | Generic Data Types | Asset Bundles | Asset Bundles |
|        | Medium | Asset Bundles      | Asset Bundles | Addressables  |
| Volume | High   | Asset Bundles      | Addressables  | Addressables  |

While these tables are designed to make it easier to determine an approach, they are loose guidelines and the exact details of your implementation will ultimately determine the best approach. If you need assistance with deciding, please reach out to your mod.io contact to assist you in selecting the best solution for your game.

## Packaging UGC

### Generic data types
If you are using generic data types for your UGC, then no additional work is needed to be able to package and distribute the content. When you use the mod.io Plugin or tools to submit UGC, the folder containing all of the content is zipped for you before uploading, and extracted once the file is downloaded.

### Asset bundles
With Asset Bundles, additional work is required for bundling up UGC assets into a bundle. Once the Asset Bundle is created, no additional work is needed as mod.io will simply zip up the folder before uploading.
To create an Asset Bundle, simply call:


```C#
BuildPipeline.BuildAssetBundles(string outputDirectory,
AssetBundleBuild[] bundles,
BuildAssetBundleOptions.None,
BuildTarget.StandaloneWindows);
```
The largest concern when it comes to using Asset Bundles, is that they need to be built for each target platform. With console SDKs being protected by NDAs, creators would not be able to build their mods for those platforms. Please see the Cloud Cooking section for information on how we can help you solve this.

### Addressables
There are a few options for building content when using Addressables. The most effective option is to use  the Build Scripting methods to automate the content building. You can directly invoke the build process, passing in the assets and target platform making it trivial to wrap that functionality in a custom editor tool.

Addressables also introduces the Labels feature. This is a powerful feature which allows assets to be grouped  under 1 or more labels, Assets can be loaded dynamically by label, which is an  effective method of organising various different types of content. A good use of labels will greatly simplify loading the content later on.

As this system still uses Asset Bundles, these bundles still need to be built for each platform, including platforms creators will not have SDK access to, preventing them from building for those platforms. Please see the Cloud Cooking section for information on how we can help you solve this.

## Loading UGC

### Generic data types
Unity doesn’t provide an easy or effective way to load assets from outside of Unity’s resources folder. In order to load assets using this approach you’ll have to use your own file I/O methods to load the files into your game.

### Asset bundles
Asset Bundles, being built-in to Unity, have a simple method of being loaded from anywhere in the user’s file system:

```C#
string filePath = Application. + "/AssetBundles/Windows/";
AssetBundle theBundle = AssetBundle.LoadFromFile(AssetBundlePath + "objectsbundle1");
GameObject[] allObjectsBundle1Prefabs = theBundle.LoadAllAssets<GameObject>();
```

They can be unloaded in the same fashion too, giving you a lot of control over them. However finer controls, such as dynamic loading and unloading, especially asynchronous, is much better achieved using the Addressables system as detailed below.

### Addressables

Loading content with Addressables will require a bit more set up than Asset Bundles. We need to start by implementing the interface IResourceLocation. IResourceLocation requires methods to get asset keys and load the asset. You’ll want to make the implementation of IResourceLocation take in a directory argument, so you can make multiple for each piece of UGC installed.

:::note
It is important to keep these IResourceLocations separate, if you have a single resource location to represent the entire UGC installation directory, it’s highly likely duplicate assets will emerge, breaking UGC compatibility.
:::

Once a ResourceLocation has been created you can add it to the Content Catalog during run-time, this will allow you to load the assets inside according to their:<br></br>
- Address: A string containing the address you assigned to the asset.
- Label: A string containing a label assigned to one or more assets.

Alternatively, you can manage the IResourceLocation instances yourself. They can be invoked to load the assets programmatically. This is the simplest way, but unlike Catalogs will not resolve conflicts gracefully.

:::note
An important consideration in your implementation are shaders. Creators will have to recompile shaders resulting in duplicate dependencies and resources used. It’s highly recommended when adopting this approach to develop a method of “sharing” these shaders and other similar assets to avoid this problem.
:::

## Creation tools

### Generic file editing
This requires no work at all. Files such as JSON files can be easily edited in a text editor, or textures could be edited in an image editor. While this is the simplest and most direct method of modifying assets, it’s incredibly limited in what can be done.

*Example: Mana Game’s Tennis Elbow 4 utilises generic file editing to allow for extensive modding to in-game assets such as textures, models and even animations. These are bundled into zip files with a JSON manifest file included, and built into asset bundles when loaded by the game to be platform agnostic UGC.*

### In-game modding
 can be considered akin to an in-game level editor. While not directly modifying the games assets, this method allows for a great amount of control by you in the kinds of content that can be created. However, a separate solution would likely need to be created for each kind of content which can quickly add a lot more work to your project, while still only providing a very limited platform for creators to mod with.

*Example: Apogee Entertainment’s Quest Master uses an in-game level editor to allow creators to make their own levels and upload them through mod.io. These levels are stored as JSON files which provide all the details necessary to load the level in-game.*

### Vanilla Unity Editor
This will also not require any additional work, though again will be very limited in the kinds of content that can be created. Models with detailed animations, textures and even custom scripting with behaviours which interact with the Unity API are possible here, but this can often become incongruous to the actual game. Without any tools, creators will likely devise their own solutions using this method, likely to great success but without any of your control.

*Example: Mash Games’ BMX Streets utilises the vanilla Unity editor to create assets for the game. Using this method creators have been able to create custom levels, character and item skins. Creators package their content into Asset Bundles and then upload them to mod.io servers.*

### Unity Editor with Toolkit
This is the most recommended approach for providing creators tools to make UGC with. By providing a custom SDK/Toolkit with which they can interact with your project’s assets, a lot of potential can be unlocked here, depending entirely on the toolkit. We highly recommend this method, as it gives you exceptional control over the kinds of content that can be created without limiting creators much. Think of this as the comfortable middle-ground. Great, creative UGC can be created and likely aren’t going to escape the bounds of your game. If you’re planning on releasing on console, we recommend this approach.

*Example: Omnifarious Studio's Project Demigod has a custom toolkit to connect to a creator’s Unity Editor which allows them to edit assets, allowing creators to make avatars, maps and enemy skins. Since this game isn’t on console, the toolkit packages up the assets into an Asset Bundle to be loaded with the Addressables system.*

### Unity Editor with Toolkit & script-level API
:::warning
This will likely breach console compliance, as on those platforms scripting is only permitted when heavily sandboxed.
:::

This is definitively the ultimate modding experience. If your priority is giving power to creators, this option will maximise that power, but will also require the most work out of all these options. If you’ve already been developing your game with modding in mind, then likely this won’t be difficult as the script-level API should simply be the same API which you yourselves use to add content to the game.

There are a few techniques in architecting your game which can make it far easier for creators to make larger and more meaningful UGC:
- Global event bus to expose game behaviours as they’re happening and allow them to be mutated by creators.
- Cached content registries to track references to allow UGC to interact with each other, especially powerful when complimented by the above event bus.
- Lower level APIs (such as for file reading/writing), enabling creators to more safely perform low level operations within confines defined by you.
- Public properties on game objects with validation in the get & set methods for stability and cross-UGC compatibility. Combined with event buses, when a property changes an event can fire, allowing other UGC to interact with the state change.

*Example: WarpFrog’s Blade & Sorcery, a VR game. They designed their game from the ground up with modding in mind. They have their own public SDK which allows creators to make UGC that hook directly into the game’s code, enabling creators to make very distinct and in depth mods which can even be combined to complement each other in large UGC-packs. To make the loading process easier, they include a JSON manifest in each piece of UGC to tell the game how to load the UGC.*

## Best practices

### Console SKU considerations
In the case of consoles the platform SDKs are required to build Asset Bundles for their platforms. These are subject to First Party approvals and aren’t available to UGC creators. In order to resolve this access issue, the following options are recommended:

### Generic data types
While Asset Bundles have to be built per platform, Generic Data Types don’t need to be. You can manually load these data types using file IO operations to then integrate them into the game. The main limitation of this is Unity serialised types are not supported, limiting how deeply these kinds of UGC can integrate into your project.

### Cloud Cooking
Cloud Cooking is the most common solution to this problem, which at a high level looks like:
- One or many headless instances of your editor run in the cloud, which can have any required NDA SDKs etc. installed.
- Files are uploaded from end-users via an API/online service.
- They're "cooked", and files compatible with each target platform are returned.

Cloud cooking can be achieved with Web Hooks connected to our Rules Based Moderation system. When a file is uploaded to your mod.io game it can be automatically sent off to your own cooking solution. Please reach out to us for any help setting this up.

In the future, we’re looking to develop our own premium solution. Feel free to ask for updates on this solution as it’s developed.

### Dos and dont's

The following examples demonstrate best practice to maintain console compliance, and the best user experience with regards to frequency of use and consumption.
We recommend considering a console compliant approach even if your primary SKUs are not console.

*Enable & Disable*
- **Do** - utilise mod.io functionality which allows the game to sync UGC collection on a subscribe function, checking the player’s collection and providing the means to enable and disable UGC for a play session.
- **Don't** - rely on exiting and restarting the application to enable UGC subscribed to by a player

*File Override*
- **Do** - load content dynamically using UserInstalledMod’s directory field to get the paths for each piece of content the user has installed.
- **Don't** - rely on the engine's auto-loading behaviour, or leveraging the Mods directory, to load content. These directories are not accessible on consoles, and presents additional challenges around file locking for uninstalling and updating content.

*File Size*
- **Do** - include your storage requests and forecasts in planning. Understanding how many pieces of content a First Party storage submission can hold is part of your success planning for UGC. Negotiating storage is on a per platform basis, mod.io can assist with similar titles and content types to benchmark.

*File Layout*
- **Do** - include a custom manifest file with each piece of UGC which tells your project how that piece of UGC organises its different pieces of content. It’s recommended this is generated by your tooling when packaging/uploading each piece of UGC.
- **Don't** - use long directory and file names or lots of nested directories. There’s character limits on file paths and consoles have limits on directory nesting, potentially creating errors.

### Example Unity games

- [House Flipper 2](https://mod.io/g/hf2): PC and consoles, with in-game UGC creation
- [Two Point Campus](https://mod.io/g/twopointcampus): PC and consoles, with external UGC creation
- [Blade & Sorcery](https://mod.io/g/blade-and-sorcery): VR
- [Fun with Ragdolls](https://mod.io/g/funwithragdolls): The Game: mobile (iOS and Steam)

## Contacts
For any further enquiries, please contact developers@mod.io.
