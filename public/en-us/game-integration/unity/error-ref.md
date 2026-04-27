---
id: cs-error-ref
title: Errors
slug: /unity/cs-error-ref
---

## Modio.Errors

| Type | Description |
|------|-------------|
| [`ApiError`](#Modio.Errors.ApiError) |  |
| [`ArchiveError`](#Modio.Errors.ArchiveError) |  |
| [`ErrorException`](#Modio.Errors.ErrorException) |  |
| [`ErrorExtensions`](#Modio.Errors.ErrorExtensions) |  |
| [`FilesystemError`](#Modio.Errors.FilesystemError) |  |
| [`GenericError`](#Modio.Errors.GenericError) |  |
| [`HttpError`](#Modio.Errors.HttpError) |  |
| [`MetricsError`](#Modio.Errors.MetricsError) |  |
| [`ModManagementError`](#Modio.Errors.ModManagementError) |  |
| [`ModValidationError`](#Modio.Errors.ModValidationError) |  |
| [`MonetizationError`](#Modio.Errors.MonetizationError) |  |
| [`RateLimitError`](#Modio.Errors.RateLimitError) |  |
| [`SystemError`](#Modio.Errors.SystemError) |  |
| [`TempModsError`](#Modio.Errors.TempModsError) |  |
| [`UserAuthError`](#Modio.Errors.UserAuthError) |  |
| [`UserDataError`](#Modio.Errors.UserDataError) |  |
| [`ZlibError`](#Modio.Errors.ZlibError) |  |

### ApiError{#Modio.Errors.ApiError}

```csharp
public class ApiError : Error
```


###### Field


#### [`ApiError`](#Modio.Errors.ApiError) `None`

```csharp
ApiError None = new ApiError(ApiErrorCode.NONE)
```


###### Property


#### [`ApiErrorCode`](#Modio.Errors.ApiErrorCode) `Code`

```csharp
public new ApiErrorCode Code
```


___

### ArchiveError{#Modio.Errors.ArchiveError}

```csharp
public class ArchiveError : Error
```


###### Field


#### [`ArchiveError`](#Modio.Errors.ArchiveError) `None`

```csharp
ArchiveError None = new ArchiveError(ArchiveErrorCode.NONE)
```


###### Property


#### [`ArchiveErrorCode`](#Modio.Errors.ArchiveErrorCode) `Code`

```csharp
public new ArchiveErrorCode Code
```


___

### ErrorException{#Modio.Errors.ErrorException}

```csharp
public class ErrorException : Error
```


###### Field


#### [`Exception`](#Modio.Errors.ErrorException.Exception) `Exception`

```csharp
Exception Exception
```


###### Method


#### GetMessage{#Modio.Errors.ErrorException.GetMessage}

```csharp
public override string GetMessage()
```

___

### ErrorExtensions{#Modio.Errors.ErrorExtensions}

```csharp
public static partial class ErrorExtensions
```


###### Method


#### GetMessage{#Modio.Errors.ErrorExtensions.GetMessage}

```csharp
public static string GetMessage(this ApiErrorCode errorCode, string append
```

___

### FilesystemError{#Modio.Errors.FilesystemError}

```csharp
public class FilesystemError : Error
```


###### Field


#### [`FilesystemError`](#Modio.Errors.FilesystemError) `None`

```csharp
FilesystemError None = new FilesystemError(FilesystemErrorCode.NONE)
```


###### Property


#### [`FilesystemErrorCode`](#Modio.Errors.FilesystemErrorCode) `Code`

```csharp
public new FilesystemErrorCode Code
```


___

### GenericError{#Modio.Errors.GenericError}

```csharp
public class GenericError : Error
```


###### Field


#### [`GenericError`](#Modio.Errors.GenericError) `None`

```csharp
GenericError None = new GenericError(GenericErrorCode.NONE)
```


###### Property


#### [`GenericErrorCode`](#Modio.Errors.GenericErrorCode) `Code`

```csharp
public new GenericErrorCode Code
```


___

### HttpError{#Modio.Errors.HttpError}

```csharp
public class HttpError : Error
```


###### Field


#### [`HttpError`](#Modio.Errors.HttpError) `None`

```csharp
HttpError None = new HttpError(HttpErrorCode.NONE)
```


###### Property


#### [`HttpErrorCode`](#Modio.Errors.HttpErrorCode) `Code`

```csharp
public new HttpErrorCode Code
```


___

### MetricsError{#Modio.Errors.MetricsError}

```csharp
public class MetricsError : Error
```


###### Field


#### [`MetricsError`](#Modio.Errors.MetricsError) `None`

```csharp
MetricsError None = new MetricsError(MetricsErrorCode.NONE)
```


###### Property


#### [`MetricsErrorCode`](#Modio.Errors.MetricsErrorCode) `Code`

```csharp
public new MetricsErrorCode Code
```


___

### ModManagementError{#Modio.Errors.ModManagementError}

```csharp
public class ModManagementError : Error
```


###### Field


#### [`ModManagementError`](#Modio.Errors.ModManagementError) `None`

```csharp
ModManagementError None = new ModManagementError(ModManagementErrorCode.NONE)
```


###### Property


#### [`ModManagementErrorCode`](#Modio.Errors.ModManagementErrorCode) `Code`

```csharp
public new ModManagementErrorCode Code
```


___

### ModValidationError{#Modio.Errors.ModValidationError}

```csharp
public class ModValidationError : Error
```


###### Field


#### [`ModValidationError`](#Modio.Errors.ModValidationError) `None`

```csharp
ModValidationError None = new ModValidationError(ModValidationErrorCode.NONE)
```


###### Property


#### [`ModValidationErrorCode`](#Modio.Errors.ModValidationErrorCode) `Code`

```csharp
public new ModValidationErrorCode Code
```


___

### MonetizationError{#Modio.Errors.MonetizationError}

```csharp
public class MonetizationError : Error
```


###### Field


#### [`MonetizationError`](#Modio.Errors.MonetizationError) `None`

```csharp
MonetizationError None = new MonetizationError(MonetizationErrorCode.NONE)
```


###### Property


#### [`MonetizationErrorCode`](#Modio.Errors.MonetizationErrorCode) `Code`

```csharp
public new MonetizationErrorCode Code
```


___

### RateLimitError{#Modio.Errors.RateLimitError}

```csharp
public class RateLimitError : Error
```


###### Field


#### `int RetryAfterSeconds`

```csharp
int RetryAfterSeconds
```

###### Remarks

This can be 0 in the event of a rolling rate limit.

___

### SystemError{#Modio.Errors.SystemError}

```csharp
public class SystemError : Error
```


###### Field


#### [`SystemError`](#Modio.Errors.SystemError) `None`

```csharp
SystemError None = new SystemError(SystemErrorCode.NONE)
```


###### Property


#### [`SystemErrorCode`](#Modio.Errors.SystemErrorCode) `Code`

```csharp
public new SystemErrorCode Code
```


___

### TempModsError{#Modio.Errors.TempModsError}

```csharp
public class TempModsError : Error
```


###### Field


#### [`TempModsError`](#Modio.Errors.TempModsError) `None`

```csharp
TempModsError None = new TempModsError(TempModsErrorCode.NONE)
```


###### Property


#### [`TempModsErrorCode`](#Modio.Errors.TempModsErrorCode) `Code`

```csharp
public new TempModsErrorCode Code
```


___

### UserAuthError{#Modio.Errors.UserAuthError}

```csharp
public class UserAuthError : Error
```


###### Field


#### [`UserAuthError`](#Modio.Errors.UserAuthError) `None`

```csharp
UserAuthError None = new UserAuthError(UserAuthErrorCode.NONE)
```


###### Property


#### [`UserAuthErrorCode`](#Modio.Errors.UserAuthErrorCode) `Code`

```csharp
public new UserAuthErrorCode Code
```


___

### UserDataError{#Modio.Errors.UserDataError}

```csharp
public class UserDataError : Error
```


###### Field


#### [`UserDataError`](#Modio.Errors.UserDataError) `None`

```csharp
UserDataError None = new UserDataError(UserDataErrorCode.NONE)
```


###### Property


#### [`UserDataErrorCode`](#Modio.Errors.UserDataErrorCode) `Code`

```csharp
public new UserDataErrorCode Code
```


___

### ZlibError{#Modio.Errors.ZlibError}

```csharp
public class ZlibError : Error
```


###### Field


#### [`ZlibError`](#Modio.Errors.ZlibError) `None`

```csharp
ZlibError None = new ZlibError(ZlibErrorCode.NONE)
```


###### Property


#### [`ZlibErrorCode`](#Modio.Errors.ZlibErrorCode) `Code`

```csharp
public new ZlibErrorCode Code
```


___

### Enums


###### ApiErrorCode{#Modio.Errors.ApiErrorCode}


```csharp
NONE = ErrorCode.NONE
```

```csharp
UNKNOWN = ErrorCode.UNKNOWN
```

```csharp
MODIO_OUTAGE = ErrorCode.MODIO_OUTAGE
```


```csharp
CROSS_ORIGIN_FORBIDDEN = ErrorCode.CROSS_ORIGIN_FORBIDDEN
```


```csharp
FAILED_TO_COMPLETE_THE_REQUEST = ErrorCode.FAILED_TO_COMPLETE_THE_REQUEST
```


```csharp
INVALID_API_VERSION = ErrorCode.INVALID_API_VERSION
```


```csharp
MISSING_APIKEY = ErrorCode.MISSING_APIKEY
```


```csharp
MALFORMED_APIKEY = ErrorCode.MALFORMED_APIKEY
```


```csharp
INVALID_APIKEY = ErrorCode.INVALID_APIKEY
```


```csharp
MISSING_WRITE_PERMISSION = ErrorCode.MISSING_WRITE_PERMISSION
```


```csharp
MISSING_READ_PERMISSION = ErrorCode.MISSING_READ_PERMISSION
```


```csharp
EXPIRED_OR_REVOKED_ACCESS_TOKEN = ErrorCode.EXPIRED_OR_REVOKED_ACCESS_TOKEN
```


```csharp
AUTHENTICATED_ACCOUNT_HAS_BEEN_DELETED = ErrorCode.AUTHENTICATED_ACCOUNT_HAS_BEEN_DELETED
```


```csharp
BANNED_USER_ACCOUNT = ErrorCode.BANNED_USER_ACCOUNT
```


```csharp
RATELIMITED = ErrorCode.RATELIMITED
```


```csharp
RATELIMITED_SAME_ENDPOINT = ErrorCode.RATELIMITED_SAME_ENDPOINT
```


```csharp
APIKEY_HAS_NO_GAME = ErrorCode.APIKEY_HAS_NO_GAME
```


```csharp
APIKEY_FOR_TEST_ONLY = ErrorCode.APIKEY_FOR_TEST_ONLY
```


```csharp
CANNOT_VERIFY_EXTERNAL_CREDENTIALS = ErrorCode.CANNOT_VERIFY_EXTERNAL_CREDENTIALS
```


```csharp
USER_NO_ACCEPT_TERMS_OF_USE = ErrorCode.USER_NO_ACCEPT_TERMS_OF_USE
```


```csharp
OPEN_IDNOT_CONFIGURED = ErrorCode.OPEN_IDNOT_CONFIGURED
```


```csharp
BINARY_FILE_CORRUPTED = ErrorCode.BINARY_FILE_CORRUPTED
```


```csharp
BINARY_FILE_UNREADABLE = ErrorCode.BINARY_FILE_UNREADABLE
```


```csharp
INVALID_JSON = ErrorCode.INVALID_JSON
```


```csharp
MISSING_CONTENT_TYPE_HEADER = ErrorCode.MISSING_CONTENT_TYPE_HEADER
```


```csharp
UNSUPPORTED_CONTENT_TYPE_HEADER = ErrorCode.UNSUPPORTED_CONTENT_TYPE_HEADER
```


```csharp
REQUESTED_INVALID_RESPONSE_FORMAT = ErrorCode.REQUESTED_INVALID_RESPONSE_FORMAT
```


```csharp
VALIDATION_ERRORS = ErrorCode.VALIDATION_ERRORS
```


```csharp
REQUESTED_RESOURCE_NOT_FOUND = ErrorCode.REQUESTED_RESOURCE_NOT_FOUND
```


```csharp
REQUESTED_GAME_NOT_FOUND = ErrorCode.REQUESTED_GAME_NOT_FOUND
```


```csharp
REQUESTED_GAME_DELETED = ErrorCode.REQUESTED_GAME_DELETED
```


```csharp
FORBIDDEN_DMCA = ErrorCode.FORBIDDEN_DMCA
```


```csharp
FORBIDDEN_HIDDEN = ErrorCode.FORBIDDEN_HIDDEN
```


```csharp
ALREADY_UNSUBSCRIBED = ErrorCode.ALREADY_UNSUBSCRIBED
```


```csharp
MODFILE_NO_UPLOAD_PERMISSION = ErrorCode.MODFILE_NO_UPLOAD_PERMISSION
```


```csharp
REQUESTED_MODFILE_NOT_FOUND = ErrorCode.REQUESTED_MODFILE_NOT_FOUND
```


```csharp
FORBIDDEN_TACNOT_ACCEPTED = ErrorCode.FORBIDDEN_TACNOT_ACCEPTED
```


```csharp
FORBIDDEN_MISSING_FILE = ErrorCode.FORBIDDEN_MISSING_FILE
```


```csharp
INSUFFICIENT_PERMISSION = ErrorCode.INSUFFICIENT_PERMISSION
```


```csharp
REQUESTED_MOD_NOT_FOUND = ErrorCode.REQUESTED_MOD_NOT_FOUND
```


```csharp
REQUESTED_MOD_DELETED = ErrorCode.REQUESTED_MOD_DELETED
```


```csharp
REQUESTED_COMMENT_NOT_FOUND = ErrorCode.REQUESTED_COMMENT_NOT_FOUND
```


```csharp
USER_EXISTING_MOD_RATING = ErrorCode.USER_EXISTING_MOD_RATING
```


```csharp
SUBMIT_REPORT_RIGHTS_REVOKED = ErrorCode.SUBMIT_REPORT_RIGHTS_REVOKED
```


```csharp
REPORTED_ENTITY_UNAVAILABLE = ErrorCode.REPORTED_ENTITY_UNAVAILABLE
```


```csharp
MOD_MEDIA_NO_ADD_PERMISSION = ErrorCode.MOD_MEDIA_NO_ADD_PERMISSION
```


```csharp
MOD_MEDIA_NO_DELETE_PERMISSION = ErrorCode.MOD_MEDIA_NO_DELETE_PERMISSION
```


```csharp
USER_NO_MOD_RATING = ErrorCode.USER_NO_MOD_RATING
```


```csharp
MATURE_MODS_NOT_ALLOWED = ErrorCode.MATURE_MODS_NOT_ALLOWED
```


```csharp
MUTE_USER_NOT_FOUND = ErrorCode.MUTE_USER_NOT_FOUND
```


```csharp
CANNOT_MUTE_YOURSELF = ErrorCode.CANNOT_MUTE_YOURSELF
```


```csharp
REQUESTED_USER_NOT_FOUND = ErrorCode.REQUESTED_USER_NOT_FOUND
```


```csharp
MONETIZATION_UNEXPECTED_ERROR = ErrorCode.MONETIZATION_UNEXPECTED_ERROR
```


```csharp
MONETIZATION_UNABLE_TO_COMMUNICATE = ErrorCode.MONETIZATION_UNABLE_TO_COMMUNICATE
```


```csharp
MONETIZATION_AUTHENTICATION = ErrorCode.MONETIZATION_AUTHENTICATION
```


```csharp
MONETIZATION_WALLET_FETCH_FAILED = ErrorCode.MONETIZATION_WALLET_FETCH_FAILED
```


```csharp
MONETIZATION_IN_MAINTENANCE = ErrorCode.MONETIZATION_IN_MAINTENANCE
```


```csharp
MONETIZATION_GAME_MONETIZATION_NOT_ENABLED = ErrorCode.MONETIZATION_GAME_MONETIZATION_NOT_ENABLED
```


```csharp
MONETIZATION_PAYMENT_FAILED = ErrorCode.MONETIZATION_PAYMENT_FAILED
```


```csharp
MONETIZATION_ITEM_ALREADY_OWNED = ErrorCode.MONETIZATION_ITEM_ALREADY_OWNED
```


```csharp
MONETIZATION_INCORRECT_DISPLAY_PRICE = ErrorCode.MONETIZATION_INCORRECT_DISPLAY_PRICE
```


```csharp
MONETIZATION_TERMS_NOT_ACCEPTED = ErrorCode.MONETIZATION_TERMS_NOT_ACCEPTED
```


```csharp
MONETIZATION_INSUFFICIENT_FUNDS = ErrorCode.MONETIZATION_INSUFFICIENT_FUNDS
```


___

###### ArchiveErrorCode{#Modio.Errors.ArchiveErrorCode}


```csharp
NONE = ErrorCode.NONE
```

```csharp
UNKNOWN = ErrorCode.UNKNOWN
```

```csharp
INVALID_HEADER = ErrorCode.INVALID_HEADER
```


```csharp
UNSUPPORTED_COMPRESSION = ErrorCode.UNSUPPORTED_COMPRESSION
```


___

###### ErrorCode{#Modio.Errors.ErrorCode}


```csharp
NONE
```

```csharp
UNKNOWN = int.MinValue
```

```csharp
API_NOT_INITIALIZED
```

```csharp
HTTP_EXCEPTION
```

```csharp
TERMS_OF_USE_NOT_INITIALIZED
```

```csharp
NOT_INITIALIZED
```

```csharp
HAS_NOT_ACCEPTED_TERMS_OF_USE
```

```csharp
USER_NOT_AUTHENTICATED
```

```csharp
USER_ALREADY_AUTHENTICATED
```

```csharp
USER_AUTHENTICATION_IN_PROGRESS
```

```csharp
NOT_SUBSCRIBED
```

```csharp
NO_SEARCH
```

```csharp
SEARCH_IN_PROGRESS
```

```csharp
PAGE_NOT_SEARCHED
```

```csharp
AT_FIRST_PAGE
```

```csharp
NO_MORE_PAGES
```

```csharp
CANNOT_CAST_NULL_TO_MOD_ID
```

```csharp
INVALID_MOD_ID
```

```csharp
MOD_TAGS_NOT_INITIALIZED
```

```csharp
HTTP_NOT_INITIALIZED
```
HTTP service not initialized

```csharp
HTTP_ALREADY_INITIALIZED
```
HTTP service already initialized

```csharp
CANNOT_OPEN_CONNECTION
```
Unable to connect to server

```csharp
INSUFFICIENT_PERMISSIONS
```
Insufficient permissions

```csharp
SECURITY_CONFIGURATION_INVALID
```
Invalid platform HTTP security configuration

```csharp
SERVER_UNAVAILABLE
```
Unable to connect to server

```csharp
RESOURCE_NOT_AVAILABLE
```
Invalid endpoint path

```csharp
EXCESSIVE_REDIRECTS
```
Exceeded the allowed number of redirects

```csharp
SERVER_CLOSED_CONNECTION
```
Server closed connection unexpectedly

```csharp
DOWNLOAD_NOT_PERMITTED
```
Trying to download file from outside of mod.io domain

```csharp
SERVERS_OVERLOADED
```
The mod.io servers are overloaded. Please wait a bit before trying again

```csharp
REQUEST_ERROR
```
An error occurred making a HTTP request

```csharp
INVALID_RESPONSE
```
The HTTP response was malformed or not in the expected format

```csharp
RATE_LIMITED
```
Too many requests made to the mod.io API within the rate-limiting window. Please wait and try again

```csharp
UNABLE_TO_CREATE_FOLDER
```
Could not create folder

```csharp
UNABLE_TO_CREATE_FILE
```
Could not create file

```csharp
NO_PERMISSION
```
Insufficient permission for filesystem operation

```csharp
FILE_LOCKED
```
File locked (already in use?)

```csharp
FILE_NOT_FOUND
```
File not found

```csharp
DIRECTORY_NOT_EMPTY
```
Directory not empty

```csharp
READ_ERROR
```
Error reading file

```csharp
WRITE_ERROR
```
Error writing file

```csharp
DIRECTORY_NOT_FOUND
```
Directory not found

```csharp
UNABLE_TO_INIT_STORAGE
```
Could not initialize user storage

```csharp
STATUS_AUTH_TOKEN_MISSING
```
OAuth token was missing

```csharp
STATUS_AUTH_TOKEN_INVALID
```
The user's OAuth token was invalid

```csharp
NO_AUTH_TOKEN
```
No Auth token available

```csharp
ALREADY_AUTHENTICATED
```
User is already authenticated. To use a new user and OAuth token, call ClearUserDataAsync

```csharp
INVALID_USER
```
Invalid user

```csharp
BLOB_MISSING
```
Some or all of the user data was missing from storage

```csharp
INVALID_HEADER
```
File did not have a valid archive header

```csharp
UNSUPPORTED_COMPRESSION
```
File uses an unsupported compression method. Please use STORE or DEFLATE

```csharp
OPERATION_CANCELLED
```
The asynchronous operation was cancelled before it completed

```csharp
OPERATION_ERROR
```
The asynchronous operation produced an error before it completed

```csharp
COULD_NOT_CREATE_HANDLE
```
Operating system could not create the requested handle

```csharp
NO_DATA_AVAILABLE
```
No data available

```csharp
END_OF_FILE
```
End of file

```csharp
QUEUE_CLOSED
```
Operation could not be started as the service queue was missing or destroyed

```csharp
SDKALREADY_INITIALIZED
```
mod.io SDK was already initialized

```csharp
SDKNOT_INITIALIZED
```
mod.io SDK was not initialized

```csharp
INDEX_OUT_OF_RANGE
```
Index out of range

```csharp
BAD_PARAMETER
```
Bad parameter supplied

```csharp
SHUTTING_DOWN
```
mod.io SDK is shutting down, operation is cancelled

```csharp
MISSING_COMPONENTS
```
mod.io SDK could not find required components

```csharp
UNKNOWN_SYSTEM_ERROR
```
A low-level system error occured, refer to the logs for code and location

```csharp
NEED_BUFFERS
```
Need more input data

```csharp
END_OF_STREAM
```
End of deflate stream

```csharp
STREAM_ERROR
```
Stream error

```csharp
INVALID_BLOCK_TYPE
```
Invalid block type

```csharp
INVALID_STORED_LENGTH
```
Invalid store block length

```csharp
TOO_MANY_SYMBOLS
```
Too many symbols

```csharp
INVALID_CODE_LENGTHS
```
Invalid code lengths

```csharp
INVALID_BIT_LENGTH_REPEAT
```
Invalid bit length repeat

```csharp
MISSING_EOB
```
Missing end-of-block marker

```csharp
INVALID_LITERAL_LENGTH
```
Invalid literal length

```csharp
INVALID_DISTANCE_CODE
```
Invalid distance code

```csharp
INVALID_DISTANCE
```
Invalid distance

```csharp
OVER_SUBSCRIBED_LENGTH
```
Over-subscribed length

```csharp
INCOMPLETE_LENGTH_SET
```
Incomplete length set

```csharp
NO_PENDING_WORK
```
Internal: No mods require processing for this iteration

```csharp
INSTALL_OR_UPDATE_CANCELLED
```
The current mod installation or update was cancelled

```csharp
MOD_MANAGEMENT_DISABLED
```
Could not perform operation: Mod management is disabled and mod collection is locked

```csharp
MOD_MANAGEMENT_ALREADY_ENABLED
```
Mod management was already enabled and the callback remains unchanged.

```csharp
UPLOAD_CANCELLED
```
The current modfile upload was cancelled

```csharp
MOD_BEING_PROCESSED
```
The specified mod's files are currently being updated by the SDK. Please try again later.

```csharp
TEMP_MOD_SET_NOT_INITIALIZED
```
Temporary mod set was not initialized. Please call InitTempModSet.

```csharp
INCOMPATIBLE_DEPENDENCIES
```
The dependencies for this mod are incompatible with your version of the game. Please contact the mod creator for support.

```csharp
NO_FILES_FOUND_FOR_MOD
```
Mod directory does not contain any files

```csharp
MOD_DIRECTORY_NOT_FOUND
```
Mod directory does not exist

```csharp
MD5DOES_NOT_MATCH
```
Mod MD5 does not match

```csharp
CRCDOES_NOT_MATCH
```
File CRC does not match

```csharp
DISPLAY_PRICE_INCORRECT
```
The display price for the mod was out-of-date or incorrect. Please retry with the correct display price.

```csharp
MONETIZATION_AUTHENTICATION_FAILED
```
A failure has occured when trying to authenticate with the monetization system.

```csharp
WALLET_FETCH_FAILED
```
Unable to fetch the account's wallet. Please confirm the account has one

```csharp
GAME_MONETIZATION_NOT_ENABLED
```
The game does not have active monetization.

```csharp
GAME_MONETIZATION_NOT_CONFIGURED
```
The game does not have properly configured monetization settings.

```csharp
PAYMENT_FAILED
```
The payment transaction failed. Please try again later.

```csharp
INCORRECT_DISPLAY_PRICE
```
The given display price does not match the price of the mod.

```csharp
ITEM_ALREADY_OWNED
```
The account already owns this item.

```csharp
INSUFFICIENT_FUNDS
```
The account has insufficent funds to make this purchase.

```csharp
RETRY_ENTITLEMENTS
```
Some entitlements could not be verified. Please try again.

```csharp
INVALID_METRICS_SECRET
```
The configured Metrics Secret Key is invalid.

```csharp
CANT_INSTALL_TAINTED_MOD
```
A mod installation has previously failed, can't install all needed mods for this temporary mod session.

```csharp
WSS_TIMEOUT
```

```csharp
WSS_SERVICE_NOT_CONNECTED
```

```csharp
WSS_FAILED_TO_SEND
```

```csharp
WSS_FAILED_TO_DESERIALIZE
```

```csharp
WSS_NOT_CONFIGURED
```

```csharp
MISSING_MOUNT
```

```csharp
MOUNT_LIMIT_EXCEEDED
```

```csharp
INVALID_GAME_ID
```
 The Game ID provided was invalid. Please confirm you have the correct Game ID from your mod.io dashboard, and that it is a positive integer.

```csharp
MODIO_OUTAGE = 10000
```
mod.io is currently experiencing an outage. (rare)

```csharp
CROSS_ORIGIN_FORBIDDEN = 10001
```
Cross-origin request forbidden.

```csharp
FAILED_TO_COMPLETE_THE_REQUEST = 10002
```
mod.io failed to complete the request, please try again. (rare)

```csharp
INVALID_API_VERSION = 10003
```
API version supplied is invalid.

```csharp
MISSING_APIKEY = 11000
```
api_key is missing from your request.

```csharp
MALFORMED_APIKEY = 11001
```
api_key supplied is malformed.

```csharp
INVALID_APIKEY = 11002
```
api_key supplied is invalid.

```csharp
MISSING_WRITE_PERMISSION = 11003
```
Access token is missing the write scope to perform the request.

```csharp
MISSING_READ_PERMISSION = 11004
```
Access token is missing the read scope to perform the request.

```csharp
EXPIRED_OR_REVOKED_ACCESS_TOKEN = 11005
```
Access token is expired, or has been revoked.

```csharp
AUTHENTICATED_ACCOUNT_HAS_BEEN_DELETED = 11006
```
Authenticated user account has been deleted.

```csharp
BANNED_USER_ACCOUNT = 11007
```
Authenticated user account has been banned by mod.io admins.

```csharp
RATELIMITED = 11008
```
You have been ratelimited for making too many requests. See Rate Limiting.

```csharp
RATELIMITED_SAME_ENDPOINT = 11009
```
You have been ratelimited from calling this endpoint again, for making too many requests. See Rate Limiting.

```csharp
EMAIL_LOGIN_CODE_EXPIRED = 11012
```
Email login code has expired, please request a new one.

```csharp
EMAIL_LOGIN_CODE_INVALID = 11014
```
Email login code is invalid

```csharp
APIKEY_HAS_NO_GAME = 11016
```
The api_key supplied in the request must be associated with a game.

```csharp
APIKEY_FOR_TEST_ONLY = 11017
```
The api_key supplied in the request is for test environment purposes only and cannot be used for this functionality.

```csharp
STEAM_APP_TICKET_INVALID = 11018
```

```csharp
CANNOT_VERIFY_EXTERNAL_CREDENTIALS = 11032
```
mod.io was unable to verify the credentials against the external service provider.

```csharp
USER_NO_ACCEPT_TERMS_OF_USE = 11074
```
The user has not agreed to the mod.io Terms of Use. Please see terms_agreed parameter description and the Terms endpoint for more information.

```csharp
USER_TARGET_BANNED = 11130
```
Targeted user is banned

```csharp
USER_TARGET_DELETED = 11131
```
Targeted user has been deleted

```csharp
USER_TARGET_ALREADY_FOLLOWED  = 11134
```
"The authenticated user already follows the user."

```csharp
USER_TARGET_NOT_FOLLOWED  = 11135
```
"The authenticated user doesn't follow the user."

```csharp
OPEN_IDNOT_CONFIGURED = 11086
```
You must configure your OpenID config for your game in your game authentication settings before being able to authenticate users.

```csharp
BINARY_FILE_CORRUPTED = 13001
```
The submitted binary file is corrupted.

```csharp
BINARY_FILE_UNREADABLE = 13002
```
The submitted binary file is unreadable.

```csharp
INVALID_JSON = 13004
```
You have used the input_json parameter with semantically incorrect JSON.

```csharp
MISSING_CONTENT_TYPE_HEADER = 13005
```
The Content-Type header is missing from your request.

```csharp
UNSUPPORTED_CONTENT_TYPE_HEADER = 13006
```
The Content-Type header is not supported for this endpoint.

```csharp
REQUESTED_INVALID_RESPONSE_FORMAT = 13007
```
You have requested a response format that is not supported (JSON only).

```csharp
VALIDATION_ERRORS = 13009
```
The request contains validation errors for the data supplied. See the attached errors field within the Error Object to determine which input failed.

```csharp
REQUESTED_RESOURCE_NOT_FOUND = 14000
```
The requested resource does not exist.

```csharp
REQUESTED_GAME_NOT_FOUND = 14001
```
The requested game could not be found.

```csharp
REQUESTED_GAME_DELETED = 14006
```
The requested game has been deleted.

```csharp
FORBIDDEN_DMCA = 15000
```
This mod is currently under DMCA and the user cannot be subscribed to it.

```csharp
FORBIDDEN_HIDDEN = 15001
```
This mod is hidden and the user cannot be subscribed to it.

```csharp
ALREADY_SUBSCRIBED = 15004
```
The user is already subscribed to the specified resource

```csharp
ALREADY_UNSUBSCRIBED = 15005
```
The authenticated user is not subscribed to the resource.

```csharp
MODFILE_NO_UPLOAD_PERMISSION = 15006
```
The authenticated user does not have permission to upload modfiles for the specified mod. Ensure the user is a team manager or administrator.

```csharp
REQUESTED_MODFILE_NOT_FOUND = 15010
```
The requested modfile could not be found.

```csharp
FORBIDDEN_TACNOT_ACCEPTED = 15011
```
The item has not been accepted and can not be purchased at this time.

```csharp
MOD_NO_UPDATE_PERMISSION = 15013
```
The authenticated user does not have permission to update this mod.

```csharp
INSUFFICIENT_PERMISSION = 15019
```
The authenticated user does not have permission to delete this mod. This action is restricted to team managers and administrators only.

```csharp
FORBIDDEN_MISSING_FILE = 15020
```
This mod is missing a file and cannot be subscribed to.

```csharp
REQUESTED_MOD_NOT_FOUND = 15022
```
The requested mod could not be found.

```csharp
REQUESTED_MOD_DELETED = 15023
```
The requested mod has been deleted.

```csharp
REQUESTED_COMMENT_NOT_FOUND = 15026
```
The requested comment could not be found.

```csharp
USER_EXISTING_MOD_RATING = 15028
```
The authenticated user has already submitted a rating for this mod.

```csharp
SUBMIT_REPORT_RIGHTS_REVOKED = 15029
```
The authenticated user does not have permission to submit reports on mod.io due to their access being revoked.

```csharp
REPORTED_ENTITY_UNAVAILABLE = 15030
```
The specified resource is not able to be reported at this time, this is potentially due to the resource in question being removed.

```csharp
MOD_DEPENDENCIES_NO_ADD_PERMISSION = 15031
```
The authenticated user does not have permission to modify this resource.

```csharp
MOD_DEPENDENCIES_NO_DELETE_PERMISSION = 15032
```
The authenticated user does not have permission to modify this resource.

```csharp
USER_NO_MOD_RATING = 15043
```
The authenticated user cannot clear the mod rating as none exists.

```csharp
MOD_MEDIA_NO_ADD_PERMISSION = 15035
```
The authenticated user does not have permission to modify this resource.

```csharp
MOD_MEDIA_NO_DELETE_PERMISSION = 15036
```
The authenticated user does not have permission to modify this resource.

```csharp
MATURE_MODS_NOT_ALLOWED = 15054
```
This game does not allow mature mods.

```csharp
SUBSCRIBE_FAILED_SELF = 15091
```
The user cannot subscribe to self.

```csharp
MUTE_USER_NOT_FOUND = 17000
```
The user with the supplied UserID could not be found.

```csharp
CANNOT_MUTE_YOURSELF = 17039
```
You cannot mute yourself.

```csharp
INSUFFICIENT_SPACE = 20442
```
Insufficient space for file

```csharp
REQUESTED_USER_NOT_FOUND = 21000
```
The requested user could not be found.

```csharp
MONETIZATION_UNEXPECTED_ERROR = 900000
```
An un expected error during a purchase transaction has occured. Please try again later.

```csharp
MONETIZATION_UNABLE_TO_COMMUNICATE = 900001
```
Unable to communicate with the monetization system. Please try again later.

```csharp
MONETIZATION_AUTHENTICATION = 900002
```
A failure has occured when trying to authenticate with the monetization system.

```csharp
USER_MONETIZATION_NOT_CONFIGURED = 900007
```
The account has not been created with monetization.

```csharp
MONETIZATION_WALLET_FETCH_FAILED = 900008
```
Unable to fetch the accounts' wallet. Please confirm the account has one

```csharp
MONETIZATION_IN_MAINTENANCE = 900012
```
The monetization is currently in maintance mode. Please try again later.

```csharp
USER_MONETIZATION_DISABLED = 900015
```
The account does not have monetization enabled.

```csharp
MONETIZATION_GAME_MONETIZATION_NOT_ENABLED = 900022
```
The game does not have active monetization.

```csharp
MONETIZATION_PAYMENT_FAILED = 900030
```
The payment transaction failed. Please try again later.

```csharp
MONETIZATION_ITEM_ALREADY_OWNED = 900034
```
The account already owns this item.

```csharp
MONETIZATION_INCORRECT_DISPLAY_PRICE = 900035
```
The given display price does not match the price of the mod.

```csharp
MONETIZATION_TERMS_NOT_ACCEPTED = 900044
```
The user has not agreed to the mod.io Monetization Terms. Please see terms_agreed parameter description and the Terms endpoint for more information.

```csharp
MONETIZATION_INSUFFICIENT_FUNDS = 900049
```
The account has insufficent funds to make this purchase.

```csharp
MONETIZATION_ENTITLEMENT_MAPPING_NOT_FOUND = 900051
```
The mod does not have a SKU assigned for the given portal.

```csharp
MONETIZATION_TRANSACTION_FINALIZE_FAILED  = 900055
```
The transaction could not be finalized due to an unexpected error. The mod will still be issued to the user at this point as the portal entitlement was consumed (an irreversible operation)

```csharp
MONETIZATION_OUT_OF_STOCK = 900061
```
The mod that was attempting to be purchased has sold out. Only applicable if the Game and Mod have enabled limited.

```csharp
MONETIZATION_TRANSACTION_CONSUME_FAILED = 900064
```
Creation of the payment intent or the consumption of the entitlement within the third party portal failed.

```csharp
MONETIZATION_PORTAL_INVALID  = 900098
```
The provided portal is not a supported platform.

___

###### FilesystemErrorCode{#Modio.Errors.FilesystemErrorCode}


```csharp
NONE = ErrorCode.NONE
```

```csharp
UNKNOWN = ErrorCode.UNKNOWN
```

```csharp
UNABLE_TO_CREATE_FOLDER = ErrorCode.UNABLE_TO_CREATE_FOLDER
```


```csharp
UNABLE_TO_CREATE_FILE = ErrorCode.UNABLE_TO_CREATE_FILE
```


```csharp
INSUFFICIENT_SPACE = ErrorCode.INSUFFICIENT_SPACE
```


```csharp
NO_PERMISSION = ErrorCode.NO_PERMISSION
```


```csharp
FILE_LOCKED = ErrorCode.FILE_LOCKED
```


```csharp
FILE_NOT_FOUND = ErrorCode.FILE_NOT_FOUND
```


```csharp
DIRECTORY_NOT_EMPTY = ErrorCode.DIRECTORY_NOT_EMPTY
```


```csharp
READ_ERROR = ErrorCode.READ_ERROR
```


```csharp
WRITE_ERROR = ErrorCode.WRITE_ERROR
```


```csharp
DIRECTORY_NOT_FOUND = ErrorCode.DIRECTORY_NOT_FOUND
```


___

###### GenericErrorCode{#Modio.Errors.GenericErrorCode}


```csharp
NONE = ErrorCode.NONE
```

```csharp
UNKNOWN = ErrorCode.UNKNOWN
```

```csharp
OPERATION_CANCELLED = ErrorCode.OPERATION_CANCELLED
```


```csharp
OPERATION_ERROR = ErrorCode.OPERATION_ERROR
```


```csharp
COULD_NOT_CREATE_HANDLE = ErrorCode.COULD_NOT_CREATE_HANDLE
```


```csharp
NO_DATA_AVAILABLE = ErrorCode.NO_DATA_AVAILABLE
```


```csharp
END_OF_FILE = ErrorCode.END_OF_FILE
```


```csharp
QUEUE_CLOSED = ErrorCode.QUEUE_CLOSED
```


```csharp
SDKALREADY_INITIALIZED = ErrorCode.SDKALREADY_INITIALIZED
```


```csharp
SDKNOT_INITIALIZED = ErrorCode.SDKNOT_INITIALIZED
```


```csharp
INDEX_OUT_OF_RANGE = ErrorCode.INDEX_OUT_OF_RANGE
```


```csharp
BAD_PARAMETER = ErrorCode.BAD_PARAMETER
```


```csharp
SHUTTING_DOWN = ErrorCode.SHUTTING_DOWN
```


```csharp
MISSING_COMPONENTS = ErrorCode.MISSING_COMPONENTS
```


___

###### HttpErrorCode{#Modio.Errors.HttpErrorCode}


```csharp
NONE = ErrorCode.NONE
```

```csharp
UNKNOWN = ErrorCode.UNKNOWN
```

```csharp
HTTP_NOT_INITIALIZED = ErrorCode.HTTP_NOT_INITIALIZED
```


```csharp
HTTP_ALREADY_INITIALIZED = ErrorCode.HTTP_ALREADY_INITIALIZED
```


```csharp
CANNOT_OPEN_CONNECTION = ErrorCode.CANNOT_OPEN_CONNECTION
```


```csharp
INSUFFICIENT_PERMISSIONS = ErrorCode.INSUFFICIENT_PERMISSIONS
```


```csharp
SECURITY_CONFIGURATION_INVALID = ErrorCode.SECURITY_CONFIGURATION_INVALID
```


```csharp
SERVER_UNAVAILABLE = ErrorCode.SERVER_UNAVAILABLE
```


```csharp
RESOURCE_NOT_AVAILABLE = ErrorCode.RESOURCE_NOT_AVAILABLE
```


```csharp
EXCESSIVE_REDIRECTS = ErrorCode.EXCESSIVE_REDIRECTS
```


```csharp
SERVER_CLOSED_CONNECTION = ErrorCode.SERVER_CLOSED_CONNECTION
```


```csharp
DOWNLOAD_NOT_PERMITTED = ErrorCode.DOWNLOAD_NOT_PERMITTED
```


```csharp
SERVERS_OVERLOADED = ErrorCode.SERVERS_OVERLOADED
```


```csharp
REQUEST_ERROR = ErrorCode.REQUEST_ERROR
```


```csharp
INVALID_RESPONSE = ErrorCode.INVALID_RESPONSE
```


```csharp
RATE_LIMITED = ErrorCode.RATE_LIMITED
```


___

###### MetricsErrorCode{#Modio.Errors.MetricsErrorCode}


```csharp
NONE = ErrorCode.NONE
```

```csharp
UNKNOWN = ErrorCode.UNKNOWN
```

```csharp
INVALID_METRICS_SECRET = ErrorCode.INVALID_METRICS_SECRET
```


___

###### ModManagementErrorCode{#Modio.Errors.ModManagementErrorCode}


```csharp
NONE = ErrorCode.NONE
```

```csharp
UNKNOWN = ErrorCode.UNKNOWN
```

```csharp
ALREADY_SUBSCRIBED = ErrorCode.ALREADY_SUBSCRIBED
```


```csharp
NO_PENDING_WORK = ErrorCode.NO_PENDING_WORK
```


```csharp
INSTALL_OR_UPDATE_CANCELLED = ErrorCode.INSTALL_OR_UPDATE_CANCELLED
```


```csharp
MOD_MANAGEMENT_DISABLED = ErrorCode.MOD_MANAGEMENT_DISABLED
```


```csharp
MOD_MANAGEMENT_ALREADY_ENABLED = ErrorCode.MOD_MANAGEMENT_ALREADY_ENABLED
```


```csharp
UPLOAD_CANCELLED = ErrorCode.UPLOAD_CANCELLED
```


```csharp
MOD_BEING_PROCESSED = ErrorCode.MOD_BEING_PROCESSED
```


```csharp
TEMP_MOD_SET_NOT_INITIALIZED = ErrorCode.TEMP_MOD_SET_NOT_INITIALIZED
```


```csharp
INCOMPATIBLE_DEPENDENCIES = ErrorCode.INCOMPATIBLE_DEPENDENCIES
```


___

###### ModValidationErrorCode{#Modio.Errors.ModValidationErrorCode}


```csharp
NONE = ErrorCode.NONE
```

```csharp
UNKNOWN = ErrorCode.UNKNOWN
```

```csharp
NO_FILES_FOUND_FOR_MOD = ErrorCode.NO_FILES_FOUND_FOR_MOD
```


```csharp
MOD_DIRECTORY_NOT_FOUND = ErrorCode.MOD_DIRECTORY_NOT_FOUND
```


```csharp
MD5DOES_NOT_MATCH = ErrorCode.MD5DOES_NOT_MATCH
```


___

###### MonetizationErrorCode{#Modio.Errors.MonetizationErrorCode}


```csharp
NONE = ErrorCode.NONE
```

```csharp
UNKNOWN = ErrorCode.UNKNOWN
```

```csharp
DISPLAY_PRICE_INCORRECT = ErrorCode.DISPLAY_PRICE_INCORRECT
```


```csharp
MONETIZATION_AUTHENTICATION_FAILED = ErrorCode.MONETIZATION_AUTHENTICATION_FAILED
```


```csharp
WALLET_FETCH_FAILED = ErrorCode.WALLET_FETCH_FAILED
```


```csharp
USER_MONETIZATION_NOT_CONFIGURED = ErrorCode.USER_MONETIZATION_NOT_CONFIGURED
```


```csharp
USER_MONETIZATION_DISABLED = ErrorCode.USER_MONETIZATION_DISABLED
```


```csharp
GAME_MONETIZATION_NOT_ENABLED = ErrorCode.GAME_MONETIZATION_NOT_ENABLED
```


```csharp
GAME_MONETIZATION_NOT_CONFIGURED = ErrorCode.GAME_MONETIZATION_NOT_CONFIGURED
```


```csharp
PAYMENT_FAILED = ErrorCode.PAYMENT_FAILED
```


```csharp
INCORRECT_DISPLAY_PRICE = ErrorCode.INCORRECT_DISPLAY_PRICE
```


```csharp
ITEM_ALREADY_OWNED = ErrorCode.ITEM_ALREADY_OWNED
```


```csharp
INSUFFICIENT_FUNDS = ErrorCode.INSUFFICIENT_FUNDS
```


```csharp
RETRY_ENTITLEMENTS = ErrorCode.RETRY_ENTITLEMENTS
```


___

###### RateLimitErrorCode{#Modio.Errors.RateLimitErrorCode}


```csharp
RATELIMITED = ErrorCode.RATELIMITED
```

```csharp
RATELIMITED_SAME_ENDPOINT = 11009
```

___

###### SystemErrorCode{#Modio.Errors.SystemErrorCode}


```csharp
NONE = ErrorCode.NONE
```

```csharp
UNKNOWN = ErrorCode.UNKNOWN
```

```csharp
UNKNOWN_SYSTEM_ERROR = ErrorCode.UNKNOWN_SYSTEM_ERROR
```


___

###### TempModsErrorCode{#Modio.Errors.TempModsErrorCode}


```csharp
NONE = ErrorCode.NONE
```

```csharp
UNKNOWN = ErrorCode.UNKNOWN
```

```csharp
CANT_INSTALL_TAINTED_MOD = ErrorCode.CANT_INSTALL_TAINTED_MOD
```


___

###### UserAuthErrorCode{#Modio.Errors.UserAuthErrorCode}


```csharp
NONE = ErrorCode.NONE
```

```csharp
UNKNOWN = ErrorCode.UNKNOWN
```

```csharp
UNABLE_TO_INIT_STORAGE = ErrorCode.UNABLE_TO_INIT_STORAGE
```


```csharp
STATUS_AUTH_TOKEN_MISSING = ErrorCode.STATUS_AUTH_TOKEN_MISSING
```


```csharp
STATUS_AUTH_TOKEN_INVALID = ErrorCode.STATUS_AUTH_TOKEN_INVALID
```


```csharp
NO_AUTH_TOKEN = ErrorCode.NO_AUTH_TOKEN
```


```csharp
ALREADY_AUTHENTICATED = ErrorCode.ALREADY_AUTHENTICATED
```


```csharp
EMAIL_LOGIN_CODE_EXPIRED = ErrorCode.EMAIL_LOGIN_CODE_EXPIRED
```


```csharp
EMAIL_LOGIN_CODE_INVALID = ErrorCode.EMAIL_LOGIN_CODE_INVALID
```


___

###### UserDataErrorCode{#Modio.Errors.UserDataErrorCode}


```csharp
NONE = ErrorCode.NONE
```

```csharp
UNKNOWN = ErrorCode.UNKNOWN
```

```csharp
INVALID_USER = ErrorCode.INVALID_USER
```


```csharp
BLOB_MISSING = ErrorCode.BLOB_MISSING
```


___

###### ZlibErrorCode{#Modio.Errors.ZlibErrorCode}


```csharp
NONE = ErrorCode.NONE
```

```csharp
UNKNOWN = ErrorCode.UNKNOWN
```

```csharp
NEED_BUFFERS = ErrorCode.NEED_BUFFERS
```


```csharp
END_OF_STREAM = ErrorCode.END_OF_STREAM
```


```csharp
STREAM_ERROR = ErrorCode.STREAM_ERROR
```


```csharp
INVALID_BLOCK_TYPE = ErrorCode.INVALID_BLOCK_TYPE
```


```csharp
INVALID_STORED_LENGTH = ErrorCode.INVALID_STORED_LENGTH
```


```csharp
TOO_MANY_SYMBOLS = ErrorCode.TOO_MANY_SYMBOLS
```


```csharp
INVALID_CODE_LENGTHS = ErrorCode.INVALID_CODE_LENGTHS
```


```csharp
INVALID_BIT_LENGTH_REPEAT = ErrorCode.INVALID_BIT_LENGTH_REPEAT
```


```csharp
MISSING_EOB = ErrorCode.MISSING_EOB
```


```csharp
INVALID_LITERAL_LENGTH = ErrorCode.INVALID_LITERAL_LENGTH
```


```csharp
INVALID_DISTANCE_CODE = ErrorCode.INVALID_DISTANCE_CODE
```


```csharp
INVALID_DISTANCE = ErrorCode.INVALID_DISTANCE
```


```csharp
OVER_SUBSCRIBED_LENGTH = ErrorCode.OVER_SUBSCRIBED_LENGTH
```


```csharp
INCOMPLETE_LENGTH_SET = ErrorCode.INCOMPLETE_LENGTH_SET
```


___
