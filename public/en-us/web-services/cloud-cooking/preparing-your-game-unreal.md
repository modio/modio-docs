---
id: preparing-your-game-unreal
title: Unreal Engine
slug: /web-services/cloud-cooking/preparing-your-game-unreal/
sidebar_position: 2
---

# Preparing your game - Unreal Engine

In order for the mod.io managed infrastructure to use your engine and game for cloud cooking, there are several steps you need to take to set up your title.

:::note
The cloud cooking process assumes that you are using "DLCs as UGC" for producing and loading your mods within Unreal Engine - that is, the Source files being submitted by content creators must be a plugin, containing a uplugin file and all associated assets.
:::

We recommend that you produce an [Installed Build](https://dev.epicgames.com/documentation/en-us/unreal-engine/create-an-installed-build-of-unreal-engine) of your engine and a binary-only build of your game to upload to cloud cooking. When uploading these builds, you should avoid including game source code, PDBs, intermediates, and console binaries. You should only include what is necessary to be able to run the editor and cook for each platform that you want to support in your cloud cooking configuration.

## Set up AutoSDKs for all supported platforms

For each platform you want to cook for, you should set up an [AutoSDK](https://dev.epicgames.com/documentation/en-us/unreal-engine/using-the-autosdk-system-in-unreal-engine) configuration. You will have to provide mod.io with the AutoSDK folder - note that this is not your Turnkey folder or configuration, but the actual extracted AutoSDKs.

:::note
The build agents will automatically have the `UE_SDKS_ROOT` environment variable set as part of the provisioning process
:::

## Add a BuildGraph script for cooking a piece of content

The cloud cooking agent will look for a BuildGraph script called `CloudCooking.xml`, located in your game's Build directory, and execute a build step called `CookMod`.

### BuildGraph Script Parameters

The cloud cooking agent will automatically pass the following parameters to the `CookMod` BuildGraph script, which should be forwarded on to the appropriate parameters in `BuildCookRun`

| Parameter Name    | BuildCookRun Param | Description |
| -------- | -------- | ------- |
| UProjectPath  | -Project | Path to the uproject of your game.   |
| UGCBuildPlatform | -Platform | Name of the platform that is being cooked for (i.e. PS5®, XSX etc.)     |
| DLCName   | -DLCName | Name/Path of the plugin that is being cooked as a mod   |
| UGCStagingDirectory | -StagingDirectory | Directory to stage the content at.  |

Below is an example of the CloudCooking BuildGraph script that you can use in your project.

```xml
<?xml version='1.0' ?>
<BuildGraph xmlns="http://www.epicgames.com/BuildGraph" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="./Schema.xsd">
    <Option Name="UProjectPath" DefaultValue="" Description="Path to the base project to reference"/>
    <Option Name="UGCBuildPlatform" DefaultValue="Win64" Description="The platform to cook UGC for. Passed by Cloud Cooking Agent"/>
    <Option Name="DLCName" DefaultValue="" Description="Plugin Name of the UGC to build"/>
    <Option Name="UGCStagingDirectory" DefaultValue="" Description="Directory to stage the packged DLC"/>      

    <Agent Name="Default Agent" Type="Default">
        <Node Name="CookMod">
            <Command Name="BuildCookRun" Arguments="-Project=$(UProjectPath) -Platform=$(UGCBuildPlatform) -nocompile -installed -utf8output  -nobuild -cook -CookCultures=en -unversionedcookedcontent -pak -stage -basedonreleaseversion=UGCReleaseV1_0 -stagebasereleasepaks -DLCName=$(DLCName) -stagingdirectory=$(UGCStagingDirectory)" />
        </Node>
    </Agent>
</BuildGraph>
```

## Cook a Base Release for each platform

Cooking UGC as a DLC requires a reference Base Release in order to be cooked most effectively. For each platform that you wish to support, you will need to cook a base release and include it in the editor that you provide to mod.io.
You can cook a Base Release with the following commandline:

`RunUAT.bat BuildCookRun -Project=$(UProjectPath) -Platform=$(TargetPlatform) -nocompile -installed -utf8output -build -cook -CookCultures=en -unversionedcookedcontent -stage -createreleaseversion=UGCReleaseV1_0`

Ensure that the release version that you build and ship with corresponds to the release version that you use in the `-basedonreleaseversion` parameter in your `CookMod` BuildGraph script.

Below is an example of a BuildGraph script that you can incorporate into your build process to produce the base releases

```xml
<?xml version='1.0' ?>
<BuildGraph xmlns="http://www.epicgames.com/BuildGraph" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="./Schema.xsd">
    <!-- Global Params -->
    <Option Name="UProjectPath" DefaultValue="" Description="Path to the base project to reference"/>
    <Option Name="TargetPlatforms" Restrict="[^ ]*" DefaultValue="Win64" Description="List of the target platforms to build for, separated by semicolons, eg. Win64;Android"/>

    <Agent Name="Default Agent" Type="Default">
        <Node Name="CookReleaseVersions">
            <ForEach Name="TargetPlatform" Values="$(TargetPlatforms)">
                <Command Name="BuildCookRun" Arguments="-Project=$(UProjectPath) -Platform=$(TargetPlatform) -nocompile -installed -utf8output -build -cook -CookCultures=en -unversionedcookedcontent -stage -createreleaseversion=UGCReleaseV1_0" />    
            </ForEach>
        </Node>
    </Agent>
</BuildGraph>
```

:::note
You should also include the base release files when you ship your public editor to content creators.
:::

## Upload your build and AutoSDKs to mod.io

As part of the onboarding process, you will get a SAS Token to connect to an Azure Storage Container to upload your build and SDKs. The only requirement for the file structure within this storage container is that your AutoSDKs are in a root folder called `AutoSDKs` and structured in line with Unreal Engine's AutoSDK structure. Your game/engine structure is up to you; however we recommend that your game is a subfolder of your Engine directory in line with Epic standards.
An example directory structure can be found below:

```
├── UnrealEngine
│   ├── Engine
│   │   ├── Binaries
│   │   ├── Config
│   │   ├── Content
│   │   ├── Plugins
│   │   ├── Source
│   │   ├── MyGame
│   │   │   ├── MyGame.uproject
│   │   │   └── ...
│   │   └── ...
├── AutoSDKs
│   └── HostWin64
│       ├── GDK
│       ├── PS4
│       └── ...
└── cloudcooking.config
```

The `cloudcooking.config` file is used to indicate to the build agent where it can locate RunUAT and your project file, relative to the root of this directory. It should be formatted as json.

### CloudCooking.config file

| Parameter Name    | Example Value | Description |
| -------- | -------- | ------- |
| EngineBuildDirectory  | /UnrealEngine/ | Path where the Engine folder can be found |
| GameProjectDirectory | /UnrealEngine/Engine/MyGame | Path to the directory of your game  |
| GameProjectName | MyGame.uproject | Filename of the uproject file for your game.  |

An example of the cloudcooking.config file for the above folder structure:

```json
{
    "EngineBuildDirectory" : "/UnrealEngine/" ,
    "GameProjectDirectory" : "/UnrealEngine/Engine/MyGame",
    "GameProjectName" : "MyGame"
}
```

:::note
Part of the cloud cooking provisioning process is to create a Virtual Machine image for faster build agent machine provisioning. These files are included in that image, and will be placed in a directory on main storage. You cannot assume what the location of these files will be. The provisioning process will automatically handle environment variables for Unreal Engine and the build agent.
:::
