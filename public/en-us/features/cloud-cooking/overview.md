---
id: cloud-cooking-overview
title: Overview
slug: /cloud-cooking
---

# Cloud Cooking

The mod.io Cloud Cooking service provides mod.io managed infrastructure that supports preparation of content for platforms that are only available under non-disclosure agreements, such as consoles.

:::note[Premium Feature]
Cloud Cooking is a premium feature. Sign up to one of our [advanced service tiers](https://mod.io/pricing) to activate it, or contact us at developers@mod.io for more information.
:::

## Functionality

Cloud Cooking provides the following functionality:

* **Managed infrastructure:** mod.io manages the Cloud Cooking server and build agents on your behalf.
* **Status updates:** Content creators are given realtime reports on the progress of their content being prepared.
* **Logging & metrics:** Logs and cook metrics are reported for every cook job, for both content creators and game admins.
* **On-premise deployment option:** If you already have your own infrastructure, Cloud Cooking can be deployed and managed on your own infrastructure.
* **Integration with mod.io tooling:** Cooked content goes through the standard moderation flow for platforms.
* **Isolated deployments:** Your studio's deployment is isolated from all other tenants, and secured under mod.io's security practices.

## How it works

As part of the Cloud Cooking setup process, you provide mod.io with a copy of your tooling to cook content for each platform that you wish to support with Cloud Cooking. Once the infrastructure is provisioned, content creators can submit their Source mod files, either via the website or via our official plugins. At submission time, creators can choose which platforms they wish to cook their content for. These files are then queued to be processed by the Cloud Cooking service. 

For more, have a look at our [Architecture](/cloud-cooking/architecture) chart.

:::note
Cloud Cooking is currently only supported on Windows build agents. You cannot currently use the mod.io Cloud Cooking service for macOS, iOS or Linux.
:::

## Supported engines/setup guides

Below is a list of the supported engines and the relevant setup guides. We recommend actioning the correct engine guide in order to properly prepare your game before heading across to the [Cloud Cooking Configuration](/cloud-cooking/configuration) guide.

| Engine    | Supported | Guide |
| -------- | ------- | ------- |
| [Unreal Engine](/unreal)  | Yes    | [Setup Guide](/unreal/cloud-cooking)    |
| [Unity](/unity) | [Contact Us](mailto:developers@mod.io)     | In Progress   |
| [Custom Engine](/cppsdk)   | [Contact Us](mailto:developers@mod.io)    | In Progress   |

