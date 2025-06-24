---
id: monetization-integration
title: Integration
slug: /monetization/integration/
sidebar_position: 0
---

# Integration

The mod.io official plugins for Unreal Engine and Unity are the easiest way to integrate the Marketplace in your game. Please follow the guides in the relevant link for your game engine.

* [SDK Guide](/cppsdk/marketplace/)
* [Unreal Guide](/unreal/marketplace/)
* [Unity Guide](/unity/marketplace/)

If you intend on building your own custom integration, you can access our REST API directly at the link below.

* [REST API Endpoints](/monetization/restapi/)

## Purchase Server

If you are selling mod.io virtual currency through a platform store, you will need a service to consume the virtual currency entitlements and apply them to player's mod.io account. The implementation option chosen should factor in the needs of your studio and if your organization has existing systems setup for handling In-App Purchases against third-party platforms or whether you want mod.io to assume responsibility for doing so.

### mod.io as Purchase Server (Recommended)

The path of least resistance. mod.io does all the heavy lifting.

<table>
  <tr>
    <th>Party</th>
    <th>Responsibility</th>
  </tr>
  <tr>
    <td>mod.io</td>
    <td>Platform Entitlement Consumption, Virtual Currency Pack Transaction, Refunds / Chargebacks / Chargeback-reversal processing from platforms.</td>
  </tr>
  <tr>
    <td>Your Studio</td>
    <td>Registering eligible Platform Entitlements (SKU's) with mod.io.</td>
  </tr>
</table>

For a detailed walkthrough of this flow, head to the [mod.io as Purchase Server](/monetization/modio-as-purchase-server/) section.

### Game Studio as Purchase Server

Hard mode. Game Studio does the heavy lifting.

<table>
  <tr>
    <th>Party</th>
    <th>Responsibility</th>
  </tr>
  <tr>
    <td>Your Studio</td>
    <td>Registering eligible Platform Entitlements (SKU's) with mod.io, Platform Entitlement Consumption,  Virtual Currency Pack Transaction Processing with mod.io,  Refunds / Chargebacks / Chargeback-reversal Processing from platforms.</td>
  </tr>
  <tr>
    <td>mod.io</td>
    <td>Processing Virtual Currency Pack transactions from your Purchase Server</td>
  </tr>
</table>

For a detailed walkthrough of this flow, head to the [Studio as Purchase Server](/monetization/studio-as-purchase-server/) section.

### How to Choose

Both options listed above enable studios to convert In-App Purchases into mod.io Virtual Currency Packs for use on our marketplace. Determining which of the above options is best suited for your organization will depend on the requirements of your title and whether your specific use-case for mod.io marketplace necessitates your studio handling certain operations such as transaction processing, refunds, etc where there is more responsibility placed on your studio to handle events and reconcile potential issues that may arise. If you have any questions regarding your team's requirements and would like some assistance please [reach out to our team](mailto:developers@mod.io?subject=Monetization%20Support).