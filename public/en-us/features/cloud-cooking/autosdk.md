---
id: cloud-cooking-autosdk
title: AutoSDK
slug: /cloud-cooking/autosdk
---

# Unreal Engine AutoSDK System

## What is AutoSDK?

**AutoSDK** is a system within Unreal Engine designed to automate the distribution and configuration of platform software development kits (SDKs).
Instead of requiring every developer and build machine to manually install and configure SDKs (like the Android NDK, Linux Toolchain, or console-specific toolchains) into specific system directories (e.g Program Files), AutoSDK allows these toolchains to be stored in a version-controlled repository. Unreal Engine then dynamically locates and uses them during the build process.
**Key Benefits:**

- **Consistency:** Ensures every team member and build node uses the exact same SDK version.
- **Portability:** Removes dependencies on static system paths.
- **Version Switching:** Allows different branches or projects to use different SDK versions seamlessly on the same machine.

## How It Works (High Level)

The system relies on a standardized folder structure and the **UnrealBuildTool (UBT)**.

1. **Detection:** When you initiate a build (e.g compile for Android or Windows), UBT checks for an environment variable called UE\_SDKS\_ROOT.
2. **Selection:** If found, UBT looks inside that directory for a folder matching the Host Platform (your current OS) and the Target Platform (the platform you are building for).
3. **Environment Injection:** Before the build starts, UBT executes temporary setup scripts such as `Setup.bat` and `Unsetup.bat` (or the `.sh` equivalents on Mac/Linux) located within that SDK's folder. These scripts inject the necessary environment variables (like PATH, INCLUDE, and LIB) into the current build process environment.
4. **Execution & Cleanup:** The build runs using these temporary paths. Once the build is complete, the environment variables are discarded, leaving the host machine's global environment clean.

### Directory Structure

The folder structure is strict so UBT can parse it automatically:

```
AutoSDK/
├── HostWin64/                  # The OS of the build machine
│   ├── Android/                # The platform you are building FOR
│   │   ├── -25b/               # The SDK version (folder name varies by platform; Android often mirrors NDK revisions)
│   │   └── -21/
│   ├── Linux/
│   └── Win64/
└── HostMac/
  └── IOS/
```

## General Usage Workflow

### 1. Repository Setup

Create a folder named AutoSDK (usually in the root of your project or engine depot, though it can live anywhere).

**Populate with Platform SDKs:** This is the most critical step. You must populate the folder with the SDK binaries required for your target platforms.
Note: Simply copying installed SDKs (e.g. from `C:\Program Files`) will **not** work, as they often rely on static registry keys.

The general workflow for setting these up is as follows:

- **Source:** Download the official SDK installer from the platform holder's website (e.g Sony DevNet, Microsoft GDK, Nintendo Developer Portal).
- **Extraction:** Run the platform-specific generation script to create the "portable" file structure.
  - For platform-specific commands and script locations, please refer to the `Engine\Platforms\PLATFORM\Extras\AutoSDK\HostWin64\PLATFORM\*` folder.
- **Placement:** Move the output into the correct AutoSDK path: `AutoSDK/Host[OS]/[Platform]/[Version]`.
- **Turnkey Configuration:** Update your project's `TurnkeyManifest.xml` (Located in MyProject/Extras/Turnkey/TurnkeyManifest.xml) to whitelist the new SDK version. This ensures the Unreal Turnkey system recognizes the new version as valid.

Commit this folder to Source Control.

### 2. Client Setup

- Sync the AutoSDK folder from source control.
- Set a system environment variable named UE\_SDKS\_ROOT pointing to that folder.
  - *Example:* UE\_SDKS\_ROOT=D:\\P4\\MyProject\\AutoSDK
- Restart the Unreal Editor or generate project files to refresh the environment detection.

### 3. Building

* No further action is required. When a user selects **Package Project** or builds via Visual Studio, Unreal Engine detects the SDK in UE\_SDKS\_ROOT and uses it automatically.

## Relevant Documentation

- **Official Documentation:** [Using the AutoSDK System](https://dev.epicgames.com/documentation/en-us/unreal-engine/using-the-autosdk-system-in-unreal-engine)
- **Related System:** [Unreal Turnkey](https://dev.epicgames.com/documentation/en-us/unreal-engine/automating-platform-and-sdk-management-with-unreal-turnkey) (A newer system that often works in tandem with or automates the population of AutoSDK).