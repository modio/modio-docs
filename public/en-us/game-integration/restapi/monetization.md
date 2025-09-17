---
id: restapi-monetization
title: Marketplace Endpoints
slug: /restapi/monetization
---

# REST API Marketplace Endpoints

The REST API contains numerous endpoints that can be used to directly interact with the [Marketplace](/monetization/marketplace) feature without having to use a Plugin. Below is an at-a-glance view of the important endpoints for Marketplace. All endpoints require the game to be monetized before they will work.

This guide covers:

* [User wallets](#user-wallets)
* [User purchases](#user-purchases)
* [Paid UGC](#paid-ugc)
* [Managing file access](#managing-file-access)
* [General Monetization endpoints](#general-monetization-endpoints)

## User wallets

For a user to make a purchase, they must first have a wallet. To do so, call the following endpoint: [get user wallet](/restapi/docs/get-user-wallet). This endpoint requires your game_id to fetch the wallet. The intention is for this endpoint to be client-side in-game to:
- Register the user with the marketplace.
- Create or fetch a wallet for the user in your game.
- Read balances of the wallet.
- Read the deficit of a wallet. (Note: The deficit refers to any amount the user owes the marketplace in cases where a refund could not be fully processed.)

## User purchases

### Purchase a mod

Once you have a wallet, the user is ready to make a purchase. To do so, call the following endpoint: [purchase a mod](/restapi/docs/purchase). The intention is for this endpoint to be client-side in-game to:
- Purchase a mod from the marketplace.
- Subscribe them to the mod they just purchased.

### Get user purchases

To get a list of all the purchases a user has made, call the following endpoint: [get user purchases](/restapi/docs/get-user-purchases). The intention for this endpoint is to be used client-side in-game to:
- Check if the user owns the mod.
- Sync mods that may have been refunded (they will no longer appear in this list).

## Paid UGC

To get a list of all the paid mods in the marketplace, call the following endpoint: [get mods](/restapi/docs/get-mods) with the `revenue_type` filter. The following options are available:

0 = Free Mods only in results  
1 = Paid Mods only in results  
2 = Free and Paid Mods in the results

## Managing file access

The API has a number of game options that can be enabled to manage file CDN access to mods. Please see the value of `api_access_options` in the game object returned by the endpoint: [get game](/restapi/docs/get-game). This can be managed via the web interface or the API. The recommended option is to use a bit of 4 and above or 8. This will require the user's authentication token to be supplied when attempting to download the mod. When bitwise of 8 is enabled, we will also check if the user owns the mod before allowing the download.

## General Monetization endpoints

For all other available endpoints, please see this REST API doc: [monetization documentation](/restapi/docs/get-game-token-packs).
