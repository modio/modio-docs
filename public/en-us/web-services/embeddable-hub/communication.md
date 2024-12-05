---
id: communication
title: Communication
slug: /web-services/embeddable-hub/communication/
sidebar_position: 4
---

# Communicating with the Embeddable Hub

There are several methods of sending data to the Embeddable Hub to modify it on load or in realtime. This enables you to have controls that affect the Embeddable Hub from your own site.

## Query parameters

The following table details the available query parameters available by modifying the URL passed into the `src` attribute of the `<iframe>`.

| Parameter      | Required?           | Description                                                                                                          |
| -------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| game_id        | Yes                 | Your game's ID                                                                                                       |
| version        | Yes                 | An identifier for your Embeddable Hub                                                                                |
| hash           | If game is not live | A random string of characters required to view a hidden game's hub                                                   |
| tags           |                     | Default to filtering on a specfic tag (users will be unable to deselect this from the filters)                       |
| portal         |                     | Sets a portal header on every request. See [Targeting a portal](/restapiref/#targeting-a-portal) for more info       |
| platform       |                     | Sets a platform header on every request. See [Targeting a platform](/restapiref/#targeting-a-platform) for more info |
| lang           |                     | Sets the language of the Embeddable Hub. See [Localization](/restapiref/#localization) for available languages       |
| featured       |                     | Shows a number of trending mods that have the specified tag in a carousel at the top of the mod browse page          |
| featured_count |                     | The number of featured mods to show if the 'featured' parameter is set (defaults to 5)                               |
| udt            |                     | Authenticate a user by passing in a User Delegated Token                                                             |

## Message events

A number of commands can be sent to and received from the Embeddable Hub using the JavaScript [message API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage). Each event should contain an object with one more properties prefixed with `modio` and the corresponding data. These are listed below, the more complex data structures are described in detail as well.

### To the Embeddable Hub

| Key           | Data type      | Description                                                                                                                                                       |
| ------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modioAuth     | IModioAuth     | Authenticate a user by passing in either an ID token from your game's [Open ID](/web-services/authentication/openid/) setup or an access token and optional email |
| modioCSS      | string         | Sets Custom CSS, as described on the [Custom CSS](/web-services/embeddable-hub/custom-css/) page                                                                  |
| modioFilter   | IModioFilter   | Sets a tag to force filtering on, or a featured tag                                                                                                               |
| modioHome     | true           | Navigates the Embeddable Hub back to the home page                                                                                                                |
| modioLang     | string         | Sets the language of the Embeddable Hub. See [Localization](/restapiref/#localization) for available languages                                                    |
| modioPlatform | string         | Sets a platform header on every request. See [Targeting a platform](/restapiref/#targeting-a-platform) for more info                                              |
| modioPortal   | string         | Sets a portal header on every request. See [Targeting a portal](/restapiref/#targeting-a-portal) for more info                                                    |
| modioQuery    | IModioQuery    | Search or filter mods by name or tags                                                                                                                             |
| modioScroll   | IModioScroll   | Sets the scroll position of the containing site                                                                                                                   |
| modioSettings | IModioSettings | Modify the settings of your Embeddable Hub, as described on the [settings page](/web-services/embeddable-hub/settings/)                                           |
| modioStyle    | IModioStyle    | Modify the style of your Embeddable Hub, as described on the [style page](/web-services/embeddable-hub/style/)                                                    |
| modioUrl      | string         | Informs the Embeddable Hub of the URL of the containing site                                                                                                      |
| modioWindow   | number         | Informs the Embeddable Hub of the height of the user's browser window                                                                                             |

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
  "allowSubscribing": boolean
  "allowRating": boolean
  "allowDownloading": boolean
  "allowCommenting": boolean
  "showComments": boolean
  "showCollection": boolean
  "showGuides": boolean
  "allowFiltering": boolean
  "allowSearching": boolean
  "showUserAvatars": boolean
  "showSortTabs": boolean
  "allowInfiniteScroll": boolean
  "allowLinks": boolean
  "filterRightSide": boolean
  "nameRightSide": boolean
  "ugcPerPage": number
  "agreementUrls": string[]
  "companyName": string
  "minAge": number
}
```

#### IModioStyle

```Typescript
{
  "pageBackground": string
  "modalBackground": string
  "buttonRadius": number
  "linkColor": string
  "inputBackgroundColor": string
  "primaryButtonColor": string
  "primaryButtonColorHover": string
  "primaryButtonBorderColor": string
  "primaryButtonBorderColorHover": string
  "secondaryButtonColor": string
  "secondaryButtonColorHover": string
  "secondaryButtonBorderColor": string
  "secondaryButtonBorderColorHover": string
  "activeButtonColor": string
  "activeButtonColorHover": string
  "activeButtonBorderColor": string
  "activeButtonBorderColorHover": string
  "tileBackgroundColor": string
  "tileBorderColor": string
  "tileBorderWidth": number
  "tileBorderRadius": number
}
```

### From the Embeddable Hub

| Key         | Data type | Description                                                                                              |
| ----------- | --------- | -------------------------------------------------------------------------------------------------------- |
| modioAuth   | 'refresh' | Informs the containing site that the provided ID token has expired or is invalid and should be refreshed |
| modioHeight | number    | Informs the containing site of the Embeddable Hub's scroll height                                        |
| modioInit   | true      | Informs the containing site that the Embeddable Hub has loaded                                           |
| modioPage   | string    | Informs the containing site of the current page the Embeddable Hub is on                                 |
| modioScroll | number    | Used to control the vertical scroll position of the containing window                                    |
