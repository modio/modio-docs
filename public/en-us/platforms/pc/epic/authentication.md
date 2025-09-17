---
id: authentication
title: Authentication
slug: /platforms/epic/authentication
---

# Epic Games Authentication

If your game is available on *Epic Games*, the below guide will help you integrate mod.io to include UGC. 

This documentation assumes that you have already created and configured your product on the [Epic Developer Portal](https://dev.epicgames.com/docs/dev-portal), including setting up and initializing the EOS SDK with your product.

This guide covers:

* [Configuration](#configuration)
* [Performing authentication](#performing-authentication)

## Configuration

To enable Epic's Account Services for your application, read through and accept the EAS legal agreement in the [Epic Guide](https://dev.epicgames.com/docs/epic-account-services/getting-started).

After EAS is enabled, you can create a new application by linking to your application website and privacy policy URL. Note that you will also need to configure your brand settings.

Next, add a Linked Client using your game by clicking "Linked Clients" and selecting your game from the dropdown.

The final step is to configure the Permissions. Click "Permissions", and only select "Basic Profile". mod.io SSO does not require "Online Presence" or "Friends" permissions.

:::note[Matching Permissions]
The scopes that you request as part of the EOS login process in your game must match the Permissions that are selected here.
:::

## Performing authentication

Once you have configured your game for Epic SSO, you can call the Epic Authentication endpoint, passing the EOS ID Token obtained from [`EOS_Auth_CopyIdToken`](https://dev.epicgames.com/docs/api-ref/functions/eos-auth-copy-id-token) using the EOS SDK. Each of our SDKs provide samples and documentation for how to perform Epic SSO.

* [C++ SDK](/cppsdk/user-authentication#ssoexternal-authentication)
* [Unreal Engine](/unreal/user-authentication#single-sign-on-authentication)
* [Unity](/unity/user-authentication#single-sign-on)

If you are building something custom using the mod.io REST API, follow the [Epic API instructions](/restapi/docs/authenticate-via-epicgames) to authenticate players using Epic Games SSO, by calling the `/external/epicgamesauth` endpoint.