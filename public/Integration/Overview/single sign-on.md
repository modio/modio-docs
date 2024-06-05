---
id: sso
title: Single Sign-On
slug: /sso/
sidebar_position: 2
---

# Single Sign-On

Users must authenticate via single sign-on before they can download UGC in-game. You have two options: link [mod.io](https://mod.io/) to your user account system or use your authentication provider. 

## Linking to your user account system

This involves linking a user’s [mod.io](https://mod.io/) account to your user account system using OAuth 2.0, and then using that link to make authenticated calls to the [mod.io](https://mod.io/) REST API. This is easy to implement, as it is similar to Twitch or Steam authentication. You will need a way to store and access the users mod.io token, to authenticate the user in-game and on the web.

The downside to this option is  that it makes it  difficult to use the Embeddable Hub premium feature on your game’s website, as [mod.io](https://mod.io/) has no information on the user’s account. Moderation can also be more challenging, as users can change the [mod.io](https://mod.io/) account they link to your system to get around user bans. 

## Using your authentication provider

[mod.io](https://mod.io/) supports any authentication provider using the industry standard protocols, OAuth 2.0 and OpenID Connect. We support all major platforms, including Steam, Xbox Live and PlayStation Network. 

To enable this, you will need to support OAuth 2.0 to authenticate on the web, and support OpenID Connect as an authentication provider. [mod.io](https://mod.io/) retrieves and stores user ids, and uses these credentials to create a [mod.io](https://mod.io/) account for them. This is more complex to implement, but creates less friction for the player, since they don’t need to make the [mod.io](https://mod.io/) account. Rather, this happens automatically in the game client. 