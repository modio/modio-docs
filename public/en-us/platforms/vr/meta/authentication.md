---
id: authentication
title: Authentication
slug: /platforms/meta/authentication
---

# Meta Quest Authentication

## Data use checkups

To access any user data from Meta's services, you'll need to complete Data Use Checkups for Meta's team to verify.

Navigate to your game's [Meta Developer Dashboard](https://developers.meta.com/horizon), go to Requirements > Data Use Checkup:

![duc_dashboard.png](img/duc_dashboard.png)

To properly authenticate, you will need to get approval for all of these Platform Features:

* User ID
* User Profile
* User Age Group
* Blocked Users

![duc_ducs_to_certify_no_iap.png](img/duc_ducs_to_certify_no_iap.png)

For each option, click Add, tick all the options that apply and write a brief description of your intended usage:

![duc_usages.png](img/duc_usages.png)

Once complete, click Submit Verification. While waiting for approval, we can configure both Meta & mod.io's services for authentication.

## Configuration

In order to set up Meta Quest Authentication, you must configure your App Id & App Secret in your mod.io game authentication options.

To find these details, navigate to your game's Meta Developer Dashboard, click Development > API.

:::note
Make sure to use the App ID, **NOT** the Federated App ID.
:::

![meta_app_details.png](img/meta_app_details.png)

Once you have your App Id & App Secret, go to your game admin page on mod.io. Under General Settings > Platform Authentication, add your App Id & App Secret under Meta Quest ID & Meta Quest Secret.

![modio_app_details.png](img/modio_app_details.png)

## Performing Authentication

If your game is using an official mod.io plugin, follow the relevant link below for authenticating players using Meta Quest SSO, or another supported platform authentication method:

* [Unreal Engine](/unreal/user-authentication#single-sign-on-authentication)
* [Unity](/unity/user-authentication#single-sign-on)
* [C++ SDK](/cppsdk/user-authentication#ssoexternal-authentication)

If you are building something custom using the mod.io REST API, follow the [Meta Quest API instructions](/restapi/docs/authenticate-via-meta) to authenticate players using Meta Quest SSO, by calling the `/external/oculusauth` endpoint.

## Next steps

To access Meta's In-App Purchase, your next stop is the [Meta Quest Marketplace](/platforms/meta/marketplace) guide. 