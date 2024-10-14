---
id: authentication
title: Authentication
slug: /platforms/steam/authentication
sidebar_position: 0
---

# Steam Authentication

In order to set up Steam Authentication, you must configure your Encrypted App Ticket Key in your mod.io game authentication options.

To find your Encrypted App Ticket Key, navigate to your Steamworks App Admin page > Security > SDK Auth.

![steamworks_app_ticket.png](images/steamworks_app_ticket.png)

If you have not generated an Encrypted App Ticket Key yet, do so here.

Once you have your encrypted app ticket key, go to your game admin page on mod.io. Under General Settings > Platform Authentication, add your Encrypted App Ticket Key value under Steam. Note that mod.io supports multiple Steam Encrypted App Ticket Keys. This allows you to use different Steam App IDs against the same game on mod.io, for instance if you have a Test/Development AppID and a Public AppID.

![modio_game_settings.png](images/modio_game_settings.png)

## Performing Authentication

Once you have configured your game for Steam SSO, you can call the Steam Authentication endpoint using a Base64, URL encoded Encrypted App Ticket, obtained from `ISteamUser::GetEncryptedAppTicket()` using the Steamworks SDK. Each of our SDKs provide samples and documentation for how to perform Steam SSO.

* For the C++ SDK, [click here](/cppsdk/getting-started/#ssoexternal-authentication)
* For Unreal Engine, [click here](/unreal/getting-started/user-authentication#single-sign-on-authentication)
* For Unity Engine, [click here](/unity/getting-started/#authentication)

If you are building something custom using the mod.io REST API, follow the [instructions provided here](https://docs.mod.io/restapiref/#steam) to authenticate players using Steam SSO, by calling the `/external/steamauth` endpoint.