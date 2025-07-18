---
id: embed-hub-deployment
title: Deployment
slug: /embed-hub/deployment/
sidebar_position: 3
---

# Deployment

Deploying your Embed Hub is easy, just follow the steps below:

1. If your game is hidden or pending, the _'Visible when game is hidden'_ checkbox on the [Settings page](../settings/) must be checked, if your game is already live, go straight to step 2.
2. Ensure that the domain you are hosting your Embed Hub on is whitelisted in the _'Allowed origins'_ section of the [Settings page](../settings/#allowed-origins).
3. Go to the _'Embed code'_ tab, copy the source code and paste it into your own site's source code.
   a. If you completed this step before enabling the checkbox in step 1, or unpublished your game, return here to get the required `hash` parameter.
   b. If you want to load the embed hub in-game as your mod browser UI, instead copy the embed hub URL and load that directly in your web browser.
4. Deploy your site however you do normally and view your Embed Hub on the page.

## Script tag

The script tag in the source code is optional but recommended by mod.io. It provides various usability improvements for the Embed Hub.

Examples include functions that automatically resize the iframe when its contents change, positioning pop-ups in the center of the screen regardless of how much the user has scrolled, and setting a hash in the URL so users can navigate directly to specific pages.

## Communicating with the Embed Hub

Be sure to check out the [next topic](../communication/) to learn more about how your site can interact with the Embed Hub for a seamless user experience.
