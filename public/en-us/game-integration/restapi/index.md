---
id: restapi-overview
title: Overview
slug: /restapi
---

# REST API

The mod.io REST API is the foundation that allows you to add UGC support to your game. You can manage your game(s) via your [mod.io library dashboard](https://mod.io/library) and your [API access here](https://mod.io/me/access).

<div className="simplecard-grid">

  <SimpleCard
    shadow="tl"
    title="mod.io REST API"
    image="/img/icon_modio.svg"
    text="A complete guide to mod.io's API functionality, such as authentication, integration and reference codes."
    moreLink="/restapi/introduction"
  />
    <SimpleCard
    shadow="tl"
    title="Features"
    image="/img/icon_tui.svg"
    text="Explore a variety of customizable offerings that work alongside the REST API to enhance UGC in your game."
    moreLink="/features"
  />
</div>

## How it works

Compatible with all builds of your game on all platforms and stores, mod.io is a clientless and standalone solution which gives you complete control over your modding ecosystem.

![RESTAPI Overview](img/restapi-overview.svg)

## Tools & implementation

Once you have completed the **Step 1** of the [mod.io Getting Started Guide](/getting-started#set-up-a-game-account), you can start integrating the mod.io REST API into your game, tools and sites. There are 3 options to get connected which you can use interchangeably depending on your needs. 

Here's the breakdown of each option:

Option | Usage | Suited for | Docs
---------- | ---------- | ---------- | ---------
__API__ | For connecting directly to the mod.io REST API. | Web apps that need a JSON REST API, or game developers that like a challenge and want control over their implementation. | [Documentation](/restapi)
__Official Plugins__ | If you've built your game using Unreal or Unity Engines, we have built bespoke plugins to streamline your UGC experience. | Any Unity or Unreal Engine game. | [Available below](#official-tools)
__SDK__ | Drop our [open source C/C++ SDK](https://github.com/modio/modio-sdk) into your game to call mod.io functionality. | Developers that want a SDK that abstracts the uploading, downloading and unzip flows behind easy to use function calls. | [Documentation](/cppsdk)
__Tools/Plugins__ | Use tools, plugins and wrappers created by the community to make implementation easy. | Game developers that want a pre-built modding solution for their engine (Unity, Unreal, GameMaker, Construct) of choice. | [Available below](#community-tools)

### Official tools

Plugins and wrappers made or supported by the mod.io team.

| &nbsp; | &nbsp; | &nbsp; | &nbsp;
-- | -- | -- | ---
![Unity Logo](img/tool-unity.png) |  __Unity Plugin__<br />[SDK](https://github.com/modio/modio-unity)<br />[Documentation](/unity)<br />[Sample Project](https://github.com/modio/modio-unity-sample)<br /> | ![Unreal Logo](img/tool-unreal.png) | __Unreal Plugin__<br />[SDK](https://github.com/modio/modio-ue)<br />[Documentation](/unreal)<br />[UE4 Sample Project](https://github.com/modio/modio-ue4-sample)<br />[UE5 Sample Project](https://github.com/modio/modio-ue5-sample)<br />
| ![C++ SDK](img/tool-ccpp.png) | __C/C++ SDK__<br />[SDK](https://github.com/modio/modio-sdk)<br />[Documentation](/cppsdk)<br /> | ![Game Maker Logo](img/tool-gm.png) | __GameMaker__<br />[SDK](https://github.com/YoYoGames/GMEXT-mod.io)<br />[Getting Started](https://github.com/YoYoGames/GMEXT-mod.io/wiki)<br />

### Community tools

Plugins and wrappers made by our passionate community. 

:::tip[Community Tools]
Is there a tool out there that should be added to the list? Let us know at developers@mod.io.
:::

| &nbsp; | &nbsp; | &nbsp; | &nbsp;
--- | --- | --- | ---
![Construct 2 Logo](img/tool-c2.png) | __Construct 2 Plugin__<br />[SDK](https://github.com/modio/modio-construct2)<br />[Getting Started](https://github.com/modio/modio-construct2)<br /> | ![Haxe Logo](img/tool-haxe.png) | __Haxe Wrapper__<br />[SDK](https://github.com/modio/modio-haxe)<br />[Getting Started](https://github.com/Turupawn/modioOpenFLExample#openfl-integration)<br />
![modiodotnet Logo](img/tool-dotnet.png)  | __Modio.NET__<br />[SDK](https://github.com/nickelc/modio.net)<br />[Getting Started](https://github.com/nickelc/modio.net)<br /> | ![Rust Logo](img/tool-rust.png) | __Rust Wrapper__<br />[SDK](https://crates.io/crates/modio)<br />[Getting Started](https://github.com/nickelc/modio-rs)<br />[Tutorials](https://github.com/nickelc/modio-rs/tree/master/examples)<br />
![Python Logo](img/tool-python.png) | __Python Wrapper__<br />[SDK](https://github.com/ClementJ18/mod.io)<br />[Getting Started](https://github.com/ClementJ18/mod.io#example)<br />[Tutorials](https://github.com/ClementJ18/mod.io/tree/master/examples)<br /> | ![Common Lisp Logo](img/tool-commonlisp.png) | __Common Lisp__<br />[Github](https://github.com/Shinmera/cl-modio)<br />[Getting Started](https://shinmera.github.io/cl-modio/)<br />
![Command Line Logo](img/tool-cmd.png) | __Command Line Tool__<br />[CMD](https://github.com/nickelc/modiom)<br />[Getting Started](https://github.com/nickelc/modiom)<br /> | ![GitHub Logo](img/tool-actions.png) | __GitHub Action Mod Uploader__<br />[GitHub](https://github.com/nickelc/upload-to-modio)<br />[Usage](https://github.com/nickelc/upload-to-modio#usage)<br />

## Explore the API

To explore what the API has to offer, head over to our complete [REST API Introduction](/restapi/introduction).

