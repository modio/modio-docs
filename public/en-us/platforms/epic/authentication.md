---
id: authentication
title: Authentication
slug: /platforms/epic/authentication
sidebar_position: 0
---

# Epic Games Authentication

This documentation assumes that you have already created and configured your product on the Epic portal, including setting up and initializing the EOS SDK with your product.

## Configuring your Epic Account Services Application

Once you have done this, you need to enable Epic Account Services for your application. This requires you to accept the EAS legal agreement first. Please follow the [Epic Guide](https://dev.epicgames.com/docs/epic-account-services/getting-started) to enable EAS.

Once EAS is enabled, you have to create a new application, linking to your application website and privacy policy URL as appropriate. Note that you will also need to configure your brand settings.

Once you have created your application, you will need to add a Linked Client that is your title. You can do this by clicking "Linked Clients" and selecting your game from the dropdown.

After this, you also need to configure the Permissions. Click Permissions, and ensure that you only select Basic Profile. mod.io SSO does not require Online Presence or Friends permissions.

:::note
The scopes that you request as part of the EOS login process in your game must match the Permissions that are selected here.
:::

## Performing Authentication

Once you have configured your game for Epic SSO, you can call the Epic Authentication endpoint, passing the EOS ID Token, [obtained from `EOS_Auth_CopyIdToken`](https://dev.epicgames.com/docs/api-ref/functions/eos-auth-copy-id-token) using the EOS SDK. Each of our SDKs provide samples and documentation for how to perform Epic SSO.

* For the C++ SDK, [click here](/cppsdk/getting-started/#ssoexternal-authentication)
* For Unreal Engine, [click here](/unreal/getting-started/user-authentication/#single-sign-on-authentication)
* For Unity Engine, [click here](/unity/getting-started/#authentication)

If you are building something custom using the mod.io REST API, follow the [instructions provided here](https://docs.mod.io/restapiref/#epic-games) to authenticate players using Epic Games SSO, by calling the `/external/epicgamesauth` endpoint.