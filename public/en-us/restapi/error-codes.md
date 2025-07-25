---
id: restapi-errors
title: Errors
slug: /restapi/errors/
displayed_sidebar: apisidebar
---

## Error Object

> Error object

```json
"error": {
	"code": 403,
	"error_ref": 15024,
	"message": "You do not have the required permissions to access this resource."
}
```

If an error occurs, mod.io returns an error object with the HTTP `code`, `error_ref` and `message` to describe what happened and when possible how to avoid repeating the error. It's important to know that if you encounter errors that are not server errors (`500`+ codes) - you should review the error message before continuing to send requests to the endpoint.

When requests contain invalid input data or query parameters (for filtering), an optional field object called `errors` can be supplied inside the `error` object, which contains a list of the invalid inputs. The nested `errors` object is only supplied with `422 Unprocessable Entity` responses. Be sure to review the [Response Codes](#response-codes) to be aware of the HTTP codes that the mod.io API returns.

> Error object with input errors

```json
"error": {
	"code": 422,
	"error_ref": 13009,
	"message": "Validation Failed. Please see below to fix invalid input.",
	"errors": {
		"summary":"The mod summary cannot be more than 200 characters long.",
	}
}
```

Remember that [Rate Limiting](#rate-limiting) applies whether an error is returned or not, so to avoid exceeding your daily quota be sure to always investigate error messages - instead of continually retrying.

## Error Codes

Along with generic [HTTP response codes](#response-codes), we also provide mod.io specific error codes to help you better understand what has gone wrong with a request. Below is a list of the most common `error_ref` codes you could encounter when consuming the API, as well as the reason for the error occuring. For error codes specific to each endpoint, click the 'Show All Responses' dropdown on the specified endpoint documentation.

> Example request with malformed api_key

```shell
curl -X GET https://*.modapi.io/v1/games?api_key=malformed_key
```

```json
{
    "error": {
        "code": 401,
        "error_ref": 11001,
        "message": "We cannot complete your request due to a malformed/missing api_key in your request. Refer to documentation at https://docs.mod.io"
    }
}
```

## Error Refs

Error Reference Code | Meaning
---------- | -------
`10000` | mod.io is currently experiencing an outage. (rare)
`10001` | Cross-origin request forbidden.
`10002` | mod.io failed to complete the request, please try again. (rare)
`10003` | API version supplied is invalid.
`11000` | api_key is missing from your request.
`11001` | api_key supplied is malformed.
`11002` | api_key supplied is invalid.
`11003` | Access token is missing the write scope to perform the request.
`11004` | Access token is missing the read scope to perform the request.
`11005` | Access token is expired, or has been revoked.
`11006` | Authenticated user account has been deleted.
`11007` | Authenticated user account has been banned by mod.io admins.
`11008` | You have been ratelimited globally for making too many requests. See [Rate Limiting](#rate-limiting).
`11009` | You have been ratelimited from calling this endpoint again, for making too many requests. See [Rate Limiting](#rate-limiting).
`13001` | The submitted binary file is corrupted.
`13002` | The submitted binary file is unreadable.
`13004` | You have used the `input_json` parameter with semantically incorrect JSON.
`13005` | The Content-Type header is missing from your request.
`13006` | The Content-Type header is not supported for this endpoint.
`13007` | You have requested a response format that is not supported (JSON only).
`13009` | The request contains validation errors for the data supplied. See the attached `errors` field within the [Error Object](#error-object) to determine which input failed.
`14000` | The requested resource does not exist.
`14001` | The requested game could not be found.
`14006` | The requested game has been deleted.
`15010` | The requested modfile could not be found.
`15022` | The requested mod could not be found.
`15023` | The requested mod has been deleted.
`15026` | The requested comment could not be found.
`17000` | The requested user could not be found.

# Error Refs

| Constant Name | Value |
|--------------|-------|
| NO_REF | 0 |
| UNEXPECTED_SERVICE_OUTAGE | 10000 |
| CORS_GENERIC | 10001 |
| UNEXPECTED_OPERATION_FAILURE | 10002 |
| API_VERSION_INVALID | 10003 |
| API_KEY_MISSING | 11000 |
| API_KEY_MALFORMED | 11001 |
| API_KEY_INVALID | 11002 |
| TOKEN_MISSING_SCOPE_WRITE | 11003 |
| TOKEN_MISSING_SCOPE_READ | 11004 |
| TOKEN_EXPIRED_OR_REVOKED | 11005 |
| USER_DELETED | 11006 |
| USER_BANNED | 11007 |
| RATE_LIMITED | 11008 |
| EMAIL_EXCHANGE_CODE_ALREADY_REDEEMED | 11011 |
| EMAIL_EXCHANGE_CODE_EXPIRED | 11012 |
| EMAIL_EXCHANGE_DIFFERENT_API_KEY | 11013 |
| EMAIL_EXCHANGE_INVALID_CODE | 11014 |
| AUTH_LINK_EMAIL_ALREADY_USED | 11015 |
| ACTION_RESTRICTED_GAME_API_KEY | 11016 |
| ACTION_RESTRICTED_NO_TEST_KEY | 11017 |
| STEAM_APP_TICKET_INVALID | 11018 |
| STEAM_NO_SECRET_TICKET | 11019 |
| STEAM_UNABLE_TO_GET_ACCOUNT_DATA | 11020 |
| GOG_APP_TICKET_INVALID | 11021 |
| GOG_NO_SECRET_TICKET | 11022 |
| GOG_UNABLE_TO_GET_ACCOUNT_DATA | 11023 |
| OCULUS_RIFT_NO_SECRET_TICKET | 11024 |
| META_QUEST_NO_SECRET_TICKET | 11025 |
| META_QUEST_UNABLE_TO_GET_ACCOUNT_DATA | 11026 |
| XBOX_LIVE_INVALID_TOKEN | 11027 |
| XBOX_LIVE_UGC_INTERACTION_NOT_PERMITTED | 11028 |
| XBOX_LIVE_TOKEN_EXPIRED | 11029 |
| XBOX_LIVE_CHILD_PROFILE_NOT_PERMITTED | 11030 |
| XBOX_LIVE_UNABLE_TO_GET_JWK_SIGNATURE | 11042 |
| ITCHIO_UNABLE_TO_GET_ACCOUNT_DATA | 11031 |
| UNABLE_TO_VERIFY_EXTERNAL_CREDENTIALS | 11032 |
| LINK_WRONG_SERVICE_ID | 11033 |
| USER_ALREADY_VERIFIED | 11034 |
| USER_ALREADY_DELETED | 11051 |
| FACEBOOK_INVALID_TOKEN | 11058 |
| USER_MUST_BE_LOGGED_IN | 11059 |
| MODIO_INVALID_TOKEN | 11060 |
| MODIO_UNABLE_TO_GET_JWK_SIGNATURE | 11061 |
| MODIO_INVALID_TOKEN_NOT_VALID_BEFORE | 11062 |
| MODIO_INVALID_TOKEN_NOT_VALID_AFTER | 11063 |
| EMAIL_REQUEST_ERROR_SENDING_CODE | 11064 |
| EMAIL_UPDATE_CODE_REFRESH_RATE_LIMITED | 11065 |
| EMAIL_UPDATE_CODE_NOT_FOUND | 11066 |
| FACEBOOK_UNABLE_TO_GET_ACCOUNT_DATA | 11067 |
| USER_CONNECTION_EXISTS | 11068 |
| USER_CONNECTION_MEMBER_NOT_FOUND | 11069 |
| CLOUDFLARE_INVALID_TOKEN | 11070 |
| CLOUDFLARE_UNABLE_TO_GET_JWK_SIGNATURE | 11071 |
| CLOUDFLARE_INVALID_TOKEN_NOT_VALID_BEFORE | 11072 |
| CLOUDFLARE_INVALID_TOKEN_NOT_VALID_AFTER | 11073 |
| DISCORD_UNABLE_TO_GET_ACCOUNT_DATA | 11043 |
| SWITCH_INVALID_TOKEN | 11035 |
| SWITCH_INVALID_TOKEN_NOT_VALID_BEFORE | 11036 |
| SWITCH_INVALID_TOKEN_NOT_VALID_AFTER | 11037 |
| SWITCH_INVALID_TOKEN_ISSUER_NOT_RECOGNIZED | 11038 |
| SWITCH_UNABLE_TO_GET_JWK_SIGNATURE | 11039 |
| SWITCH_APP_ID_NOT_CONFIGURED | 11040 |
| SWITCH_APP_ID_NOT_VALID | 11041 |
| EPIC_GAMES_INVALID_TOKEN | 11044 |
| EPIC_GAMES_INVALID_TOKEN_NOT_VALID_BEFORE | 11045 |
| EPIC_GAMES_INVALID_TOKEN_NOT_VALID_AFTER | 11046 |
| EPIC_GAMES_INVALID_TOKEN_ISSUER_NOT_RECOGNIZED | 11047 |
| EPIC_GAMES_UNABLE_TO_GET_JWK_SIGNATURE | 11048 |
| EPIC_GAMES_UNABLE_TO_GET_ACCOUNT_DATA | 11049 |
| NO_TERMS_AGREEMENT | 11074 |
| GOOGLE_INVALID_TOKEN | 11052 |
| GOOGLE_INVALID_TOKEN_NOT_VALID_BEFORE | 11053 |
| GOOGLE_INVALID_TOKEN_NOT_VALID_AFTER | 11054 |
| GOOGLE_INVALID_TOKEN_ISSUER_NOT_RECOGNIZED | 11055 |
| GOOGLE_UNABLE_TO_GET_JWK_SIGNATURE | 11056 |
| GOOGLE_UNABLE_TO_GET_ACCOUNT_DATA | 11057 |
| OAUTH_CLIENT_DATA_NOT_VALID | 11075 |
| OAUTH_TOKEN_ALREADY_DELETED | 11076 |
| OAUTH_TOKEN_DELETE_NO_PERMISSION | 11077 |
| API_KEY_ALREADY_EXISTS_FOR_USER | 11078 |
| API_KEY_NO_ACCESS_FOR_REFRESH | 11079 |
| PSN_INVALID_TOKEN | 11080 |
| PSN_INVALID_TOKEN_NOT_VALID_BEFORE | 11081 |
| PSN_INVALID_TOKEN_NOT_VALID_AFTER | 11082 |
| PSN_UNABLE_TO_GET_JWK_SIGNATURE | 11083 |
| PSN_UNABLE_TO_GET_ACCOUNT_DATA | 11084 |
| PSN_CHILD_PROFILE_NOT_PERMITTED | 11085 |
| PSN_UGC_INTERACTION_NOT_PERMITTED | 11096 |
| OPENID_GAME_NOT_SUPPORTED | 11086 |
| OPENID_CONFIG_NOT_ACTIVE | 11087 |
| OPENID_CONFIG_JWK_URL_UNREACHABLE | 11088 |
| OPENID_CONFIG_SIGNATURE_FAILURE | 11089 |
| OPENID_CANNOT_REACH_IDENTITY_PROVIDER | 11090 |
| OPENID_BAD_AUDIENCE | 11091 |
| OPENID_INVALID_TOKEN_NOT_VALID_BEFORE | 11092 |
| OPENID_INVALID_TOKEN_NOT_VALID_AFTER | 11093 |
| OPENID_INVALID_TOKEN | 11094 |
| INVALID_CSRF_TOKEN | 11095 |
| DEVICE_LOGIN_CODE_INVALID | 11097 |
| DEVICE_LOGIN_REQUEST_NOT_AUTHORIZED | 11098 |
| WS_MISSING_CONNECTION_ID | 11099 |
| WS_INVALID_PROXY_REFERRER | 11100 |
| WS_INVALID_OPERATION | 11101 |
| WS_TOO_MANY_OPERATION_REQUESTS | 11102 |
| OAUTH_IS_FIRST_PARTY_CLIENT | 11103 |
| OAUTH_UNEXPECTED_GAME_REFERENCE | 11104 |
| MODIO_IP_BAN | 12003 |
| USER_TOKEN_ISSUE_MISMATCH | 12004 |
| FILE_NOT_BINARY | 13000 |
| FILE_CORRUPTED | 13001 |
| FILE_UNREADABLE | 13002 |
| FILE_TOO_MANY | 13003 |
| JSON_MALFORMED | 13004 |
| MISSING_CONTENT_TYPE | 13005 |
| INCORRECT_CONTENT_TYPE | 13006 |
| JSON_RESPONSE_ONLY | 13007 |
| POST_PUT_NO_PAYLOAD | 13008 |
| VALIDATION_GENERIC | 13009 |
| RESOURCE_NOT_FOUND | 14000 |
| GAME_NOT_FOUND | 14001 |
| GAME_NO_UPDATE_PERMISSION | 14002 |
| GAME_NO_UPDATE_STATUS_PERMISSION | 14003 |
| GAME_CANT_BE_DELETED | 14004 |
| GAME_NO_DELETE_PERMISSION | 14005 |
| GAME_DELETED | 14006 |
| GAME_NO_VIEW_PERMISSION | 14007 |
| GAME_MEDIA_NO_ADD_PERMISSION | 14009 |
| GAME_MEDIA_NO_DELETE_PERMISSION | 14010 |
| GAME_TAGS_NO_OPTIONS_SET | 14011 |
| GAME_TAGS_NO_ADD_PERMISSION | 14012 |
| GAME_TAGS_NO_EDIT_PERMISSION | 14013 |
| GAME_TAGS_NO_DELETE_PERMISSION | 14014 |
| GAME_TAGS_NO_DUPLICATES | 14015 |
| GAME_TAGS_RENAME_IN_PROGRESS | 14030 |
| GAME_TAGS_TAG_NOT_FOUND | 14045 |
| GAME_NO_AGREEMENT | 14016 |
| GAME_CANT_BE_DELETED_SELLABLE_MODS | 14017 |
| GAME_CANT_BE_DELETED_EXISTING_MODS | 14018 |
| GAME_CANT_HAVE_PLATFORM_SPECIFIC_FILES | 14037 |
| GAME_MUST_HAVE_ONE_UNLOCKED_PLATFORM | 14046 |
| AGREEMENT_CANNOT_VIEW_ADMINS_ONLY | 14019 |
| AGREEMENT_CANNOT_ADD_ADMINS_ONLY | 14020 |
| AGREEMENT_CANNOT_EDIT_ADMINS_ONLY | 14021 |
| AGREEMENT_UNKNOWN_TYPE | 14022 |
| AGREEMENT_CANNOT_DELETE_ADMINS_ONLY | 14023 |
| AGREEMENT_CANNOT_DELETE_LIVE_AGREEMENT | 14024 |
| AGREEMENT_CANNOT_ACTIVE_ALREADY_LIVE | 14025 |
| GUIDE_NO_VIEW_PERMISSION | 14026 |
| GUIDE_NO_ADD_PERMISSION | 14027 |
| GUIDE_NO_DELETE_PERMISSION | 14028 |
| GUIDE_NO_DELETE_PERMISSION_DMCA | 14029 |
| GUIDE_NO_UPDATE_PERMISSION_DMCA | 14031 |
| GAME_TEAM_ALREADY_HAS_USER | 14032 |
| GAME_INVITE_LIMIT_REACHED | 14033 |
| GAME_USER_ALREADY_INVITED | 14034 |
| GAME_CREATE_NO_AGREEMENT | 14035 |
| GUIDE_NO_UPDATE_PERMISSION | 14036 |
| COMMENTS_DISABLED_CAN_NOT_ADD | 14038 |
| GAME_NO_ADMIN_PERMISSION | 14039 |
| GAME_RESTRICTED_FEATURE_PRO | 14040 |
| GAME_RESTRICTED_FEATURE_GROWTH | 14041 |
| GAME_RESTRICTED_FEATURE_ENTERPRISE | 14042 |
| GAME_TEAM_DELETE_MONETIZATION_TEAM_MEMBER | 14043 |
| PERMISSION_CHANGE_PENDING_REVIEW | 14044 |
| SUBSCRIBE_FAILED_DMCA_COMPLAINT | 15000 |
| SUBSCRIBE_FAILED_MOD_HIDDEN | 15001 |
| SUBSCRIBE_FAILED_MODFILE_MISSING | 15020 |
| SUBSCRIBE_FAILED_MUST_PURCHASE | 15002 |
| SUBSCRIBE_FAILED_NO_STOCK | 15003 |
| SUBSCRIBE_FAILED_ALREADY_SUBSCRIBED | 15004 |
| UNSUBSCRIBE_NOT_SUBSCRIBED | 15005 |
| MODFILE_NO_UPLOAD_PERMISSION | 15006 |
| MODFILE_NO_UPDATE_PERMISSION | 15007 |
| MODFILE_NO_DELETE_PERMISSION | 15008 |
| MODFILE_CANNOT_DELETE_ACTIVE_RELEASE | 15009 |
| MODFILE_NOT_FOUND | 15010 |
| MOD_NOT_ACCEPTED | 15011 |
| MOD_NO_UPLOAD_PERMISSION_BY_ADMIN | 15012 |
| MOD_NO_UPDATE_PERMISSION | 15013 |
| MOD_NO_MATURITY_EDIT_PERMISSION | 15014 |
| MOD_NO_MATURITY_ALLOWED_BY_GAME | 15054 |
| MOD_NO_MODERATION_PERMISSION | 15015 |
| MOD_CANNOT_BE_ACCEPTED_WITHOUT_MODFILE | 15016 |
| MOD_SUPPLY_NO_EDIT_PERMISSION | 15017 |
| MOD_CANNOT_CONTROL_SUPPLY_AND_SCARCITY | 15018 |
| MOD_NO_DELETE_PERMISSION | 15019 |
| MOD_TEAM_ALREADY_HAS_USER | 15021 |
| MOD_NOT_FOUND | 15022 |
| MOD_DELETED | 15023 |
| MOD_NO_VIEW_PERMISSION | 15024 |
| MOD_FILTER_ADMIN_ONLY | 15025 |
| MOD_COMMENT_NO_DELETE_PERMISSION | 15027 |
| MOD_NO_DELETE_PERMISSION_HAS_POTENTIAL_OWNERS | 15050 |
| MOD_NO_DELETE_PERMISSION_HAS_SUBSCRIBERS | 15051 |
| COMMENT_NOT_FOUND | 15026 |
| RATING_RESOURCE_ALREADY_RATED | 15028 |
| RATING_RESOURCE_NOT_RATED | 15043 |
| REPORT_NO_REPORT_PERMISSION_BY_ADMIN | 15029 |
| REPORT_RESOURCE_NOT_AVAILABLE_FOR_REPORT | 15030 |
| REPORT_NOT_FOUND | 15056 |
| REPORT_ALREADY_RESOLVED | 15044 |
| REPORT_USER_REPORT_BELONGS_TO_GAME | 15045 |
| MOD_DEPENDENCY_NO_ADD_PERMISSION | 15031 |
| MOD_DEPENDENCY_NO_DELETE_PERMISSION | 15032 |
| MOD_METADATA_NO_ADD_PERMISSION | 15033 |
| MOD_METADATA_NO_DELETE_PERMISSION | 15034 |
| MOD_MEDIA_NO_ADD_PERMISSION | 15035 |
| MOD_MEDIA_NO_DELETE_PERMISSION | 15036 |
| MOD_MEDIA_REORDER_ONLY | 15064 |
| MOD_TAGS_NO_ADD_PERMISSION | 15037 |
| MOD_TAGS_NO_DELETE_PERMISSION | 15038 |
| MOD_TEAM_NO_ADD_PERMISSION | 15039 |
| MOD_TEAM_NO_DELETE_PERMISSION | 15040 |
| MOD_COMMENT_REPLY_READ_TOO_BIG | 15041 |
| MOD_COMMENT_NO_COMMENT_PERMISSION_BY_ADMIN | 15042 |
| MOD_INVITE_LIMIT_REACHED | 15057 |
| MOD_USER_ALREADY_INVITED | 15058 |
| MOD_SUPPLY_CANNOT_BE_SOLD | 15061 |
| MOD_SUPPLY_PAYPAL_REQUIRED | 15046 |
| MOD_SUPPLY_CANNOT_RECEIVE_DONATIONS | 15047 |
| MOD_SUPPLY_CANNOT_BE_TRADED | 15048 |
| MOD_SUPPLY_CANNOT_HAVE_LIMITED_STOCK | 15049 |
| MOD_ADMIN_STATUS_UPDATE_USER_NOT_ADMIN | 15052 |
| MOD_NO_PERMANENT_DELETE_MUST_SOFT_DELETE_FIRST | 15053 |
| MOD_COMMENT_KARMA_NO_PERMISSION | 15055 |
| MOD_COMMENT_KARMA_REPEATED_TWICE | 15059 |
| MOD_CANNOT_DELETE_PURCHASED | 15060 |
| MOD_CANNOT_DELETE_MONETISED | 15062 |
| MOD_TEAM_DELETE_MONETIZATION_TEAM_MEMBER | 15063 |
| MODFILE_CANNOT_INSPECT_FILES | 15065 |
| USER_NOT_FOUND | 17000 |
| USER_CANT_BE_DELETED_EXISTING_TEAMS | 17001 |
| USER_CANT_BE_DELETED_MUST_CLOSE_FIRST | 17002 |
| USER_CANT_BE_DELETED_INCORRECT_CONFIRMATION_EMAIL | 17003 |
| USER_CANT_BE_DELETED_SITE_ADMIN | 17004 |
| USER_CANT_GET_DATA_RECENT_REQUEST | 17005 |
| USER_PM_NOT_IN_THREAD | 17006 |
| USER_PM_ALREADY_IN_THREAD | 17007 |
| USER_PM_THREAD_DOESNT_EXIST | 17008 |
| USER_INVITE_LIMIT_REACHED | 17009 |
| USER_INVITE_NOT_AUTHORISED | 17010 |
| USER_CANT_DO_ACTION_SPAM_DETECTED | 17011 |
| USER_CANT_VIEW_ADMIN_ONLY | 17012 |
| USER_CANT_ADD_SITE_STAFF | 17013 |
| USER_CANT_UPDATE_SITE_STAFF | 17014 |
| USER_CANT_DELETE_SITE_STAFF | 17015 |
| USER_ALREADY_SITE_STAFF | 17016 |
| USER_CANT_ADD_MODIFY_ABOVE_OWN_LEVEL | 17017 |
| USER_NOT_CONFIRMED | 17018 |
| USER_CANNOT_MERGE_ADMIN_ACCOUNT | 17019 |
| USER_CANNOT_CLOSE_ACCOUNT | 17020 |
| USER_CANNOT_DELETE_CONNECTION | 17021 |
| USER_CANNOT_DELETE_ACCOUNT | 17022 |
| USER_ADMIN_CANT_MODERATE_SELF | 17023 |
| USER_EMAIL_OPT_OUT_INVALID_HASH | 17024 |
| USER_EMAIL_OPT_OUT_EXPIRED_HASH | 17025 |
| USER_EMAIL_OPT_OUT_DIFFERENT_USER | 17026 |
| USER_SURRENDER_TO_CURRENT_ACCOUNT | 17027 |
| USER_SURRENDER_TO_CONNECTIONS_EXIST | 17028 |
| USER_CANNOT_MERGE_ACCOUNT_WITH_GAMES | 17029 |
| USER_NO_VIEW_PERMISSION | 17030 |
| USER_CONNECTION_NOT_FOUND | 17031 |
| USER_CONNECTION_REQUIRED | 17032 |
| USER_DUPLICATE_ACCOUNTS | 17033 |
| USER_UNVERIFIED_ACCOUNTS | 17034 |
| USER_MERGE_CODE_SENT | 17035 |
| USER_CANNOT_MUTE_AS_GUEST | 17036 |
| USER_CANNOT_MUTE_GUESTS | 17037 |
| USER_CANNOT_MUTE_SELF | 17039 |
| USER_CALLBACK_TOKEN_INVALID | 17040 |
| USER_CANNOT_MERGE_ACCOUNT_WITH_MODS | 17041 |
| USER_ACCOUNT_PRIVATE | 17042 |
| USER_CANNOT_MERGE_MONETIZATION_ACCOUNTS | 17043 |
| USER_CALLBACK_TOKEN_FAILED_JWE_HEADERS | 17044 |
| USER_CALLBACK_TOKEN_FAILED_JWE_DECRYPTION | 17045 |
| USER_CALLBACK_TOKEN_FAILED_JWT_SIGNATURE | 17046 |
| USER_CALLBACK_TOKEN_FAILED_JWT_HEADERS | 17047 |
| USER_CALLBACK_TOKEN_FAILED_JWT_CLAIMS | 17048 |
| USER_CALLBACK_TOKEN_FAILED_HANDLER | 17049 |
| TEAM_NEEDS_ONE_ADMIN | 23010 |
| TEAM_LEADER_MUST_BE_ADMIN | 23011 |
| TEAM_MUST_HAVE_LEADER | 23012 |
| TEAM_LEADER_CANT_BE_PENDING | 23013 |
| TEAM_NO_ACCESS_UPDATE_LEADER | 23101 |
| TEAM_INVITE_ALREADY_ACTIONED | 23103 |
| TEAM_NO_DATA_CHANGE | 23104 |
| TEAM_NO_DATA_FOUND | 23105 |
| TEAM_INVITE_TOO_MANY_PENDING | 23106 |
| TEAM_INVITE_FAILURE_RATE_LIMIT | 23107 |
| TEAM_NO_ACCESS_MODIFY_GTE_LEVEL | 23108 |
| GUIDE_COMMENT_NO_DELETE_PERMISSION | 19027 |
| GUIDE_COMMENT_REPLY_READ_TOO_BIG | 19041 |
| GUIDE_COMMENT_NO_COMMENT_PERMISSION_BY_ADMIN | 19042 |
| GUIDE_DELETED | 19043 |
| GUIDE_CONTAINS_RESERVED_TAGS | 19044 |
| PM_RATE_LIMIT_REPLY_LONG_TIMEFRAME | 24001 |
| PM_RATE_LIMIT_REPLY_SHORT_TIMEFRAME | 24002 |
| PM_RATE_LIMIT_COMPOSE | 24003 |
| PM_RATE_LIMIT_INVITE | 24004 |
| PM_RATE_LIMIT_INVITE_TOTAL | 24005 |
| AGREEMENT_NO_VIEW_ACCESS | 25001 |
| AGREEMENT_NOT_FOUND | 25002 |
| AGREEMENT_ALREADY_ACCEPTED | 25003 |
| NOTIFICATION_NOT_FOUND | 26001 |
| REPORT_INVALID_URL | 27001 |
| REPORT_INVALID_NAMEID | 27003 |
| MEDIA_EXCEEDS_FILE_CAPACITY | 28001 |
| MEDIA_EXCEEDS_DIRECTORY_CAPACITY | 28002 |
| MULTIPART_UPLOAD_TOO_MANY_SESSIONS | 29001 |
| MULTIPART_UPLOAD_SESSION_ALREADY_COMPLETE | 29002 |
| MULTIPART_UPLOAD_SESSION_ALREADY_PROCESSING | 29003 |
| MULTIPART_UPLOAD_SESSION_ALREADY_CANCELLED | 29004 |
| MULTIPART_UPLOAD_TOO_MANY_DIGESTS | 29005 |
| MULTIPART_UPLOAD_INVALID_DIGEST_ALGO | 29006 |
| MULTIPART_UPLOAD_CHECKSUM_FAILED | 29007 |
| MULTIPART_UPLOAD_CONTENT_RANGE_MISSING | 29008 |
| MULTIPART_UPLOAD_CONTENT_RANGE_UNIT_INVALID | 29009 |
| MULTIPART_UPLOAD_CONTENT_RANGE_NOT_EXPLICIT | 29010 |
| MULTIPART_UPLOAD_CONTENT_RANGE_NON_NUMERIC | 29011 |
| MULTIPART_UPLOAD_CONTENT_RANGE_REGEX_FAILED | 29012 |
| MULTIPART_UPLOAD_PART_SIZE_INVALID | 29013 |
| MULTIPART_UPLOAD_CONTENT_RANGE_INVALID | 29014 |
| MULTIPART_UPLOAD_PART_ALREADY_UPLOADED | 29015 |
| MULTIPART_UPLOAD_DESTINATION_SESSION_CREATE_FAILED | 29016 |
| MULTIPART_UPLOAD_IDENTIFIER_INVALID | 29017 |
| MULTIPART_UPLOAD_DESTINATION_PART_UPLOAD_FAILED | 29018 |
| MULTIPART_UPLOAD_PART_RECOVERY_INCOMPLETE | 29019 |
| MULTIPART_UPLOAD_CANNOT_ABORT | 29020 |
| MULTIPART_UPLOAD_PARTS_MISSING | 29021 |
| MULTIPART_UPLOAD_FILESIZE_MISMATCH | 29022 |
| MULTIPART_UPLOAD_NO_PARTS | 29023 |
| MULTIPART_UPLOAD_SESSION_NOT_COMPLETE | 29024 |
| MULTIPART_UPLOAD_BODY_LENGTH_INCORRECT | 29025 |
| MULTIPART_UPLOAD_FINISH_BYTE_INVALID | 29026 |
| MULTIPART_UPLOAD_BUILD_HASH_FAILED | 29027 |
| MULTIPART_UPLOAD_FILE_TOO_SMALL | 29028 |
| VAULT_EXPIRED | 29050 |
| VAULT_TOO_EARLY | 29051 |
| METRICS_INTERNAL_ERROR | 29100 |
| RULES_BASED_MODERATION_FAILURE | 29200 |
| THAT_RING_IS_USELESS_HERE | 29300 |
| PREVIEW_CANNOT_ENABLE_RESOURCE_IS_PUBLIC | 29400 |
| PREVIEWER_REGISTRATION_DISABLED | 29401 |
| PREVIEWER_REGISTRATION_RESOURCE_IS_PUBLIC | 29402 |
| PREVIEWER_REGISTRATION_INVALID | 29403 |
| RESOURCE_NO_MODERATE_PERMISSION | 29500 |
| MODERATION_ALREADY_ACTIONED | 29501 |
| MODERATION_NOT_FOUND | 29502 |
| MONETIZATION_UNEXPECTED_OPERATION | 900000 |
| MONETIZATION_REQUEST_ERROR | 900001 |
| MONETIZATION_AUTH_ERROR | 900002 |
| MONETIZATION_ONBOARD_ERROR | 900003 |
| MONETIZATION_REGISTER_ERROR | 900004 |
| MONETIZATION_ENABLE_ERROR | 900005 |
| MONETIZATION_PAYOUT_ERROR | 900006 |
| MONETIZATION_ACCOUNT_ERROR | 900007 |
| MONETIZATION_WALLET_ERROR | 900008 |
| MONETIZATION_MARKETPLACE_ERROR | 900011 |
| MONETIZATION_SITE_MONETIZATION_DISABLED | 900012 |
| MONETIZATION_GAME_MONETIZATION_DISABLED | 900013 |
| MONETIZATION_MOD_MONETIZATION_DISABLED | 900014 |
| MONETIZATION_USER_MONETIZATION_DISABLED | 900015 |
| MONETIZATION_SITE_MARKETPLACE_DISABLED | 900019 |
| MONETIZATION_GAME_MARKETPLACE_DISABLED | 900020 |
| MONETIZATION_MOD_MARKETPLACE_DISABLED | 900021 |
| MONETIZATION_TEAM_NOT_FOUND | 900022 |
| MONETIZATION_TEAM_NO_ADD_PERMISSION | 900023 |
| MONETIZATION_TEAM_CREATE_ERROR | 900024 |
| MONETIZATION_TEAM_ADD_ERROR | 900025 |
| MONETIZATION_SPLIT_LIMITS | 900026 |
| MONETIZATION_DEFAULT_MIN_SPLIT | 900027 |
| MONETIZATION_TEAM_NOT_CREATED | 900028 |
| MONETIZATION_TEAM_COUNT_LIMIT | 900029 |
| MONETIZATION_PAYMENT_FAILED | 900030 |
| MONETIZATION_ENTITY_ERROR | 900031 |
| MONETIZATION_ENTITY_LAST_MEMBER | 900032 |
| MONETIZATION_MARKETPLACE_NOT_OWNED | 900033 |
| MONETIZATION_MARKETPLACE_ALREADY_OWNED | 900034 |
| MONETIZATION_PRICE_MISMATCH | 900035 |
| MONETIZATION_USER_REMOVE_FAILED | 900036 |
| MONETIZATION_MARKETPLACE_MOD_NOT_OWNED | 900037 |
| MONETIZATION_USER_HAS_FUNDS | 900038 |
| MONETIZATION_GAME_API_OPTIONS | 900039 |
| MONETIZATION_USER_CRITERIA_NOT_MET | 900040 |
| MONETIZATION_GAME_PARTNER_NOT_APPROVED | 900041 |
| MONETIZATION_GAME_PARTNER_SPECIAL_ACCESS | 900042 |
| MONETIZATION_GAME_PARTNER_REJECTED_30_DAYS | 900043 |
| MONETIZATION_TERMS_NOT_ACCEPTED | 900044 |
| MONETIZATION_MARKETPLACE_QUEUE_ENABLED | 900045 |
| MONETIZATION_USER_NOT_APPROVED | 900046 |
