---
id: unity-mobile-iap
title: Mobile Marketplace
slug: /unity/marketplace-mobile-iap
---

# Mobile In-App Purchasing

This guide covers hooking up mod.io's [Marketplace](/monetization/marketplace) feature with Unity's In-App Purchasing service for mobile games.

mod.io Marketplace features are enabled either during the onboarding process when creating your game profile, or later through your game's Admin menu. Once enabled, you'll need to create Virtual Currency SKUs on each supported platform.

## Initial Setup

Before we can begin you'll need to have installed & setup the Unity In-App Purchasing module into your project:

* [Unity IAP](https://docs.unity3d.com/Packages/com.unity.purchasing@4.12/manual/Overview.html)

Additionally, please follow the below guides for setting up Virtual Currency for mod.io Marketplace on your required platforms:

* [Apple (iOS)](/platforms/apple/marketplace)
* [Google Play (Android)](/platforms/google/marketplace)

:::note[Platform Setup]
If you are implementing Marketplace for non-mobile platforms such as Steam or Xbox, refer to our [Unity Marketplace Guide](/unity/marketplace).
:::

## Template UI

The mod.io Unity Plugin features [Component UI](/in-game-ui/component) & [Template UI](/in-game-ui/template) which both have built-in support for [Monetization](/monetization), including conveniently purchasing through multiple platform storefronts. If you'd like to try it out, unpack the 'Experimental UI' .unitypackage found within the plugin. Once mod.io & your platform are configured with your SKUs, no additional work is required to integrate this into the UI solutions!

## Integration

In order to integrate Unity's IAP system with mod.io, you'll need to create a script that implements the interface `IDetailedStoreListener`. This is because only one implementation of `IDetailedStoreListener` can be initialized with Unity's IAP system. The mod.io Unity Engine Plugin also needs an instance of an `IStoreController` from Unity's IAP module and an instance of `IModioMobilePurchaseListenerService` which you'll also have to implement.

The `IModioMobilePurchaseListenerService` interface is simple, only being used for mod.io's UI to initiate a purchase:

```csharp
public interface IModioMobilePurchaseListenerService
{
    Task<bool> InitiatePurchase(string productId);
}
```

Lets start by creating a `MonoBehaviour` that implements these two interfaces with just stub methods to being with:

```csharp
public class MobilePurchasingExample : MonoBehaviour,
                                       IDetailedStoreListener,
                                       IModioMobilePurchaseListenerService
{
    public void OnInitialized(IStoreController controller, IExtensionProvider extensions)
    {

    }

    public void OnInitializeFailed(InitializationFailureReason error)
    {

    }
    
    public void OnInitializeFailed(InitializationFailureReason error, string message)
    {

    }

    public Task<bool> InitiatePurchase(string productId)
    {

    }

    public PurchaseProcessingResult ProcessPurchase(PurchaseEventArgs args)
    {

    }

    public void OnPurchaseFailed(Product product, PurchaseFailureReason failureReason)
    {

    }

    public void OnPurchaseFailed(Product product, PurchaseFailureDescription failureDescription)
    {

    }
}
```

The first thing to implement is initialization. This code should largely be unchanged from your own if you've implemented this before, with the one difference being mod.io productIds being added to the product catalog:

```csharp
public async void Awake()
{
    var options = new InitializationOptions();

    // Enter the relevant environment here
    options.SetEnvironmentName("test");

    Debug.Log("Initializing Unity Services");

    await UnityServices.InitializeAsync(options);
    
    var builder = ConfigurationBuilder.Instance(StandardPurchasingModule.Instance());

    builder.AddProduct("modio_tokens_1000", ProductType.Consumable);
    
    UnityPurchasing.Initialize(this, builder);
}
```

We'll then want to store the `IStoreController` instance provided to this script in `OnInitialized` as well as bind the required services to the mod.io Unity Engine Plugin:

```csharp
IStoreController _storeController;

public void OnInitialized(IStoreController controller, IExtensionProvider extensions)
{
    _storeController = controller;

    // This is required for the mod.io plugin to hook into this system
    ModioServices.Bind<IStoreController>()
                 .FromInstance(_storeController);
    ModioServices.Bind<IModioMobilePurchaseListenerService>()
                 .FromInstance(this);
    
    Debug.Log($"OnInitialized IAP Success");
}
```

We'll next want to implement `InitiatePurchase`. The `productId` in this method needs to be sent to the `IStoreController` instance in order to initiate a purchase. Since the `IStoreController` method is syncrhonous and sends back a separate callback through the `IDetailedStoreListener` interface, we'll use a `TaskCompletionSource<bool>` to report the result in the callback methods:

```csharp
TaskCompletionSource<bool> _purchaseTaskCompletionSource;

// The mod.io plugin will call this method to initiate a purchase of a mod.io linked product.
public Task<bool> InitiatePurchase(string productId)
{
    _purchaseTaskCompletionSource = new TaskCompletionSource<bool>();
    _storeController.InitiatePurchase(productId);
    return _purchaseTaskCompletionSource.Task;
}


public PurchaseProcessingResult ProcessPurchase(PurchaseEventArgs args)
{
    Debug.Log($"Processing purchase {args.purchasedProduct.definition.id}");
    _purchaseTaskCompletionSource?.SetResult(true);

    // We'll implement the rest of this method in just a moment
}

public void OnPurchaseFailed(Product product, PurchaseFailureReason failureReason)
{
    Debug.LogError($"Purchase Failed - {product.definition.id} : {failureReason}");
    // Since we don't know if the TCS has been set up or not we use a null coalescing operator to prevent errors
    _purchaseTaskCompletionSource?.SetResult(false);
}

public void OnPurchaseFailed(Product product, PurchaseFailureDescription failureDescription)
{
    Debug.LogError($"Purchase Failed - {product.definition.id} : {failureDescription.message}");
    _purchaseTaskCompletionSource?.SetResult(false);
}
```

The final piece of the puzzle is sending the receipt to mod.io. In `ProcessPurchase`, we simply need to call `ModioMobileStoreService.ConsumeMobileEntitlement()`:

```csharp
public PurchaseProcessingResult ProcessPurchase(PurchaseEventArgs args)
{
    // You should differentiate between mod.io products & your own here
    ModioLog.Verbose?.Log($"Processing purchase {args.purchasedProduct.definition.id}");
    _purchaseTaskCompletionSource?.SetResult(true);
    
    if (ModioServices.TryResolve(out ModioMobileStoreService mobileService))
    {
        // The wallet can update in the background. If you want the wallet to be updated before the user is
        // returned to the same UI flow then await the below method instead of using ForgetTaskSafely and
        // set the TCS result after this method.
        mobileService.ConsumeMobileEntitlement(args.purchasedProduct).ForgetTaskSafely();
    }

    return PurchaseProcessingResult.Pending;
}
```

:::important
You must make sure you return `PurchaseProcessingResult.Pending` when sending a receipt to mod.io. The mod.io plugin will confirm the purchase after consuming the entitlement with mod.io services.
:::

### Example Script

You can also find the following class in `Assets/Plugins/Modio/Unity/Examples/MobilePurchasing. We use the ifdefs for our own purposes, you should be safe to remove them if you'd like.

<details>

<summary><i>Click to expand</i></summary>

```csharp
using System.Threading.Tasks;
using Modio.Extensions;
using UnityEngine;

#if MODIO_MOBILE_IAP
using Unity.Services.Core;
using Unity.Services.Core.Environments;
using UnityEngine.Purchasing;
using UnityEngine.Purchasing.Extension;
#endif

public class MobilePurchasingExample : MonoBehaviour,
#if MODIO_MOBILE_IAP
                                       IDetailedStoreListener,
#endif
                                       IModioMobilePurchaseListenerService
{
#if MODIO_MOBILE_IAP
    static IStoreController _storeController;
#endif
    TaskCompletionSource<bool> _purchaseTaskCompletionSource;

    public async void Awake()
    {
#if MODIO_MOBILE_IAP
        var options = new InitializationOptions();

        // Set environment based on build type
#if UNITY_EDITOR || DEVELOPMENT_BUILD
        options.SetEnvironmentName("test");
#else
        options.SetEnvironmentName("production");
#endif
        ModioLog.Verbose?.Log("Initializing Unity Services");
        await UnityServices.InitializeAsync(options);
        
        var builder = ConfigurationBuilder.Instance(StandardPurchasingModule.Instance());

        builder.AddProduct("modio_tokens_1000", ProductType.Consumable);
        
        UnityPurchasing.Initialize(this, builder);
#else
        Destroy(this);
#endif
    }

    // The mod.io plugin will call this method to initiate a purchase of a mod.io linked product.
    public Task<bool> InitiatePurchase(string productId)
    {
        _purchaseTaskCompletionSource = new TaskCompletionSource<bool>();
#if MODIO_MOBILE_IAP
        _storeController.InitiatePurchase(productId);
#endif
        return _purchaseTaskCompletionSource.Task;
    }

#if MODIO_MOBILE_IAP
    public void OnInitialized(IStoreController controller, IExtensionProvider extensions)
    {
        _storeController = controller;

        // This is required for the mod.io plugin to hook into this system
        ModioServices.Bind<IStoreController>()
                     .FromInstance(_storeController);
        ModioServices.Bind<IModioMobilePurchaseListenerService>()
                     .FromInstance(this);
        
        ModioLog.Verbose?.Log($"OnInitialized IAP Success");
    }

    // Method called when store initialization fails
    public void OnInitializeFailed(InitializationFailureReason error)
    {
        ModioLog.Error?.Log($"OnInitialize IAP Failed - {error}");
    }
    
    // Overload method called when store initialization fails with message
    public void OnInitializeFailed(InitializationFailureReason error, string message)
    {
        ModioLog.Error?.Log($"OnInitialize IAP Failed - {error} : {message}");
    }

    // Method called when InitiatePurchase is completed without an error
    public PurchaseProcessingResult ProcessPurchase(PurchaseEventArgs args)
    {
        // You should differentiate between mod.io products & your own here
        ModioLog.Verbose?.Log($"Processing purchase {args.purchasedProduct.definition.id}");

        _purchaseTaskCompletionSource?.SetResult(true);
        
        if (ModioServices.TryResolve(out ModioMobileStoreService mobileService))
        {
            // The wallet can update in the background. If you want the wallet to be updated before the user is
            // returned to the same UI flow then await the below method instead of using ForgetTaskSafely and
            // set the TCS result after this method.
            mobileService.ConsumeMobileEntitlement(args.purchasedProduct).ForgetTaskSafely();
        }

        return PurchaseProcessingResult.Pending;
    }

    // Method called when purchase fails
    public void OnPurchaseFailed(Product product, PurchaseFailureReason failureReason)
    {
        ModioLog.Error?.Log($"Purchase Failed - {product.definition.id} : {failureReason}");
        _purchaseTaskCompletionSource?.SetResult(false);
    }

    // Overloaded method called when purchase fails with description
    public void OnPurchaseFailed(Product product, PurchaseFailureDescription failureDescription)
    {
        ModioLog.Error?.Log($"Purchase Failed - {product.definition.id} : {failureDescription.message}");
        _purchaseTaskCompletionSource?.SetResult(false);
    }
#endif
}
```

</details>