---
id: in-game-ui-template
title: Template UI
slug: /in-game-ui/template
---

# Template UI

Template UI is a fully featured in-game UGC browser that's built using Component UI.

![in-game ui overview](img/template.png)

## Pre-built UGC browser for mod.io plugins 

Template UI is designed to be a user-friendly interface that can handle all the base functions required from a UGC browser for console and PC. Its visual design is clean and minimal, and can be customized and tweaked to suit your needs. 

It serves two main purposes: 

1. It can be used as a functional template right off the shelf if you are looking for a ready-made solution. 
2. It can act as a reference for when you are implementing components into their own UI.

:::tip[Component UI]
For complete control over your UI implementation, check out [Component UI](/in-game-ui/component).
:::

## Featureset

The template UI includes all of the following functionality, ready to be used out of the box:

- Gamepad, keyboard and mouse support
- Browse and view mod profiles
- Browse community [UGC collections](/collections)
- User terms and consent authentication flow
- Search for UGC by keyword or tag
- Sort UGC by overall popularity, trending, recently added
- Customize tabs so users can easily navigate from popular to new
- Subscribe, rate and report UGC
- Display [UGC dependencies](/dependency-management)
- Display download progress and available storage
- Manage the users installed library of UGC (including enable/disable)
- Process the purchase of UGC with USD or virtual currency, when using the [marketplace feature](/monetization)
- Localization of all text in all [supported languages](/restapi/localization)

## Reference UIs

If you are interested in browsing UIs made by [games using mod.io](https://mod.io/g), we have compiled a [gallery here](https://drive.google.com/drive/folders/1lOvb0gJhGNTRXN8nR8enxDujMnW3Fojz?usp=drive_link). These games run on different engines and platforms, and show a combination of approaches used. Contact developers@mod.io if you would like recommendations to preview based on your use-case.

## Supported engines/setup guides

Below is a list of the supported engines and the relevant setup guides.

| Engine    | Supported | Guide |
| -------- | ------- | ------- |
| [Unreal Engine](/unreal)  | Yes    | [Documentation](/unreal/template-ui)   |
| [Unity](/unity) | Yes    | [Documentation](/unity/template-ui)   |
| [Custom Engine](/cppsdk)   | No    | N/A   |
