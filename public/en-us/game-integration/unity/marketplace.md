---
id: unity-marketplace
title: Marketplace
slug: /unity/marketplace
sidebar_position: 4
---

# Marketplace

The mod.io Unity Plugin supports in-game integration of the mod.io Marketplace - exposing the data and functions required to build a UGC store in-game.

The mod.io monetization features are need to be enabled through the web UI and, if selling the virtual currency through a platform store, will need a service to consume the virtual currency entitlements and apply them to player's mod.io account.

:::note
See [Monetization Introduction](/monetization) for an introduction to the marketplace features
See [Purchase Server Implementation](/web-services/marketplace/overview) for more information on implementing platform store support
:::

The mod.io monetization features are enabled as part of the onboarding process on your game profile. Once that is setup, there is nothing further you need to do for initialization in the SDK.


## Get User Wallet Balance

Returns the current user's token balance.

```csharp
async void GetUserWalletBalanceExample()
{
   var response = await ModIOUnityAsync.GetUserWalletBalance();
   if (response.result.Succeeded())
   {
       Debug.Log($"User has a balance of {response.value.balance } tokens.");
   }
   else
   {
       Debug.Log("failed to get balance");
   }
}
```

## Purchase Item

Purchases a mod using Tokens.

```csharp
async void PurchaseItemExample()
{
    string idempotent = $"aUniqueKey";//Unique key used to prevent duplicate purchases
    ModId modId = new ModId(1234);//Mod to purchase
    int displayAmount = 12;//Price displayed to the player (Must match mod price)
    var response = await ModIOUnityAsync.PurchaseItem(modId, displayAmount, idempotent);
    if (response.result.Succeeded())
    {
        Debug.Log("Completed Purchase");
    }
    else
    {
        Debug.Log("failed to complete purchase");
    }
}
```

## Get User Purchases

Returns the current user's purchased premium UGC.

```csharp
async void GetUserPurchases()
{
    ModIOUnity.GetPurchasedMods(out Result result);

    if (result.Succeeded())
    {
        foreach (var modProfile in response.value.modProfiles)
        {
            Debug.Log($"User owns mod with id: {modProfile.id}");
        }
    }
    else
    {
        Debug.Log("Failed to get purchases");
    }
}
```

### Syncing Purchases with Steam
If you setup SKUs for your users to purchase tokens through steam, you can sync these purchases with the mod.io server with the `SyncEntitlments` method. If a user purchases a token pack on steam, you can add the SKU used for that token pack on the Web by going to Admin > Monetization > Manage SKUs. Then when you use SyncEntitlments it will consume the purchased item and add those tokens to the user's wallet. Below is a very simple example of how to use the method.

:::note
SyncEntitlements will automatically be run when using ModIOUnity.FetchUpdates as well.
:::

```csharp
async void SyncEntitlements()
    {
        Result result = await ModIOUnityAsync.SyncEntitlements();
        if (response.result.Succeeded())
        {
            Debug.Log("Entitlements are synced");
        }
        else
        {
            Debug.Log("failed to sync");
        }
        }
```
:::note
This method will also work with console platforms.
:::
