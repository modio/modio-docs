---
id: content-discovery-featured-content
title: Featured Content
slug: /content-discovery/featured-content
---

# Featured Content

Featured Content lets you configure groups of user-generated content (UGC) to highlight across your game's mod.io web page and supported in-game experiences. Configure filter blocks in your game admin settings, then use our SDK or Plugins to present the Featured Content in your game. Featured Content configurations are dynamic, so you can choose what content to highlight in-game from the mod.io website without needing to release an updated game build.

This page covers:

- [How it works](#how-it-works)
- [Configure your carousels](#configure-your-carousels)
- [Web and in-game presentation](#web-and-in-game-presentation)
- [Compatibility](#compatibility)

## How it works

Featured Content provides one shared configuration for highlighting UGC across web and in-game experiences. These are essentially regular Search Filters that can be customized for how your content is featured. On the mod.io website, these content groups are displayed as carousels. Each one defines a title, layout, result limit, filters and sort order. Where [Marketplace](/monetization/marketplace) is enabled, a carousel can also blend free and paid content.

In-game, you can present this however you want. The mod.io Template UI displays these content groups as a carousel. However, you are free to display them any way you like. For instance, you can use these as a Tab View with grids of content.

When you save your configuration:

- The mod.io website uses it to build the Featured page for your game.
- Supported engine plugins can consume it so you can surface the same content in your in-game UGC browser.
- Your in-game presentation isn't tied to a single layout — see [Web and in-game presentation](#web-and-in-game-presentation) for how this varies by plugin and UI implementation.

Changes are managed from your game admin settings, giving your team one place to update promoted content without requiring a website change. How and when an updated configuration appears in-game depends on your plugin version, implementation and caching strategy.

## Configure your carousels

Use carousels to group content around a discovery goal, such as Trending, Recently Added, Top Rated or seasonal content.

For each carousel, configure the available options for:

- **Name:** The heading shown to players.
- **Layout:** The visual size or treatment used wherever the carousel is shown.
- **Results:** The maximum number of UGC items to return.
- **Filters:** Narrow results using supported search criteria, such as tags or categories.
- **Sort order:** Choose how matching content is ranked.
- **Free and paid content:** Where [Marketplace](/monetization/marketplace) is enabled, control how premium UGC is blended with free results.

Your web Featured page applies mod.io's supported web layouts. In-game, your team can map the configuration to the layouts and components that best suit your game.

## Web and in-game presentation

Your configuration decides what content groups are available, but how they actually look is up to whichever plugin or UI is showing them:

- **Web app:** Carousels are displayed on the game's Featured page using the supported web layouts. The Featured page can be disabled, making the UGC browse page the game's web landing page. This does not affect the ability to access or use the configured filters in-game.
- **In-game Template UI:** Presents each content group as a carousel.
- **In-game Component UI or custom UI:** No need to stick with carousels here — your team can present content groups however you like (tabbed grid views, for example), as long as the configured filters and ordering carry through.

## Compatibility

The below table showcases engine and SDK support for Featured Content:

| Engine                   | Supported   | Documentation                                                 |
|--------------------------|-------------|----------------------------------------------------------------|
| [Unreal Engine](/unreal) | Coming soon | WIP                                                            |
| [Unity](/unity)          | Coming soon | WIP                                                            |
| [C++ SDK](/cppsdk)       | Yes         | [Featuring Content](/cppsdk/searching-ugc#featuring-content)   |



## Next steps

1. Open your game admin settings and select **Featured Content**.
2. Create or update the carousels you want to show on the web Featured page.
3. Share the relevant engine guide above with your development team to implement the configuration in-game.
4. Preview and test everywhere it'll show up before publishing changes.
