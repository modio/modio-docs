---
id: unity-authentication
title: User Authentication
slug: /unity/user-authentication
---

# User Authentication for Unity

Most of the API’s functionality requires player authentication. The Unity Plugin offers a range of SSO (single-sign on) authentication options, including *Steam, Meta, Epic Games, Apple, Google, Xbox, PlayStation 4/5, Nintendo Switch/2,* and more. 

We strongly recommend using these options as they provide a frictionless user experience and don't require multiple steps. You can further explore these options below and in our [Authentication Guide](https://docs.mod.io/authentication/).

This guide covers:

* [Email authentication](#email-authentication)
* [Single Sign-On](#single-sign-on)

## Email authentication

For now, let's start with a simple email authentication to allow us full access. To do so we need to bind the Email Authentication service so that it's chosen as the auth service for the plugin.

The `ModioEmailAuthService` class is provided for convenience. It requires an async task or object implementing `IEmailCodePrompter`. This is to tell a UI implementation when the email authentication process is ready to accept the code.

:::note
While creating the UI layout referenced below is outside the scope of this guide, there are great Unity UI tutorials available.
:::

With your UI created, let's add our authentication functionality:

```csharp
using UnityEngine.UI; // Add these to the top of your class
using Modio.Users;
using Modio.Authentication;

[SerializeField] InputField authInput;
[SerializeField] Button authRequest;
[SerializeField] Button authSubmit;

// Services should be bound in the Awake event. 
// Services bound in Start aren't guaranteed to bound in time for initialization.
void Awake()
{
    // This enforces email auth to be used, a higher priority can be used if needed
    ModioServices.Bind<IModioAuthService>()
                      .FromInstance(new ModioEmailAuthService(GetAuthCode));
}

// Start method...

async Task InitPlugin()
{
    // Initialization ...

    OnInit();
}

async Task OnInit()
{
    if (User.Current.IsAuthenticated)
    {
        OnAuth();
        return;
    }
    
    // You can assign these using the Inspector if you prefer
    authRequest.clicked += async () => await Authenticate();
}
   
async Task Authenticate()
{
    Error error = await ModioClient.AuthService.Authenticate(true, authInput.text);
    
    if (error)
    {
        Debug.LogError($"Error authenticating with email: {error}");
        return;
    }
    
    OnAuth();
}

// This will be called by the ModioEmailAuthService object we constructed earlier
async Task<string> GetAuthCode()
{
    bool codeEntered = false;
    
    authSubmit.onClick.AddListener(() => codeEntered = true);
    
    while (!codeEntered)
        await Task.Yield();
    
    return authInput.text;
}
   
void OnAuth()
{
    Debug.Log($"Authenticated user: {User.Current.Profile.Username}");
}
```

:::important
Don't forget to assign the fields in the inspector!
:::

If you've implemented the above correctly, you should now be able to:

1. Start Play mode in Unity
2. Enter your email address in the input field and press the `authRequest` button
3. Retrieve the authorization code from your inbox
4. Enter the authorization code into the input field and press the `authSubmit` button
5. See the logged authentication message

:::note
If there is no mod.io account associated with the provided email address, one will automatically be created.
:::

There is something worth highlighting: if you restart Play mode, you'll see the logged authentication message again almost immediately. This is the result of two separate factors:

- The authentication service with the highest priority is the same as the one last used by the user to authenticate.
- At the beginning of `OnInit()`, we check to see if we are already authenticated, and if so move straight to `OnAuth()`.

If you change the highest priority auth service to another one, then the user won't be automatically logged in. This is to help facilitate both a silent log in and multiple users on the same device.

:::note
if your email provider supports it, you can use plus-addressing to test multiple users with a single email address:
:::
> ```
> john.smith+test1@gmail.com
> jane.smith+test2@gmail.com
> juanita.smith+test3@gmail.com
> ```

## Single Sign-On

There are two types of SSO to consider:

1. [**Custom SSO**](https://docs.mod.io/authentication/openid/): Custom SSO harnesses your studio's authentication process as the single point of authentication. 

2. [**Platform SSO**](https://docs.mod.io/authentication/platform/): Platform SSO uses a given platform's authentication process as the single point of authentication. 

	The platforms included in this process are:

	* [Steam](https://docs.mod.io/platforms/steam/authentication)
	* [Meta Quest](https://docs.mod.io/platforms/meta/authentication)
	* [Google](https://docs.mod.io/platforms/google/authentication)
	* [Apple](https://docs.mod.io/platforms/apple/authentication)
	* [GOG Galaxy](https://docs.mod.io/platforms/gog/authentication)
	* [Nintendo Switch](https://docs.mod.io/platforms/switch#authentication)
	* [PlayStation™Network](https://docs.mod.io/platforms/playstation#authentication)
	* [Xbox Live](https://docs.mod.io/platforms/gdk#authentication)

Each platform has their own requirements and prerequisites for performing SSO.  Platform-specific authentication can be found in the respective [platform documentation](https://docs.mod.io/getting-started#expand-with-cross-platform-functionality).

### Steam Single Sign-On

As an example, let's have a look at setting up your game to use *Steam's* authentication method. Here, we're going to use *Steam* with the [Facepunch Steamworks library](https://wiki.facepunch.com/steamworks/).

Feel free to come back to this section later! Authentication is agnostic of the rest of this guide's behavior.

:::important
Before we can implement single sign-on, we need to configure Steam SSO for your game on the mod.io website. Please read our [documentation](https://docs.mod.io/platforms/steam/authentication/) on how to do this before continuing with the implementation below.
:::
>

To perform our Single Sign-On we're going to use Facepunch's Steamworks C# library to authenticate using a Steam account. Similarly to the Email authentication, we need to bind a Facepunch Auth Service:

```csharp
using Modio.Platforms.Facepunch; // Add this to the top of your class

void Awake()
{
    // Email binding...
        
    // By passing in the DeveloperOverride priority with the + 10, this will take precedence over email auth
    ModioServices.Bind<IModioAuthService>()
                 .FromInstance(new ModioFacepunchAuthService(), ModioServicePriority.DeveloperOverride + 10));    
}
```

:::important
this next section requires the `steamclient` to have been initialized before executing. this is out of scope for this guide, but you can find a convenient example of how to do this in `/unity/examples/steam/facepunch/facepunchexampl.cs`.
:::

### Include Terms of Use

In order to authenticate a user with mod.io, they must agree to the mod.io Terms of Use. This differs from Email authentication as the Terms of Use is built into the email sign-up process, not requiring it in-game. You can learn more about this in our [Terms of Use](https://docs.mod.io/terms-user-consent/) section. This window requires links to the mod.io Terms of Use &amp; the mod.io Privacy Policy to be valid.

:::note
While creating the UI layout referenced below is outside the scope of this guide, there are great Unity UI tutorials available.
:::

Using the above as a template, we'll want to modify the `OnInt()` method to display the Terms of Use if the highest priority auth service is Facepunch:

```csharp
async Task OnInit()
{
    // IsAuthenticated check...
    
    if (ModioClient.AuthService is ModioFacepunchAuthService)
    {
        tosContainer.SetActive(true);
        
        termsLink.onClick.AddListener(() => Application.OpenURL("https://mod.io/terms"));
        privacyLink.onClick.AddListener(() => Application.OpenURL("https://mod.io/privacy"));
        
        acceptButton.onClick.AddListener(() => Authenticate());
        denyButton.onClick.AddListener(() => tosContainer.SetActive(false));
        
        return;
    }
    
    // Attach authRequest click listener...
}
```

Lastly, we need to add a compiler directive to your project settings in order for the Facepunch library to compile. In your Project Settings, under Player and the platform you're building for, add `UNITY_FACEPUNCH` to the `Scripting Define Symbols`:

And that should be it! Log into Steam, accept the Terms of Use and you should see your Steam account authenticated with mod.io! If you've initialized your Steam client with the correct AppId then the mod.io plugin will automatically detect the currently logged in user and authenticate using that user.

## Next steps

Now that you've set up the authentication process, it's time to load UGC into your game by [Adding UGC](/unity/adding-ugc).

If you've already done this, we recommend working your way through the [Unity Getting Started Guides](/unity#unity-engine-core-plugin-guides) as they will teach you how to implement the fundamentals before moving onto exploring our [Features](https://docs.mod.io/features).