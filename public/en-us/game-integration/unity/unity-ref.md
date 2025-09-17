---
id: unity-unity-ref
title: Unity
slug: /unity/unity-ref
sidebar_position: 1
---

## Modio.Unity

| Type | Description |
|------|-------------|
| [`ImageCacheTexture2D`](#Modio.Unity.ImageCacheTexture2D) |  |
| [`ModioAPIUnityClient`](#Modio.Unity.ModioAPIUnityClient) |  |
| [`ModioAndroidSettings`](#Modio.Unity.ModioAndroidSettings) |  |
| [`ModioImageTexture2DExtensions`](#Modio.Unity.ModioImageTexture2DExtensions) |  |
| [`ModioPreInitializer`](#Modio.Unity.ModioPreInitializer) |  |
| [`ModioUnityLogger`](#Modio.Unity.ModioUnityLogger) |  |
| [`ModioUnitySettings`](#Modio.Unity.ModioUnitySettings) |  |
| [`UnityRootPathProvider`](#Modio.Unity.UnityRootPathProvider) | Provides a default root path for non-windows Unity platforms. |
| [`UnityWebBrowserHandler`](#Modio.Unity.UnityWebBrowserHandler) |  |

### ImageCacheTexture2D{#Modio.Unity.ImageCacheTexture2D}

```csharp
public class ImageCacheTexture2D : BaseImageCache<Texture2D>
```


###### Field


#### [`ImageCacheTexture2D`](#Modio.Unity.ImageCacheTexture2D) `Instance`

```csharp
ImageCacheTexture2D Instance = new ImageCacheTexture2D()
```

___

### ModioAPIUnityClient{#Modio.Unity.ModioAPIUnityClient}

```csharp
public class ModioAPIUnityClient : IModioAPIInterface
```


###### Property


#### `bool UseUnityClient`

```csharp
[ModioDebugMenu(ShowInSettingsMenu = true, ShowInBrowserMenu = false)]  public static bool UseUnityClient
```
`get` `set`


###### Method


#### SetBasePath{#Modio.Unity.ModioAPIUnityClient.SetBasePath}

```csharp
public void SetBasePath(string value)
```


#### AddDefaultPathParameter{#Modio.Unity.ModioAPIUnityClient.AddDefaultPathParameter}

```csharp
public void AddDefaultPathParameter(string key, string value)
```


#### RemoveDefaultPathParameter{#Modio.Unity.ModioAPIUnityClient.RemoveDefaultPathParameter}

```csharp
public void RemoveDefaultPathParameter(string key)
```


#### AddDefaultParameter{#Modio.Unity.ModioAPIUnityClient.AddDefaultParameter}

```csharp
public void AddDefaultParameter(string value)
```


#### RemoveDefaultParameter{#Modio.Unity.ModioAPIUnityClient.RemoveDefaultParameter}

```csharp
public void RemoveDefaultParameter(string value)
```


#### ResetConfiguration{#Modio.Unity.ModioAPIUnityClient.ResetConfiguration}

```csharp
public void ResetConfiguration()
```


#### DownloadFile{#Modio.Unity.ModioAPIUnityClient.DownloadFile}

```csharp
public async Task<(Error, Stream)> DownloadFile(string url, CancellationToken token
```


#### SetDefaultHeader{#Modio.Unity.ModioAPIUnityClient.SetDefaultHeader}

```csharp
public void SetDefaultHeader(string name, string value)
```


#### RemoveDefaultHeader{#Modio.Unity.ModioAPIUnityClient.RemoveDefaultHeader}

```csharp
public void RemoveDefaultHeader(string name)
```


#### GetJson{#Modio.Unity.ModioAPIUnityClient.GetJson}

```csharp
public Task<(Error error, T? result)> GetJson<T>(ModioAPIRequest request) where T : struct
```


#### GetJson{#Modio.Unity.ModioAPIUnityClient.GetJson}

```csharp
public Task<(Error error, JToken)> GetJson(ModioAPIRequest request)
```


#### Dispose{#Modio.Unity.ModioAPIUnityClient.Dispose}

```csharp
public void Dispose()
```

___

### ModioAndroidSettings{#Modio.Unity.ModioAndroidSettings}

```csharp
[Serializable]  public class ModioAndroidSettings : IModioServiceSettings
```

___

### ModioImageTexture2DExtensions{#Modio.Unity.ModioImageTexture2DExtensions}

```csharp
public static class ModioImageTexture2DExtensions
```


###### Method


#### DownloadAsTexture2D{#Modio.Unity.ModioImageTexture2DExtensions.DownloadAsTexture2D}

```csharp
public static Task<(Error error, Texture2D texture)> DownloadAsTexture2D(this ImageReference imageReference)
```


#### DownloadAsTexture2D{#Modio.Unity.ModioImageTexture2DExtensions.DownloadAsTexture2D}

```csharp
public static Task<(Error error, Texture2D texture)> DownloadAsTexture2D<TResolution>(  this ModioImageSource<TResolution> imageSource,  TResolution resolution  ) where TResolution : Enum
```

___

### ModioPreInitializer{#Modio.Unity.ModioPreInitializer}

```csharp
public class ModioPreInitializer : MonoBehaviour
```

___

### ModioUnityLogger{#Modio.Unity.ModioUnityLogger}

```csharp
public class ModioUnityLogger : IModioLogHandler
```


###### Method


#### LogHandler{#Modio.Unity.ModioUnityLogger.LogHandler}

```csharp
public void LogHandler(LogLevel logLevel, object message)
```

___

### ModioUnitySettings{#Modio.Unity.ModioUnitySettings}

```csharp
[CreateAssetMenu(fileName = "config.asset", menuName = "Modio/v3/config")]  public class ModioUnitySettings : ScriptableObject
```


###### Field


#### `string DefaultResourceName`

```csharp
string DefaultResourceName = "mod.io/v3_config"
```


#### `string DefaultResourceNameOverride`

```csharp
string DefaultResourceNameOverride = "mod.io/v3_config_local"
```


###### Property


#### [`ModioSettings`](#Modio.ModioSettings) `Settings`

```csharp
public ModioSettings Settings
```
`get`


###### Method


#### InvokeOnChanged{#Modio.Unity.ModioUnitySettings.InvokeOnChanged}

```csharp
public void InvokeOnChanged()
```

___

### UnityRootPathProvider{#Modio.Unity.UnityRootPathProvider}

```csharp
public class UnityRootPathProvider : IModioRootPathProvider
```

Provides a default root path for non-windows Unity platforms.



###### Property


#### `string Path`

```csharp
public string Path
```


Path to the shared public folder;

Typically returns "C:\Users\Public\"




#### `string UserPath`

```csharp
public string UserPath
```


Path to the local user app data folder;

Typically returns "C:\Users\&lt;UserName&gt;\AppData\Roaming"



___

### UnityWebBrowserHandler{#Modio.Unity.UnityWebBrowserHandler}

```csharp
public class UnityWebBrowserHandler : IWebBrowserHandler
```


###### Method


#### OpenUrl{#Modio.Unity.UnityWebBrowserHandler.OpenUrl}

```csharp
public void OpenUrl(string url)
```

___

## Modio.Unity.Settings

| Type | Description |
|------|-------------|
| [`ModioComponentUISettings`](#Modio.Unity.Settings.ModioComponentUISettings) |  |

### ModioComponentUISettings{#Modio.Unity.Settings.ModioComponentUISettings}

```csharp
[Serializable]  public class ModioComponentUISettings : IModioServiceSettings
```


###### Field


#### `bool ShowMonetizationUI`

```csharp
bool ShowMonetizationUI
```


#### `bool ShowEnableModToggle`

```csharp
bool ShowEnableModToggle
```


#### `bool FallbackToEmailAuthentication`

```csharp
bool FallbackToEmailAuthentication
```

___
