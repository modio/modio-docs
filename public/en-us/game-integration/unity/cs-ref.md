---
id: unity-cs-ref
title: Core
slug: /unity/cs-ref
---


## Modio

| Type | Description |
|------|-------------|
| [`Error`](#Modio.Error) |  |
| [`ErrorEmbedded`](#Modio.ErrorEmbedded) |  |
| [`IModioLogHandler`](#Modio.IModioLogHandler) |  |
| [`IModioServiceSettings`](#Modio.IModioServiceSettings) |  |
| [`ModIndex`](#Modio.ModIndex) |  |
| [`ModInstallationManagement`](#Modio.ModInstallationManagement) | Manages mod downloading, installation, updating & uninstallation. |
| [`ModioClient`](#Modio.ModioClient) |  |
| [`ModioCommandLine`](#Modio.ModioCommandLine) | Allows for modio specific command line arguments to be parsed easily |
| [`ModioConsoleLog`](#Modio.ModioConsoleLog) |  |
| [`ModioDebugMenuAttribute`](#Modio.ModioDebugMenuAttribute) |  |
| [`ModioLog`](#Modio.ModioLog) |  |
| [`ModioServices`](#Modio.ModioServices) |  |
| [`ModioSettings`](#Modio.ModioSettings) |  |
| [`TermsOfUse`](#Modio.TermsOfUse) | The mod.io Terms of Use links. Each link contains a boolean field for if its required, Users must agree to all linked terms that have a True value for this field. Use [`Get`](#Modio.TermsOfUse.Get) to get the latest Terms of Use. |
| [`TermsOfUseLink`](#Modio.TermsOfUseLink) | Represents a url as part of the TOS. The 'required' field can be used to determine whether it is a TOS requirement to be displayed to the end user when viewing the TOS text. |
| [`Version`](#Modio.Version) |  |

### Error{#Modio.Error}

```csharp
public class Error : IEquatable<Error>
```


###### Field


#### `bool StoreStackTraceWhenCreated`

```csharp
bool StoreStackTraceWhenCreated
```


#### [`Error`](#Modio.Error) `None`

```csharp
Error None = new Error(ErrorCode.NONE)
```


#### [`Error`](#Modio.Error) `Unknown`

```csharp
Error Unknown = new Error(ErrorCode.UNKNOWN)
```


#### [`ErrorCode`](#Modio.Errors.ErrorCode) `Code`

```csharp
ErrorCode Code
```


###### Property


#### `bool IsSilent`

```csharp
public bool IsSilent
```

If an error is silent, don't print an error to the console.


###### Method


#### GetMessage{#Modio.Error.GetMessage}

```csharp
public virtual string GetMessage()
```


#### ToString{#Modio.Error.ToString}

```csharp
public override string ToString()
```


#### Equals{#Modio.Error.Equals}

```csharp
public bool Equals(Error other)
```


#### Equals{#Modio.Error.Equals}

```csharp
public override bool Equals(object obj)
```


#### GetHashCode{#Modio.Error.GetHashCode}

```csharp
public override int GetHashCode()
```


#### AddMethodContext{#Modio.Error.AddMethodContext}

```csharp
public Error AddMethodContext(  string message
```

___

### ErrorEmbedded{#Modio.ErrorEmbedded}

```csharp
public class ErrorEmbedded : Error
```


###### Field


#### `string Message`

```csharp
string Message
```


#### `string Errors`

```csharp
string Errors
```


###### Method


#### GetMessage{#Modio.ErrorEmbedded.GetMessage}

```csharp
public override string GetMessage()
```

Essentially the same logic as Error.GetMessage, but also includes the Message and validation Errors from the server


___

### IModioLogHandler{#Modio.IModioLogHandler}

```csharp
public interface IModioLogHandler
```

___

### IModioServiceSettings{#Modio.IModioServiceSettings}

```csharp
public interface IModioServiceSettings
```

___

### ModIndex{#Modio.ModIndex}

```csharp
[System.Serializable]  public class ModIndex
```


###### Property


#### `bool IsDirty`

```csharp
[JsonIgnore]  public bool IsDirty
```
`get` `set`

___

### ModInstallationManagement{#Modio.ModInstallationManagement}

```csharp
public static class ModInstallationManagement
```

Manages mod downloading, installation, updating & uninstallation.



###### Property


#### `bool DownloadAndExtractAsSingleJob`

```csharp
public static bool DownloadAndExtractAsSingleJob
```
`get` `set`

If set to true plugin will attempt to download and extract in one step.



#### [`Mod`](#ModioResourceType.Mod) `CurrentOperationOnMod`

```csharp
public static Mod CurrentOperationOnMod
```


Returns the current mod that the current operation is running on.



#### `bool IsInitialized`

```csharp
public static bool IsInitialized
```


Returns if the mod installation management is initialized.



#### `int PendingModOperationCount`

```csharp
public static int PendingModOperationCount
```


Returns the number of operations in queue does not include the current operation



###### Method


#### Activate{#Modio.ModInstallationManagement.Activate}

```csharp
public static void Activate()
```
Begin downloading and installing mods.


#### Deactivate{#Modio.ModInstallationManagement.Deactivate}

```csharp
public static void Deactivate(bool cancelCurrentJob)
```
Stop downloading and installing mods.

###### Remarks

Uninstallations will also be stopped.


#### IsModSubscribed{#Modio.ModInstallationManagement.IsModSubscribed}

```csharp
public static bool IsModSubscribed(long modId, long userId)
```

Returns a boolean indicating if a given mod is subscribed by the given user


###### Parameters

`modId` The mod id
`userId` The user id

###### Returns

True if the mod is subscribed by the given user.


#### GetAllInstalledMods{#Modio.ModInstallationManagement.GetAllInstalledMods}

```csharp
public static ICollection<Mod> GetAllInstalledMods()
```

Returns a collection of all installed mods.


###### Returns

The collection of mods


#### GetTotalDiskUsage{#Modio.ModInstallationManagement.GetTotalDiskUsage}

```csharp
public static long GetTotalDiskUsage(bool includeQueued)
```

Returns the total disk usage in bytes


###### Parameters

`includeQueued`
Wether to include queued (pending) operation, if true
will account for file IO changes to be made by the queued operation

###### Returns

The total disk usage (bytes)


#### StartTempModSession{#Modio.ModInstallationManagement.StartTempModSession}

```csharp
public static async Task<Error> StartTempModSession(List<ModioId> tempMods, bool appendCurrentSession
```

Will start a temporary mod session.


###### Parameters

`tempMods` A list of mods to be used for the temp session.
`appendCurrentSession` Whether the new mods should be added to the existing running mod session.

###### Returns


An asynchronous task that returns [`Error`](#Modio.ModioLog.Error).[`Error.None`](#Modio.Error.None) on success.


###### See Also

[`EndCurrentTempModSession`](#Modio.ModInstallationManagement.EndCurrentTempModSession)


#### EndCurrentTempModSession{#Modio.ModInstallationManagement.EndCurrentTempModSession}

```csharp
[ModioDebugMenu(ShowInSettingsMenu = false)]  public static void EndCurrentTempModSession()
```

Will end the current temp mod session started by [`StartTempModSession`](#Modio.ModInstallationManagement.StartTempModSession)


#### AddTemporaryMods{#Modio.ModInstallationManagement.AddTemporaryMods}

```csharp
public static async Task<Error> AddTemporaryMods(List<ModioId> tempMods, int lifeTimeDaysOverride
```

Adds the list of mods to mod index


###### Parameters

`tempMods` The list of mods to be added
`lifeTimeDaysOverride` The number of days to keep the mods installed

###### Returns


An asynchronous task that returns [`Error`](#Modio.ModioLog.Error).[`Error.None`](#Modio.Error.None) on success.



#### ClearExpiredTempMods{#Modio.ModInstallationManagement.ClearExpiredTempMods}

```csharp
public static void ClearExpiredTempMods()
```


#### RetryInstallingMod{#Modio.ModInstallationManagement.RetryInstallingMod}

```csharp
public static async Task<Error> RetryInstallingMod(Mod mod)
```

Retries installing a given mod.


###### Parameters

`mod` The Mod to be installed.


#### MarkModForUninstallation{#Modio.ModInstallationManagement.MarkModForUninstallation}

```csharp
public static void MarkModForUninstallation(Mod mod)
```

Marks a mod for uninstallation.


###### Parameters

`mod` The Mod to be uninstalled.


#### IsThereAvailableSpaceFor{#Modio.ModInstallationManagement.IsThereAvailableSpaceFor}

```csharp
public static async Task<bool> IsThereAvailableSpaceFor(Mod mod)
```

Returns if there is enough available space to install a Mod, will account for pending jobs.


###### Parameters

`mod` The mod check available space for

###### Returns


An asynchronous task that returns `true` if there is enough space, `false` otherwise.



#### IsThereAvailableSpaceFor{#Modio.ModInstallationManagement.IsThereAvailableSpaceFor}

```csharp
public static async Task<bool> IsThereAvailableSpaceFor(ModCollection collection)
```

Returns if there is enough available space to install a Mod, will account for pending jobs.


###### Parameters

`collection` The mod check available space for

###### Returns


An asynchronous task that returns `true` if there is enough space, `false` otherwise.



###### Enum

```csharp
Download
```

```csharp
Install
```

```csharp
Update
```

```csharp
Uninstall
```

```csharp
Validate
```

```csharp
Scan
```

```csharp
Checking
```

```csharp
Started
```

```csharp
Completed
```

```csharp
Cancelled
```

```csharp
Failed
```

___

### ModioClient{#Modio.ModioClient}

```csharp
public static class ModioClient
```


###### Property


#### [`IModioDataStorage`](#Modio.FileIO.IModioDataStorage) `DataStorage`

```csharp
public static IModioDataStorage DataStorage
```


The Data Storage implementation being used by the plugin.


###### Remarks

Prefer resolving the dependency yourself

###### See Also

[`ModioServices`](#Modio.ModioServices)


#### [`IModioAPIInterface`](#Modio.API.Interfaces.IModioAPIInterface) `Api`

```csharp
public static IModioAPIInterface Api
```


The API interface being used by the plugin.


###### Remarks

Prefer resolving the dependency yourself

###### See Also

[`ModioServices`](#Modio.ModioServices)


#### [`IModioAuthService`](#Modio.Authentication.IModioAuthService) `AuthService`

```csharp
public static IModioAuthService AuthService
```


The Authentication Service being used by the plugin.


###### Remarks

Prefer resolving the dependency yourself

###### See Also

[`ModioServices`](#Modio.ModioServices)


#### [`ModioSettings`](#Modio.ModioSettings) `Settings`

```csharp
public static ModioSettings Settings
```


Returns the [`ModioSettings`](#Modio.ModioSettings) from the ModioServices


###### Remarks

Prefer resolving the dependency yourself

###### See Also

[`ModioServices`](#Modio.ModioServices)


#### `bool IsInitialized`

```csharp
public static bool IsInitialized
```
`get`

Returns `true` if initialized, `false` otherwise.



###### Method


#### Init{#Modio.ModioClient.Init}

```csharp
public static Task<Error> Init(ModioSettings settings)
```

Initializes the ModioClient with the given [`ModioSettings`](#Modio.ModioSettings)

###### Parameters

`settings` The settings to use

###### Returns


An asynchronous task that returns [`Error`](#Modio.ModioLog.Error).[`Error.None`](#Modio.Error.None) on success.



#### Init{#Modio.ModioClient.Init}

```csharp
public static async Task<Error> Init()
```

Initializes the ModioClient.


###### Returns


A task that returns [`Error`](#Modio.ModioLog.Error).
If successfully initialized returns [`Error`](#Modio.ModioLog.Error).[`Error.None`](#Modio.Error.None)


#### Shutdown{#Modio.ModioClient.Shutdown}

```csharp
public static async Task Shutdown()
```

Shuts down the client.
Will invoke the shutdown methods on services.


___

### ModioCommandLine{#Modio.ModioCommandLine}

```csharp
public static class ModioCommandLine
```

Allows for modio specific command line arguments to be parsed easily



###### Method


#### TryGetArgument{#Modio.ModioCommandLine.TryGetArgument}

```csharp
public static bool TryGetArgument(string argument, out string value)
```

Attempt to get a mod.io command line argument and its encoded value from the environment.


###### Returns

`true` if the argument was successfully found.

###### Remarks


All arguments need to be in the format:`-modio-arg=value`
or
`-modio-arg value`


#### HasFlag{#Modio.ModioCommandLine.HasFlag}

```csharp
public static bool HasFlag(string flag)
```

___

### ModioConsoleLog{#Modio.ModioConsoleLog}

```csharp
public class ModioConsoleLog : IModioLogHandler
```


###### Method


#### LogHandler{#Modio.ModioConsoleLog.LogHandler}

```csharp
public void LogHandler(LogLevel logLevel, object message)
```

___

### ModioDebugMenuAttribute{#Modio.ModioDebugMenuAttribute}

```csharp
public class ModioDebugMenuAttribute : Attribute
```


###### Field


#### `bool ShowInSettingsMenu`

```csharp
bool ShowInSettingsMenu = true
```


#### `bool ShowInBrowserMenu`

```csharp
bool ShowInBrowserMenu = true
```

___

### ModioLog{#Modio.ModioLog}

```csharp
public class ModioLog
```


###### Field


#### `string LOG_PREFIX_DEFAULT`

```csharp
string LOG_PREFIX_DEFAULT = "[mod.io] "
```


###### Property


#### [`ModioLog?`](#Modio.ModioLog) `Error`

```csharp
public static ModioLog? Error
```
`get`


#### [`ModioLog?`](#Modio.ModioLog) `Warning`

```csharp
public static ModioLog? Warning
```
`get`


#### [`ModioLog?`](#Modio.ModioLog) `Message`

```csharp
public static ModioLog? Message
```
`get`


#### [`ModioLog?`](#Modio.ModioLog) `Verbose`

```csharp
public static ModioLog? Verbose
```
`get`


###### Method


#### Log{#Modio.ModioLog.Log}

```csharp
public void Log(object message)
```


#### GetLogLevel{#Modio.ModioLog.GetLogLevel}

```csharp
public static ModioLog? GetLogLevel(LogLevel logLevel)
```

___

### ModioServices{#Modio.ModioServices}

```csharp
public static class ModioServices
```


###### Method


#### Bind{#Modio.ModioServices.Bind}

```csharp
[Pure]  public static IBindType<T> Bind<T>()
```

Bind a service so that it can be accessed by other systems

```csharp

ModioServices.Bind&lt;IWebBrowserHandler&gt;()
             .FromNew&lt;MyCustomWebBrowserHandler&gt;(ModioServicePriority.DeveloperOverride);

```



#### BindInstance{#Modio.ModioServices.BindInstance}

```csharp
public static void BindInstance<T>(T instance, ModioServicePriority priority
```

Convenience wrapper to bind an instance. The same as writing
```csharpBind&lt;T&gt;().FromInstance(instance, priority);```


#### BindErrorMessage{#Modio.ModioServices.BindErrorMessage}

```csharp
public static void BindErrorMessage<T>(string message, ModioServicePriority priority
```


#### Resolve{#Modio.ModioServices.Resolve}

```csharp
public static T Resolve<T>()
```


#### TryResolve{#Modio.ModioServices.TryResolve}

```csharp
public static bool TryResolve<T>(out T result)
```


#### GetBindings{#Modio.ModioServices.GetBindings}

```csharp
public static IResolveType<T> GetBindings<T>(bool createIfMissing
```


#### AddBindingChangedListener{#Modio.ModioServices.AddBindingChangedListener}

```csharp
public static void AddBindingChangedListener<T>(Action<T> onNewValue, bool fireImmediatelyIfValueBound
```


#### RemoveBindingChangedListener{#Modio.ModioServices.RemoveBindingChangedListener}

```csharp
public static void RemoveBindingChangedListener<T>(Action<T> onNewValue)
```


#### RemoveAllBindingsOfType{#Modio.ModioServices.RemoveAllBindingsOfType}

```csharp
public static void RemoveAllBindingsOfType<T>()
```


###### Class


#### Binding


##### Condition{#Modio.ModioServices.Binding.Condition}

___

##### Priority{#Modio.ModioServices.Binding.Priority}

___

##### Resolve{#Modio.ModioServices.Binding.Resolve}

___

###### Interface


#### IBindType


#### IResolveType

___

### ModioSettings{#Modio.ModioSettings}

```csharp
[Serializable]  public class ModioSettings
```


###### Field


#### `long GameId`

```csharp
long GameId
```


#### `string APIKey`

```csharp
string APIKey
```


#### `string ServerURL`

```csharp
string ServerURL
```


#### `string DefaultLanguage`

```csharp
string DefaultLanguage = "en"
```


#### [`LogLevel`](#Modio.ModioSettings.LogLevel) `LogLevel`

```csharp
LogLevel LogLevel = LogLevel.Warning
```


#### [`IModioServiceSettings`](#Modio.IModioServiceSettings) `PlatformSettings`

```csharp
IModioServiceSettings[] PlatformSettings
```


###### Method


#### GetPlatformSettings{#Modio.ModioSettings.GetPlatformSettings}

```csharp
public T GetPlatformSettings<T>() where T : IModioServiceSettings
```


#### TryGetPlatformSettings{#Modio.ModioSettings.TryGetPlatformSettings}

```csharp
public bool TryGetPlatformSettings<T>(out T settings) where T : IModioServiceSettings
```


#### ShallowClone{#Modio.ModioSettings.ShallowClone}

```csharp
public ModioSettings ShallowClone()
```


#### InvokeOnChanged{#Modio.ModioSettings.InvokeOnChanged}

```csharp
public void InvokeOnChanged()
```

___

### TermsOfUse{#Modio.TermsOfUse}

```csharp
public class TermsOfUse
```

The mod.io Terms of Use links. Each link contains a boolean field for if its required, Users must agree to all
linked terms that have a True value for this field.
Use [`Get`](#Modio.TermsOfUse.Get) to get the latest Terms of Use.



###### Property


#### `string TermsText`

```csharp
public string TermsText
```
`get`


#### `string AgreeText`

```csharp
public string AgreeText
```
`get`


#### `string DisagreeText`

```csharp
public string DisagreeText
```
`get`


#### [`TermsOfUseLink`](#Modio.TermsOfUseLink) `Links`

```csharp
public TermsOfUseLink[] Links
```
`get`


###### Method


#### Get{#Modio.TermsOfUse.Get}

```csharp
public static async Task<(Error error, TermsOfUse result)> Get()
```

Gets the latest Terms of Use from the mod.io API, or returns a cached one if it's already been received
during the session.


###### Returns

[`Error`](#Modio.ModioLog.Error).[`Error.None`](#Modio.Error.None) if successful. Otherwise, it will return the API error.


#### GetLink{#Modio.TermsOfUse.GetLink}

```csharp
public TermsOfUseLink GetLink(LinkType type)
```

Gets a specific link from the received Terms of Use object.


___

### TermsOfUseLink{#Modio.TermsOfUseLink}

```csharp
public struct TermsOfUseLink
```

Represents a url as part of the TOS. The 'required' field can be used to determine whether
it is a TOS requirement to be displayed to the end user when viewing the TOS text.



###### Field


#### [`LinkType`](#Modio.LinkType) `type`

```csharp
LinkType type
```


#### `string text`

```csharp
string text
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

### Version{#Modio.Version}

```csharp
public static class Version
```


###### Method


#### AddEnvironmentDetails{#Modio.Version.AddEnvironmentDetails}

```csharp
public static void AddEnvironmentDetails(string details)
```


#### GetCurrent{#Modio.Version.GetCurrent}

```csharp
public static string GetCurrent()
```

___

### Enums


###### LinkType{#Modio.LinkType}


```csharp
Website
```

```csharp
Terms
```

```csharp
Privacy
```

```csharp
Manage
```

```csharp
Refund
```
This cannot be gotten from this endpoint! This is here to help band-aid CUI

___

###### LogLevel{#Modio.LogLevel}


```csharp
None
```

```csharp
Error
```

```csharp
Warning
```

```csharp
Message
```

```csharp
Verbose
```

___

###### ModioResourceType{#Modio.ModioResourceType}


```csharp
Mod
```

```csharp
Collection
```

___

###### ModioServicePriority{#Modio.ModioServicePriority}


Specify the priority of a dependency, which controls which dependency will be used when multiple bindings exist
Higher numbers are higher priority. You can modify these priorities if you want to have an even more specific override
e.g. var priority = ModioServicePriority.EngineImplementation + 1;


```csharp
Fallback = 0
```

Do not bind things to this that should be used in working situations
You can bind error messages at this priority to give more information to users
when binding fails `ModioServices.BindErrorMessage{T}`

```csharp
Default = 10
```

Most mod.io basic implementations will use this priority


```csharp
EngineImplementation = 20
```

e.g. Unity specific


```csharp
PlatformProvided = 30
```

e.g. a particular console or storefront


```csharp
DeveloperOverride = 40
```

A custom implementation within your own application


```csharp
UnitTestOverride = 100
```

Intended for internal usage to support mod.io's unit testing


___

## Modio.Authentication

| Type | Description |
|------|-------------|
| [`IEmailCodePrompter`](#Modio.Authentication.IEmailCodePrompter) |  |
| [`IGetActiveUserIdentifier`](#Modio.Authentication.IGetActiveUserIdentifier) |  |
| [`IModioAuthService`](#Modio.Authentication.IModioAuthService) |  |
| [`IPotentialModioEmailAuthService`](#Modio.Authentication.IPotentialModioEmailAuthService) |  |
| [`ModioEmailAuthService`](#Modio.Authentication.ModioEmailAuthService) | Use for authenticating with email |
| [`ModioMultiplatformAuthResolver`](#Modio.Authentication.ModioMultiplatformAuthResolver) |  |

### IEmailCodePrompter{#Modio.Authentication.IEmailCodePrompter}

```csharp
public interface IEmailCodePrompter
```

___

### IGetActiveUserIdentifier{#Modio.Authentication.IGetActiveUserIdentifier}

```csharp
public interface IGetActiveUserIdentifier
```


###### Method


#### GetActiveUserIdentifier{#Modio.Authentication.IGetActiveUserIdentifier.GetActiveUserIdentifier}

```csharp
public Task<string> GetActiveUserIdentifier();
```

___

### IModioAuthService{#Modio.Authentication.IModioAuthService}

```csharp
public partial interface IModioAuthService
```


###### Property


#### [`ModioAPI.Portal`](#Modio.API.ModioAPI.Portal) `Portal`

```csharp
public ModioAPI.Portal Portal
```
`get`


###### Method


#### Authenticate{#Modio.Authentication.IModioAuthService.Authenticate}

```csharp
public Task<Error> Authenticate(  bool displayedTerms,  string thirdPartyEmail
```

Authenticates with the required server


###### Parameters

`displayedTerms` The terms that were displayed to the user
`thirdPartyEmail` Optional email address used for authentication
`sync` Optional parameter to indicate if the profile should begin syncing with the server immediately after authentication

___

### IPotentialModioEmailAuthService{#Modio.Authentication.IPotentialModioEmailAuthService}

```csharp
public interface IPotentialModioEmailAuthService
```

___

### ModioEmailAuthService{#Modio.Authentication.ModioEmailAuthService}

```csharp
public class ModioEmailAuthService : IModioAuthService,  IGetActiveUserIdentifier,  IPotentialModioEmailAuthService
```

Use for authenticating with email

```csharp

GameObject codeWindow;
void Awake()
{
    ModioServices.Bind&lt;IModioAuthService&gt;()
                 .FromInstance(new ModioEmailAuthPlatform(), 50);
}
async void Authenticate()
{
    Error error = await ModioClient.AuthService.Authenticate(true, "some_email@supercoolemail.com");
    if (error)
        Debug.LogError($"Error authenticating with email");
    else
        Debug.Log($"Successfully authenticated");
}
Task&lt;string&gt; ShowCodePrompt()
{
    codeWindow.Enable;
    // Capture security code here
    string code = await SomeCodeInputLogic();
    return code;
}

```



###### Property


#### `bool IsEmailPlatform`

```csharp
public bool IsEmailPlatform
```



#### [`ModioAPI.Portal`](#Modio.API.ModioAPI.Portal) `Portal`

```csharp
public ModioAPI.Portal Portal
```



###### Method


#### Authenticate{#Modio.Authentication.ModioEmailAuthService.Authenticate}

```csharp
public async Task<Error> Authenticate(  bool displayedTerms,  string thirdPartyEmail
```
Begins the email authentication process. This will invoke the `codePrompter` passed either
into the constructor of this class or with [`SetCodePrompter`](#Modio.Authentication.ModioEmailAuthService.SetCodePrompter) to enter the security code.

###### Returns

`Error.None` if the authentication completed successfully.


#### AuthenticateWithoutEmailRequest{#Modio.Authentication.ModioEmailAuthService.AuthenticateWithoutEmailRequest}

```csharp
public async Task<Error> AuthenticateWithoutEmailRequest()
```
Use this to authenticate with a previously acquired, still valid security code.

###### Returns

`Error.None` if the authentication completed successfully.


#### SetCodePrompter{#Modio.Authentication.ModioEmailAuthService.SetCodePrompter}

```csharp
public void SetCodePrompter(IEmailCodePrompter codePrompter)
```


#### SetCodePrompter{#Modio.Authentication.ModioEmailAuthService.SetCodePrompter}

```csharp
public void SetCodePrompter(Func<Task<string>> codePrompter)
```


#### GetActiveUserIdentifier{#Modio.Authentication.ModioEmailAuthService.GetActiveUserIdentifier}

```csharp
public Task<string> GetActiveUserIdentifier()
```

___

### ModioMultiplatformAuthResolver{#Modio.Authentication.ModioMultiplatformAuthResolver}

```csharp
public class ModioMultiplatformAuthResolver : IModioAuthService,  IGetActiveUserIdentifier,  IPotentialModioEmailAuthService
```


###### Property


#### [`IModioAuthService`](#Modio.Authentication.IModioAuthService) `ServiceOverride`

```csharp
public IModioAuthService ServiceOverride
```
`get` `set`


#### `IReadOnlyList AuthBindings`

```csharp
public IReadOnlyList<IModioAuthService> AuthBindings
```
`get`


#### `bool IsEmailPlatform`

```csharp
public bool IsEmailPlatform
```



#### [`ModioAPI.Portal`](#Modio.API.ModioAPI.Portal) `Portal`

```csharp
public ModioAPI.Portal Portal
```



###### Method


#### Authenticate{#Modio.Authentication.ModioMultiplatformAuthResolver.Authenticate}

```csharp
public Task<Error> Authenticate(bool displayedTerms, string thirdPartyEmail
```


#### GetActiveUserIdentifier{#Modio.Authentication.ModioMultiplatformAuthResolver.GetActiveUserIdentifier}

```csharp
public Task<string> GetActiveUserIdentifier()
```

___

## Modio.Caching

| Type | Description |
|------|-------------|
| [`BaseCache`](#Modio.Caching.BaseCache) | Base class for caching objects in Modio. |

### BaseCache{#Modio.Caching.BaseCache}

```csharp
public abstract class BaseCache<TCache, TKey, TCachedObject>  where TCache : BaseCache<TCache, TKey, TCachedObject>, new()
```

Base class for caching objects in Modio.


###### Type Parameters

`TCache`:
`TKey`:
`TCachedObject`:


###### Property


#### `int SearchesNotInCache`

```csharp
public static int SearchesNotInCache
```



#### `int SearchesSavedByCache`

```csharp
public static  int SearchesSavedByCache
```



###### Method


#### Clear{#Modio.Caching.BaseCache.Clear}

```csharp
public static void Clear()
```

Clears the cache.



#### GetCachedSearch{#Modio.Caching.BaseCache.GetCachedSearch}

```csharp
public static bool GetCachedSearch(  SearchFilter filter,  string searchKey,  out TCachedObject[] cached,  out long resultTotal  )
```

Gets a cached search result based on the provided filter and search key.


###### Parameters

`filter` The filter to apply to the search.
`searchKey` The key used to identify the cached search.
`cached` The cached results of the search, if found.
`resultTotal` The total number of results found for the search.

###### Returns

Returns true if the search results were found in the cache, otherwise false.


#### CacheSearch{#Modio.Caching.BaseCache.CacheSearch}

```csharp
public static void CacheSearch(string searchKey, TCachedObject[] cached, long pageIndex, long resultTotal)
```

Stores the search results in the cache.


###### Parameters

`searchKey` The key used to identify the cached search.
`cached` The cached results of the search.
`pageIndex` The index of the page of results.
`resultTotal` The total number of results found for the search.


#### ClearCachedSearchCache{#Modio.Caching.BaseCache.ClearCachedSearchCache}

```csharp
public static void ClearCachedSearchCache()
```

Clears the cached search results.



#### ConstructFilterKey{#Modio.Caching.BaseCache.ConstructFilterKey}

```csharp
public static string ConstructFilterKey(SearchFilter filter)
```

Constructs a filter key based on the provided search filter.


###### Parameters

`filter` The filter to construct the key from.

###### Returns

A string representing the constructed filter key.

___

## Modio.Collections

| Type | Description |
|------|-------------|
| [`ModCollection`](#Modio.Collections.ModCollection) |  |
| [`ModCollectionStats`](#Modio.Collections.ModCollectionStats) |  |

### ModCollection{#Modio.Collections.ModCollection}

```csharp
public class ModCollection : IModioInfo
```


###### Property


#### [`ModioId`](#Modio.Mods.ModioId) `Id`

```csharp
public ModioId Id
```
`get`
The collection id.


#### [`UserProfile`](#Modio.Users.UserProfile) `Creator`

```csharp
public UserProfile Creator
```
`get`
The user who submitted the collection.


#### `DateTime DateUpdated`

```csharp
public DateTime DateUpdated
```
`get`
The date the collection was last updated.


#### `DateTime DateLive`

```csharp
public DateTime DateLive
```
`get`
The date the collection went live.


#### [`ModMaturityOptions`](#Modio.Mods.ModMaturityOptions) `MaturityOptions`

```csharp
public ModMaturityOptions MaturityOptions
```
`get`
The maturity options detected within this collection.


#### `long ArchiveFilesize`

```csharp
public long ArchiveFilesize
```
`get`
The total filesize of all mods in the collection.


#### `long Filesize`

```csharp
public long Filesize
```
`get`
The total uncompressed filesize of all mods in the collection.


#### [`ModTag`](#Modio.Mods.ModTag) `Tags`

```csharp
public ModTag[] Tags
```
`get`
The tags associated with the collection.


#### [`ModCollectionStats`](#Modio.Collections.ModCollectionStats) `Stats`

```csharp
public ModCollectionStats Stats
```
`get`
The stats of the collection.


#### [`ModioImageSource`](#Modio.Images.ModioImageSource) `Logo`

```csharp
public ModioImageSource<Mod.LogoResolution> Logo
```
`get`
The logo of the collection.


#### `string Name`

```csharp
public string Name
```
`get`
The name of the collection.


#### `string NameId`

```csharp
public string NameId
```
`get`
The name id of the collection.


#### `string Summary`

```csharp
public string Summary
```

The summary of the collection.


#### `string Description`

```csharp
public string Description
```
`get`
The description of the collection.


#### `bool IsFollowed`

```csharp
public bool IsFollowed
```
`get`
Whether the collection is followed by the user.


#### [`ModioRating`](#Plugins.Modio.Modio.Ratings.ModioRating) `CurrentUserRating`

```csharp
public ModioRating CurrentUserRating
```
`get`


###### Method


#### AddChangeListener{#Modio.Collections.ModCollection.AddChangeListener}

```csharp
public static void AddChangeListener(  ModCollectionChangeType subscribedChange,  Action<ModCollection, ModCollectionChangeType> listener  )
```
Adds an event handler to listen for whenever the [`ModCollectionChangeType`](#Modio.Collections.ModCollectionChangeType) of a collection
is changed.

###### Remarks

[`ModCollectionChangeType`](#Modio.Collections.ModCollectionChangeType) is a bit flag, multiple changes can be listened for with one
handler.


#### RemoveChangeListener{#Modio.Collections.ModCollection.RemoveChangeListener}

```csharp
public static void RemoveChangeListener(  ModCollectionChangeType subscribedChange,  Action<ModCollection, ModCollectionChangeType> listener  )
```

Removes an event handler that listens for changes to the [`ModCollectionChangeType`](#Modio.Collections.ModCollectionChangeType) of a collection.


###### Parameters

`subscribedChange` The type of change to unsubscribe from.
`listener` The event handler to remove.

###### Remarks

This will only remove the handler if it was previously added with [`AddChangeListener`](#Modio.Collections.ModCollection.AddChangeListener).


#### GetCollections{#Modio.Collections.ModCollection.GetCollections}

```csharp
public static async Task<(Error error, ModioPage<ModCollection> page)> GetCollections(  ModioAPI.Collections.GetModCollectionsFilter filter  )
```


#### Get{#Modio.Collections.ModCollection.Get}

```csharp
public static ModCollection Get(long id)
```


#### GetCollectionMods{#Modio.Collections.ModCollection.GetCollectionMods}

```csharp
public static async Task<(Error error, ModioPage<Mod> page)> GetCollectionMods(  long collectionId,  ModioAPI.Collections.GetCollectionModsFilter filter  )
```
Gets all mods that qualify the provided `ModioAPI.Collections.GetCollectionMods` parameters.

###### Remarks


This will cache searches and results. If a search exists in the cache, this method will
return those results.
The [`ModioAPI.Collections.GetCollectionModsFilter`](#Modio.API.ModioAPI.Collections.GetCollectionModsFilter) is used to filter the results, allowing
for pagination, sorting, and other search parameters.



#### GetMods{#Modio.Collections.ModCollection.GetMods}

```csharp
public async Task<(Error error, IReadOnlyList<Mod> results)> GetMods()
```

Gets all mods of the collection.


###### Returns

An asynchronous task that returns a tuple ([`Error`](#Modio.ModioLog.Error) error, `IReadOnlyList{Mod}` results), where:
`error` is the error encountered during the task (if any)
`result` is a readonly list of [`Mod`](#ModioResourceType.Mod) in the collection.



#### Subscribe{#Modio.Collections.ModCollection.Subscribe}

```csharp
public Task<Error> Subscribe()
```

Subscribe to all mods in this collection.


###### Returns

An [`Error`](#Modio.ModioLog.Error) indicating the success or failure of the operation.


#### Unsubscribe{#Modio.Collections.ModCollection.Unsubscribe}

```csharp
public Task<Error> Unsubscribe()
```

Unsubscribe from all mods in this collection.


###### Returns

An [`Error`](#Modio.ModioLog.Error) indicating the success or failure of the operation.


#### Follow{#Modio.Collections.ModCollection.Follow}

```csharp
public Task<Error> Follow()
```

Follow this collection.


###### Returns

An [`Error`](#Modio.ModioLog.Error) indicating the success or failure of the operation.


#### Unfollow{#Modio.Collections.ModCollection.Unfollow}

```csharp
public Task<Error> Unfollow()
```

Unfollow this collection.


###### Returns

An [`Error`](#Modio.ModioLog.Error) indicating the success or failure of the operation.


#### Rate{#Modio.Collections.ModCollection.Rate}

```csharp
public async Task<Error> Rate(ModioRating rating)
```

Rate this collection.


###### Parameters

`rating` The rating to give the collection.

###### Returns

An [`Error`](#Modio.ModioLog.Error) indicating the success or failure of the operation.


#### Report{#Modio.Collections.ModCollection.Report}

```csharp
public async Task<Error> Report(ReportType reportType, string contact, string summary)
```

___

### ModCollectionStats{#Modio.Collections.ModCollectionStats}

```csharp
public class ModCollectionStats
```


###### Property


#### `long CollectionId`

```csharp
public long CollectionId
```
`get`
The collection id.


#### `long ModsTotal`

```csharp
public long ModsTotal
```
`get`
The total number of mods contained in this collection


#### `long DownloadsToday`

```csharp
public long DownloadsToday
```
`get`
The number of downloads today.


#### `long UniqueDownloads`

```csharp
public long UniqueDownloads
```
`get`
The number of unique downloads.


#### `long Downloads`

```csharp
public long Downloads
```
`get`
The total number of downloads.


#### `long Followers`

```csharp
public long Followers
```
`get`
The total number of followers.


#### `long RatingsPositive`

```csharp
public long RatingsPositive
```
`get`
The number of positive ratings in the last 30 days.


#### `long RatingsPositive30Days`

```csharp
public long RatingsPositive30Days
```
`get`


#### `long RatingsNegative`

```csharp
public long RatingsNegative
```
`get`


#### `long RatingsNegative30Days`

```csharp
public long RatingsNegative30Days
```
`get`


#### `float? RatingsPercent`

```csharp
public float? RatingsPercent
```
`get`

___

### Enums


###### ModCollectionChangeType{#Modio.Collections.ModCollectionChangeType}


```csharp
IsFollowed         = 1 << 0
```

```csharp
Rating            = 1 << 1
```

```csharp
ModList          = 1 << 2
```

```csharp
Everything        = ~0
```

___

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

## Modio.Extensions

| Type | Description |
|------|-------------|
| [`DateTimeExtensions`](#Modio.Extensions.DateTimeExtensions) |  |
| [`LongExtensions`](#Modio.Extensions.LongExtensions) |  |
| [`ModioResourceTypeExtensions`](#Modio.Extensions.ModioResourceTypeExtensions) |  |
| [`TaskExtensions`](#Modio.Extensions.TaskExtensions) |  |

### DateTimeExtensions{#Modio.Extensions.DateTimeExtensions}

```csharp
public static class DateTimeExtensions
```


###### Method


#### GetUtcDateTime{#Modio.Extensions.DateTimeExtensions.GetUtcDateTime}

```csharp
public static DateTime GetUtcDateTime(this long timeStamp)
```


#### GetLocalDateTime{#Modio.Extensions.DateTimeExtensions.GetLocalDateTime}

```csharp
public static DateTime GetLocalDateTime(this long timeStamp)
```

___

### LongExtensions{#Modio.Extensions.LongExtensions}

```csharp
public static class LongExtensions
```


###### Method


#### RoundTimestampToHour{#Modio.Extensions.LongExtensions.RoundTimestampToHour}

```csharp
public static long RoundTimestampToHour(this long timeStamp)
```


#### RoundTimestampsToHour{#Modio.Extensions.LongExtensions.RoundTimestampsToHour}

```csharp
public static ICollection<long> RoundTimestampsToHour(this ICollection<long> timeStamps)
```

___

### ModioResourceTypeExtensions{#Modio.Extensions.ModioResourceTypeExtensions}

```csharp
public static class ModioResourceTypeExtensions
```


###### Method


#### GetStringCode{#Modio.Extensions.ModioResourceTypeExtensions.GetStringCode}

```csharp
public static string GetStringCode(this ModioResourceType resourceType)
```

___

### TaskExtensions{#Modio.Extensions.TaskExtensions}

```csharp
public static class TaskExtensions
```


###### Method


#### ForgetTaskSafely{#Modio.Extensions.TaskExtensions.ForgetTaskSafely}

```csharp
public static async void ForgetTaskSafely(this Task task)
```

___

## Modio.FileIO

| Type | Description |
|------|-------------|
| [`BaseDataStorage`](#Modio.FileIO.BaseDataStorage) | SystemIO Implementation of [`IModioDataStorage`](#Modio.FileIO.IModioDataStorage) |
| [`CRCComputingStreamWrapper`](#Modio.FileIO.CRCComputingStreamWrapper) |  |
| [`DefaultRootPathProvider`](#Modio.FileIO.DefaultRootPathProvider) |  |
| [`IModioDataStorage`](#Modio.FileIO.IModioDataStorage) | Interface for the platform file IO services |
| [`IModioRootPathProvider`](#Modio.FileIO.IModioRootPathProvider) |  |
| [`LinuxDataStorage`](#Modio.FileIO.LinuxDataStorage) |  |
| [`MD5ComputingStreamWrapper`](#Modio.FileIO.MD5ComputingStreamWrapper) |  |
| [`MacDataStorage`](#Modio.FileIO.MacDataStorage) |  |
| [`ModInstallProgressTracker`](#Modio.FileIO.ModInstallProgressTracker) |  |
| [`ModioDiskTestSettings`](#Modio.FileIO.ModioDiskTestSettings) |  |
| [`ModioZipInputStream`](#Modio.FileIO.ModioZipInputStream) |  |
| [`StreamSlice`](#Modio.FileIO.StreamSlice) |  |
| [`WindowsRootPathProvider`](#Modio.FileIO.WindowsRootPathProvider) | Provides a root path for windows |
| [`ZipHelperStreamExtensions`](#Modio.FileIO.ZipHelperStreamExtensions) |  |

### BaseDataStorage{#Modio.FileIO.BaseDataStorage}

```csharp
public class BaseDataStorage : IModioDataStorage
```

SystemIO Implementation of [`IModioDataStorage`](#Modio.FileIO.IModioDataStorage)


###### Method


#### Init{#Modio.FileIO.BaseDataStorage.Init}

```csharp
public virtual async Task<Error> Init()
```


#### Shutdown{#Modio.FileIO.BaseDataStorage.Shutdown}

```csharp
public virtual async Task Shutdown()
```


#### DebugDeleteAllGameData{#Modio.FileIO.BaseDataStorage.DebugDeleteAllGameData}

```csharp
[ModioDebugMenu]  public static void DebugDeleteAllGameData()
```


#### DeleteAllGameData{#Modio.FileIO.BaseDataStorage.DeleteAllGameData}

```csharp
public Task<Error> DeleteAllGameData()
```


#### ReadGameData{#Modio.FileIO.BaseDataStorage.ReadGameData}

```csharp
public virtual Task<(Error error, GameData result)> ReadGameData()
```


#### WriteGameData{#Modio.FileIO.BaseDataStorage.WriteGameData}

```csharp
public virtual Task<Error> WriteGameData(GameData gameData)
```


#### DeleteGameData{#Modio.FileIO.BaseDataStorage.DeleteGameData}

```csharp
public virtual Task<Error> DeleteGameData()
```


#### ReadIndexData{#Modio.FileIO.BaseDataStorage.ReadIndexData}

```csharp
public virtual Task<(Error error, ModIndex index)> ReadIndexData()
```


#### WriteIndexData{#Modio.FileIO.BaseDataStorage.WriteIndexData}

```csharp
public virtual Task<Error> WriteIndexData(ModIndex index)
```


#### DeleteIndexData{#Modio.FileIO.BaseDataStorage.DeleteIndexData}

```csharp
public virtual Task<Error> DeleteIndexData()
```


#### ReadUserData{#Modio.FileIO.BaseDataStorage.ReadUserData}

```csharp
public virtual Task<(Error error, UserSaveObject result)> ReadUserData(string localUserId)
```


#### WriteUserData{#Modio.FileIO.BaseDataStorage.WriteUserData}

```csharp
public virtual Task<Error> WriteUserData(UserSaveObject userObject)
```


#### DeleteUserData{#Modio.FileIO.BaseDataStorage.DeleteUserData}

```csharp
public virtual Task<Error> DeleteUserData(string localUserId)
```


#### ReadAllSavedUserData{#Modio.FileIO.BaseDataStorage.ReadAllSavedUserData}

```csharp
public virtual async Task<(Error error, UserSaveObject[] results)> ReadAllSavedUserData()
```


#### DownloadModFileFromStream{#Modio.FileIO.BaseDataStorage.DownloadModFileFromStream}

```csharp
public virtual async Task<Error> DownloadModFileFromStream(  long modId,  long modfileId,  Stream downloadStream,  string md5Hash,  CancellationToken token  )
```


#### CalculateMd5Hash{#Modio.FileIO.BaseDataStorage.CalculateMd5Hash}

```csharp
public static async Task<byte[]> CalculateMd5Hash(string filePath, byte[] buffer)
```

Calculate a MD5 Hash


###### Parameters

`filePath`
`buffer`

###### Returns



#### DeleteModfile{#Modio.FileIO.BaseDataStorage.DeleteModfile}

```csharp
public virtual Task<Error> DeleteModfile(long modId, long modfileId)
```


#### ScanForModfiles{#Modio.FileIO.BaseDataStorage.ScanForModfiles}

```csharp
public virtual Task<(Error error, List<(long modId, long modfileId)> results)> ScanForModfiles()
```


#### InstallMod{#Modio.FileIO.BaseDataStorage.InstallMod}

```csharp
public virtual async Task<Error> InstallMod(Mod mod, long modfileId, CancellationToken token)
```


#### InstallModFromStream{#Modio.FileIO.BaseDataStorage.InstallModFromStream}

```csharp
public virtual async Task<Error> InstallModFromStream(  Mod mod,  long modfileId,  Stream stream,  string md5Hash,  CancellationToken token  )
```


#### DeleteInstalledMod{#Modio.FileIO.BaseDataStorage.DeleteInstalledMod}

```csharp
public virtual Task<Error> DeleteInstalledMod(Mod mod, long modfileId)
```


#### ScanForInstalledMods{#Modio.FileIO.BaseDataStorage.ScanForInstalledMods}

```csharp
public virtual Task<(Error error, List<(long modId, long modfileId)> results)> ScanForInstalledMods()
```


#### ReadCachedImage{#Modio.FileIO.BaseDataStorage.ReadCachedImage}

```csharp
public virtual async Task<(Error error, byte[] result)> ReadCachedImage(Uri serverPath)
```


#### WriteCachedImage{#Modio.FileIO.BaseDataStorage.WriteCachedImage}

```csharp
public virtual async Task<Error> WriteCachedImage(Uri serverPath, byte[] data)
```


#### DeleteCachedImage{#Modio.FileIO.BaseDataStorage.DeleteCachedImage}

```csharp
public virtual Task<Error> DeleteCachedImage(Uri serverPath)
```


#### IsThereAvailableFreeSpaceFor{#Modio.FileIO.BaseDataStorage.IsThereAvailableFreeSpaceFor}

```csharp
public virtual Task<bool> IsThereAvailableFreeSpaceFor(long tempBytes, long persistentBytes)
```


#### IsThereAvailableFreeSpaceForModfile{#Modio.FileIO.BaseDataStorage.IsThereAvailableFreeSpaceForModfile}

```csharp
public virtual Task<bool> IsThereAvailableFreeSpaceForModfile(long bytes)
```


#### GetAvailableFreeSpaceForModfile{#Modio.FileIO.BaseDataStorage.GetAvailableFreeSpaceForModfile}

```csharp
public virtual Task<long> GetAvailableFreeSpaceForModfile()
```


#### IsThereAvailableFreeSpaceForModInstall{#Modio.FileIO.BaseDataStorage.IsThereAvailableFreeSpaceForModInstall}

```csharp
public virtual Task<bool> IsThereAvailableFreeSpaceForModInstall(long bytes)
```


#### GetAvailableFreeSpaceForModInstall{#Modio.FileIO.BaseDataStorage.GetAvailableFreeSpaceForModInstall}

```csharp
public virtual Task<long> GetAvailableFreeSpaceForModInstall()
```


#### GetModfilePath{#Modio.FileIO.BaseDataStorage.GetModfilePath}

```csharp
public virtual string GetModfilePath(long modId, long modfileId)
```


#### GetInstallPath{#Modio.FileIO.BaseDataStorage.GetInstallPath}

```csharp
public virtual string GetInstallPath(long modId, long modfileId)  // Match V2 install path. Note that initial V3 versions put mods in an "Installed" directory; see MigrateLegacyModInstalls
```


#### DoesModfileExist{#Modio.FileIO.BaseDataStorage.DoesModfileExist}

```csharp
public virtual bool DoesModfileExist(long modId, long modfileId)
```


#### DoesInstallExist{#Modio.FileIO.BaseDataStorage.DoesInstallExist}

```csharp
public virtual bool DoesInstallExist(long modId, long modfileId)
```


#### CompressToZip{#Modio.FileIO.BaseDataStorage.CompressToZip}

```csharp
public virtual async Task<Error> CompressToZip(string filePath, Stream outputTo)
```


#### CompressToZipStream{#Modio.FileIO.BaseDataStorage.CompressToZipStream}

```csharp
public virtual async Task<(Error, Stream)> CompressToZipStream(string filePath, long modId)
```


#### CleanUpCompressToZipStream{#Modio.FileIO.BaseDataStorage.CleanUpCompressToZipStream}

```csharp
public virtual Task CleanUpCompressToZipStream(long modId)
```

___

### CRCComputingStreamWrapper{#Modio.FileIO.CRCComputingStreamWrapper}

```csharp
public class CRCComputingStreamWrapper : Stream
```


###### Property


#### `bool CanRead`

```csharp
public override bool CanRead
```



#### `bool CanWrite`

```csharp
public override bool CanWrite
```



#### `bool CanSeek`

```csharp
public override bool CanSeek
```



#### `long Length`

```csharp
public override long Length
```



#### `long Position`

```csharp
public override long Position
```
`get` `set`


###### Method


#### ReadOnly{#Modio.FileIO.CRCComputingStreamWrapper.ReadOnly}

```csharp
public static CRCComputingStreamWrapper ReadOnly(Stream baseStream, bool streamOwner
```

Creates a new instance of the CRCComputingStreamWrapper that computes CRC32 checksums for read operations.


###### Parameters

`baseStream` The base stream to wrap.
`streamOwner` Indicates whether the CRCComputingStreamWrapper owns the base stream and should dispose of it when done.

###### Returns

The CRCComputingStreamWrapper instance.

###### Exceptions

`ArgumentNullException`:


#### WriteOnly{#Modio.FileIO.CRCComputingStreamWrapper.WriteOnly}

```csharp
public static CRCComputingStreamWrapper WriteOnly(Stream baseStream, bool streamOwner
```

Creates a new instance of the CRCComputingStreamWrapper that computes CRC32 checksums for write operations.


###### Parameters

`baseStream` The base stream to wrap.
`streamOwner` Indicates whether the CRCComputingStreamWrapper owns the base stream and should dispose of it when done.

###### Returns

The CRCComputingStreamWrapper instance.

###### Exceptions

`ArgumentNullException`:


#### Flush{#Modio.FileIO.CRCComputingStreamWrapper.Flush}

```csharp
public override void Flush()
```


#### GetCrcValue{#Modio.FileIO.CRCComputingStreamWrapper.GetCrcValue}

```csharp
public long GetCrcValue()
```


#### WriteAsync{#Modio.FileIO.CRCComputingStreamWrapper.WriteAsync}

```csharp
public override async Task WriteAsync(byte[] buffer, int offset, int count, CancellationToken cancellationToken)
```


#### Read{#Modio.FileIO.CRCComputingStreamWrapper.Read}

```csharp
public override int Read(byte[] buffer, int offset, int count)
```


#### ReadAsync{#Modio.FileIO.CRCComputingStreamWrapper.ReadAsync}

```csharp
public override async Task<int> ReadAsync(  byte[] buffer,  int offset,  int count,  CancellationToken cancellationToken  )
```


#### Seek{#Modio.FileIO.CRCComputingStreamWrapper.Seek}

```csharp
public override long Seek(long offset, SeekOrigin origin)
```


#### SetLength{#Modio.FileIO.CRCComputingStreamWrapper.SetLength}

```csharp
public override void SetLength(long value)
```


#### Write{#Modio.FileIO.CRCComputingStreamWrapper.Write}

```csharp
public override void Write(byte[] buffer, int offset, int count)
```

___

### DefaultRootPathProvider{#Modio.FileIO.DefaultRootPathProvider}

```csharp
public class DefaultRootPathProvider : IModioRootPathProvider
```


###### Property


#### `string Path`

```csharp
public virtual string Path
```



###### Method


#### GetUserPath{#Modio.FileIO.DefaultRootPathProvider.GetUserPath}

```csharp
public Task<string> GetUserPath()
```

___

### IModioDataStorage{#Modio.FileIO.IModioDataStorage}

```csharp
public interface IModioDataStorage
```
Interface for the platform file IO services

___

### IModioRootPathProvider{#Modio.FileIO.IModioRootPathProvider}

```csharp
public interface IModioRootPathProvider
```


###### Property


#### `string Path`

```csharp
public string Path
```
`get`

Path of Mod Installs


___

### LinuxDataStorage{#Modio.FileIO.LinuxDataStorage}

```csharp
public class LinuxDataStorage : BaseDataStorage
```

___

### MD5ComputingStreamWrapper{#Modio.FileIO.MD5ComputingStreamWrapper}

```csharp
public class MD5ComputingStreamWrapper : Stream
```


###### Property


#### `int TotalBytesRead`

```csharp
public int TotalBytesRead
```
`get`


#### `bool CanRead`

```csharp
public override bool CanRead
```



#### `bool CanSeek`

```csharp
public override bool CanSeek
```



#### `bool CanWrite`

```csharp
public override bool CanWrite
```



#### `long Length`

```csharp
public override long Length
```



#### `long Position`

```csharp
public override long Position
```
`get` `set`


###### Method


#### Flush{#Modio.FileIO.MD5ComputingStreamWrapper.Flush}

```csharp
public override void Flush()
```


#### GetMD5HashAsync{#Modio.FileIO.MD5ComputingStreamWrapper.GetMD5HashAsync}

```csharp
public async Task<string> GetMD5HashAsync()
```


#### ReadAsync{#Modio.FileIO.MD5ComputingStreamWrapper.ReadAsync}

```csharp
public override async Task<int> ReadAsync(byte[] buffer, int offset, int count, CancellationToken cancellationToken)
```


#### Read{#Modio.FileIO.MD5ComputingStreamWrapper.Read}

```csharp
public override int Read(byte[] buffer, int offset, int count)
```


#### Seek{#Modio.FileIO.MD5ComputingStreamWrapper.Seek}

```csharp
public override long Seek(long offset, SeekOrigin origin)
```


#### SetLength{#Modio.FileIO.MD5ComputingStreamWrapper.SetLength}

```csharp
public override void SetLength(long value)
```


#### Write{#Modio.FileIO.MD5ComputingStreamWrapper.Write}

```csharp
public override void Write(byte[] buffer, int offset, int count)
```

___

### MacDataStorage{#Modio.FileIO.MacDataStorage}

```csharp
public class MacDataStorage : BaseDataStorage
```

___

### ModInstallProgressTracker{#Modio.FileIO.ModInstallProgressTracker}

```csharp
public class ModInstallProgressTracker
```


###### Property


#### `Func CurrentBytesGetter`

```csharp
public Func<long> CurrentBytesGetter
```
`get` `set`


###### Method


#### Update{#Modio.FileIO.ModInstallProgressTracker.Update}

```csharp
public void Update()
```


#### SetBytesRead{#Modio.FileIO.ModInstallProgressTracker.SetBytesRead}

```csharp
public void SetBytesRead(long currentBytes)
```

___

### ModioDiskTestSettings{#Modio.FileIO.ModioDiskTestSettings}

```csharp
public class ModioDiskTestSettings : IModioServiceSettings
```


###### Field


#### `bool OverrideDiskSpaceRemaining`

```csharp
bool OverrideDiskSpaceRemaining
```


#### `int BytesRemaining`

```csharp
int BytesRemaining
```

___

### ModioZipInputStream{#Modio.FileIO.ModioZipInputStream}

```csharp
public class ModioZipInputStream : ZipInputStream
```


###### Method


#### GetNextEntryWithBackTrack{#Modio.FileIO.ModioZipInputStream.GetNextEntryWithBackTrack}

```csharp
public ZipEntry GetNextEntryWithBackTrack()
```


#### ReadUntilEndAsync{#Modio.FileIO.ModioZipInputStream.ReadUntilEndAsync}

```csharp
public async Task ReadUntilEndAsync(CancellationToken token)
```


#### GetHeaderStream{#Modio.FileIO.ModioZipInputStream.GetHeaderStream}

```csharp
public MemoryStream GetHeaderStream()
```

Gets the header stream containing the zip central directory signature.


###### Returns

The `MemoryStream` containing the header data, or null if no header was found.


#### Read{#Modio.FileIO.ModioZipInputStream.Read}

```csharp
public override int Read(byte[] buffer, int offset, int count)
```

___

### StreamSlice{#Modio.FileIO.StreamSlice}

```csharp
public class StreamSlice : Stream
```


###### Property


#### `bool CanRead`

```csharp
public override bool CanRead
```



#### `bool CanSeek`

```csharp
public override bool CanSeek
```



#### `bool CanWrite`

```csharp
public override bool CanWrite
```



#### `long Length`

```csharp
public override long Length
```



#### `long Position`

```csharp
public override long Position
```
`get` `set`


###### Method


#### Flush{#Modio.FileIO.StreamSlice.Flush}

```csharp
public override void Flush()
```


#### Read{#Modio.FileIO.StreamSlice.Read}

```csharp
public override int Read(byte[] buffer, int offset, int count)
```


#### Seek{#Modio.FileIO.StreamSlice.Seek}

```csharp
public override long Seek(long offset, SeekOrigin origin)
```


#### SetLength{#Modio.FileIO.StreamSlice.SetLength}

```csharp
public override void SetLength(long value)
```


#### Write{#Modio.FileIO.StreamSlice.Write}

```csharp
public override void Write(byte[] buffer, int offset, int count)
```

___

### WindowsRootPathProvider{#Modio.FileIO.WindowsRootPathProvider}

```csharp
public class WindowsRootPathProvider : IModioRootPathProvider
```

Provides a root path for windows



###### Property


#### `string Path`

```csharp
public string Path
```


Path to the shared public folder;

Typically returns "C:\Users\Public\"




###### Method


#### IsPublicEnvironmentVariableSet{#Modio.FileIO.WindowsRootPathProvider.IsPublicEnvironmentVariableSet}

```csharp
public static bool IsPublicEnvironmentVariableSet()
```

Is the required environment variable set.

True if the environment variable "public" is set, false otherwise.




#### GetUserPath{#Modio.FileIO.WindowsRootPathProvider.GetUserPath}

```csharp
public Task<string> GetUserPath()
```

Path to the local user app data folder;

Typically returns "C:\Users\&lt;UserName&gt;\AppData\Roaming"



___

### ZipHelperStreamExtensions{#Modio.FileIO.ZipHelperStreamExtensions}

```csharp
public static class ZipHelperStreamExtensions
```

___

## Modio.Mods

| Type | Description |
|------|-------------|
| [`GameData`](#Modio.Mods.GameData) |  |
| [`GameTagCategory`](#Modio.Mods.GameTagCategory) |  |
| [`IModioInfo`](#Modio.Mods.IModioInfo) |  |
| [`IModioResource`](#Modio.Mods.IModioResource) |  |
| [`Mod`](#Modio.Mods.Mod) | A mod.io mod. This is a mutable class that will be maintained and updated as more data arrives. See `OnModUpdated` &amp; [`AddChangeListener`](#Modio.Mods.Mod.AddChangeListener) for listening to these changes and updating UI elements accordingly. |
| [`ModDependencies`](#Modio.Mods.ModDependencies) |  |
| [`ModPlatform`](#Modio.Mods.ModPlatform) |  |
| [`ModSearchFilter`](#Modio.Mods.ModSearchFilter) |  |
| [`ModSku`](#Modio.Mods.ModSku) |  |
| [`ModStats`](#Modio.Mods.ModStats) |  |
| [`ModTag`](#Modio.Mods.ModTag) |  |
| [`Modfile`](#Modio.Mods.Modfile) |  |
| [`ModfileDownloadReference`](#Modio.Mods.ModfileDownloadReference) |  |
| [`ModioId`](#Modio.Mods.ModioId) |  |
| [`ModioPage`](#Modio.Mods.ModioPage) |  |

### GameData{#Modio.Mods.GameData}

```csharp
public class GameData
```


###### Field


#### [`GameTagCategory`](#Modio.Mods.GameTagCategory) `Categories`

```csharp
GameTagCategory[] Categories
```


#### `string CurrencyName`

```csharp
string CurrencyName
```


#### [`GameCommunityOptions`](#Modio.Mods.GameCommunityOptions) `CommunityOptions`

```csharp
GameCommunityOptions CommunityOptions
```


###### Method


#### GetGameDataFromDisk{#Modio.Mods.GameData.GetGameDataFromDisk}

```csharp
public static async Task<(Error error, GameData gameData)> GetGameDataFromDisk()
```


#### GetGameData{#Modio.Mods.GameData.GetGameData}

```csharp
public static async Task<(Error error, GameData data)> GetGameData()
```


#### SetGameData{#Modio.Mods.GameData.SetGameData}

```csharp
public static async Task<Error> SetGameData(GameData data)
```


#### SetGameTags{#Modio.Mods.GameData.SetGameTags}

```csharp
public static async Task<Error> SetGameTags(GameTagCategory[] tags)
```

___

### GameTagCategory{#Modio.Mods.GameTagCategory}

```csharp
public class GameTagCategory
```


###### Field


#### `string Name`

```csharp
string Name
```


#### `bool MultiSelect`

```csharp
bool MultiSelect
```


#### [`ModTag`](#Modio.Mods.ModTag) `Tags`

```csharp
ModTag[] Tags
```


#### `bool Hidden`

```csharp
bool Hidden
```


#### `bool Locked`

```csharp
bool Locked
```


###### Method


#### GetGameTagOptions{#Modio.Mods.GameTagCategory.GetGameTagOptions}

```csharp
public static async Task<(Error, GameTagCategory[])> GetGameTagOptions()
```


#### GetCollectionTagOptions{#Modio.Mods.GameTagCategory.GetCollectionTagOptions}

```csharp
public static Task<(Error, GameTagCategory[])> GetCollectionTagOptions()
```

Get the tags which are usable for collections. These are hardcoded
and not changeable per game.


___

### IModioInfo{#Modio.Mods.IModioInfo}

```csharp
public interface IModioInfo : IModioResource
```


###### Property


#### `string Name`

```csharp
public string Name
```
`get`


#### `string Summary`

```csharp
public string Summary
```
`get`


#### `string Description`

```csharp
public string Description
```
`get`


#### `DateTime DateLive`

```csharp
public DateTime DateLive
```
`get`


#### `DateTime DateUpdated`

```csharp
public DateTime DateUpdated
```
`get`


#### [`ModTag`](#Modio.Mods.ModTag) `Tags`

```csharp
public ModTag[] Tags
```
`get`


#### [`ModMaturityOptions`](#Modio.Mods.ModMaturityOptions) `MaturityOptions`

```csharp
public ModMaturityOptions MaturityOptions
```
`get`


#### [`ModioImageSource`](#Modio.Images.ModioImageSource) `Logo`

```csharp
public ModioImageSource<Mod.LogoResolution> Logo
```
`get`


#### [`UserProfile`](#Modio.Users.UserProfile) `Creator`

```csharp
public UserProfile Creator
```
`get`


#### [`ModioRating`](#Plugins.Modio.Modio.Ratings.ModioRating) `CurrentUserRating`

```csharp
public ModioRating CurrentUserRating
```
`get`


#### `bool IsSubscribed`

```csharp
public bool IsSubscribed
```
`get`

___

### IModioResource{#Modio.Mods.IModioResource}

```csharp
public interface IModioResource
```


###### Property


#### [`ModioId`](#Modio.Mods.ModioId) `Id`

```csharp
public ModioId Id
```
`get`

___

### Mod{#Modio.Mods.Mod}

```csharp
public class Mod : IModioInfo
```
A mod.io mod. This is a mutable class that will be maintained and updated as more data arrives. See
`OnModUpdated` &amp; [`AddChangeListener`](#Modio.Mods.Mod.AddChangeListener) for listening to these changes and updating
UI elements accordingly.


###### Property


#### [`ModioId`](#Modio.Mods.ModioId) `Id`

```csharp
public ModioId Id
```
`get`


#### `string Name`

```csharp
public string Name
```
`get`


#### `string Summary`

```csharp
public string Summary
```



#### `string Description`

```csharp
public string Description
```
`get`


#### `DateTime DateLive`

```csharp
public DateTime DateLive
```
`get`


#### `DateTime DateUpdated`

```csharp
public DateTime DateUpdated
```
`get`


#### [`ModTag`](#Modio.Mods.ModTag) `Tags`

```csharp
public ModTag[] Tags
```
`get`


#### [`ModSku`](#Modio.Mods.ModSku) `PortalSku`

```csharp
public ModSku PortalSku
```
`get`


#### `string MetadataBlob`

```csharp
public string MetadataBlob
```
`get`


#### `Dictionary MetadataKvps`

```csharp
public Dictionary<string,string> MetadataKvps
```
`get`


#### [`ModCommunityOptions`](#Modio.Mods.ModCommunityOptions) `CommunityOptions`

```csharp
public ModCommunityOptions CommunityOptions
```
`get`


#### [`ModMaturityOptions`](#Modio.Mods.ModMaturityOptions) `MaturityOptions`

```csharp
public ModMaturityOptions MaturityOptions
```
`get`


#### [`Modfile`](#Modio.API.ModioAPI.Mods.GetModsFilter.Modfile) `File`

```csharp
public Modfile File
```
`get`


#### [`ModPlatform`](#Modio.Mods.ModPlatform) `SupportedPlatforms`

```csharp
public ModPlatform[] SupportedPlatforms
```
`get`


#### [`ModStats`](#Modio.Mods.ModStats) `Stats`

```csharp
public ModStats Stats
```
`get`


#### `long Price`

```csharp
public long Price
```
`get`


#### `bool IsMonetized`

```csharp
public bool IsMonetized
```
`get`


#### [`ModioImageSource`](#Modio.Images.ModioImageSource) `Logo`

```csharp
public ModioImageSource<LogoResolution> Logo
```
`get`


#### `ModioImageSource<GalleryResolution> Gallery`

```csharp
public ModioImageSource<GalleryResolution>[] Gallery
```
`get`


#### [`UserProfile`](#Modio.Users.UserProfile) `Creator`

```csharp
public UserProfile Creator
```
`get`


#### [`ModDependencies`](#Modio.Mods.ModDependencies) `Dependencies`

```csharp
public ModDependencies Dependencies
```
`get`


#### [`ModioRating`](#Plugins.Modio.Modio.Ratings.ModioRating) `CurrentUserRating`

```csharp
public ModioRating CurrentUserRating
```
`get`


#### `bool IsSubscribed`

```csharp
public bool IsSubscribed
```
`get`


#### `bool IsPurchased`

```csharp
public bool IsPurchased
```
`get`


#### `bool IsEnabled`

```csharp
public bool IsEnabled
```
`get` `set`


#### `string FiatPrice`

```csharp
public string FiatPrice
```
`get` `set`


###### Method


#### AddChangeListener{#Modio.Mods.Mod.AddChangeListener}

```csharp
public static void AddChangeListener(ModChangeType subscribedChange, Action<Mod, ModChangeType> listener)
```
Adds an event handler to listen for whenever the [`ModChangeType`](#Modio.Mods.ModChangeType) of a mod
is changed.

###### Remarks

[`ModChangeType`](#Modio.Mods.ModChangeType) is a bit flag, multiple changes can be listened for with one
handler.


#### RemoveChangeListener{#Modio.Mods.Mod.RemoveChangeListener}

```csharp
public static void RemoveChangeListener(ModChangeType subscribedChange, Action<Mod, ModChangeType> listener)
```


#### Create{#Modio.Mods.Mod.Create}

```csharp
public static ModBuilder Create()
```
Constructs a [`ModBuilder`](#Modio.Mods.Builder.ModBuilder) to use to create a new mod.

###### Remarks

Requires a [`ChangeFlags.Name`](#ChangeFlags.Name), a [`ChangeFlags.Summary`](#ChangeFlags.Summary) and
a [`ChangeFlags.Logo`](#ChangeFlags.Logo) to publish a new mod.


#### Edit{#Modio.Mods.Mod.Edit}

```csharp
public ModBuilder Edit()
```
Constructs a [`ModBuilder`](#Modio.Mods.Builder.ModBuilder) to use to edit this mod.


#### Get{#Modio.Mods.Mod.Get}

```csharp
public static Mod Get(long id)
```


#### Subscribe{#Modio.Mods.Mod.Subscribe}

```csharp
public Task<Error> Subscribe(bool includeDependencies
```


#### Unsubscribe{#Modio.Mods.Mod.Unsubscribe}

```csharp
public Task<Error> Unsubscribe()
```


#### SetIsEnabled{#Modio.Mods.Mod.SetIsEnabled}

```csharp
public void SetIsEnabled(bool isEnabled)
```


#### GetMods{#Modio.Mods.Mod.GetMods}

```csharp
public static Task<(Error error, ModioPage<Mod> page)> GetMods(ModSearchFilter filter)
```
Gets all mods that qualify the provided [`ModSearchFilter`](#Modio.Mods.ModSearchFilter) parameters.

###### Remarks

This will cache searches and results. If a search exists in the cache, this method will
return those results.


#### GetMods{#Modio.Mods.Mod.GetMods}

```csharp
public static async Task<(Error error, ModioPage<Mod> page)> GetMods(ModioAPI.Mods.GetModsFilter filter)
```
Gets all mods that qualify the provided [`ModioAPI.Mods.GetModsFilter`](#Modio.API.ModioAPI.Mods.GetModsFilter) parameters.

###### Remarks

This will cache searches and results. If a search exists in the cache, this method will
return those results.
The [`ModioAPI.Mods.GetModsFilter`](#Modio.API.ModioAPI.Mods.GetModsFilter) is more advanced than the [`ModSearchFilter`](#Modio.Mods.ModSearchFilter) and
will allow more granularity.


#### GetModDetailsFromServer{#Modio.Mods.Mod.GetModDetailsFromServer}

```csharp
public async Task<(Error error, Mod result)> GetModDetailsFromServer()
```
Gets this mod's details from the mod.io server and applies those details to this mod.

###### Returns

An [`Error`](#Modio.ModioLog.Error) with an Error Code if there was one.


#### GetMod{#Modio.Mods.Mod.GetMod}

```csharp
public static async Task<(Error error, Mod result)> GetMod(ModioId modId)
```
Gets a Mod from the mod.io server. Will check the cache if a concrete object has already been
cached. If one has been cached, it will apply the details to the found concrete mod.


#### GetMods{#Modio.Mods.Mod.GetMods}

```csharp
public static async Task<(Error error, ICollection<Mod>)> GetMods(ICollection<long> neededModIds)
```
Gets all mods from a collection of IDs. Will intelligently check the cache for any present mods
and only get the mods that're missing from the cache.

###### Parameters

`neededModIds` A collection of [`ModioId`](#Modio.Mods.ModioId)s or longs to get.

###### Remarks

This can be considered a method to guarantee that the mods are in the cache by completion
of this task. Use this whenever you don't know if you'll have the mod data ready but need to be certain
it's available.

###### Returns

A collection of [`Mod`](#ModioResourceType.Mod)s.


#### RateMod{#Modio.Mods.Mod.RateMod}

```csharp
public async Task<Error> RateMod(ModioRating rating)
```
Rate this mod as either a single positive, negative or no rating.


#### Report{#Modio.Mods.Mod.Report}

```csharp
public async Task<Error> Report(  ReportType reportType,  ModNotWorkingReason reportReason,  string contact,  string summary  )
```
Reports this mod to mod.io. [`ReportType`](#Modio.Reports.ReportType) &amp; [`ModNotWorkingReason`](#Modio.Reports.ModNotWorkingReason) for
report reasons.


#### Purchase{#Modio.Mods.Mod.Purchase}

```csharp
public async Task<Error> Purchase(bool subscribeOnPurchase)
```


#### UninstallOtherUserMod{#Modio.Mods.Mod.UninstallOtherUserMod}

```csharp
public void UninstallOtherUserMod()
```
Will enqueue this mod for uninstallation with [`ModInstallationManagement`](#Modio.ModInstallationManagement).

###### Remarks

If the mod is subscribed to, this operation will cancel and output a warning.


#### ToString{#Modio.Mods.Mod.ToString}

```csharp
public override string ToString()
```


###### Enum

```csharp
X320_Y180
```

```csharp
X640_Y360
```

```csharp
X1280_Y720
```

```csharp
Original
```

```csharp
X320_Y180
```

```csharp
X1280_Y720
```

```csharp
Original
```

___

### ModDependencies{#Modio.Mods.ModDependencies}

```csharp
public class ModDependencies
```


###### Property


#### `int Count`

```csharp
public int Count
```
`get`


#### `bool HasDependencies`

```csharp
public bool HasDependencies
```
`get`


#### `bool IsMapped`

```csharp
public bool IsMapped
```



###### Method


#### GetAllDependencies{#Modio.Mods.ModDependencies.GetAllDependencies}

```csharp
public async Task<(Error error, IReadOnlyList<Mod> results)> GetAllDependencies()
```

Gets all dependencies of the dependent.


###### Returns

An asynchronous task that returns a tuple ([`Error`](#Modio.ModioLog.Error) error, `IReadOnlyList{Mod}` results), where:
`error` is the error encountered during the task (if any)
`result` is a readonly list of [`Mod`](#ModioResourceType.Mod) dependencies.


___

### ModPlatform{#Modio.Mods.ModPlatform}

```csharp
public class ModPlatform
```


###### Field


#### [`ModioAPI.Platform`](#Modio.API.ModioAPI.Platform) `Platform`

```csharp
ModioAPI.Platform Platform
```


#### `long ModfileLiveId`

```csharp
long ModfileLiveId
```


###### Method


#### GetModfile{#Modio.Mods.ModPlatform.GetModfile}

```csharp
public async Task<(Error, Modfile)> GetModfile()
```

___

### ModSearchFilter{#Modio.Mods.ModSearchFilter}

```csharp
[Serializable]  public class ModSearchFilter
```


###### Property


#### `int PageIndex`

```csharp
public int PageIndex
```
`get` `set`


#### `int PageSize`

```csharp
public int PageSize
```
`get` `set`


#### `bool ShowMatureContent`

```csharp
public bool ShowMatureContent
```
`get` `set`


#### [`SearchFilterPlatformStatus`](#Modio.Mods.SearchFilterPlatformStatus) `PlatformStatus`

```csharp
public SearchFilterPlatformStatus PlatformStatus
```
`get` `set`


#### [`SortModsBy`](#Modio.Mods.SortModsBy) `SortBy`

```csharp
public SortModsBy SortBy
```
`get` `set`


#### `bool IsSortAscending`

```csharp
public bool IsSortAscending
```
`get` `set`


#### [`RevenueType`](#Modio.Mods.ModSearchFilter.RevenueType) `RevenueType`

```csharp
public RevenueType RevenueType
```
`get` `set`


#### `int TagAndCategoryCount`

```csharp
public int TagAndCategoryCount
```



###### Method


#### AddSearchPhrase{#Modio.Mods.ModSearchFilter.AddSearchPhrase}

```csharp
public void AddSearchPhrase(string phrase, Filtering filtering
```

Adds a phrase into the filter to be used when filtering mods in a request.


###### Parameters

`phrase` the string to be added to the filter
`filtering` (Optional) type of filter to be used with the text, defaults to Full text search


#### AddSearchPhrases{#Modio.Mods.ModSearchFilter.AddSearchPhrases}

```csharp
public void AddSearchPhrases(ICollection<string> phrase, Filtering filtering
```


#### ClearSearchPhrases{#Modio.Mods.ModSearchFilter.ClearSearchPhrases}

```csharp
public void ClearSearchPhrases()
```


#### ClearSearchPhrases{#Modio.Mods.ModSearchFilter.ClearSearchPhrases}

```csharp
public void ClearSearchPhrases(Filtering filtering)
```


#### GetSearchPhrase{#Modio.Mods.ModSearchFilter.GetSearchPhrase}

```csharp
public IList<string> GetSearchPhrase(Filtering filtering)
```


#### AddTag{#Modio.Mods.ModSearchFilter.AddTag}

```csharp
public void AddTag(string tag)
```

Adds a tag to be used in filtering mods for a request.


###### Parameters

`tag` the tag to be added to the filter

###### See Also

[`ModTag`](#Modio.Mods.ModTag)
[`GameTagCategory`](#Modio.Mods.GameTagCategory)


#### AddTags{#Modio.Mods.ModSearchFilter.AddTags}

```csharp
public void AddTags(IEnumerable<string> tags)
```

Adds multiple tags used in filtering mods for a request.


###### Parameters

`tags` the tags to be added to the filter

###### See Also

[`ModTag`](#Modio.Mods.ModTag)
[`GameTagCategory`](#Modio.Mods.GameTagCategory)


#### ClearTags{#Modio.Mods.ModSearchFilter.ClearTags}

```csharp
public void ClearTags()
```


#### GetTags{#Modio.Mods.ModSearchFilter.GetTags}

```csharp
public IReadOnlyList<string> GetTags()
```


#### AddCollectionCategory{#Modio.Mods.ModSearchFilter.AddCollectionCategory}

```csharp
public void AddCollectionCategory(string category)
```


#### GetCollectionCategory{#Modio.Mods.ModSearchFilter.GetCollectionCategory}

```csharp
public string GetCollectionCategory()
```


#### AddUser{#Modio.Mods.ModSearchFilter.AddUser}

```csharp
public void AddUser(UserProfile user)
```

Adds a specific user to the filter, so that mods that were not created by the user
(or other users added to the filter) will not be returned.


###### See Also

[`UserProfile`](#Modio.Users.UserProfile)


#### GetUsers{#Modio.Mods.ModSearchFilter.GetUsers}

```csharp
public IReadOnlyList<UserProfile> GetUsers()
```


#### GetModsFilter{#Modio.Mods.ModSearchFilter.GetModsFilter}

```csharp
public ModioAPI.Mods.GetModsFilter GetModsFilter()
```


#### Clone{#Modio.Mods.ModSearchFilter.Clone}

```csharp
public ModSearchFilter Clone()
```

___

### ModSku{#Modio.Mods.ModSku}

```csharp
public class ModSku
```


###### Property


#### `string Portal`

```csharp
public string Portal
```
`get` `set`


#### `string Sku`

```csharp
public string Sku
```
`get` `set`


#### `long Id`

```csharp
public long Id
```
`get` `set`


###### Method


#### Equals{#Modio.Mods.ModSku.Equals}

```csharp
public bool Equals(ModSku other)
```


#### Equals{#Modio.Mods.ModSku.Equals}

```csharp
public override bool Equals(object obj)
```


#### GetHashCode{#Modio.Mods.ModSku.GetHashCode}

```csharp
public override int GetHashCode()
```

___

### ModStats{#Modio.Mods.ModStats}

```csharp
public class ModStats
```


###### Property


#### `long Subscribers`

```csharp
public long Subscribers
```
`get`


#### `long Downloads`

```csharp
public long Downloads
```
`get`


#### `long RatingsPositive`

```csharp
public long RatingsPositive
```
`get`


#### `long RatingsNegative`

```csharp
public long RatingsNegative
```
`get`


#### `long RatingsPercent`

```csharp
public long RatingsPercent
```
`get`

___

### ModTag{#Modio.Mods.ModTag}

```csharp
public class ModTag
```


###### Field


#### `string ApiName`

```csharp
string ApiName
```


###### Property


#### `string NameLocalized`

```csharp
public string NameLocalized
```
`get`


#### `bool IsVisible`

```csharp
public bool IsVisible
```
`get`


#### [`ResourceTagType`](#Modio.Mods.ResourceTagType) `TagType`

```csharp
public ResourceTagType TagType
```
`get`


#### `int Count`

```csharp
public int Count
```
`get` `set`


###### Method


#### SetLocalizations{#Modio.Mods.ModTag.SetLocalizations}

```csharp
public void SetLocalizations(Dictionary<string,string> translations)
```

___

### Modfile{#Modio.Mods.Modfile}

```csharp
public class Modfile
```


###### Property


#### `long ModId`

```csharp
public long ModId
```
`get`


#### `long Id`

```csharp
public long Id
```
`get`


#### `long FileSize`

```csharp
public long FileSize
```
`get`


#### `long ArchiveFileSize`

```csharp
public long ArchiveFileSize
```
`get`


#### `string InstallLocation`

```csharp
public string InstallLocation
```
`get` `set`


#### `string Version`

```csharp
public string Version
```
`get`


#### `string MetadataBlob`

```csharp
public string MetadataBlob
```
`get`


#### [`ModFileState`](#Modio.Mods.ModFileState) `State`

```csharp
public ModFileState State
```
`get` `set`


#### [`Error`](#Modio.ModioLog.Error) `FileStateErrorCause`

```csharp
public Error FileStateErrorCause
```
`get` `set`


#### `float FileStateProgress`

```csharp
public float FileStateProgress
```
`get` `set`


#### `long DownloadingBytesPerSecond`

```csharp
public long DownloadingBytesPerSecond
```
`get` `set`


#### [`ModfileDownloadReference`](#Modio.Mods.ModfileDownloadReference) `Download`

```csharp
public ModfileDownloadReference Download
```
`get`


#### `string Md5Hash`

```csharp
public string Md5Hash
```
`get`

___

### ModfileDownloadReference{#Modio.Mods.ModfileDownloadReference}

```csharp
public struct ModfileDownloadReference
```


###### Field


#### `string BinaryUrl`

```csharp
string BinaryUrl
```


#### `DateTime ExpiresAfter`

```csharp
DateTime ExpiresAfter
```

___

### ModioId{#Modio.Mods.ModioId}

```csharp
public readonly struct ModioId : IEquatable<ModioId>
```


###### Method


#### IsValid{#Modio.Mods.ModioId.IsValid}

```csharp
public bool IsValid()
```


#### Equals{#Modio.Mods.ModioId.Equals}

```csharp
public override bool Equals(object obj)
```


#### GetHashCode{#Modio.Mods.ModioId.GetHashCode}

```csharp
public override int GetHashCode()
```


#### ToString{#Modio.Mods.ModioId.ToString}

```csharp
public override string ToString()
```


#### Equals{#Modio.Mods.ModioId.Equals}

```csharp
public bool Equals(ModioId other)
```

___

### ModioPage{#Modio.Mods.ModioPage}

```csharp
public class ModioPage<T>
```


###### Field


#### `T Data`

```csharp
T[] Data
```


#### `int PageSize`

```csharp
int PageSize
```


#### `long PageIndex`

```csharp
long PageIndex
```


#### `long TotalSearchResults`

```csharp
long TotalSearchResults
```


###### Method


#### HasMoreResults{#Modio.Mods.ModioPage.HasMoreResults}

```csharp
public bool HasMoreResults()
```

___

### Enums


###### GameCommunityOptions{#Modio.Mods.GameCommunityOptions}


```csharp
None              = 0
```

```csharp
EnableComments    = 1
```

```csharp
EnablePreviews    = 64
```

```csharp
EnablePreviewUrls = 128
```

```csharp
AllowNegativeRatings = 256
```

```csharp
AllowDependencies = 1024
```

___

###### ModChangeType{#Modio.Mods.ModChangeType}


```csharp
Modfile           = 1 << 0
```

```csharp
IsEnabled         = 1 << 1
```

```csharp
IsSubscribed      = 1 << 2
```

```csharp
ModObject         = 1 << 3
```

```csharp
DownloadProgress  = 1 << 4
```

```csharp
FileState         = 1 << 5
```

```csharp
Rating            = 1 << 6
```

```csharp
IsPurchased         = 1 << 7
```

```csharp
Generic           = 1 << 8
```

```csharp
Dependencies      = 1 << 9
```

```csharp
Everything        = ~0
```

___

###### ModCommunityOptions{#Modio.Mods.ModCommunityOptions}


```csharp
None              = 0
```

```csharp
EnableComments    = 1
```

```csharp
EnablePreviews    = 64
```

```csharp
EnablePreviewUrls = 128
```

```csharp
AllowDependencies = 1024
```

___

###### ModFileState{#Modio.Mods.ModFileState}


```csharp
None
```
Mod has not been downloaded.

```csharp
Queued
```
Mod has been queued for download & install.

```csharp
Downloading
```
Mod is being downloaded for the first time.

```csharp
Downloaded
```
Mod has been downloaded and is awaiting install.

```csharp
Installing
```
Mod is downloaded and being installed.

```csharp
Installed
```
Mod is installed.

```csharp
Updating
```
Mod is installed and an update is being downloaded.

```csharp
Uninstalling
```
Mod is being uninstalled.

```csharp
FileOperationFailed
```
An operation failure has occured when installing/uninstalling this mod.

___

###### ModMaturityOptions{#Modio.Mods.ModMaturityOptions}


```csharp
None     = 0
```

```csharp
Alcohol  = 1
```

```csharp
Drugs    = 2
```

```csharp
Violence = 4
```

```csharp
Explicit = 8
```

___

###### ModMonetizationOption{#Modio.Mods.ModMonetizationOption}


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

###### ResourceTagType{#Modio.Mods.ResourceTagType}


```csharp
ModTag
```

```csharp
CollectionCategory
```

```csharp
CollectionTag
```

___

###### RevenueType{#Modio.Mods.RevenueType}


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

###### SearchFilterPlatformStatus{#Modio.Mods.SearchFilterPlatformStatus}


```csharp
None = 0
```

```csharp
PendingOnly = 1
```

```csharp
LiveAndPending = 2
```

___

###### SortModsBy{#Modio.Mods.SortModsBy}


Category to be used in the ModSearchFilter for determining how mods should be filtered in a
request.


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

## Modio.Images

| Type | Description |
|------|-------------|
| [`BaseImageCache`](#Modio.Images.BaseImageCache) |  |
| [`BaseImageCache`](#Modio.Images.BaseImageCache) |  |
| [`IExternalAvatarProviderService`](#Modio.Images.IExternalAvatarProviderService) |  |
| [`ImageCacheBytes`](#Modio.Images.ImageCacheBytes) |  |
| [`ImageReference`](#Modio.Images.ImageReference) | DownloadReference that contains the URL to download an image with. (DownloadReference is serializable with Unity's JsonUtility) |
| [`LazyImage`](#Modio.Images.LazyImage) |  |
| [`ModioImageSource`](#Modio.Images.ModioImageSource) |  |

### BaseImageCache{#Modio.Images.BaseImageCache}

```csharp
public abstract class BaseImageCache
```


###### Method


#### CacheToDisk{#Modio.Images.BaseImageCache.CacheToDisk}

```csharp
public static void CacheToDisk(ImageReference image, bool shouldCache)
```

___

### BaseImageCache{#Modio.Images.BaseImageCache}

```csharp
public abstract class BaseImageCache<T> : BaseImageCache where T : class
```


###### Method


#### GetCachedImage{#Modio.Images.BaseImageCache.GetCachedImage}

```csharp
public T GetCachedImage(ImageReference uri)
```


#### DownloadImage{#Modio.Images.BaseImageCache.DownloadImage}

```csharp
public Task<(Error errror, T image)> DownloadImage(ImageReference uri)
```


#### GetFirstCachedImage{#Modio.Images.BaseImageCache.GetFirstCachedImage}

```csharp
public T GetFirstCachedImage(IEnumerable<ImageReference> imageReferences)
```

___

### IExternalAvatarProviderService{#Modio.Images.IExternalAvatarProviderService}

```csharp
public interface IExternalAvatarProviderService<TImage>
```

___

### ImageCacheBytes{#Modio.Images.ImageCacheBytes}

```csharp
public class ImageCacheBytes : BaseImageCache<byte[]>
```


###### Field


#### [`ImageCacheBytes`](#Modio.Images.ImageCacheBytes) `Instance`

```csharp
ImageCacheBytes Instance = new ImageCacheBytes()
```

___

### ImageReference{#Modio.Images.ImageReference}

```csharp
[System.Serializable]  public struct ImageReference : IEquatable<ImageReference>
```

DownloadReference that contains the URL to download an image with.
(DownloadReference is serializable with Unity's JsonUtility)



###### Property


#### `bool IsValid`

```csharp
public bool IsValid
```


Check if there is a valid url for this image. You may want to check this before using


###### Returns

true if the url isn't null


#### `string Url`

```csharp
public string Url
```
`get`


###### Method


#### Equals{#Modio.Images.ImageReference.Equals}

```csharp
public bool Equals(ImageReference other)
```


#### Equals{#Modio.Images.ImageReference.Equals}

```csharp
public override bool Equals(object obj)
```


#### GetHashCode{#Modio.Images.ImageReference.GetHashCode}

```csharp
public override int GetHashCode()
```

___

### LazyImage{#Modio.Images.LazyImage}

```csharp
public class LazyImage<TImage> where TImage : class
```


###### Method


#### SetImage{#Modio.Images.LazyImage.SetImage}

```csharp
public async void SetImage<T>(ModioImageSource<T> source, T resolution) where T : Enum
```

___

### ModioImageSource{#Modio.Images.ModioImageSource}

```csharp
public class ModioImageSource<TResolution> where TResolution:Enum
```


###### Property


#### `string FileName`

```csharp
public string FileName
```
`get`


###### Method


#### GetUri{#Modio.Images.ModioImageSource.GetUri}

```csharp
public ImageReference GetUri(TResolution resolution)
```


#### GetAllReferences{#Modio.Images.ModioImageSource.GetAllReferences}

```csharp
public IEnumerable<ImageReference> GetAllReferences()
```


#### CacheLowestResolutionOnDisk{#Modio.Images.ModioImageSource.CacheLowestResolutionOnDisk}

```csharp
public void CacheLowestResolutionOnDisk(bool shouldCache)
```

___

## Modio.Monetization

| Type | Description |
|------|-------------|
| [`IModioEntitlementService`](#Modio.Monetization.IModioEntitlementService) |  |
| [`IModioStorefrontService`](#Modio.Monetization.IModioStorefrontService) |  |
| [`IModioUsdMarketplaceService`](#Modio.Monetization.IModioUsdMarketplaceService) | A service interface for handling USD marketplace operations. |
| [`IModioVirtualCurrencyProviderService`](#Modio.Monetization.IModioVirtualCurrencyProviderService) | Use this interface if the target platform supports purchasing Virtual Currency but requires it to display in UI in-game. |
| [`ModioFiatPrice`](#Modio.Monetization.ModioFiatPrice) |  |
| [`ModioVirtualCurrencyName`](#Modio.Monetization.ModioVirtualCurrencyName) |  |
| [`MonetizationSettings`](#Modio.Monetization.MonetizationSettings) |  |
| [`PortalSku`](#Modio.Monetization.PortalSku) |  |
| [`PriceFormatter`](#Modio.Monetization.PriceFormatter) |  |

### IModioEntitlementService{#Modio.Monetization.IModioEntitlementService}

```csharp
public interface IModioEntitlementService
```


###### Method


#### SyncEntitlements{#Modio.Monetization.IModioEntitlementService.SyncEntitlements}

```csharp
public Task<Error> SyncEntitlements();
```

___

### IModioStorefrontService{#Modio.Monetization.IModioStorefrontService}

```csharp
public interface IModioStorefrontService
```


###### Method


#### OpenPlatformPurchaseFlow{#Modio.Monetization.IModioStorefrontService.OpenPlatformPurchaseFlow}

```csharp
public Task<Error> OpenPlatformPurchaseFlow();
```

___

### IModioUsdMarketplaceService{#Modio.Monetization.IModioUsdMarketplaceService}

```csharp
public interface IModioUsdMarketplaceService
```

A service interface for handling USD marketplace operations.



###### Method


#### UpdateSkuCache{#Modio.Monetization.IModioUsdMarketplaceService.UpdateSkuCache}

```csharp
public Task<Error> UpdateSkuCache();
```

Update the local cache of SKUs for a portal


###### Returns

A tuple containing an error if the operation failed, and an array of PortalSku objects representing the updated SKU cache.

___

### IModioVirtualCurrencyProviderService{#Modio.Monetization.IModioVirtualCurrencyProviderService}

```csharp
public interface IModioVirtualCurrencyProviderService
```
Use this interface if the target platform supports purchasing Virtual Currency but requires it to display in UI in-game.


###### Method


#### GetCurrencyPackSkus{#Modio.Monetization.IModioVirtualCurrencyProviderService.GetCurrencyPackSkus}

```csharp
public Task<(Error error, PortalSku[] skus)> GetCurrencyPackSkus();
```
Retrieve a list of [`UserPortal`](#Modio.Users.UserSaveObject.UserPortal) specific SKUs that can be purchased.


#### OpenCheckoutFlow{#Modio.Monetization.IModioVirtualCurrencyProviderService.OpenCheckoutFlow}

```csharp
public Task<Error> OpenCheckoutFlow(PortalSku sku);
```
Opens the target platform's checkout flow. This will open a separate UI window outside the game.

###### Parameters

`sku` The SKU being purchased.

___

### ModioFiatPrice{#Modio.Monetization.ModioFiatPrice}

```csharp
public static class ModioFiatPrice
```


###### Method


#### FetchSkuCache{#Modio.Monetization.ModioFiatPrice.FetchSkuCache}

```csharp
public static async Task<Error> FetchSkuCache(ModioAPI.Portal portal)
```


#### TryGetLocalPrice{#Modio.Monetization.ModioFiatPrice.TryGetLocalPrice}

```csharp
public static void TryGetLocalPrice(Mod mod)
```

___

### ModioVirtualCurrencyName{#Modio.Monetization.ModioVirtualCurrencyName}

```csharp
public class ModioVirtualCurrencyName
```


###### Method


#### GetVirtualCurrencyName{#Modio.Monetization.ModioVirtualCurrencyName.GetVirtualCurrencyName}

```csharp
public static async Task<(Error error, string name)> GetVirtualCurrencyName()
```

___

### MonetizationSettings{#Modio.Monetization.MonetizationSettings}

```csharp
[Serializable]  public class MonetizationSettings : IModioServiceSettings
```


###### Field


#### `string CurrencyFallbackName`

```csharp
string CurrencyFallbackName = "Cogs"
```


#### [`ModioMonetizationType`](#Modio.Monetization.ModioMonetizationType) `MonetizationType`

```csharp
ModioMonetizationType MonetizationType = ModioMonetizationType.VirtualCurrency
```

___

### PortalSku{#Modio.Monetization.PortalSku}

```csharp
public struct PortalSku
```


###### Field


#### [`ModioAPI.Portal`](#Modio.API.ModioAPI.Portal) `Portal`

```csharp
ModioAPI.Portal Portal
```


#### `string Sku`

```csharp
string Sku
```


#### `string Name`

```csharp
string Name
```


#### `string FormattedPrice`

```csharp
string FormattedPrice
```


#### `int Value`

```csharp
int Value
```

___

### PriceFormatter{#Modio.Monetization.PriceFormatter}

```csharp
public static class PriceFormatter
```


###### Method


#### FormatPrice{#Modio.Monetization.PriceFormatter.FormatPrice}

```csharp
public static string FormatPrice(string currency, double price)
```

Helps format a price based on currency code.


###### Parameters

`currency` The currency code.
`price` The price amount.

###### Returns


___

### Enums


###### ModioMonetizationType{#Modio.Monetization.ModioMonetizationType}


```csharp
VirtualCurrency = 0
```

```csharp
UsdMarketplace = 1
```

___

## Modio.Reports

| Type | Description |
|------|-------------|
| [`ReportResourceTypes`](#Modio.Reports.ReportResourceTypes) |  |

### ReportResourceTypes{#Modio.Reports.ReportResourceTypes}

```csharp
public static class ReportResourceTypes
```


###### Field


#### `string GAMES`

```csharp
string GAMES = "games"
```


#### `string MODS`

```csharp
string MODS = "mods"
```


#### `string USERS`

```csharp
string USERS = "users"
```


#### `string COLLECTIONS`

```csharp
string COLLECTIONS = "collections"
```

___

### Enums


###### ModNotWorkingReason{#Modio.Reports.ModNotWorkingReason}


```csharp
None = 0
```

```csharp
CrashesGame = 1
```

```csharp
DoesNotLoad = 2
```

```csharp
ConflictsWithOtherMods = 3
```

```csharp
MissingDependencies = 4
```

```csharp
InstallationIssues = 5
```

```csharp
BuggyBehaviour = 6
```

```csharp
IncompatibleWithGameVersion = 7
```

```csharp
FileCorruption = 8
```

___

###### ReportType{#Modio.Reports.ReportType}


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

## Modio.Settings

| Type | Description |
|------|-------------|
| [`ModInstallationManagementSettings`](#Modio.Settings.ModInstallationManagementSettings) |  |
| [`PortainerSettings`](#Modio.Settings.PortainerSettings) | Supports mod.io's internal tests |
| [`TempModInstallationSettings`](#Modio.Settings.TempModInstallationSettings) |  |

### ModInstallationManagementSettings{#Modio.Settings.ModInstallationManagementSettings}

```csharp
[Serializable]  public class ModInstallationManagementSettings : IModioServiceSettings
```


###### Field


#### `bool AutoActivate`

```csharp
bool AutoActivate = true
```

___

### PortainerSettings{#Modio.Settings.PortainerSettings}

```csharp
public class PortainerSettings : IModioServiceSettings
```

Supports mod.io's internal tests



###### Field


#### `string Stack`

```csharp
string Stack
```


#### `bool AlwaysReseed`

```csharp
bool AlwaysReseed
```

___

### TempModInstallationSettings{#Modio.Settings.TempModInstallationSettings}

```csharp
[Serializable]  public class TempModInstallationSettings : IModioServiceSettings
```


###### Field


#### `int LifeTimeDays`

```csharp
int LifeTimeDays = 0
```

___

## Modio.Users

| Type | Description |
|------|-------------|
| [`CachedEntitlement`](#Modio.Users.CachedEntitlement) |  |
| [`ModCollectionRepository`](#Modio.Users.ModCollectionRepository) |  |
| [`ModRepository`](#Modio.Users.ModRepository) |  |
| [`User`](#Modio.Users.User) |  |
| [`UserProfile`](#Modio.Users.UserProfile) | Represents a particular mod.io user with their username, DownloadReferences for getting their avatar, as well as their language and timezone. |
| [`UserSaveObject`](#Modio.Users.UserSaveObject) |  |
| [`Wallet`](#Modio.Users.Wallet) |  |

### CachedEntitlement{#Modio.Users.CachedEntitlement}

```csharp
public struct CachedEntitlement
```


###### Field


#### `long EntitlementType`

```csharp
long EntitlementType
```


#### `string SkuId`

```csharp
string SkuId
```

___

### ModCollectionRepository{#Modio.Users.ModCollectionRepository}

```csharp
public class ModCollectionRepository : IDisposable
```


###### Method


#### GetFollowed{#Modio.Users.ModCollectionRepository.GetFollowed}

```csharp
public IEnumerable<ModCollection> GetFollowed()
```


#### IsFollowed{#Modio.Users.ModCollectionRepository.IsFollowed}

```csharp
public bool IsFollowed(ModioId modId)
```


#### Dispose{#Modio.Users.ModCollectionRepository.Dispose}

```csharp
public void Dispose()
```

___

### ModRepository{#Modio.Users.ModRepository}

```csharp
public class ModRepository : IDisposable
```


###### Property


#### `bool HasGotSubscriptions`

```csharp
public bool HasGotSubscriptions
```
`get` `set`


###### Method


#### GetCreatedMods{#Modio.Users.ModRepository.GetCreatedMods}

```csharp
[Obsolete("GetCreatedMods should be called via User.Current.GetUserCreations, which is async", true)]  public IEnumerable<Mod> GetCreatedMods()
```


#### GetSubscribed{#Modio.Users.ModRepository.GetSubscribed}

```csharp
public IEnumerable<Mod> GetSubscribed()
```


#### GetPurchased{#Modio.Users.ModRepository.GetPurchased}

```csharp
public IEnumerable<Mod> GetPurchased()
```


#### GetDisabled{#Modio.Users.ModRepository.GetDisabled}

```csharp
public IEnumerable<Mod> GetDisabled()
```


#### RemoveMod{#Modio.Users.ModRepository.RemoveMod}

```csharp
public void RemoveMod(Mod mod)
```


#### IsSubscribed{#Modio.Users.ModRepository.IsSubscribed}

```csharp
public bool IsSubscribed(ModioId modId)
```


#### IsDisabled{#Modio.Users.ModRepository.IsDisabled}

```csharp
public bool IsDisabled(ModioId modId)
```


#### IsPurchased{#Modio.Users.ModRepository.IsPurchased}

```csharp
public bool IsPurchased(ModioId modId)
```


#### Dispose{#Modio.Users.ModRepository.Dispose}

```csharp
public void Dispose()
```

___

### User{#Modio.Users.User}

```csharp
public class User
```


###### Property


#### [`User`](#Modio.Users.User) `Current`

```csharp
public static User Current
```
`get`


#### `string LocalUserId`

```csharp
public string LocalUserId
```
`get`


#### `long UserId`

```csharp
public long UserId
```



#### `bool IsInitialized`

```csharp
public bool IsInitialized
```
`get`


#### `bool HasAcceptedTermsOfUse`

```csharp
public bool HasAcceptedTermsOfUse
```
`get`


#### `bool IsAuthenticated`

```csharp
public bool IsAuthenticated
```
`get`


#### `bool IsUpdating`

```csharp
public bool IsUpdating
```
`get`


#### [`UserProfile`](#Modio.Users.UserProfile) `Profile`

```csharp
public UserProfile Profile
```
`get`


#### [`Wallet`](#Modio.Users.User.Wallet) `Wallet`

```csharp
public Wallet Wallet
```
`get`


#### [`ModRepository`](#Modio.Users.User.ModRepository) `ModRepository`

```csharp
public ModRepository ModRepository
```
`get`


#### [`ModCollectionRepository`](#Modio.Users.User.ModCollectionRepository) `ModCollectionRepository`

```csharp
public ModCollectionRepository ModCollectionRepository
```
`get`


#### [`ModioAPI.Portal`](#Modio.API.ModioAPI.Portal) `AuthenticatedPortal`

```csharp
public ModioAPI.Portal AuthenticatedPortal
```
`get`


###### Method


#### InitializeNewUser{#Modio.Users.User.InitializeNewUser}

```csharp
public static async Task InitializeNewUser()
```


#### OnAuthenticated{#Modio.Users.User.OnAuthenticated}

```csharp
public void OnAuthenticated(string oAuthToken, long dateExpires, bool sync
```


#### ApplyAuthenticationAsync{#Modio.Users.User.ApplyAuthenticationAsync}

```csharp
public async Task ApplyAuthenticationAsync(string oAuthToken, bool sync)
```


#### Sync{#Modio.Users.User.Sync}

```csharp
public async Task<Error> Sync()
```

Syncs the user profile, subscriptions, purchases, wallet, ratings and entitlements with changes made from the Web Interface.


###### Returns


An asynchronous task that returns [`Error`](#Modio.ModioLog.Error).[`Error.None`](#Modio.Error.None) on success.



#### SyncProfile{#Modio.Users.User.SyncProfile}

```csharp
public async Task<Error> SyncProfile()
```

Syncs the user profile with changes made on the WebInterface


###### Returns


An asynchronous task that returns [`Error`](#Modio.ModioLog.Error).[`Error.None`](#Modio.Error.None) on success.



#### SyncSubscriptions{#Modio.Users.User.SyncSubscriptions}

```csharp
public async Task<Error> SyncSubscriptions()
```

Syncs the user subscriptions with changes made on the WebInterface


###### Returns


An asynchronous task that returns [`Error`](#Modio.ModioLog.Error).[`Error.None`](#Modio.Error.None) on success.



#### SyncPurchases{#Modio.Users.User.SyncPurchases}

```csharp
public async Task<Error> SyncPurchases()
```

Syncs the user purchases with changes made on the WebInterface


###### Returns


An asynchronous task that returns [`Error`](#Modio.ModioLog.Error).[`Error.None`](#Modio.Error.None) on success.



#### SyncCollections{#Modio.Users.User.SyncCollections}

```csharp
public async Task<Error> SyncCollections()
```

Syncs the user collections with changes made on the WebInterface


###### Returns


An asynchronous task that returns [`Error`](#Modio.ModioLog.Error).[`Error.None`](#Modio.Error.None) on success.



#### SyncEntitlements{#Modio.Users.User.SyncEntitlements}

```csharp
public async Task<Error> SyncEntitlements()
```

Syncs the user entitlements with changes made on the WebInterface


###### Returns


An asynchronous task that returns [`Error`](#Modio.ModioLog.Error).[`Error.None`](#Modio.Error.None) on success.



#### SyncWallet{#Modio.Users.User.SyncWallet}

```csharp
public async Task<Error> SyncWallet()
```

Syncs the user wallet with changes made on the WebInterface


###### Returns


An asynchronous task that returns [`Error`](#Modio.ModioLog.Error).[`Error.None`](#Modio.Error.None) on success.



#### SyncModRatings{#Modio.Users.User.SyncModRatings}

```csharp
public async Task<Error> SyncModRatings()
```

Syncs the user ratings with changes made on the WebInterface


###### Returns


An asynchronous task that returns [`Error`](#Modio.ModioLog.Error).[`Error.None`](#Modio.Error.None) on success.



#### SyncCollectionRatings{#Modio.Users.User.SyncCollectionRatings}

```csharp
public async Task<Error> SyncCollectionRatings()
```

Syncs the user ratings with changes made on the WebInterface


###### Returns


An asynchronous task that returns [`Error`](#Modio.ModioLog.Error).[`Error.None`](#Modio.Error.None) on success.



#### GetMutedUsers{#Modio.Users.User.GetMutedUsers}

```csharp
public async Task<(Error error, IReadOnlyList<UserProfile> results)> GetMutedUsers()
```
Gets all users muted by the currently authenticated User from the API.

###### Returns

An asynchronous task that returns a tuple ([`Error`](#Modio.ModioLog.Error) error, `IReadOnlyList{UserProfile}` results), where:
`error` is the error encountered during the task (if any)
`result` is a readonly list of muted users [`UserProfile`](#Modio.Users.UserProfile).


###### Remarks

All API requests and Mod requests will already filter out any entries by muted users.
This will not cache any data. Please use sparingly.


#### GetUserCreations{#Modio.Users.User.GetUserCreations}

```csharp
public async Task<(Error error, IReadOnlyList<Mod> mods)> GetUserCreations(bool filterForGame
```
Gets all mod creations by the User from the API.

###### Parameters

`filterForGame` Optionally filter to only receive mods made for the current GameId

###### Returns

An asynchronous task that returns a tuple ([`Error`](#Modio.ModioLog.Error) error, `IReadOnlyList{Mod}` results), where:
`error` is the error encountered during the task (if any)
`result` is a readonly list of [`Mod`](#ModioResourceType.Mod)s created by this user.



#### GetUserCreationsPaged{#Modio.Users.User.GetUserCreationsPaged}

```csharp
public Task<(Error error, ModioPage<Mod> page)> GetUserCreationsPaged(  ModioAPI.Mods.GetModsFilter modsFilter,  bool filterForGame
```

Get all creations by the user. This does cache results



#### GetUserCreationsPaged{#Modio.Users.User.GetUserCreationsPaged}

```csharp
public async Task<(Error error, ModioPage<Mod> page)> GetUserCreationsPaged(ModioAPI.Me.GetUserModsFilter filter, bool filterForGame
```

Get all creations by the user. This does cache results



#### SyncUsersFollowers{#Modio.Users.User.SyncUsersFollowers}

```csharp
public async Task<(Error error, IReadOnlyList<UserProfile> results)> SyncUsersFollowers()
```

Gets all users following the currently authenticated User from the API.


###### Returns

An asynchronous task that returns a tuple ([`Error`](#Modio.ModioLog.Error) error, `IReadOnlyList{UserProfile}` results), where:


#### SyncUsersFollowing{#Modio.Users.User.SyncUsersFollowing}

```csharp
public async Task<(Error error, IReadOnlyList<UserProfile> results)> SyncUsersFollowing()
```

Gets all users that the currently authenticated User is following from the API.


###### Returns

An asynchronous task that returns a tuple ([`Error`](#Modio.ModioLog.Error) error, `IReadOnlyList{UserProfile}` results), where:


#### FollowUser{#Modio.Users.User.FollowUser}

```csharp
public async Task<Error> FollowUser(UserProfile user)
```


#### UnfollowUser{#Modio.Users.User.UnfollowUser}

```csharp
public async Task<Error> UnfollowUser(UserProfile user)
```


#### TryGetRating{#Modio.Users.User.TryGetRating}

```csharp
public bool TryGetRating(ModioId id, ModioResourceType resourceType, out ModioRating rating)
```


#### DeleteUserData{#Modio.Users.User.DeleteUserData}

```csharp
[ModioDebugMenu(ShowInBrowserMenu = false, ShowInSettingsMenu = true)]  public static void DeleteUserData()
```
Removes the [`User`](#Modio.Users.User) and associated authentication and caches from this device.


#### LogOut{#Modio.Users.User.LogOut}

```csharp
public static void LogOut()
```
Logs out the current [`User`](#Modio.Users.User) without deleting any associated data stored on this device.


#### InvalidateAuthToken{#Modio.Users.User.InvalidateAuthToken}

```csharp
[ModioDebugMenu(ShowInBrowserMenu = true, ShowInSettingsMenu = false)]  public static void InvalidateAuthToken()
```

Sets the current user's auth token to an invalid value
Used for testing error handling


___

### UserProfile{#Modio.Users.UserProfile}

```csharp
[System.Serializable]  public class UserProfile : IEquatable<UserProfile>, IModioResource
```

Represents a particular mod.io user with their username, DownloadReferences for getting
their avatar, as well as their language and timezone.



###### Property


#### `string Username`

```csharp
public string Username
```
`get` `set`

The display name of the user's mod.io account



#### [`ModioId`](#Modio.Mods.ModioId) `UserId`

```csharp
public ModioId UserId
```
`get` `set`

This is the unique Id of the user.



#### `string PortalUsername`

```csharp
public string PortalUsername
```
`get`

The display name of the user's account they authenticated with. Eg if they authenticated
with Steam it would be their Steam username.



#### [`ModioImageSource`](#Modio.Images.ModioImageSource) `Avatar`

```csharp
public ModioImageSource<AvatarResolution> Avatar
```
`get`


#### `string Timezone`

```csharp
public string Timezone
```
`get`


#### `string Language`

```csharp
public string Language
```
`get`


#### `bool IsFollowedByLoggedInUser`

```csharp
public bool IsFollowedByLoggedInUser
```
`get`


###### Method


#### GetHashCode{#Modio.Users.UserProfile.GetHashCode}

```csharp
public override int GetHashCode()
```


#### Equals{#Modio.Users.UserProfile.Equals}

```csharp
public bool Equals(UserProfile other)
```


#### Equals{#Modio.Users.UserProfile.Equals}

```csharp
public override bool Equals(object obj)
```


#### Mute{#Modio.Users.UserProfile.Mute}

```csharp
public async Task<Error> Mute()
```


#### UnMute{#Modio.Users.UserProfile.UnMute}

```csharp
public async Task<Error> UnMute()
```


#### Report{#Modio.Users.UserProfile.Report}

```csharp
public async Task<Error> Report(ReportType reportType, string contact, string summary)
```


#### Follow{#Modio.Users.UserProfile.Follow}

```csharp
public Task<Error> Follow()
```

Follow this user by the currently logged in user.



#### Unfollow{#Modio.Users.UserProfile.Unfollow}

```csharp
public Task<Error> Unfollow()
```

Unfollow this user by the currently logged in user.



###### Enum

```csharp
X50_Y50
```

```csharp
X100_Y100
```

```csharp
Original
```

___

### UserSaveObject{#Modio.Users.UserSaveObject}

```csharp
[Serializable]  public class UserSaveObject
```


###### Field


#### `string LocalUserId`

```csharp
string LocalUserId
```


#### `string Username`

```csharp
string Username
```


#### `long UserId`

```csharp
long UserId
```


#### `string AuthToken`

```csharp
string AuthToken
```


#### `List SubscribedMods`

```csharp
List<long> SubscribedMods
```


#### `List DisabledMods`

```csharp
List<long> DisabledMods
```


#### `List PurchasedMods`

```csharp
List<long> PurchasedMods
```


#### `List FollowedCollections`

```csharp
List<long> FollowedCollections
```


#### `int UserPortal`

```csharp
int UserPortal
```

___

### Wallet{#Modio.Users.Wallet}

```csharp
public class Wallet
```


###### Property


#### `string Type`

```csharp
public string Type
```
`get`


#### `string Currency`

```csharp
public string Currency
```
`get`


#### `long Balance`

```csharp
public long Balance
```
`get`

___
