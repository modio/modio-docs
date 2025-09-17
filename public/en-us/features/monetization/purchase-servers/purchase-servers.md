---
id: monetization-purchase-servers
title: Purchase Servers
slug: /monetization/purchase-servers
sidebar_position: 0
---

# Purchase Servers

If you are selling mod.io [Virtual Currency](/monetization/how-it-works#virtual-currency) through a platform store, you will need a service to consume the Virtual Currency entitlements and apply them to players mod.io accounts. 

The implementation option chosen should factor in the [Monetization](/monetization) goals of your studio and whether your organization has existing systems setup for handling In-App Purchases against third-party platforms or whether you want mod.io to assume responsibility for doing so.

## mod.io as purchase server (recommended)

The path of least resistance. Using [mod.io as the purchase server](/monetization/modio-as-purchase-server) is our recommended option as it means mod.io does all the heavy lifting.

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

## Game studio as purchase server

This option is quite a bit harder, but can be the right option if you have specific needs. By using your [studio as the purchase server](/monetization/studio-as-purchase-server), it means you have to do all the heavy lifting.

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

### How to choose

Both options listed above enable studios to convert In-App Purchases into mod.io Virtual Currency Packs for use on our marketplace. Determining which of the above options is best suited for your organization will depend on the requirements of your title and whether your specific use-case for mod.io marketplace necessitates your studio handling certain operations such as transaction processing, refunds, etc where there is more responsibility placed on your studio to handle events and reconcile potential issues that may arise. If you have any questions regarding your team's requirements and would like some assistance please [reach out to our team](/support/contacts).