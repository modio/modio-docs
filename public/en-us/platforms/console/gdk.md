---
id: gdk
title: Xbox
slug: /platforms/gdk
sidebar_position: 3
---

# Xbox One & Xbox Series X/S 

We offer cross-platform UGC support for both the *Xbox One & Xbox Series X/S*.

This guide includes:

* [Typical requirements](#typical-requirements)
* [SDK access](#sdk-access)
* [Authentication](#authentication)
* [Consent](#consent)
* [Moderation & Reporting](#moderation--reporting)
* [Networking & storage](#networking--storage)

## Typical requirements

Typical requirements for using mod.io on **Xbox One & Xbox Series X/S* games include:

* UGC cannot run scripts or execute code, unless sufficient mitigations are demonstrated to be in place (e.g. sandboxing or manual curation of content)
* UGC must work without the need for manual installation
* All “words” must be run through the *Xbox* word filter
* All data must be XR-012 (secure data transfer) compliant
* User consent is required the first time before authenticating an *Xbox* user
* If the *Xbox* user has UGC parental controls disabled, the UGC menu and any UGC installed must be disabled

We recommend contacting your Microsoft representative to establish their rules for UGC on their platform and any specific requirements you will need to meet. We can assist you with this process, and introduce you to our contact Vince Loiseleur (Developer Partner Manager) if this would be helpful, to get these approvals processed.

## SDK access

In order to allow access to the GDK Support modules for *Xbox*, we need to verify your status with Microsoft as an approved developer. If you are already an approved developer with Microsoft, you can do this online using this [Microsoft webform](https://developer.microsoft.com/en-us/games/support/request-gdkx-middleware). 

Select "mod.io" from the Middleware Partner list, and submit your details which will notify our team via developers@mod.io.

![Middeware Request form used for GDK resource access via the Xbox Game Dev Portal](img/xbox_verification.png)

 If you are not yet an approved developer, we will need to confirm your status with our account manager. To do this, please notify your contact at mod.io that you require this access and provide us with the following details as they would be recorded by Microsoft:
* Your Company Name
* Your Title/Game Name
* The email domain/address registered with Microsoft. (eg. \*@mod.io)

Once verified, your [mod.io contact](mailto:developers@mod.io) will provide access to the [GDK support module](/platforms/console-sdks#console-sdks) for your integration solution.

## Authentication

On *Xbox* platforms, you can authenticate the user via our *Xbox Live* authentication flow, or using their email address. We highly recommend using *Xbox Live* authentication where possible, as it is instant and accessible vs email which is not. Detailed instructions can be found in the [mod.io Xbox/GDK SDK](https://docs.mod.io/partners/xbox/authentication) (to access this documentation you must complete the required [SDK Access step](#sdk-access)).

If your implementation displays the mod.io website or custom web app through a browser overlay, we recommend adding the following query strings to the URL depending on the authentication method you have chosen to support:
* *Xbox Live* authentication: `?portal=xboxlive&login=auto`
* Email authentication: `?portal=email`

This will provide users with a streamlined login experience tailored to the appropriate login method (example below):

![Xbox Live log in interface available in the mod.io web UI](img/xbox_auth_web.png)

## Consent

If you choose to use *Xbox Live* authentication, it is a requirement from Microsoft that consent is collected before a user is authenticated for the first time. So when a user clicks the “UGC” button in-game, you must display an acceptance dialog similar to the one explained in the [Terms & User Consent](/terms) guide.

## Moderation & Reporting

On the Xbox, only UGC that follows the rules you have agreed with the first party should be made available to download and play. Our [moderation tools and web dashboard](/moderation) allow you to control this process and manage the types of UGC available without any additional development required. See [curation rules](/moderation/manual-curation#curation-rules) for how you can control what goes live.

Another requirement, is that users can report UGC, and those reports must be actioned as appropiate. Our plugins have a process for reporting UGC built in. See [reporting](/moderation/community-reports) for details of how mod.io aggregates community reports so they can be easily managed.

## Networking & storage

Storage space available for UGC will be limited, and allocation for space dedicated to UGC will require an entry in your MicrosoftGame.config file. We recommend using ‘Growable Persistent Local Storage’ to allocate the space you require for UGC, as this reduces the up-front storage required on the device. All games that implement mod.io services will require space for storing cached and downloaded data, as well as space for storing user-specific data.

## More information

Head to our console [SDK Access](/platforms/console-sdks) page, for detailed information about using mod.io on the *Xbox*, and access to the relevant console module SDK. Be aware that accessing this information requires completion of the appropriate NDA.