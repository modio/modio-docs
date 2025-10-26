---
id: restapi-pagination
title: Pagination
slug: /restapi/pagination
---

# Pagination

When requesting data from endpoints that contain more than one object, you can supply an `_offset` and `_limit` to paginate through the results. Think of it as a page 1, 2, 3... system but you control the number of results per page, and the page to start from. Appended to each response will be the pagination metadata:

> Metadata example

```json
"result_count": 100,
"result_limit": 100,
"result_offset": 0,
"result_total": 127
```

Parameter | Value
---------- | ----------  
`result_count` | Number of results returned in the current request.
`result_limit` | Maximum number of results returned. Defaults to _100_ unless overridden by `_limit`.
`result_offset` | Number of results skipped over. Defaults to _0_ unless overridden by `_offset`.
`result_total` | Total number of results found.

### _limit (Limit)

```
v1/games?_limit=5
```

Limit the number of results for a request. By default _100_ results are returned per request:

- `?_limit=5` - Limit the request to 5 individual results.

### _offset (Offset)

```
v1/games?_offset=30
```

Use `_offset` to skip over the specified number of results, regardless of the data they contain. This works the same way offset does in a SQL query:

- `?_offset=30` - Will retrieve 100 results after ignoring the first 30 (31 - 130).

### Combining offset with a limit

```
v1/games?_offset=30&_limit=5
```

You can combine offset with a limit to build queries that return exactly the number of results you want:

- `?_offset=30&_limit=5` - Will retrieve 5 results after ignoring the first 30 (31 - 35).

If the `result_count` parameter matches the `result_limit` parameter (5 in this case) in the response, that means there are probably more results to get, so our next query might be:

- `?_offset=35&_limit=5` - Will retrieve the next 5 results after ignoring the first 35 (36 - 40).

