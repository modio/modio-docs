---
id: unity-installation
title: Installation
slug: /unity/installation
---

# Installation

The Unity Core Plugin is the foundation that the rest of our features depend on. It provides functionality to interact with mod.io's services, such as user authentication, content searching & filtering, subscription management and more. This and the following [Unity Getting Started Guides](/unity#unity-core-plugin-guides) will take you through the fundamentals of what the plugin offers.

You can also dive straight into the [Unity Core Plugin GitHub repo](https://github.com/modio/modio-unity/).

But before you activate UGC functionality, you'll need to set up the Unity Plugin in a way that's suitable for your game, as well as connect it to your mod.io Game Account. 

This guide covers:

* [Installing the Unity Plugin](#installing-the-unity-plugin)
* [Connecting to mod.io](#connecting-to-modio)

:::tip[navigation tip]
Use the menu on the right to navigate the key points of this guide &rarr;
:::

## Installing the Unity Plugin

The mod.io Unity Plugin requires the functionality of two other Unity plugins to run.

:::important
If you have a previous version of the plugin installed, we recommend deleting it before installing the latest version.
:::

* **Newtonsoft.Json:** Installed via the Package Manager in the setup instructions below.
* **[SharpZipLib](https://github.com/icsharpcode/SharpZipLib):** Necessary to zip and unzip transmitted files.

### Installation

1. Install the **Newtonsoft Json** plugin using the Package Manager.
   - If your Unity Package Manager does not contain Newtonsoft Json, follow the instructions [here](https://github.com/applejag/Newtonsoft.Json-for-Unity/wiki/Install-official-via-UPM#installing-the-package-via-upm-window) to find the installation method for your Unity version.
2. Download and install the plugin using one of the following methods:
   - Using the [Unity Asset Store](https://assetstore.unity.com/packages/tools/integration/mod-browser-manager-by-mod-io-138866) and Package Manager.
   - Download the `.unitypackage` directly from the [Releases page](https://github.com/modio/modio-unity/releases).
   - Download an archive of the code using GitHub's download feature, and unpack it in your project's `Assets/Plugins` directory.
3. Restart Unity, to ensure it recognises the new assembly definitions.


## Connecting to mod.io

If you haven't already, you'll need to create a **Game Account** with mod.io. You can do so by following Step 1 of the [mod.io Getting Started Guide](https://docs.mod.io/getting-started/).

:::important  
You'll need your `Game Id`, `API key` and `API Path` for the following steps.
:::

Once your account is setup, follow the below steps to connect it to your game:

1. Ensure you have installed the plugin using the [installation instructions](#installing-the-unity-plugin) above.
2. In Unity, select the mod.io *config file* by navigating to `Tools -> mod.io -> Edit Settings`.
3. In the Inspector, enter your `Game Id`, `API key` and `API Path` into `Server URL`.

Your setup is now complete. The following sections will guide you through getting your mod.io integration up and running quickly.

## Next steps

Now you've installed and connected the plugin, it's time to get things running using our [Initialization](/unity/initialization) guide.

:::tip[Need Help?]
If you have any questions or need some guidance, join our [Discord server](https://discord.mod.io).
:::