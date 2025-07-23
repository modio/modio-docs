---
id: status-and-visibility
title: Status and Visibility
slug: /restapi/docs/status-and-visibility/
---

To manage games and mods via the API we use the fields `status` and `visible`. The values of these fields determines what is returned in API requests, so it is important to understand who is authorized to view what content.

### Visible attribute states & privileges

Only mods use the `visible` attribute allowing mod admins to control their availability. Public is the _default value_:

Meaning | Value | Description | Modify Authorization | Filter Authorization
---------- | ------- | ---------- | ------- | ----------
Hidden | 0 | Resource is hidden and not returned when browsing.<br /><br />If requested directly it will be returned provided the user is an admin or subscribed to the content. All resources are always returned via the [/me](#me) endpoints. | Game & Mod Admins | Game & Mod Admins
Public | 1 | Resource is visible and returned via all endpoints. | Game & Mod Admins | Everyone

### Status attribute states & privileges

Games and mods use the `status` attribute allowing game admins to control their availability. For mods this is important because it allows game admins to control which mods are available without changing the `visible` value set by the mod admin. Not accepted is the _default value_ until changed by a game admin, or if a file is added to a mods profile it will be moved to an accepted state (provided the game developer has elected _"not to curate"_ new mods):

Meaning | Value | Description | Modify Authorization | Filter Authorization
---------- | ------- | ------- | ------- | ----------
Not Accepted | 0 | Resource is not accepted and not returned when browsing.<br /><br />Games will be returned if requested [directly](#get-game) provided the user is an admin or the `api_key` used belongs to the game.<br /><br />Mods will be returned if requested [directly](#get-mod) provided the user is an admin or subscribed to the content. All resources are always returned via the [/me](#me) endpoints. | Game Admins Only | Game Admins Only
Accepted | 1 | Resource is accepted and returned via all endpoints. | Game Admins Only | Everyone
Deleted | 3 | Resource is deleted and only returned via the [/me](#me) endpoints. | Game Admins Only | Game Admins Only

### Game admin privileges

As a game admin, you can modify your games `status` to show or hide it from API requests. When a game is not accepted _you_ can still view it provided you are the games admin or using the games `api_key`. You can call [Get User Games endpoint](#get-user-games) to retrieve all games associated with the authenticated user regardless of their `status`.

By default mods connected to a game will not be returned if they are hidden or not accepted. As a game admin, you can modify a mods `status` and `visible` fields and filter by these values (to view content normal users cannot see). __We recommend__ you only change the `status` and let mod admins control the `visible` field.

### Mod admin privileges

As a mod admin, you can modify `visible` to show or hide your mod from API requests. You _cannot_ modify the `status` of your mod. When a mod is hidden _you_ can still view it provided you are the mods admin or subscribed to the mod. You can call [Get User Mods endpoint](#get-user-mods) to retrieve all mods associated with the authenticated user regardless of their `status` and `visible`.

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

Due to the requirement of certain `status` & `visible` values only being available to administrators. We have restricted the amount of [filters](#filtering) available for _non-game admins_ and thus for both of these fields _only_ direct matches __=__ and __-in__ are permitted. Attempting to apply game admin filters without the required permissions will result in a `403 Forbidden` [error response](#error-object).

