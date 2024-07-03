---
id: overview
title: Overview
slug: /web-services/marketplace/overview/
sidebar_position: 0
---

# Overview

mod.io supports the management of player-owned entitlements on first party platforms for use within the mod.io eco-system. Multiple methods are available for integrating, and subsequently converting first party entitlement purchases into mod.io Virtual Tokens. The implementation option chosen should factor in the needs of your studio and if your organization has existing systems setup for handling In-App Purchases against first-party platforms or whether you want mod.io to assume responsibility for doing so.

# Implementation Options

#### Glossary

- **Platform**: A first party platform, such as Steam, Xbox Live, PlayStation&trade;Network, etc.
- **Virtual Token**: mio's - mod.io's Virtual Token Currency which underpins your studios currency (which may have a vanity title).

When it comes to implementing monetization features provided by mod.io, there is an important decision your studio must make as to who is processing the platform entitlements and their subsequent transactions with mod.io.

### mod.io as Purchase Server

The path of least resistance. mod.io does all the heavy lifting.

**Party** | **Responsibility**
|----------|--------------|
| Your Studio | Registering eligible Platform Entitlements (SKU's) with mod.io.
| mod.io | Platform Entitlement Consumption, Virtual Token Transaction, Refunds / Chargebacks / Chargeback-reversal processing from platforms.

For a detailed walkthrough of this flow, head to the mod.io as Purchase Server section.

### Game Studio as Purchase Server

Hard mode. Game Studio does the heavy lifting.

**Party** | **Responsibility**
|----------|--------------|
| Your Studio | Registering eligible Platform Entitlements (SKU's) with mod.io, Platform Entitlement Consumption,  Virtual Token Transaction Processing with mod.io,  Refunds / Chargebacks / Chargeback-reversal Processing from platforms.
| mod.io | Processing Virtual Token transactions from your Purchase Server

For a detailed walkthrough of this flow, head to the [Studio as Purchase Server](/web-services/iap/studio-as-purchase-server/) section.

# How to Choose

Both options listed above enable studios to convert In-App Purchases into mod.io Virtual Tokens for use on our marketplace. Determining which of the above options is best suited for your organization will depend on the requirements of your title and whether your specific use-case for mod.io marketplace necessitates your studio handling certain operations such as transaction processing, refunds, etc where there is more responsibility placed on your studio to handle events and reconcile potential issues that may arise. If you have any questions regarding your team's requirements and would like some assistance please [reach out to our team](mailto:developers@mod.io?subject=Monetization%20Support).