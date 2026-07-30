---
id: embed-hub-communication
title: Communication
slug: /embed-hub/communication
---

# Communicating with Embed Hub

There are several methods of sending data to [Embed Hub](/embed-hub) to modify it on load or in real-time. This page explores controls that allow you to manipulate Embed Hub from your own site.

This guide covers:

- [Query parameters](#query-parameters)
- [Message events](#message-events)
- [JavaScript API](#javascript-api)

## User Delegated Token

A User Delegated Token (UDT) can be used to securely authenticate users in game via the Embed Hub or vice versa. If you are using the mod.io SDK and have authenticated the user, the UDT can be fetched by calling `GetUserDelegationTokenAsync`. Note: If your browser rejects the UDT because of its length, you can increase the buffer size of the browser, or [contact us](mailto:developers@mod.io?subject=UDT%20Support) to discuss different ways to pass the UDT to Embed Hub.

## Query parameters

The following table details the available query parameters available by modifying the URL passed into the `src` attribute of the `<iframe>`.

| Parameter      | Required?           | Description                                                                                                                |
| -------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| game_id        | Yes                 | Your game's ID                                                                                                             |
| version        | Yes                 | An identifier for your Embed Hub                                                                                           |
| hash           | If game is not live | A random string of characters required to view a hidden game's hub                                                         |
| tags           |                     | Default to filtering on a specfic tag (users will be unable to deselect this from the filters)                             |
| portal         |                     | Sets a portal header on every request. See [Targeting a portal](/restapi/platforms#targeting-a-portal) for more info       |
| platform       |                     | Sets a platform header on every request. See [Targeting a platform](/restapi/platforms#targeting-a-platform) for more info |
| lang           |                     | Sets the language of Embed Hub. See [Localization](/restapi/localization) for available languages                          |
| featured       |                     | Shows a number of trending mods that have the specified tag in a carousel at the top of the mod browse page                |
| featured_count |                     | The number of featured mods to show if the 'featured' parameter is set (defaults to 5)                                     |
| udt            |                     | Authenticate a user by passing in a User Delegated Token                                                                   |

## Message events

A number of commands can be sent to and received from Embed Hub using the JavaScript [message API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage). Each event should contain an object with one or more properties prefixed with `modio` and the corresponding data. These are listed below, the more complex data structures are described in detail as well.

### To Embed Hub

| Key                | Data type      | Description                                                                                                                                |
| ------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| modioAuth          | IModioAuth     | Authenticate a user by passing in either an ID token from your game's [Open ID](/authentication/openid) setup and optional email, or a UDT |
| modioCSS           | string         | Sets Custom CSS, as described on the [Custom CSS](/embed-hub/custom-css) page                                                              |
| modioFilter        | IModioFilter   | Sets a tag to force filtering on, or a featured tag                                                                                        |
| modioHome          | true           | Navigates Embed Hub back to the home page                                                                                                  |
| modioLang          | string         | Sets the language of Embed Hub. See [Localization](/restapi/localization) for available languages                                          |
| modioPlatform      | string         | Sets a platform header on every request. See [Targeting a platform](/restapi/platforms#targeting-a-platform) for more info                 |
| modioPortal        | string         | Sets a portal header on every request. See [Targeting a portal](/restapi/platforms#targeting-a-portal) for more info                       |
| modioQuery         | IModioQuery    | Search or filter mods by name or tags                                                                                                      |
| modioScroll        | IModioScroll   | Sets the scroll position of the containing site                                                                                            |
| modioSettings      | IModioSettings | Modify the settings of your Embed Hub, as described on the [settings page](/embed-hub/settings)                                            |
| modioStyle         | IModioStyle    | Modify the style of your Embed Hub, as described on the [theme page](/embed-hub/theme)                                                     |
| modioUrl           | string         | Informs Embed Hub of the URL of the containing site                                                                                        |
| modioWindow        | number         | Informs Embed Hub of the height of the user's browser window                                                                               |
| modioSubscriptions | true           | Causes the Embed Hub to fetch the current user's subscriptions                                                                             |
| modioPurchases     | true           | Causes the Embed Hub to fetch the current user's purchases                                                                                 |

#### IModioAuth

```Typescript
{
  "id_token": string
  "udt": string
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
  "tags": string
}
```

#### IModioScroll

```Typescript
{
  "frameTop": number
  "scrollY": number
}
```

`frameTop` is the `<iframe>`'s offset from the top of the viewport (`getBoundingClientRect().top`) and `scrollY` is the containing window's vertical scroll position (`window.scrollY`). Both are pixel values.

#### IModioSettings

```Typescript
{
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
  "filterRightSide": boolean
  "nameRightSide": boolean
  "showCollections": boolean
  "showComments": boolean
  "showMarketplace": boolean
  "showGuides": boolean
  "showLibrary": boolean
  "showSortTabs": boolean
  "showUserAvatars": boolean
  "showActivateButtons": boolean
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
  "buttonRadius": string
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
  "tileBorderRadius": string
  "tileBorderWidth": string
}
```

Color values accept any valid CSS color, as described on the [theme page](/embed-hub/theme). `buttonRadius`, `tileBorderRadius` and `tileBorderWidth` are applied directly as CSS values, so they must include a unit - for example `'8px'` or `'0.5rem'`.

### From Embed Hub

| Key         | Data type | Description                                                                                              |
| ----------- | --------- | -------------------------------------------------------------------------------------------------------- |
| modioAuth   | 'refresh' | Informs the containing site that the provided ID token has expired or is invalid and should be refreshed |
| modioHeight | number    | Informs the containing site of Embed Hub's scroll height                                                 |
| modioInit   | true      | Informs the containing site that Embed Hub has loaded                                                    |
| modioPage   | string    | Informs the containing site of the current page Embed Hub is on                                          |
| modioScroll | number    | Used to control the vertical scroll position of the containing window                                    |

## JavaScript API

The Embed Hub has a JavaScript API that is useful for calling functions directly when the Hub is embedded in-game.
These are listed below, with their relevant details and required parameters.

### From the Embed Hub

To receive data from the game, the Embed Hub expects a JavaScript object named `modio` on the global JS object which supports the following functions:

| Function                    | Parameters                        | Description                                                                                        |
| --------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------- |
| getAuthToken                |                                   | Used to get a UDT for the logged in user from the game                                             |
| getActivations              |                                   | Used to get the list of activated mod IDs from the game                                            |
| getLocalMods                |                                   | Used to get the list of local mods (mods not hosted on mod.io) from the game. Returns [ILocalMod](#ilocalmod)[] |
| getLocalActivations         |                                   | Used to get the list of activated local mod IDs from the game                                      |
| getLanguage                 |                                   | Used to get the language the game is using                                                         |
| getPlatform                 |                                   | Used to get the platform the game is running on                                                    |
| getPortal                   |                                   | Used to get the portal the game is authenticated with                                              |
| setAuthToken                | token: string                     | Used to provide a UDT of the logged in user to the game which can be exchanged for an access token |
| setUserId                   | userId: string                    | Used to set the logged in user's ID on the game                                                    |
| setActivations              | modIds: array&lt;int&gt;          | Used to set the list of activated mod IDs on the game                                              |
| setLocalActivations         | modIds: array&lt;string&gt;       | Used to set the list of activated local mod IDs on the game                                        |
| notifySubscriptionChange    | modId: int, isSubscribed: boolean | Used to notify the game that a mod has been subscribed to or unsubscribed from                     |
| notifyActivationChange      | modId: int, isActivated: boolean  | Used to notify the game that a mod has been activated or deactivated                               |
| notifyLocalActivationChange | modId: string, isActivated: boolean | Used to notify the game that a local mod has been activated or deactivated                       |

:::info Local mods
"Local mods" refers to mods that are **not hosted on mod.io** - for example, UGC the player has sideloaded or placed manually in the game's mod directory. They are supplied to the Embed Hub by the game, so it can list and activate them alongside mod.io mods, but the Embed Hub does not host or manage their files.

Because local mods have no mod.io mod ID, they are identified by a game-supplied string ID, which is why `setLocalActivations` takes `array<string>` rather than `array<int>`, and `notifyLocalActivationChange` takes a `string` mod ID.
:::

#### ILocalMod

`getLocalMods` returns an array of objects describing each local mod.

| Property     | Data type           | Description                                                                                           |
| ------------ | ------------------- | ----------------------------------------------------------------------------------------------------- |
| modId        | string              | Your identifier for the mod. Used for activation calls and dependency matching                         |
| modName      | string              | The name shown to the user                                                                            |
| image        | string              | URL of a thumbnail image, displayed at a 16:9 aspect ratio                                             |
| size         | number              | File size in **bytes**. Displayed in the nearest sensible unit, eg. `4.75 MB`                          |
| version      | string              | The mod's version. Accepted, but not currently surfaced in the Embed Hub UI                            |
| dateLive     | number              | Unix timestamp in **seconds** for when the mod was added. Displayed as a relative time, eg. `3d`       |
| dateUpdated  | number              | Unix timestamp in **seconds** for when the mod was last updated                                        |
| downloads    | number              | Download count                                                                                        |
| subscribers  | number              | Subscriber count                                                                                      |
| rating       | number              | Rating count                                                                                          |
| dependencies | array&lt;string&gt; | The `modId` of every other local mod this mod requires. See [Local dependencies](#local-dependencies)  |

`modId` and `modName` are the two fields worth treating as mandatory - the first identifies the mod, the second is all the user has to recognise it by. If you omit the remaining fields:

- `dateLive`, `dateUpdated`, `downloads`, `subscribers` and `rating` degrade cleanly, displaying `-` or `0`.
- `image` leaves an empty space where the thumbnail would be.
- `size` must be a number if you supply it at all. A missing or non-numeric value is displayed literally as `NaN bytes`, so send `0` rather than omitting it if you do not track file sizes.

```Typescript
[
  {
    "modId": "my-local-mod",
    "modName": "My Local Mod",
    "image": "https://example.com/thumb.png",
    "size": 4980736,
    "version": "1.2.0",
    "dateLive": 1751328000,
    "dateUpdated": 1753920000,
    "downloads": 0,
    "subscribers": 0,
    "rating": 0,
    "dependencies": ["some-other-local-mod"]
  }
]
```

Local mods are listed alongside the user's subscriptions in their library. A few differences apply, because the Embed Hub has no profile for content it does not host:

- The name is not a link, as there is no mod profile page to open.
- Unsubscribing is unavailable. The action is disabled and labelled _'Locally installed'_.

##### Local dependencies

`dependencies` is resolved against the other local mods in the same `getLocalMods` response, matched on `modId`. Any entry with no match is treated as missing: the mod's activate button is disabled and its tooltip reads _'This &lt;ugc name&gt; cannot be loaded as one or more dependencies are missing'_, followed by the unmatched IDs.

:::warning
Dependencies on mod.io-hosted mods cannot be expressed here. Only local `modId` values are matched, so a mod.io mod ID listed in `dependencies` will always count as missing and will permanently disable the mod. Resolve those dependencies in your own code before building the list.
:::

#### Implementing the interface

The `get*` functions return data to the Embed Hub, while the `set*` and `notify*` functions receive data from it. Whatever language your game is written in, the end result should be an object on the page's global JS object shaped like this:

```Typescript
globalThis.modio = {
  // Getters - return data to the Embed Hub
  getAuthToken: () => game.getUserDelegationToken(),
  getActivations: () => game.getActivatedModIds(),
  getLocalMods: () => game.getLocalMods(),
  getLocalActivations: () => game.getActivatedLocalModIds(),
  getLanguage: () => game.getLanguage(),
  getPlatform: () => game.getPlatform(),
  getPortal: () => game.getPortal(),

  // Setters - receive data from the Embed Hub
  setAuthToken: (token) => game.authenticateWithUdt(token),
  setUserId: (userId) => game.setUserId(userId),
  setActivations: (modIds) => game.setActivatedModIds(modIds),
  setLocalActivations: (modIds) => game.setActivatedLocalModIds(modIds),

  // Notifications - state changed inside the Embed Hub
  notifySubscriptionChange: (modId, isSubscribed) => game.onSubscriptionChanged(modId, isSubscribed),
  notifyActivationChange: (modId, isActivated) => game.onActivationChanged(modId, isActivated),
  notifyLocalActivationChange: (modId, isActivated) => game.onLocalActivationChanged(modId, isActivated),
}
```

In a web page you can write exactly the above. In a game, use your webview library's mechanism for exposing native functions to JavaScript to build the same object at runtime, and attach it to the global JS object of the main frame as soon as the DOM is ready.

Note that `getLocalMods` must return an array of [ILocalMod](#ilocalmod) objects, not a JSON string.

#### WebView2 hosts

If your host is [Microsoft Edge WebView2](https://learn.microsoft.com/en-us/microsoft-edge/webview2/) and no `modio` object is present on the global JS object, the Embed Hub falls back to `window.chrome.webview.postMessage()` for the following functions:

- `setAuthToken`
- `setUserId`
- `notifySubscriptionChange`
- `notifyActivationChange`
- `notifyLocalActivationChange`

Each message is an object keyed by the function name, with the parameters as its value - for example:

```Typescript
window.chrome.webview.postMessage({
  notifyActivationChange: { modId: 12345, isActivated: true }
})
```

Handle these in your native code via the WebView2 `WebMessageReceived` event.

This fallback only covers the functions listed above. The `get*` functions have no fallback, so if your game needs to supply data to the Embed Hub you must still provide a `modio` object on the global JS object.

### To the Embed Hub

To call functions on the Embed Hub from in-game, The Hub exposes a JavaScript object named `modioEmbedHub` on the global JS object which supports the following functions.

| Function            | Parameters    | Description                                                                                                                                                                                    |
| ------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| echo                | ...args: any  | Returns an array of the parameters supplied to the function                                                                                                                                    |
| getAuthToken        |               | Used to get a UDT of the currently authenticated user from the Embed Hub. **Note**: as this operation is asynchronous, it will call `setAuthToken` with the UDT on the `modio` JS object above |
| setAuthToken        | token: string | Used to provide a UDT to the Embed Hub which will authenticate the user                                                                                                                        |
| isUserAuthenticated |               | Returns true if the current user is authenticated within the Embed Hub                                                                                                                         |
| syncSubscriptions   |               | Causes the Embed Hub to fetch the current user's subscriptions                                                                                                                                 |
| syncPurchases       |               | Causes the Embed Hub to fetch the current user's purchases                                                                                                                                     |
| logout              |               | Used to log the current user out of the Embed Hub                                                                                                                                              |

#### Calling the interface

Unlike the `modio` object, you do not create `modioEmbedHub` - the Embed Hub creates it. Your game only needs to call it:

```Typescript
// Push a UDT the game already holds, authenticating the user in the Embed Hub
modioEmbedHub.setAuthToken('<UDT>')

// Ask the Embed Hub for a UDT for the user it has authenticated.
// Returns false if nobody is logged in; see the round trip below.
const started = modioEmbedHub.getAuthToken()

// Query the Embed Hub's auth state
if (modioEmbedHub.isUserAuthenticated()) { /* ... */ }

// Refresh the Embed Hub's caches after the game changes something
modioEmbedHub.syncSubscriptions()
modioEmbedHub.syncPurchases()

modioEmbedHub.logout()

// Useful when first wiring things up - returns ['hello', 1] as a JS array
modioEmbedHub.echo('hello', 1)
```

From a game, make these calls by evaluating the equivalent JavaScript string in your webview, using whichever function it provides for the purpose - `EvaluateScript`, `ExecuteScriptAsync`, `evaluateJavaScript` and so on.

Note that `getAuthToken` does not return a token. It returns a boolean indicating whether the request was started, and the token arrives afterwards on the `modio` object:

```
1. game -> EMH    modioEmbedHub.getAuthToken()
2. EMH  -> game   returns false if no user is logged in - nothing further happens
   EMH  -> game   returns true, and asynchronously generates a UDT
3. EMH  -> game   modio.setAuthToken(udt)
4. game           exchanges the UDT for an access token
```

The two directions are therefore a single system: `modioEmbedHub.getAuthToken()` is only useful if the `modio` object described above is present to receive the reply.

## Authentication

There are 3 ways to automatically authenticate users when opening the Embed Hub in-game or in your web browser as explained above. We recommend using one of these approaches when the user is already authenticated (i.e. by the game client), to ensure a seamless experience.

1. Passing in a UDT as a URL query parameter when loading the Embed Hub.
2. Using the JavaScript message event `modioAuth` key, to pass in a user's ID token or UDT.
3. Using the JavaScript API `setAuthToken` function, to pass a UDT for the current user.
