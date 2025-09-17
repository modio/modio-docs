---
id: restapi-introduction
title: Introduction
slug: /restapi/introduction
---

# mod.io API v1

Using the mod.io REST API requires you to have an __API key__. If you are a game developer, you can access the API key for any game you are an administrator of via the [mod.io library dashboard](https://mod.io/library), or you can add a [new game here](https://mod.io/g/add). If you are a user working on tools, sites and plugins, you can access an API key for [your user account here](https://mod.io/me/access). You should also copy the __API path__, as all games and users get a unique URL to use when making requests to API endpoints:

- Games API path: `https://g-{your-game-id}.modapi.io/v1`
- Users API path: `https://u-{your-user-id}.modapi.io/v1`

The above URLs and paths change if you are using [our test environment](#testing).

:::important
We recommend only using the REST API only when a custom integration is required. In all other situations, we recommend the use of our [Engine Plugins or C++ SDK](/getting-started#connect-to-modio), as they are highly optimized, and designed for rapid integration into games.
:::

## Implementation

Here is a brief list of the things to know about our API, as explained in more detail in the following sections.

- All requests to the API must be made over HTTPS (TLS).
- All API responses are always in `application/json` format.
- Any POST request with a binary payload must supply the `Content-Type: multipart/form-data` header.
- Any non-binary POST, PUT and DELETE requests must supply the `Content-Type: application/x-www-form-urlencoded` header.
- Any non-binary payload can be supplied in JSON format using the `input_json` parameter.

## Authentication

Authentication can be done via 5 ways:

- Use an [API key](https://mod.io/me/access) for **Read-only** access (get a [test environment](#testing) API key here)
- Use the [Email Authentication Flow](/restapi/docs/request-email-security-code) for **Read and Write** access (it creates an OAuth 2 Access Token via **email**)
- Use the [Platform Authentication Flow](/restapi/docs/authenticate-via-steam) for **Read and Write** access (it creates an OAuth 2 Access Token automatically on popular platforms such as **Steam and Xbox**)
- Use the [OpenID Authentication Flow](/restapi/docs/authenticate-via-openid) for **Read and Write** access (it creates an OAuth 2 Access Token automatically using your identity provider for SSO)
- Manually create an [OAuth 2 Access Token](https://mod.io/me/access) for **Read and Write** access (get a [test environment](#testing) OAuth 2 token here)

All users and games are issued an API key which must be included when querying the API. It is quick and easy to use but limited to read-only GET requests, due to the limited security it offers. If you want players to be able to add, edit, rate and subscribe to content, you will need to use an authentication method that generates an OAuth 2 Access token. These [authentication methods](/restapi/docs/authenticate-via-steam) are explained in detail here.

Authentication Type | In | HTTP Methods | Abilities | Purpose
---------- | ---------- | ---------- | ---------- | ---------- 
API Key | Query | GET | Read-only GET requests and authentication flows. | Browsing and downloading content. Retrieving access tokens on behalf of users.
Access Token (OAuth 2) | Header | GET, POST, PUT, DELETE | Read, create, update, delete. | View, add, edit and delete content the authenticated user has subscribed to or has permission to change.

You can use an OAuth 2.0 bearer token instead of an API key for GET endpoints (excluding [Authentication](/restapi/docs/authenticate-via-steam) endpoints). But remember, if you provide both an Access Token (OAuth 2) and an API key in one request, the access token takes precedence and the API key is ignored. So, always ensure you use a valid access token and have the process in place to get a new token when the old one expires.

### Web Overlay Authentication

At the moment it is not possible to open the mod.io website in-game with the user pre-authenticated, however you can provide a hint by appending `?portal=PORTAL` to the end of the URL. What this tells mod.io, is that when the user attempts to perform an action that requires authentication, they will be prompted to login with their `PORTAL` account. For example if you want to take a mod creator to their mod webpage in-game on Steam, the URL would look something like: `https://mod.io/g/gamename/m/modname?portal=steam`. You can optionally add `&login=auto` as well to automatically start the login process. [Supported portals](/restapi/platforms#targeting-a-portal) can be found here.

### Scopes (OAuth 2)

mod.io allows you to specify the permission each access token has (default is _read+write_), this is done by the use of scopes. See below for a full list of scopes available, you must include at least one scope when generating a new token.

Scope | Abilities
---------- | ----------
`read` | When authenticated with a token that *only* contains the `read` scope, you will only be able to read data via GET requests. 
`write` | When authenticated with a token that contains the `write` scope, you are able to add, edit and remove resources.
`read+write` | The above scopes combined. _Default for email and external ticket verification flow._

## Making Requests

Requests to the mod.io API are to be over HTTPS (Port 443), any requests made over HTTP will return a `400 Bad Request` response.

### Using an API Key

```
curl https://g-{your-game-id}.modapi.io/v1/games?api_key=xxxxxxxxxxxxxxxx
``` 

To authenticate using your unique 32-character API key, append the `api_key=xxxxxxxxxxxxxxxx` parameter to the end of your request. Remember that using an API key means requests are read-only, if you want to create, update or delete resources - authentication via OAuth 2 is required which you can [set up with your api key](#authentication).

### Using an Access Token

> Example POST request with no binary files

```shell
curl -X POST https://g-1.modapi.io/v1/games/1/mods/1/tags \
  -H 'Authorization: Bearer your-token-here' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'tags[]=Weapon' \
  -d 'tags[]=Dual-Wielding'
```

To authenticate using an OAuth 2 access token, you must include the HTTP header `Authorization` in your request with the value Bearer *your-token-here*. Verification via Access Token allows much greater power including creating, updating and deleting resources that you have access to. Also because OAuth 2 access tokens are tied to a user account, you can personalize the output by viewing content they are subscribed and connected to via the [me endpoint](/restapi/docs/get-authenticated-user) and by using relevant filters.

### Access Token Lifetime & Expiry

By default, all access token's are long-lived - meaning they are valid for a common year (not leap year) from the date of issue. You should architect your application to smoothly handle the event in which a token expires or is revoked by the user themselves or a mod.io admin, triggering a `401 Unauthorized` API response.

If you would like tokens issued through your game to have a shorter lifespan, you can do this by providing the `date_expires` parameter on any endpoint that returns an access token such as the [Email Exchange](/restapi/docs/request-email-security-code) or [Authenticate via Steam](/restapi/docs/authenticate-via-steam) endpoints. If the parameter is not supplied, it will default to 1 year from the request date, if the supplied parameter value is above one year or below the current server time it will be ignored and the default value restored.

### Request Content-Type

If you are making a request that includes a file, your request `Content-Type` header __must__ be `multipart/form-data`, otherwise if the request contains data (but no files) it should be `application/x-www-form-urlencoded`, which is UTF-8 encoded.

> Example POST request with binary file

```shell
curl -X POST https://g-1.modapi.io/v1/games/1/mods \
  -H 'Authorization: Bearer your-token-here' \
  -H 'Content-Type: multipart/form-data' \ 
  -F 'logo=@path/to/image.jpg' \
  -F 'name=Rogue Knight Clear Skies' \
  -F 'homepage=http://www.clearsies-rk.com/' \
  -F 'summary=It rains in Rogue Knight an awful lot, want sunshine all the time? Yeah you do.'
```

Body Contains | Method | Content-Type
---------- | ------- | -------
Binary Files | POST | `multipart/form-data`
Non-Binary Data | POST, PUT, DELETE | `application/x-www-form-urlencoded`
Nothing | GET | No `Content-Type` required.

If the endpoint you are making a request to expects a file it will expect the correct `Content-Type` as mentioned. Supplying an incorrect `Content-Type` header will return a `415 Unsupported Media Type` response.

### JSON Request Data

> Example json-encoded POST request

```shell
curl -X POST https://g-1.modapi.io/v1/games/1/mods/1/team \
  -H 'Authorization: Bearer your-token-here' \
  -H 'Content-Type: application/x-www-form-urlencoded' \  
  -d 'input_json={"email": "johnsmith@mod.io", "level": 8, "position": "Squad Leader"}'
```

For POST & PUT requests that do _not submit files_ you have the option to supply your data as HTTP POST parameters, or as a _UTF-8 encoded_ JSON object inside the parameter `input_json` which contains all payload data. Regardless, whether you use JSON or not the `Content-Type` of your request still needs to be `application/x-www-form-urlencoded` with the data provided in the body of the request.

__NOTE:__ If you supply identical key-value pairs as a request parameter and also as a parameter in your JSON object, the JSON object will take priority.

### Response Content-Type

Responses will __always__ be returned in `application/json` format.

## Response Codes

Here is a list of the most common HTTP response codes you will see while using the API.

Response Code | Meaning
---------- | -------
`200` | OK -- Your request was successful.
`201` | Created -- Resource created, inspect Location header for newly created resource URL.
`204` | No Content -- Request was successful and there was no data to be returned.
`400` | Bad Request -- Server cannot process the request due to malformed syntax or invalid request message framing.
`401` | Unauthorized -- Your API key/access token is incorrect, revoked, or expired.
`403` | Forbidden -- You do not have permission to perform the requested action.
`404` | Not Found -- The requested resource could not be found.
`405` | Method Not Allowed -- The method of your request is incorrect.
`406` | Not Acceptable -- You supplied or requested an incorrect Content-Type.
`409` | Conflict -- The request could not be completed due to a competing request (duplicate POST requests).
`422` | Unprocessable Entity -- The request was well formed but unable to be followed due to semantic errors.
`429` | Too Many Requests -- You have made too [many requests](/restapi/rate-limiting), inspect headers for reset time.
`500` | Internal Server Error -- The server encountered a problem processing your request. Please try again. (rare)
`503` | Service Unavailable -- We're temporarily offline for maintenance. Please try again later. (rare)

## Response Formats

The way in which mod.io formats responses is entirely dependant on whether the requesting endpoint is returning a single item or a collection of items.

### Single item Responses

For single items, mod.io returns a __single JSON object__ which contains the requested resource. There is no nesting for single responses.

```json
{
    "id": 2,
    "mod_id": 2,
    "date_added": 1499841487,
    "date_scanned": 1499841487,
    "virus_status": 0,
    "virus_positive": 0,
    "virustotal_hash": "f9a7bf4a95ce20787337b685a79677cae2281b83c63ab0a25f091407741692af-1508147401",
    "filesize": 15181,
    "filehash": {
      "md5": "2d4a0e2d7273db6b0a94b0740a88ad0d"
    },
    "filename": "rogue-knight-v1.zip",
    "version": "1.3",
    "changelog": "VERSION 1.3 -- Changes -- Fixed critical castle floor bug.",
    "metadata_blob": "rogue,hd,high-res,4k,hd-textures",
    "download": {
      "binary_url": "https://g-{your-game-id}.modapi.io/v1/games/1/mods/1/files/1/download",
      "date_expires": 1579316848
    }
}
```

### Multiple item Responses
Endpoints that return more than one result, return a __JSON object__ which contains a data array and metadata fields:

- `data` - contains all data returned from the request.
- metadata fields - contains [pagination metadata](/restapi/pagination) to help you paginate through the API.

```json
{
	"data": [
		{
    		"id": 2,
    		"mod_id": 2,
    		"date_added": 1499841487,
    		"date_scanned": 1499841487,
    		"virus_status": 0,
    		"virus_positive": 0,
    		"virustotal_hash": "f9a7bf4a95ce20787337b685a79677cae2281b83c63ab0a25f091407741692af-1508147401",
    		"filesize": 15181,
    		"filehash": {
    		  "md5": "2d4a0e2d7273db6b0a94b0740a88ad0d"
    		},
    		"filename": "rogue-knight-v1.zip",
    		"version": "1.3",
    		"changelog": "VERSION 1.3 -- Changes -- Fixed critical castle floor bug.",
    		"metadata_blob": "rogue,hd,high-res,4k,hd-textures",
    		"download": {
    		  "binary_url": "https://g-{your-game-id}.modapi.io/v1/games/1/mods/1/files/1/download/c489a0354111a4d76640d47f0cdcb294",
    		  "date_expires": 1579316848
    		}
		},
		{
			...
		},
	],
	"result_count": 100,
	"result_limit": 100,
	"result_offset": 0,
	"result_total": 127
}  
```

### Optimize your requests

You should always plan to minimize requests and cache API responses. It will make your app feel fluid and fast for your users. If your usage is excessive we shall reach out to discuss ways of optimizing, but our aim is to never restrict legitimate use of the API. We have set high limits that should cover 99% of use-cases, and are happy to [discuss your scenario](mailto:developers@mod.io?subject=API%20usage) if you require more.

## Testing

To help familiarize yourself with the mod.io API and to ensure your implementation is battle-hardened and operating as intended, we have setup a test sandbox. The test sandbox allows you to make requests to the API whilst your integration is a work in progress and the submitted data is not important. When you are ready to go live it's as easy as adding your game to the production environment, substituting the test API path for the production API path, and updating the `api_key` and `game_id` you are using to the values from your games profile on production.

To begin using the test sandbox you will need to [register a test account](https://test.mod.io) and [add your game](https://test.mod.io/g/add). In your [test library dashboard](https://mod.io/library) you will only see games you are a team member of and there is no connection between the data added to the test environment and production. We highly recommend you use the test environment when integrating as it allows you to keep your development private, and you can submit as much dummy data as you need to try the functionality required, without having to clean it up at the end.

- Test Games API path: `https://g-{your-game-id}.test.mod.io/v1`
- Test Users API path: `https://u-{your-user-id}.test.mod.io/v1`
