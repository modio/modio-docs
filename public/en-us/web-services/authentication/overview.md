---
id: overview
title: Overview
slug: /web-services/authentication/overview/
sidebar_position: 0
---

# Overview

When interacting with mod.io you may wish to use your own managed identity provider for mod.io interaction by your players. To facilitate this functionality, mod.io offers two widely-used complementing OAuth flows for account linking across both game clients and traditional web-based OAuth flows.

## Supported Use Cases

We recommend using the applicable Platform SSO for in-game authentication and sign-in via our website. mod.io also offers Studio SSO using OpenID as a premium feature in cases where a studio wishes to use it's own identity provider for authentication.

| **Origin of Authentication** | **Recommended Flow**                        |
| ---------------------------- | ------------------------------------------- |
| In-game                      | [OpenID](/web-services/authentication/openid/) or [Platform SSO](/web-services/authentication/platform/) or [Email](/web-services/authentication/platform/#email-authentication) |
| mod.io Website               | [OAuth 2.0 Authorization Code Flow](/web-services/authentication/website/) |
| Studio Website               | [OAuth 2.0 Authorization Code Flow](/web-services/authentication/sign-in-with-modio/) |
| Embeddable ModHub            | [OpenID](/web-services/authentication/openid/) or [OAuth 2.0 Authorization Code Flow](/web-services/authentication/website/) |
