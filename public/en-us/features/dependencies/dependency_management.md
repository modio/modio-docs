---
id: dependency-management
title: Overview
slug: /dependency-management
---

# Dependency Management

Dependency Management creates a more streamlined experience for players. If UGC requires other content to function, this feature ensures players are automatically subscribed to these dependencies, as well as any recursive dependencies required. This avoids player frustration from subscribing to content that does not work because of hidden dependencies. 

## Dependency restrictions

Before allowing or disallowing dependencies, it is wise to understand the implications for UGC deletion and monetization:

* UGC can no longer be deleted when other content depends on it (unless this is overridden with the 'no restrictions' setting)
* UGC creators cannot choose to disallow dependencies when their content already has dependents 
* Games that allow dependencies with no restrictions cannot monetize 
* UGC that either allows dependencies, or depends on other content, cannot be monetized
* Monetized UGC cannot choose to allow dependencies or select other content on which to depend

## Supported engines/setup guides

Below is a list of the supported engines and the relevant setup guides. Dependency Management doesn't require any configuration within an engine itself. Simply head to the [Dependencies Configuration](/dependency-management/configuration) guide to get started.

| Engine    | Supported | Guide |
| -------- | ------- | ------- |
| [Unreal Engine](/unreal)  | Yes    | N/A   |
| [Unity](/unity) | Yes    | N/A   |
| [Custom Engine](/cppsdk)   | Yes    | N/A   |
