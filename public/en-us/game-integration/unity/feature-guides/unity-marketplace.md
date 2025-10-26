---
id: unity-marketplace
title: Marketplace
slug: /unity/marketplace
---

# Marketplace for Unity

The Unity Plugin supports a range of [Monetization](/monetization) features, allowing you to sell a per-game virtual currency to your players that they can use to purchase UGC, with a share of the revenue split between creators and your studio.

This guide covers the end-to-end flow for implementing mod.io [Marketplace](/monetization/marketplace) into your Unity title, a feature that exposes the data and functions required to build a UGC store in-game. We recommend reading this guide for a thorough understanding of the plugin's features so you can decide what is the best approach for your game.

## Initial Setup

Please follow the below guides for setting up Virtual Currency for mod.io Marketplace on your required platforms:

* [Steam](/platforms/steam/marketplace)
* [Apple (iOS)](/platforms/apple/marketplace)
* [Google Play (Android)](/platforms/google/marketplace)
* [Meta Quest](/platforms/meta/marketplace)

:::note[Mobile Setup]
If you are implementing Marketplace for mobile platforms such as Google or Apple, refer to our [Mobile In-App Purchases Guide](/unity/marketplace-mobile-iap).
:::

The following platforms require approval, see [Console SDKs](/platforms/console-sdks) for details:

* [PlayStation®4](https://docs.mod.io/partners/ps4/marketplace)
* [PlayStation®5](https://docs.mod.io/partners/ps5/marketplace)
* [Xbox](https://docs.mod.io/partners/xbox/marketplace)

## Template UI

The mod.io Unity Plugin features [Component UI](/in-game-ui/component) & [Template UI](/in-game-ui/template) which both have built-in support for [Monetization](/monetization), including conveniently purchasing through multiple platform storefronts. If you'd like to try it out, unpack the 'Experimental UI' .unitypackage found within the plugin. Once mod.io & your platform are configured with your SKUs, no additional work is required to integrate this into the UI solutions!

## Integration

The mod.io Unity Engine plugin makes it simple to implement Marketplace into your game. Below we'll cover the key elements required to enable in-game Marketplace functionality:

* [Purchasing Virtual Currency](#purchasing-virtual-currency)
* [User Wallet Balance](#user-wallet-balance)
* [Purchasing UGC with Virtual Currency](#purchasing-ugc)
* [Getting the user's purchases](#getting-the-users-purchases)

### Purchasing Virtual Currency

Purchasing Virtual Currency is achieved using the relevant `IModioStorefrontService` or `IModioVirtualCurrencyProviderService` implementation, available for each supported storefront platform.

For `IModioStorefrontService`, all that needs to be done is to call `OpenPlatformPurchaseFlow()`.

```csharp
async void OpenPurchaseFlow()
{
    Error error = await ModioServices.Resolve<IModioStorefrontService>().OpenPlatformPurchaseFlow();
    if(!error)
        return;
    // ... error handling logic
}
```

For `IModioVirtualCurrencyProviderService`, it's a little more involved. Some platforms do not provide storefront overlay functionality, and instead requires your game's UI to present the user with available SKUs. Once one is selected in-game, we can then open the platforms checkout flow.

This interface utilizes the platform agnostic `PortalSku` struct, which provides a localized price in string format, the value of the virtual currency pack, the SKU code and the portal it originated from.

To get available SKUs for purchase, call `GetCurrencyPacks()`. To then checkout a specific SKU, call `OpenCheckoutFlow(PortalSku sku)`, like below:

```csharp
async void OpenPurchaseFlow()
{
    var virtualCurrencyProviderService = ModioServices.Resolve<IModioVirtualCurrencyProviderService>();
    (Error error, PortalSku[] skus) = await ModioServices.Resolve<IModioVirtualCurrencyProviderService>().GetCurrencyPackSkus();

    if (error)
    {
        // ... error handling
        return;
    }

    // Deliver information to your UI here
    (bool cancelled, PortalSku selectedSku) = await SomeUIImplementation.ShowSkus(skuResult.value);
    if (cancelled)
        return;

    error = virtualCurrencyProviderService.OpenCheckoutFlow(selectedSku);

    if (error){
        // ... error handling
    }
}
```

The implementations of `IModioStorefrontService` and `IModioVirtualCurrencyProviderService` should also automatically SyncEntitlements for the user without manual intervention. However you can force this by calling `User.Current.SyncEntitlements()`. This will use the current platforms `IModioEntitlementService`.

```csharp
async void SyncEntitlements()
{
    Error error = await User.Current.SyncEntitlements();

    if (error){
        // ... error handling
    }
}
```

We've successfully purchased a Virtual Currency pack and consumed it using mod.io's services, your wallet balance now contains the purchased Virtual Currency! You can see this immediately from your game's mod.io page, however below we're going to cover fetching that balance in game.

### User Wallet Balance

The implementations of `IModioStorefrontService` and `IModioVirtualCurrencyProviderService` should automatically sync the current User's Wallet. However you can force the sync by calling `User.Current.SyncWallet()`.

```csharp
async void GetUserWalletBalanceExample()
{
    Error error = await User.Current.SyncEntitlements();

    if (error){
        // ... error handling
    }
}
```

### Purchasing UGC

Purchasing UGC is equally straight-forward, and uses `Mod.Purchase()`. This method takes a boolean argument for whether to subscribe on purchase.

```csharp
async void PurchaseModExample()
{
    (Error error, Mod mod) = await Mod.GetMod(1234); //Gets the mod either from cache or the server;

    if(error){
        // ... error handling
        return;
    }

    error = await mod.Purchase(true);
    if (!error){
        // ... error handling   
    }
}
```

If you have previously called `ModInstallationManagement.Active()`, the UGC will be added to the download queue and installed.

### Getting the user's purchases

To install purchased UGC, the user needs to be subscribed to the UGC they have purchased (this happens automatically on purchase). The UGC will also be automatically installed and updated after enabling UGC management. See [Installing UGC](/unity/subscribing#installing-ugc) for more information.

To get a list of all of the authenticated user's purchased UGC, use the synchronous method `User.Current.ModRepository.GetPurchased()`:

```csharp
void GetUserPurchases()
{
    IEnumerable<Mod> purchasedMods = User.Current.ModRepository.GetPurchased();
}
```

## Support and Contact

We've now successfully integrated [Marketplace](/monetization/marketplace)! All that's left is to invite your creators to start making premium UGC.

For any support queries, please join us in our [Discord server](https://discord.mod.io), we'd love to chat and help support you.

If you're interested in discussing how Marketplace can benefit your game, please reach out to us at [developers@mod.io](mailto:developers@mod.io).