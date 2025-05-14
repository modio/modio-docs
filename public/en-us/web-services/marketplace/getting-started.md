---
id: getting-started
title: Getting Started
slug: /web-services/marketplace/getting-started/
sidebar_position: 0
---

## Overview

mod.io Marketplace is the comprehensive solution for game studios wanting to monetize their UGC catalogue, built from the ground up for both studios and their creators. Marketplace currently supports a wide range of storefronts to handle the discovery, purchasing and allocation of premium UGC on mod.io. The implementation option chosen should factor in the needs of your studio and if your organization has existing systems setup for handling In-App Purchases against third-party platforms or whether you want mod.io to assume responsibility for doing so.

### Implementation Options

When it comes to implementing monetization features provided by mod.io, there is an important decision your studio must make as to who is processing the platform entitlements and their subsequent transactions with mod.io.

#### mod.io as Purchase Server (Recommended)

The path of least resistance. mod.io does all the heavy lifting.

<table>
  <tr>
    <th>Party</th>
    <th>Responsibility</th>
    <th>Reference</th>
  </tr>
  <tr>
    <td>mod.io</td>
    <td>Platform Entitlement Consumption, Virtual Currency Pack Transaction, Refunds / Chargebacks / Chargeback-reversal processing from platforms.</td>
    <td rowspan="2" align="center">[Get Started](/web-services/marketplace/modio-as-purchase-server/)</td>
  </tr>
  <tr>
    <td>Your Studio</td>
    <td>Registering eligible Platform Entitlements (SKU's) with mod.io.</td>
  </tr>
</table>

For a detailed walkthrough of this flow, head to the mod.io as Purchase Server section.

#### Game Studio as Purchase Server

Hard mode. Game Studio does the heavy lifting.

<table>
  <tr>
    <th>Party</th>
    <th>Responsibility</th>
    <th>Reference</th>
  </tr>
  <tr>
    <td>Your Studio</td>
    <td>Registering eligible Platform Entitlements (SKU's) with mod.io, Platform Entitlement Consumption,  Virtual Currency Pack Transaction Processing with mod.io,  Refunds / Chargebacks / Chargeback-reversal Processing from platforms.</td>
    <td rowspan="2" align="center">[Get Started](/web-services/marketplace/studio-as-purchase-server/)</td>
  </tr>
  <tr>
    <td>mod.io</td>
    <td>Processing Virtual Currency Pack transactions from your Purchase Server</td>
  </tr>
</table>

For a detailed walkthrough of this flow, head to the [Studio as Purchase Server](/web-services/marketplace/studio-as-purchase-server/) section.

# How to Choose

Both options listed above enable studios to convert In-App Purchases into mod.io Virtual Currency Packs for use on our marketplace. Determining which of the above options is best suited for your organization will depend on the requirements of your title and whether your specific use-case for mod.io marketplace necessitates your studio handling certain operations such as transaction processing, refunds, etc where there is more responsibility placed on your studio to handle events and reconcile potential issues that may arise. If you have any questions regarding your team's requirements and would like some assistance please [reach out to our team](mailto:developers@mod.io?subject=Monetization%20Support).