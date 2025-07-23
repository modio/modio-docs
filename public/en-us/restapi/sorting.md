---
id: sorting
title: Sorting
slug: /restapi/docs/sorting/
---

All endpoints are sorted by the `id` column in ascending order by default (oldest first). You can override this by including a `_sort` with the column you want to sort by in the request. You can sort on all columns __in the parent object only__. You cannot sort on columns in nested objects, so if a game contains a tags object you cannot sort on the `tag name` column, but you can sort by the games `name` since the games `name` resides in the parent object.

__NOTE:__ Some endpoints like [Get Mods](#get-mods) have special sort columns like `popular`, `downloads`, `rating` and `subscribers` which are documented alongside the filters.

### _sort (Sort)

```
v1/games?_sort=name
```

Sort by a column, in ascending or descending order.

- `?_sort=name` - Sort `name` in ascending order

- `?_sort=-name` - Sort `name` in descending order (by prepending a `-`)

