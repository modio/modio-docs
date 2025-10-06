---
id: console-sdks
title: SDK Access
slug: /platforms/console-sdks
sidebar_position: 1
---

# SDK Access

mod.io streamlines the ability to manage your game's UGC across multiple platforms, yet some platforms require approval before you can get started. This is the case with most consoles, and this guide will take you through the process for each console.

This guide will go through:

* [Console SDKs](#console-sdks)
* [Gaining platform approval](#gaining-platform-approval)

## Console SDKs

For studios that have gained [platform approval](#gaining-platform-approval) by signing the appropriate NDA, we offer console modules for each SDK and accompanying documentation:  

:::note
These links will only work for studios who we have verified as being under the applicable NDA.

* [PlayStation®4 / PlayStation®5](/platforms/playstation#sdk-access)
* [Xbox](/platforms/gdk#sdk-access)
* [Nintendo Switch](/platforms/switch#sdk-access)

If you believe you are, but cannot access the documentation, please [<u>contact us</u>](mailto:developers@mod.io).
:::

* [PlayStation®4](https://docs.mod.io/partners/ps4/)
* [PlayStation®5](https://docs.mod.io/partners/ps5/)
* [Xbox One/Series X GDK](https://docs.mod.io/partners/xbox/)
* [Nintendo Switch/2](https://docs.mod.io/partners/switch/)

## Gaining platform approval

Before embarking on your UGC support journey with any new platform, your first step should be to speak to your account manager and let them know you intend on supporting UGC using mod.io. This allows you to begin the process of understanding what rules exist and information they require from you in order for your plans to pass certification.

### We can help connect you

If you need an introduction to our account managers who understand mod.io and UGC, let us know and we will connect you with:

* Sony Interactive Entertainment: Global Technology Partnerships
* Microsoft Xbox: Developer Partner Manager
* Nintendo Switch: Developer Relations

### The approval process

The process we recommend to bring UGC to console games is as follows:

1. Contact your platform account manager and draft a document which explains how UGC will function in your game, and answers any questions they raise. We can help with the preparation and review of this document. Key sections your platform account manager will want to see addressed include:

    * Storage systems and space required
    * Your moderation and reporting process
    * How UGC is created (in-game or via 3rd party editing tools)
    * How players engage with UGC (in-game and by subscribing via your UGC Hub website)
    * How content delivery happens (using mod.io secured APIs)
    * Type of UGC being shared (levels, skins, configs)
    * Does the UGC execute scripts
    * UGC monetization plans

2. Notify mod.io of your intent, so we can verify with the platforms, and release our private console documentation and SDKs to your developers. Note: we highly recommend using our Unity, Unreal or C++ SDK for your game integration, but you can also go direct to our REST API, and refer to our private console documentation for all of the requirements and best practice recommendations we've implemented, to ensure certification is a straightforward process.

3. Begin work on your implementation, which should follow your documentation, and adhere to each platform's requirements, which typically are:

    * No scripts, or approved / sandboxed scripts only
    * No network, filesystem access, or approved / sandboxed access only
    * UGC should be stored in an appropriate location and not mixed or overwriting game files
    * If UGC has the potential to crash your game, users must be able to disable it on launch (or ideally only initialize UGC when playing with them)
    * You must have a way for users to report UGC, and a process for reported UGC to be taken down (we solve this)
    * Consoles have limited filespace. Expect to be working with a limited storage allocation for UGC installation (our plugins make it easy to manage this allocation)
    * Users with parental controls that disable UGC cannot have access to UGC
    * Users' consent must be collected prior to providing access to UGC
    * If you know the users platform display name, you must show it alongside their content (we solve this)

The overall complexity is quite low once you’ve got your game loading and running custom content. Ideally complete your UGC implementation on PC first, before expanding your implementation to other platforms with all of the above in place, to ensure certification is streamlined and efficient.