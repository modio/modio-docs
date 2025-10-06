---
id: authentication-overview
title: Overview
slug: /authentication
sidebar_position: 0
---

# Authentication

Authentication is a necessary process for games, users, and servers to connect with both mod.io and the API. Authentication allows creators to submit UGC, subscribe to favorites, share colections, enhances safety and plenty more.

The authentication guides cover two separate buckets:

1. [**Users**](#user-authentication-methods): In order for users to engage with UGC in your game, they'll need to authenticate to mod.io. Each platform has its own authentication system, and you can either work alongside the native systems or implement your own.
2. [**Web Servers**](/authentication/s2s): If you are looking to run in-app UGC purchases or utilize our dedicated servers using S2S tokens, you'll need your backend system to authenticate to mod.io. 

:::note
Prior to authenticating a user for the first time, terms and user consent must be collected, which is [covered here](/terms). 
:::

## User authentication methods

### Premium authentication

* **[Custom SSO](/authentication/openid)**: For the simplest user journey, **Custom Single Sign-On** allows you to authenticate users with your studio's own managed identity provider. This is one of our premium features, enabling a unified authentication process regardless of the platform. To facilitate this functionality, mod.io offers two widely-used complementing OAuth flows for account linking across both [game clients](/authentication/openid) and traditional [web-based](/authentication/openid-website) OAuth flows.

### Standard authentication

For situations where Custom SSO isn't a viable option, there are a variety of other ways to authenticate users:

* **[Platform SSO](/authentication/platform)**: Our recommended standard option for in-game authentication and sign-in via our website. This works with each platform's current login system (*Steam, PlayStation™Network* etc.) to verify a user.
* **[Studio Website Login](/authentication/studio-website-login)**: For studios looking to host UGC hubs on their own website as opposed to the mod.io Game Portal.
* **[Device Login](/authentication/device)**: For games looking to authenticate users via a separate device. Currently the recommended option for VR games due to the nature of keyboard/controller constraints.
* **[Email Authentication](#testing-with-email-authentication)**: Great for testing given there are no dependencies. Not recommended for launch.

### Supported use cases

The below table showcases some of the use-cases for the various authentation systems:

| **Origin of Authentication** | **Recommended Flow**                        |
| ---------------------------- | ------------------------------------------- |
| In-game                      | [Custom SSO (In-Game)](/authentication/openid) or [Platform SSO](/authentication/platform) or email (see below) |
| mod.io Website               | [Custom SSO (Web)](/authentication/openid-website) |
| Studio Website               | [Studio Website Login](/authentication/studio-website-login) |
| Embed Hub                    | [Custom SSO (In-Game)](/authentication/openid) or [Custom SSO (Web)](/authentication/openid-website) |

### Testing with email authentication

Before activating an official authentication method, you can easily test your game with email authentication on all platforms, which has no dependencies. Instructions for using email authentication can be found below:

- [Unreal Engine](/unreal/user-authentication)
- [Unity](/unity/user-authentication)
- [C++ SDK](/cppsdk/user-authentication)
- [REST API](/restapi)

:::important
Email is great for testing, however we highly recommend using either Custom SSO or Platform SSO as they are instant and accessible. These options make it easier to block bad actors and avoid user frustration, such as having to type using gamepads.
:::