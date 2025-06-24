---
id: gdk
title: Xbox One & Xbox Series X/S
slug: /platforms/gdk/
sidebar_position: 3
---

# Xbox One & Xbox Series X/S 

Typical requirements for using mod.io on Xbox One & Xbox Series X/S games include:
* UGC cannot run scripts or execute code, unless sufficient mitigations are demonstrated to be in place (e.g. sandboxing or manual curation of content)
* UGC must work without the need for manual installation
* All “words” must be run through the Xbox word filter
* All data must be XR-012 (secure data transfer) compliant
* User consent is required the first time before authenticating an Xbox user
* If the Xbox user has UGC parental controls disabled, the UGC menu and any UGC installed must be disabled

We recommend contacting your Microsoft representative to establish their rules for UGC on their platform and any specific requirements you will need to meet. We can assist you with this process, and introduce you to our contact Vince Loiseleur (Developer Partner Manager) if this would be helpful, to get these approvals processed.

## SDK Access

In order to allow access to the GDK Support modules for Xbox, we need to verify your status with Microsoft as an approved developer. If you are already an approved developer with Microsoft, you can do this online at [the following webform](https://developer.microsoft.com/en-us/games/support/request-gdkx-middleware). Select "mod.io" from the Middleware Partner list, and submit your details which will notify our team via developers@mod.io.

![Middeware Request form used for GDK resource access via the Xbox Game Dev Portal](images/console-support/xbox_verification.png)

 If you are not yet an approved developer, we will need to confirm your status with our account manager. To do this, please notify your contact at mod.io that you require this access and provide us with the following details as they would be recorded by Microsoft:
* Your Company Name
* Your Title/Game Name
* The email domain/address registered with Microsoft. (eg. \*@mod.io)

Once verified, your mod.io contact will provide access to the GDK support module for your integration solution.

## Moderation

On Xbox, only UGC which follows the rules should be made available to download and play. Our moderation tools and web dashboard allow you to control this process and manage the types of UGC available on the Xbox Platform without any additional development required.

## Authentication

On Xbox platforms, you can authenticate the user via our Xbox Live authentication flow, or using their email address. We highly recommend using Xbox Live authentication where possible, as it is instant and accessible vs email which is not. Detailed instructions can be [found here](https://docs.mod.io/partners/xbox/authentication/) (to access this documentation you must complete the required [SDK Access step](#sdk-access)).

If your implementation displays the mod.io website or custom web app through a browser overlay, we recommend adding the following query strings to the URL depending on the authentication method you have chosen to support:
* Xbox Live Authentication: `?portal=xboxlive&login=auto`
* Email Authentication: `?portal=email`

This will provide users with a streamlined login experience tailored to the appropriate login method (example below):

![Xbox Live log in interface available in the mod.io web UI](images/console-support/xbox_auth_web.png)

Please contact us for further instructions for authenticating with Xbox Live: developers@mod.io.

## Consent

If you choose to use Xbox Live authentication (this isn’t required for email), it is a requirement from Microsoft that consent is collected before a user is authenticated for the first time. So when a user clicks the “UGC” button in-game, you must display an acceptance dialog similar to the one explained [Terms & User Consent](/terms/) guide.

## Networking & Storage

Storage space available for UGC will be limited, and allocation for space dedicated to UGC will require an entry in your MicrosoftGame.config file. We recommend using ‘Growable Persistent Local Storage’ to allocate the space you require for UGC, as this reduces the up-front storage required on the device. All games that implement mod.io services will require space for storing cached and downloaded data, as well as space for storing user-specific data.

## More Information

Head to our [console SDKs](/platforms/console-sdks/) page, for detailed information about using mod.io on the Xbox, and access to the relevant console module SDK. Be aware that accessing this information requires completion of the appropiate NDA.