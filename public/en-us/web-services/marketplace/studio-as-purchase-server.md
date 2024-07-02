---
id: studio-as-purchase-server
title: Operating a Purchase Server
slug: /web-services/marketplace/studio-as-purchase-server
sidebar_position: 0
---

Operating a Purchase Server requires a strong understanding of the role you must play in initiating transaction from your secure server. Covered in this section is:

- Making transactions from your purchase server
- Relaying clawback events from your purchase server to mod.io
- Handling failures and edge cases with clawback functionality

## Prerequisites

To operate as a purchase server that communicates transaction date with mod.io, you must have the following steps completed:

- A title registered within mod.io with monetization functionality enabled.
- SKU's registered to your mod.io game profile for the platform the entitlements originate from.
- A secure web server, configured with a [Service Token](/web-services/authentication/s2s/#obtaining-a-service-token) to send service-to-service (S2S) API requests to mod.io
- A [User Delegation Token](/web-services/authentication/s2s/#obtaining-a-user-delegation-token-for-making-requests-on-behalf-of-a-user), enabling the processing of a transaction on behalf of a mod.io user.

## Architecture Overview

### Transaction Process

```mermaid
sequenceDiagram
    participant PS as Studio Purchase Server
    participant API as mod.io S2S API
    participant PF as Platform API
    autonumber

    PS->>API: Initiate transaction
    API->>PS: Transaction ID Returned
    PS->>PF: Consume Platform Entitlement
    PF->>PS: Consumed = true
    PS->>API: Confirm Transaction
    API->>PS: Confirmed, wallet balance updated
```

1. Studio Purchase Server informs mod.io it is [beginning a transaction](#1-initiating-transaction), providing the mapped SKU the player is purchasing and a User Delegation Token to associate the transaction with a user.
2. mod.io returns the mod.io Transaction ID. This Transaction ID is required in Step 5, and should be saved by the studio for book-keeping.
3. Studio Purchase Server [consumes](#2-consuming-platform-entitlement) the players' entitlement against the platform where the entitlement resides.
4. Platform returns the consumption state after the request.
5. Studio Purchase Server informs mod.io to [finalize the transaction](#3-confirming-transaction), passing in the transaction ID from step 1. Only after this step will mod.io allocate Virtual Tokens to a user.
6. mod.io confirms the transaction has been finalized, and returns the players' updated wallet balance.

## Implementation

### Idempotent Requests

When making requests to mod.io S2S API's, some endpoints require an Idempotent Key to ensure that your purchase server should be able to safely retry requests without the concern of performing the same operation twice. To understand the benefit of Idempotent requests, consider the following scenario:

1. Your purchase server creates a transaction, passing in an Idempotent Key into the request.
2. mod.io's S2S API successfully receives the request and processes it.
3. A connection error / transient failure occurs before the request is returned to your server.

In this scenario, your purchase server is unaware if the request succeeded of failed. To prevent a second transaction being created, you can safely pass in the same Idempotent Key in the request and the same response will be returned that was in the previous operation.

#### How to set

To set an Idempotent Key in the request, you must set the value as the HTTP header `X-Modio-Idempotent-Key` to be the value that your client can re-send in the event of a transient failure. An example GUID as an Idempotent Key in a request would look like so:

```
X-Modio-Idempotent-Key: e1e186d0-fb4a-4b32-b9de-bbefc65f5b59
```

See below for further examples of an Idempotent Key being incorporated into requests.

#### Recommendations / Things to know

- Idempotent Keys expire after 24 hours.
- Idempotent Keys are scoped to the user context of the request, as defined by the `X-Modio-Delegation-Token` header value passed in the request.
- mod.io recommends the use of GUID's, UUID's or other well known unique identifier standard.
- Your purchase server should store the Idempotent Key in a database in the event you need to re-create the request and get the identical response back for a given operation - whilst being aware of the 24 hour expiry.
- Only POST or PUT requests can support an Idempotent Key.

### 1. Initiating Transaction

This request acts as an indicator of intent, to inform mod.io you are beginning a transaction. This step is necessary for book-keeping in the event a players platform entitlement is consumed, but a purchase server does not finalize the transaction. This is not ideal as the player has then had the entitlement removed from their platform inventory, and they also have not been awarded their mod.io Virtual Tokens. The purchase server should save the returned _Transaction ID_ returned in this request for your book-keeping.

#### Request

`POST https://{your-game-id}.modapi.io/v1/s2s/transactions/intent`

##### Headers

Header|Type|Required|Description
---|---|---|---|
Authorization|string|true|The valid service token created with your OAuth Credentials.
X-Modio-Delegation-Token|string|true|The User Delegation Token requested by your application on behalf of a user.
X-Modio-Idempotent-Key|string|true|A value used to ensure that multiple identical requests are treated as a single request, preventing duplicate operations. Supported characters are alphabetical characters, dashes and underscores. Must validate against the following regex: `/A[a-zA-Z0-9_-]+z/`

##### Body

Parameter|Type|Required|Description
-------|---|---|---|
sku|string|true|The sku ID of the entitlement that will be converted into it's equivalent Virtual Token amount. This is the identifier that will associate the a transaction with a registered entitlement on mod.io that maps to an eligible Token Pack.
portal|string|true|The portal where the sku resides. Valid values are `apple`, `google`, `xboxlive`, `psn` and `steam`.
gateway_uuid|string|false|An optional mapping alpha dash string that can be used to track this transaction. It is recommended to use primary ID of the entitlement as it exists on the processing platform if you have it available.

```
POST https://{your-game-id}.modapi.io/v1/s2s/transactions/intent HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Accept: application/json
X-Modio-Idempotent-Key: d720901c-a8ed-42ff-9343-39d4a3e16b18
Authorization: Bearer {service-token}
Content-Type: application/json

sku=Item01&portal=xboxlive&gateway_uuid=1f1ecb47-0074-4092-8eda-f6a65aa2ce32
```

#### Response

```json
{
    "transaction_id": 897258250,
    "gross_amount": 104,
    "net_amount": 104,
    "platform_fee": 24,
    "gateway_fee": 0,
    "transaction_type": "pending",
    "meta": [
        {
            "game_id": 2621,
            "buyer_id": 6990060,
            "game_name": "Rogue Knight",
            "buyer_name": "Gordon",
            "token_name": "Gold",
            "token_pack_id": 1,
            "token_pack_name": "200 Pack"
        }
    ],
    "purchase_date": 1715323164
}
```

##### Response Schema

Name|Type|Description
---|---|---
transaction_id|integer|The transaction id.
gross_amount|integer|The gross amount of the purchase in the lowest denomination of currency.
net_amount|integer|The net amount of the purchase in the lowest denomination of currency.
platform_fee|integer|The platform fee of the purchase in the lowest denomination of currency.
gateway_fee|integer|The gateway fee of the purchase in the lowest denomination of currency.
transaction_type|string|The state of the transaction that was processed. E.g. CANCELLED, CLEARED, FAILED, PAID, PENDING, REFUNDED.
meta|object|The metadata that was given in the transaction.
purchase_date|integer|The time of the purchase.

### 2. Consuming Platform Entitlement

Once you have initiated the transaction your purchase server must now consume the entitlement on the supported platform to reduce its quantity by one _if the entitlement is tracked by the platform_. In the event the platform API does not track the state of entitlements, your server should track in your own database if the Order ID / Line Item ID has been processed previously to guarantee you aren't processing transactions more than once.

Refer to the table below to determine if you can defer entitlement state where the platform tracks entitlement state (consumed, unconsumed, etc) or if you must implement it yourself.

**Platform API** | **Manages Entitlement State?**
|----------|----------
| Xbox Live | Yes
| PlayStation&trade;Network | Yes
| Steam | Yes
| Google Play Store | No
| Apple App Store | No

::::warning
In the event your are unable to consume the entitlement, potentially due to it already being consumed or due to an unforeseen error - you must **not** finalize the transaction and instead abandon continuing until you have successfully consumed the entitlement. 
::::

### 3. Confirming Transaction

Upon successful consumption of the entitlement against the Platforms Entitlement API, you can then finalize the transaction by sending a request to the endpoint listed below. If this request succeeds, the player will then get the Virtual Token amount associated with the SKU in the transaction allocated to their wallet.

#### Request

Create a service-to-service (S2S) transaction commit. This is for performing an external token transaction. This step finalizes the transaction and will issue tokens to the user associated to it. A successful request will return a [S2S Pay Object](#s2s-pay-object) object. Requires scope of monetization on token.

`POST https://{your-game-id}.modapi.io/v1/s2s/transactions/commit`

##### Headers

Header|Type|Required|Description
---|---|---|---|
Authorization|string|true|The valid service token created with your OAuth Credentials.
X-Modio-Delegation-Token|string|true|The User Delegation Token requested by your application on behalf of a user.
X-Modio-Idempotent-Key|string|true|A value used to ensure that multiple identical requests are treated as a single request, preventing duplicate operations. Supported characters are alphabetical characters, dashes and underscores. Must validate against the following regex: `/A[a-zA-Z0-9_-]+z/`

##### Body

Parameter|Type|Required|Description
---|---|---|---|
transaction_id|integer|true|The ID of the transaction to complete.
clawback_uuid|string|false|An optional mapping alpha dash string that can be used to group this transaction against other transactions.

```
POST https://{your-game-id}.modapi.io/v1/s2s/transactions/commit HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Accept: application/json
X-Modio-Idempotent-Key: d720901c-a8ed-42ff-9343-39d4a3e16b18
Authorization: Bearer {service-token}
Content-Type: application/json

transaction_id=897258250&clawback_uuid=b5ce3097-ad5f-4402-8469-57233842d0b4
```

#### Response

```json
{
    "transaction_id": 897258250,
    "gross_amount": 104,
    "net_amount": 104,
    "platform_fee": 24,
    "gateway_fee": 0,
    "transaction_type": "paid",
    "meta": [
        {
            "game_id": 2621,
            "buyer_id": 6990060,
            "game_name": "Rogue Knight",
            "buyer_name": "Gordon",
            "token_name": "Gold",
            "token_pack_id": 1,
            "token_pack_name": "200 Pack"
        }
    ],
    "purchase_date": 1715323164
}
```

## Handling Clawback Events

As part of operating a purchase server, you are responsible for processing clawback events from the first party platforms and relaying them mod.io to protect your in-game economy and mod.io from fraudulent behavior. Reconciliation instructions vary per platform and you should follow any platforms recommended practices for handling their clawback events, and then forward the events to mod.io to potentially action. Some of the common clawback events are:

**Type** |  **Description** | **Should mod.io be notified?**
|----------|----------|----------
| Refund | An platform entitlement that has been refunded by a player. | Only if the entitlement has been consumed and converted into mod.io Virtual Tokens.
| Chargeback | A payment provider has reverted a transaction, usually due to cardholder disputes | Only if the entitlement has been consumed and converted into mod.io Virtual Tokens.
| Chargeback-Reversal | A previously issued chargeback by a payment provider has since been reversed, acknowledging the transaction was valid | Refer to platform instructions

### Preventing Fraudulent Transactions

As mod.io's marketplace economy uses registered entitlements within a given platform, there is always a risk that refunds and chargebacks can happen against transactions which encapsulated line items which were then in-effect converted into mod.io Virtual Tokens. To reconcile or, discourage such behavior, your organization should be aware of the state's a transaction can fall into and when action should be taken.

#### When to notify mod.io of a clawback event

A good baseline to follow, is if the entitlement has been consumed, either [by mod.io](#modio-as-purchase-server) or your purchase server which resulted in Virtual Tokens being allocated to a player, you must [inform mod.io of the clawback event](#sending-clawback-data-to-modio). Read on for examples of common scenarios you will likely encounter to determine if you should or shouldn't forward clawback events to mod.io.

#### Clawback handling for consumed entitlements

Consider an example where the following chain of events occur:

- A player within your title purchases an item, in the form of a consumable entitlement from the platform store.
- Your purchase server converts an eligible entitlement into mod.io Virtual Tokens as illustrated in the [transaction process above](#transaction-process), resulting in a player having 100 Virtual Tokens in their mod.io wallet.
- The player spends the 100 Virtual Tokens on our marketplace in exchange for premium UGC, reducing their wallet balance to 0.
- The player disputes the payment with their payment provider, resulting in a chargeback.
- The player has received their funds back for the purchase of the entitlement against the platform store, and still have the premium UGC they purchased with the 100 Virtual Tokens they temporarily possessed.

The scenario described is considered fraudulent behavior as a player could continue to make refund / chargeback claims against either their financial institution or against the platform (Xbox Live, etc) and continue to get funds refunded to them. However critically, mod.io is not aware the funds have been returned and your marketplace is now at a loss as premium UGC has been purchased and distributed, but the funds used in the transaction won't be distributed to your creators - potentially disincentivizing creators from contributing.

For the scenario described above, it is critical to a healthy marketplace within your titles that clawback events are processed by your purchase server, and if eligible, relayed to mod.io for action.

::::warning
Failing to inform mod.io's clawback API of fraudulent behavior you are notified of may result in your title's marketplace functionality being disabled and potentially removed.
::::

#### Clawback handling for yet to be consumed entitlements

Let's step through another scenario, but with an important difference that a refund / chargeback event occurs **prior** to syncing the platform entitlements to mod.io

- A player within your title purchases an item, in the form of a consumable entitlement from the platform store.
- The player disputes the payment with their payment provider, resulting in a chargeback.
- The player has received their money back for the purchase of the entitlement against the platform store however their platform store purchases have not been sync'd to mod.io.

In this event, there is no need to send any clawback events to mod.io as the mapped entitlement was never synced to mod.io there will be no record of the transaction as the player was never issued any Virtual Tokens.

### Sending clawback data to mod.io

Once your system has received the clawback events from the platform, you should forward them to mod.io to take any action against already-allocated virtual tokens.

#### Request

`POST https://{your-game-id}.modapi.io/v1/s2s/transactions/clawback`

Parameter|Type|Required|Description
---|---|---|---|
transaction_id|integer|If `gateway_uuid` is null|The id of the transaction.
gateway_uuid|string|If `transaction_id` is null|The alpha dash string if it was supplied during the [initiate a transaction](1-initiating-transaction) step.
portal|string|true|The portal the transaction is tied to. Valid values are `apple`, `google`, `xboxlive`, `psn` and `steam`.
refund_reason|string|true|The reason for the refund / transaction reversal.

```
POST https://{your-game-id}.modapi.io/v1/s2s/transactions/clawback HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Accept: application/json
Authorization: Bearer {service-token}
Content-Type: application/json

transaction_id=897258250&gateway_uuid=1f1ecb47-0074-4092-8eda-f6a65aa2ce32&portal=xboxlive&reason="Chargeback%20Issued"
```

#### Response

```json
{
    "transaction_id": 897258250,
    "gross_amount": 104,
    "net_amount": 104,
    "platform_fee": 24,
    "gateway_fee": 0,
    "tax": 0,
    "tax_type": "none",
    "transaction_type": "refunded",
    "purchase_date": 1715323113
}
```

##### Response Schema

Name|Type|Description
---|---|---
transaction_id|integer|The transaction id.
gross_amount|integer|The gross amount of the purchase in the lowest denomination of currency.
net_amount|integer|The net amount of the purchase in the lowest denomination of currency.
platform_fee|integer|The platform fee of the purchase in the lowest denomination of currency.
gateway_fee|integer|The gateway fee of the purchase in the lowest denomination of currency.
tax|integer|The tax amount of the purchase in cents.
tax_type|string|The tax type.
transaction_type|string|The state of the transaction that was processed. Possible values are `cancelled`, `cleared`, `failed`, `paid`, `pending`, `refunded`.
purchase_date|timestamp|The time of the purchase.