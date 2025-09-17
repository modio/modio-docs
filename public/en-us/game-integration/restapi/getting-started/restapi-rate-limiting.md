---
id: restapi-rate-limiting
title: Rate Limiting
slug: /restapi/rate-limiting
sidebar_position: 0
---

# Rate Limiting

mod.io implements rate limiting to stop users abusing the service. Exceeding the rate limit will result in requests receiving a **429 Too Many Requests** response until the reset time is reached.

It is **highly recommended** you architect your app to check for the `429 Too Many Requests` HTTP response code, and ensure you do not continue to make requests until the duration specified in the `retry-after` header (in seconds) passes. Be aware we enforce global rate limits which will result in all requests being blocked (error ref **11008**).

We also enforce per-endpoint rate limits which will only result in requests to that endpoint being blocked (error ref **11009**) until the duration specified in the `retry-after` header (in seconds) passes, allowing you to continue to call other endpoints. Users who continue to send requests despite a `429 Too Many Requests` response could potentially have their credentials revoked. The following limits are implemented by default:

### Global API key Rate Limiting

- API keys linked to a game have __unlimited requests__.
- API keys linked to a user have __60 requests per minute__.

### Global OAuth2 Rate Limiting

- User tokens are limited to __120 requests per minute__.
- User token writes are limited to __60 requests per minute__.

### Global IP Rate Limiting

- IPs are limited to __1000 requests per minute__.
- IP writes are limited to __60 requests per minute__.

### Per-Endpoint Rate Limiting

- Certain endpoints may override the defaults for security, spam or other reasons.
- When this (error ref **11009**) is encountered, its ok to continue requesting other endpoints, as the `retry-after` only applies to this endpoint.

### Headers
```
Example HTTP Header Response
---------------------
HTTP/2.0 429 Too Many Requests
...
...
retry-after: 57
```

> Example ratelimit JSON response

```json
{
	"error": {
		"code": 429,
		"error_ref": 11008,
		"message": "You have made too many requests in a short period of time, please wait and try again soon."
	}
}
```

If the rate limit is exceeded, the following header will be returned alongside the `429 Too Many Requests` HTTP response code.

- `retry-after` - Number of seconds before you can attempt to make another request to API. __NOTE:__ If the `retry-after` value is 0, that means you have hit a rolling ratelimit. Rolling ratelimits don't block for a set timeframe once the limit is reached, instead they permit a certain number of requests within the timeframe (see [this explanation](https://developers.cloudflare.com/waf/rate-limiting-rules/parameters#with-the-following-behavior)). If you encounter a 0, we recommend retrying the endpoint again after 60 seconds.
