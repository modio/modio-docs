---
id: cloud-cooking-overview
title: Overview
slug: /cloud-cooking
---

# Cloud Cooking

The mod.io Cloud Cooking service provides mod.io managed infrastructure that supports preparation of content for platforms that are only available under non-disclosure agreements, such as consoles.

:::note[Premium Feature]
Cloud Cooking is a premium feature. Please contact us at developers@mod.io for more information.
:::

## Functionality

Cloud Cooking provides the following functionality:

* **Managed infrastructure:** mod.io manages the Cloud Cooking server and build agents on your behalf.
* **Status updates:** Content creators are given realtime reports on the progress of their content being prepared.
* **Logging & metrics:** Logs and cook metrics are reported for every cook job, for both content creators and game admins.
* **On-premise deployment option:** If you already have your own infrastructure, Cloud Cooking can be deployed and managed on your own infrastructure.
* **Integration with mod.io tooling:** Cooked content goes through the standard moderation flow for platforms.
* **Isolated deployments:** Your studio's deployment is isolated from all other tenants, and secured under mod.io's security practices.

## Shared Responsibility (ISO 27017 / 27001 Framework Compliance)

The mod.io **Cloud Cooking** service operates under a **shared responsibility model** in line with **ISO/IEC 27001:2022** (including Annex A control 5.23 on information security for cloud services) and **ISO/IEC 27017:2015** (code of practice for cloud security controls). This model clearly defines security obligations to protect information assets, prevent gaps, and ensure secure use of the service.

mod.io acts as the **Cloud Service Provider (CSP)** and is responsible for:

* Provision of secure, highly available, and resilient infrastructure (in partnership with selected cloud vendor(s)).
* Support, maintenance, and ongoing improvement of the Cloud Cooking tooling, including fault resolution, defect fixes, and service enhancements.
* Implementation of baseline security measures for user-generated content (UGC) processed ("cooked") by the service, including rudimentary anti-malware scanning of submitted files.
* Ensuring isolated, multi-tenant-secure deployments in accordance with mod.io's security practices.

As a **Cloud Cooking customer**, your responsibilities are:

* Ensuring your game engine, build tools, and associated tooling are free from known vulnerabilities and maintained at stable, up-to-date versions not susceptible to exploits.
* Complying with all third-party licensing requirements for plugins, SDKs, or tools bundled in your uploads.
* Guaranteeing that any tooling or files uploaded to mod.io are free from malware, viruses, malicious code, or unauthorized network utilities (e.g. VPNs, tunneling, remote access tools, or command and control mechanisms) that could compromise the Cloud Cooking environment or grant unauthorized privileged access.
* Securely managing your own access credentials, API keys, and any sensitive data included in uploads or configurations.

This division of responsibilities helps maintain the confidentiality, integrity, and availability of processed content and the overall service. Customers should promptly report any suspected security incidents or anomalies to mod.io support.

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

