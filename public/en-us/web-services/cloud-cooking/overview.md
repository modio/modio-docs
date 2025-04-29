---
id: overview
title: Overview
slug: /web-services/cloud-cooking/overview/
sidebar_position: 0
---

# Overview

The mod.io Cloud Cooking service provides mod.io managed infrastructure that supports preparation of content for platforms that are only available under non-disclosure agreements, such as consoles.

:::note
Cloud Cooking is a premium feature. If you are interested in mod.io premium features, please contact developers@mod.io.
:::

## Features

Cloud Cooking provides the following functionality:
* Managed Infrastructure: mod.io manages the cloud cooking server and build agents on your behalf.
* Status Updates: Content creators are given realtime reports on the progress of their content being prepared.
* Logging & Metrics: Logs and cook metrics are reported for every cook job, for both content creators and game admins.
* On-Premise Deployment Option: If you already have your own infrastructure, cloud cooking can be deployed and managed on your own infrastructure.
* Integration with mod.io tooling: Cooked content goes through the standard moderation flow for platforms.
* Isolated deployments: Your studio's deployment is isolated from all other tenants, and secured under mod.io's security practices.

## How it works

As part of the cloud cooking setup process, you provide mod.io with a copy of your tooling to cook content for each platform that you wish to support with cloud cooking. Once the infrastructure is provisioned, content creators can submit their Source mod files, either via the website or via our official plugins. At submission time, creators can choose which platforms they wish to cook their content for. These files are then queued to be processed by the cloud cooking service.

:::note
Cloud cooking is currently only supported on Windows build agents. You cannot currently use the mod.io cloud cooking service for macOS, iOS or Linux.
:::

### Supported Engines

| Engine    | Supported |
| -------- | ------- |
| Unreal Engine  | Yes    |
| Unity | Contact Us     |
| Custom Engine   | Contact Us    |

## Preparing Your Game & Editor

Before onboarding to cloud cooking, we recommend that you follow the steps to prepare your game and editor tooling. Each game engine that cloud cooking supports has a different set of requirements.

For Unreal Engine, follow [these intructions](/web-services/cloud-cooking/preparing-your-game-unreal) to set up your game.