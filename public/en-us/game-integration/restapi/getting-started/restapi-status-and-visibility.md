---
id: restapi-status-and-visibility
title: Status & Visibility
slug: /restapi/status-and-visibility
---

To manage the status and visibility of games and mods via the API we use the fields `status` and `visible` fields and want to draw additional attention to them as the values of these fields determines what data is returned. It is important to understand who is authorized to view what content on mod.io.

### Visible attribute states & privileges

Only <Link to="/restapi/docs/schemas/mod-object">mods</Link> use the `visible` attribute allowing mod admins to control their availability. Public is the _default value_:

Meaning | Value | Description | Modify Authorization | Filter Authorization
---------- | ------- | ---------- | ------- | ----------
Hidden | 0 | Resource is hidden and not returned when browsing.<br /><br />If requested directly it will be returned provided the user is an admin or subscribed to the content. All resources are always returned via the [/me](/restapi/docs/get-authenticated-user) endpoints. | Game & Mod Admins | Game & Mod Admins
Public | 1 | Resource is visible and returned via all endpoints. | Game & Mod Admins | Everyone

### Status attribute states & privileges

<Link to="/restapi/docs/schemas/game-object">Games</Link>  and <Link to="/restapi/docs/schemas/mod-object">mods</Link> use the `status` attribute allowing game admins to control their availability. For mods this is important because it allows game admins to control which mods are available without changing the `visible` value set by the mod admin. Not accepted is the _default value_ until changed by a game admin, or if a file is added to a mods profile it will be moved to an accepted state provided the game developer does not have curation enabled.

Meaning | Value | Description | Modify Authorization | Filter Authorization
---------- | ------- | ------- | ------- | ----------
Not Accepted | 0 | Resource is not accepted and not returned when browsing.<br /><br />Games will be returned if requested [directly](/restapi/docs/get-game) provided the user is an admin or the `api_key` used belongs to the game.<br /><br />Mods will be returned if requested [directly](/restapi/docs/get-mod) provided the user is an admin or subscribed to the content. All resources are always returned via the [/me](/restapi/docs/get-authenticated-user) endpoints. | Game Admins Only | Game Admins Only
Accepted | 1 | Resource is accepted and returned via all endpoints. | Game Admins Only | Everyone
Deleted | 3 | Resource is deleted and only returned via the [/me](/restapi/docs/get-authenticated-user) endpoints. | Game Admins Only | Game Admins Only

### Game team member privileges

As the member of a game team, you can modify your games `status` to show or hide it from API requests. When a game is not accepted _you_ can still view it provided you are the games admin or using the games `api_key`. You can call the <Link to="/restapi/docs/get-user-games">Get User Games</Link> endpoint to retrieve all games associated with the authenticated user regardless of the status of the game(s).

By default mods connected to a game will not be returned if they are hidden or not accepted. As the member of a game team, you can modify a mods `status` and `visible` fields and filter by these values (to view content normal users cannot see). __We recommend__ you only change the `status` and let mod admins control the `visible` field.

:::info
Adjusting settings such as which curation option you wish to use for your game are only available via our official dashboard on the mod.io website.
:::

### Mod team member privileges

As a mod team member, you can modify the `visible` field to show or hide your mod from API requests. You _cannot_ modify the `status` of your mod. When a mod is hidden _you_ can still view it provided you are in the mod team _or_ the authenticated user is subscribed to the mod. You can call the <Link to="/restapi/docs/get-user-mods">Get User Mods</Link> endpoint to retrieve all mods associated with the authenticated user regardless of their `status` and `visible` values.

> Valid status & visibility filters

```
status=1
status-in=0,1
visible=1 
visible-in=0,1
```

> Game Admin Only status & visibility filters

```
status-not-in=1,2
status-gt=1
visible-not-in=1
visible-st=1
```

### Important Note When Filtering

Due to the requirement of certain `status` & `visible` values only being available to administrators. We have restricted the amount of <Link to="/restapi/filtering/">filters</Link> available for _non-game admins_ and thus for both of these fields _only_ direct matches __=__ and __-in__ are permitted. Attempting to use game team member filters without the required permissions will result in a `403 Forbidden` <Link to="/restapi/errors#error-object">error response</Link>.

