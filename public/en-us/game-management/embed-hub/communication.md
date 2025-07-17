---
id: embed-hub-communication
title: Communication
slug: /embed-hub/communication/
sidebar_position: 4
---

# Communicating with the Embed Hub

There are several methods of sending data to the Embed Hub to modify it on load or in realtime. This enables you to have controls that affect the Embed Hub from your own site.

## Query parameters

The following table details the available query parameters available by modifying the URL passed into the `src` attribute of the `<iframe>`.

| Parameter      | Required?           | Description                                                                                                          |
| -------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| game_id        | Yes                 | Your game's ID                                                                                                       |
| version        | Yes                 | An identifier for your Embed Hub                                                                                |
| hash           | If game is not live | A random string of characters required to view a hidden game's hub                                                   |
| tags           |                     | Default to filtering on a specfic tag (users will be unable to deselect this from the filters)                       |
| portal         |                     | Sets a portal header on every request. See [Targeting a portal](https://docs.mod.io/restapiref/#targeting-a-portal) for more info       |
| platform       |                     | Sets a platform header on every request. See [Targeting a platform](https://docs.mod.io/restapiref/#targeting-a-platform) for more info |
| lang           |                     | Sets the language of the Embed Hub. See [Localization](https://docs.mod.io/restapiref/#localization) for available languages       |
| featured       |                     | Shows a number of trending mods that have the specified tag in a carousel at the top of the mod browse page          |
| featured_count |                     | The number of featured mods to show if the 'featured' parameter is set (defaults to 5)                               |
| udt            |                     | Authenticate a user by passing in a User Delegated Token (for example if you are using the mod.io SDK and have authenticated the user, the UDT can be fetched by calling `GetUserDelegationTokenAsync`). Note: If your browser rejects the UDT because of its length, you can increase the buffer size of the browser, or [contact us](mailto:developers@mod.io?subject=UDT%20Support) to discuss different ways to pass the UDT to the Embed Hub |

## Message events

A number of commands can be sent to and received from the Embed Hub using the JavaScript [message API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage). Each event should contain an object with one more properties prefixed with `modio` and the corresponding data. These are listed below, the more complex data structures are described in detail as well.

### To the Embed Hub

| Key           | Data type      | Description                                                                                                                                                       |
| ------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modioAuth     | IModioAuth     | Authenticate a user by passing in either an ID token from your game's [Open ID](/authentication/openid/) setup or an access token and optional email |
| modioCSS      | string         | Sets Custom CSS, as described on the [Custom CSS](../custom-css/) page                                                                                            |
| modioFilter   | IModioFilter   | Sets a tag to force filtering on, or a featured tag                                                                                                               |
| modioHome     | true           | Navigates the Embed Hub back to the home page                                                                                                                |
| modioLang     | string         | Sets the language of the Embed Hub. See [Localization](https://docs.mod.io/restapiref/#localization) for available languages                                                    |
| modioPlatform | string         | Sets a platform header on every request. See [Targeting a platform](https://docs.mod.io/restapiref/#targeting-a-platform) for more info                                              |
| modioPortal   | string         | Sets a portal header on every request. See [Targeting a portal](https://docs.mod.io/restapiref/#targeting-a-portal) for more info                                                    |
| modioQuery    | IModioQuery    | Search or filter mods by name or tags                                                                                                                             |
| modioScroll   | IModioScroll   | Sets the scroll position of the containing site                                                                                                                   |
| modioSettings | IModioSettings | Modify the settings of your Embed Hub, as described on the [settings page](../settings/)                                                                     |
| modioStyle    | IModioStyle    | Modify the style of your Embed Hub, as described on the [theme page](../style/)                                                                              |
| modioUrl      | string         | Informs the Embed Hub of the URL of the containing site                                                                                                      |
| modioWindow   | number         | Informs the Embed Hub of the height of the user's browser window                                                                                             |

#### IModioAuth

```Typescript
{
  "id_token": string
  "access_token": string
  "email": string
}
```

#### IModioFilter

```Typescript
{
  "tags": string
  "featured": string
  "featuredCount": number
}
```

#### IModioQuery

```Typescript
{
  "_q": string
  "tags-in": string
}
```

#### IModioScroll

```Typescript
{
  "frameTop": string
  "scrollY": string
}
```

#### IModioSettings

```Typescript
{
  "agreementUrls": string[]
  "allowAddingMods": boolean
  "allowCommenting": boolean
  "allowDownloading": boolean
  "allowEditingMods": boolean
  "allowFiltering": boolean
  "allowInfiniteScroll": boolean
  "allowLinks": boolean
  "allowRating": boolean
  "allowSearching": boolean
  "allowSubscribing": boolean
  "companyName": string
  "filterRightSide": boolean
  "minAge": number
  "nameRightSide": boolean
  "showCollection": boolean
  "showComments": boolean
  "showGuides": boolean
  "showSortTabs": boolean
  "showUserAvatars": boolean
  "ugcPerPage": number
}
```

#### IModioStyle

```Typescript
{
  "activeButtonBorderColor": string
  "activeButtonBorderColorHover": string
  "activeButtonColor": string
  "activeButtonColorHover": string
  "buttonRadius": number
  "inputBackgroundColor": string
  "linkColor": string
  "modalBackground": string
  "pageBackground": string
  "primaryButtonBorderColor": string
  "primaryButtonBorderColorHover": string
  "primaryButtonColor": string
  "primaryButtonColorHover": string
  "secondaryButtonBorderColor": string
  "secondaryButtonBorderColorHover": string
  "secondaryButtonColor": string
  "secondaryButtonColorHover": string
  "tileBackgroundColor": string
  "tileBorderColor": string
  "tileBorderRadius": number
  "tileBorderWidth": number
}
```

### From the Embed Hub

| Key         | Data type | Description                                                                                              |
| ----------- | --------- | -------------------------------------------------------------------------------------------------------- |
| modioAuth   | 'refresh' | Informs the containing site that the provided ID token has expired or is invalid and should be refreshed |
| modioHeight | number    | Informs the containing site of the Embed Hub's scroll height                                        |
| modioInit   | true      | Informs the containing site that the Embed Hub has loaded                                           |
| modioPage   | string    | Informs the containing site of the current page the Embed Hub is on                                 |
| modioScroll | number    | Used to control the vertical scroll position of the containing window                                    |

## JavaScript API

The Embed Hub exposes a JavaScript API that is useful for calling functions directly when the hub is embedded in-game.
These are listed below, with their relevant detail and required parameters.

The Hub expects an interface named `modio` on the global JS object which supports the following functions:

| Function                    | Parameters                        | Description                                                                   |
| --------------------------- | --------------------------------- | ----------------------------------------------------------------------------- |
| getAuthToken                |                                   | Used to get the logged in user's access token from the SDK                    |
| getActivatedIds             |                                   | Used to get the list of activated mod IDs from the SDK                        |
| getLocalMods                |                                   | Used to get the list of locally installed mods from the SDK                   |
| getLocalActivatedIds        |                                   | Used to get the list of activated local mod IDs from the SDK                  |
| getLanguage                 |                                   | Used to get the language the SDK is using                                     |
| getPlatform                 |                                   | Used to get the platform the SDK is running on                                |
| getPortal                   |                                   | Used to get the portal the SDK is authenticated with                          |
| setAuthToken                | token: string                     | Used to set the logged in user's access token on the SDK                      |
| setUserId                   | userId: int                       | Used to set the logged in user's ID on the SDK                                |
| setActivatedIds             | modIds: array&lt;int&gt;          | Used to set the list of activated mod IDs on the SDK                          |
| setLocalActivatedIds        | modIds: array&lt;string&gt;       | Used to set the list of activated local mod IDs on the SDK                    |
| notifySubscriptionChange    | modId: int, isSubscribed: boolean | Used to notify the SDK that a mod has been subscribed to or unsubscribed from |
| notifyActivationChange      | modId: int, isActivated: boolean  | Used to notify the SDK that a mod has been activated or deactivated           |
| notifyLocalActivationChange | modId: int, isActivated: boolean  | Used to notify the SDK that a local mod has been activated or deactivated     |
