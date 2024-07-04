---
id: monetization-how-it-works
title: How it Works
slug: /monetization/how-it-works/
---

# How it Works

Our system is built to support cross-platform payments on web, in-game and console, allowing content creators and studios or publishers to earn revenue no matter where the purchase is made.

Players are able to purchase Token Packs, either directly through your game page on mod.io or any platform you wish to make this available on (PC storefronts, console stores, or your own). Players can then use those tokens to purchase premium UGC, the tokens are paid to creators and the game publisher, based on the revenue split you set in the [Monetization settings](/monetization/onboarding/#monetization-settings).

## Wholesale Token Price and Fees

Token Packs are sold at a price of USD$0.01 per-token, so $1 for 100, on which we charge a fixed wholesale rate of USD$0.0052 per-token which covers our fee and payouts to creators which we manage for you. The remaining USD$0.0048 per-token goes to the game publisher after payment processor fees are applied.

### Detailed Breakdown

When $1 is spent to purchase 100 tokens, and those tokens are then used to purchase a piece of content:

* USD$0.48 (48%) is used to cover the payment processor fee (e.g. Steam, PlayStation™Store, Xbox, iOS, Android, or Tilia on Web), and the remainder is profit for the game studio
* USD$0.52 (52%) is used to cover the fixed wholesale rate of the tokens, broken down as follows:
    - USD$0.4 (40%) is allocated to the tokens earnings pool (i.e. the Marketplace economy)
        - When these 100 tokens are spent, the default is for 70% of the tokens to go to the creator, and 30% go to the studio (this split can be adjusted in your dashboard)
    - USD$0.12 (12%) is charged as a fee by mod.io

A studio can expect a 20% to 61% share of the revenue from UGC sales, depending on the payment processor fee, and the revenue split configured. Creators can expect from 40% to 20%. Standards for creators’ payouts vary, but the industry norm from games like Roblox and Counter-Strike 2 is established around 25%.

![Monetization Revenue Split](images/RevenueSplit-black.png)

### Fees

For sales happening on the mod.io platform, the fees described above are applied directly, and the game publisher receives their share of the revenue immediately.

However, sales made through external platforms (e.g. Steam, PlayStation Store, iOS) are paid as royalties directly to the studio; in that case, mod.io’s fee is paid by the publisher retroactively with a monthly invoice (see details below).

mod.io's fee is always a fixed $0.0012 per token, taken from the token wholesale rate.

Our payment processing partner; Tilia’s fees are 5% plus $0.20 for transactions made directly through the mod.io web app.

### Invoices

Invoices will be issued at the start of the next calendar month for all tokens purchased on external platforms during the previous month. Because proceeds from sales on external platforms go directly to the game studio, we need to invoice back our fee and the value of the tokens in the Marketplace. Tokens are charged at the wholesale token price, which is $0.0052 for every token sold.

## Examples

Here are some more detailed examples and illustrations of both sales originating from the mod.io web app, and sales originating from external platforms.

### Sales originating from mod.io web app

Player purchases tokens directly on mod.io (or using our web site or embedded web app). The price is $0.01 per token. In this example, we’ll assume the sale of a token pack of 1000 tokens for $10.

From there Tilia will charge their fee, which is 5% of the total amount + $0.20 flat fee for each transaction. In this example, Tilia's fee is $0.7, leaving $9.3. 

We charge the token wholesale amount ($0.0052 per token sold). The token wholesale amount covers mod.io's fee, and the value of the tokens in the economy.

Mod.io gets $0.0012 per token of the wholesale amount. In this case, this would be $1.2. The token pool gets $0.004 per token of that wholesale amount. In this case, that would be $4. This is the value of the tokens, as a virtual currency in the Marketplace economy.

In this scenario, this leaves $4.1 that goes directly to the studio.

**Additional examples for token packs sales, via mod.io:**

|            | **fee**           | **100 tokens for $1** | **500 tokens for $5** | **1000 tokens for $10** |
|------------|-------------------|-----------------------|-----------------------|-------------------------|
| Tilia      | 5%+$0.2           | $0.25                 | $0.45                 | $0.70                   |
| mod.io     | $0.0012 per token | $0.12                 | $0.60                 | $1.20                   |
| Token pool | $0.004 per token  | $0.40                 | $2.00                 | $4.00                   |
| Studio     | What's left       | $0.23                 | $1.95                 | $4.10                   |

The above covers the transaction for the purchase of token packs. Following this, when the player purchases a piece of content using their tokens, we apply the revenue split set by the studio. So if a premium UGC item was sold for 1000 tokens and the studio had 70% go to the Creator and 30% go to the Studio then the Creator would get $2.8, and the Studio would get a further $1.2 on top of the money they’ve already earned from the token pack sale.

So in total, the studio share after the sale of this token pack, and its use to purchase premium UGC, would amount to $5.3.

![Token Pack Sale In Store](images/IntStoreFlow-black.png)

*Overview of the system for a token pack sale of $10 happening via the mod.io web app.*

### Sales originating from external platforms (Steam, PlayStation, Xbox, etc.)

Player purchases tokens from an external platform (Steam, PlayStation Store, Microsoft Store, etc). The price is still $0.01 per token. In this example, we’ll again assume the sale of a token pack of 1000 tokens for $10.

The external platform would charge 30% of that, leaving $7. Platforms rate vary, for example Epic Game Store would only charge 12%, but for this example we’ll assume a 30% rate which is the standard for Steam, PlayStation or Xbox. The studio will then get the remaining $7 paid directly to them by the platform as royalties.

mod.io will issue an invoice at the start of the following month to charge back the token wholesale amount for those 1000 tokens sold. We would charge the same Token wholesale charge of $0.0052 per token. The invoice total would amount to $5.2, leaving $1.8 to the studio.

Mod.io gets $0.0012 of the whole sale amount - which would be $1.2.
The token pool gets $0.004 of that wholesale amount - which would be $4.

**Additional examples for token packs sales, via external platform:**

|            | **fee**           | **100 tokens for $1** | **500 tokens for $5** | **1000 tokens for $10** |
|------------|-------------------|-----------------------|-----------------------|-------------------------|
| Platform   | 30%               | $0.30                 | $1.50                 | $3.00                   |
| mod.io     | $0.0012 per token | $0.12                 | $0.60                 | $1.20                   |
| Token pool | $0.004 per token  | $0.40                 | $2.00                 | $4.00                   |
| Studio     | What's left       | $0.18                 | $0.90                 | $1.80                   |

The above covers the transaction for the purchase of token packs. Following this, when the player purchases a piece of content using their tokens, we apply the revenue split set by the studio. If a UGC item was sold for 100 tokens and the studio had 70% go to the creator and 30% go to the studio then the creator would get $2.8 and the studio would get $1.2 on top of the money they’ve already earned from the token pack sale.

So in total, the studio share after the sale of this token pack, and its use to purchase premium UGC, would amount to $3.

![Token Pack Sale External](images/ExtStoreFlow-black.png)

*Overview of the system for a token pack sale of $10 happening via the mod.io web app.*