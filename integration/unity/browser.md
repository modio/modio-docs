---
id: unity-ugc-browser
title: UGC Browser
slug: /unity/ugc-browser/
sidebar_position: 3
---

# UGC Browser

The [mod.io](https://mod.io/) Unity Engine plugin comes with a configurable in-game UGC browser.  

:::warning 
> The Browser UI relies on the *config file* that is configured during the [setup instructions](/unity/setup/). Ensure you have completed all of those steps before proceeding.
:::

The Browser UI is incredibly simple to set up, and completely avoids the complexity that can come with building a full-featured mod browser: 

1. Drag the Browser UI prefab at `Assets/Plugins/mod.io/UI/Examples/ModIOBrowser` into your scene.
2. Call its `ModIOBrowser.Browser.Open()` method to show the browser in your scene.

If you want a fuller understanding of the plugin and its features, we recommend following the [getting started guide](/unity/getting-started/).

<p float="left">
  <img src="https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/a7f9360d-4837-4d6e-b5cb-db5544a27b8c_orig.png" width="49%" alt="Browser UI screenshot" />
  <img src="https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/b37c33d6-aaa1-49c5-a6fd-c4ae18627bd2_orig.png" width="49%" alt="Browser UI screenshot" /> 
</p>

:::tip
If you dont wish to use the UI it is safe to delete the UI folder located at Assets/Plugins/mod.io/UI
:::