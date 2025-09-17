---
id: restapi-search
title: Search by ID
slug: /restapi/search-by-id
---

# Search by ID

If you are using the mod.io API, you are likely querying and debugging games, UGC, files and other content by ID. Instead of needing to find exact URLS, Search by ID redirects IDs to their corresponding URL on the web.

## How it works

The URL structure to lookup an ID is as follows: `https://mod.io/search/RESOURCE/ID`

![Search by ID](img/search.png)

`RESOURCE` can be any of the following:

- games
- mods
- guides
- collections
- users
- files

`ID` is the id of the content you want to locate. 

For example game 306 on mod.io is [SnowRunner](https://mod.io/g/snowrunner). You can locate SnowRunner using its ID via the following URL:

*https://mod.io/search/games/306*

:::important
This shortcut should only be used for quick translation of IDs. You should always link to the real URL for content if you can, to save a redirect. Additionally, it will not work for hidden content.
:::