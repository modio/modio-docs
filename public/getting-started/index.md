---
id: restapi-introduction
title: Getting Started
sidebar_label: Getting Started
slug: /getting-started-old
sidebar_position: -100
---

## How It Works

Compatible with all builds of your game on all platforms and stores, mod.io is a clientless and standalone solution which gives you complete control over your modding ecosystem.


<div className="tw-rounded-lg" style={{backgroundColor: 'white', padding: '1rem'}}>
![mod.io Overview](./images/sdk.png)
</div>

## Implementation

Once you have added your game to mod.io and got your [game ID and API key](https://mod.io/library), you can start integrating the mod.io REST API into your game, tools and sites. There are 3 options to get connected which you can use interchangeably depending on your needs. Here's the breakdown of each option.

Option | Usage | Suited for | Docs
---------- | ---------- | ---------- | ---------
__API__ | For connecting directly to the mod.io REST API. | Web apps that need a JSON REST API, or game developers that like a challenge and want control over their implementation. | [Here](https://docs.mod.io)
__SDK__ | Drop our [open source C/C++ SDK](https://github.com/modio/modio-sdk) into your game to call mod.io functionality. | Developers that want a SDK that abstracts the uploading, downloading and unzip flows behind easy to use function calls. | [Here](/sdk/getting-started)
__Tools/Plugins__ | Use tools, plugins and wrappers created by the community to make implementation in various engines easy. | Game developers that want a pre-built modding solution for their engine (Unity, Unreal, GameMaker, Construct) of choice. | Available below

## Official Tools

Plugins and wrappers made or supported by the mod.io team

![Unity Plugin](./images/tool-unity.png) | __Unity Plugin__<br />[SDK](https://github.com/modio/modio-unity)<br />[Getting Started](/unity-plugin)<br />[Sample Project](https://go.mod.io/unity-samples)<br /> | ![Unreal Plugin](./images/tool-unreal.png) | __Unreal Plugin__<br />[SDK](https://github.com/modio/modio-ue)<br />[Getting Started](/ue-plugin/getting-started)<br />[UE4 Sample Project](https://go.mod.io/ue-samples)<br />[UE5 Sample Project](https://go.mod.io/ue5-sample)<br />
--- | --- | --- | ---
![GameMaker](./images/tool-gm.png) | __GameMaker__<br />[SDK](https://github.com/YoYoGames/GMEXT-mod.io)<br />[Getting Started](https://github.com/YoYoGames/GMEXT-mod.io/wiki)<br /> | ![C/C++ SDK](./images/tool-ccpp.png) | __C/C++ SDK__<br />[SDK](https://github.com/modio/modio-sdk)<br />[Getting Started](/sdk/getting-started)<br />
![Discord Bot](./images/tool-discordbot.png) | __Discord Bot__<br />[Instructions](https://github.com/modio/modio-discord-bot)<br />[Invite](https://discordbot.mod.io)<br /> | 

## Community Tools

Plugins and wrappers made by our awesome community. Is there a tool out there that should be added to the list? [Get in touch!](mailto:developers@mod.io?subject=Publish Tool)

![Construct 2](./images/tool-c2.png) | __Construct 2 Plugin__<br />[SDK](https://github.com/modio/modio-construct2)<br />[Getting Started](https://github.com/modio/modio-construct2)<br /> | ![Haxe Wrapper](./images/tool-haxe.png) | __Haxe Wrapper__<br />[SDK](https://github.com/modio/modio-haxe)<br />[Getting Started](https://github.com/Turupawn/modioOpenFLExample#openfl-integration)<br />
--- | --- | --- | ---
![Modio.NET](./images/tool-dotnet.png) | __Modio.NET__<br />[SDK](https://github.com/nickelc/modio.net)<br />[Getting Started](https://github.com/nickelc/modio.net)<br /> | ![Rust Wrapper](./images/tool-rust.png) | __Rust Wrapper__<br />[SDK](https://crates.io/crates/modio)<br />[Getting Started](https://github.com/nickelc/modio-rs)<br />[Tutorials](https://github.com/nickelc/modio-rs/tree/master/examples)<br />
![Python Wrapper](./images/tool-python.png) | __Python Wrapper__<br />[SDK](https://github.com/ClementJ18/mod.io)<br />[Getting Started](https://github.com/ClementJ18/mod.io/#example)<br />[Tutorials](https://github.com/ClementJ18/mod.io/tree/master/examples)<br /> | ![Command Lisp](./images/tool-commonlisp.png) | __Common Lisp__<br />[Github](https://github.com/Shinmera/cl-modio)<br />[Getting Started](https://shinmera.github.io/cl-modio/)<br />
![Command Line Tool](./images/tool-cmd.png) | __Command Line Tool__<br />[CMD](https://github.com/nickelc/modiom)<br />[Getting Started](https://github.com/nickelc/modiom)<br /> | ![GitHub Action Mod Uploader](./images/tool-actions.png) | __GitHub Action Mod Uploader__<br />[GitHub](https://github.com/nickelc/upload-to-modio)<br />[Usage](https://github.com/nickelc/upload-to-modio#usage)<br />

Here is a brief list of the things to know about our API, as explained in more detail in the following sections.

- All requests to the API must be made over HTTPS (TLS).
- All API responses are in `application/json` format.
- Any POST request with a binary payload must supply the `Content-Type: multipart/form-data` header.
- Any non-binary POST, PUT and DELETE requests must supply the `Content-Type: application/x-www-form-urlencoded` header.
- Any non-binary payload can be supplied in JSON format using the `input_json` parameter.
