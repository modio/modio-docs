---
id: certification
title: Console Certification
slug: /certification/
sidebar_position: 1
---

# Console Certification
Passing the certification process to enable UGC on consoles largely consists of following requirements set by the platform owners. We recommend that you do this after you’ve already enabled UGC on PC to ensure you know how UGC will be offered in your game. 

## Contact your platform account manager
The first step is to send your platform account manager a document which explains how UGC will function in your game, and answers any questions they raise. This document should include: 

* storage systems and space required
* your moderation and reporting process
* how UGC is created (in-game or via 3rd party editing tools)
* how players engage with UGC (in-game and by subscribing via your mod hub website)
* how content delivery happens (using mod.io secured APIs)
* the type of UGC being shared (levels, skins, configs)
* whether the UGC execute scripts


## Typical requirements
Your account manager will provide you with the platform’s requirements. These typically include:

* no scripts, or approved / sandboxed scripts only
* no network, filesystem access, or approved / sandboxed access only
* UGC should be stored in an appropriate location and not be mixed with, or overwrite game files 
* if UGC has the potential to crash your game, users must be able to disable it on launch (or ideally, only initialize mods when playing with them)
* you must have a way for users to report mods, and a process for reported mods to be taken down
* allocate only a limited storage space for UGC installation users with parental controls that disable UGC cannot have access to UGC
* users must give consent before they access UGC
* if you know the user’s platform display name, you must show it alongside their content 

We built our Unreal Engine and Unity plugins with these requirements in mind, making certification easy to pass. Additionally, each platform has specific requirements. Note that some of this information is confidential and requires that you sign an NDA with the platform owner before we can provide access.
