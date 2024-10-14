---
id: authentication
title: Authentication
slug: /platforms/gog/authentication
sidebar_position: 0
---

# GOG Authentication

In order to set up GOG Authentication, you must configure your Encrypted App Ticket Key in your mod.io game authentication options.

To find your Encrypted App Ticket Key, navigate to your [GOG Game Portal](https://devportal.gog.com/panel/games). Find your title and click SDK Credentials. The value you are looking for is encrypted_ticket.private_key.

![gog_app_ticket.png](images//gog_app_ticket.png)

Once you have your encrypted app ticket key, go to your game admin page on mod.io. Under General Settings > Platform Authentication, add your Encrypted App Ticket Key value under GOG Galaxy.

## Performing Authentication

Once you have configured your game for GOG SSO, you can call the GOG Authentication endpoint using a URL encoded Encrypted App Ticket, obtained from `galaxy::api::User()->RequestEncryptedAppTicket` and `galaxy::api::User()->GetEncryptedAppTicket()` using the GOG SDK. Each of our SDKs provide samples and documentation for how to perform GOG SSO. Note that you do not need to Base64 encode the encrypted app ticket.

* For the C++ SDK, [click here](/cppsdk/getting-started/#ssoexternal-authentication)
* For Unreal Engine, [click here](/unreal/getting-started/user-authentication#single-sign-on-authentication)
* For Unity Engine, [click here](/unity/getting-started/#authentication)

If you are building something custom using the mod.io REST API, follow the [instructions provided here](https://docs.mod.io/restapiref/#gog-galaxy) to authenticate players using GOG SSO, by calling the `/external/galaxyauth` endpoint.