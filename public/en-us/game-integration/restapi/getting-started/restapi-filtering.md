---
id: restapi-filtering
title: Filtering
slug: /restapi/filtering
---

# Filtering

mod.io has powerful filtering available to assist you when making requests to the API. You can filter on most fields __in the parent object only__. You cannot apply filters to fields in nested objects, so if a game contains a tags object you cannot filter by the `tag name` field, but you can filter by the games `name` since the games `name` resides in the parent object.

### _q (Full text search)

```
v1/games?_q=The Lord Of The Rings
```

Full-text search is a lenient search filter that _is only available_ if the endpoint you are querying contains a `name` field. Wildcards should _not_ be applied to this filter as they are ignored.

- `?_q=The Lord of the Rings` - This will return every result where the `name` column contains any of the following words: 'The', 'Lord', 'of', 'the', 'Rings'.

### = (Equals)

```
v1/games?id=10
```

The simplest filter you can apply is `fieldname` equals. This will return all rows which contain a column matching the value provided.

- `?id=10` - Get all results where the `id` field value is _10_.

### -not (Not Equal To)

```
v1/games?curation-not=1
```

Where the preceding field value does not equal the value specified.

- `?curation-not=1` - Where the `curation` field does not equal 1.

### -lk (Like + Wildcards)

```
v1/games?name-lk=texture

v1/games?name-lk=texture*

v1/games?name-lk=*texture*
```

Where the string supplied matches the preceding field value. This is equivalent to SQL's `LIKE`. Wildcard's `*` can be used to find content that partially matches as described below.

- `?name-lk=texture` - Get all results where the `name` field value is 'texture'.
- `?name-lk=texture*` - Get all results where the `name` field value begins with 'texture'. This means the query would return results for 'texture', 'textures' and 'texture pack'
- `?name-lk=*texture*` - Get all results where the `name` field value contains 'texture'. This means the query would return results for 'texture', 'HD textures' and 'armor texture pack'

### -not-lk (Not Like + Wildcards)

```
v1/games?name-not-lk=dungeon
```

Where the string supplied does not match the preceding field value. This is equivalent to SQL's `NOT LIKE`. Wildcard's `*` can be used as described above.

- `?name-not-lk=dungeon` - Get all results where the `name` field value is not 'dungeon'.

### -in (In)

```
v1/games?id-in=3,11,16,29
```

Where the supplied list of values appears in the preceding field value. This is equivalent to SQL's `IN`.

- `?id-in=3,11,16,29` - Get all results where the `id` field value is 3, 11, 16 and 29.

### -not-in (Not In)

```
v1/games?modfile-not-in=8,13,22
```

Where the supplied list of values *does not* equal the preceding field value. This is equivalent to SQL's `NOT IN`

- `?modfile-not-in=8,13,22` - Get all results where `id` field *does not* equal 8, 13 and 22.

### -max (Smaller Than or Equal To)

```
v1/games?game-max=40
```

Where the preceding field value is smaller than or equal to the value specified.

- `?game-max=40` - Get all results where the `game` smaller than or equal to 40.

### -min (Greater Than or Equal To)

```
v1/games?game-min=20
```

Where the preceding field value is greater than or equal to the value specified.

- `?game-min=20` - Get all results where the `game` field is greater than or equal to 20.

### -bitwise-and (Bitwise AND)

```
v1/games?maturity_option-bitwise-and=5
```

Some field values are represented as bitwise values within an integer. Their value depends on the bits selected. For example, suppose a field has 4 options:

- 1 = Option A
- 2 = Option B
- 4 = Option C
- 8 = Option D

You can combine any of these options by adding them together which means there are (2 ^ 4 = 16 possible combinations). For example Option A (1) and Option C (4) would be (1 + 4 = 5), Option A (1), Option C (4) and Option D (8) would be (1 + 4 + 8 = 13), all Options together would be (1 + 2 + 4 + 8 = 15).

The number of combinations makes using _equals_, _in_ and other filters a little complex. To solve this we support Bitwise AND (&) which makes it easy to match a field which contains any of the options you want.

- `?maturity_option-bitwise-and=5` - Will match the `maturity_option` field values 1, 3, 4, 5, 6, 7, 9, 11, 12, 13, 14, 15 (since these values contain the bits 1, 4 or both).

### or_fields (Filter grouping)

By default, multiple filters are combined using an "AND" operation. However, with or_fields, you can group filters together to be combined using an "OR" operation.

For example, if you want to find all mods that have been tagged with "Level" but also include mods made by the creator "UltimateModder", you can achieve this with the following query parameters:

```
v1/games/your-game/mods?tags=level&submitted_by_display_name=UltimateModder&or_fields[]=tags,submitted_by_display_name
```

This would be interpreted as "Fetch all mods where (tags in level **OR** submitted_by like UltimateModder)". Without the `or_fields` parameter, it would be treated as AND.

A few things to note:

* The `or_fields` parameter must be provided as an array.
* A maximum of 2 `or_fields` can be present in a query at any time.
* A maximum of 3 fields per `or_fields`.
