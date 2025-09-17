---
id: restapi-sorting
title: Sorting
slug: /restapi/sorting
---

All endpoints are sorted by the `id` field in ascending order by default (oldest first). You can override this by including a `_sort` with the field you want to sort by in the request. You cannot sort on fields in nested objects, so if a game contains a tags object you cannot sort on the `tag name` field, but you can sort by the games `name` since the games `name` resides in the parent object.

__NOTE:__ Some endpoints like [Get Mods](/restapi/docs/get-mods) have special sort columns like `popular`, `downloads`, `rating` and `subscribers` which are documented.

### _sort (Sort)

```
v1/games?_sort=name
```

Sort by a field, in ascending or descending order.

- `?_sort=name` - Sort `name` in ascending order

- `?_sort=-name` - Sort `name` in descending order (by prepending a `-`)

