---
id: restapi-getting-started
title: Getting Started
slug: /restapi/docs/restapi-getting-started/
sidebar_position: 0
---

# Getting Started

## mod.io API v1

Welcome to the official documentation for [mod.io](https://mod.io), an API for developers to add mod support to their games. Using our [SDKs and plugins](#implementation) for popular and custom game engines, getting your creator community started and making the mods they create discoverable and installable via your in-game menu is straight forward, with full cross-platform support. If you are a game developer, you can manage your games and API access via your [mod.io library dashboard](https://mod.io/library). If you are a user creating tools and apps, you can request API access via your [mod.io account](https://mod.io/me/access).

__API path:__ [https://*.modapi.io/v1](https://*.modapi.io/v1) (see your API access dashboard)

## How It Works

Compatible with all builds of your game on all platforms and stores, mod.io is a clientless and standalone solution which gives you complete control over your modding ecosystem.

![mod.io Overview](getting-started/images/sdk.png)

## Implementation

Once you have added your game to mod.io and got your [game ID and API key](https://mod.io/library), you can start integrating the mod.io REST API into your game, tools and sites. There are 3 options to get connected which you can use interchangeably depending on your needs. Here's the breakdown of each option.

Option | Usage | Suited for | Docs
---------- | ---------- | ---------- | ---------
__API__ | For connecting directly to the mod.io REST API. | Web apps that need a JSON REST API, or game developers that like a challenge and want control over their implementation. | You are reading them
__SDK__ | Drop our [open source C/C++ SDK](https://github.com/modio/modio-sdk) into your game to call mod.io functionality. | Developers that want a SDK that abstracts the uploading, downloading and unzip flows behind easy to use function calls. | [Here](https://docs.mod.io/cppsdkref/)
__Tools/Plugins__ | Use tools, plugins and wrappers created by the community to make implementation in various engines easy. | Game developers that want a pre-built modding solution for their engine (Unity, Unreal, GameMaker, Construct) of choice. | Available below

### Official Tools

Plugins and wrappers made or supported by the mod.io team

| &nbsp; | &nbsp; | &nbsp; | &nbsp;
-- | -- | -- | ---
![Unity Plugin](getting-started/images/tool-unity.png) | __Unity Plugin__<br />[SDK](https://github.com/modio/modio-unity)<br />[Getting Started](https://docs.mod.io/unityref/)<br />[Sample Project](https://github.com/modio/modio-unity-sample)<br /> | ![Unreal Plugin](getting-started/images/tool-unreal.png) | __Unreal Plugin__<br />[SDK](https://github.com/modio/modio-ue)<br />[Getting Started](https://docs.mod.io/unrealref/)<br />[UE4 Sample Project](https://github.com/modio/modio-ue4-sample)<br />[UE5 Sample Project](https://github.com/modio/modio-ue5-sample)<br />
![GameMaker](getting-started/images/tool-gm.png) | __GameMaker__<br />[SDK](https://github.com/YoYoGames/GMEXT-mod.io)<br />[Getting Started](https://github.com/YoYoGames/GMEXT-mod.io/wiki)<br /> | ![C/C++ SDK](getting-started/images/tool-ccpp.png) | __C/C++ SDK__<br />[SDK](https://github.com/modio/modio-sdk)<br />[Getting Started](https://docs.mod.io/cppsdkref/)<br />
![Discord Bot](getting-started/images/tool-discordbot.png) | __Discord Bot__<br />[Instructions](https://github.com/modio/modio-discord-bot)<br />[Invite](https://discordbot.mod.io)<br /> |

### Community Tools

Plugins and wrappers made by our awesome community. Is there a tool out there that should be added to the list? [Get in touch!](mailto:developers@mod.io?subject=Publish Tool)

| &nbsp; | &nbsp; | &nbsp; | &nbsp;
--- | --- | --- | ---
![Construct 2](getting-started/images/tool-c2.png) | __Construct 2 Plugin__<br />[SDK](https://github.com/modio/modio-construct2)<br />[Getting Started](https://github.com/modio/modio-construct2)<br /> | ![Haxe Wrapper](getting-started/images/tool-haxe.png) | __Haxe Wrapper__<br />[SDK](https://github.com/modio/modio-haxe)<br />[Getting Started](https://github.com/Turupawn/modioOpenFLExample#openfl-integration)<br />
![Modio.NET](getting-started/images/tool-dotnet.png) | __Modio.NET__<br />[SDK](https://github.com/nickelc/modio.net)<br />[Getting Started](https://github.com/nickelc/modio.net)<br /> | ![Rust Wrapper](getting-started/images/tool-rust.png) | __Rust Wrapper__<br />[SDK](https://crates.io/crates/modio)<br />[Getting Started](https://github.com/nickelc/modio-rs)<br />[Tutorials](https://github.com/nickelc/modio-rs/tree/master/examples)<br />
![Python Wrapper](getting-started/images/tool-python.png) | __Python Wrapper__<br />[SDK](https://github.com/ClementJ18/mod.io)<br />[Getting Started](https://github.com/ClementJ18/mod.io/#example)<br />[Tutorials](https://github.com/ClementJ18/mod.io/tree/master/examples)<br /> | ![Command Lisp](getting-started/images/tool-commonlisp.png) | __Common Lisp__<br />[Github](https://github.com/Shinmera/cl-modio)<br />[Getting Started](https://shinmera.github.io/cl-modio/)<br />
![Command Line Tool](getting-started/images/tool-cmd.png) | __Command Line Tool__<br />[CMD](https://github.com/nickelc/modiom)<br />[Getting Started](https://github.com/nickelc/modiom)<br /> | ![GitHub Action Mod Uploader](getting-started/images/tool-actions.png) | __GitHub Action Mod Uploader__<br />[GitHub](https://github.com/nickelc/upload-to-modio)<br />[Usage](https://github.com/nickelc/upload-to-modio#usage)<br />

Here is a brief list of the things to know about our API, as explained in more detail in the following sections.

- All requests to the API must be made over HTTPS (TLS).
- All API responses are in `application/json` format.
- Any POST request with a binary payload must supply the `Content-Type: multipart/form-data` header.
- Any non-binary POST, PUT and DELETE requests must supply the `Content-Type: application/x-www-form-urlencoded` header.
- Any non-binary payload can be supplied in JSON format using the `input_json` parameter.

## Authentication

Authentication can be done via 5 ways:

- Use an [API key](https://mod.io/me/access) for **Read-only** access (get a [test environment](https://test.mod.io/me/access) API key here)
- Use the [Email Authentication Flow](#email) for **Read and Write** access (it creates an OAuth 2 Access Token via **email**)
- Use the [Platform Authentication Flow](#steam) for **Read and Write** access (it creates an OAuth 2 Access Token automatically on popular platforms such as **Steam and Xbox**)
- Use the [OpenID Authentication Flow](#openid) for **Read and Write** access (it creates an OAuth 2 Access Token automatically using your identity provider for SSO)
- Manually create an [OAuth 2 Access Token](https://mod.io/me/access) for **Read and Write** access (get a [test environment](https://test.mod.io/me/access) OAuth 2 token here)

All users and games are issued an API key which must be included when querying the API. It is quick and easy to use but limited to read-only GET requests, due to the limited security it offers. If you want players to be able to add, edit, rate and subscribe to content, you will need to use an authentication method that generates an OAuth 2 Access token. These [authentication methods](#authentication-2) are explained in detail here.

Authentication Type | In | HTTP Methods | Abilities | Purpose
---------- | ---------- | ---------- | ---------- | ---------- 
API Key | Query | GET | Read-only GET requests and authentication flows. | Browsing and downloading content. Retrieving access tokens on behalf of users.
Access Token (OAuth 2) | Header | GET, POST, PUT, DELETE | Read, create, update, delete. | View, add, edit and delete content the authenticated user has subscribed to or has permission to change.

You can use an OAuth 2.0 bearer token instead of an API key for GET endpoints (excluding [Authentication](#authentication-2) endpoints). But remember, if you provide both an Access Token (OAuth 2) and an API key in one request, the access token takes precedence and the API key is ignored. So, always ensure you use a valid access token and have the process in place to get a new token when the old one expires.

### Web Overlay Authentication

At the moment it is not possible to open the mod.io website in-game with the user pre-authenticated, however you can provide a hint by appending `?portal=PORTAL` to the end of the URL. What this tells mod.io, is that when the user attempts to perform an action that requires authentication, they will be prompted to login with their `PORTAL` account. For example if you want to take a mod creator to their mod webpage in-game on Steam, the URL would look something like: `https://mod.io/g/gamename/m/modname?portal=steam`. You can optionally add `&login=auto` as well to automatically start the login process. [Supported portals](#targeting-a-portal) can be found here.

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
curl -X get https://*.modapi.io/v1/games?api_key=xxxxxxxxxxxxxxxx
``` 

To authenticate using your unique 32-character API key, append the `api_key=xxxxxxxxxxxxxxxx` parameter to the end of your request. Remember that using an API key means requests are read-only, if you want to create, update or delete resources - authentication via OAuth 2 is required which you can [set up with your api key](#authentication).

### Using an Access Token

> Example POST request with no binary files

```shell
curl -X POST https://*.modapi.io/v1/games/1/mods/1/tags \
  -H 'Authorization: Bearer your-token-here' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'tags[]=Unity' \
  -d 'tags[]=FPS'
```

To authenticate using an OAuth 2 access token, you must include the HTTP header `Authorization` in your request with the value Bearer *your-token-here*. Verification via Access Token allows much greater power including creating, updating and deleting resources that you have access to. Also because OAuth 2 access tokens are tied to a user account, you can personalize the output by viewing content they are subscribed and connected to via the [me endpoint](#me) and by using relevant filters.

### Access Token Lifetime & Expiry

By default, all access token's are long-lived - meaning they are valid for a common year (not leap year) from the date of issue. You should architect your application to smoothly handle the event in which a token expires or is revoked by the user themselves or a mod.io admin, triggering a `401 Unauthorized` API response.

If you would like tokens issued through your game to have a shorter lifespan, you can do this by providing the `date_expires` parameter on any endpoint that returns an access token such as the [Email Exchange](#email) or [Authenticate via Steam](#steam) endpoints. If the parameter is not supplied, it will default to 1 year from the request date, if the supplied parameter value is above one year or below the current server time it will be ignored and the default value restored.

### Request Content-Type

If you are making a request that includes a file, your request `Content-Type` header __must__ be `multipart/form-data`, otherwise if the request contains data (but no files) it should be `application/x-www-form-urlencoded`, which is UTF-8 encoded.

> Example POST request with binary file

```shell
curl -X POST https://*.modapi.io/v1/games/1/mods \
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
curl -X POST https://*.modapi.io/v1/games/1/mods/1/team \
  -H 'Authorization: Bearer your-token-here' \
  -H 'Content-Type: application/x-www-form-urlencoded' \  
  -d 'input_json={
		"email": "developers@mod.io",
		"level": 8,
		"position": "King in the North"
	  }'
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
`429` | Too Many Requests -- You have made too [many requests](#rate-limiting), inspect headers for reset time.
`500` | Internal Server Error -- The server encountered a problem processing your request. Please try again. (rare)
`503` | Service Unavailable -- We're temporarily offline for maintenance. Please try again later. (rare)

## Response Formats

> Single object response

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
      "binary_url": "https://*.modapi.io/v1/games/1/mods/1/files/1/download",
      "date_expires": 1579316848
    }
}
```

The way in which mod.io formats responses is entirely dependant on whether the requesting endpoint is returning a single item or a collection of items.

### Single item Responses

For single items, mod.io returns a __single JSON object__ which contains the requested resource. There is no nesting for single responses.

### Multiple item Responses

Endpoints that return more than one result, return a __JSON object__ which contains a data array and metadata fields:

- `data` - contains all data returned from the request.
- metadata fields - contains [pagination metadata](#pagination) to help you paginate through the API.

> Multiple objects response

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
    		  "binary_url": "https://*.modapi.io/v1/games/1/mods/1/files/1/download/c489a0354111a4d76640d47f0cdcb294",
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

To help familiarize yourself with the mod.io API and to ensure your implementation is battle-hardened and operating as intended, we have setup a test sandbox which is identical to the production environment. The test sandbox allows you to make requests to the API whilst your integration is a work in progress and the submitted data is not important. When you are ready to go live it's as easy as adding your game to the production environment, substituting the test API path for the production API path, and updating the `api_key` and `game_id` you are using to the values from your games profile on production.

To begin using the test sandbox you will need to [register a test account](https://test.mod.io) and [add your game](https://test.mod.io/g/add). You will only see games you are a team member of and there is no connection between the data added to the test environment and production. We highly recommend you use the test environment when integrating as it allows you to keep your development private, and you can submit as much dummy data as you need to try the functionality required, without having to clean it up at the end.

__Test version:__ `v1`

__Test site:__ [https://test.mod.io](https://test.mod.io)

__Test API path:__ [https://api.test.mod.io/v1](https://api.test.mod.io/v1)

__NOTE__: We periodically reset the test environment to default - with the exception of user accounts so please do not rely on it to store important information. Any data you intend on persisting should be submitted to the production environment.

## Whitelabel

If you are a large studio or publisher and require a private, in-house, custom solution that accelerates your time to market with a best-in-class product, reach out to [developers@mod.io](mailto:developers@mod.io?subject=Whitelabel%20license) to discuss the licensing options available.

## Contact

If you spot any errors within the mod.io documentation, have feedback on how we can make it easier to follow or simply want to discuss how awesome mods are, feel free to reach out to [developers@mod.io](mailto:developers@mod.io?subject=API) or come join us in our [discord channel](https://discord.mod.io). We are here to help you grow and maximise the potential of mods in your game.
