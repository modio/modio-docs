---
id: support-search
title: Search by id
slug: /support/search-by-id/
sidebar_position: 2
---

# Search by id

If you are using the mod.io API, you are likely querying and debugging games, mods, files and other content by ID. Finding those IDs on the web can be challenging because our URLs are descriptive, there is no easy way to load the content's profile without knowing its full URL. Today we are changing that by adding a helper URL that redirects IDs to their corresponding URL on the web.

![Search by ID](images/search.png)

The URL structure to lookup an ID is as follows: `https://mod.io/search/RESOURCE/ID`

`RESOURCE` can be any of the following:

- games
- mods
- users
- files

`ID` is the id of the content you want to locate. For example game 306 on mod.io is [SnowRunner](https://mod.io/g/snowrunner). You can locate SnowRunner using its ID via the following URL:

https://mod.io/search/games/306

:::tip
This shortcut should only be used for quick translation of IDs. You should always link to the real URL for content if you can, to save a redirect. Additionally, it will not work for hidden content.
:::