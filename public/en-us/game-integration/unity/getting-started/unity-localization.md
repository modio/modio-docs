---
id: unity-localization
title: Localization
slug: /unity/localization
custom_edit_url: https://github.com/modio/modio-unity-internal/tree/main/docs/public/getting-started/unity-localization.md
---

# Localization for Unity

The mod.io Unity Plugin supports localization to provide a consistent experience for users across different languages and regions. This guide covers how localization works within the plugin and how to configure it for your project.

This guide covers:

* [Overview](#overview)
* [Setting the Language](#setting-the-language)
* [Localization in Template UI](#localization-in-template-ui)

## Overview

Localization in the mod.io Unity Plugin allows you to:

- Display mod.io UI elements in the user's preferred language
- Retrieve localized mod descriptions and metadata when available
- Set the language preference for API responses

The plugin handles localization through the `Accept-Language` header sent with API requests, ensuring that mod.io returns content in the requested language when available.

[Rest API Localization](https://docs.mod.io/restapi/Localization) contains the full list of supported languages and how localization works on the API level.

## Setting the Language
This will ensure that all API requests include the `Accept-Language` header, and mod.io will return content in the specified language when available.

### Default Language Configuration
You can configure the language used by modifying the `ModioSettings` asset in your Unity project.
This asset allows you to set the default language for API requests and UI elements.

#### Template UI Localization
If you are using the mod.io Template UI, the language set in the `ModioSettings` asset will also determine the language of the UI elements.
The plugin will attempt to load the appropriate localized assets based on the specified language.

### Before Initialization
You can also change the language before initialization by setting `DefaultLanguage` on `ModioClient.Settings`.

:::note
This needs to be called before `ModioClient.Init()`
:::

```csharp
// Set the default language to Spanish
ModioClient.Settings.DefaultLanguage = "es";
```

Due to the way the plugin caches localization data, changing the language after initialization may not update all UI elements or API responses.

To change the language after initialization, use the following snippet.
```csharp
await ModioClient.Shutdown();
// Set the default language to Spanish
ModioClient.Settings.DefaultLanguage = "es";
await ModioClient.Init();
```