---
id: monetization-restapi
title: REST API Endpoints
slug: /monetization/restapi/
---

# REST API Endpoints

For developers looking to interact directly with the REST API with a custom integration, for example; the REST API contains numerous endpoints that can be used to directly interact with the Marketplace without having to use our plugins. Below is an at-a-glance view of the important endpoints for Marketplace. All endpoints require the game to be monetized before they will work.

### User Wallets

For a user to make a purchase, they must first have a wallet. To do so, call the following endpoint: [get user wallet](https://docs.mod.io/restapiref/#get-user-wallet). This endpoint requires your game_id to fetch the wallet. The intention is for this endpoint to be client-side in-game to:
- Register the user with the marketplace.
- Create or fetch a wallet for the user in your game.
- Read balances of the wallet.

### User Purchases

Once you have a wallet, the user is ready to make a purchase. To do so, call the following endpoint: [purchase a mod](https://docs.mod.io/restapiref/#purchase-a-mod). The intention is for this endpoint to be client-side in-game to:
- Purchase a mod from the marketplace.
- Subscribe them to the mod they just purchased.

### Get User Purchases

To get a list of all the purchases a user has made, call the following endpoint: [get user purchases](https://docs.mod.io/restapiref/#get-user-purchases). The intention for this endpoint is to be used client-side in-game to:
- Check if the user owns the mod.
- Sync mods that may have been refunded (they will no longer appear in this list).

### Get Paid Mods

To get a list of all the paid mods in the marketplace, call the following endpoint: [get mods](https://docs.mod.io/restapiref/#get-mods) with the `revenue_type` filter. The following options are available:

0 = Free Mods only in results  
1 = Paid Mods only in results  
2 = Free and Paid Mods in the results

### Managing File Access to Mods

The API has a number of game options that can be enabled to manage file CDN access to mods. Please see the value of `api_access_options` in the game object returned by the endpoint: [get game](https://docs.mod.io/restapiref/#get-game). This can be managed via the web interface or the API. The recommended option is to use a bit of 4 and above or 8. This will require the user's authentication token to be supplied when attempting to download the mod. When bitwise of 8 is enabled, we will also check if the user owns the mod before allowing the download.

### General

For all other available endpoints, please see this REST API doc: [monetization documentation](https://docs.mod.io/restapiref/#monetization).