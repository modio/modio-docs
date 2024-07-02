---
id: platforms-playstation
title: PlayStation&reg;4 & PlayStation&reg;5
slug: /platforms/playstation
sidebar_position: 1
---
import CrossLink from '@site/src/components/CrossLink'

# PlayStation&reg;4 & PlayStation&reg;5

Typical requirements for PS4&trade; & PS5&reg; games include:
* UGC cannot run scripts or execute code, unless sufficient mitigations are demonstrated to be in place (e.g. sandboxing or manual curation of content)
* UGC must work without the need for manual installation
* Titles utilising mod.io must allow users the option of playing without mod.io functionality
* If content is created by a user on PS4/PS5, the display name of the user must be shown as the creator if available (our system does this automatically if you configure your [platform headers correctly](https://docs.mod.io/restapiref/#platforms))
* User consent is required the first time before authenticating a user on PS4/PS5 or accessing data from mod.io. Note: a users consent in one game cannot be used in another, all games must get a users consent individually.
* If the user has UGC parental controls disabled, the UGC menu and any UGC installed must be disabled
* Users must be able to play your game without having to create a mod.io account, however UGC should not be made available to users without a mod.io account. This is required to adhere to the TRCs of ensuring consent is collected, and the user has the ability to block content from other users.
* All data mod.io provides relating to metrics and usage connected to PS4/PS5, are provided at a partner level only, and for private internal use by your team only
* Disclose usage of mod.io when submitting proposals for UGC implementations and approval via DevNet
* All existing Technical Requirements, cross-platform Policy requirements and business policies remain in effect. You need to seek appropriate waivers via standard process if your implementation of mod.io contravene these requirements.

All games supporting UGC must be approved individually, and you will be required to go through a dedicated UGC approval process with Sony Interactive Entertainment directly once you are ready to launch the functionality. We recommend contacting your Sony Interactive Entertainment representative to establish their rules for UGC on PS4/PS5 and any specific requirements you will need to meet. We can assist you with this process, and introduce you to our contact in Sony Interactive Entertainment: Antonio Grasso - Global Technology Partnerships if this would be helpful, to get these approvals processed.

## SDK Access

Please contact us for access to the PS4/PS5 SDKs so we can guide you through the steps: developers@mod.io

## Moderation

On PS4/PS5, only UGC which follows the rules should be made available to download and play. Our moderation tools and web dashboard allow you to control this process and manage the types of UGC available on PS4/PS5 without any additional development required.

## Authentication

On PS4/PS5, you can authenticate the user via our PlayStation&trade;Network authentication flow, or by using their email address. We highly recommend using the authentication flow where possible, as it is instant vs email which is not, and more importantly synchronizes a user's PlayStation Network blocklist. The ability to be able to block content from users is a TRC requirement, therefore users must be authenticated before they can access your UGC content via mod.io. 

If you choose to use PlayStation Network authentication, Sony Interactive Entertainment requires that you collect user consent before they are authenticated for the first time. So when a user clicks the “UGC” button in-game, you must display an [acceptance dialog](/terms).

If your implementation displays the mod.io website or custom web app through a browser overlay, we recommend adding the following query strings to the URL depending on the authentication method you have chosen to support:
* PlayStation Network Authentication: `?portal=psn&login=auto`
* Email Authentication: `?portal=email`

This will provide users with a streamlined login experience tailored to the appropriate login method (example below):

![PlayStation Network log in interface available in the mod.io web UI](images/console-support/psn_auth_web.png)

Please contact us for more details on how to authenticate with PSN: developers@mod.io

## Networking & Storage

Storage space available for UGC will be limited, and allocation for space dedicated to UGC will require approval from Sony Interactive Entertainment, who will require you to manage a strict data budget. All games that implement mod.io services will require space for storing cached and downloaded data, as well as space for storing user-specific data.