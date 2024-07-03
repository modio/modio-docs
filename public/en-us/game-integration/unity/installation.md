---
id: unity-setup
title: Installation & Setup
slug: /unity/setup/
sidebar_position: 1
---

# Installation & Setup

## Dependencies
The mod.io Unity Plugin requires the functionality of two other open-source Unity plugins to run. These are included as libraries in the UnityPackage in the `Assets/Plugins/mod.io/ThirdParty` directory:
* Json.Net for improved Json serialization. ([GitHub Repo](https://github.com/SaladLab/Json.Net.Unity3D) || [Unity Asset Store Page](https://assetstore.unity.com/packages/tools/input-management/json-net-for-unity-11347))
* SharpZipLib to zip and unzip transmitted files. ([GitHub Repo](https://github.com/icsharpcode/SharpZipLib))

## Installation

:::warning  
If you have a previous version of the plugin installed, it is _highly_ recommended to delete it before updating to a later version.
:::

1. Install the *Newtonsoft Json* plugin using the Package Manager.
   - If your Unity Package Manager does not contain Newtonsoft Json, follow the instructions [here](https://github.com/applejag/Newtonsoft.Json-for-Unity/wiki/Install-official-via-UPM#installing-the-package-via-upm-window) to find the installation method for your Unity version.
2. Download and install the plugin using one of the following methods:
   - Using the [Unity Asset Store](https://assetstore.unity.com/packages/tools/integration/mod-browser-manager-by-mod-io-138866) and Package Manager.
   - Download the `.unitypackage` directly from the [Releases page](https://github.com/modio/modio-unity/releases).
   - Download an archive of the code using GitHub's download feature, and unpack it in your project's `Assets/Plugins` directory.
3. Restart Unity, to ensure it recognises the new assembly definitions.

:::note 
If you receive errors due to conflicting libraries after installing the plugin, remove any duplicates from `Assets/Plugins/mod.io/ThirdParty`.
:::

## Setup

The first thing you'll need to do is [create a game profile](https://mod.io/g/add) on mod.io.

:::tip  
You'll need your `game ID` and `API key` for the following steps.
:::

1. Ensure you have installed the plugin using the [installation instructions](#installation) above.
2. In Unity, select the mod.io *config file* by navigating to `Tools -> mod.io -> Edit Settings`.
3. In the Inspector under *Server Settings*, enter your `game ID` and `API key`.
4. Use the *Insert URL* buttons to set the `server URL` depending on where you created your game profile earlier.

:::warning  
Deselect the config file before entering Play mode. A known Unity bug can cause the Editor to crash in Unity 2019-2021.
:::

Your setup is now complete. The [Getting Started guide](/unity/getting-started/) will guide you through getting your mod.io integration up and running quickly. If you have any questions or need some help join our [Discord](https://discord.mod.io) server.