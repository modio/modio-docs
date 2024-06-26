---
id: unity-marketplace
title: Marketplace
slug: /unity/marketplace/
sidebar_position: 4
---

# Marketplace

The mod.io SDK supports full monetization features, allowing you to sell a per-game virtual currency to your players that they can use to purchase premium UGC, with a share of the revenue split between creators and your studio. Every platform
requires specific setup for monetization features to work, with regards to the virtual currency configuration and API calls. 

The mod.io monetization features are enabled as part of the onboarding process on your game profile. Once that is setup, there is nothing further you need to do for initialization in the SDK.

## Enable Marketplace in the Plugin

The first thing you will need to do is enable the marketplace toggle inside your config. This informs the plugin that your game profile has marketplace features enabled and will behave accordingly.

:::tip
You can quickly access your config file by going to Tools > mod.io > Edit Settings. 
:::

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
