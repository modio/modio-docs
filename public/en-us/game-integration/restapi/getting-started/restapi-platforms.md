---
id: restapi-platforms
title: Platforms
slug: /restapi/platforms
---

# Platforms

## Targeting a Platform

mod.io supports mods on all platforms. Games can enable per-platform mod file support in their dashboard if they wish to control which platforms each mod and their corresponding files can be accessed on. Otherwise, by default all mods and their files will be available on all platforms the game supports. To use per-platform filtering as intended, it's important the following headers are included in all API requests as explained below. If you have any questions about setting up cross-platform mod support in your game, please reach out to [developers@mod.io](mailto:developers@mod.io?subject=Platform%20Targeting).

When making API requests you should include the `X-Modio-Platform` header (with one of the values below), to tell mod.io what Platform the request is originating from. This header is __important__ because it enables mod.io to return data that is approved for the platform such as:

- Supported mods and files
- Supported tags the player can filter on
- Localization of content for the platform
- It also enables platform specific metrics which is important for features such as Exportable Metrics.

### Example

Consider your game client wishes to fetch all mods that have been approved and set live for Xbox Series X. By setting the HTTP header `X-Modio-Platform: xboxseriesx` in your API request to the <Link to="/restapi/docs/get-mods">Get Mods</Link> endpoint, the header informs mod.io your player is on Xbox Series X and the content returned should be specific to Xbox Series X. So when the following HTTP request is made:

```shell
curl -X GET https://g-1.modapi.io/v1/games/1/mods \
  -H 'Authorization: Bearer {your-token-here}' \
  -H 'X-Modio-Platform: xboxseriesx'
```

The response will only contain mods that are live on Xbox Series X. Official mod.io <Link to="/restapi#official-tools">Plugins and SDK's</Link>  will automatically supply this value for you providing you have specified the correct platform in the tools' settings. We __strongly recommend__ you supply this header in every request with the correct platform to enable mod.io to provide the best cross-platform experience for your players. Please see a list of supported platforms below:

Target Platform | Header Value
---------- | ----------  
Source | `source`
Windows | `windows`
Mac | `mac`
Linux | `linux`
Android | `android`
iOS | `ios`
Xbox One | `xboxone`
Xbox Series X | `xboxseriesx`
PlayStation 4 | `ps4`
PlayStation 5 | `ps5`
Switch | `switch`
Oculus | `oculus`
Windows Server | `windowsserver`
Linux Server | `linuxserver`

These are the only supported values and are case-insensitive, anything else will be ignored and default to `windows`. Have we missed a platform you are using? [Get in touch!](mailto:developers@mod.io?subject=Platform%20Support)

## Targeting a Portal

When making API requests you should include the `X-Modio-Portal` header (with one of the values below), to tell mod.io what Portal (eg. Store or App) the request is originating from. This header is __important__ because it enables mod.io to fine-tune the experience, such as returning portal-specific display names used by players on that portal (which can be a certification requirement).

### Example

Consider your game client wishes to display a users' mod.io display name as well as their portal-specific display name when browsing through mods within your game. By setting the HTTP header `X-Modio-Portal: xboxlive` in your API request to the <Link to="/restapi/docs/get-mods">Get Mods</Link> endpoint, the header informs mod.io to return the portal display name for the mod creators alongside their mod.io display name within the <Link to="/restapi/docs/schemas/user-object">User Object</Link>. So when the following HTTP request is made:

```shell
curl -X GET https://g-1.modapi.io/v1/games/1/mods \
  -H 'Authorization: Bearer {your-token-here}' \
  -H 'X-Modio-Platform: xboxseriesx'
  -H 'X-Modio-Portal: xboxlive'
```

All <Link to="/restapi/docs/schemas/user-object">User Objects</Link> which are nested in the <Link to="/restapi/docs/schemas/user-object">Mod Objects</Link> returned will have the field `display_name_portal` returned, which is determined by the `X-Modio-Portal` value in the request.

You can also instruct the mod.io website to authenticate the player using a portal from the list above (provided it is supported), as explained in [Web Overlay Authentication](#authentication). For example, if your game client has logged the player into mod.io on PlayStation using their PlayStation™Network account, and you want to open the mod.io website in-game with the player logged in using the same authentication method, you would add `?portal=psn` to the end of the URL: `https://mod.io/g/gamename?portal=psn`. You can optionally add `&login=auto` as well to automatically start the login process.

Target Portal | Header Value
---------- | ----------  
Apple | `apple`
Discord | `discord`
Epic Games Store | `epicgames`
Facebook | `facebook`
GOG | `gog`
Google | `google`
itch.io | `itchio`
Nintendo | `nintendo`
PlayStation™Network | `psn`
SSO | `sso`
Steam | `steam`
Xbox Live | `xboxlive`

These are the only supported values and are case-insensitive, anything else will be ignored. Have we missed a portal you are using? [Get in touch!](mailto:developers@mod.io?subject=Portal%20Support)

