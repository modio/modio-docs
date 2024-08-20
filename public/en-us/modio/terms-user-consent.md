---
id: terms
title: Terms & User Consent
slug: /terms/
sidebar_position: 2
---

# Terms & User Consent

Before downloading UGC, players need to give consent to both the [mod.io](https://mod.io) Terms of Use as well as any applicable terms from the platform the game is using. The simplest way to ensure this is to use our Unreal Engine or Unity plugins. These include acceptance dialog functionality that meets the required standards. 

Consent is important so users are aware a mod.io account is being created, inline with global privacy laws. It also allows mod.io to set out the Terms of Use of which all users must adhere to, or else their account and access to the service and content available might be revoked.

## Frequency of application

It is a requirement of the [Game Terms](https://mod.io/gameterms) with mod.io, and the platforms mod.io is used on (including but not limited to Steam, PlayStation, Nintendo and Xbox), that users agree to the latest mod.io [Terms of Use](https://mod.io/terms) and [Privacy Policy](https://mod.io/privacy). You only need to collect the users agreement once, and also each time the terms are updated.

## What are the terms?

|    | **Summary** |
|----|-------------|
| **Game Terms** | Applicable only to game studios and publishers using mod.io: https://mod.io/gameterms |
| **Terms of Use** | Applicable to all end users using mod.io: https://mod.io/terms |
| **Privacy Policy** | Applicable to all end users using mod.io: https://mod.io/privacy |
| **Acceptable Use Policy** | Applicable to all end users using mod.io: https://mod.io/aup |
| **Monetization Terms** | Applicable to all game studios, publishers, creators and end users transacting on mod.io: https://mod.io/monetization |

## Platform SSO standard

In addition to following our consent and acceptance process, mod.io also follows the standards set by the SSO provider used to authenticate the player. Example being; a user who is playing a game on Xbox, is signed in with their Xbox ID, which is connected to their mod.io account. During the authentication process with Xbox, mod.io checks the users parental controls and age gate requirements, and processes or denies their authentication accordingly. It is highly recommended you use the applicable Platform SSO standard when authenticating players with mod.io (or your SSO system as explained below), to ensure a seamless and compliant implementation. If you're not using the Platform SSO standard, your implementation will need to ensure it enforces the requirements set by the platform to pass certification.

:::tip 
If you have your own accounts system, mod.io can be set up to use it as the SSO provider, to ensure all users follow any parental controls and age gate requirements you have. This will also connect their mod.io account to your backend, which improves reporting, and means any accounts you block, will also be blocked from engaging with your games on mod.io.
:::

## User Flow

Here is how the user consent and acceptance flow should work:
1. User attempts an action requiring authentication (i.e. subscribe to mod).
2. User is presented with an acceptance dialog (required once).
3. On acceptance, proceed with your chosen authentication method, and ensure you indicate to the mod.io backend that the user has provided consent (using the authentication endpoint `terms_agreed` field).
4. On rejection, exit the authentication process, and do not attempt to authenticate the user.

### Example

This example flow is how the consent process is presented in the mod.io Unity and Unreal Engine in-game UIs.

## Implementation

If you are using the official mod.io [Unity](/unity/), [Unreal](/unreal/) or [C++ SDK](/cppsdk/), the acceptance dialog functionality is built into those plugins, and should be utilized. Please check those plugins documentation for details using their implementation.

If you are building the acceptance and consent process yourself, you should implement the steps detailed above, paired with a dialog and authentication process following the instructions detailed below.

:::tip
If your game does not authenticate users or only uses the email authentication flow, you do not need to implement this dialog, but you should link to the mod.io Terms of Use and Privacy Policy in your Privacy Policy/EULA.
:::

### Dialog

The implemented dialog should look similar to this:

![Terms Dialog](images/terms.png)

Instructions for retrieving localized text for the dialog, [can be found here](https://docs.mod.io/restapiref/#terms).

The Terms of Use and Privacy Policy must be clickable from somewhere on the dialog, and should load a web browser with the respective links:
* https://mod.io/terms/widget?no_links=true
* https://mod.io/privacy/widget?no_links=true

:::tip
**Note:** The **/widget** part of the URL is optional and removes all menus and the **?no_links=true** part of the URL is optional and removes all links.
:::

### Authentication

Once a user has clicked **“I Agree”**, you should indicate to the mod.io backend that this has taken place, when you initiate the authentication process.

To make this easy to manage, all of the [platform authentication flows](https://docs.mod.io/restapiref/#steam) supported by mod.io have a `terms_agreed` field which should be set to `false` by default. If the user has agreed to the latest policies, their authentication will proceed as normal, however if their agreement is required and `terms_agreed` is set to `false` an error `403 Forbidden` (`error_ref 11074`) will be returned. When you receive this error, you must collect the users agreement before resubmitting the authentication flow with `terms_agreed` set to `true`, which will be recorded.

## Considerations

You are able to change when, where, and how you present the acceptance dialog (for example same games require acceptance every time a player clicks into the mod menu). If you do make changes to the flow above, be aware that you are responsible for ensuring that the users agreement is properly collected and reported. Failure to do so correctly is a breach of the [mod.io Game Terms](https://mod.io/gameterms). If you have any questions or want mod.io to review your implementation, please [contact us](mailto:developers@mod.io).

:::tip
If you have your own UGC EULA or terms, you can use your discretion as to when you incorporate them.
:::