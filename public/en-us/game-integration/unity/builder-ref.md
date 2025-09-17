---
id: unity-builder-ref
title: Builder
slug: /unity/builder-ref
sidebar_position: 3
---

## Modio.Mods.Builder

| Type | Description |
|------|-------------|
| [`ModBuilder`](#Modio.Mods.Builder.ModBuilder) | A programmatic interface for Creating a new [`Mod`](#Modio.Mods.Mod). This class will handle all the publishing tasks that need to be performed intelligently, minimizing the amount of requests made. |
| [`ModfileBuilder`](#Modio.Mods.Builder.ModfileBuilder) |  |

### ModBuilder{#Modio.Mods.Builder.ModBuilder}

```csharp
public class ModBuilder
```
A programmatic interface for Creating a new [`Mod`](#Modio.Mods.Mod). This class will handle all the publishing
tasks that need to be performed intelligently, minimizing the amount of requests made.

###### Remarks

When editing a mod these properties will not be populated: [`LogoFilePath`](#Modio.Mods.Builder.ModBuilder.LogoFilePath),
[`GalleryFilePaths`](#Modio.Mods.Builder.ModBuilder.GalleryFilePaths), [`LogoFilePath`](#Modio.Mods.Builder.ModBuilder.LogoFilePath)


###### Property


#### `List Results`

```csharp
public List<(ChangeFlags, Error)> Results
```

Produces a list of Tuples with each published change &amp; their corresponding result.


#### `string Name`

```csharp
public string Name
```
`get`


#### `string Summary`

```csharp
public string Summary
```
`get`


#### `string Description`

```csharp
public string Description
```
`get`


#### `string LogoFilePath`

```csharp
public string LogoFilePath
```
`get`


#### `string GalleryFilePaths`

```csharp
public string[] GalleryFilePaths
```
`get`


#### `string Tags`

```csharp
public string[] Tags
```
`get`


#### `string MetadataBlob`

```csharp
public string MetadataBlob
```
`get`


#### `Dictionary MetadataKvps`

```csharp
public Dictionary<string, string> MetadataKvps
```
`get`


#### `List Dependencies`

```csharp
public List<long> Dependencies
```
`get`


#### `bool Visible`

```csharp
public bool Visible
```
`get`


#### [`ModMaturityOptions`](#Modio.Mods.ModMaturityOptions) `MaturityOptions`

```csharp
public ModMaturityOptions MaturityOptions
```
`get`


#### [`ModCommunityOptions`](#Modio.Mods.ModCommunityOptions) `CommunityOptions`

```csharp
public ModCommunityOptions CommunityOptions
```
`get`


#### `bool IsMonetized`

```csharp
public bool IsMonetized
```
`get`


#### `bool IsLimitedStock`

```csharp
public bool IsLimitedStock
```
`get`


#### `int Price`

```csharp
public int Price
```
`get`


#### `int Stock`

```csharp
public int Stock
```
`get`


#### `bool IsEditMode`

```csharp
public bool IsEditMode
```



#### [`Mod`](#Modio.Mods.Mod) `EditTarget`

```csharp
public Mod EditTarget
```
`get`


###### Method


#### SetName{#Modio.Mods.Builder.ModBuilder.SetName}

```csharp
public ModBuilder SetName(string name)
```


#### SetSummary{#Modio.Mods.Builder.ModBuilder.SetSummary}

```csharp
public ModBuilder SetSummary(string summary)
```


#### SetDescription{#Modio.Mods.Builder.ModBuilder.SetDescription}

```csharp
public ModBuilder SetDescription(string description)
```


#### SetTags{#Modio.Mods.Builder.ModBuilder.SetTags}

```csharp
public ModBuilder SetTags(ICollection<string> tags)
```

###### Remarks

This will overwrite all tags on the mod.


#### SetTags{#Modio.Mods.Builder.ModBuilder.SetTags}

```csharp
public ModBuilder SetTags(string tag)
```

###### Remarks

This will overwrite all tags on the mod.


#### AppendTags{#Modio.Mods.Builder.ModBuilder.AppendTags}

```csharp
public ModBuilder AppendTags(ICollection<string> tags)
```


#### AppendTags{#Modio.Mods.Builder.ModBuilder.AppendTags}

```csharp
public ModBuilder AppendTags(string tag)
```


#### SetMetadataBlob{#Modio.Mods.Builder.ModBuilder.SetMetadataBlob}

```csharp
public ModBuilder SetMetadataBlob(string data)
```


#### AppendMetadataBlob{#Modio.Mods.Builder.ModBuilder.AppendMetadataBlob}

```csharp
public ModBuilder AppendMetadataBlob(string data)
```


#### SetMetadataKvps{#Modio.Mods.Builder.ModBuilder.SetMetadataKvps}

```csharp
public ModBuilder SetMetadataKvps(Dictionary<string, string> kvps)
```

###### Remarks

This will overwrite any Key entered with the corresponding value.


#### SetLogo{#Modio.Mods.Builder.ModBuilder.SetLogo}

```csharp
public ModBuilder SetLogo(string logoFilePath)
```


#### SetLogo{#Modio.Mods.Builder.ModBuilder.SetLogo}

```csharp
public ModBuilder SetLogo(byte[] imageData, ImageFormat format)
```


#### SetGallery{#Modio.Mods.Builder.ModBuilder.SetGallery}

```csharp
public ModBuilder SetGallery(ICollection<string> galleryImageFilePaths)
```

###### Remarks

Will overwrite existing gallery images.


#### SetGallery{#Modio.Mods.Builder.ModBuilder.SetGallery}

```csharp
public ModBuilder SetGallery(string galleryImageFilePath)
```

###### Remarks

Will overwrite existing gallery images.


#### AppendGallery{#Modio.Mods.Builder.ModBuilder.AppendGallery}

```csharp
public ModBuilder AppendGallery(ICollection<string> galleryImageFilePaths)
```


#### AppendGallery{#Modio.Mods.Builder.ModBuilder.AppendGallery}

```csharp
public ModBuilder AppendGallery(string galleryImageFilePath)
```


#### SetDependencies{#Modio.Mods.Builder.ModBuilder.SetDependencies}

```csharp
public ModBuilder SetDependencies(ICollection<long> dependencies)
```

###### Remarks

Will overwrite existing dependencies.


#### SetDependencies{#Modio.Mods.Builder.ModBuilder.SetDependencies}

```csharp
public ModBuilder SetDependencies(long dependency)
```

###### Remarks

Will overwrite existing dependencies.


#### AppendDependencies{#Modio.Mods.Builder.ModBuilder.AppendDependencies}

```csharp
public ModBuilder AppendDependencies(ICollection<long> dependencies)
```


#### AppendDependencies{#Modio.Mods.Builder.ModBuilder.AppendDependencies}

```csharp
public ModBuilder AppendDependencies(long dependency)
```


#### EditModfile{#Modio.Mods.Builder.ModBuilder.EditModfile}

```csharp
public ModfileBuilder EditModfile()
```


#### SetVisible{#Modio.Mods.Builder.ModBuilder.SetVisible}

```csharp
public ModBuilder SetVisible(bool isVisible)
```


#### SetMaturityOptions{#Modio.Mods.Builder.ModBuilder.SetMaturityOptions}

```csharp
public ModBuilder SetMaturityOptions(ModMaturityOptions maturityOptions)
```


#### OverwriteMaturityOptions{#Modio.Mods.Builder.ModBuilder.OverwriteMaturityOptions}

```csharp
public ModBuilder OverwriteMaturityOptions(ModMaturityOptions maturityOptions)
```


#### SetCommunityOptions{#Modio.Mods.Builder.ModBuilder.SetCommunityOptions}

```csharp
public ModBuilder SetCommunityOptions(ModCommunityOptions communityOptions)
```


#### OverwriteCommunityOptions{#Modio.Mods.Builder.ModBuilder.OverwriteCommunityOptions}

```csharp
public ModBuilder OverwriteCommunityOptions(ModCommunityOptions communityOptions)
```


#### SetMonetized{#Modio.Mods.Builder.ModBuilder.SetMonetized}

```csharp
public ModBuilder SetMonetized(bool isMonetized)
```


#### SetPrice{#Modio.Mods.Builder.ModBuilder.SetPrice}

```csharp
public ModBuilder SetPrice(int price)
```


#### SetLimitedStock{#Modio.Mods.Builder.ModBuilder.SetLimitedStock}

```csharp
public ModBuilder SetLimitedStock(bool isLimitedStock)
```


#### SetStockAmount{#Modio.Mods.Builder.ModBuilder.SetStockAmount}

```csharp
public ModBuilder SetStockAmount(int stockAmount)
```


#### Publish{#Modio.Mods.Builder.ModBuilder.Publish}

```csharp
public async Task<(Error error, Mod mod)> Publish()
```
Publishes the changes to the mod.io API.

###### Remarks

Will use `ModioAPI.Mods.AddMod` or `ModioAPI.Mods.EditMod` to publish
changes, then process the remaining data as separate publish tasks.

###### Returns

`Error.None` if the initial request succeeds. Use [`Results`](#Modio.Mods.Builder.ModBuilder.Results) to inspect the results
of each publish task.


#### ArchiveMod{#Modio.Mods.Builder.ModBuilder.ArchiveMod}

```csharp
public async Task<Error> ArchiveMod()
```

Delete a mod on the mod.io backend. Note that this puts it into
an 'archived' state, and mods can only be permanently deleted
from the mod.io website


___

### ModfileBuilder{#Modio.Mods.Builder.ModfileBuilder}

```csharp
public class ModfileBuilder
```


###### Property


#### `string FilePath`

```csharp
public string FilePath
```
`get`


#### `string Version`

```csharp
public string Version
```
`get`


#### `string ChangeLog`

```csharp
public string ChangeLog
```
`get`


#### `string MetadataBlob`

```csharp
public string MetadataBlob
```
`get`


#### [`Platform`](#Modio.Mods.Builder.ModfileBuilder.Platform) `Platforms`

```csharp
public Platform[] Platforms
```
`get`


###### Method


#### SetSourceDirectoryPath{#Modio.Mods.Builder.ModfileBuilder.SetSourceDirectoryPath}

```csharp
public ModfileBuilder SetSourceDirectoryPath(string filePath)
```

###### Remarks

This should be a directory


#### SetVersion{#Modio.Mods.Builder.ModfileBuilder.SetVersion}

```csharp
public ModfileBuilder SetVersion(string version)
```


#### SetChangelog{#Modio.Mods.Builder.ModfileBuilder.SetChangelog}

```csharp
public ModfileBuilder SetChangelog(string changelog)
```


#### SetMetadataBlob{#Modio.Mods.Builder.ModfileBuilder.SetMetadataBlob}

```csharp
public ModfileBuilder SetMetadataBlob(string metadataBlob)
```


#### SetPlatform{#Modio.Mods.Builder.ModfileBuilder.SetPlatform}

```csharp
public ModfileBuilder SetPlatform(Platform platform)
```

###### Remarks

This will overwrite all platforms on this modfile.


#### SetPlatforms{#Modio.Mods.Builder.ModfileBuilder.SetPlatforms}

```csharp
public ModfileBuilder SetPlatforms(ICollection<Platform> platforms)
```

###### Remarks

This will overwrite all platforms on this modfile.


#### SetPlatforms{#Modio.Mods.Builder.ModfileBuilder.SetPlatforms}

```csharp
public ModfileBuilder SetPlatforms(params Platform[] platforms)
```

###### Remarks

This will overwrite all platforms on this modfile.


#### AppendPlatform{#Modio.Mods.Builder.ModfileBuilder.AppendPlatform}

```csharp
public ModfileBuilder AppendPlatform(Platform platform)
```


#### AppendPlatforms{#Modio.Mods.Builder.ModfileBuilder.AppendPlatforms}

```csharp
public ModfileBuilder AppendPlatforms(ICollection<Platform> platforms)
```


#### FinishModfile{#Modio.Mods.Builder.ModfileBuilder.FinishModfile}

```csharp
public ModBuilder FinishModfile()
```


###### Enum

```csharp
Windows
```

```csharp
Mac
```

```csharp
Linux
```

```csharp
Android
```

```csharp
IOS
```

```csharp
XboxOne
```

```csharp
XboxSeriesX
```

```csharp
PlayStation4
```

```csharp
PlayStation5
```

```csharp
Switch
```

```csharp
Oculus
```

___

### Enums


###### ChangeFlags{#Modio.Mods.Builder.ChangeFlags}


```csharp
None               = 0
```

```csharp
Name               = 1 << 0
```

```csharp
Summary            = 1 << 1
```

```csharp
Description        = 1 << 2
```

```csharp
Logo               = 1 << 3
```

```csharp
Gallery            = 1 << 4
```

```csharp
Tags               = 1 << 5
```

```csharp
MetadataBlob       = 1 << 6
```

```csharp
MetadataKvps       = 1 << 7
```

```csharp
Visibility         = 1 << 8
```

```csharp
MaturityOptions    = 1 << 9
```

```csharp
CommunityOptions   = 1 << 10
```

```csharp
Modfile            = 1 << 11
```

```csharp
MonetizationConfig = 1 << 12
```

```csharp
Dependencies       = 1 << 13
```

```csharp
AddFlags = Name
                   | Summary
                   | Description
                   | Logo
                   | Visibility
                   | MaturityOptions
                   | CommunityOptions
                   | MetadataBlob
                   | Tags
```

```csharp
EditFlags = Name
                    | Summary
                    | Description
                    | Logo
                    | Visibility
                    | MaturityOptions
                    | CommunityOptions
                    | MetadataBlob
                    | Tags
                    | MonetizationConfig
```

___

###### ImageFormat{#Modio.Mods.Builder.ImageFormat}


```csharp
Jpg
```

```csharp
Jpeg
```

```csharp
Png
```

___
