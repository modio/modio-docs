---
id: platform
title: In-game login using Platform SSO
slug: /web-services/authentication/platform/
sidebar_position: 1
---

# Overview

Unless you are using [OpenID](/web-services/authentication/openid/) so players can sign in using your identity provider, we recommend authenticating players using the applicable Platform SSO method.

We support Apple, Google, Steam, Epic Games, GOG Galaxy, Meta Quest, PlayStation™Network, Xbox Live and Nintendo Switch.

## Setup Process

The implementation requirements differs slightly for each Platform. The typical setup flow is:

1. On the mod.io website, navigate to your [game's admin dashboard](https://mod.io/content) and go to the **Settings** tab.

2. Under **Admin > General Settings** find and click on the **Platform Authentication**.
![platform-authentication-settings.png](images/platform-authentication-settings.png)

3. Follow the platform specific setup instructions. These depend on if you are doing your own implementation using our REST API, or using our engine SDKs which have built in support. The links for each is provided below:

   - [Apple](/platforms/apple/authentication/)*
   - [Google](/platforms/google/authentication/)
   - [Steam](/platforms/steam/authentication/)
   - [Epic Games](/platforms/epic/authentication/)
   - [GOG Galaxy](/platforms/gog/authentication/)
   - [Meta Quest](https://docs.mod.io/restapiref/#meta-quest)*
   - [PlayStation™Network](https://docs.mod.io/partners/ps5/authentication/) ([NDA access required](/platforms/console-sdks/))
   - [Xbox Live](https://docs.mod.io/partners/xbox/authentication/) ([NDA access required](/platforms/console-sdks/))
   - [Nintendo Switch](https://docs.mod.io/partners/switch/authentication/) ([NDA access required](/platforms/console-sdks/))*

:::note
Currently you cannot sign into the mod.io site using your Apple, Meta Quest or Nintendo Switch account. This means that if you authenticate players using these methods in-game, those users accounts will be headless and orphaned, unless you provide an optional email during the authentication process. Where possible we recommend you give the users the option to provide their email, to offer the most connected UGC user experience in-game and out.
:::

## Email Authentication

Alternatively you can authenticate users with email on all platforms, which has no dependencies and therefore is great for testing. Instructions for using email authentication can be found below:

- [REST API](https://docs.mod.io/restapiref/#email-exchange)
- [Unreal Engine](/unreal/getting-started/#email-authentication)
- [Unity Engine](https://docs.mod.io/unity/getting-started/#authentication)
- [C++ SDK](https://docs.mod.io/cppsdk/getting-started/#sdk-quick-start-user-authentication)

:::warning
Email is great for instant setup and testing, however we highly recommend using the Platform SSO authentication flows (detailed above) where available, or your own identity provider, as they are instant and accessible vs email which is not. It also makes it easier to block bad actors, and avoids user frustration and error like having to type your email in using gamepads.
:::
