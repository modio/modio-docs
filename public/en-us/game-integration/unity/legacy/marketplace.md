---
id: unity-marketplace
title: Marketplace
slug: /legacy/unity/marketplace
sidebar_position: 4
---

# Marketplace

This guide covers the end-to-end flow for implementing mod.io Marketplace into your Unity title, from purchasing virtual currency through to purchasing mods using said currency. We recommend reading this guide for a thorough understanding of the plugin's Marketplace features so you can understand how to integrate them best for your game.

mod.io Marketplace features are enabled either during the onboarding process when creating your game profile, or through your game's Admin menu if it has already been created. Once enabled, you'll need to create Virtual Currency SKUs on each supported platform.

## Initial Setup

Please follow the below guides for setting up Virtual Currency for mod.io Marketplace on your required platforms:

* [Steam](/platforms/steam/marketplace)
* [Apple (iOS)](/platforms/apple/marketplace)
* [Google Play (Android)](/platforms/google/marketplace)
* [Meta Quest](/platforms/meta/marketplace)

The following platforms require approval, see [Console SDKs](https://docs.mod.io/platforms/console-sdks/) for details:

* [PlayStation®4](https://docs.mod.io/partners/ps4/marketplace/)
* [PlayStation®5](https://docs.mod.io/partners/ps5/marketplace/)
* [Xbox](https://docs.mod.io/partners/xbox/marketplace/)

## Template UI

The mod.io Unity Plugin features Component & Template UI which both have built-in support for monetization, including conveniently purchasing through multiple platform storefronts! If you'd like to try it out, unpack the 'Experimental UI' .unitypackage found within the plugin. Once mod.io & your platform are configured with your SKUs, no additional work is required to integrate this into the UI solutions!

## Integration

The mod.io Unity Engine plugin makes it simple to implement Marketplace into your game. Below we'll cover the key elements required to enable in-game Marketplace functionality:

* [Purchasing Virtual Currency](#purchasing-virtual-currency)
* [Getting the User Wallet Balance](#get-user-wallet-balance)
* [Purchasing a Mod with Virtual Currency](#purchasing-a-mod)
* [Getting the User's Purchased Items](#getting-users-purchases)

### Purchasing Virtual Currency

Purchasing Virtual Currency is achieved using the relevant `ModioPlatform` implementation, available for each supported storefront platform. We're going to use `ModioPlatformFacepunch` & `ModioPlatformOculus` as our two examples.

For `ModioPlatformFacepunch`, all that needs to be done is to call `OpenPlatformPurchaseFlow()` on the base `ModioPlatform` class:

```csharp
async void OpenPurchaseFlow()
{
    // This will open the Steam store-front overlay for your game
    var result = await ModioPlatform.ActivePlatform.OpenPlatformPurchaseFlow();

    if (result.Succeeded()) 
        Debug.Log("Successfully opened Purchase Flow");
    else
        Debug.Log($"Failed to open {typeof(ModioPlatform.ActivePlatform)}'s Purchase flow");
}
```

For `ModioPlatformOculus`, it's a little more involved. Oculus doesn't provide the same storefront overlay functionality, and instead requires your game's UI to present the user with available SKUs. Once one is selected in-game, we can then open Oculus' checkout flow. To support this behavior, `ModioPlatformOculus` also implements the interface `IModioVirtualCurrencyPackBrowsablePlatform`.

This interface utilizes the platform agnostic `PortalSku` struct, which provides a localized price in string format, the value of the virtual currency pack, the SKU code and the portal it originated from.

To get available SKUs for purchase, call `GetCurrencyPacks()`. To then checkout a specific SKU, call `OpenCheckoutFlow(PortalSku sku)`, like below:

```csharp
async void OpenPurchaseFlow()
{
    if (!(ModioPlatform.ActivePlatform is IModioVirtualCurrencyPackBrowsablePlatform browsablePlatform))
    {
        Debug.Log($"{typeof(ModioPlatform.ActivePlatform)} does not support {typeof(IModioVirtualCurrencyPackBrowsablePlatform)}!");
        return;
    }

    ResultAnd<PortalSku[]> skuResult = await browsablePlatform.GetCurrencyPackSkus();

    if (!skuResult.result.Succeeded())
    {
        Debug.Log($"Error getting Currency Pack Skus: {skuResult.result}");
        return;
    }

    // Deliver information to your UI here
    (bool cancelled, PortalSku selectedSku) = await SomeUIImplementation.ShowSkus(skuResult.value);
    if (cancelled)
        return;

    var checkoutResult = browsablePlatform.OpenCheckoutFlow(selectedSku);

    if (checkoutResult.result.Succeeded())
        Debug.Log($"Successfully purchased {selectedSku.Sku}");
    else
        Debug.Log($"Error purchasing SKU {selectedSku.Sku}: {skuResult.result}");
}
```

Now that we've purchased the Virtual Currency pack on the platform, the final step is to tell mod.io's servers to Sync Entitlements, which will consume the entitlement and convert it into Virtual Currency. To do so, we simply call `ModIOUnityAsync.SyncEntitlements()`:

```csharp
async void SyncEntitlements()
{
    var response = await ModIOUnityAsync.SyncEntitlements();

    if (response.result.Succeeded())
        Debug.Log("Successfully synced entitlements!");
    else
        Debug.Log($"Error syncing entitlements: {response.result}");
}
```

We've successfully purchased a Virtual Currency pack and consumed it using mod.io's services, your wallet balance now contains the purchased Virtual Currency! You can see this immediately from your game's mod.io page, however below we're going to cover fetching that balance in game.

### Get User Wallet Balance

To get the wallet balance of the authenticated user, use `ModIOUnityAsync.GetUserWalletBalance()`. The return `Wallet` class contains information on your game's currency name as well as the balance:

```csharp
async void GetUserWalletBalanceExample()
{
   var response = await ModIOUnityAsync.GetUserWalletBalance();

   if (response.result.Succeeded())
       Debug.Log($"User has a balance of {response.value.balance} credits.");
   else
       Debug.Log($"Error getting user's wallet balance: {response.result}");
}
```

The `ModIOUnityEvents.UserEntitlementsChanged` event is invoked any time the authenticated user's wallet balance changes. This is particularly useful for implementing a UI element that displays the user's current wallet balance:

```csharp
public class WalletUIElement : MonoBehavior
{
    void Awake()
    {
        UpdateWallet();

        ModIOUnityEvents.UserEntitlementsChanged += UpdateWallet;
    }

    void OnDestroy()
    {
        ModIOUnityEvents.UserEntitlementsChanged -= UpdateWallet;
    }

    async void UpdateWallet()
    {
        var walletResult = await ModIOUnityAsync.GetUserWalletBalance();

        if (walletResult.result.Succeeded())
            Debug.Log($"Successfully updated wallet amount {walletResult.value.currency}: {walletResult.value.balance}");
        else
            Debug.Log($"Error updating wallet: {walletResult.result}");
    }
}
```

### Purchasing a Mod

Purchasing a mod is equally straight-forward, and uses `ModIOUnityAsync.PurchaseItem()`. This method requires a string argument called an idempotent: a unique string value which prevents accidental duplicate purchases. The price that was displayed to the user is also required, which must match the mod price, and acts as a safety measure to ensure the correct amount is being charged:

```csharp
async void PurchaseModExample()
{
    
    ModId modId = new ModId(1234);          //Mod to purchase
    string idempotent = modId.ToString();   //Guarantees no accidental duplicate purchases of this mod
    int displayAmount = 12;                 //Price displayed to the player (Must match mod price)

    var response = await ModIOUnityAsync.PurchaseMod(modId, displayAmount, idempotent);

    if (response.result.Succeeded())
        Debug.Log($"Successfully purchased Mod {modId}");
    else
        Debug.Log($"Error purchasing Mod {modId}: {response.result}");
}
```

The plugin will automatically subscribe to purchased mods. If you have previously called `ModIOUnity.EnableModManagement()` the mod will be added to the download queue and installed.

### Getting User's Purchases

To install purchased mods the user should be subscribed to them (this happens automatically on purchase), and they will be automatically installed and updated after enabling mod management. See [Installing Mods](/legacy/unity/getting-started#installing-mods) in the [Getting Started](/legacy/unity/getting-started) guide for more information.

To get a list of all of the authenticated user's purchased mods, use the synchronous method `ModIOUnity.GetPurchasedMods()`:

```csharp
void GetUserPurchases()
{
    ModProfile[] purchasedMods = ModIOUnity.GetPurchasedMods(out Result result);

    if (result.Succeeded())
        foreach (var modProfile in purchasedMods)
            Debug.Log($"User owns mod with id: {modProfile.id}");
    else
        Debug.Log($"Error getting purchased mods: {result}");
}
```

## Support and Contact

We've now successfully integrated Marketplace! All that's left is to invite your creators to start making premium mods.

For any support queries, please join us in our [Discord server](https://discord.mod.io), we'd love to chat and help support you!

If you're interested in discussing how Marketplace can benefit your game, please reach out to us at [developers@mod.io](mailto:developers@mod.io)