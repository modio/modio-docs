---
id: restapi-localization
title: Localization
slug: /restapi/localization
---

# Localization

## Localized Responses

The mod.io API provides localization for a collection of languages. To specify responses from the API to be in a particular language, simply provide the `Accept-Language` header with an [ISO 639 compliant](https://www.iso.org/iso-639-language-codes.html) language code. If a valid language code is not provided and the user is authenticated, the language they have selected in their profile will be used. All other requests will default to English (US). 

:::info
Localization for mod.io is currently a work-in-progress and thus not all responses may be in the desired language.
:::

The mod.io API provides localization for a collection of languages. To specify responses from the API to be in a particular language, simply provide the `Accept-Language` header with an [ISO 639 compliant](https://www.iso.org/iso-639-language-codes.html) language code. If a valid language code is not provided and the user is authenticated, the language they have selected in their profile will be used. All other requests will default to English (US). Consider a request where a mod is being submitted where the `name` field is too long.

```shell
curl -X POST https://g-1.modapi.io/v1/games/1/mods/1/tags \
  -H 'Authorization: Bearer {your-token-here}' \
  -H 'Content-Type: multipart/form-data' \
  -F 'logo=@path/to/logo.png' \
  -d 'name="This is a very long name that will not pass validation and I expect an error to be returned.' \
  -d 'tags[]=Weapon'
```

> Example response - assuming a validation error occurred due to the name being too long.

```json
{
    "error": {
        "code": 422,
        "message": "Überprüfung fehlgeschlagen. Bitte lesen Sie unten, um ungültige Eingaben zu korrigieren:",
        "errors": {
            "name": "Name darf maximal 50 Zeichen haben."
        }
    }
}
```

The list of supported codes includes:

Language Code | Language
---------- | ----------  
`en` | English (US) _default_
`ar` | Arabic _limited support terms dialog only_
`bg` | Bulgarian
`zh-CN` | Chinese (Simplified)
`zh-TW` | Chinese (Traditional)
`cs` | Czech
`fr` | French
`de` | German
`el` | Greek
`id` | Indonesian _limited support terms dialog only_
`it` | Italian
`pl` | Polish
`pt` | Portuguese
`hu` | Hungarian
`ja` | Japanese
`ko` | Korean
`ru` | Russian
`es` | Spanish (Spain)
`es-419` | Spanish (Latin America)
`th` | Thai
`tr` | Turkish
`uk` | Ukrainian

> Example request updating specified fields with Polish translations.

```shell
curl -X POST https://*.modapi.io/v1/games/1/mods/1 \
	-H 'Authorization: Bearer your-token-here' \
	-H 'Content-Type: application/x-www-form-urlencoded' \
	-H 'Content-Language: pl' \
	-d 'name=Zaawansowany rozkwit Wiedźmina' \
	-d 'summary=Zobacz zaawansowany mod oświetlenia w Kaer Morhen w zupełnie nowym świetle' 
```

> Attempt to retrieve Polish translations within supported fields.

```shall
curl -X GET https://*.modapi.io/v1/games/1/mods/1 \
	-H 'Authorization: Bearer your-token-here' \
	-H 'Accept-Language: pl'
```

> Response

```json
{
	"id": 1,
	"game_id": 1,
	...
	"name": "Zaawansowany rozkwit Wiedźmina", 
	"summary": "Zobacz zaawansowany mod oświetlenia w Kaer Morhen w zupełnie nowym świetle"
}
```

## Localized Requests

Specific endpoints also allow you to submit fields in the supported languages above. To tell the API you are submitting non-english content you must supply the `Content-Language` header in the request with a valid language code (see above). When you supply the `Content-Language` header in your request, you are explicitly indicating to the API that all eligible fields have been translated into the supplied language and if a user (or client) requests the respective language, the value for that supplied field will be returned.

A brief summary of things you should be aware of when dealing with localized requests and responses:

- English is still required as the default value when creating and updating a resource.
- If you don't supply a valid `Content-Language` header value, all input data will be assumed English.
- If you don't supply a valid `Accept-Language` header value, all response data will be in English.
- If you supply a valid `Accept-Language` header value, all response data will be in English unless translations exist in the requested language.
- Only fields that contain the localization icon in the parameter section of the endpoint can be submitted in different languages.