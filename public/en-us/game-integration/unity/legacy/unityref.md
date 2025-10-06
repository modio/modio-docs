---
id: unity-unityref
title: Unity Reference Docs
slug: /legacy/unity/unityref
sidebar_position: 10
---

## ModIO

| Type | Name | Description |
|------|------|-------------|
| [`AuthenticationServiceProviderExtensions`](#ModIO.AuthenticationServiceProviderExtensions) | AuthenticationServiceProviderExtensions |  |
| [`BuildSettings`](#ModIO.BuildSettings) | BuildSettings | Build-specific configuration values. This can be setup directly from the inspector when editing the config settings file, or you can instantiate and use this at runtime with the Initialize method |
| [`CommentDetails`](#ModIO.CommentDetails) | CommentDetails |  |
| [`CommentPage`](#ModIO.CommentPage) | CommentPage | A struct containing the ModComments and total number of remaining results that can be acquired with the SearchFilter used in the GetMods request. |
| [`DownloadReference`](#ModIO.DownloadReference) | DownloadReference | Used in ModIOUnity.DownloadTexture() to get the Texture. (DownloadReference is serializable with Unity's JsonUtility) |
| [`Entitlement`](#ModIO.Entitlement) | Entitlement | A struct representing all of the information available for an Entitlement. |
| [`InstalledMod`](#ModIO.InstalledMod) | InstalledMod | Struct used to represent a mod that already exists on the current device. You can view the subscribed users to this mod as well as the directory and modprofile associated to it. |
| [`ModComment`](#ModIO.ModComment) | ModComment |  |
| [`ModDependencies`](#ModIO.ModDependencies) | ModDependencies | A struct representing all of the information available for a Mod's Dependencies. |
| [`ModIOUnity`](#ModIO.ModIOUnity) | ModIOUnity | Main interface for the mod.io Unity plugin. |
| [`ModIOUnityAsync`](#ModIO.ModIOUnityAsync) | ModIOUnityAsync | Main async interface for the mod.io Unity plugin. |
| [`ModIOUnityEvents`](#ModIO.ModIOUnityEvents) | ModIOUnityEvents |  |
| [`ModId`](#ModIO.ModId) | ModId | A struct representing the globally unique identifier for a specific mod profile. |
| [`ModPage`](#ModIO.ModPage) | ModPage | A struct containing the ModProfiles and total number of remaining results that can be acquired with the SearchFilter used in the GetMods request. |
| [`ModProfile`](#ModIO.ModProfile) | ModProfile | A struct representing all of the information available for a ModProfile. |
| [`ModProfileDetails`](#ModIO.ModProfileDetails) | ModProfileDetails | Use this class to fill out the details of a Mod Profile that you'd like to create or edit. If you're submitting this via CreateModProfile you must assign values to logo, name and summary, otherwise the submission will be rejected (All fields except modId are optional if submitting this via EditModProfile) |
| [`ModStats`](#ModIO.ModStats) | ModStats | Detailed stats about a Mod's ratings, downloads, subscribers, popularity etc |
| [`ModfileDetails`](#ModIO.ModfileDetails) | ModfileDetails |  |
| [`MonetizationTeamAccount`](#ModIO.MonetizationTeamAccount) | MonetizationTeamAccount |  |
| [`MultipartUpload`](#ModIO.MultipartUpload) | MultipartUpload |  |
| [`MultipartUploadPart`](#ModIO.MultipartUploadPart) | MultipartUploadPart |  |
| [`ProgressHandle`](#ModIO.ProgressHandle) | ProgressHandle | A ProgressHandle can only be used to monitor the progress of an operation and cannot be used to cancel or suspend ongoing operations. The OperationType enum field specifies what type of operation this handle is for. The Progress field can be used to get the percentage (0.0 - 1.0) of the progress. The Completed and Failed fields can be used to determine if the operation is complete and whether or not it failed. |
| [`Rating`](#ModIO.Rating) | Rating | A struct representing all of the information available for a Rating. |
| [`Report`](#ModIO.Report) | Report | Used in conjunction with ModIOUnity.Report() to send a report to the mod.io server for a specific mod. |
| [`Result`](#ModIO.Result) | Result | Struct returned from ModIO callbacks to inform the caller if the operation succeeded. |
| [`ResultAnd`](#ModIO.ResultAnd) | ResultAnd | Convenience wrapper for essentially a Tuple. |
| [`SearchFilter`](#ModIO.SearchFilter) | SearchFilter | Used to build a filter that is sent with requests for retrieving mods. |
| [`ServerSettings`](#ModIO.ServerSettings) | ServerSettings | Describes the server settings to use for the ModIO Plugin. This can be setup directly from the inspector when editing the config settings file, or you can instantiate and use this at runtime with the Initialize method |
| [`SubscribedMod`](#ModIO.SubscribedMod) | SubscribedMod | Represents the ModProfile of a mod the current user has subscribed to. Contains the status and a directory (if installed) and the associated ModProfile. |
| [`SubscribedModStatusExtensions`](#ModIO.SubscribedModStatusExtensions) | SubscribedModStatusExtensions |  |
| [`Tag`](#ModIO.Tag) | Tag | Represents a Tag that can be assigned to a mod. |
| [`TagCategory`](#ModIO.TagCategory) | TagCategory | Represents a particular category of tags. |
| [`TermsHash`](#ModIO.TermsHash) | TermsHash | This is the hash that identifies the TOS. Used to validate the TOS requirement when attempting to authenticate a user. |
| [`TermsOfUse`](#ModIO.TermsOfUse) | TermsOfUse | TOS object received from a successful use of ModIOUnity.GetTermsOfUse This is used when attempting to authenticate via a third party. You must retrieve the TOS and input it along with an authentication request. |
| [`TermsOfUseLink`](#ModIO.TermsOfUseLink) | TermsOfUseLink | Represents a url as part of the TOS. The 'required' field can be used to determine whether or not it is a TOS requirement to be displayed to the end user when viewing the TOS text. |
| [`TokenPack`](#ModIO.TokenPack) | TokenPack |  |
| [`UISettings`](#ModIO.UISettings) | UISettings |  |
| [`UserInstalledMod`](#ModIO.UserInstalledMod) | UserInstalledMod | Struct used to represent a mod that already exists on the current device. You can view the subscribed users to this mod as well as the directory and modprofile associated to it. |
| [`UserProfile`](#ModIO.UserProfile) | UserProfile | Represents a particular mod.io user with their username, DownloadReferences for getting their avatar, as well as their language and timezone. |
| [`Wallet`](#ModIO.Wallet) | Wallet | A struct representing the user's wallet and current balance. |

### AuthenticationServiceProviderExtensions{#ModIO.AuthenticationServiceProviderExtensions}

```csharp
public static class AuthenticationServiceProviderExtensions
```


###### Method


#### GetProviderName{#ModIO.AuthenticationServiceProviderExtensions.GetProviderName}

```csharp
public static string GetProviderName(this AuthenticationServiceProvider provider)
```


#### GetTokenFieldName{#ModIO.AuthenticationServiceProviderExtensions.GetTokenFieldName}

```csharp
public static string GetTokenFieldName(this AuthenticationServiceProvider provider)
```

___

### BuildSettings{#ModIO.BuildSettings}

```csharp
[System.Serializable]  public class BuildSettings
```

Build-specific configuration values. This can be setup directly from the inspector when
editing the config settings file, or you can instantiate and use this at runtime with the
Initialize method


###### See Also

[`ServerSettings`](#ModIO.ServerSettings)
[`ModIOUnity.InitializeForUser`](#ModIO.ModIOUnity.InitializeForUser)


###### Field


#### [`LogLevel`](#ModIO.LogLevel) `logLevel`

```csharp
LogLevel logLevel
```
Level to log at.


#### [`UserPortal`](#ModIO.UserPortal) `userPortal`

```csharp
UserPortal userPortal = UserPortal.None
```
Portal the game will be launched through.


#### [`UserPortal`](#ModIO.UserPortal) `defaultPortal`

```csharp
UserPortal defaultPortal = UserPortal.None
```
Default portal.


#### `uint requestCacheLimitKB`

```csharp
uint requestCacheLimitKB
```
Size limit for the request cache.


#### `int writeSpeedInKbPerSecond`

```csharp
int writeSpeedInKbPerSecond = 0
```
The speed at which will be maintained when performing write operations


#### `int bytesPerWrite`

```csharp
int bytesPerWrite = 0
```
The max number of bytes that will be written in one write operation


#### `float writeSpeedReductionThreshold`

```csharp
float writeSpeedReductionThreshold = .75f
```
The threshold as a percentage of the total budget of one interval, at which write operations will start to slow down.


#### `bool disableWriteSpeedReduction`

```csharp
bool disableWriteSpeedReduction = false
```


###### Method


#### SetDefaultPortal{#ModIO.BuildSettings.SetDefaultPortal}

```csharp
public void SetDefaultPortal()
```

___

### CommentDetails{#ModIO.CommentDetails}

```csharp
public class CommentDetails
```


###### Field


#### `long replyId`

```csharp
long replyId
```
Id of the parent comment this comment is replying to (can be 0 if the comment is not a reply).


#### `string content`

```csharp
string content
```
Contents of the comment.

___

### CommentPage{#ModIO.CommentPage}

```csharp
[System.Serializable]  public struct CommentPage
```

A struct containing the ModComments and total number of remaining results that can be
acquired with the SearchFilter used in the GetMods request.


###### See Also

[`ModIOUnity.GetModComments`](#ModIO.ModIOUnity.GetModComments)
[`ModIOUnityAsync.GetModComments`](#ModIO.ModIOUnityAsync.GetModComments)


###### Field


#### [`ModComment`](#ModIO.ModIOUnity.GetModComments) `CommentObjects`

```csharp
ModComment[] CommentObjects
```

The mod profiles retrieved from this pagination request


###### See Also

[`ModIOUnity.GetModComments`](#ModIO.ModIOUnity.GetModComments)
[`ModIOUnityAsync.GetModComments`](#ModIO.ModIOUnityAsync.GetModComments)


#### `long totalSearchResultsFound`

```csharp
long totalSearchResultsFound
```

the total results that could be found. eg there may be a total of 1,000 comments but
this CommentPage may only contain the first 100, depending on the SearchFilter pagination
settings.


###### See Also

[`SearchFilter`](#ModIO.SearchFilter)
[`SearchFilter.SetPageIndex`](#ModIO.SearchFilter.SetPageIndex)
[`SearchFilter.SetPageSize`](#ModIO.SearchFilter.SetPageSize)
[`ModIOUnity.GetModComments`](#ModIO.ModIOUnity.GetModComments)
[`ModIOUnityAsync.GetModComments`](#ModIO.ModIOUnityAsync.GetModComments)

___

### DownloadReference{#ModIO.DownloadReference}

```csharp
[System.Serializable]  public struct DownloadReference
```

Used in ModIOUnity.DownloadTexture() to get the Texture.
(DownloadReference is serializable with Unity's JsonUtility)


###### See Also

`ModIOUnity.DownloadTexture`
`ModIOUnityAsync.DownloadTexture`


###### Field


#### [`ModId`](#ModIO.ModId) `modId`

```csharp
ModId modId
```


#### `string url`

```csharp
string url
```


#### `string filename`

```csharp
string filename
```


###### Method


#### IsValid{#ModIO.DownloadReference.IsValid}

```csharp
public bool IsValid()
```

Check if there is a valid url for this image. You may want to check this before using
the ModIOUnity.DownloadTexture method.


###### See Also

`ModIOUnity.DownloadTexture`
`ModIOUnityAsync.DownloadTexture`

###### Returns

true if the url isn't null

___

### Entitlement{#ModIO.Entitlement}

```csharp
[Serializable]  public struct Entitlement
```

A struct representing all of the information available for an Entitlement.


###### See Also

[`ModIOUnity.SyncEntitlements`](#ModIO.ModIOUnity.SyncEntitlements)
[`ModIOUnityAsync.SyncEntitlements`](#ModIO.ModIOUnityAsync.SyncEntitlements)


###### Field


#### `string transactionId`

```csharp
string transactionId
```


#### `int transactionState`

```csharp
int transactionState
```


#### `string skuId`

```csharp
string skuId
```


#### `bool entitlementConsumed`

```csharp
bool entitlementConsumed
```

___

### InstalledMod{#ModIO.InstalledMod}

```csharp
public struct InstalledMod
```

Struct used to represent a mod that already exists on the current device. You can view the
subscribed users to this mod as well as the directory and modprofile associated to it.


###### See Also

[`ModIOUnity.GetSystemInstalledMods`](#ModIO.ModIOUnity.GetSystemInstalledMods)
[`ModProfile`](#ModIO.ModIOUnity.CreateModProfile)


###### Field


#### `List subscribedUsers`

```csharp
List<long> subscribedUsers
```

The usernames of all the known users on this device that are subscribed to this mod



#### `bool updatePending`

```csharp
bool updatePending
```

Whether or not the mod has been marked for an update



#### `string directory`

```csharp
string directory
```

the directory of where this mod is installed



#### `string metadata`

```csharp
string metadata
```

The metadata for the version of the mod that is currently installed (Not to be mistaken
with the metadata located inside of ModProfile.cs)



#### `string version`

```csharp
string version
```

the version of this installed mod



#### `string changeLog`

```csharp
string changeLog
```

the change log for this version of the installed mod



#### `DateTime dateAdded`

```csharp
DateTime dateAdded
```

The date that this version of the mod was submitted to mod.io



#### [`ModProfile`](#ModIO.ModIOUnity.CreateModProfile) `modProfile`

```csharp
ModProfile modProfile
```

The profile of this mod, including the summary and name



#### `bool enabled`

```csharp
bool enabled
```

Whether the mod has been marked as enabled or disabled by the user


###### See Also

[`ModIOUnity.EnableMod`](#ModIO.ModIOUnity.EnableModManagement)
[`ModIOUnity.DisableMod`](#ModIO.ModIOUnity.DisableModManagement)

___

### ModComment{#ModIO.ModComment}

```csharp
public struct ModComment
```


###### Field


#### `long id`

```csharp
long id
```
Unique id of the comment.


#### [`ModId`](#ModIO.ModId) `modId`

```csharp
ModId modId
```
Unique id of the parent mod. This is now deprecated and will be removed in future
API versions, please use resource_id instead.


#### `long resourceId`

```csharp
long resourceId
```
Unique id of the resource.


#### `long submittedBy`

```csharp
long submittedBy
```
Unique id of the user who posted the comment.


#### `long dateAdded`

```csharp
long dateAdded
```
Unix timestamp of date comment was posted.


#### `string threadPosition`

```csharp
string threadPosition
```

Levels of nesting in a comment thread. You should order by this field, to maintain comment
grouping. How it works:
     - The first comment will have the position '01'.
     - The second comment will have the position '02'.
    - If someone responds to the second comment the position will be '02.01'.
     - A maximum of 3 levels is supported.



#### `long karma`

```csharp
long karma
```
Karma received for the comment (can be positive or negative).


#### [`CommentDetails`](#ModIO.CommentDetails) `commentDetails`

```csharp
CommentDetails commentDetails
```


#### [`UserProfile`](#ModIO.UserProfile) `userProfile`

```csharp
UserProfile userProfile
```

___

### ModDependencies{#ModIO.ModDependencies}

```csharp
[Serializable]  public struct ModDependencies
```

A struct representing all of the information available for a Mod's Dependencies.


###### See Also

[`ModIOUnity.GetModDependencies`](#ModIO.ModIOUnity.GetModDependencies)
[`ModIOUnityAsync.GetModDependencies`](#ModIO.ModIOUnityAsync.GetModDependencies)


###### Field


#### [`ModId`](#ModIO.ModId) `modId`

```csharp
ModId modId
```


#### `string modName`

```csharp
string modName
```


#### `string modNameId`

```csharp
string modNameId
```


#### `DateTime dateAdded`

```csharp
DateTime dateAdded
```


#### `int dependencyDepth`

```csharp
int dependencyDepth
```


#### [`DownloadReference`](#ModIO.DownloadReference) `logoImage_320x180`

```csharp
DownloadReference logoImage_320x180
```


#### [`DownloadReference`](#ModIO.DownloadReference) `logoImage_640x360`

```csharp
DownloadReference logoImage_640x360
```


#### [`DownloadReference`](#ModIO.DownloadReference) `logoImage_1280x720`

```csharp
DownloadReference logoImage_1280x720
```


#### [`DownloadReference`](#ModIO.DownloadReference) `logoImageOriginal`

```csharp
DownloadReference logoImageOriginal
```


#### [`Modfile`](#ModIO.ModIOUnity.UploadModfile) `modfile`

```csharp
Modfile modfile
```

___

### ModIOUnity{#ModIO.ModIOUnity}

```csharp
public static class ModIOUnity
```
Main interface for the mod.io Unity plugin.

###### Remarks

Every `ModIOUnity` method with a callback has an asynchronous alternative in `ModIOUnityAsync`.

###### See Also

[`ModIOUnityAsync`](#ModIO.ModIOUnityAsync)


###### Method


#### IsInitialized{#ModIO.ModIOUnity.IsInitialized}

```csharp
public static bool IsInitialized(bool attemptAutoInitializeIfNeeded
```

###### Returns

`true` if the plugin has been initialized.


#### SetLoggingDelegate{#ModIO.ModIOUnity.SetLoggingDelegate}

```csharp
public static void SetLoggingDelegate(LogMessageDelegate loggingDelegate)
```
Use to send log messages to `loggingDelegate` instead of `Unity.Debug.Log(string)`.

###### Parameters

`loggingDelegate` The delegate for receiving log messages
```csharp

ModIOUnity.SetLoggingDelegate((LogLevel logLevel, string logMessage) => {
    if (logLevel == LogLevel.Error)
        Debug.LogError($"mod.io plugin error: {logMessage}");
});

```


###### See Also

`LogMessageDelegate`
[`LogLevel`](#ModIO.LogLevel)


#### InitializeForUser{#ModIO.ModIOUnity.InitializeForUser}

```csharp
public static Result InitializeForUser(string userProfileIdentifier,  ServerSettings serverSettings,  BuildSettings buildSettings,  UISettings uiSettings
```

Use  if you have a pre-configured mod.io config ScriptableObject.


###### Parameters

`userProfileIdentifier` 

`serverSettings` Data used by the plugin to connect with the mod.io service.
`buildSettings` Data used by the plugin to interact with the platform.
`uiSettings` Data used by the plugin's default UI to decide what features to show
```csharp

ServerSettings serverSettings = new ServerSettings {
    serverURL = "https://api.test.mod.io/v1",
    gameId = 1234,
    gameKey = "1234567890abcdefghijklmnop"
};

```


###### See Also

[`ServerSettings`](#ModIO.ServerSettings)
[`BuildSettings`](#ModIO.BuildSettings)
[`Result`](#ModIO.ResultAnd)
[`FetchUpdates`](#ModIO.ModIOUnity.FetchUpdates)
[`Shutdown`](#ModIO.ModIOUnity.Shutdown)


#### InitializeForUser{#ModIO.ModIOUnity.InitializeForUser}

```csharp
public static Result InitializeForUser(string userProfileIdentifier)
```


#### Shutdown{#ModIO.ModIOUnity.Shutdown}

```csharp
public static void Shutdown(Action shutdownComplete)
```
Cancels all public operations, frees plugin resources and invokes any pending callbacks with a cancelled result code.

###### Remarks

`Result.IsCancelled()` can be used to determine if it was cancelled due to a shutdown operation.
```csharp
ModIOUnity.Shutdown(() => Debug.Log("Plugin shutdown complete"));
```


###### See Also

[`Result`](#ModIO.ResultAnd)


#### Ping{#ModIO.ModIOUnity.Ping}

```csharp
public static void Ping(Action<Result> callback)
```
Pings the server.
`Result.Succeeded()` will be `true` if a response was received.



#### RequestExternalAuthentication{#ModIO.ModIOUnity.RequestExternalAuthentication}

```csharp
public static void RequestExternalAuthentication(Action<ResultAnd<ExternalAuthenticationToken>> callback)
```
Listen for an external login attempt. The callback argument contains an  that includes the url and code to display to the user. `ExternalAuthenticationToken.task` will complete once the user enters the code.

###### Parameters

`callback` The callback to handle the response, which includes the  if the request was successful.

###### Remarks

The request will time out after 15 minutes. You can cancel it at any time using `token.Cancel()`.
```csharp

ModIOUnity.RequestExternalAuthentication(async response =>
{
    if (!response.result.Succeeded())
    {
        Debug.Log($"RequestExternalAuthentication failed: {response.result.message}");
        return;
    }

```


###### See Also

[`Result`](#ModIO.ResultAnd)
[`ResultAnd`](#ModIO.ResultAnd)
`ExternalAuthenticationToken`


#### RequestAuthenticationEmail{#ModIO.ModIOUnity.RequestAuthenticationEmail}

```csharp
public static void RequestAuthenticationEmail(string emailaddress, Action<Result> callback)
```

Sends an email with a security code to the specified Email Address. The security code
is then used to Authenticate the user session using ModIOUnity.SubmitEmailSecurityCode()


###### Remarks


The callback will return a Result object.
If the email is successfully sent Result.Succeeded() will equal true.
If you haven't Initialized the plugin then Result.IsInitializationError() will equal
true. If the string provided for the emailaddress is not .NET compliant
Result.IsAuthenticationError() will equal true.


###### Parameters

`emailaddress` the Email Address to send the security code to, eg "JohnDoe@gmail.com"
`callback` Callback to invoke once the operation is complete

###### See Also

[`SubmitEmailSecurityCode`](#ModIO.ModIOUnity.SubmitEmailSecurityCode)
[`Result`](#ModIO.ResultAnd)
[`ModIOUnityAsync.RequestAuthenticationEmail`](#ModIO.ModIOUnityAsync.RequestAuthenticationEmail)
```csharp

void Example()
{
    ModIOUnity.RequestAuthenticationEmail("johndoe@gmail.com", RequestAuthenticationCallback);
}
void RequestAuthenticationCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Succeeded to send security code");
    }
    else
    {
        Debug.Log("Failed to send security code to that email address");
    }
}

```



#### SubmitEmailSecurityCode{#ModIO.ModIOUnity.SubmitEmailSecurityCode}

```csharp
public static void SubmitEmailSecurityCode(string securityCode, Action<Result> callback)
```

Attempts to Authenticate the current session by submitting a security code received by
email from ModIOUnity.RequestAuthenticationEmail()


###### Remarks


It is intended that this function is used after ModIOUnity.RequestAuthenticationEmail()
is performed successfully.


###### Parameters

`securityCode` The security code received from an authentication email
`callback` Callback to invoke once the operation is complete

###### See Also

[`RequestAuthenticationEmail`](#ModIO.ModIOUnity.RequestAuthenticationEmail)
[`Result`](#ModIO.ResultAnd)
[`ModIOUnityAsync.SubmitEmailSecurityCode`](#ModIO.ModIOUnityAsync.SubmitEmailSecurityCode)
```csharp

void Example(string userSecurityCode)
{
    ModIOUnity.SubmitEmailSecurityCode(userSecurityCode, SubmitCodeCallback);
}
void SubmitCodeCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("You have successfully authenticated the user");
    }
    else
    {
        Debug.Log("Failed to authenticate the user");
    }
}

```



#### GetTermsOfUse{#ModIO.ModIOUnity.GetTermsOfUse}

```csharp
public static void GetTermsOfUse(Action<ResultAnd<TermsOfUse>> callback)
```

This retrieves the terms of use text to be shown to the user to accept/deny before
authenticating their account via a third party provider, eg steam or google.


###### Remarks


If the callback succeeds it will also provide a TermsOfUse struct that contains a
TermsHash struct which you will need to provide when calling a third party
authentication method such as ModIOUnity.AuthenticateUserViaSteam()


###### Parameters

`callback` Callback to invoke once the operation is complete containing a
result and a hash code to use for authentication via third party providers.

###### See Also

[`TermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`AuthenticateUserViaDiscord`](#ModIO.ModIOUnity.AuthenticateUserViaDiscord)
[`AuthenticateUserViaGoogle`](#ModIO.ModIOUnity.AuthenticateUserViaGoogle)
[`AuthenticateUserViaGOG`](#ModIO.ModIOUnity.AuthenticateUserViaGOG)
[`AuthenticateUserViaItch`](#ModIO.ModIOUnity.AuthenticateUserViaItch)
[`AuthenticateUserViaOculus`](#ModIO.ModIOUnity.AuthenticateUserViaOculus)
[`AuthenticateUserViaSteam`](#ModIO.ModIOUnity.AuthenticateUserViaSteam)
[`AuthenticateUserViaSwitch`](#ModIO.ModIOUnity.AuthenticateUserViaSwitch)
[`AuthenticateUserViaXbox`](#ModIO.ModIOUnity.AuthenticateUserViaXbox)
[`AuthenticateUserViaPlayStation`](#ModIO.ModIOUnity.AuthenticateUserViaPlayStation)
[`ModIOUnityAsync.GetTermsOfUse`](#ModIO.ModIOUnityAsync.GetTermsOfUse)
```csharp

void Example()
{
    ModIOUnity.GetTermsOfUse(GetTermsOfUseCallback);
}
void GetTermsOfUseCallback(ResultAnd<TermsOfUse> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}

```



#### AuthenticateUserViaSteam{#ModIO.ModIOUnity.AuthenticateUserViaSteam}

```csharp
public static void AuthenticateUserViaSteam(string steamToken,  string emailAddress,  TermsHash? hash,  Action<Result> callback)
```

Attempts to authenticate a user via the steam API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`steamToken` the user's steam token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse() (Can be null if submitted once before)
`callback` Callback to be invoked when the operation completes

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`ModIOUnityAsync.AuthenticateUserViaSteam`](#ModIO.ModIOUnityAsync.AuthenticateUserViaSteam)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
void GetTermsOfUse_Example()
{
    ModIOUnity.GetTermsOfUse(GetTermsOfUseCallback);
}
void GetTermsOfUseCallback(ResultAnd<TermsOfUse> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
void Authenticate_Example()
{
    ModIOUnity.AuthenticateUserViaSteam(steamToken, "johndoe@gmail.com", modIOTermsOfUse.hash, AuthenticationCallback);
}
void AuthenticationCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaEpic{#ModIO.ModIOUnity.AuthenticateUserViaEpic}

```csharp
public static void AuthenticateUserViaEpic(string epicToken,  string emailAddress,  TermsHash? hash,  Action<Result> callback)
```

Attempts to authenticate a user via the epic API.


###### Parameters

`epicToken` the user's epic token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()
`callback` Callback to be invoked when the operation completes

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`ModIOUnityAsync.AuthenticateUserViaEpic`](#ModIO.ModIOUnityAsync.AuthenticateUserViaEpic)


#### AuthenticateUserViaGOG{#ModIO.ModIOUnity.AuthenticateUserViaGOG}

```csharp
public static void AuthenticateUserViaGOG(string gogToken, string emailAddress,  TermsHash? hash,  Action<Result> callback)
```

Attempts to authenticate a user via the GOG API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`gogToken` the user's gog token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()
`callback` Callback to be invoked when the operation completes

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`ModIOUnityAsync.AuthenticateUserViaGOG`](#ModIO.ModIOUnityAsync.AuthenticateUserViaGOG)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
void GetTermsOfUse_Example()
{
    ModIOUnity.GetTermsOfUse(GetTermsOfUseCallback);
}
void GetTermsOfUseCallback(ResultAnd<TermsOfUse> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
void Authenticate_Example()
{
    ModIOUnity.AuthenticateUserViaGOG(gogToken, "johndoe@gmail.com", modIOTermsOfUse.hash, AuthenticationCallback);
}
void AuthenticationCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaPlayStation{#ModIO.ModIOUnity.AuthenticateUserViaPlayStation}

```csharp
public static void AuthenticateUserViaPlayStation(string authCode, string emailAddress,  TermsHash? hash, PlayStationEnvironment environment,  Action<Result> callback)
```

Attempts to authenticate a user via the GOG API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`authCode` the user's auth code
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()
`environment` the PSN account environment
`callback` Callback to be invoked when the operation completes

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`ModIOUnityAsync.AuthenticateUserViaGOG`](#ModIO.ModIOUnityAsync.AuthenticateUserViaGOG)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
void GetTermsOfUse_Example()
{
    ModIOUnity.GetTermsOfUse(GetTermsOfUseCallback);
}
void GetTermsOfUseCallback(ResultAnd<TermsOfUse> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
void Authenticate_Example()
{
    ModIOUnity.AuthenticateUserViaPlaystation(authCode, "johndoe@gmail.com", modIOTermsOfUse.hash, PlayStationEnvironment.np, AuthenticationCallback);
}
void AuthenticationCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaItch{#ModIO.ModIOUnity.AuthenticateUserViaItch}

```csharp
public static void AuthenticateUserViaItch(string itchioToken,  string emailAddress,  TermsHash? hash,  Action<Result> callback)
```

Attempts to authenticate a user via the Itch.io API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`itchioToken` the user's itch token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()
`callback` Callback to be invoked when the operation completes

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`ModIOUnityAsync.AuthenticateUserViaItch`](#ModIO.ModIOUnityAsync.AuthenticateUserViaItch)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
void GetTermsOfUse_Example()
{
    ModIOUnity.GetTermsOfUse(GetTermsOfUseCallback);
}
void GetTermsOfUseCallback(ResultAnd<TermsOfUse> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
void Authenticate_Example()
{
    ModIOUnity.AuthenticateUserViaItch(itchioToken, "johndoe@gmail.com", modIOTermsOfUse.hash, AuthenticationCallback);
}
void AuthenticationCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaXbox{#ModIO.ModIOUnity.AuthenticateUserViaXbox}

```csharp
public static void AuthenticateUserViaXbox(string xboxToken,  string emailAddress,  TermsHash? hash,  Action<Result> callback)
```

Attempts to authenticate a user via the Xbox API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`xboxToken` the user's xbl token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()
`callback` Callback to be invoked when the operation completes

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`ModIOUnityAsync.AuthenticateUserViaXbox`](#ModIO.ModIOUnityAsync.AuthenticateUserViaXbox)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
void GetTermsOfUse_Example()
{
    ModIOUnity.GetTermsOfUse(GetTermsOfUseCallback);
}
void GetTermsOfUseCallback(ResultAnd<TermsOfUse> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
void Authenticate_Example()
{
    ModIOUnity.AuthenticateUserViaXbox(xboxToken, "johndoe@gmail.com", modIOTermsOfUse.hash, AuthenticationCallback);
}
void AuthenticationCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaSwitch{#ModIO.ModIOUnity.AuthenticateUserViaSwitch}

```csharp
public static void AuthenticateUserViaSwitch(string SwitchNsaId,  string emailAddress,  TermsHash? hash,  Action<Result> callback)
```

Attempts to authenticate a user via the switch API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`SwitchNsaId` the user's switch NSA id token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()
`callback` Callback to be invoked when the operation completes

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`ModIOUnityAsync.AuthenticateUserViaSwitch`](#ModIO.ModIOUnityAsync.AuthenticateUserViaSwitch)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
void GetTermsOfUse_Example()
{
    ModIOUnity.GetTermsOfUse(GetTermsOfUseCallback);
}
void GetTermsOfUseCallback(ResultAnd<TermsOfUse> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
void Authenticate_Example()
{
    ModIOUnity.AuthenticateUserViaSwitch(switchToken, "johndoe@gmail.com", modIOTermsOfUse.hash, AuthenticationCallback);
}
void AuthenticationCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaDiscord{#ModIO.ModIOUnity.AuthenticateUserViaDiscord}

```csharp
public static void AuthenticateUserViaDiscord(string discordToken,  string emailAddress,  TermsHash? hash,  Action<Result> callback)
```

Attempts to authenticate a user via the Discord API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`discordToken` the user's discord token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()
`callback` Callback to be invoked when the operation completes

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`ModIOUnityAsync.AuthenticateUserViaDiscord`](#ModIO.ModIOUnityAsync.AuthenticateUserViaDiscord)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
void GetTermsOfUse_Example()
{
    ModIOUnity.GetTermsOfUse(GetTermsOfUseCallback);
}
void GetTermsOfUseCallback(ResultAnd<TermsOfUse> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
void Authenticate_Example()
{
    ModIOUnity.AuthenticateUserViaDiscord(discordToken, "johndoe@gmail.com", modIOTermsOfUse.hash, AuthenticationCallback);
}
void AuthenticationCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaGoogle{#ModIO.ModIOUnity.AuthenticateUserViaGoogle}

```csharp
public static void AuthenticateUserViaGoogle(string token,  string emailAddress,  TermsHash? hash,  Action<Result> callback)
```

Attempts to authenticate a user via the Google API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`token` google auth code or id token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()
`callback` Callback to be invoked when the operation completes

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`ModIOUnityAsync.AuthenticateUserViaGoogle`](#ModIO.ModIOUnityAsync.AuthenticateUserViaGoogle)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
void GetTermsOfUse_Example()
{
    ModIOUnity.GetTermsOfUse(GetTermsOfUseCallback);
}
void GetTermsOfUseCallback(ResultAnd<TermsOfUse> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
void Authenticate_Example()
{
    ModIOUnity.AuthenticateUserViaGoogle(token, "johndoe@gmail.com", modIOTermsOfUse.hash, AuthenticationCallback);
}
void AuthenticationCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaApple{#ModIO.ModIOUnity.AuthenticateUserViaApple}

```csharp
public static void AuthenticateUserViaApple(string authCode,  string emailAddress,  TermsHash? hash,  Action<Result> callback)
```

Attempts to authenticate a user via the Apple API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`authCode` Apple auth code
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()
`callback` Callback to be invoked when the operation completes

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`ModIOUnityAsync.AuthenticateUserViaApple`](#ModIO.ModIOUnityAsync.AuthenticateUserViaApple)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
void GetTermsOfUse_Example()
{
    ModIOUnity.GetTermsOfUse(GetTermsOfUseCallback);
}
void GetTermsOfUseCallback(ResultAnd<TermsOfUse> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
void Authenticate_Example()
{
    ModIOUnity.AuthenticateUserViaApple(authCode, "johndoe@gmail.com", modIOTermsOfUse.hash, AuthenticationCallback);
}
void AuthenticationCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaOculus{#ModIO.ModIOUnity.AuthenticateUserViaOculus}

```csharp
public static void AuthenticateUserViaOculus(OculusDevice oculusDevice, string nonce,  long userId, string oculusToken,  string emailAddress,  TermsHash? hash,  Action<Result> callback)
```

Attempts to authenticate a user via the Oculus API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`oculusDevice` the device your authenticating on
`nonce` the nonce
`oculusToken` the user's oculus token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()
`callback` Callback to be invoked when the operation completes
`userId` 

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`ModIOUnityAsync.AuthenticateUserViaOculus`](#ModIO.ModIOUnityAsync.AuthenticateUserViaOculus)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
void GetTermsOfUse_Example()
{
    ModIOUnity.GetTermsOfUse(GetTermsOfUseCallback);
}
void GetTermsOfUseCallback(ResultAnd<TermsOfUse> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
void Authenticate_Example()
{
    ModIOUnity.AuthenticateUserViaOculus(oculusDevice.Quest,
                                         nonce,
                                         userId,
                                         oculusToken,
                                         "johndoe@gmail.com",
                                         modIOTermsOfUse.hash, AuthenticationCallback);
}
void AuthenticationCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaOpenId{#ModIO.ModIOUnity.AuthenticateUserViaOpenId}

```csharp
public static void AuthenticateUserViaOpenId(string idToken,  string emailAddress,  TermsHash? hash,  Action<Result> callback)
```

Attempts to authenticate a user on behalf of an OpenID identity provider. To use this
method of authentication, you must configure the OpenID config in your games
authentication admin page.
NOTE: The ability to authenticate players using your identity provider is a feature for
advanced partners only. If you are interested in becoming an advanced partner, please
contact us.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`idToken` the user's id token
`emailAddress` the user's email address
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()
`callback` Callback to be invoked when the operation completes

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
void GetTermsOfUse_Example()
{
    ModIOUnity.GetTermsOfUse(GetTermsOfUseCallback);
}
void GetTermsOfUseCallback(ResultAnd<TermsOfUse> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
void Authenticate_Example()
{
    ModIOUnity.AuthenticateUserViaOpenId(idToken,
                                         "johndoe@gmail.com",
                                         modIOTermsOfUse.hash,
                                         AuthenticationCallback);
}
void AuthenticationCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```


#### IsAuthenticated{#ModIO.ModIOUnity.IsAuthenticated}

```csharp
public static void IsAuthenticated(Action<Result> callback)
```

Informs you if the current user session is authenticated or not.


###### Parameters

`callback` 

###### See Also

[`Result`](#ModIO.ResultAnd)
[`ModIOUnityAsync.IsAuthenticated`](#ModIO.ModIOUnityAsync.IsAuthenticated)
```csharp

void Example()
{
    ModIOUnity.IsAuthenticated(IsAuthenticatedCallback);
}
void IsAuthenticatedCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("current session is authenticated");
    }
    else
    {
        Debug.Log("current session is not authenticated");
    }
}

```



#### LogOutCurrentUser{#ModIO.ModIOUnity.LogOutCurrentUser}

```csharp
public static Result LogOutCurrentUser()
```

De-authenticates the current Mod.io user for the current session and clears all
user-specific data stored on the current device. Installed mods that do not have
other local users subscribed will be uninstalled if ModIOUnity.EnableModManagement() has
been used to enable the mod management system.
(If ModManagement is enabled).


###### Remarks


If you dont want to erase a user be sure to use ModIOUnity.Shutdown() instead.
If you re-initialize the plugin after a shutdown the user will still be authenticated.


###### See Also

`EnableModManagement(ModIO.ModManagementEventDelegate)`
[`Result`](#ModIO.ResultAnd)
```csharp

//static async void Example()
{
   Result result = await ModIOUnity.LogOutCurrentUser();
   if(result.Succeeded())
   {
       Debug.Log("The current user has been logged and their local data removed");
   }
   else
   {
       Debug.Log("Failed to log out the current user");
   }
}

```



#### GetTagCategories{#ModIO.ModIOUnity.GetTagCategories}

```csharp
public static void GetTagCategories(Action<ResultAnd<TagCategory[]>> callback)
```

Gets the existing tags for the current game Id that can be used when searching/filtering
mods.


###### Remarks


Tags come in category groups, eg "Color" could be the name of the category and the tags
themselves could be { "Red", "Blue", "Green" }


###### Parameters

`callback` the callback with the result and tags retrieved

###### See Also

[`SearchFilter`](#ModIO.SearchFilter)
[`TagCategory`](#ModIO.TagCategory)
[`Result`](#ModIO.ResultAnd)
[`ModIOUnityAsync.GetTagCategories`](#ModIO.ModIOUnityAsync.GetTagCategories)
```csharp

void Example()
{
    ModIOUnity.GetTagCategories(GetTagsCallback);
}
void GetTagsCallback(ResultAnd<TagCategory[]> response)
{
    if (response.result.Succeeded())
    {
        foreach(TagCategory category in response.value)
        {
            foreach(Tag tag in category.tags)
            {
                Debug.Log(tag.name + " tag is in the " + category.name + "category");
            }
        }
    }
    else
    {
        Debug.Log("failed to get game tags");
    }
}

```



#### GetTagLocalized{#ModIO.ModIOUnity.GetTagLocalized}

```csharp
public static string GetTagLocalized(string tag)
```
Ensure you have called `ModIOUnityAsync.FetchUpdates` or `ModIOUnityAsync.GetTagCategories` before using this method.
Note:
 All plugin functionality requires English tags. Localized tags can displayed to players.


###### Returns

`tag` in the plugin's currently configured language if it exists, otherwise `tag`.

###### See Also

[`ServerSettings.languageCode`](#ModIO.ServerSettings.languageCode)


#### GetTagLocalized{#ModIO.ModIOUnity.GetTagLocalized}

```csharp
public static string GetTagLocalized(string tag, string languageCode)
```
Ensure you have called `ModIOUnityAsync.FetchUpdates` or `ModIOUnityAsync.GetTagCategories` before using this method.
Note:
 All plugin functionality requires English tags. Localized tags can displayed to players.


###### Returns

`tag` in the provided `languageCode` if it exists, otherwise `tag`.


#### GetMods{#ModIO.ModIOUnity.GetMods}

```csharp
public static void GetMods(SearchFilter filter, Action<ResultAnd<ModPage>> callback)
```

Uses a SearchFilter to retrieve a specific Mod Page and returns the ModProfiles and
total number of mods based on the Search Filter.


###### Remarks


A ModPage contains a group of mods based on the pagination filters in SearchFilter.
eg, if you use SearchFilter.SetPageIndex(0) and SearchFilter.SetPageSize(100) then
ModPage.mods will contain mods from 1 to 100. But if you set SearchFilter.SetPageIndex(1)
then it will have mods from 101 to 200, if that many exist.
(note that 100 is the maximum page size).


###### Parameters

`filter` The filter to apply when searching through mods (also contains
pagination parameters)
`callback` callback invoked with the Result and ModPage

###### See Also

[`SearchFilter`](#ModIO.SearchFilter)
[`ModPage`](#ModIO.ModPage)
[`Result`](#ModIO.ResultAnd)
[`ModIOUnityAsync.GetMods`](#ModIO.ModIOUnityAsync.GetMods)
```csharp

void Example()
{
    SearchFilter filter = new SearchFilter();
    filter.SetPageIndex(0);
    filter.SetPageSize(10);
    ModIOUnity.GetMods(filter, GetModsCallback);
}
void GetModsCallback(Result result, ModPage modPage)
{
    if (result.Succeeded())
    {
        Debug.Log("ModPage has " + modPage.modProfiles.Length + " mods");
    }
    else
    {
        Debug.Log("failed to get mods");
    }
}

```



#### GetMod{#ModIO.ModIOUnity.GetMod}

```csharp
public static void GetMod(ModId modId, Action<ResultAnd<ModProfile>> callback)
```

Requests a single ModProfile from the mod.io server by its ModId.


###### Remarks


If there is a specific mod that you want to retrieve from the mod.io database you can
use this method to get it.


###### Parameters

`modId` the ModId of the ModProfile to get
`callback` callback with the Result and ModProfile

###### See Also

[`ModId`](#ModIO.ModId)
[`ModProfile`](#ModIO.ModIOUnity.CreateModProfile)
[`Result`](#ModIO.ResultAnd)
[`ModIOUnityAsync.GetMod`](#ModIO.ModIOUnityAsync.GetMods)
```csharp

void Example()
{
    ModId modId = new ModId(1234);
    ModIOUnity.GetMod(modId, GetModCallback);
}
void GetModCallback(ResultAnd<ModProfile> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("retrieved mod " + response.value.name);
    }
    else
    {
        Debug.Log("failed to get mod");
    }
}

```



#### GetModSkipCache{#ModIO.ModIOUnity.GetModSkipCache}

```csharp
public static void GetModSkipCache(ModId modId, Action<ResultAnd<ModProfile>> callback)
```


#### GetModComments{#ModIO.ModIOUnity.GetModComments}

```csharp
public static void GetModComments(ModId modId, SearchFilter filter, Action<ResultAnd<CommentPage>> callback)
```

Get all comments posted in the mods profile. Successful request will return an array of
Comment Objects. We recommended reading the filtering documentation to return only the
records you want.


###### Parameters

`filter` The filter to apply when searching through comments (can only apply
pagination parameters, Eg. page size and page index)
`callback` callback invoked with the Result and CommentPage

###### See Also

[`CommentPage`](#ModIO.CommentPage)
[`ModComment`](#ModIO.ModIOUnity.GetModComments)
[`SearchFilter`](#ModIO.SearchFilter)
[`ModId`](#ModIO.ModId)
[`Result`](#ModIO.ResultAnd)
[`ResultAnd`](#ModIO.ResultAnd)
[`ModIOUnityAsync.GetModComments`](#ModIO.ModIOUnityAsync.GetModComments)


#### GetModDependencies{#ModIO.ModIOUnity.GetModDependencies}

```csharp
public static void GetModDependencies(ModId modId, Action<ResultAnd<ModDependencies[]>> callback)
```

Retrieves a list of ModDependenciesObjects that represent mods that depend on a mod.


###### Remarks


This function returns only immediate mod dependencies, meaning that if you need the dependencies for the dependent
mods, you will have to make multiple calls and watch for circular dependencies.


###### Parameters

`modId` the ModId of the mod to get dependencies
`callback` callback with the Result and an array of ModDependenciesObjects

###### See Also

[`ModId`](#ModIO.ModId)
[`Result`](#ModIO.ResultAnd)
[`ResultAnd`](#ModIO.ResultAnd)
`ModDependenciesObject`
[`ModIOUnityAsync.GetModDependencies`](#ModIO.ModIOUnityAsync.GetModDependencies)
```csharp

void Example()
{
    ModId modId = new ModId(1234);
    ModIOUnity.GetModDependencies(modId, GetModCallback);
}
void GetModCallback(ResultAnd<ModDependenciesObject[]> response)
{
    if (response.result.Succeeded())
    {
        ModDependenciesObject[] modDependenciesObjects = response.value;
        Debug.Log("retrieved mods dependencies");
    }
    else
    {
        Debug.Log("failed to get mod dependencies");
    }
}

```



#### GetCurrentUserRatings{#ModIO.ModIOUnity.GetCurrentUserRatings}

```csharp
public static void GetCurrentUserRatings(Action<ResultAnd<Rating[]>> callback)
```

Get all mod rating's submitted by the authenticated user. Successful request will return an array of Rating Objects.


###### Parameters

`callback` callback with the Result and an array of RatingObject

###### See Also

[`ModId`](#ModIO.ModId)
`RatingObject`
[`ResultAnd`](#ModIO.ResultAnd)
```csharp

void Example()
{
   ModIOUnity.GetCurrentUserRatings(GetCurrentUserRatingsCallback);
}
void GetCurrentUserRatingsCallback(ResultAnd<Rating[]> response)
{
   if (response.result.Succeeded())
   {
       foreach(var ratingObject in response.value)
       {
           Debug.Log($"retrieved rating '{ratingObject.rating}' for {ratingObject.modId}");
       }
   }
   else
   {
       Debug.Log("failed to get ratings");
   }
}

```



#### GetCurrentUserRatingFor{#ModIO.ModIOUnity.GetCurrentUserRatingFor}

```csharp
public static void GetCurrentUserRatingFor(ModId modId, Action<ResultAnd<ModRating>> callback)
```

Gets the rating that the current user has given for a specified mod. You must have an
authenticated session for this to be successful.


###### Remarks

Note that the rating can be 'None'

###### Parameters

`modId` the id of the mod to check for a rating
`callback` callback with the result and rating of the specified mod

###### See Also

[`ModRating`](#ModIO.ModRating)
[`ModId`](#ModIO.ModId)
[`ResultAnd`](#ModIO.ResultAnd)
```csharp

void Example()
{
   ModId modId = new ModId(1234);
   ModIOUnity.GetCurrentUserRatingFor(modId, GetRatingCallback);
}
void GetRatingCallback(ResultAnd<ModRating> response)
{
   if (response.result.Succeeded())
   {
       Debug.Log($"retrieved rating: {response.value}");
   }
   else
   {
       Debug.Log("failed to get rating");
   }
}

```



#### RateMod{#ModIO.ModIOUnity.RateMod}

```csharp
public static void RateMod(ModId modId, ModRating rating, Action<Result> callback)
```

Used to submit a rating for a specified mod.


###### Remarks


This can be used to change/overwrite previous ratings of the current user.


###### Parameters

`modId` the m=ModId of the mod being rated
`rating` the rating to give the mod. Allowed values include ModRating.Positive, ModRating.Negative, ModRating.None
`callback` callback with the result of the request

###### See Also

[`ModRating`](#ModIO.ModRating)
[`Result`](#ModIO.ResultAnd)
[`ModId`](#ModIO.ModId)
[`ModIOUnityAsync.RateMod`](#ModIO.ModIOUnityAsync.RateMod)
```csharp

ModProfile mod;
void Example()
{
    ModIOUnity.RateMod(mod.id, ModRating.Positive, RateModCallback);
}
void RateModCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successfully rated mod");
    }
    else
    {
        Debug.Log("Failed to rate mod");
    }
}

```



#### SubscribeToMod{#ModIO.ModIOUnity.SubscribeToMod}

```csharp
public static void SubscribeToMod(ModId modId, Action<Result> callback)
```

Adds the specified mod to the current user's subscriptions.


###### Remarks


If mod management has been enabled via ModIOUnity.EnableModManagement() then the mod
will be downloaded and installed.


###### Parameters

`modId` ModId of the mod you want to subscribe to
`callback` callback with the result of the request

###### See Also

[`Result`](#ModIO.ResultAnd)
[`ModId`](#ModIO.ModId)
`EnableModManagement(ModIO.ModManagementEventDelegate)`
[`GetCurrentModManagementOperation`](#ModIO.ModIOUnity.GetCurrentModManagementOperation)
[`ModIOUnityAsync.SubscribeToMod`](#ModIO.ModIOUnityAsync.SubscribeToMod)
```csharp

ModProfile mod;
void Example()
{
    ModIOUnity.SubscribeToMod(mod.id, SubscribeCallback);
}
void SubscribeCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successfully subscribed to mod");
    }
    else
    {
        Debug.Log("Failed to subscribe to mod");
    }
}

```



#### UnsubscribeFromMod{#ModIO.ModIOUnity.UnsubscribeFromMod}

```csharp
public static void UnsubscribeFromMod(ModId modId, Action<Result> callback)
```

Removes the specified mod from the current user's subscriptions.


###### Remarks


If mod management has been enabled via ModIOUnity.EnableModManagement() then the mod
will be uninstalled at the next opportunity.


###### Parameters

`modId` ModId of the mod you want to unsubscribe from
`callback` callback with the result of the request

###### See Also

[`Result`](#ModIO.ResultAnd)
[`ModId`](#ModIO.ModId)
`EnableModManagement(ModIO.ModManagementEventDelegate)`
[`GetCurrentModManagementOperation`](#ModIO.ModIOUnity.GetCurrentModManagementOperation)
[`ModIOUnityAsync.UnsubscribeFromMod`](#ModIO.ModIOUnityAsync.UnsubscribeFromMod)
```csharp

ModProfile mod;
void Example()
{
    ModIOUnity.UnsubscribeFromMod(mod.id, UnsubscribeCallback);
}
void UnsubscribeCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successfully unsubscribed from mod");
    }
    else
    {
        Debug.Log("Failed to unsubscribe from mod");
    }
}

```



#### GetSubscribedMods{#ModIO.ModIOUnity.GetSubscribedMods}

```csharp
public static SubscribedMod[] GetSubscribedMods(out Result result)
```

Retrieves all of the subscribed mods for the current user.


###### Remarks


Note that these are not installed mods only mods the user has opted as 'subscribed'.
Also, ensure you have called ModIOUnity.FetchUpdates() at least once during this session
in order to have an accurate collection of the user's subscriptions.


###### Parameters

`result` an out parameter for whether or not the method succeeded

###### See Also

[`Result`](#ModIO.ResultAnd)
[`SubscribedMod`](#ModIO.ModIOUnity.GetSubscribedMods)
[`FetchUpdates`](#ModIO.ModIOUnity.FetchUpdates)

###### Returns

an array of the user's subscribed mods
```csharp

void Example()
{
    SubscribedMod[] mods = ModIOUnity.GetSubscribedMods(out Result result);
    if (result.Succeeded())
    {
        Debug.Log("use has " + mods.Length + " subscribed mods");
    }
    else
    {
        Debug.Log("failed to get user mods");
    }
}

```



#### GetCurrentUser{#ModIO.ModIOUnity.GetCurrentUser}

```csharp
public static void GetCurrentUser(Action<ResultAnd<UserProfile>> callback, bool allowOfflineUser
```

Gets the current user's UserProfile struct. Containing their mod.io username, user id,
language, timezone and download references for their avatar.


###### Remarks


This requires the current session to have an authenticated user, otherwise
Result.IsAuthenticationError() from the Result will equal true.


###### Parameters

`callback` callback with the Result and the UserProfile
`allowOfflineUser` True if we allow the last saved user data if the server cannot be reached. Note that Result will still be a NetworkError

###### See Also

[`Result`](#ModIO.ResultAnd)
[`UserProfile`](#ModIO.UserProfile)
[`IsAuthenticated`](#ModIO.ModIOUnity.IsAuthenticated)
[`ModIOUnityAsync.GetCurrentUser`](#ModIO.ModIOUnityAsync.GetCurrentUserRatings)
```csharp

void Example()
{
    ModIOUnity.GetCurrentUser(GetUserCallback);
}
void GetUserCallback(ResultAnd<UserProfile> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Got user: " + response.value.username);
    }
    else
    {
        Debug.Log("failed to get user");
    }
}

```



#### MuteUser{#ModIO.ModIOUnity.MuteUser}

```csharp
public static void MuteUser(long userId, Action<Result> callback)
```

Mutes a user which effectively hides any content from that specified user


###### Remarks

The userId can be found from the UserProfile. Such as ModProfile.creator.userId

###### Parameters

`userId` The id of the user to be muted
`callback` callback with the Result of the request

###### See Also

[`UserProfile`](#ModIO.UserProfile)


#### UnmuteUser{#ModIO.ModIOUnity.UnmuteUser}

```csharp
public static void UnmuteUser(long userId, Action<Result> callback)
```

Un-mutes a user which effectively reveals previously hidden content from that user


###### Remarks

The userId can be found from the UserProfile. Such as ModProfile.creator.userId

###### Parameters

`userId` The id of the user to be muted
`callback` callback with the Result of the request

###### See Also

[`UserProfile`](#ModIO.UserProfile)


#### GetMutedUsers{#ModIO.ModIOUnity.GetMutedUsers}

```csharp
public static void GetMutedUsers(Action<ResultAnd<UserProfile[]>> callback)
```

Gets an array of all the muted users that the current authenticated user has muted.


###### Remarks

This has a cap of 1,000 users. It will not return more then that.

###### Parameters

`callback` callback with the Result of the request

###### See Also

[`UserProfile`](#ModIO.UserProfile)


#### FetchUpdates{#ModIO.ModIOUnity.FetchUpdates}

```csharp
public static void FetchUpdates(Action<Result> callback)
```

This retrieves the user's ratings and subscriptions from the mod.io server and synchronises
it with our local instance of the user's data. If mod management has been enabled
via ModIOUnity.EnableModManagement() then it may begin to install/uninstall mods.
It's recommended you use this method after initializing the plugin and after
successfully authenticating the user.


###### Remarks


This requires the current session to have an authenticated user, otherwise
Result.IsAuthenticationError() from the Result will equal true.


###### Parameters

`callback` callback with the Result of the operation

###### See Also

[`Result`](#ModIO.ResultAnd)
`EnableModManagement(ModIO.ModManagementEventDelegate)`
[`IsAuthenticated`](#ModIO.ModIOUnity.IsAuthenticated)
[`RequestAuthenticationEmail`](#ModIO.ModIOUnity.RequestAuthenticationEmail)
[`SubmitEmailSecurityCode`](#ModIO.ModIOUnity.SubmitEmailSecurityCode)
[`AuthenticateUserViaDiscord`](#ModIO.ModIOUnity.AuthenticateUserViaDiscord)
[`AuthenticateUserViaGoogle`](#ModIO.ModIOUnity.AuthenticateUserViaGoogle)
[`AuthenticateUserViaGOG`](#ModIO.ModIOUnity.AuthenticateUserViaGOG)
[`AuthenticateUserViaItch`](#ModIO.ModIOUnity.AuthenticateUserViaItch)
[`AuthenticateUserViaOculus`](#ModIO.ModIOUnity.AuthenticateUserViaOculus)
[`AuthenticateUserViaSteam`](#ModIO.ModIOUnity.AuthenticateUserViaSteam)
[`AuthenticateUserViaSwitch`](#ModIO.ModIOUnity.AuthenticateUserViaSwitch)
[`AuthenticateUserViaXbox`](#ModIO.ModIOUnity.AuthenticateUserViaXbox)
[`ModIOUnityAsync.FetchUpdates`](#ModIO.ModIOUnityAsync.FetchUpdates)
```csharp

void Example()
{
    ModIOUnity.FetchUpdates(FetchUpdatesCallback);
}
void FetchUpdatesCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("updated user subscriptions");
    }
    else
    {
        Debug.Log("failed to get user subscriptions");
    }
}

```



#### EnableModManagement{#ModIO.ModIOUnity.EnableModManagement}

```csharp
public static Result EnableModManagement(  ModManagementEventDelegate modManagementEventDelegate)
```

Enables the mod management system. When enabled it will automatically download, install,
update and delete mods according to the authenticated user's subscriptions.


###### Remarks


This requires the current session to have an authenticated user, otherwise
Result.IsAuthenticationError() from the Result will equal true.


###### Parameters

`modManagementEventDelegate`  A delegate that gets called everytime the ModManagement system runs an event (can be null)

###### Returns

A Result for whether or not mod management was enabled

###### See Also

[`Result`](#ModIO.ResultAnd)
[`DisableModManagement`](#ModIO.ModIOUnity.DisableModManagement)
[`IsAuthenticated`](#ModIO.ModIOUnity.IsAuthenticated)
```csharp

void Example()
{
    Result result = ModIOUnity.EnableModManagement(ModManagementDelegate);
}
void ModManagementDelegate(ModManagementEventType eventType, ModId modId)
{
    Debug.Log("a mod management event of type " + eventType.ToString() + " has been invoked");
}

```



#### DisableModManagement{#ModIO.ModIOUnity.DisableModManagement}

```csharp
public static Result DisableModManagement()
```

Disables the mod management system and cancels any ongoing jobs for downloading or
installing mods.

```csharp

void Example()
{
    Result result = ModIOUnity.DisableModManagement();
    if (result.Succeeded())
    {
        Debug.Log("disabled mod management");
    }
    else
    {
        Debug.Log("failed to disable mod management");
    }
}

```



#### GetCurrentModManagementOperation{#ModIO.ModIOUnity.GetCurrentModManagementOperation}

```csharp
public static ProgressHandle GetCurrentModManagementOperation()
```

Returns a ProgressHandle with information on the current mod management operation.


###### Returns


Optional ProgressHandle object containing information regarding the progress of
the operation. Null if no operation is running


###### See Also

[`ProgressHandle`](#ModIO.ProgressHandle)
[`EnableModManagement`](#ModIO.ModIOUnity.EnableModManagement)
```csharp

void Example()
{
    ProgressHandle handle = ModIOUnity.GetCurrentModManagementOperation();
    if (handle != null)
    {
        Debug.Log("current mod management operation is " + handle.OperationType.ToString());
    }
    else
    {
        Debug.Log("no current mod management operation");
    }
}

```



#### GetSystemInstalledMods{#ModIO.ModIOUnity.GetSystemInstalledMods}

```csharp
public static InstalledMod[] GetSystemInstalledMods(out Result result)
```

Gets an array of mods that are installed on the current device.


###### Remarks


Note that these will not be subscribed by the current user. If you wish to get all
of the current user's installed mods use ModIOUnity.GetSubscribedMods() and check the
SubscribedMod.status equals SubscribedModStatus.Installed.


###### Parameters

`result` an out Result to inform whether or not it was able to get installed mods

###### See Also

[`InstalledMod`](#ModIO.ModIOUnity.GetSystemInstalledMods)
[`GetSubscribedMods`](#ModIO.ModIOUnity.GetSubscribedMods)

###### Returns

an array of InstalledMod for each existing mod installed on the current device (and not subscribed by the current user)
```csharp

void Example()
{
    InstalledMod[] mods = ModIOUnity.GetSystemInstalledMods(out Result result);
    if (result.Succeeded())
    {
        Debug.Log("found " + mods.Length.ToString() + " mods installed");
    }
    else
    {
        Debug.Log("failed to get installed mods");
    }
}

```



#### GetInstalledModsForUser{#ModIO.ModIOUnity.GetInstalledModsForUser}

```csharp
public static UserInstalledMod[] GetInstalledModsForUser(out Result result, bool includeDisabledMods
```

Gets an array of mods that are installed for the current user.


###### Parameters

`result` an out Result to inform whether or not it was able to get installed mods
`includeDisabledMods` optional parameter. When true it will include mods that have been marked as disabled via the `DisableMod` method

###### See Also

[`UserInstalledMod`](#ModIO.UserInstalledMod)
[`GetSubscribedMods`](#ModIO.ModIOUnity.GetSubscribedMods)
[`ModIOUnity.DisableMod`](#ModIO.ModIOUnity.DisableModManagement)
[`ModIOUnity.EnableMod`](#ModIO.ModIOUnity.EnableModManagement)

###### Returns

an array of InstalledModUser for each existing mod installed for the user
```csharp

void Example()
{
    InstalledModUser[] mods = ModIOUnity.GetSystemInstalledModsUser(out Result result);
    if (result.Succeeded())
    {
        Debug.Log("found " + mods.Length.ToString() + " mods installed");
    }
    else
    {
        Debug.Log("failed to get installed mods");
    }
}

```



#### ForceUninstallMod{#ModIO.ModIOUnity.ForceUninstallMod}

```csharp
public static Result ForceUninstallMod(ModId modId)
```

This informs the mod management system that this mod should be uninstalled if not
subscribed by the current user. (such as a mod installed by a different user not
currently active).


###### Remarks


Normally if you wish to uninstall a mod you should unsubscribe and use
ModIOUnity.EnableModManagement() and the process will be handled automatically. However,
if you want to uninstall a mod that is subscribed to a different user session this
method will mark the mod to be uninstalled to free up disk space.
Alternatively you can use ModIOUnity.RemoveUserData() to remove a user from the
local registry. If no other users are subscribed to the same mod it will be uninstalled
automatically.


###### Parameters

`modId` The ModId of the mod to uninstall

###### See Also

[`Result`](#ModIO.ResultAnd)
[`SubscribeToMod`](#ModIO.ModIOUnity.SubscribeToMod)
[`UnsubscribeFromMod`](#ModIO.ModIOUnity.UnsubscribeFromMod)
[`EnableModManagement`](#ModIO.ModIOUnity.EnableModManagement)
[`LogOutCurrentUser`](#ModIO.ModIOUnity.LogOutCurrentUser)
```csharp

ModProfile mod;
void Example()
{
    Result result = ModIOUnity.ForceUninstallMod(mod.id);
    if (result.Succeeded())
    {
        Debug.Log("mod marked for uninstall");
    }
    else
    {
        Debug.Log("failed to mark mod for uninstall");
    }
}

```



#### RetryDownload{#ModIO.ModIOUnity.RetryDownload}

```csharp
public static Result RetryDownload(ModId modId)
```

Clear the "download failed" state on a mod and allow DownloadManager to try downloading it again


###### Parameters

`modId` 

###### Returns




#### IsModManagementBusy{#ModIO.ModIOUnity.IsModManagementBusy}

```csharp
public static bool IsModManagementBusy()
```

Checks if the automatic management process is currently awake and performing a mod
management operation, such as installing, downloading, uninstalling, updating.


###### Returns

True if automatic mod management is currently performing an operation.

###### See Also

[`EnableModManagement`](#ModIO.ModIOUnity.EnableModManagement)
[`DisableModManagement`](#ModIO.ModIOUnity.DisableModManagement)
[`GetCurrentModManagementOperation`](#ModIO.ModIOUnity.GetCurrentModManagementOperation)
```csharp

void Example()
{
    if (ModIOUnity.IsModManagementBusy())
    {
        Debug.Log("mod management is busy");
    }
    else
    {
        Debug.Log("mod management is not busy");
    }
}

```



#### EnableMod{#ModIO.ModIOUnity.EnableMod}

```csharp
public static bool EnableMod(ModId modId)
```


#### DisableMod{#ModIO.ModIOUnity.DisableMod}

```csharp
public static bool DisableMod(ModId modId)
```


#### AddDependenciesToMod{#ModIO.ModIOUnity.AddDependenciesToMod}

```csharp
public static void AddDependenciesToMod(ModId modId, ICollection<ModId> dependencies, Action<Result> callback)
```

Adds the specified mods as dependencies to an existing mod.


###### Remarks


If the dependencies already exist they will be ignored and the result will return success


###### Parameters

`modId` ModId of the mod you want to add dependencies to
`dependencies` The ModIds that you want to add (max 5 at a time)
`callback` callback with the result of the request

###### See Also

[`Result`](#ModIO.ResultAnd)
[`ModId`](#ModIO.ModId)
[`ModIOUnity.RemoveDependenciesFromMod`](#ModIO.ModIOUnity.RemoveDependenciesFromMod)
[`ModIOUnityAsync.RemoveDependenciesFromMod`](#ModIO.ModIOUnityAsync.RemoveDependenciesFromMod)
[`ModIOUnityAsync.AddDependenciesToMod`](#ModIO.ModIOUnityAsync.AddDependenciesToMod)
```csharp

void Example()
{
    var dependencies = new List<ModId>
    {
        (ModId)1001,
        (ModId)1002,
        (ModId)1003
    };
    ModIOUnity.AddDependenciesToMod(mod.id, dependencies, AddDependenciesCallback);
}
void AddDependenciesCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successfully added dependencies to mod");
    }
    else
    {
        Debug.Log("Failed to add dependencies to mod");
    }
}

```



#### RemoveDependenciesFromMod{#ModIO.ModIOUnity.RemoveDependenciesFromMod}

```csharp
public static void RemoveDependenciesFromMod(ModId modId, ICollection<ModId> dependencies, Action<Result> callback)
```

Removes the specified mods as dependencies for another existing mod.


###### Remarks


If the dependencies dont exist they will be ignored and the result will return success


###### Parameters

`modId` ModId of the mod you want to remove dependencies from
`dependencies` The ModIds that you want to remove (max 5 at a time)
`callback` callback with the result of the request

###### See Also

[`Result`](#ModIO.ResultAnd)
[`ModId`](#ModIO.ModId)
[`ModIOUnity.AddDependenciesToMod`](#ModIO.ModIOUnity.AddDependenciesToMod)
[`ModIOUnityAsync.RemoveDependenciesFromMod`](#ModIO.ModIOUnityAsync.RemoveDependenciesFromMod)
[`ModIOUnityAsync.AddDependenciesToMod`](#ModIO.ModIOUnityAsync.AddDependenciesToMod)
```csharp

void Example()
{
    var dependencies = new List<ModId>
    {
        (ModId)1001,
        (ModId)1002,
        (ModId)1003
    };
    ModIOUnity.RemoveDependenciesFromMod(mod.id, dependencies, RemoveDependenciesCallback);
}
void RemoveDependenciesCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successfully removed dependencies from mod");
    }
    else
    {
        Debug.Log("Failed to removed dependencies from mod");
    }
}

```



#### DownloadNow{#ModIO.ModIOUnity.DownloadNow}

```csharp
public static void DownloadNow(ModId modId, Action<Result> callback)
```

Stops any current download and starts downloading the selected mod.


###### Parameters

`modId` ModId of the mod you want to remove dependencies from
`callback` callback with the result of the request

###### See Also

[`Result`](#ModIO.ResultAnd)
[`ModId`](#ModIO.ModId)
[`ModIOUnityAsync.DownloadNow`](#ModIO.ModIOUnityAsync.DownloadNow)
```csharp

ModId modId;
void Example()
{
    ModIOUnity.DownloadNow(modId, callback);
}
void RemoveDependenciesCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successful");
    }
    else
    {
        Debug.Log("Failed");
    }
}

```



#### GetModKvpMetadata{#ModIO.ModIOUnity.GetModKvpMetadata}

```csharp
public static void GetModKvpMetadata(long modId, Action<ResultAnd<Dictionary<string, string>>> callback)
```

Get all metadata stored by the game developer for this mod as searchable key value pairs. Successful request will return an array of Metadata KVP Objects.


###### See Also

`MetadataKvpObject`
[`ModIOUnity.GetModKvpMetadata`](#ModIO.ModIOUnity.GetModKvpMetadata)
[`ModIOUnityAsync.AddModKvpMetadata`](#ModIO.ModIOUnityAsync.AddModKvpMetadata)
[`ModIOUnityAsync.DeleteModKvpMetadata`](#ModIO.ModIOUnityAsync.DeleteModKvpMetadata)
```csharp

long modId;
void Example()
{
    ModIOUnityAsync.GetModKvpMetadata(modId, (r)=>
    {
        if (r.result.Succeeded())
        {
            Debug.Log("Successfully received metadata for modId");
            foreach(var kvp in r.value)
            {
                Debug.Log($"Key: {kvp.key}, Value: {kvp.value}");
            }
        }
        else
        {
            Debug.Log("Failed to get metadata for modId.");
        }
    });
}

```



#### AddModKvpMetadata{#ModIO.ModIOUnity.AddModKvpMetadata}

```csharp
public static void AddModKvpMetadata(long modId, Dictionary<string, string> metadata, Action<Result> callback)
```

Add metadata for this mod as searchable key value pairs. Metadata is useful to define how a mod works, or other information you need to display and manage the mod.
Successful request will return Message Object. For example: A mod might change gravity and the rate of fire of weapons, you could define these properties as key
value pairs. We recommend the mod upload tool you create defines and submits metadata behind the scenes, because if these settings affect gameplay, invalid
information may cause problems.

Metadata can also be stored as metadata_blob in the Mod Object.



###### See Also

`MetadataKvpObject`
[`ModIOUnity.AddModKvpMetadata`](#ModIO.ModIOUnity.AddModKvpMetadata)
[`ModIOUnityAsync.GetModKvpMetadata`](#ModIO.ModIOUnityAsync.GetModKvpMetadata)
[`ModIOUnityAsync.DeleteModKvpMetadata`](#ModIO.ModIOUnityAsync.DeleteModKvpMetadata)
```csharp

long modId;
Dictionary<string, string> metadata;
void Example()
{
    Result result = await ModIOUnityAsync.AddModKvpMetadata(modId, metadata, (result)=>
    {
        if (result.Succeeded())
        {
            Debug.Log("Successfully added metadata.");
        }
        else
        {
            Debug.Log("Failed to add metadata.");
        }
    });
}

```



#### DeleteModKvpMetadata{#ModIO.ModIOUnity.DeleteModKvpMetadata}

```csharp
public static void DeleteModKvpMetadata(long modId, Dictionary<string, string> metadata, Action<Result> callback)
```

Delete key value pairs metadata defined for this mod. Successful request will return 204 No Content.


###### See Also

`MetadataKvpObject`
[`ModIOUnity.DeleteModKvpMetadata`](#ModIO.ModIOUnity.DeleteModKvpMetadata)
[`ModIOUnityAsync.AddModKvpMetadata`](#ModIO.ModIOUnityAsync.AddModKvpMetadata)
[`ModIOUnityAsync.GetModKvpMetadata`](#ModIO.ModIOUnityAsync.GetModKvpMetadata)
```csharp

long modId;
Dictionary<string, string> metadata;
void Example()
{
    ModIOUnityAsync.DeleteModKvpMetadata(modId, metadata, (result)=>
    {
        if (result.Succeeded())
        {
            Debug.Log("Successfully deleted metadata");
        }
        else
        {
            Debug.Log("Failed to delete metadata.");
        }
    });
}

```



#### GenerateCreationToken{#ModIO.ModIOUnity.GenerateCreationToken}

```csharp
public static CreationToken GenerateCreationToken()
```

Gets a token that can be used to create a new mod profile on the mod.io server.


###### Returns

a CreationToken used in ModIOUnity.CreateModProfile()

###### See Also

[`CreationToken`](#ModIO.ModIOUnity.GenerateCreationToken)
[`ModProfileDetails`](#ModIO.ModProfileDetails)
[`Result`](#ModIO.ResultAnd)
[`ModId`](#ModIO.ModId)
[`CreateModProfile`](#ModIO.ModIOUnity.CreateModProfile)
[`EditModProfile`](#ModIO.ModIOUnity.EditModProfile)
```csharp

void Example()
{
    CreationToken token = ModIOUnity.GenerateCreationToken();
}

```



#### CreateModProfile{#ModIO.ModIOUnity.CreateModProfile}

```csharp
public static void CreateModProfile(CreationToken token,  ModProfileDetails modProfileDetails,  Action<ResultAnd<ModId>> callback)
```

Creates a new mod profile on the mod.io server based on the details provided from the
ModProfileDetails object provided. Note that you must have a logo, name and summary
assigned in ModProfileDetails in order for this to work.


###### Remarks


Note that this will create a new profile on the server and can be viewed online through
a browser.


###### Parameters

`token` the token allowing a new unique profile to be created from ModIOUnity.GenerateCreationToken()
`modProfileDetails` the mod profile details to apply to the mod profile being created
`callback` a callback with the Result of the operation and the ModId of the newly created mod profile (if successful)

###### See Also

[`GenerateCreationToken`](#ModIO.ModIOUnity.GenerateCreationToken)
[`CreationToken`](#ModIO.ModIOUnity.GenerateCreationToken)
[`ModProfileDetails`](#ModIO.ModProfileDetails)
[`Result`](#ModIO.ResultAnd)
[`ModId`](#ModIO.ModId)
[`ModIOUnityAsync.CreateModProfile`](#ModIO.ModIOUnityAsync.CreateModProfile)
```csharp

ModId newMod;
Texture2D logo;
CreationToken token;
void Example()
{
    token = ModIOUnity.GenerateCreationToken();
    ModProfileDetails profile = new ModProfileDetails();
    profile.name = "mod name";
    profile.summary = "a brief summary about this mod being submitted"
    profile.logo = logo;
    ModIOUnity.CreateModProfile(token, profile, CreateProfileCallback);
}
void CreateProfileCallback(ResultAnd<ModId> response)
{
    if (response.result.Succeeded())
    {
        newMod = response.value;
        Debug.Log("created new mod profile with id " + response.value.ToString());
    }
    else
    {
        Debug.Log("failed to create new mod profile");
    }
}

```



#### EditModProfile{#ModIO.ModIOUnity.EditModProfile}

```csharp
public static void EditModProfile(ModProfileDetails modProfile, Action<Result> callback)
```

This is used to edit or change data (except images) in an existing mod profile on the
mod.io server. If you want to add or edit images, use UploadModMedia.


###### Remarks


You need to assign the ModId of the mod you want to edit inside of the ModProfileDetails
object included in the parameters


###### Parameters

`modProfile` the mod profile details to apply to the mod profile being created
`callback` a callback with the Result of the operation and the ModId of the newly created mod profile (if successful)

###### See Also

[`ModProfileDetails`](#ModIO.ModProfileDetails)
[`Result`](#ModIO.ResultAnd)
[`ModIOUnityAsync.EditModProfile`](#ModIO.ModIOUnityAsync.EditModProfile)
```csharp

ModId modId;
void Example()
{
    ModProfileDetails profile = new ModProfileDetails();
    profile.modId = modId;
    profile.summary = "a new brief summary about this mod being edited";
    ModIOUnity.EditModProfile(profile, EditProfileCallback);
}
void EditProfileCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("edited mod profile");
    }
    else
    {
        Debug.Log("failed to edit mod profile");
    }
}

```



#### GetCurrentUploadHandle{#ModIO.ModIOUnity.GetCurrentUploadHandle}

```csharp
public static ProgressHandle GetCurrentUploadHandle()
```

This will return null if no upload operation is currently being performed.


###### Remarks


Uploads are not handled by the mod management system, these are handled separately.


###### Returns

A ProgressHandle informing the upload state and progress. Null if no upload operation is running.

###### See Also

`AddModfile`
[`ArchiveModProfile`](#ModIO.ModIOUnity.ArchiveModProfile)
```csharp

void Example()
{
    ProgressHandle handle = ModIOUnity.GetCurrentUploadHandle();
    if (handle != null)
    {
        Debug.Log("Current upload progress is: " + handle.Progress.ToString());
    }
}

```



#### UploadModfile{#ModIO.ModIOUnity.UploadModfile}

```csharp
public static void UploadModfile(ModfileDetails modfile, Action<Result> callback)
```

Used to upload a mod file to a mod profile on the mod.io server. A mod file is the
actual archive of a mod. This method can be used to update a mod to a newer version
(you can include changelog information in ModfileDetails).


###### Remarks


If you want to upload images such as a new logo or gallery images, you can use
UploadModMedia instead.


###### Parameters

`modfile` the mod file and details to upload
`callback` callback with the Result of the upload when the operation finishes

###### See Also

[`Result`](#ModIO.ResultAnd)
[`ModfileDetails`](#ModIO.ModfileDetails)
[`ArchiveModProfile`](#ModIO.ModIOUnity.ArchiveModProfile)
[`GetCurrentUploadHandle`](#ModIO.ModIOUnity.GetCurrentUploadHandle)
`ModIOUnityAsync.AddModfile`
[`UploadModMedia`](#ModIO.ModIOUnity.UploadModMedia)
```csharp

ModId modId;
void Example()
{
    ModfileDetails modfile = new ModfileDetails();
    modfile.modId = modId;
    modfile.directory = "files/mods/mod_123";
    ModIOUnity.UploadModfile(modfile, UploadModCallback);
}
void UploadModCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("uploaded mod file");
    }
    else
    {
        Debug.Log("failed to upload mod file");
    }
}

```



#### UploadModMedia{#ModIO.ModIOUnity.UploadModMedia}

```csharp
public static void UploadModMedia(ModProfileDetails modProfileDetails, Action<Result> callback)
```

This is used to update the logo of a mod or the gallery images. This works very similar
to EditModProfile except it only affects the images.


###### Parameters

`modProfileDetails` this holds the reference to the images you wish to upload
`callback` a callback with the Result of the operation

###### See Also

[`ModProfileDetails`](#ModIO.ModProfileDetails)
[`Result`](#ModIO.ResultAnd)
[`EditModProfile`](#ModIO.ModIOUnity.EditModProfile)
[`ModIOUnityAsync.UploadModMedia`](#ModIO.ModIOUnityAsync.UploadModMedia)
```csharp

ModId modId;
Texture2D newTexture;
void Example()
{
    ModProfileDetails profile = new ModProfileDetails();
    profile.modId = modId;
    profile.logo = newTexture;
    ModIOUnity.UploadModMedia(profile, UploadProfileCallback);
}
void UploadProfileCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("uploaded new mod logo");
    }
    else
    {
        Debug.Log("failed to uploaded mod logo");
    }
}

```



#### ReorderModMedia{#ModIO.ModIOUnity.ReorderModMedia}

```csharp
public static void ReorderModMedia(ModId modId, string[] orderedFilenames, Action<ResultAnd<ModProfile>> callback)
```
Reorder a mod's gallery images. `orderedFilenames` must represent every entry in  (or any of the size-variant arrays) or the operation will fail.
The provided `callback` is invoked with the updated `ModProfile`.



#### DeleteModMedia{#ModIO.ModIOUnity.DeleteModMedia}

```csharp
public static void DeleteModMedia(ModId modId, string[] filenames, Action<ResultAnd<ModProfile>> callback)
```
Delete gallery images from a mod. Filenames can be sourced from  (or any of the size-variant arrays).
The provided `callback` is invoked with the updated `ModProfile`.



#### ArchiveModProfile{#ModIO.ModIOUnity.ArchiveModProfile}

```csharp
public static void ArchiveModProfile(ModId modId, Action<Result> callback)
```

Removes a mod from being visible on the mod.io server.


###### Remarks


If you want to delete a mod permanently you can do so from a web browser.


###### Parameters

`modId` the id of the mod to delete
`callback` callback with the result of the operation

###### See Also

[`Result`](#ModIO.ResultAnd)
[`CreateModProfile`](#ModIO.ModIOUnity.CreateModProfile)
[`EditModProfile`](#ModIO.ModIOUnity.EditModProfile)
[`ModIOUnityAsync.ArchiveModProfile`](#ModIO.ModIOUnityAsync.ArchiveModProfile)
```csharp

ModId modId;
void Example()
{
    ModIOUnity.ArchiveModProfile(modId, ArchiveModCallback);
}
void ArchiveModCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("archived mod profile");
    }
    else
    {
        Debug.Log("failed to archive mod profile");
    }
}

```



#### GetCurrentUserCreations{#ModIO.ModIOUnity.GetCurrentUserCreations}

```csharp
public static void GetCurrentUserCreations(SearchFilter filter, Action<ResultAnd<ModPage>> callback)
```

Get all mods the authenticated user added or is a team member of.
Successful request will return an array of Mod Objects. We
recommended reading the filtering documentation to return only
the records you want.



#### AddTags{#ModIO.ModIOUnity.AddTags}

```csharp
public static void AddTags(ModId modId, string[] tags, Action<Result> callback)
```

Adds the provided tags to the specified mod id. In order for this to work the
authenticated user must have permission to edit the specified mod. Only existing tags
as part of the game Id will be added.


###### Parameters

`modId` Id of the mod to add tags to
`tags` array of tags to be added
`callback` callback with the result of the operation

###### See Also

[`Result`](#ModIO.ResultAnd)
[`DeleteTags`](#ModIO.ModIOUnity.DeleteTags)
[`ModIOUnityAsync.AddTags`](#ModIO.ModIOUnityAsync.AddTags)
```csharp

ModId modId;
string[] tags;
void Example()
{
    ModIOUnity.AddTags(modId, tags, AddTagsCallback);
}
void AddTagsCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("added tags");
    }
    else
    {
        Debug.Log("failed to add tags");
    }
}

```



#### AddModComment{#ModIO.ModIOUnity.AddModComment}

```csharp
public static void AddModComment(ModId modId, CommentDetails commentDetails, Action<ResultAnd<ModComment>> callback)
```

Adds a comment to a mod profile. Successfully adding a comment returns the Mod Comment
object back.


###### Remarks

Keep in mind you can use mentions in the comment content, such as "Hello there, @@&lt;john-doe>"

###### Parameters

`modId` Id of the mod to add the comment to
`commentDetails` the new comment to be added
`callback` callback with the result of the operation

###### See Also

[`Result`](#ModIO.ResultAnd)
[`ResultAnd`](#ModIO.ResultAnd)
[`ModComment`](#ModIO.ModIOUnity.GetModComments)
[`CommentDetails`](#ModIO.CommentDetails)
[`GetModComments`](#ModIO.ModIOUnity.GetModComments)
[`DeleteModComment`](#ModIO.ModIOUnity.DeleteModComment)
`EditModComment`
[`ModIOUnityAsync.AddModComment`](#ModIO.ModIOUnityAsync.AddModComment)
```csharp

ModId modId;
void Example()
{
    CommentDetails comment = new CommentDetails(0, "Hello world!");
    ModIOUnity.AddModComment(modId, comment, AddCommentCallback);
}
void AddCommentCallback(ResultAnd<ModComment> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("added comment");
    }
    else
    {
        Debug.Log("failed to add comment");
    }
}

```



#### DeleteModComment{#ModIO.ModIOUnity.DeleteModComment}

```csharp
public static void DeleteModComment(ModId modId, long commentId, Action<Result> callback)
```

Delete a comment from a mod profile. Successful request will return 204 No Content and fire a MOD_COMMENT_DELETED event.


###### Parameters

`modId` Id of the mod to add the comment to
`commentId` The id for the comment to be removed
`callback` callback with the result of the operation

###### See Also

[`Result`](#ModIO.ResultAnd)
[`ModComment`](#ModIO.ModIOUnity.GetModComments)
[`CommentDetails`](#ModIO.CommentDetails)
[`DeleteModComment`](#ModIO.ModIOUnity.DeleteModComment)
`EditModComment`
[`ModIOUnityAsync.DeleteModComment`](#ModIO.ModIOUnityAsync.DeleteModComment)
```csharp

private ModId modId;
private long commentId;
void Example()
{
   ModIOUnity.DeleteModComment(modId, commentId, DeleteCommentCallback);
}
void DeleteCommentCallback(Result result)
{
   if (result.Succeeded())
   {
        Debug.Log("deleted comment");
    }
    else
   {
        Debug.Log("failed to delete comment");
    }
}

```



#### UpdateModComment{#ModIO.ModIOUnity.UpdateModComment}

```csharp
public static void UpdateModComment(ModId modId, string content, long commentId, Action<ResultAnd<ModComment>> callback)
```

Update a comment for the corresponding mod. Successful request will return the updated Comment Object.


###### Parameters

`modId` Id of the mod the comment is on
`content` Updated contents of the comment.
`commentId` The id for the comment you wish to edit
`callback` callback with the result of the operation

###### See Also

[`ResultAnd`](#ModIO.ResultAnd)
[`ModComment`](#ModIO.ModIOUnity.GetModComments)
[`ModIOUnityAsync.UpdateModComment`](#ModIO.ModIOUnityAsync.UpdateModComment)
```csharp

private string content = "This is a Comment";
long commentId = 12345;
ModId modId = (ModId)1234;
void UpdateMod()
{
    ModIOUnity.UpdateModComment(modId, content, commentId, UpdateCallback);
}
void UpdateCallback(ResultAnd<ModComment> resultAnd)
{
    if(resultAnd.result.Succeeded())
    {
        Debug.Log("Successfully Updated Comment!");
    }
    else
    {
        Debug.Log("Failed to Update Comment!");
    }
}

```



#### DeleteTags{#ModIO.ModIOUnity.DeleteTags}

```csharp
public static void DeleteTags(ModId modId, string[] tags, Action<Result> callback)
```

Deletes the specified tags from the mod. In order for this to work the
authenticated user must have permission to edit the specified mod.


###### Parameters

`modId` the id of the mod for deleting tags
`tags` array of tags to be deleted
`callback` callback with the result of the operation

###### See Also

[`Result`](#ModIO.ResultAnd)
[`AddTags`](#ModIO.ModIOUnity.AddTags)
[`ModIOUnityAsync.DeleteTags`](#ModIO.ModIOUnityAsync.DeleteTags)
```csharp

ModId modId;
string[] tags;
void Example()
{
    ModIOUnity.DeleteTags(modId, tags, DeleteTagsCallback);
}
void DeleteTagsCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("deleted tags");
    }
    else
    {
        Debug.Log("failed to delete tags");
    }
}

```



#### GetMultipartUploadSessions{#ModIO.ModIOUnity.GetMultipartUploadSessions}

```csharp
public static void GetMultipartUploadSessions(ModId modId, SearchFilter filter, Action<ResultAnd<PaginatedResponse<MultipartUpload>>> callback)
```

Get all upload sessions belonging to the authenticated user for the corresponding mod. Successful request will return an
array of Multipart Upload Part Objects. We recommended reading the filtering documentation to return only the records you want.
The Mutlipart feature is automatically used when uploading a mod via UploadModFile and is limited to one upload at a time.
This function is optional and is provided to allow for more control over uploading large files for those who require it.


###### Parameters

`modId` the id of the mod
`filter` The filter to apply when searching through comments (can only apply
pagination parameters, Eg. page size and page index)
`callback` a callback with the Result of the operation

###### See Also

[`SearchFilter`](#ModIO.SearchFilter)
[`ModIOUnityAsync.UploadModfile`](#ModIO.ModIOUnityAsync.UploadModfile)
[`ModIOUnityAsync.GetMultipartUploadSessions`](#ModIO.ModIOUnityAsync.GetMultipartUploadSessions)
```csharp

ModId modId;
SearchFilter filter;
private void Example()
{
    ModIOUnity.GetMultipartUploadSessions(modId, filter, Callback);
}
void Callback(ResultAnd<MultipartUploadSessionsObject> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Received Upload Sessions");
    }
    else
    {
        Debug.Log("Failed to get Upload Sessions");
    }
}

```



#### GetMultipartUploadParts{#ModIO.ModIOUnity.GetMultipartUploadParts}

```csharp
public static void GetMultipartUploadParts(ModId modId, string uploadId, SearchFilter filter, Action<ResultAnd<PaginatedResponse<MultipartUploadPart>>> callback)
```

Get all uploaded parts for a corresponding upload session. Successful request will return an array of Multipart
Upload Part Objects.We recommended reading the filtering documentation to return only the records you want.
The Mutlipart feature is automatically used when uploading a mod via UploadModFile and is limited to one upload at a time.
This function is optional and is provided to allow for more control over uploading large files for those who require it.


###### Parameters

`modId` the id of the mod
`uploadId` A universally unique identifier (UUID) that represents the upload session.
`filter` The filter to apply when searching through comments (can only apply
pagination parameters, Eg. page size and page index)
`callback` a callback with the Result of the operation

###### See Also

[`SearchFilter`](#ModIO.SearchFilter)
[`ModIOUnityAsync.UploadModfile`](#ModIO.ModIOUnityAsync.UploadModfile)
[`ModIOUnityAsync.GetMultipartUploadParts`](#ModIO.ModIOUnityAsync.GetMultipartUploadParts)
```csharp

ModId modId;
string uploadId;
SearchFilter filter;
private void Example()
{
    ModIOUnity.GetMultipartUploadParts(modId, uploadId, filter, Callback);
}
void Callback(ResultAnd<MultipartUploadSessionsObject> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Received Upload Sessions Object");
    }
    else
    {
        Debug.Log("Failed to get Upload Sessions Object");
    }
}

```



#### AddMultipartUploadParts{#ModIO.ModIOUnity.AddMultipartUploadParts}

```csharp
public static void AddMultipartUploadParts(ModId modId, string uploadId, string contentRange, string digest, byte[] rawBytes, Action<Result> callback)
```

Add a new multipart upload part to an existing upload session. All parts must be exactly 50MB (Mebibyte) in size unless it is the
final part which can be smaller. A successful request will return a single Multipart Upload Part Object.
NOTE: Unlike other POST endpoints on this service, the body of this request should contain no form parameters and instead be the data
described in the byte range of the Content-Range header of the request.
The Mutlipart feature is automatically used when uploading a mod via UploadModFile and is limited to one upload at a time.
This function is optional and is provided to allow for more control over uploading large files for those who require it.


###### Parameters

`modId` the id of the mod
`uploadId` A universally unique identifier (UUID) that represents the upload session.
`contentRange` The Content-Range of the file you are sending.
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range
`digest` Optional Digest for part integrity checks once the part has been uploaded.
`rawBytes` Bytes for the file part to be uploaded
`callback` a callback with the Result of the operation

###### See Also

[`ModIOUnityAsync.UploadModfile`](#ModIO.ModIOUnityAsync.UploadModfile)
[`ModIOUnityAsync.AddMultipartUploadParts`](#ModIO.ModIOUnityAsync.AddMultipartUploadParts)
```csharp

ModId modId;
string uploadId;
string contentRange;
string digest;
byte[] rawBytes;
private void Example()
{
    ModIOUnity.AddMultipartUploadParts(modId, uploadId, contentRange, digest, rawBytes, Callback);
}
void Callback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Added a part to Upload Session");
    }
    else
    {
        Debug.Log("Failed to add a part to Upload Session");
    }
}

```



#### CreateMultipartUploadSession{#ModIO.ModIOUnity.CreateMultipartUploadSession}

```csharp
public static void CreateMultipartUploadSession(ModId modId, string filename, string nonce
```

Create a new multipart upload session. A successful request will return a single Multipart Upload Object.
NOTE: The multipart upload system is designed for uploading large files up to 20GB in size. If uploading
files less than 100MB, we recommend using the Add Modfile endpoint.
The Mutlipart feature is automatically used when uploading a mod via UploadModFile and is limited to one upload at a time.
This function is optional and is provided to allow for more control over uploading large files for those who require it.


###### Parameters

`modId` the id of the mod
`nonce` An optional nonce to provide to prevent duplicate upload sessions from being created concurrently. Maximum of 64 characters.
`filename` The filename of the file once all the parts have been uploaded. The filename must include the .zip extension and cannot exceed 100 characters.
`callback` a callback with the Result of the operation

###### See Also

[`ModIOUnityAsync.UploadModfile`](#ModIO.ModIOUnityAsync.UploadModfile)
[`ModIOUnityAsync.CreateMultipartUploadSession`](#ModIO.ModIOUnityAsync.CreateMultipartUploadSession)
```csharp

ModId modId;
string filename;
string nonce;
private void Example()
{
    ModIOUnity.CreateMultipartUploadSession(modId, filename, nonce, Callback);
}
void Callback(ResultAnd<MultipartUploadObject> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Created Upload Session");
    }
    else
    {
        Debug.Log("Failed to Create Upload Session");
    }
}

```



#### DeleteMultipartUploadSession{#ModIO.ModIOUnity.DeleteMultipartUploadSession}

```csharp
public static void DeleteMultipartUploadSession(ModId modId, string uploadId, Action<Result> callback)
```

Terminate an active multipart upload session, a successful request will return 204 No Content.
The Mutlipart feature is automatically used when uploading a mod via UploadModFile and is limited to one upload at a time.
This function is optional and is provided to allow for more control over uploading large files for those who require it.


###### Parameters

`modId` the id of the mod
`uploadId` A universally unique identifier (UUID) that represents the upload session.
`callback` a callback with the Result of the operation

###### See Also

[`ModIOUnityAsync.DeleteMultipartUploadSession`](#ModIO.ModIOUnityAsync.DeleteMultipartUploadSession)
[`ModIOUnityAsync.UploadModfile`](#ModIO.ModIOUnityAsync.UploadModfile)
```csharp

ModId modId;
string uploadId;
private void Example()
{
    ModIOUnity.DeleteMultipartUploadSession(modId, uploadId, Callback);
}
void Callback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Deleted Upload Session");
    }
    else
    {
        Debug.Log("Failed to Delete Upload Session");
    }
}

```



#### CompleteMultipartUploadSession{#ModIO.ModIOUnity.CompleteMultipartUploadSession}

```csharp
public static void CompleteMultipartUploadSession(ModId modId, string uploadId, Action<Result> callback)
```

Complete an active multipart upload session, this endpoint assumes that you have already uploaded all individual parts.
A successful request will return a 200 OK response code and return a single Multipart Upload Object.
The Mutlipart feature is automatically used when uploading a mod via UploadModFile and is limited to one upload at a time.
This function is optional and is provided to allow for more control over uploading large files for those who require it.


###### Parameters

`modId` the id of the mod
`uploadId` A universally unique identifier (UUID) that represents the upload session.
`callback` a callback with the Result of the operation

###### See Also

[`ModIOUnityAsync.CompleteMultipartUploadSession`](#ModIO.ModIOUnityAsync.CompleteMultipartUploadSession)
[`ModIOUnityAsync.UploadModfile`](#ModIO.ModIOUnityAsync.UploadModfile)
```csharp

ModId modId;
string uploadId;
private void Example()
{
    ModIOUnity.CompleteMultipartUploadSession(modId, uploadId, Callback);
}
void Callback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Completed Session");
    }
    else
    {
        Debug.Log("Failed to complete session");
    }
}

```



#### DownloadImage{#ModIO.ModIOUnity.DownloadImage}

```csharp
public static void DownloadImage(DownloadReference downloadReference,  Action<ResultAnd<byte[]>> callback)
```

Downloads a texture based on the specified download reference.


###### Remarks


You can get download references from UserProfiles and ModProfiles


###### Parameters

`downloadReference` download reference for the texture (eg UserObject.avatar_100x100)
`callback` callback with the Result and Texture2D from the download

###### See Also

[`Result`](#ModIO.ResultAnd)
[`DownloadReference`](#ModIO.DownloadReference)
`Texture2D`
`ModIOUnityAsync.DownloadTexture`
```csharp

ModProfile mod;
void Example()
{
    ModIOUnity.DownloadTexture(mod.logoImage_320x180, DownloadTextureCallback);
}
void DownloadTextureCallback(ResultAnd<Texture2D> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("downloaded the mod logo texture");
    }
    else
    {
        Debug.Log("failed to download the mod logo texture");
    }
}

```



#### Report{#ModIO.ModIOUnity.Report}

```csharp
public static void Report(Report report, Action<Result> callback)
```

Reports a specified mod to mod.io.


###### Parameters

`report` the object containing all of the details of the report you are sending
`callback` callback with the Result of the report

###### See Also

[`Report`](#ModIO.ModIOUnity.Report)
[`Result`](#ModIO.ResultAnd)
[`ModIOUnityAsync.Report`](#ModIO.ModIOUnityAsync.Report)
```csharp

void Example()
{
    Report report = new Report(new ModId(123),
                                ReportType.Generic,
                                "reporting this mod for a generic reason",
                                "JohnDoe",
                                "johndoe@mod.io");
    ModIOUnity.Report(report, ReportCallback);
}
void ReportCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("successfully sent a report");
    }
    else
    {
        Debug.Log("failed to send a report");
    }
}

```



#### SyncEntitlements{#ModIO.ModIOUnity.SyncEntitlements}

```csharp
public static void SyncEntitlements(Action<ResultAnd<Entitlement[]>> callback)
```

Convert an in-game consumable that a user has purchased on Steam, Xbox, or Psn into a users
mod.io inventory. This endpoint will consume the entitlement on behalf of the user against
the portal in which the entitlement resides (i.e. Steam, Xbox, Psn).


###### Parameters

`callback` a callback with the Result of the operation

###### See Also

[`Entitlement`](#ModIO.ModIOUnity.SyncEntitlements)
`EntitlementObject`
[`ModIOUnityAsync.SyncEntitlements`](#ModIO.ModIOUnityAsync.SyncEntitlements)
```csharp

private void Example()
{
    ModIOUnity.SyncEntitlements();
}
void Callback(ResultAnd<Entitlement[]> response)
{
    if (response.result.Succeeded())
    {
        Debug.Log("Sync Entitlements Success");
    }
    else
    {
        Debug.Log("Failed to Sync Entitlements");
    }
}

```


#### PurchaseMod{#ModIO.ModIOUnity.PurchaseMod}

```csharp
public static void PurchaseMod(ModId modId, int displayAmount, string idempotent, bool subscribeOnPurchase, Action<ResultAnd<CheckoutProcess>> callback)
```

Complete a marketplace purchase. A Successful request will return the newly created Checkout
Process Object. Parameter|Type|Required|Description ---|---|---|---| transaction_id|integer|true|The id
of the transaction to complete. mod_id|integer|true|The id of the mod associated to this transaction.
display_amount|integer|true|The expected amount of the transaction to confirm the displayed amount matches
the actual amount.


###### Parameters

`modId` The id of the mod the user wants to purchase.
`displayAmount` The amount that was shown to the user for the purchase.
`idempotent` A unique string. Must be alphanumeric and cannot contain unique characters except for - 
`subscribeOnPurchase` Automatically subscribe to the mod after purchase
`callback` callback with the result of the operation

###### See Also

[`Result`](#ModIO.ResultAnd)
```csharp

string idempotent = $"aUniqueKey";
ModId modId = 1234;
int displayAmount = 12;
void Example()
{
    ModIOUnity.PurchaseMod(modId, displayAmount, idempotent, Callback);
}
void Callback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Completed Purchase");
    }
    else
    {
        Debug.Log("failed to complete purchase");
    }
}

```


#### GetPurchasedMods{#ModIO.ModIOUnity.GetPurchasedMods}

```csharp
public static ModProfile[] GetPurchasedMods(out Result result)
```

Retrieves all of the purchased mods for the current user.


###### Parameters

`result` an out parameter for whether or not the method succeeded

###### See Also

[`Result`](#ModIO.ResultAnd)
[`FetchUpdates`](#ModIO.ModIOUnity.FetchUpdates)

###### Returns

an array of the user's purchased mods
```csharp

void Example()
{
    ModProfile[] mods = ModIOUnity.GetPurchasedMods(out Result result);
    if (result.Succeeded())
    {
        Debug.Log("user has " + mods.Length + " purchased mods");
    }
    else
    {
        Debug.Log("failed to get purchased mods");
    }
}

```


#### GetUserWalletBalance{#ModIO.ModIOUnity.GetUserWalletBalance}

```csharp
public static void GetUserWalletBalance(Action<ResultAnd<Wallet>> callback)
```

Get user's wallet balance


###### Parameters

`callback` callback with the result of the operation

###### See Also

[`Result`](#ModIO.ResultAnd)
```csharp

void Example()
{
    ModIOUnity.GetUserWalletBalance(filter, Callback);
}
void Callback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Get balance Success");
    }
    else
    {
        Debug.Log("failed to get balance");
    }
}

```


#### GetGameTokenPacks{#ModIO.ModIOUnity.GetGameTokenPacks}

```csharp
public static void GetGameTokenPacks(Action<ResultAnd<TokenPack[]>> callback)
```


#### StartAnalyticsSession{#ModIO.ModIOUnity.StartAnalyticsSession}

```csharp
public static void StartAnalyticsSession(string sessionId, long[] modIds, bool startHeartbeat, Action<Result> callback)
```

Send Request to start tracking playtime analytics. Best used after a
player has loaded into the game with their selected mods. Multiple
sessions can be active, however the session ids must be unique.


###### Parameters

`sessionId` Must be unique (guid)
`modIds` Mods used for this session.
`startHeartbeat` Starts a heartbeat coroutine that will ping the server around every 5 min
`callback` callback with the result of the operation

###### See Also

[`StartAnalyticsSession`](#ModIO.ModIOUnity.StartAnalyticsSession)
[`ModIOUnityAsync.StartAnalyticsSession`](#ModIO.ModIOUnityAsync.StartAnalyticsSession)
[`ModIOUnity.SendAnalyticsHeartbeat`](#ModIO.ModIOUnity.SendAnalyticsHeartbeat)
[`ModIOUnityAsync.SendAnalyticsHeartbeat`](#ModIO.ModIOUnityAsync.SendAnalyticsHeartbeat)
[`ModIOUnity.EndAnalyticsSession`](#ModIO.ModIOUnity.EndAnalyticsSession)
[`ModIOUnityAsync.EndAnalyticsSession`](#ModIO.ModIOUnityAsync.EndAnalyticsSession)
```csharp

string[] modIds;
string sessionId;
void Example()
{
    ModIOUnity.StartAnalyticsSession(sessionId, modIds, true, Callback);
}
void ReportCallback(ResultAnd<string> r)
{
    if (r.result.Succeeded())
    {
        //Store the returned session id to end the session later.
        sessionId = r.value;
        Debug.Log("successful");
    }
    else
    {
        Debug.Log("failed");
    }
}

```



#### SendAnalyticsHeartbeat{#ModIO.ModIOUnity.SendAnalyticsHeartbeat}

```csharp
public static void SendAnalyticsHeartbeat(string sessionId, Action<Result> callback)
```

Send Request to start tracking playtime analytics. Best used after a
player has loaded into the game with their selected mods. Multiple
sessions can be active, however the session ids must be unique.


###### Parameters

`sessionId` Must be unique (guid)
`callback` callback with the result of the operation

###### See Also

[`StartAnalyticsSession`](#ModIO.ModIOUnity.StartAnalyticsSession)
[`ModIOUnityAsync.StartAnalyticsSession`](#ModIO.ModIOUnityAsync.StartAnalyticsSession)
[`ModIOUnity.SendAnalyticsHeartbeat`](#ModIO.ModIOUnity.SendAnalyticsHeartbeat)
[`ModIOUnityAsync.SendAnalyticsHeartbeat`](#ModIO.ModIOUnityAsync.SendAnalyticsHeartbeat)
[`ModIOUnity.EndAnalyticsSession`](#ModIO.ModIOUnity.EndAnalyticsSession)
[`ModIOUnityAsync.EndAnalyticsSession`](#ModIO.ModIOUnityAsync.EndAnalyticsSession)
```csharp

string sessionId;
void Example()
{
    ModIOUnity.StartAnalyticsSession(sessionId, Callback);
}
void ReportCallback(Result r)
{
    if (r.result.Succeeded())
    {
        //Store the returned session id to end the session later.
        sessionId = r.value;
        Debug.Log("successful");
    }
    else
    {
        Debug.Log("failed");
    }
}

```



#### EndAnalyticsSession{#ModIO.ModIOUnity.EndAnalyticsSession}

```csharp
public static void EndAnalyticsSession(string sessionId, Action<Result> callback)
```

Send Request to end the tracking of playtime analytics. Best used after a
player has left an in game session.


###### Parameters

`sessionId` Session id associated with the session you want to end.
`callback` callback with the result of the operation

###### See Also

[`StartAnalyticsSession`](#ModIO.ModIOUnity.StartAnalyticsSession)
[`ModIOUnityAsync.StartAnalyticsSession`](#ModIO.ModIOUnityAsync.StartAnalyticsSession)
[`ModIOUnity.SendAnalyticsHeartbeat`](#ModIO.ModIOUnity.SendAnalyticsHeartbeat)
[`ModIOUnityAsync.SendAnalyticsHeartbeat`](#ModIO.ModIOUnityAsync.SendAnalyticsHeartbeat)
[`ModIOUnity.EndAnalyticsSession`](#ModIO.ModIOUnity.EndAnalyticsSession)
[`ModIOUnityAsync.EndAnalyticsSession`](#ModIO.ModIOUnityAsync.EndAnalyticsSession)
```csharp

string sessionId;
void Example()
{
    ModIOUnity.EndAnalyticsSession(sessionId, Callback);
}
void ReportCallback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("successful");
    }
    else
    {
        Debug.Log("failed");
    }
}

```



#### RequestUserDelegationToken{#ModIO.ModIOUnity.RequestUserDelegationToken}

```csharp
public static void RequestUserDelegationToken(Action<ResultAnd<UserDelegationToken>> callback)
```

Requests a User Delegation Token on behalf of a authenticated user.
This token should then be sent to your secure backend server
where you can then use it for specific endpoints.


###### Parameters

`callback` callback with the result of the operation


#### CreateTempModSet{#ModIO.ModIOUnity.CreateTempModSet}

```csharp
public static void CreateTempModSet(ModId[] modIds, Action<Result> callback)
```

Creates a Temp mod set


###### Parameters

`modIds` Mods used for this set.
`callback` callback with the result of the operation

###### See Also

[`ModIOUnityAsync.CreateTempModSet`](#ModIO.ModIOUnityAsync.CreateTempModSet)
[`ModIOUnity.DeleteTempModSet`](#ModIO.ModIOUnity.DeleteTempModSet)
[`ModIOUnity.AddModsToTempModSet`](#ModIO.ModIOUnity.AddModsToTempModSet)
[`ModIOUnity.RemoveModsFromTempModSet`](#ModIO.ModIOUnity.RemoveModsFromTempModSet)
[`ModIOUnity.GetTempSystemInstalledMods`](#ModIO.ModIOUnity.GetTempSystemInstalledMods)
```csharp

ModId[] modIds;
void Example()
{
    ModIOUnity.CreateTempModSet(modIds, callback);
}
void Callback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successful");
    }
    else
    {
        Debug.Log("Failed");
    }
}

```



#### DeleteTempModSet{#ModIO.ModIOUnity.DeleteTempModSet}

```csharp
public static Result DeleteTempModSet()
```

Removes a Temp mod set


###### See Also

[`ModIOUnity.CreateTempModSet`](#ModIO.ModIOUnity.CreateTempModSet)
[`ModIOUnity.AddModsToTempModSet`](#ModIO.ModIOUnity.AddModsToTempModSet)
[`ModIOUnity.RemoveModsFromTempModSet`](#ModIO.ModIOUnity.RemoveModsFromTempModSet)
[`ModIOUnity.GetTempSystemInstalledMods`](#ModIO.ModIOUnity.GetTempSystemInstalledMods)
```csharp

void Example()
{
    ModIOUnity.DeleteTempModSet(callback);
}
void Callback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successful");
    }
    else
    {
        Debug.Log("Failed");
    }
}

```



#### AddModsToTempModSet{#ModIO.ModIOUnity.AddModsToTempModSet}

```csharp
public static void AddModsToTempModSet(ModId[] modIds, Action<Result> callback)
```

Adds mods to a Temp mod set


###### Parameters

`modIds` Mods used for this set.
`callback` callback with the result of the operation

###### See Also

[`ModIOUnity.CreateTempModSet`](#ModIO.ModIOUnity.CreateTempModSet)
[`ModIOUnity.DeleteTempModSet`](#ModIO.ModIOUnity.DeleteTempModSet)
[`ModIOUnityAsync.AddModsToTempModSet`](#ModIO.ModIOUnityAsync.AddModsToTempModSet)
[`ModIOUnity.RemoveModsFromTempModSet`](#ModIO.ModIOUnity.RemoveModsFromTempModSet)
[`ModIOUnity.GetTempSystemInstalledMods`](#ModIO.ModIOUnity.GetTempSystemInstalledMods)
```csharp

ModId[] modIds;
void Example()
{
    ModIOUnity.AddModToTempModSet(modIds, callback);
}
void Callback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successful");
    }
    else
    {
        Debug.Log("Failed");
    }
}

```



#### RemoveModsFromTempModSet{#ModIO.ModIOUnity.RemoveModsFromTempModSet}

```csharp
public static Result RemoveModsFromTempModSet(IEnumerable<ModId> modIds)
```

Removes mods from a Temp mod set


###### Parameters

`modIds` Mods used for this set.

###### See Also

[`ModIOUnity.CreateTempModSet`](#ModIO.ModIOUnity.CreateTempModSet)
[`ModIOUnity.DeleteTempModSet`](#ModIO.ModIOUnity.DeleteTempModSet)
[`ModIOUnity.AddModsToTempModSet`](#ModIO.ModIOUnity.AddModsToTempModSet)
[`ModIOUnity.GetTempSystemInstalledMods`](#ModIO.ModIOUnity.GetTempSystemInstalledMods)
```csharp

ModId[] modIds;
void Example()
{
    ModIOUnity.RemoveModsFromTempModSet(modIds, callback);
}
void Callback(Result result)
{
    if (result.Succeeded())
    {
        Debug.Log("Successful");
    }
    else
    {
        Debug.Log("Failed");
    }
}

```



#### GetTempSystemInstalledMods{#ModIO.ModIOUnity.GetTempSystemInstalledMods}

```csharp
public static InstalledMod[] GetTempSystemInstalledMods(out Result result)
```

Gets an array of temp mods that are installed on the current device.


###### Remarks


Note that these will not be subscribed by the current user. If you wish to get all
of the current user's installed mods use ModIOUnity.GetSubscribedMods() and check the
SubscribedMod.status equals SubscribedModStatus.Installed.


###### Parameters

`result` an out Result to inform whether or not it was able to get temp installed mods

###### Returns

an array of InstalledMod for each existing temp mod installed on the current device (and not subscribed by the current user)

###### See Also

[`InstalledMod`](#ModIO.ModIOUnity.GetSystemInstalledMods)
[`GetSubscribedMods`](#ModIO.ModIOUnity.GetSubscribedMods)
[`ModIOUnity.CreateTempModSet`](#ModIO.ModIOUnity.CreateTempModSet)
[`ModIOUnity.DeleteTempModSet`](#ModIO.ModIOUnity.DeleteTempModSet)
[`ModIOUnityAsync.AddModsToTempModSet`](#ModIO.ModIOUnityAsync.AddModsToTempModSet)
[`ModIOUnity.RemoveModsFromTempModSet`](#ModIO.ModIOUnity.RemoveModsFromTempModSet)
```csharp

void Example()
{
    InstalledMod[] mods = ModIOUnity.GetTempSystemInstalledMods(out Result result);
    if (result.Succeeded())
    {
        Debug.Log("found " + mods.Length.ToString() + " temp mods installed");
    }
    else
    {
        Debug.Log("failed to get temp installed mods");
    }
}

```


___

### ModIOUnityAsync{#ModIO.ModIOUnityAsync}

```csharp
public static class ModIOUnityAsync
```
Main async interface for the mod.io Unity plugin.

###### Remarks

Every `ModIOUnityAsync` method has a callback alternative in `ModIOUnity`.

###### See Also

[`ModIOUnity`](#ModIO.ModIOUnityAsync)


###### Method


#### Shutdown{#ModIO.ModIOUnityAsync.Shutdown}

```csharp
public static async Task Shutdown()
```
Cancels all public operations, frees plugin resources and invokes any pending callbacks with a cancelled result code.

###### Remarks

`Result.IsCancelled()` can be used to determine if it was cancelled due to a shutdown operation.
```csharp

await ModIOUnityAsync.Shutdown();
Debug.Log("Plugin shutdown complete");

```


###### See Also

[`Result`](#ModIO.ResultAnd)


#### Ping{#ModIO.ModIOUnityAsync.Ping}

```csharp
public static Task<Result> Ping()
```
Pings the server.
`Result.Succeeded()` will be `true` if a response was received.



#### RequestExternalAuthentication{#ModIO.ModIOUnityAsync.RequestExternalAuthentication}

```csharp
public static async Task<ResultAnd<ExternalAuthenticationToken>> RequestExternalAuthentication()
```
Listen for an external login attempt. Returns an  that includes the url and code to display to the user. `ExternalAuthenticationToken.task` will complete once the user enters the code.

###### Remarks

The request will time out after 15 minutes. You can cancel it at any time using `token.Cancel()`.
```csharp

var response = await ModIOUnityAsync.RequestExternalAuthentication();
if (!response.result.Succeeded())
{
    Debug.Log($"RequestExternalAuthentication failed: {response.result.message}");
    return;
}

```


###### See Also

[`Result`](#ModIO.ResultAnd)
[`ResultAnd`](#ModIO.ResultAnd)
`ExternalAuthenticationToken`


#### RequestAuthenticationEmail{#ModIO.ModIOUnityAsync.RequestAuthenticationEmail}

```csharp
public static async Task<Result> RequestAuthenticationEmail(string emailaddress)
```

Sends an email with a security code to the specified Email Address. The security code
is then used to Authenticate the user session using ModIOUnity.SubmitEmailSecurityCode()


###### Remarks


The operation will return a Result object.
If the email is successfully sent Result.Succeeded() will equal true.
If you haven't Initialized the plugin then Result.IsInitializationError() will equal
true. If the string provided for the emailaddress is not .NET compliant
Result.IsAuthenticationError() will equal true.


###### Parameters

`emailaddress` the Email Address to send the security code to, eg "JohnDoe@gmail.com"

###### See Also

[`SubmitEmailSecurityCode`](#ModIO.ModIOUnity.SubmitEmailSecurityCode)
[`Result`](#ModIO.ResultAnd)
```csharp

async void Example()
{
    Result result = await ModIOUnityAsync.RequestAuthenticationEmail("johndoe@gmail.com");
    if (result.Succeeded())
    {
        Debug.Log("Succeeded to send security code");
    }
    else
    {
        Debug.Log("Failed to send security code to that email address");
    }
}

```



#### SubmitEmailSecurityCode{#ModIO.ModIOUnityAsync.SubmitEmailSecurityCode}

```csharp
public static async Task<Result> SubmitEmailSecurityCode(string securityCode)
```

Attempts to Authenticate the current session by submitting a security code received by
email from ModIOUnity.RequestAuthenticationEmail()


###### Remarks


It is intended that this function is used after ModIOUnity.RequestAuthenticationEmail()
is performed successfully.


###### Parameters

`securityCode` The security code received from an authentication email

###### See Also

[`RequestAuthenticationEmail`](#ModIO.ModIOUnity.RequestAuthenticationEmail)
[`Result`](#ModIO.ResultAnd)
```csharp

async void Example(string userSecurityCode)
{
    Result result = await ModIOUnityAsync.SubmitEmailSecurityCode(userSecurityCode);
    if (result.Succeeded())
    {
        Debug.Log("You have successfully authenticated the user");
    }
    else
    {
        Debug.Log("Failed to authenticate the user");
    }
}

```



#### GetTermsOfUse{#ModIO.ModIOUnityAsync.GetTermsOfUse}

```csharp
public static async Task<ResultAnd<TermsOfUse>> GetTermsOfUse()
```

This retrieves the terms of use text to be shown to the user to accept/deny before
authenticating their account via a third party provider, eg steam or google.


###### Remarks


If the operation succeeds it will also provide a TermsOfUse struct that contains a
TermsHash struct which you will need to provide when calling a third party
authentication method such as ModIOUnity.AuthenticateUserViaSteam()


###### See Also

[`TermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`AuthenticateUserViaDiscord`](#ModIO.ModIOUnity.AuthenticateUserViaDiscord)
[`AuthenticateUserViaGoogle`](#ModIO.ModIOUnity.AuthenticateUserViaGoogle)
[`AuthenticateUserViaGOG`](#ModIO.ModIOUnity.AuthenticateUserViaGOG)
[`AuthenticateUserViaItch`](#ModIO.ModIOUnity.AuthenticateUserViaItch)
[`AuthenticateUserViaOculus`](#ModIO.ModIOUnity.AuthenticateUserViaOculus)
[`AuthenticateUserViaSteam`](#ModIO.ModIOUnity.AuthenticateUserViaSteam)
[`AuthenticateUserViaSwitch`](#ModIO.ModIOUnity.AuthenticateUserViaSwitch)
[`AuthenticateUserViaXbox`](#ModIO.ModIOUnity.AuthenticateUserViaXbox)
[`AuthenticateUserViaPlayStation`](#ModIO.ModIOUnity.AuthenticateUserViaPlayStation)
```csharp

async void Example()
{
    ResultAnd<TermsOfUser> response = await ModIOUnityAsync.GetTermsOfUse();
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}

```



#### AuthenticateUserViaSteam{#ModIO.ModIOUnityAsync.AuthenticateUserViaSteam}

```csharp
public static async Task<Result> AuthenticateUserViaSteam(string steamToken,  string emailAddress,  TermsHash? hash)
```

Attempts to authenticate a user via the steam API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`steamToken` the user's steam token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
async void GetTermsOfUse_Example()
{
    ResultAnd<TermsOfUser> response = await ModIOUnityAsync.GetTermsOfUse();
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
async void Authenticate_Example()
{
    Result result = await ModIOUnityAsync.AuthenticateUserViaSteam(steamToken, "johndoe@gmail.com", modIOTermsOfUse.hash);
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaEpic{#ModIO.ModIOUnityAsync.AuthenticateUserViaEpic}

```csharp
public static async Task<Result> AuthenticateUserViaEpic(string epicToken,  string emailAddress,  TermsHash? hash)
```

Attempts to authenticate a user via the epic API.


###### Parameters

`epicToken` the user's epic token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`ModIOUnity.AuthenticateUserViaEpic`](#ModIO.ModIOUnity.AuthenticateUserViaEpic)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
async void GetTermsOfUse_Example()
{
    ResultAnd<TermsOfUser> response = await ModIOUnityAsync.GetTermsOfUse();
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
async void Authenticate_Example()
{
    Result result = await ModIOUnityAsync.AuthenticateUserViaEpic(epicToken, "johndoe@gmail.com", modIOTermsOfUse.hash);
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaPlayStation{#ModIO.ModIOUnityAsync.AuthenticateUserViaPlayStation}

```csharp
public static async Task<Result> AuthenticateUserViaPlayStation(string authCode,  string emailAddress,  TermsHash? hash,  PlayStationEnvironment environment)
```

Attempts to authenticate a user via the steam API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`authCode` the user's authcode token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()
`environment` the PSN account environment

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
async void GetTermsOfUse_Example()
{
    ResultAnd<TermsOfUser> response = await ModIOUnityAsync.GetTermsOfUse();
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
async void Authenticate_Example()
{
    Result result = await ModIOUnityAsync.AuthenticateUserViaPlayStation(authCode, "johndoe@gmail.com", modIOTermsOfUse.hash, PlayStationEnvironment.np);
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaGOG{#ModIO.ModIOUnityAsync.AuthenticateUserViaGOG}

```csharp
public static async Task<Result> AuthenticateUserViaGOG(string gogToken, string emailAddress,  TermsHash? hash)
```

Attempts to authenticate a user via the GOG API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`gogToken` the user's steam token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
async void GetTermsOfUse_Example()
{
    ResultAnd<TermsOfUser> response = await ModIOUnityAsync.GetTermsOfUse();
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
async void Authenticate_Example()
{
    Result result = await ModIOUnityAsync.AuthenticateUserViaGOG(gogToken, "johndoe@gmail.com", modIOTermsOfUse.hash);
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaItch{#ModIO.ModIOUnityAsync.AuthenticateUserViaItch}

```csharp
public static async Task<Result> AuthenticateUserViaItch(string itchioToken,  string emailAddress,  TermsHash? hash)
```

Attempts to authenticate a user via the Itch.io API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`itchioToken` the user's steam token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
async void GetTermsOfUse_Example()
{
    ResultAnd<TermsOfUser> response = await ModIOUnityAsync.GetTermsOfUse();
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
async void Authenticate_Example()
{
    Result result = await ModIOUnityAsync.AuthenticateUserViaItch(itchioToken, "johndoe@gmail.com", modIOTermsOfUse.hash);
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaXbox{#ModIO.ModIOUnityAsync.AuthenticateUserViaXbox}

```csharp
public static async Task<Result> AuthenticateUserViaXbox(string xboxToken,  string emailAddress,  TermsHash? hash)
```

Attempts to authenticate a user via the Xbox API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`xboxToken` the user's steam token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
async void GetTermsOfUse_Example()
{
    ResultAnd<TermsOfUser> response = await ModIOUnityAsync.GetTermsOfUse();
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
async void Authenticate_Example()
{
    Result result = await ModIOUnityAsync.AuthenticateUserViaItch(xboxToken, "johndoe@gmail.com", modIOTermsOfUse.hash);
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaSwitch{#ModIO.ModIOUnityAsync.AuthenticateUserViaSwitch}

```csharp
public static async Task<Result> AuthenticateUserViaSwitch(string switchToken,  string emailAddress,  TermsHash? hash)
```

Attempts to authenticate a user via the switch API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`switchToken` the user's steam token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
async void GetTermsOfUse_Example()
{
    ResultAnd<TermsOfUser> response = await ModIOUnityAsync.GetTermsOfUse();
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
async void Authenticate_Example()
{
    Result result = await ModIOUnityAsync.AuthenticateUserViaItch(switchToken, "johndoe@gmail.com", modIOTermsOfUse.hash);
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaDiscord{#ModIO.ModIOUnityAsync.AuthenticateUserViaDiscord}

```csharp
public static async Task<Result> AuthenticateUserViaDiscord(string discordToken,  string emailAddress,  TermsHash? hash)
```

Attempts to authenticate a user via the discord API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`discordToken` the user's steam token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
async void GetTermsOfUse_Example()
{
    ResultAnd<TermsOfUser> response = await ModIOUnityAsync.GetTermsOfUse();
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
async void Authenticate_Example()
{
    Result result = await ModIOUnityAsync.AuthenticateUserViaDiscord(discordToken, "johndoe@gmail.com", modIOTermsOfUse.hash);
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaGoogle{#ModIO.ModIOUnityAsync.AuthenticateUserViaGoogle}

```csharp
public static async Task<Result> AuthenticateUserViaGoogle(string token,  string emailAddress,  TermsHash? hash)
```

Attempts to authenticate a user via the google API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`token` google auth code or id token
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
async void GetTermsOfUse_Example()
{
    ResultAnd<TermsOfUser> response = await ModIOUnityAsync.GetTermsOfUse();
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
async void Authenticate_Example()
{
    Result result = await ModIOUnityAsync.AuthenticateUserViaGoogle(token, "johndoe@gmail.com", modIOTermsOfUse.hash);
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaApple{#ModIO.ModIOUnityAsync.AuthenticateUserViaApple}

```csharp
public static async Task<Result> AuthenticateUserViaApple(string authCode,  string emailAddress,  TermsHash? hash)
```

Attempts to authenticate a user via the Apple API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`authCode` Apple auth code
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
async void GetTermsOfUse_Example()
{
    ResultAnd<TermsOfUser> response = await ModIOUnityAsync.GetTermsOfUse();
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
async void Authenticate_Example()
{
    Result result = await ModIOUnityAsync.AuthenticateUserViaApple(authCode, "johndoe@gmail.com", modIOTermsOfUse.hash);
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaOculus{#ModIO.ModIOUnityAsync.AuthenticateUserViaOculus}

```csharp
public static async Task<Result> AuthenticateUserViaOculus(OculusDevice oculusDevice, string nonce,  long userId, string oculusToken,  string emailAddress,  TermsHash? hash)
```

Attempts to authenticate a user via the oculus API.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`oculusToken` the user's oculus token
`oculusDevice` the device you're authenticating on
`nonce` the nonce
`userId` the user id
`emailAddress` the user's email address (Can be null)
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
async void GetTermsOfUse_Example()
{
    ResultAnd<TermsOfUser> response = await ModIOUnityAsync.GetTermsOfUse();
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
async void Authenticate_Example()
{
    Result result = await ModIOUnityAsync.AuthenticateUserViaOculus(OculusDevice.Quest,
                                                                    nonce,
                                                                    userId,
                                                                    oculusToken,
                                                                    "johndoe@gmail.com",
                                                                    modIOTermsOfUse.hash);
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```



#### AuthenticateUserViaOpenId{#ModIO.ModIOUnityAsync.AuthenticateUserViaOpenId}

```csharp
public static async Task<Result> AuthenticateUserViaOpenId(string idToken,  string emailAddress,  TermsHash? hash)
```

Attempts to authenticate a user on behalf of an OpenID identity provider. To use this
method of authentication, you must configure the OpenID config in your games
authentication admin page.
NOTE: The ability to authenticate players using your identity provider is a feature for
advanced partners only. If you are interested in becoming an advanced partner, please
contact us.


###### Remarks


You will first need to get the terms of use and hash from the ModIOUnity.GetTermsOfUse()
method.


###### Parameters

`idToken` the user's id token
`emailAddress` the user's email address
`hash` the TermsHash retrieved from ModIOUnity.GetTermsOfUse()

###### See Also

[`GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
```csharp

// First we get the Terms of Use to display to the user and cache the hash
async void GetTermsOfUse_Example()
{
    ResultAnd<TermsOfUser> response = await ModIOUnityAsync.GetTermsOfUse();
    if (response.result.Succeeded())
    {
        Debug.Log("Successfully retrieved the terms of use: " + response.value.termsOfUse);
        //  Cache the terms of use (which has the hash for when we attempt to authenticate)
        modIOTermsOfUse = response.value;
    }
    else
    {
        Debug.Log("Failed to retrieve the terms of use");
    }
}
// Once we have the Terms of Use and hash we can attempt to authenticate
async void Authenticate_Example()
{
    Result result = await ModIOUnityAsync.AuthenticateUserViaOpenId(idToken,
                                                                    "johndoe@gmail.com",
                                                                    modIOTermsOfUse.hash);
    if (result.Succeeded())
    {
        Debug.Log("Successfully authenticated user");
    }
    else
    {
        Debug.Log("Failed to authenticate");
    }
}

```


#### IsAuthenticated{#ModIO.ModIOUnityAsync.IsAuthenticated}

```csharp
public static async Task<Result> IsAuthenticated()
```

Informs you if the current user session is authenticated or not.


###### See Also

[`Result`](#ModIO.ResultAnd)
```csharp

async void Example()
{
    Result result = await ModIOUnityAsync.IsAuthenticated();
    if (result.Succeeded())
    {
        Debug.Log("current session is authenticated");
    }
    else
    {
        Debug.Log("current session is not authenticated");
    }
}

```



#### GetTagCategories{#ModIO.ModIOUnityAsync.GetTagCategories}

```csharp
public static async Task<ResultAnd<TagCategory[]>> GetTagCategories()
```

Gets the existing tags for the current game Id that can be used when searching/filtering
mods.


###### Remarks


Tags come in category groups, eg "Color" could be the name of the category and the tags
themselves could be { "Red", "Blue", "Green" }


###### See Also

[`SearchFilter`](#ModIO.SearchFilter)
[`TagCategory`](#ModIO.TagCategory)
[`Result`](#ModIO.ResultAnd)
```csharp

async void Example()
{
    ResultAnd<TagCategory[]> response = await ModIOUnityAsync.GetTagCategories();
    if (response.result.Succeeded())
    {
        foreach(TagCategory category in response.value)
        {
            foreach(Tag tag in category.tags)
            {
                Debug.Log(tag.name + " tag is in the " + category.name + "category");
            }
        }
    }
    else
    {
        Debug.Log("failed to get game tags");
    }
}

```



#### GetMods{#ModIO.ModIOUnityAsync.GetMods}

```csharp
public static async Task<ResultAnd<ModPage>> GetMods(SearchFilter filter)
```

Uses a SearchFilter to retrieve a specific Mod Page and returns the ModProfiles and
total number of mods based on the Search Filter.


###### Remarks


A ModPage contains a group of mods based on the pagination filters in SearchFilter.
eg, if you use SearchFilter.SetPageIndex(0) and SearchFilter.SetPageSize(100) then
ModPage.mods will contain mods from 1 to 100. But if you set SearchFilter.SetPageIndex(1)
then it will have mods from 101 to 200, if that many exist.
(note that 100 is the maximum page size).


###### Parameters

`filter` The filter to apply when searching through mods (also contains
pagination parameters)

###### See Also

[`SearchFilter`](#ModIO.SearchFilter)
[`ModPage`](#ModIO.ModPage)
[`Result`](#ModIO.ResultAnd)
```csharp

async void Example()
{
    SearchFilter filter = new SearchFilter();
    filter.SetPageIndex(0);
    filter.SetPageSize(10);
    ResultAnd<ModPage> response = await ModIOUnityAsync.GetMods(filter);
    if (response.result.Succeeded())
    {
        Debug.Log("ModPage has " + response.value.modProfiles.Length + " mods");
    }
    else
    {
        Debug.Log("failed to get mods");
    }
}

```



#### GetMod{#ModIO.ModIOUnityAsync.GetMod}

```csharp
public static async Task<ResultAnd<ModProfile>> GetMod(ModId modId)
```

Requests a single ModProfile from the mod.io server by its ModId.


###### Remarks


If there is a specific mod that you want to retrieve from the mod.io database you can
use this method to get it.


###### Parameters

`modId` the ModId of the ModProfile to get

###### See Also

[`ModId`](#ModIO.ModId)
[`ModProfile`](#ModIO.ModIOUnity.CreateModProfile)
[`Result`](#ModIO.ResultAnd)
```csharp

async void Example()
{
    ModId modId = new ModId(1234);
    ResultAnd<ModProfile> response = await ModIOUnityAsync.GetMod(modId);
    if (response.result.Succeeded())
    {
        Debug.Log("retrieved mod " + response.value.name);
    }
    else
    {
        Debug.Log("failed to get mod");
    }
}

```



#### GetModSkipCache{#ModIO.ModIOUnityAsync.GetModSkipCache}

```csharp
public static Task<ResultAnd<ModProfile>> GetModSkipCache(ModId modId)
```


#### GetModComments{#ModIO.ModIOUnityAsync.GetModComments}

```csharp
public static async Task<ResultAnd<CommentPage>> GetModComments(ModId modId, SearchFilter filter)
```

Get all comments posted in the mods profile. Successful request will return an array of
Comment Objects. We recommended reading the filtering documentation to return only the
records you want.


###### Parameters

`modId` the ModId of the comments to get
`filter` The filter to apply when searching through comments (can only apply
pagination parameters, Eg. page size and page index)

###### See Also

[`CommentPage`](#ModIO.CommentPage)
[`ModComment`](#ModIO.ModIOUnity.GetModComments)
[`SearchFilter`](#ModIO.SearchFilter)
[`ModId`](#ModIO.ModId)
[`Result`](#ModIO.ResultAnd)
[`ResultAnd`](#ModIO.ResultAnd)
[`ModIOUnity.GetModComments`](#ModIO.ModIOUnity.GetModComments)


#### AddModComment{#ModIO.ModIOUnityAsync.AddModComment}

```csharp
public static async Task<ResultAnd<ModComment>> AddModComment(ModId modId, CommentDetails commentDetails)
```

Retrieves a list of ModDependenciesObjects that represent mods that depend on a mod.


###### Remarks


This function returns only immediate mod dependencies, meaning that if you need the dependencies for the dependent
mods, you will have to make multiple calls and watch for circular dependencies.


###### See Also

[`ModId`](#ModIO.ModId)
[`Result`](#ModIO.ResultAnd)
[`ResultAnd`](#ModIO.ResultAnd)
`ModDependenciesObject`
[`ModIOUnity.GetModDependencies`](#ModIO.ModIOUnity.GetModDependencies)
```csharp

async void Example()
{
    ModId modId = new ModId(1234);
    var resultAnd = await ModIOUnityAsync.GetModDependencies(modId);
    if (resultAnd.result.Succeeded())
    {
        ModDependenciesObject[] modDependenciesObjects = resultAnd.value;
        Debug.Log("retrieved mods dependencies");
    }
    else
    {
        Debug.Log("failed to get mod dependencies");
    }
}

```


###### Parameters

`modId` 
`commentDetails` 

###### Returns




#### DeleteModComment{#ModIO.ModIOUnityAsync.DeleteModComment}

```csharp
public static async Task<Result> DeleteModComment(ModId modId, long commentId)
```

Delete a comment from a mod profile. Successful request will return 204 No Content and fire a MOD_COMMENT_DELETED event.


###### Parameters

`modId` Id of the mod to add the comment to
`commentId` The id for the comment to be removed

###### See Also

[`Result`](#ModIO.ResultAnd)
[`ModComment`](#ModIO.ModIOUnity.GetModComments)
[`CommentDetails`](#ModIO.CommentDetails)
[`DeleteModComment`](#ModIO.ModIOUnity.DeleteModComment)
[`ModIOUnity.DeleteModComment`](#ModIO.ModIOUnity.DeleteModComment)
`EditModComment`
```csharp

private ModId modId;
private long commentId;
void Example()
{
   var result = await ModIOUnityAsync.DeleteModComment(modId, commentId);
   if (result.Succeeded())
   {
       Debug.Log("deleted comment");
   }
   else
   {
       Debug.Log("failed to delete comment");
   }
}

```



#### UpdateModComment{#ModIO.ModIOUnityAsync.UpdateModComment}

```csharp
public static async Task<ResultAnd<ModComment>> UpdateModComment(ModId modId, string content, long commentId)
```

Update a comment for the corresponding mod. Successful request will return the updated Comment Object.


###### Parameters

`modId` Id of the mod the comment is on
`content` Updated contents of the comment.
`commentId` The id for the comment you wish to edit

###### See Also

[`ResultAnd`](#ModIO.ResultAnd)
[`ModComment`](#ModIO.ModIOUnity.GetModComments)
[`ModIOUnity.UpdateModComment`](#ModIO.ModIOUnity.UpdateModComment)
```csharp

private string content = "This is a Comment";
long commentId = 12345;
ModId modId = (ModId)1234;
async void UpdateMod()
{
    var response = await ModIOUnityAsync.UpdateModComment(modId, content, commentId);
    if(response.result.Succeeded())
    {
        Debug.Log("Successfully Updated Comment!");
    }
    else
    {
        Debug.Log("Failed to Update Comment!");
    }
}

```



#### GetModDependencies{#ModIO.ModIOUnityAsync.GetModDependencies}

```csharp
public static async Task<ResultAnd<ModDependencies[]>> GetModDependencies(ModId modId)
```



#### GetCurrentUserRatings{#ModIO.ModIOUnityAsync.GetCurrentUserRatings}

```csharp
public static async Task<ResultAnd<Rating[]>> GetCurrentUserRatings()
```

Get all mod rating's submitted by the authenticated user. Successful request will return an array of Rating Objects.


###### See Also

[`ModId`](#ModIO.ModId)
[`Rating`](#ModIO.ModIOUnity.GetCurrentUserRatings)
[`ResultAnd`](#ModIO.ResultAnd)
```csharp

async void Example()
{
   ResultAnd<Rating[]> response = await ModIOUnityAsync.GetCurrentUserRatings();
   if (response.result.Succeeded())
   {
       foreach(var ratingObject in response.value)
       {
           Debug.Log($"retrieved rating {ratingObject.rating} for {ratingObject.modId}");
       }
   }
   else
   {
       Debug.Log("failed to get ratings");
   }
}

```



#### GetCurrentUserRatingFor{#ModIO.ModIOUnityAsync.GetCurrentUserRatingFor}

```csharp
public static async Task<ResultAnd<ModRating>> GetCurrentUserRatingFor(ModId modId)
```

Gets the rating that the current user has given for a specified mod. You must have an
authenticated session for this to be successful.


###### Remarks

Note that the rating can be 'None'

###### Parameters

`modId` the id of the mod to check for a rating

###### See Also

[`ModRating`](#ModIO.ModRating)
[`ModId`](#ModIO.ModId)
[`ResultAnd`](#ModIO.ResultAnd)
```csharp

async void Example()
{
   ModId modId = new ModId(1234);
   ResultAnd<ModRating> response = await ModIOUnityAsync.GetCurrentUserRatingFor(modId);
   if (response.result.Succeeded())
   {
       Debug.Log($"retrieved rating: {response.value}");
   }
   else
   {
       Debug.Log("failed to get rating");
   }
}

```



#### RateMod{#ModIO.ModIOUnityAsync.RateMod}

```csharp
public static async Task<Result> RateMod(ModId modId, ModRating rating)
```

Used to submit a rating for a specified mod.


###### Remarks


This can be used to change/overwrite previous ratings of the current user.


###### Parameters

`modId` the m=ModId of the mod being rated
`rating` the rating to give the mod. Allowed values include ModRating.Positive, ModRating.Negative, ModRating.None

###### See Also

[`ModRating`](#ModIO.ModRating)
[`Result`](#ModIO.ResultAnd)
[`ModId`](#ModIO.ModId)
```csharp

ModProfile mod;
async void Example()
{
    Result result = await ModIOUnityAsync.RateMod(mod.id, ModRating.Positive);
    if (result.Succeeded())
    {
        Debug.Log("Successfully rated mod");
    }
    else
    {
        Debug.Log("Failed to rate mod");
    }
}

```



#### SubscribeToMod{#ModIO.ModIOUnityAsync.SubscribeToMod}

```csharp
public static async Task<Result> SubscribeToMod(ModId modId)
```

Adds the specified mod to the current user's subscriptions.


###### Remarks


If mod management has been enabled via ModIOUnity.EnableModManagement() then the mod
will be downloaded and installed.


###### Parameters

`modId` ModId of the mod you want to subscribe to

###### See Also

[`Result`](#ModIO.ResultAnd)
[`ModId`](#ModIO.ModId)
`ModIOUnity.EnableModManagement(ModIO.ModManagementEventDelegate)`
[`ModIOUnity.GetCurrentModManagementOperation`](#ModIO.ModIOUnity.GetCurrentModManagementOperation)
```csharp

ModProfile mod;
async void Example()
{
    Result result = await ModIOUnityAsync.SubscribeToMod(mod.id);
    if (result.Succeeded())
    {
        Debug.Log("Successfully subscribed to mod");
    }
    else
    {
        Debug.Log("Failed to subscribe to mod");
    }
}

```



#### UnsubscribeFromMod{#ModIO.ModIOUnityAsync.UnsubscribeFromMod}

```csharp
public static async Task<Result> UnsubscribeFromMod(ModId modId)
```

Removes the specified mod from the current user's subscriptions.


###### Remarks


If mod management has been enabled via ModIOUnity.EnableModManagement() then the mod
will be uninstalled at the next opportunity.


###### Parameters

`modId` ModId of the mod you want to unsubscribe from

###### See Also

[`Result`](#ModIO.ResultAnd)
[`ModId`](#ModIO.ModId)
`ModIOUnity.EnableModManagement(ModIO.ModManagementEventDelegate)`
[`ModIOUnity.GetCurrentModManagementOperation`](#ModIO.ModIOUnity.GetCurrentModManagementOperation)
```csharp

ModProfile mod;
async void Example()
{
    Result result = await ModIOUnityAsync.UnsubscribeFromMod(mod.id);
    if (result.Succeeded())
    {
        Debug.Log("Successfully unsubscribed from mod");
    }
    else
    {
        Debug.Log("Failed to unsubscribe from mod");
    }
}

```



#### GetCurrentUser{#ModIO.ModIOUnityAsync.GetCurrentUser}

```csharp
public static async Task<ResultAnd<UserProfile>> GetCurrentUser(bool allowOfflineUser
```

Gets the current user's UserProfile struct. Containing their mod.io username, user id,
language, timezone and download references for their avatar.


###### Remarks


This requires the current session to have an authenticated user, otherwise
Result.IsAuthenticationError() from the Result will equal true.


###### Parameters

`allowOfflineUser` True if we allow the last saved user data if the server cannot be reached. Note that Result will still be a NetworkError

###### See Also

[`Result`](#ModIO.ResultAnd)
[`UserProfile`](#ModIO.UserProfile)
[`IsAuthenticated`](#ModIO.ModIOUnity.IsAuthenticated)
```csharp

async void Example()
{
    ResultAnd<UserProfile> response = await ModIOUnityAsync.GetCurrentUser();
    if (response.result.Succeeded())
    {
        Debug.Log("Got user: " + response.value.username);
    }
    else
    {
        Debug.Log("failed to get user");
    }
}

```



#### DownloadNow{#ModIO.ModIOUnityAsync.DownloadNow}

```csharp
public static async void DownloadNow(ModId modId)
```

Stops any current download and starts downloading the selected mod.


###### Parameters

`modId` ModId of the mod you want to remove dependencies from

###### See Also

[`Result`](#ModIO.ResultAnd)
[`ModId`](#ModIO.ModId)
[`ModIOUnityAsync.DownloadNow`](#ModIO.ModIOUnityAsync.DownloadNow)
```csharp

ModId modId;
void Example()
{
    Result result = ModIOUnity.DownloadNow(modId);
    if (result.Succeeded())
    {
        Debug.Log("Successful");
    }
    else
    {
        Debug.Log("Failed");
    }
}

```



#### MuteUser{#ModIO.ModIOUnityAsync.MuteUser}

```csharp
public static async Task<Result> MuteUser(long userId)
```

Mutes a user which effectively hides any content from that specified user


###### Remarks

The userId can be found from the UserProfile. Such as ModProfile.creator.userId

###### Parameters

`userId` The id of the user to be muted

###### See Also

[`UserProfile`](#ModIO.UserProfile)


#### UnmuteUser{#ModIO.ModIOUnityAsync.UnmuteUser}

```csharp
public static async Task<Result> UnmuteUser(long userId)
```

Un-mutes a user which effectively reveals previously hidden content from that user


###### Remarks

The userId can be found from the UserProfile. Such as ModProfile.creator.userId

###### Parameters

`userId` The id of the user to be muted

###### See Also

[`UserProfile`](#ModIO.UserProfile)


#### GetMutedUsers{#ModIO.ModIOUnityAsync.GetMutedUsers}

```csharp
public static async Task<ResultAnd<UserProfile[]>> GetMutedUsers()
```

Gets an array of all the muted users that the current authenticated user has muted.


###### Remarks

This has a cap of 1,000 users. It will not return more then that.

###### See Also

[`UserProfile`](#ModIO.UserProfile)


#### FetchUpdates{#ModIO.ModIOUnityAsync.FetchUpdates}

```csharp
public static async Task<Result> FetchUpdates()
```

This retrieves the user's ratings and subscriptions from the mod.io server and synchronises
it with our local instance of the user's data. If mod management has been enabled
via ModIOUnity.EnableModManagement() then it may begin to install/uninstall mods.
It's recommended you use this method after initializing the plugin and after
successfully authenticating the user.


###### Remarks


This requires the current session to have an authenticated user, otherwise
Result.IsAuthenticationError() from the Result will equal true.


###### See Also

[`Result`](#ModIO.ResultAnd)
`ModIOUnity.EnableModManagement(ModIO.ModManagementEventDelegate)`
[`IsAuthenticated`](#ModIO.ModIOUnity.IsAuthenticated)
[`RequestAuthenticationEmail`](#ModIO.ModIOUnity.RequestAuthenticationEmail)
[`SubmitEmailSecurityCode`](#ModIO.ModIOUnity.SubmitEmailSecurityCode)
[`AuthenticateUserViaDiscord`](#ModIO.ModIOUnity.AuthenticateUserViaDiscord)
[`AuthenticateUserViaGoogle`](#ModIO.ModIOUnity.AuthenticateUserViaGoogle)
[`AuthenticateUserViaGOG`](#ModIO.ModIOUnity.AuthenticateUserViaGOG)
[`AuthenticateUserViaItch`](#ModIO.ModIOUnity.AuthenticateUserViaItch)
[`AuthenticateUserViaOculus`](#ModIO.ModIOUnity.AuthenticateUserViaOculus)
[`AuthenticateUserViaSteam`](#ModIO.ModIOUnity.AuthenticateUserViaSteam)
[`AuthenticateUserViaSwitch`](#ModIO.ModIOUnity.AuthenticateUserViaSwitch)
[`AuthenticateUserViaXbox`](#ModIO.ModIOUnity.AuthenticateUserViaXbox)
```csharp

async void Example()
{
    Result result = await ModIOUnityAsync.FetchUpdates();
    if (result.Succeeded())
    {
        Debug.Log("updated user subscriptions");
    }
    else
    {
        Debug.Log("failed to get user subscriptions");
    }
}

```



#### AddDependenciesToMod{#ModIO.ModIOUnityAsync.AddDependenciesToMod}

```csharp
public static async Task<Result> AddDependenciesToMod(ModId modId, ICollection<ModId> dependencies)
```

Adds the specified mods as dependencies to an existing mod.


###### Remarks


If the dependencies already exist they will be ignored and the result will return success


###### Parameters

`modId` ModId of the mod you want to add dependencies to
`dependencies` The ModIds that you want to add (max 5 at a time)

###### See Also

[`Result`](#ModIO.ResultAnd)
[`ModId`](#ModIO.ModId)
[`ModIOUnity.AddDependenciesToMod`](#ModIO.ModIOUnity.AddDependenciesToMod)
[`ModIOUnity.RemoveDependenciesFromMod`](#ModIO.ModIOUnity.RemoveDependenciesFromMod)
[`ModIOUnityAsync.RemoveDependenciesFromMod`](#ModIO.ModIOUnityAsync.RemoveDependenciesFromMod)
```csharp

async void Example()
{
    var dependencies = new List<ModId>
    {
        (ModId)1001,
        (ModId)1002,
        (ModId)1003
    };
    Result result = await ModIOUnityAsync.AddDependenciesToMod(mod.id, dependencies);
    if (result.Succeeded())
    {
        Debug.Log("Successfully added dependencies to mod");
    }
    else
    {
        Debug.Log("Failed to add dependencies to mod");
    }
}

```



#### RemoveDependenciesFromMod{#ModIO.ModIOUnityAsync.RemoveDependenciesFromMod}

```csharp
public static async Task<Result> RemoveDependenciesFromMod(ModId modId, ICollection<ModId> dependencies)
```

Removes the specified mods as dependencies for another existing mod.


###### Remarks


If the dependencies dont exist they will be ignored and the result will return success


###### Parameters

`modId` ModId of the mod you want to remove dependencies from
`dependencies` The ModIds that you want to remove (max 5 at a time)

###### See Also

[`Result`](#ModIO.ResultAnd)
[`ModId`](#ModIO.ModId)
`dependencies`
[`ModIOUnity.AddDependenciesToMod`](#ModIO.ModIOUnity.AddDependenciesToMod)
[`ModIOUnity.RemoveDependenciesFromMod`](#ModIO.ModIOUnity.RemoveDependenciesFromMod)
[`ModIOUnityAsync.AddDependenciesToMod`](#ModIO.ModIOUnityAsync.AddDependenciesToMod)
```csharp

void Example()
{
    var dependencies = new List<ModId>
    {
        (ModId)1001,
        (ModId)1002,
        (ModId)1003
    };
    Result result = await ModIOUnityAsync.RemoveDependenciesFromMod(mod.id, dependencies);
    if (result.Succeeded())
    {
        Debug.Log("Successfully removed dependencies from mod");
    }
    else
    {
        Debug.Log("Failed to removed dependencies from mod");
    }
}

```



#### GetModKvpMetadata{#ModIO.ModIOUnityAsync.GetModKvpMetadata}

```csharp
public static async Task<ResultAnd<Dictionary<string, string>>> GetModKvpMetadata(long modId)
```

Get all metadata stored by the game developer for this mod as searchable key value pairs. Successful request will return an array of Metadata KVP Objects.


###### See Also

`MetadataKvpObject`
[`ModIOUnity.GetModKvpMetadata`](#ModIO.ModIOUnity.GetModKvpMetadata)
[`ModIOUnityAsync.AddModKvpMetadata`](#ModIO.ModIOUnityAsync.AddModKvpMetadata)
[`ModIOUnityAsync.DeleteModKvpMetadata`](#ModIO.ModIOUnityAsync.DeleteModKvpMetadata)
```csharp

long modId;
void Example()
{
    ResultAnd<MetadataKvp[]> r = await ModIOUnityAsync.GetModKvpMetadata(modId);
    if (r.result.Succeeded())
    {
        Debug.Log("Successfully received metadata for modId");
        foreach(var kvp in r.value)
        {
            Debug.Log($"Key: {kvp.key}, Value: {kvp.value}");
        }
    }
    else
    {
        Debug.Log("Failed to get metadata for modId.");
    }
}

```



#### AddModKvpMetadata{#ModIO.ModIOUnityAsync.AddModKvpMetadata}

```csharp
public static async Task<Result> AddModKvpMetadata(long modId, Dictionary<string, string> metadata)
```

Add metadata for this mod as searchable key value pairs. Metadata is useful to define how a mod works, or other information you need to display and manage the mod.
Successful request will return Message Object. For example: A mod might change gravity and the rate of fire of weapons, you could define these properties as key
value pairs. We recommend the mod upload tool you create defines and submits metadata behind the scenes, because if these settings affect gameplay, invalid
information may cause problems.

Metadata can also be stored as metadata_blob in the Mod Object.



###### See Also

`MetadataKvpObject`
[`ModIOUnity.AddModKvpMetadata`](#ModIO.ModIOUnity.AddModKvpMetadata)
[`ModIOUnityAsync.GetModKvpMetadata`](#ModIO.ModIOUnityAsync.GetModKvpMetadata)
[`ModIOUnityAsync.DeleteModKvpMetadata`](#ModIO.ModIOUnityAsync.DeleteModKvpMetadata)
```csharp

long modId;
Dictionary<string, string> metadata
void Example()
{
    Result result = await ModIOUnityAsync.AddModKvpMetadata(modId, metadata);
    if (result.Succeeded())
    {
        Debug.Log("Successfully added metadata.");
    }
    else
    {
        Debug.Log("Failed to add metadata.");
    }
}

```



#### DeleteModKvpMetadata{#ModIO.ModIOUnityAsync.DeleteModKvpMetadata}

```csharp
public static async Task<Result> DeleteModKvpMetadata(long modId, Dictionary<string, string> metadata)
```

Delete key value pairs metadata defined for this mod. Successful request will return 204 No Content.


###### See Also

`MetadataKvpObject`
[`ModIOUnity.DeleteModKvpMetadata`](#ModIO.ModIOUnity.DeleteModKvpMetadata)
[`ModIOUnityAsync.AddModKvpMetadata`](#ModIO.ModIOUnityAsync.AddModKvpMetadata)
[`ModIOUnityAsync.GetModKvpMetadata`](#ModIO.ModIOUnityAsync.GetModKvpMetadata)
```csharp

long modId;
Dictionary<string, string> metadata;
void Example()
{
    Result result = await ModIOUnityAsync.DeleteModKvpMetadata(modId, metadata);
    if (result.Succeeded())
    {
        Debug.Log("Successfully deleted metadata");
    }
    else
    {
        Debug.Log("Failed to delete metadata.");
    }
}

```



#### CreateModProfile{#ModIO.ModIOUnityAsync.CreateModProfile}

```csharp
public static async Task<ResultAnd<ModId>> CreateModProfile(CreationToken token,  ModProfileDetails modProfileDetails)
```

Creates a new mod profile on the mod.io server based on the details provided from the
ModProfileDetails object provided. Note that you must have a logo, name and summary
assigned in ModProfileDetails in order for this to work.


###### Remarks


Note that this will create a new profile on the server and can be viewed online through
a browser.


###### Parameters

`token` the token allowing a new unique profile to be created from ModIOUnity.GenerateCreationToken()
`modProfileDetails` the mod profile details to apply to the mod profile being created

###### See Also

[`ModIOUnity.GenerateCreationToken`](#ModIO.ModIOUnity.GenerateCreationToken)
[`CreationToken`](#ModIO.ModIOUnity.GenerateCreationToken)
[`ModProfileDetails`](#ModIO.ModProfileDetails)
[`Result`](#ModIO.ResultAnd)
[`ModId`](#ModIO.ModId)
```csharp

ModId newMod;
Texture2D logo;
CreationToken token;
async void Example()
{
    token = ModIOUnity.GenerateCreationToken();
    ModProfileDetails profile = new ModProfileDetails();
    profile.name = "mod name";
    profile.summary = "a brief summary about this mod being submitted"
    profile.logo = logo;
    ResultAnd<ModId> response = await ModIOUnityAsync.CreateModProfile(token, profile);
    if (response.result.Succeeded())
    {
        newMod = response.value;
        Debug.Log("created new mod profile with id " + response.value.ToString());
    }
    else
    {
        Debug.Log("failed to create new mod profile");
    }
}

```



#### EditModProfile{#ModIO.ModIOUnityAsync.EditModProfile}

```csharp
public static async Task<Result> EditModProfile(ModProfileDetails modprofile)
```

This is used to edit or change data in an existing mod profile on the mod.io server.


###### Remarks


You need to assign the ModId of the mod you want to edit inside of the ModProfileDetails
object included in the parameters


###### Parameters

`modprofile` the mod profile details to apply to the mod profile being created

###### See Also

[`ModProfileDetails`](#ModIO.ModProfileDetails)
[`Result`](#ModIO.ResultAnd)
```csharp

ModId modId;
async void Example()
{
    ModProfileDetails profile = new ModProfileDetails();
    profile.modId = modId;
    profile.summary = "a new brief summary about this mod being edited"
    Result result = await ModIOUnityAsync.EditModProfile(profile);
    if (result.Succeeded())
    {
        Debug.Log("edited mod profile");
    }
    else
    {
        Debug.Log("failed to edit mod profile");
    }
}

```



#### UploadModfile{#ModIO.ModIOUnityAsync.UploadModfile}

```csharp
public static async Task<Result> UploadModfile(ModfileDetails modfile)
```

Used to upload a mod file to a mod profile on the mod.io server. A mod file is the
actual archive of a mod. This method can be used to update a mod to a newer version
(you can include changelog information in ModfileDetails).


###### Parameters

`modfile` the mod file and details to upload

###### See Also

[`Result`](#ModIO.ResultAnd)
[`ModfileDetails`](#ModIO.ModfileDetails)
[`ArchiveModProfile`](#ModIO.ModIOUnity.ArchiveModProfile)
[`ModIOUnity.GetCurrentUploadHandle`](#ModIO.ModIOUnity.GetCurrentUploadHandle)
```csharp

ModId modId;
async void Example()
{
    ModfileDetails modfile = new ModfileDetails();
    modfile.modId = modId;
    modfile.directory = "files/mods/mod_123";
    Result result = await ModIOUnityAsync.UploadModfile(modfile);
    if (result.Succeeded())
    {
        Debug.Log("uploaded mod file");
    }
    else
    {
        Debug.Log("failed to upload mod file");
    }
}

```



#### UploadModMedia{#ModIO.ModIOUnityAsync.UploadModMedia}

```csharp
public static Task<Result> UploadModMedia(ModProfileDetails modProfileDetails)
```

This is used to update the logo of a mod or the gallery images. This works very similar
to EditModProfile except it only affects the images.


###### Parameters

`modProfileDetails` this holds the reference to the images you wish to upload

###### See Also

[`ModProfileDetails`](#ModIO.ModProfileDetails)
[`Result`](#ModIO.ResultAnd)
[`EditModProfile`](#ModIO.ModIOUnity.EditModProfile)
```csharp

ModId modId;
Texture2D newTexture;
async void Example()
{
    ModProfileDetails profile = new ModProfileDetails();
    profile.modId = modId;
    profile.logo = newTexture;
    Result result = await ModIOUnityAsync.UploadModMedia(profile);
    if (result.Succeeded())
    {
        Debug.Log("uploaded new mod logo");
    }
    else
    {
        Debug.Log("failed to uploaded mod logo");
    }
}

```



#### ReorderModMedia{#ModIO.ModIOUnityAsync.ReorderModMedia}

```csharp
public static Task<ResultAnd<ModProfile>> ReorderModMedia(ModId modId, string[] orderedFilenames)
```
Reorder a mod's gallery images. `orderedFilenames` must represent every entry in  (or any of the size-variant arrays) or the operation will fail.
Returns the updated `ModProfile`.



#### DeleteModMedia{#ModIO.ModIOUnityAsync.DeleteModMedia}

```csharp
public static Task<ResultAnd<ModProfile>> DeleteModMedia(ModId modId, string[] filenames)
```
Delete gallery images from a mod. Filenames can be sourced from  (or any of the size-variant arrays).
Returns the updated `ModProfile`.



#### ArchiveModProfile{#ModIO.ModIOUnityAsync.ArchiveModProfile}

```csharp
public static async Task<Result> ArchiveModProfile(ModId modId)
```

Removes a mod from being visible on the mod.io server.


###### Remarks


If you want to delete a mod permanently you can do so from a web browser.


###### Parameters

`modId` the id of the mod to delete

###### See Also

[`Result`](#ModIO.ResultAnd)
[`CreateModProfile`](#ModIO.ModIOUnity.CreateModProfile)
[`EditModProfile`](#ModIO.ModIOUnity.EditModProfile)
```csharp

ModId modId;
async void Example()
{
    Result result = await ModIOUnityAsync.ArchiveModProfile(modId);
    if (result.Succeeded())
    {
        Debug.Log("archived mod profile");
    }
    else
    {
        Debug.Log("failed to archive mod profile");
    }
}

```



#### GetCurrentUserCreations{#ModIO.ModIOUnityAsync.GetCurrentUserCreations}

```csharp
public static async Task<ResultAnd<ModPage>> GetCurrentUserCreations(SearchFilter filter)
```

Get all mods the authenticated user added or is a team member of.
Successful request will return an array of Mod Objects. We
recommended reading the filtering documentation to return only
the records you want.



#### AddTags{#ModIO.ModIOUnityAsync.AddTags}

```csharp
public static async Task<Result> AddTags(ModId modId, string[] tags)
```

Adds the provided tags to the specified mod id. In order for this to work the
authenticated user must have permission to edit the specified mod. Only existing tags
as part of the game Id will be added.


###### Parameters

`modId` Id of the mod to add tags to
`tags` array of tags to be added

###### See Also

[`Result`](#ModIO.ResultAnd)
[`DeleteTags`](#ModIO.ModIOUnity.DeleteTags)
[`ModIOUnityAsync.AddTags`](#ModIO.ModIOUnityAsync.AddTags)
```csharp

ModId modId;
string[] tags;
async void Example()
{
    Result result = await ModIOUnity.AddTags(modId, tags);
    if (result.Succeeded())
    {
        Debug.Log("added tags");
    }
    else
    {
        Debug.Log("failed to add tags");
    }
}

```



#### DeleteTags{#ModIO.ModIOUnityAsync.DeleteTags}

```csharp
public static async Task<Result> DeleteTags(ModId modId, string[] tags)
```

Deletes the specified tags from the mod. In order for this to work the
authenticated user must have permission to edit the specified mod.


###### Parameters

`modId` the id of the mod for deleting tags
`tags` array of tags to be deleted

###### See Also

[`Result`](#ModIO.ResultAnd)
[`AddTags`](#ModIO.ModIOUnity.AddTags)
[`ModIOUnityAsync.DeleteTags`](#ModIO.ModIOUnityAsync.DeleteTags)
```csharp

ModId modId;
string[] tags;
async void Example()
{
    Result result = await ModIOUnity.DeleteTags(modId, tags);
    if (result.Succeeded())
    {
        Debug.Log("deleted tags");
    }
    else
    {
        Debug.Log("failed to delete tags");
    }
}

```



#### GetMultipartUploadParts{#ModIO.ModIOUnityAsync.GetMultipartUploadParts}

```csharp
public static async Task<ResultAnd<PaginatedResponse<MultipartUploadPart>>> GetMultipartUploadParts(ModId modId, string uploadId, SearchFilter filter)
```

Get all uploaded parts for a corresponding upload session. Successful request will return an array of Multipart
Upload Part Objects.We recommended reading the filtering documentation to return only the records you want.
The Mutlipart feature is automatically used when uploading a mod via UploadModFile and is limited to one upload at a time.
This function is optional and is provided to allow for more control over uploading large files for those who require it.


###### Parameters

`modId` the id of the mod
`uploadId` A universally unique identifier (UUID) that represents the upload session.
`filter` The filter to apply when searching through comments (can only apply
pagination parameters, Eg. page size and page index)

###### See Also

[`SearchFilter`](#ModIO.SearchFilter)
[`ModIOUnity.GetMultipartUploadParts`](#ModIO.ModIOUnity.GetMultipartUploadParts)
[`ModIOUnity.UploadModfile`](#ModIO.ModIOUnity.UploadModfile)
```csharp

ModId modId;
string uploadId;
private void Example()
{
    var response = await ModIOUnityAsync.GetMultipartUploadParts(modId, uploadId);
    if (response.result.Succeeded())
    {
        Debug.Log("Received Upload Sessions Object");
    }
    else
    {
        Debug.Log("Failed to get Upload Sessions Object");
    }
}

```



#### GetMultipartUploadSessions{#ModIO.ModIOUnityAsync.GetMultipartUploadSessions}

```csharp
public static async Task<ResultAnd<PaginatedResponse<MultipartUpload>>> GetMultipartUploadSessions(ModId modId, SearchFilter filter)
```

Get all upload sessions belonging to the authenticated user for the corresponding mod. Successful request will return an
array of Multipart Upload Part Objects. We recommended reading the filtering documentation to return only the records you want.
The Mutlipart feature is automatically used when uploading a mod via UploadModFile and is limited to one upload at a time.
This function is optional and is provided to allow for more control over uploading large files for those who require it.


###### Parameters

`modId` the id of the mod
`filter` The filter to apply when searching through comments (can only apply
pagination parameters, Eg. page size and page index)

###### See Also

[`SearchFilter`](#ModIO.SearchFilter)
[`ModIOUnity.GetMultipartUploadSessions`](#ModIO.ModIOUnity.GetMultipartUploadSessions)
[`ModIOUnity.UploadModfile`](#ModIO.ModIOUnity.UploadModfile)
```csharp

ModId modId;
private void Example()
{
    var response = await ModIOUnity.GetMultipartUploadSessions(modId);
    if (response.result.Succeeded())
    {
        Debug.Log("Received Upload Sessions");
    }
    else
    {
        Debug.Log("Failed to get Upload Sessions");
    }
}

```



#### AddMultipartUploadParts{#ModIO.ModIOUnityAsync.AddMultipartUploadParts}

```csharp
public static async Task<Result> AddMultipartUploadParts(ModId modId, string uploadId, string contentRange, string digest, byte[] rawBytes)
```

Add a new multipart upload part to an existing upload session. All parts must be exactly 50MB (Mebibyte) in size unless it is the
final part which can be smaller. A successful request will return a single Multipart Upload Part Object.
NOTE: Unlike other POST endpoints on this service, the body of this request should contain no form parameters and instead be the data
described in the byte range of the Content-Range header of the request.
The Mutlipart feature is automatically used when uploading a mod via UploadModFile and is limited to one upload at a time.
This function is optional and is provided to allow for more control over uploading large files for those who require it.


###### Parameters

`modId` the id of the mod
`uploadId` A universally unique identifier (UUID) that represents the upload session.
`contentRange` The Content-Range of the file you are sending.
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range
`digest` Optional Digest for part integrity checks once the part has been uploaded.
`rawBytes` Bytes for the file part to be uploaded

###### See Also

[`ModIOUnity.AddMultipartUploadParts`](#ModIO.ModIOUnity.AddMultipartUploadParts)
[`ModIOUnity.UploadModfile`](#ModIO.ModIOUnity.UploadModfile)
```csharp

ModId modId;
string uploadId;
string contentRange;
string digest;
byte[] rawBytes;
private void Example()
{
    var result = await ModIOUnity.AddMultipartUploadParts(modId, uploadId, contentRange, digest, rawBytes);
    if (result.Succeeded())
    {
        Debug.Log("Added a part to Upload Session");
    }
    else
    {
        Debug.Log("Failed to add a part to Upload Session");
    }
}

```



#### CreateMultipartUploadSession{#ModIO.ModIOUnityAsync.CreateMultipartUploadSession}

```csharp
public static async Task<ResultAnd<MultipartUpload>> CreateMultipartUploadSession(ModId modId, string filename)
```

Create a new multipart upload session. A successful request will return a single Multipart Upload Object.
NOTE: The multipart upload system is designed for uploading large files up to 20GB in size. If uploading
files less than 100MB, we recommend using the Add Modfile endpoint.
The Mutlipart feature is automatically used when uploading a mod via UploadModFile and is limited to one upload at a time.
This function is optional and is provided to allow for more control over uploading large files for those who require it.


###### Parameters

`modId` the id of the mod
`nonce` An optional nonce to provide to prevent duplicate upload sessions from being created concurrently. Maximum of 64 characters.
`filename` The filename of the file once all the parts have been uploaded. The filename must include the .zip extension and cannot exceed 100 characters.

###### See Also

[`ModIOUnity.CreateMultipartUploadSession`](#ModIO.ModIOUnity.CreateMultipartUploadSession)
[`ModIOUnity.UploadModfile`](#ModIO.ModIOUnity.UploadModfile)
```csharp

ModId modId;
string filename;
string nonce;
private void Example()
{
    var response = await ModIOUnity.CreateMultipartUploadSession(modId, filename, nonce);
    if (response.result.Succeeded())
    {
        Debug.Log("Created Upload Session");
    }
    else
    {
        Debug.Log("Failed to Create Upload Session");
    }
}

```



#### DeleteMultipartUploadSession{#ModIO.ModIOUnityAsync.DeleteMultipartUploadSession}

```csharp
public static async Task<Result> DeleteMultipartUploadSession(ModId modId, string uploadId)
```

Terminate an active multipart upload session, a successful request will return 204 No Content.
The Mutlipart feature is automatically used when uploading a mod via UploadModFile and is limited to one upload at a time.
This function is optional and is provided to allow for more control over uploading large files for those who require it.


###### Parameters

`modId` the id of the mod
`uploadId` A universally unique identifier (UUID) that represents the upload session.

###### See Also

[`ModIOUnity.DeleteMultipartUploadSession`](#ModIO.ModIOUnity.DeleteMultipartUploadSession)
[`ModIOUnity.UploadModfile`](#ModIO.ModIOUnity.UploadModfile)
```csharp

ModId modId;
string uploadId;
private void Example()
{
    var result = await ModIOUnity.DeleteMultipartUploadSession(modId, uploadId);
    if (result.Succeeded())
    {
        Debug.Log("Deleted Upload Session");
    }
    else
    {
        Debug.Log("Failed to Delete Upload Session");
    }
}

```



#### CompleteMultipartUploadSession{#ModIO.ModIOUnityAsync.CompleteMultipartUploadSession}

```csharp
public static async Task<Result> CompleteMultipartUploadSession(ModId modId, string uploadId)
```

Complete an active multipart upload session, this endpoint assumes that you have already uploaded all individual parts.
A successful request will return a 200 OK response code and return a single Multipart Upload Object.
The Mutlipart feature is automatically used when uploading a mod via UploadModFile and is limited to one upload at a time.
This function is optional and is provided to allow for more control over uploading large files for those who require it.


###### Parameters

`modId` the id of the mod
`uploadId` A universally unique identifier (UUID) that represents the upload session.

###### See Also

[`ModIOUnity.CompleteMultipartUploadSession`](#ModIO.ModIOUnity.CompleteMultipartUploadSession)
[`ModIOUnity.UploadModfile`](#ModIO.ModIOUnity.UploadModfile)
```csharp

ModId modId;
string uploadId;
private void Example()
{
    var result = await ModIOUnity.CompleteMultipartUploadSession(modId, uploadId);
    if (result.Succeeded())
    {
        Debug.Log("Completed Session");
    }
    else
    {
        Debug.Log("Failed to complete session");
    }
}

```



#### DownloadImage{#ModIO.ModIOUnityAsync.DownloadImage}

```csharp
public static async Task<ResultAnd<byte[]>> DownloadImage(DownloadReference downloadReference)
```

Downloads a texture based on the specified download reference.


###### Remarks


You can get download references from UserProfiles and ModProfiles


###### Parameters

`downloadReference` download reference for the texture (eg UserObject.avatar_100x100)

###### See Also

[`Result`](#ModIO.ResultAnd)
[`DownloadReference`](#ModIO.DownloadReference)
`Texture2D`
```csharp

ModProfile mod;
async void Example()
{
    ResultAnd<Texture2D> response = await ModIOUnityAsync.DownloadTexture(mod.logoImage_320x180);
    if (response.result.Succeeded())
    {
        Debug.Log("downloaded the mod logo texture");
    }
    else
    {
        Debug.Log("failed to download the mod logo texture");
    }
}

```



#### Report{#ModIO.ModIOUnityAsync.Report}

```csharp
public static async Task<Result> Report(Report report)
```

Reports a specified mod to mod.io.


###### Parameters

`report` the object containing all of the details of the report you are sending

###### See Also

[`Report`](#ModIO.ModIOUnity.Report)
[`Result`](#ModIO.ResultAnd)
```csharp

async void Example()
{
    Report report = new Report(new ModId(123),
                                ReportType.Generic,
                                "reporting this mod for a generic reason",
                                "JohnDoe",
                                "johndoe@mod.io");
    Result result = await ModIOUnityAsync.Report(report);
    if (result.Succeeded())
    {
        Debug.Log("successfully sent a report");
    }
    else
    {
        Debug.Log("failed to send a report");
    }
}

```



#### SyncEntitlements{#ModIO.ModIOUnityAsync.SyncEntitlements}

```csharp
public static async Task<ResultAnd<Entitlement[]>> SyncEntitlements()
```

Convert an in-game consumable that a user has purchased on Steam, Xbox, or Psn into a users
mod.io inventory. This endpoint will consume the entitlement on behalf of the user against
the portal in which the entitlement resides (i.e. Steam, Xbox, Psn).


###### See Also

[`Entitlement`](#ModIO.ModIOUnity.SyncEntitlements)
`EntitlementObject`
[`ModIOUnity.SyncEntitlements`](#ModIO.ModIOUnity.SyncEntitlements)
```csharp

private async void Example()
{
    var response = await ModIOUnity.SyncEntitlements();
    if (response.result.Succeeded())
    {
        Debug.Log("Sync Entitlements Success");
    }
    else
    {
        Debug.Log("Failed to Sync Entitlements");
    }
}

```


#### PurchaseMod{#ModIO.ModIOUnityAsync.PurchaseMod}

```csharp
public static async Task<ResultAnd<CheckoutProcess>> PurchaseMod(ModId modId, int displayAmount, string idempotent, bool subscribeOnPurchase)
```

Complete a marketplace purchase. A Successful request will return the newly created Checkout
Process Object. Parameter|Type|Required|Description ---|---|---|---| transaction_id|integer|true|The id
of the transaction to complete. mod_id|integer|true|The id of the mod associated to this transaction.
display_amount|integer|true|The expected amount of the transaction to confirm the displayed amount matches
the actual amount.


###### Parameters

`modId` The id of the mod the user wants to purchase.
`displayAmount` The amount that was shown to the user for the purchase.
`idempotent` A unique string. Must be alphanumeric and cannot contain unique characters except for -.
`subscribeOnPurchase` Automatically subscribe to the mod after purchase

###### See Also

[`Result`](#ModIO.ResultAnd)
```csharp

string idempotent = $"aUniqueKey";
ModId modId = 1234;
int displayAmount = 12;
async void Example()
{
    var result = await ModIOUnity.PurchaseMod(modId, displayAmount, idempotent);
    if (result.Succeeded())
    {
        Debug.Log("Completed Purchase");
    }
    else
    {
        Debug.Log("failed to complete purchase");
    }
}

```


#### GetUserWalletBalance{#ModIO.ModIOUnityAsync.GetUserWalletBalance}

```csharp
public static async Task<ResultAnd<Wallet>> GetUserWalletBalance()
```

Get user's wallet balance


###### See Also

[`Result`](#ModIO.ResultAnd)
```csharp

void Example()
{
    var result = await ModIOUnity.GetUserWalletBalance(Callback);
    if (result.Succeeded())
    {
        Debug.Log("Get balance Success");
    }
    else
    {
        Debug.Log("failed to get balance");
    }
}

```


#### GetGameTokenPacks{#ModIO.ModIOUnityAsync.GetGameTokenPacks}

```csharp
public static async Task<ResultAnd<TokenPack[]>> GetGameTokenPacks()
```


#### StartAnalyticsSession{#ModIO.ModIOUnityAsync.StartAnalyticsSession}

```csharp
public static async Task<Result> StartAnalyticsSession(string sessionId, long[] modIds, bool startHeartbeat)
```

Send Request to start tracking playtime analytics. Best used after a
player has loaded into the game with their selected mods. Multiple
sessions can be active, however the session ids must be unique.


###### Parameters

`sessionId` Must be unique (guid)
`modIds` Mods used for this session.
`startHeartbeat` Starts a heartbeat coroutine that will ping the server around every 5 min

###### See Also

[`StartAnalyticsSession`](#ModIO.ModIOUnity.StartAnalyticsSession)
[`ModIOUnityAsync.StartAnalyticsSession`](#ModIO.ModIOUnityAsync.StartAnalyticsSession)
[`ModIOUnity.SendAnalyticsHeartbeat`](#ModIO.ModIOUnity.SendAnalyticsHeartbeat)
[`ModIOUnityAsync.SendAnalyticsHeartbeat`](#ModIO.ModIOUnityAsync.SendAnalyticsHeartbeat)
[`ModIOUnity.EndAnalyticsSession`](#ModIO.ModIOUnity.EndAnalyticsSession)
[`ModIOUnityAsync.EndAnalyticsSession`](#ModIO.ModIOUnityAsync.EndAnalyticsSession)
```csharp

string[] modIds;
string sessionId;
async void Example()
{
    ResultAnd<string> r = await ModIOUnityAsync.StartAnalyticsSession(sessionId, modIds);
    if (r.result.Succeeded())
    {
        //Store the returned session id to end the session later.
        sessionId = r.value;
        Debug.Log("successful");
    }
    else
    {
        Debug.Log("failed");
    }
}

```



#### SendAnalyticsHeartbeat{#ModIO.ModIOUnityAsync.SendAnalyticsHeartbeat}

```csharp
public static async Task<Result> SendAnalyticsHeartbeat(string sessionId)
```

Send Request to start tracking playtime analytics. Best used after a
player has loaded into the game with their selected mods. Multiple
sessions can be active, however the session ids must be unique.


###### Parameters

`sessionId` Must be unique (guid)

###### See Also

[`StartAnalyticsSession`](#ModIO.ModIOUnity.StartAnalyticsSession)
[`ModIOUnityAsync.StartAnalyticsSession`](#ModIO.ModIOUnityAsync.StartAnalyticsSession)
[`ModIOUnity.SendAnalyticsHeartbeat`](#ModIO.ModIOUnity.SendAnalyticsHeartbeat)
[`ModIOUnityAsync.SendAnalyticsHeartbeat`](#ModIO.ModIOUnityAsync.SendAnalyticsHeartbeat)
[`ModIOUnity.EndAnalyticsSession`](#ModIO.ModIOUnity.EndAnalyticsSession)
[`ModIOUnityAsync.EndAnalyticsSession`](#ModIO.ModIOUnityAsync.EndAnalyticsSession)
```csharp

string sessionId;
async void Example()
{
    Result r = await ModIOUnityAsync.SendAnalyticsHeartbeat(sessionId);
    if (r.result.Succeeded())
    {
        Debug.Log("successful");
    }
    else
    {
        Debug.Log("failed");
    }
}

```



#### EndAnalyticsSession{#ModIO.ModIOUnityAsync.EndAnalyticsSession}

```csharp
public static async Task<Result> EndAnalyticsSession(string sessionId)
```

Send Request to end the tracking of playtime analytics. Best used after a
player has left an in game session.


###### Parameters

`sessionId` The session id

###### See Also

[`StartAnalyticsSession`](#ModIO.ModIOUnity.StartAnalyticsSession)
[`ModIOUnityAsync.StartAnalyticsSession`](#ModIO.ModIOUnityAsync.StartAnalyticsSession)
[`ModIOUnity.SendAnalyticsHeartbeat`](#ModIO.ModIOUnity.SendAnalyticsHeartbeat)
[`ModIOUnityAsync.SendAnalyticsHeartbeat`](#ModIO.ModIOUnityAsync.SendAnalyticsHeartbeat)
[`ModIOUnity.EndAnalyticsSession`](#ModIO.ModIOUnity.EndAnalyticsSession)
[`ModIOUnityAsync.EndAnalyticsSession`](#ModIO.ModIOUnityAsync.EndAnalyticsSession)
```csharp

string sessionId;
async void Example()
{
    Result result = await ModIOUnityAsync.EndAnalyticsSession(sessionId);
    if (result.Succeeded())
    {
        Debug.Log("successful");
    }
    else
    {
        Debug.Log("failed");
    }
}

```



#### RequestUserDelegationToken{#ModIO.ModIOUnityAsync.RequestUserDelegationToken}

```csharp
public static async Task<ResultAnd<UserDelegationToken>> RequestUserDelegationToken()
```

Requests a User Delegation Token on behalf of a authenticated user.
This token should then be sent to your secure backend server
where you can then use it for specific endpoints.



#### CreateTempModSet{#ModIO.ModIOUnityAsync.CreateTempModSet}

```csharp
public static async Task<Result> CreateTempModSet(ModId[] modIds)
```

Creates a Temp mod set


###### Parameters

`modIds` Mods used for this set.

###### See Also

[`ModIOUnity.CreateTempModSet`](#ModIO.ModIOUnity.CreateTempModSet)
[`ModIOUnityAsync.AddModsToTempModSet`](#ModIO.ModIOUnityAsync.AddModsToTempModSet)
[`ModIOUnity.DeleteTempModSet`](#ModIO.ModIOUnity.DeleteTempModSet)
[`ModIOUnity.RemoveModsFromTempModSet`](#ModIO.ModIOUnity.RemoveModsFromTempModSet)
[`ModIOUnity.GetTempSystemInstalledMods`](#ModIO.ModIOUnity.GetTempSystemInstalledMods)
```csharp

ModId[] modIds;
void Example()
{
    Result result = await ModIOUnity.CreateTempModSet(modIds);
    if (result.Succeeded())
    {
        Debug.Log("Successful");
    }
    else
    {
        Debug.Log("Failed");
    }
}

```



#### AddModsToTempModSet{#ModIO.ModIOUnityAsync.AddModsToTempModSet}

```csharp
public static async Task<Result> AddModsToTempModSet(ModId[] modIds)
```

Adds mods to a Temp mod set


###### Parameters

`modIds` Mods used for this set.

###### See Also

[`ModIOUnityAsync.CreateTempModSet`](#ModIO.ModIOUnityAsync.CreateTempModSet)
[`ModIOUnity.AddModsToTempModSet`](#ModIO.ModIOUnity.AddModsToTempModSet)
[`ModIOUnity.DeleteTempModSet`](#ModIO.ModIOUnity.DeleteTempModSet)
[`ModIOUnity.RemoveModsFromTempModSet`](#ModIO.ModIOUnity.RemoveModsFromTempModSet)
[`ModIOUnity.GetTempSystemInstalledMods`](#ModIO.ModIOUnity.GetTempSystemInstalledMods)
```csharp

ModId[] modIds;
void Example()
{
    Result result = await ModIOUnity.AddModToTempModSet(modIds);
    if (result.Succeeded())
    {
        Debug.Log("Successful");
    }
    else
    {
        Debug.Log("Failed");
    }
}

```


___

### ModIOUnityEvents{#ModIO.ModIOUnityEvents}

```csharp
public static class ModIOUnityEvents
```


###### Method


#### TryGetCachedMod{#ModIO.ModIOUnityEvents.TryGetCachedMod}

```csharp
public static bool TryGetCachedMod(ModId modId, out ModProfile modProfile)
```


#### RemoveModManagementEventDelegate{#ModIO.ModIOUnityEvents.RemoveModManagementEventDelegate}

```csharp
public static void RemoveModManagementEventDelegate(ModManagementEventDelegate modManagementEventDelegate)
```

___

### ModId{#ModIO.ModId}

```csharp
[System.Serializable, TypeConverter(typeof(ModIdConverter))]  public readonly struct ModId
```

A struct representing the globally unique identifier for a specific mod profile.



###### Field


#### [`ModId`](#ModIO.ModId.Null) `Null`

```csharp
ModId Null = new ModId(0L)
```


#### `long id`

```csharp
long id
```


###### Method


#### Equals{#ModIO.ModId.Equals}

```csharp
public bool Equals(ModId other)
```


#### Equals{#ModIO.ModId.Equals}

```csharp
public override bool Equals(object obj)
```


#### GetHashCode{#ModIO.ModId.GetHashCode}

```csharp
public override int GetHashCode()
```


#### ToString{#ModIO.ModId.ToString}

```csharp
public override string ToString()
```

___

### ModPage{#ModIO.ModPage}

```csharp
[System.Serializable]  public struct ModPage
```

A struct containing the ModProfiles and total number of remaining results that can be
acquired with the SearchFilter used in the GetMods request.


###### See Also

[`ModIOUnity.GetMods`](#ModIO.ModIOUnity.GetMods)
[`ModIOUnityAsync.GetMods`](#ModIO.ModIOUnityAsync.GetMods)


###### Field


#### [`ModProfile`](#ModIO.ModIOUnity.CreateModProfile) `modProfiles`

```csharp
ModProfile[] modProfiles
```

The mod profiles retrieved from this pagination request


###### See Also

[`ModIOUnity.GetMods`](#ModIO.ModIOUnity.GetMods)
[`ModIOUnityAsync.GetMods`](#ModIO.ModIOUnityAsync.GetMods)


#### `long totalSearchResultsFound`

```csharp
long totalSearchResultsFound
```

the total results that could be found. eg there may be a total of 1,000 mod profiles but
this ModPage may only contain the first 100, depending on the SearchFilter pagination
settings.


###### See Also

[`SearchFilter`](#ModIO.SearchFilter)
[`SearchFilter.SetPageIndex`](#ModIO.SearchFilter.SetPageIndex)
[`SearchFilter.SetPageSize`](#ModIO.SearchFilter.SetPageSize)
[`ModIOUnity.GetMods`](#ModIO.ModIOUnity.GetMods)
[`ModIOUnityAsync.GetMods`](#ModIO.ModIOUnityAsync.GetMods)

___

### ModProfile{#ModIO.ModProfile}

```csharp
[Serializable]  public readonly struct ModProfile
```

A struct representing all of the information available for a ModProfile.


###### See Also

[`ModIOUnity.GetMod`](#ModIO.ModIOUnity.GetMods)
[`ModIOUnityAsync.GetMod`](#ModIO.ModIOUnityAsync.GetMods)


###### Field


#### [`ModId`](#ModIO.ModId) `id`

```csharp
ModId id
```


#### `string tags`

```csharp
string[] tags
```


#### [`ModStatus`](#ModIO.ModStatus) `status`

```csharp
ModStatus status
```


#### `bool visible`

```csharp
bool visible
```


#### `string name`

```csharp
string name
```


#### `string summary`

```csharp
string summary
```


#### `string description`

```csharp
string description
```


#### `string homePageUrl`

```csharp
string homePageUrl
```


#### `string profilePageUrl`

```csharp
string profilePageUrl
```


#### [`MaturityOptions`](#ModIO.MaturityOptions) `maturityOptions`

```csharp
MaturityOptions maturityOptions
```


#### `DateTime dateAdded`

```csharp
DateTime dateAdded
```


#### `DateTime dateUpdated`

```csharp
DateTime dateUpdated
```


#### `DateTime dateLive`

```csharp
DateTime dateLive
```


#### `bool hasDependencies`

```csharp
bool hasDependencies
```


#### [`DownloadReference`](#ModIO.DownloadReference) `galleryImagesOriginal`

```csharp
DownloadReference[] galleryImagesOriginal
```


#### [`DownloadReference`](#ModIO.DownloadReference) `galleryImages320x180`

```csharp
DownloadReference[] galleryImages320x180
```


#### [`DownloadReference`](#ModIO.DownloadReference) `galleryImages640x360`

```csharp
DownloadReference[] galleryImages640x360
```


#### [`DownloadReference`](#ModIO.DownloadReference) `galleryImages1280x720`

```csharp
DownloadReference[] galleryImages1280x720
```


#### [`DownloadReference`](#ModIO.DownloadReference) `logoImage320x180`

```csharp
DownloadReference logoImage320x180
```


#### [`DownloadReference`](#ModIO.DownloadReference) `logoImage640x360`

```csharp
DownloadReference logoImage640x360
```


#### [`DownloadReference`](#ModIO.DownloadReference) `logoImage1280x720`

```csharp
DownloadReference logoImage1280x720
```


#### [`DownloadReference`](#ModIO.DownloadReference) `logoImageOriginal`

```csharp
DownloadReference logoImageOriginal
```


#### [`UserProfile`](#ModIO.UserProfile) `creator`

```csharp
UserProfile creator
```


#### [`DownloadReference`](#ModIO.DownloadReference) `creatorAvatar50x50`

```csharp
DownloadReference creatorAvatar50x50
```


#### [`DownloadReference`](#ModIO.DownloadReference) `creatorAvatar100x100`

```csharp
DownloadReference creatorAvatar100x100
```


#### [`DownloadReference`](#ModIO.DownloadReference) `creatorAvatarOriginal`

```csharp
DownloadReference creatorAvatarOriginal
```


#### `string platformStatus`

```csharp
string platformStatus
```


#### `ModPlatform platforms`

```csharp
ModPlatform[] platforms
```


#### `long gameId`

```csharp
long gameId
```


#### `int communityOptions`

```csharp
int communityOptions
```


#### `string nameId`

```csharp
string nameId
```


#### [`Modfile`](#ModIO.ModIOUnity.UploadModfile) `modfile`

```csharp
Modfile modfile
```


#### [`RevenueType`](#ModIO.SearchFilter.RevenueType) `revenueType`

```csharp
RevenueType revenueType
```


#### `int price`

```csharp
int price
```


#### `int tax`

```csharp
int tax
```


#### [`MonetizationOption`](#ModIO.ModProfile.MonetizationOption) `MonetizationOption`

```csharp
MonetizationOption MonetizationOption
```


#### `int stock`

```csharp
int stock
```


#### `string metadata`

```csharp
string metadata
```

The meta data for this mod, not to be confused with the meta data of the specific version


###### See Also

[`InstalledMod`](#ModIO.ModIOUnity.GetSystemInstalledMods)


#### `string latestVersion`

```csharp
string latestVersion
```

The most recent version of the mod that exists



#### `string latestChangelog`

```csharp
string latestChangelog
```

the change log for the most recent version of this mod



#### `DateTime latestDateFileAdded`

```csharp
DateTime latestDateFileAdded
```

the date for when the most recent mod file was uploaded



#### `KeyValuePair<string, string> metadataKeyValuePairs`

```csharp
KeyValuePair<string, string>[] metadataKeyValuePairs
```

the KVP meta data for this mod profile. Not to be confused with the meta data blob or
the meta data for the installed version of the mod



#### [`ModStats`](#ModIO.ModStats) `stats`

```csharp
ModStats stats
```


#### `long archiveFileSize`

```csharp
long archiveFileSize
```

___

### ModProfileDetails{#ModIO.ModProfileDetails}

```csharp
public class ModProfileDetails
```

Use this class to fill out the details of a Mod Profile that you'd like to create or edit.
If you're submitting this via CreateModProfile you must assign values to logo, name and
summary, otherwise the submission will be rejected (All fields except modId are optional if
submitting this via EditModProfile)


###### See Also

[`ModIOUnity.CreateModProfile`](#ModIO.ModIOUnity.CreateModProfile)
[`ModIOUnity.EditModProfile`](#ModIO.ModIOUnity.EditModProfile)


###### Field


#### [`ModId?`](#ModIO.ModId) `modId`

```csharp
ModId? modId
```

Make sure to set this field when submitting a request to Edit a Mod Profile


###### Remarks

Can be null


#### `bool? visible`

```csharp
bool? visible
```

Whether this mod will appear as public or hidden.


###### Remarks

Can be null


#### [`byte`](#ModIO.BuildSettings.bytesPerWrite) `logo`

```csharp
byte[] logo
```

Image file which will represent your mods logo. Must be gif, jpg or png format and
cannot exceed 8MB in filesize. Dimensions must be at least 512x288 and we recommend
you supply a high resolution image with a 16 / 9 ratio. mod.io will use this image to
make three thumbnails for the dimensions 320x180, 640x360 and 1280x720


###### Remarks

Can be null if using EditModProfile

###### See Also

[`ModIOUnity.EditModProfile`](#ModIO.ModIOUnity.EditModProfile)


#### `List images`

```csharp
List<byte[]> images
```

Image files that will be included in the mod profile details.


###### Remarks

Can be null


#### `string imagesNames`

```csharp
string[] imagesNames
```
(Optional) If set, `images` are named according to this array.


#### `string name`

```csharp
string name
```

Name of your mod


###### Remarks

Can be null if using EditModProfile

###### See Also

[`ModIOUnity.EditModProfile`](#ModIO.ModIOUnity.EditModProfile)


#### `string name_id`

```csharp
string name_id
```

Path for the mod on mod.io. For example: https://gamename.mod.io/mod-name-id-here.
If no name_id is specified the `name` will be used. For example: 'Stellaris
Shader Mod' will become 'stellaris-shader-mod'. Cannot exceed 80 characters


###### Remarks

Can be null


#### `string summary`

```csharp
string summary
```

Summary for your mod, giving a brief overview of what it's about.
Cannot exceed 250 characters.


###### Remarks

This field must be assigned when submitting a new Mod Profile
Can be null if using EditModProfile

###### See Also

[`ModIOUnity.EditModProfile`](#ModIO.ModIOUnity.EditModProfile)


#### `string description`

```csharp
string description
```

Detailed description for your mod, which can include details such as 'About', 'Features',
'Install Instructions', 'FAQ', etc. HTML supported and encouraged


###### Remarks

Can be null


#### `string homepage_url`

```csharp
string homepage_url
```

Official homepage for your mod. Must be a valid URL


###### Remarks

Can be null


#### `int? stock`

```csharp
int? stock
```

This will create a cap on the number of subscribers for this mod. Set to 0 to allow
for infinite subscribers.


###### Remarks

Can be null


#### [`MaturityOptions?`](#ModIO.MaturityOptions) `maturityOptions`

```csharp
MaturityOptions? maturityOptions
```

This is a Bitwise enum so you can assign multiple values


###### See Also

[`MaturityOptions`](#ModIO.MaturityOptions)

###### Remarks

Can be null


#### `string metadata`

```csharp
string metadata
```

Your own custom metadata that can be uploaded with the mod profile. (This is for the
entire mod profile, a unique metadata field can be assigned to each modfile as well)


###### See Also

[`ModfileDetails`](#ModIO.ModfileDetails)

###### Remarks

the metadata has a maximum size of 50,000 characters.
Can be null


#### `string tags`

```csharp
string[] tags
```

The tags this mod profile has. Only tags that are supported by the parent game can be
applied. An empty array will clear all tags, use `null` for no change. (Invalid tags will be ignored)


###### Remarks

Can be null


#### [`CommunityOptions?`](#ModIO.CommunityOptions) `communityOptions`

```csharp
CommunityOptions? communityOptions = CommunityOptions.AllowCommenting
```

	Select which interactions players can have with your mod.
0 = None
1 = Ability to comment (default)
? = Add the options you want together, to enable multiple options


###### Remarks

Can be null


#### `int? price`

```csharp
int? price
```

The price of the mod
NOTE: The value of this field will be ignored if the parent game's queue is enabled
(see CurationOption in Game Object)


###### Remarks

Can be null


#### [`MonetizationOption?`](#ModIO.GameMonetizationOptions) `monetizationOptions`

```csharp
MonetizationOption? monetizationOptions
```

Monetization options enabled by the mod creator.
You must set the team before setting monetization to live.
In order for a marketplace mod to go live both `MonetizationOption.Enabled` and `MonetizationOption.Live` need to be set.
NOTE: The value of this field will be ignored if the parent game's queue is enabled
(see CurationOption in Game Object)


###### Remarks

Can be null

___

### ModStats{#ModIO.ModStats}

```csharp
[System.Serializable]  public struct ModStats
```

Detailed stats about a Mod's ratings, downloads, subscribers, popularity etc



###### Field


#### `long modId`

```csharp
long modId
```


#### `long popularityRankPosition`

```csharp
long popularityRankPosition
```


#### `long popularityRankTotalMods`

```csharp
long popularityRankTotalMods
```


#### `long downloadsToday`

```csharp
long downloadsToday
```


#### `long downloadsTotal`

```csharp
long downloadsTotal
```


#### `long subscriberTotal`

```csharp
long subscriberTotal
```


#### `long ratingsTotal`

```csharp
long ratingsTotal
```


#### `long ratingsPositive`

```csharp
long ratingsPositive
```


#### `long ratingsNegative`

```csharp
long ratingsNegative
```


#### `long ratingsPercentagePositive`

```csharp
long ratingsPercentagePositive
```


#### `float ratingsWeightedAggregate`

```csharp
float ratingsWeightedAggregate
```


#### `string ratingsDisplayText`

```csharp
string ratingsDisplayText
```


#### `long dateExpires`

```csharp
long dateExpires
```

___

### ModfileDetails{#ModIO.ModfileDetails}

```csharp
public class ModfileDetails
```


###### Field


#### [`ModId?`](#ModIO.ModId) `modId`

```csharp
ModId? modId
```

ModId of the mod that you wish to upload the modfile to. (Must be assigned)



#### `string directory`

```csharp
string directory
```

The directory containing all of the files that makeup the mod. The directory and all of
its contents will be compressed and uploaded when submitted via
ModIOUnity.AddModfile.



#### `string changelog`

```csharp
string changelog
```

the changelog for this file version of the mod.



#### `string version`

```csharp
string version
```

The version number of this modfile as a string (eg 0.2.11)



#### `string metadata`

```csharp
string metadata
```

Your own custom metadata that can be uploaded with the modfile.


###### Remarks

the metadata has a maximum size of 50,000 characters.


#### `string uploadId`

```csharp
string uploadId = null
```

Required if the filedata parameter is omitted. The UUID of a completed multipart upload session.



#### `bool active`

```csharp
bool active = true
```

Default value is true. Flag this upload as the current release, this will change the modfile field
on the parent mod to the id of this file after upload.



#### `string platforms`

```csharp
string[] platforms = null
```

If platform filtering enabled An array containing one or more platforms this file is targeting.
Valid values can be found under the targeting a platform section.


___

### MonetizationTeamAccount{#ModIO.MonetizationTeamAccount}

```csharp
[System.Serializable]  public struct MonetizationTeamAccount
```


###### Field


#### `long Id`

```csharp
long Id
```


#### `string NameId`

```csharp
string NameId
```


#### `string Username`

```csharp
string Username
```


#### `int MonetizationStatus`

```csharp
int MonetizationStatus
```


#### `int MonetizationOptions`

```csharp
int MonetizationOptions
```


#### `int SplitPercentage`

```csharp
int SplitPercentage
```

___

### MultipartUpload{#ModIO.MultipartUpload}

```csharp
[System.Serializable]  public struct MultipartUpload
```


###### Field


#### `string upload_id`

```csharp
string upload_id
```

A universally unique identifier (UUID) that represents the upload session.



#### `int status`

```csharp
int status
```

The status of the upload session: 0 = Incomplete, 1 = Pending, 2 = Processing, 3 = Complete, 4 = Cancelled


___

### MultipartUploadPart{#ModIO.MultipartUploadPart}

```csharp
[System.Serializable]  public struct MultipartUploadPart
```


###### Field


#### `string upload_id`

```csharp
string upload_id
```

A universally unique identifier (UUID) that represents the upload session.



#### `int part_number`

```csharp
int part_number
```

The part number this object represents.



#### `int part_size`

```csharp
int part_size
```

integer	The size of this part in bytes.



#### `int date_added`

```csharp
int date_added
```

integer	Unix timestamp of date the part was uploaded.


___

### ProgressHandle{#ModIO.ProgressHandle}

```csharp
public partial class ProgressHandle
```

A ProgressHandle can only be used to monitor the progress of an operation and cannot be
used to cancel or suspend ongoing operations.
The OperationType enum field specifies what type of operation this handle is for.
The Progress field can be used to get the percentage (0.0 - 1.0) of the progress.
The Completed and Failed fields can be used to determine if the operation is complete and
whether or not it failed.



###### Property


#### [`ModId`](#ModIO.ModId) `modId`

```csharp
public ModId modId
```
`get` `set`

The ModId of the mod that this operation pertains to.



#### [`ModManagementOperationType`](#ModIO.ModManagementOperationType) `OperationType`

```csharp
public ModManagementOperationType OperationType
```
`get` `set`

The type of operation being performed, eg. Download, Upload, Install



#### `float Progress`

```csharp
public float Progress
```
`get` `set`

The progress of the operation being performed, float range from 0.0f - 1.0f



#### `long BytesPerSecond`

```csharp
public long BytesPerSecond
```
`get` `set`

The average number of bytes being processed per second by the operation
(Updated every 10 milliseconds)


###### Remarks

Only applicable to Download and Upload operations


#### `bool Completed`

```csharp
public bool Completed
```
`get` `set`

Is set to True when the operation has finished


###### Remarks

If an operation fails then Completed will still be True, therefore it is
recommended to check Failed as well


#### `bool Failed`

```csharp
public bool Failed
```
`get` `set`

Is set to True if the operation encounters an error or is cancelled before completion



###### Method


#### UiHashCode{#ModIO.ProgressHandle.UiHashCode}

```csharp
public int UiHashCode()
```

___

### Rating{#ModIO.Rating}

```csharp
[Serializable]  public struct Rating
```

A struct representing all of the information available for a Rating.


###### See Also

[`ModIOUnity.GetCurrentUserRatings`](#ModIO.ModIOUnity.GetCurrentUserRatings)
[`ModIOUnityAsync.GetCurrentUserRatings`](#ModIO.ModIOUnityAsync.GetCurrentUserRatings)
`RatingObject`


###### Field


#### [`ModId`](#ModIO.ModId) `modId`

```csharp
ModId modId
```


#### [`ModRating`](#ModIO.ModRating) `rating`

```csharp
ModRating rating
```


#### `DateTime dateAdded`

```csharp
DateTime dateAdded
```

___

### Report{#ModIO.Report}

```csharp
public class Report
```

Used in conjunction with ModIOUnity.Report() to send a report to the mod.io server for a
specific mod.



###### Field


#### `long? id`

```csharp
long? id
```


#### `string summary`

```csharp
string summary
```


#### [`ReportType?`](#ModIO.ReportType) `type`

```csharp
ReportType? type
```


#### `ReportResourceType? resourceType`

```csharp
ReportResourceType? resourceType
```


#### `string user`

```csharp
string user
```


#### `string contactEmail`

```csharp
string contactEmail
```


###### Method


#### CanSend{#ModIO.Report.CanSend}

```csharp
public bool CanSend()
```

___

### Result{#ModIO.Result}

```csharp
public struct Result
```

Struct returned from ModIO callbacks to inform the caller if the operation succeeded.



###### Property


#### `string message`

```csharp
public string message
```


A string message explaining the result error code in more detail (If one exists).



#### `string apiMessage`

```csharp
public string apiMessage
```


A string message explaining the result API error code in more detail (If one exists).



#### `uint errorCode`

```csharp
public uint errorCode
```


The error code for the result.
0 = Success



#### `uint apiCode`

```csharp
public uint apiCode
```


The API reference error code for the result.
0 = No API error



###### Method


#### Succeeded{#ModIO.Result.Succeeded}

```csharp
public bool Succeeded()
```


#### IsCancelled{#ModIO.Result.IsCancelled}

```csharp
public bool IsCancelled()
```


#### IsInitializationError{#ModIO.Result.IsInitializationError}

```csharp
public bool IsInitializationError()
```


#### IsAuthenticationError{#ModIO.Result.IsAuthenticationError}

```csharp
public bool IsAuthenticationError()
```


#### IsInvalidSecurityCode{#ModIO.Result.IsInvalidSecurityCode}

```csharp
public bool IsInvalidSecurityCode()
```


#### IsInvalidEmailAddress{#ModIO.Result.IsInvalidEmailAddress}

```csharp
public bool IsInvalidEmailAddress()
```


#### IsPermissionError{#ModIO.Result.IsPermissionError}

```csharp
public bool IsPermissionError()
```


#### IsNetworkError{#ModIO.Result.IsNetworkError}

```csharp
public bool IsNetworkError()
```

Checks if the result failed due to no internet connection


###### Returns

true if the result failed due to no internet connection


#### IsStorageSpaceInsufficient{#ModIO.Result.IsStorageSpaceInsufficient}

```csharp
public bool IsStorageSpaceInsufficient()
```


#### IsRateLimited{#ModIO.Result.IsRateLimited}

```csharp
public bool IsRateLimited()
```


#### ToString{#ModIO.Result.ToString}

```csharp
public override string ToString()
```

___

### ResultAnd{#ModIO.ResultAnd}

```csharp
public class ResultAnd<T>
```
Convenience wrapper for essentially a Tuple.


###### Field


#### [`Result`](#ModIO.ResultAnd.result) `result`

```csharp
Result result
```


#### `T value`

```csharp
T value
```

___

### SearchFilter{#ModIO.SearchFilter}

```csharp
[Serializable]  public class SearchFilter
```

Used to build a filter that is sent with requests for retrieving mods.


###### See Also

[`ModIOUnity.GetMods`](#ModIO.ModIOUnity.GetMods)
[`ModIOUnityAsync.GetMods`](#ModIO.ModIOUnityAsync.GetMods)


###### Property


#### [`RevenueType`](#ModIO.SearchFilter.RevenueType) `RevenueType`

```csharp
public RevenueType RevenueType
```
`get` `set`

Choose if the filter should include/exclude free or paid mods.


###### Parameters

`type` 


#### `IEnumerable GetTags`

```csharp
public IEnumerable<string> GetTags
```



#### [`SortModsBy`](#ModIO.SortModsBy) `SortBy`

```csharp
public SortModsBy SortBy
```



###### Method


#### ShowSoldOut{#ModIO.SearchFilter.ShowSoldOut}

```csharp
public void ShowSoldOut()
```

The search will now show sold out mods



#### DontShowSoldOut{#ModIO.SearchFilter.DontShowSoldOut}

```csharp
public void DontShowSoldOut()
```

The search will now not show sold out mods



#### ShowMatureContent{#ModIO.SearchFilter.ShowMatureContent}

```csharp
public void ShowMatureContent(bool value)
```


#### GetShowMatureContent{#ModIO.SearchFilter.GetShowMatureContent}

```csharp
public bool GetShowMatureContent()
```


#### AddSearchPhrase{#ModIO.SearchFilter.AddSearchPhrase}

```csharp
public void AddSearchPhrase(string phrase, FilterType filterType
```

Adds a phrase into the filter to be used when filtering mods in a request.


###### Parameters

`phrase` the string to be added to the filter
`filterType` (Optional) type of filter to be used with the text, defaults to Full text search


#### ClearSearchPhrases{#ModIO.SearchFilter.ClearSearchPhrases}

```csharp
public void ClearSearchPhrases()
```


#### ClearSearchPhrases{#ModIO.SearchFilter.ClearSearchPhrases}

```csharp
public void ClearSearchPhrases(FilterType filterType)
```


#### GetSearchPhrase{#ModIO.SearchFilter.GetSearchPhrase}

```csharp
public string[] GetSearchPhrase(FilterType filterType)
```


#### AddTag{#ModIO.SearchFilter.AddTag}

```csharp
public void AddTag(string tag)
```

Adds a tag to be used in filtering mods for a request.


###### Parameters

`tag` the tag to be added to the filter

###### See Also

[`Tag`](#ModIO.ModIOUnity.GetTagCategories)
[`TagCategory`](#ModIO.TagCategory)


#### AddTags{#ModIO.SearchFilter.AddTags}

```csharp
public void AddTags(IEnumerable<string> tags)
```

Adds multiple tags used in filtering mods for a request.


###### Parameters

`tags` the tags to be added to the filter

###### See Also

[`Tag`](#ModIO.ModIOUnity.GetTagCategories)
[`TagCategory`](#ModIO.TagCategory)


#### ClearTags{#ModIO.SearchFilter.ClearTags}

```csharp
public void ClearTags()
```


#### SetSortBy{#ModIO.SearchFilter.SetSortBy}

```csharp
public void SetSortBy(SortModsBy category)
```

Determines what category mods should be sorted and returned by. eg if the category
SortModsBy.Downloads was used, then the results would be returned by the number of
downloads. Depending on the Ascending or Descending setting, it will start or end with
mods that have the highest or lowest number of downloads.


###### Parameters

`category` the category to sort the request

###### See Also

[`SetToAscending`](#ModIO.SearchFilter.SetToAscending)


#### SetToAscending{#ModIO.SearchFilter.SetToAscending}

```csharp
public void SetToAscending(bool isAscending)
```

Determines the order of the results being returned. eg should results be filtered from
highest to lowest, or lowest to highest.


###### Parameters

`isAscending` 


#### SetPageIndex{#ModIO.SearchFilter.SetPageIndex}

```csharp
public void SetPageIndex(int pageIndex)
```

The search will skip `pageIndex * pageSize` results and return (up to) the following  results.


###### See Also

[`SetPageSize`](#ModIO.SearchFilter.SetPageSize)


#### SetPageSize{#ModIO.SearchFilter.SetPageSize}

```csharp
public void SetPageSize(int pageSize)
```
Limit the number of results returned (100 max).
Use `SetPageIndex` to skip results and return later results.


###### See Also

[`SetPageIndex`](#ModIO.SearchFilter.SetPageIndex)


#### AddUser{#ModIO.SearchFilter.AddUser}

```csharp
public void AddUser(long userId)
```

Adds a specific user to the filter, so that mods that were not created by the user
(or other users added to the filter) will not be returned.


###### Parameters

`userId` Id of the user to add

###### See Also

[`UserProfile`](#ModIO.UserProfile)


#### GetUserIds{#ModIO.SearchFilter.GetUserIds}

```csharp
public IReadOnlyList<long> GetUserIds()
```


#### AddPlatformStatus{#ModIO.SearchFilter.AddPlatformStatus}

```csharp
public void AddPlatformStatus(SearchFilterPlatformStatus status)
```

Adds a specific platform status to the filter to show mods that are either pending
or both pending and live. This is primarily to be used in QA of mods.


###### Parameters

`status` Platform verified status to show mods of


#### IsSearchFilterValid{#ModIO.SearchFilter.IsSearchFilterValid}

```csharp
public bool IsSearchFilterValid(out Result result)
```

You can use this method to check if a search filter is setup correctly before using it
in a GetMods request.


###### Parameters

`result` 

###### Returns

true if the filter is valid

###### See Also

[`ModIOUnity.GetMods`](#ModIO.ModIOUnity.GetMods)
[`ModIOUnityAsync.GetMods`](#ModIO.ModIOUnityAsync.GetMods)


#### GetPageIndex{#ModIO.SearchFilter.GetPageIndex}

```csharp
public int GetPageIndex()
```

Use this method to fetch the page index


###### Returns

Returns the current value of the page index


#### GetPageSize{#ModIO.SearchFilter.GetPageSize}

```csharp
public int GetPageSize()
```

Use this method to fetch the page size


###### Returns

Returns the current value of the page size

___

### ServerSettings{#ModIO.ServerSettings}

```csharp
[System.Serializable]  public struct ServerSettings
```

Describes the server settings to use for the ModIO Plugin.
This can be setup directly from the inspector when editing the config settings file, or you
can instantiate and use this at runtime with the Initialize method


###### See Also

[`BuildSettings`](#ModIO.BuildSettings)
[`ModIOUnity.InitializeForUser`](#ModIO.ModIOUnity.InitializeForUser)
`ModIOUnityAsync.InitializeForUser`


###### Field


#### `string serverURL`

```csharp
string serverURL
```
URL for the mod.io server to connect to.


#### `uint gameId`

```csharp
uint gameId
```
Game Id as can be found on mod.io Web UI.


#### `string gameKey`

```csharp
string gameKey
```
mod.io Service API Key used by your game to connect.


#### `string languageCode`

```csharp
string languageCode
```

Language code for the localizing message responses.
See https://docs.mod.io/restapi/docs/localization for possible values.



#### `bool disableUploads`

```csharp
bool disableUploads
```
Disables uploading mods and modfiles for this build.


#### `bool useCommandLineArgumentOverrides`

```csharp
bool useCommandLineArgumentOverrides
```
Enables the use of command line arguments to override server settings.


#### `bool fallbackToEmailAuth`

```csharp
bool fallbackToEmailAuth
```

___

### SubscribedMod{#ModIO.SubscribedMod}

```csharp
public struct SubscribedMod
```

Represents the ModProfile of a mod the current user has subscribed to. Contains the status
and a directory (if installed) and the associated ModProfile.


###### Remarks

Note this is not necessarily an installed mod. You will need to check
the status to see whether or not it is installed.

###### See Also

[`status`](#ModIO.SubscribedMod.status)
[`SubscribedModStatus`](#ModIO.SubscribedModStatusExtensions)
[`ModProfile`](#ModIO.ModIOUnity.CreateModProfile)
[`ModIOUnity.GetSubscribedMods`](#ModIO.ModIOUnity.GetSubscribedMods)


###### Field


#### [`SubscribedModStatus`](#ModIO.SubscribedModStatusExtensions) `status`

```csharp
SubscribedModStatus status
```


#### `string directory`

```csharp
string directory
```


#### [`ModProfile`](#ModIO.ModIOUnity.CreateModProfile) `modProfile`

```csharp
ModProfile modProfile
```


#### `bool enabled`

```csharp
bool enabled
```

Whether the mod has been marked as enabled or disabled by the user


###### See Also

[`ModIOUnity.EnableMod`](#ModIO.ModIOUnity.EnableModManagement)
[`ModIOUnity.DisableMod`](#ModIO.ModIOUnity.DisableModManagement)

___

### SubscribedModStatusExtensions{#ModIO.SubscribedModStatusExtensions}

```csharp
public static class SubscribedModStatusExtensions
```


###### Method


#### IsSubscribed{#ModIO.SubscribedModStatusExtensions.IsSubscribed}

```csharp
public static bool IsSubscribed(this SubscribedModStatus value)
```

___

### Tag{#ModIO.Tag}

```csharp
[System.Serializable]  public struct Tag
```

Represents a Tag that can be assigned to a mod.


###### See Also

[`TagCategory`](#ModIO.TagCategory)
[`ModIOUnity.GetTagCategories`](#ModIO.ModIOUnity.GetTagCategories)
[`ModIOUnityAsync.GetTagCategories`](#ModIO.ModIOUnityAsync.GetTagCategories)


###### Field


#### `string name`

```csharp
string name
```


#### `int totalUses`

```csharp
int totalUses
```

___

### TagCategory{#ModIO.TagCategory}

```csharp
[System.Serializable]  public struct TagCategory
```

Represents a particular category of tags.


###### See Also

[`ModIOUnity.GetTagCategories`](#ModIO.ModIOUnity.GetTagCategories)
[`ModIOUnityAsync.GetTagCategories`](#ModIO.ModIOUnityAsync.GetTagCategories)
[`Tag`](#ModIO.TagCategory)


###### Field


#### `string name`

```csharp
string name
```


#### `Dictionary nameLocalized`

```csharp
Dictionary<string, string> nameLocalized
```
Localized category name, keyed by language code.


#### [`Tag`](#ModIO.TagCategory.tags) `tags`

```csharp
Tag[] tags
```


#### `Dictionary<string, string> tagsLocalized`

```csharp
Dictionary<string, string>[] tagsLocalized
```
Localized tags, keyed by language code.
Order matches `tags`, however English value is also available using `tagsLocalized["en"]`.

###### See Also

`ModIOUnity.GetTagLocalized(string)`
`ModIOUnity.GetTagLocalized(string, string)`


#### `bool multiSelect`

```csharp
bool multiSelect
```


#### `bool hidden`

```csharp
bool hidden
```


#### `bool locked`

```csharp
bool locked
```

___

### TermsHash{#ModIO.TermsHash}

```csharp
[Serializable]  public struct TermsHash
```

This is the hash that identifies the TOS. Used to validate the TOS requirement when
attempting to authenticate a user.


###### See Also

[`TermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`ModIOUnity.GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`ModIOUnityAsync.GetTermsOfUse`](#ModIO.ModIOUnityAsync.GetTermsOfUse)


###### Field


#### `string md5hash`

```csharp
string md5hash
```

___

### TermsOfUse{#ModIO.TermsOfUse}

```csharp
[System.Serializable]  public struct TermsOfUse
```

TOS object received from a successful use of ModIOUnity.GetTermsOfUse
This is used when attempting to authenticate via a third party. You must retrieve the TOS
and input it along with an authentication request.


###### See Also

[`ModIOUnity.GetTermsOfUse`](#ModIO.ModIOUnity.GetTermsOfUse)
[`ModIOUnityAsync.GetTermsOfUse`](#ModIO.ModIOUnityAsync.GetTermsOfUse)
[`ModIOUnity.AuthenticateUserViaDiscord`](#ModIO.ModIOUnity.AuthenticateUserViaDiscord)
[`ModIOUnity.AuthenticateUserViaGoogle`](#ModIO.ModIOUnity.AuthenticateUserViaGoogle)
[`ModIOUnity.AuthenticateUserViaGOG`](#ModIO.ModIOUnity.AuthenticateUserViaGOG)
[`ModIOUnity.AuthenticateUserViaItch`](#ModIO.ModIOUnity.AuthenticateUserViaItch)
[`ModIOUnity.AuthenticateUserViaOculus`](#ModIO.ModIOUnity.AuthenticateUserViaOculus)
[`ModIOUnity.AuthenticateUserViaSteam`](#ModIO.ModIOUnity.AuthenticateUserViaSteam)
[`ModIOUnity.AuthenticateUserViaSwitch`](#ModIO.ModIOUnity.AuthenticateUserViaSwitch)
[`ModIOUnity.AuthenticateUserViaXbox`](#ModIO.ModIOUnity.AuthenticateUserViaXbox)


###### Field


#### `string termsOfUse`

```csharp
string termsOfUse
```


#### `string agreeText`

```csharp
string agreeText
```


#### `string disagreeText`

```csharp
string disagreeText
```


#### [`TermsOfUseLink`](#ModIO.TermsOfUseLink) `links`

```csharp
TermsOfUseLink[] links
```


#### [`TermsHash`](#ModIO.TermsHash) `hash`

```csharp
TermsHash hash
```

___

### TermsOfUseLink{#ModIO.TermsOfUseLink}

```csharp
[Serializable]  public struct TermsOfUseLink
```

Represents a url as part of the TOS. The 'required' field can be used to determine whether or
not it is a TOS requirement to be displayed to the end user when viewing the TOS text.



###### Field


#### `string apiName`

```csharp
string apiName
```


#### `string name`

```csharp
string name
```


#### `string url`

```csharp
string url
```


#### `bool required`

```csharp
bool required
```

___

### TokenPack{#ModIO.TokenPack}

```csharp
public struct TokenPack
```


###### Field


#### `long id`

```csharp
long id
```


#### `string name`

```csharp
string name
```


#### `string description`

```csharp
string description
```


#### `long price`

```csharp
long price
```


#### `long amount`

```csharp
long amount
```


#### [`Portal`](#ModIO.UserPortal) `portals`

```csharp
Portal[] portals
```


###### Struct


#### Portal


##### id{#ModIO.TokenPack.Portal.id}

___

##### portal{#ModIO.TokenPack.Portal.portal}

___

##### sku{#ModIO.TokenPack.Portal.sku}

___

###### Enums

___

### UISettings{#ModIO.UISettings}

```csharp
[System.Serializable]  public struct UISettings
```


###### Field


#### `bool ShowMonetizationUI`

```csharp
bool ShowMonetizationUI
```


#### `bool ShowEnabledModToggle`

```csharp
bool ShowEnabledModToggle
```

___

### UserInstalledMod{#ModIO.UserInstalledMod}

```csharp
public struct UserInstalledMod
```

Struct used to represent a mod that already exists on the current device. You can view the
subscribed users to this mod as well as the directory and modprofile associated to it.



###### Field


#### `bool updatePending`

```csharp
bool updatePending
```

Whether or not the mod has been marked for an update



#### `string directory`

```csharp
string directory
```

the directory of where this mod is installed



#### `string metadata`

```csharp
string metadata
```

The metadata for the version of the mod that is currently installed (Not to be mistaken
with the metadata located inside of ModProfile.cs)



#### `string version`

```csharp
string version
```

the version of this installed mod



#### `string changeLog`

```csharp
string changeLog
```

the change log for this version of the installed mod



#### `DateTime dateAdded`

```csharp
DateTime dateAdded
```

The date that this version of the mod was submitted to mod.io



#### [`ModProfile`](#ModIO.ModIOUnity.CreateModProfile) `modProfile`

```csharp
ModProfile modProfile
```

The profile of this mod, including the summary and name



#### `bool enabled`

```csharp
bool enabled
```

Whether the mod has been marked as enabled or disabled by the user


###### See Also

[`ModIOUnity.EnableMod`](#ModIO.ModIOUnity.EnableModManagement)
[`ModIOUnity.DisableMod`](#ModIO.ModIOUnity.DisableModManagement)

___

### UserProfile{#ModIO.UserProfile}

```csharp
[System.Serializable]  public struct UserProfile
```

Represents a particular mod.io user with their username, DownloadReferences for getting
their avatar, as well as their language and timezone.



###### Field


#### `string username`

```csharp
string username
```

The display name of the user's mod.io account



#### `long userId`

```csharp
long userId
```

 This is the unique Id of the user.



#### `string portal_username`

```csharp
string portal_username
```

The display name of the user's account they authenticated with. Eg if they authenticated
with Steam it would be their Steam username.



#### [`DownloadReference`](#ModIO.DownloadReference) `avatar_original`

```csharp
DownloadReference avatar_original
```


#### [`DownloadReference`](#ModIO.DownloadReference) `avatar_50x50`

```csharp
DownloadReference avatar_50x50
```


#### [`DownloadReference`](#ModIO.DownloadReference) `avatar_100x100`

```csharp
DownloadReference avatar_100x100
```


#### `string timezone`

```csharp
string timezone
```


#### `string language`

```csharp
string language
```

___

### Wallet{#ModIO.Wallet}

```csharp
public class Wallet
```

A struct representing the user's wallet and current balance.


###### See Also

[`ModIOUnity.GetUserWalletBalance`](#ModIO.ModIOUnity.GetUserWalletBalance)
[`ModIOUnityAsync.GetUserWalletBalance`](#ModIO.ModIOUnityAsync.GetUserWalletBalance)
;



###### Field


#### `string type`

```csharp
string type
```


#### `string currency`

```csharp
string currency
```


#### `int balance`

```csharp
int balance
```

___

###### Enums


###### AuthenticationServiceProvider{#ModIO.AuthenticationServiceProvider}


```csharp
Steam
```
```csharp
Epic
```
```csharp
GOG
```
```csharp
Itchio
```
```csharp
Oculus
```
```csharp
Xbox
```
```csharp
Switch
```
```csharp
Discord
```
```csharp
Google
```
```csharp
PlayStation
```
```csharp
OpenId
```
```csharp
AppleId
```
```csharp
None
```
___

###### AvatarSize{#ModIO.AvatarSize}


```csharp
Original
```
```csharp
Thumbnail_50x50
```
```csharp
Thumbnail_100x100
```
___

###### CommunityOptions{#ModIO.CommunityOptions}


```csharp
None = 0x00
```
```csharp
AllowCommenting = 0x01
```
___

###### FilterType{#ModIO.FilterType}


Type of search to be used in the SearchFilter


###### See Also

[`SearchFilter`](#ModIO.SearchFilter)

```csharp
FullTextSearch
```
```csharp
NotEqualTo
```
```csharp
Like
```
```csharp
NotLike
```
```csharp
In
```
```csharp
NotIn
```
```csharp
Max
```
```csharp
Min
```
```csharp
BitwiseAnd
```
___

###### GameMonetizationOptions{#ModIO.GameMonetizationOptions}


```csharp
All                  = 0b0000
```
```csharp
Enabled              = 0b0001
```
```csharp
EnableMarketplace    = 0b0010
```
```csharp
EnablePartnerProgram = 0b0100
```
```csharp
EnableScarcity       = 0b1000
```
___

###### LogLevel{#ModIO.LogLevel}


The logging level of the plugin. Used in BuildSettings to determine which log messages to
ignore or display.


```csharp
None = -1
```
```csharp
Error = 0
```
```csharp
Warning = 1
```
```csharp
Message = 2
```
```csharp
Verbose = 3
```
___

###### MaturityOptions{#ModIO.MaturityOptions}


```csharp
None     = 0b0000
```
```csharp
Alcohol  = 0b0001
```
```csharp
Drugs    = 0b0010
```
```csharp
Violence = 0b0100
```
```csharp
Explicit = 0b1000
```
___

###### ModManagementEventType{#ModIO.ModManagementEventType}


```csharp
InstallStarted
```
```csharp
Installed
```
```csharp
InstallFailed
```
```csharp
DownloadStarted
```
```csharp
Downloaded
```
```csharp
DownloadFailed
```
```csharp
UninstallStarted
```
```csharp
Uninstalled
```
```csharp
UninstallFailed
```
```csharp
UpdateStarted
```
```csharp
Updated
```
```csharp
UpdateFailed
```
___

###### ModManagementOperationType{#ModIO.ModManagementOperationType}


```csharp
None_AlreadyInstalled
```
```csharp
None_ErrorOcurred
```
```csharp
Install
```
```csharp
Download
```
```csharp
Uninstall
```
```csharp
Update
```
```csharp
Upload
```
___

###### ModRating{#ModIO.ModRating}


```csharp
Positive = 1
```
```csharp
Negative = -1
```
```csharp
None = 0
```
___

###### ModStatus{#ModIO.ModStatus}


```csharp
Accepted = 0
```
```csharp
NotAccepted = 1
```
```csharp
Deleted = 3
```
___

###### MonetizationOption{#ModIO.MonetizationOption}


Monetization options enabled by the creator.
Multiple options can be combined.


###### See Also

[`ModIOUnity.GetMods`](#ModIO.ModIOUnity.GetMods)
[`ModIOUnityAsync.GetMods`](#ModIO.ModIOUnityAsync.GetMods)

```csharp
None = 0
```
```csharp
Enabled = 1
```
```csharp
Live = 2
```
```csharp
EnablePartnerProgram = 4
```
```csharp
EnableScarcity = 8
```
___

###### OculusDevice{#ModIO.OculusDevice}


```csharp
Rift
```
```csharp
Quest
```
___

###### PlayStationEnvironment{#ModIO.PlayStationEnvironment}


```csharp
spint = 1
```
```csharp
prodqa = 8
```
```csharp
np = 256
```
___

###### ReportType{#ModIO.ReportType}


```csharp
Generic = 0
```
```csharp
DMCA = 1
```
```csharp
NotWorking = 2
```
```csharp
RudeContent = 3
```
```csharp
IllegalContent = 4
```
```csharp
StolenContent = 5
```
```csharp
FalseInformation = 6
```
```csharp
Other = 7
```
___

###### RevenueType{#ModIO.RevenueType}


Finds all mods with or without a price. Default is Free.


###### See Also

[`ModIOUnity.GetMods`](#ModIO.ModIOUnity.GetMods)
[`ModIOUnityAsync.GetMods`](#ModIO.ModIOUnityAsync.GetMods)

```csharp
Free = 0
```
```csharp
Paid = 1
```
```csharp
FreeAndPaid = 2
```
___

###### SearchFilterPlatformStatus{#ModIO.SearchFilterPlatformStatus}


```csharp
PendingOnly = 1
```
```csharp
LiveAndPending = 2
```
___

###### SortModsBy{#ModIO.SortModsBy}


Category to be used in the SearchFilter for determining how mods should be filtered in a
request.


###### See Also

[`SearchFilter`](#ModIO.SearchFilter)
[`ModIOUnity.GetMods`](#ModIO.ModIOUnity.GetMods)
[`ModIOUnityAsync.GetMods`](#ModIO.ModIOUnityAsync.GetMods)

```csharp
Name
```
```csharp
Price
```
```csharp
Rating
```
```csharp
Popular
```
```csharp
Downloads
```
```csharp
Subscribers
```
```csharp
DateSubmitted
```
___

###### SubscribedModStatus{#ModIO.SubscribedModStatus}


The current state of a subscribed mod. Useful for checking whether or not a mod has been
installed yet or if there was a problem trying to download/install it.


###### See Also

[`SubscribedMod`](#ModIO.ModIOUnity.GetSubscribedMods)

```csharp
Installed
```
```csharp
WaitingToDownload
```
```csharp
WaitingToInstall
```
```csharp
WaitingToUpdate
```
```csharp
WaitingToUninstall
```
```csharp
Downloading
```
```csharp
Installing
```
```csharp
Uninstalling
```
```csharp
Updating
```
```csharp
ProblemOccurred
```
```csharp
None
```
___

###### UserPortal{#ModIO.UserPortal}


Values representing the valid User Portals that mod.io works with.
Used when setting up BuildSettings.


###### See Also

[`BuildSettings`](#ModIO.BuildSettings)

```csharp
None = 0
```
```csharp
Apple
```
```csharp
Discord
```
```csharp
EpicGamesStore
```
```csharp
GOG
```
```csharp
Google
```
```csharp
itchio
```
```csharp
Nintendo
```
```csharp
Oculus
```
```csharp
PlayStationNetwork
```
```csharp
Steam
```
```csharp
XboxLive
```
___

## ModIO.Implementation.API.Objects

| Type | Name | Description |
|------|------|-------------|
| [`CheckoutProcess`](#ModIO.Implementation.API.Objects.CheckoutProcess) | CheckoutProcess |  |
| [`Error`](#ModIO.Implementation.API.Objects.Error) | Error |  |

### CheckoutProcess{#ModIO.Implementation.API.Objects.CheckoutProcess}

```csharp
public struct CheckoutProcess
```


###### Field


#### `int transactionId`

```csharp
int transactionId
```


#### `string grossAmount`

```csharp
string grossAmount
```


#### `string platformFee`

```csharp
string platformFee
```


#### `string tax`

```csharp
string tax
```


#### `long purchaseDate`

```csharp
long purchaseDate
```


#### `int netAmount`

```csharp
int netAmount
```


#### `int gatewayFee`

```csharp
int gatewayFee
```


#### `string transactionType`

```csharp
string transactionType
```


#### `object meta`

```csharp
object meta
```


#### `string walletType`

```csharp
string walletType
```


#### `int balance`

```csharp
int balance
```


#### `int deficit`

```csharp
int deficit
```


#### `string paymentMethodId`

```csharp
string paymentMethodId
```


#### [`ModProfile`](#ModIO.ModIOUnity.CreateModProfile) `modProfile`

```csharp
ModProfile modProfile
```

___

### Error{#ModIO.Implementation.API.Objects.Error}

```csharp
[System.Serializable]  public struct Error
```


###### Field


#### `long code`

```csharp
long code
```


#### `long error_ref`

```csharp
long error_ref
```


#### `string message`

```csharp
string message
```


#### `Dictionary errors`

```csharp
Dictionary<string, string> errors
```

___

###### Enums


## ModIO.Util

| Type | Name | Description |
|------|------|-------------|
| [`DownloadModToStreamOperation`](#ModIO.Util.DownloadModToStreamOperation) | DownloadModToStreamOperation |  |
| [`EnumExtensions`](#ModIO.Util.EnumExtensions) | EnumExtensions |  |
| [`ModioMainThreadHelper`](#ModIO.Util.ModioMainThreadHelper) | ModioMainThreadHelper | A slightly more robust and static friendly version of MonoDispatcher |
| [`MonoDispatcher`](#ModIO.Util.MonoDispatcher) | MonoDispatcher |  |
| [`MonoSingleton`](#ModIO.Util.MonoSingleton) | MonoSingleton |  |
| [`SelfInstancingMonoSingleton`](#ModIO.Util.SelfInstancingMonoSingleton) | SelfInstancingMonoSingleton |  |
| [`SimpleMessageHub`](#ModIO.Util.SimpleMessageHub) | SimpleMessageHub |  |
| [`SimpleMessageUnsubscribeToken`](#ModIO.Util.SimpleMessageUnsubscribeToken) | SimpleMessageUnsubscribeToken |  |
| [`SimplePool`](#ModIO.Util.SimplePool) | SimplePool |  |
| [`SimpleSingleton`](#ModIO.Util.SimpleSingleton) | SimpleSingleton |  |
| [`Utility`](#ModIO.Util.Utility) | Utility |  |

### DownloadModToStreamOperation{#ModIO.Util.DownloadModToStreamOperation}

```csharp
public class DownloadModToStreamOperation : IDisposable
```




###### Field


#### [`ModId`](#ModIO.ModId) `modId`

```csharp
ModId modId
```


#### [`Stream`](#ModIO.Util.DownloadModToStreamOperation.archiveStream) `archiveStream`

```csharp
Stream archiveStream
```


#### `bool closeStream`

```csharp
bool closeStream
```


#### [`Task`](#ModioUI.Panels.ModioErrorPanelBase.MonitorTaskThenOpenPanelIfError) `task`

```csharp
Task task
```


###### Property


#### [`OperationStatus`](#ModIO.Util.DownloadModToStreamOperation.OperationStatus) `Status`

```csharp
public OperationStatus Status
```
`get` `set`


#### `bool IsDownloading`

```csharp
public bool IsDownloading
```



#### `bool IsCompleted`

```csharp
public bool IsCompleted
```



#### `bool IsCancelled`

```csharp
public bool IsCancelled
```



#### `bool IsSucceeded`

```csharp
public bool IsSucceeded
```



#### `bool IsFailed`

```csharp
public bool IsFailed
```



#### `float DownloadProgress`

```csharp
public float DownloadProgress
```
`get` `set`


#### `string FailedMessage`

```csharp
public string FailedMessage
```
`get` `set`


###### Method


#### Cancel{#ModIO.Util.DownloadModToStreamOperation.Cancel}

```csharp
public void Cancel()
```


#### GetFiles{#ModIO.Util.DownloadModToStreamOperation.GetFiles}

```csharp
public IEnumerable<ArchiveStreamFile> GetFiles()
```
Returns a new array of all file entries in the archive.
Use  for extracting files.


#### ExtractFileToStream{#ModIO.Util.DownloadModToStreamOperation.ExtractFileToStream}

```csharp
public async Task ExtractFileToStream(ArchiveStreamFile file, Stream result, bool removeFromArchive
```
Extracts a file from the archive and optionally removes it.
Use `GetFiles` to get a list of files in the archive.


#### ExtractFileToStream{#ModIO.Util.DownloadModToStreamOperation.ExtractFileToStream}

```csharp
public async Task ExtractFileToStream(string path, Stream result, bool removeFromArchive
```
Extracts a file from the archive and optionally removes it.
Use `GetFiles` to get a list of files in the archive.


#### Dispose{#ModIO.Util.DownloadModToStreamOperation.Dispose}

```csharp
public void Dispose()
```


###### Struct


#### ArchiveStreamFile


##### fileName{#ModIO.Util.DownloadModToStreamOperation.ArchiveStreamFile.fileName}

___

##### path{#ModIO.Util.DownloadModToStreamOperation.ArchiveStreamFile.path}

___

##### sizeCompressed{#ModIO.Util.DownloadModToStreamOperation.ArchiveStreamFile.sizeCompressed}

___

##### sizeUncompressed{#ModIO.Util.DownloadModToStreamOperation.ArchiveStreamFile.sizeUncompressed}

___

###### Enums


###### Enum

```csharp
RequestingModInfo
```
```csharp
Downloading
```
```csharp
Verifying
```
```csharp
ProcessingArchive
```
```csharp
Cancelled
```
```csharp
Succeeded
```
```csharp
Failed
```
___

### EnumExtensions{#ModIO.Util.EnumExtensions}

```csharp
public static class EnumExtensions
```


###### Method


#### ExtractBitFlagsFromEnum{#ModIO.Util.EnumExtensions.ExtractBitFlagsFromEnum}

```csharp
public static IEnumerable<string> ExtractBitFlagsFromEnum<T>(this T value) where T : Enum
```

___

### ModioMainThreadHelper{#ModIO.Util.ModioMainThreadHelper}

```csharp
public class ModioMainThreadHelper : MonoBehaviour
```

A slightly more robust and static friendly version of MonoDispatcher



###### Method


#### Run{#ModIO.Util.ModioMainThreadHelper.Run}

```csharp
public static void Run(Action runOnMainThread)
```

The action will be called immediately if we're already on the Unity thread,


###### Parameters

`runOnMainThread` 


#### EnsureInstance{#ModIO.Util.ModioMainThreadHelper.EnsureInstance}

```csharp
public static void EnsureInstance()
```

Call this from the main thread before calling Run(action) later
You could alternately put an instance in the scene yourself


___

### MonoDispatcher{#ModIO.Util.MonoDispatcher}

```csharp
public class MonoDispatcher : SelfInstancingMonoSingleton<MonoDispatcher>
```


###### Method


#### MainThread{#ModIO.Util.MonoDispatcher.MainThread}

```csharp
public bool MainThread()
```


#### Run{#ModIO.Util.MonoDispatcher.Run}

```csharp
public void Run(Action action)
```

___

### MonoSingleton{#ModIO.Util.MonoSingleton}

```csharp
public class MonoSingleton<T> : MonoBehaviour, ISimpleMonoSingleton where T : MonoBehaviour
```


###### Property


#### `bool HasInstance`

```csharp
public static bool HasInstance
```



#### `T Instance`

```csharp
public static T Instance
```
`get` `set`


###### Method


#### SetupSingleton{#ModIO.Util.MonoSingleton.SetupSingleton}

```csharp
public void SetupSingleton()
```


#### SingletonIsInstantiated{#ModIO.Util.MonoSingleton.SingletonIsInstantiated}

```csharp
public static bool SingletonIsInstantiated()
```

___

### SelfInstancingMonoSingleton{#ModIO.Util.SelfInstancingMonoSingleton}

```csharp
public class SelfInstancingMonoSingleton<T> : MonoBehaviour, ISimpleMonoSingleton where T : MonoBehaviour
```


###### Property


#### `T Instance`

```csharp
public static T Instance
```
`get` `set`


###### Method


#### SetupSingleton{#ModIO.Util.SelfInstancingMonoSingleton.SetupSingleton}

```csharp
public void SetupSingleton()
```


#### SingletonIsInstantiated{#ModIO.Util.SelfInstancingMonoSingleton.SingletonIsInstantiated}

```csharp
public static bool SingletonIsInstantiated()
```

___

### SimpleMessageHub{#ModIO.Util.SimpleMessageHub}

```csharp
public class SimpleMessageHub : SelfInstancingMonoSingleton<SimpleMessageHub>
```


###### Method


#### Subscribe{#ModIO.Util.SimpleMessageHub.Subscribe}

```csharp
public SimpleMessageUnsubscribeToken Subscribe<T>(Action<T> subscription) where T : class, ISimpleMessage
```


#### Publish{#ModIO.Util.SimpleMessageHub.Publish}

```csharp
public void Publish<T>(T message) where T : class, ISimpleMessage
```


#### PublishThreadSafe{#ModIO.Util.SimpleMessageHub.PublishThreadSafe}

```csharp
public void PublishThreadSafe<T>(T message) where T : class, ISimpleMessage
```


#### ClearSubscriptionType{#ModIO.Util.SimpleMessageHub.ClearSubscriptionType}

```csharp
public void ClearSubscriptionType<T>()
```

___

### SimpleMessageUnsubscribeToken{#ModIO.Util.SimpleMessageUnsubscribeToken}

```csharp
public class SimpleMessageUnsubscribeToken
```


###### Method


#### Unsubscribe{#ModIO.Util.SimpleMessageUnsubscribeToken.Unsubscribe}

```csharp
public void Unsubscribe()
```

___

### SimplePool{#ModIO.Util.SimplePool}

```csharp
public class SimplePool : SelfInstancingMonoSingleton<SimplePool>
```


###### Field


#### `Dictionary pool`

```csharp
Dictionary<string, List<MonoBehaviour>> pool = new Dictionary<string, List<MonoBehaviour>>()
```


###### Method


#### Get{#ModIO.Util.SimplePool.Get}

```csharp
public T Get<T>(string name, Func<T> constructor) where T : MonoBehaviour
```


#### Return{#ModIO.Util.SimplePool.Return}

```csharp
public void Return<T>(string id, T item) where T : MonoBehaviour
```


#### PrePool{#ModIO.Util.SimplePool.PrePool}

```csharp
public void PrePool<T>(string name, Func<T> constructor, int num) where T : MonoBehaviour
```

___

### SimpleSingleton{#ModIO.Util.SimpleSingleton}

```csharp
public class SimpleSingleton<T> where T : new()
```


###### Property


#### `T Instance`

```csharp
public static T Instance
```
`get` `set`


###### Method


#### Instantiate{#ModIO.Util.SimpleSingleton.Instantiate}

```csharp
public void Instantiate()
```

___

### Utility{#ModIO.Util.Utility}

```csharp
public static class Utility
```


###### Method


#### GenerateHumanReadableNumber{#ModIO.Util.Utility.GenerateHumanReadableNumber}

```csharp
public static string GenerateHumanReadableNumber(long number)
```

changes an int64 number into something more human readable such as "12.6K"


###### Parameters

`number` the long to convert to readable string

###### Returns




#### GenerateHumanReadableTimeStringFromSeconds{#ModIO.Util.Utility.GenerateHumanReadableTimeStringFromSeconds}

```csharp
public static string GenerateHumanReadableTimeStringFromSeconds(int seconds)
```


#### GenerateHumanReadableStringForBytes{#ModIO.Util.Utility.GenerateHumanReadableStringForBytes}

```csharp
public static string GenerateHumanReadableStringForBytes(long bytes)
```


#### GetModStatusAsString{#ModIO.Util.Utility.GetModStatusAsString}

```csharp
public static string GetModStatusAsString(ProgressHandle handle)
```


#### GetModStatusAsString{#ModIO.Util.Utility.GetModStatusAsString}

```csharp
public static string GetModStatusAsString(SubscribedMod mod)
```


#### EncodeEncryptedSteamAppTicket{#ModIO.Util.Utility.EncodeEncryptedSteamAppTicket}

```csharp
public static string EncodeEncryptedSteamAppTicket(byte[] ticketData, uint ticketSize)
```

You can use this to convert your byte[] steam app ticket into a trimmed base64 encoded
string to be used for the steam authentication.


###### Parameters

`ticketData` the byte[] steam app ticket data
`ticketSize` the desired length of the ticket to be trimmed to

###### See Also

`SetupSteamAuthenticationOption`

###### Returns

base 64 encoded string from the provided steam app ticket


#### FindEverythingInScene{#ModIO.Util.Utility.FindEverythingInScene}

```csharp
public static List<T> FindEverythingInScene<T>() where T : Component
```

Finds everything in a loaded scene. Slow.



#### ForceSetPlatformHeader{#ModIO.Util.Utility.ForceSetPlatformHeader}

```csharp
public static void ForceSetPlatformHeader(RestApiPlatform platform)
```

Overrides the current platform setting in rest api calls


###### Parameters

`platform` new rest api platform


#### DownloadModToStream{#ModIO.Util.Utility.DownloadModToStream}

```csharp
public static DownloadModToStreamOperation DownloadModToStream(ModId modId, Stream archiveStream, bool closeStream
```
Downloads a mod's file archive into `archiveStream`.
Use the returned `DownloadModToStreamOperation` to track status and extract files.

###### Parameters

`modId` The id of the mod to download.
`archiveStream` The stream the compressed archive will be downloaded into.
`closeStream` Should the operation close `archiveStream` when it is disposed?

###### Returns

Operation handle to access status and results.
```csharp

async void DownloadModToMemory(ModId modId)
{
    using MemoryStream archiveStream = new MemoryStream();

```


###### See Also

[`DownloadModToStreamOperation.GetFiles`](#ModIO.Util.DownloadModToStreamOperation.GetFiles)
[`DownloadModToStreamOperation.ArchiveStreamFile`](#ModIO.Util.DownloadModToStreamOperation.ArchiveStreamFile)
`DownloadModToStreamOperation.ExtractFileToStream(DownloadModToStreamOperation.ArchiveStreamFile, Stream, bool)`

___

###### Enums

