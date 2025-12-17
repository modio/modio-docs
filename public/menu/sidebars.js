import 'dotenv/config'
import restApiSidebar from './sidebar-restapi'
import unitySidebar from '../en-us/game-integration/unity/unitySidebar'

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const url = process.env.URL || 'http://localhost:3000'
const startStyle = `
  <div class="tw-flex tw-flex-row tw-items-center tw-w-full tw-px-8 tw-space-x-4 tw-font-bold tw-tracking-widest">
`
const endStyle = '</div>'
const startStylePush = `<div class="tw-mt-5" />${startStyle}`

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    // mod.io
    {
      type: 'html',
      value: `${startStylePush}OVERVIEW${endStyle}`,
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Welcome',
      id: 'modio/modio-welcome',
    },
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'modio/modio-starter',
    },
    {
      type: 'doc',
      label: 'Features',
      id: 'modio/modio-features',
    },
    'modio/modio-launch',
    'modio/terms/terms-guide',
    // Game Integration
    {
      type: 'html',
      value: `${startStylePush}GAME INTEGRATION${endStyle}`,
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Unreal',
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'game-integration/unreal/ue-overview',
        },
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'game-integration/unreal/getting-started/ue-installation',
            'game-integration/unreal/getting-started/ue-initialization',
            {
              type: 'category',
              label: 'Platform Installation',
              items: [
                'game-integration/unreal/getting-started/platform-installation/ue-android-configuration',
                'game-integration/unreal/getting-started/platform-installation/ue-meta-configuration',
              ],
            },
            'game-integration/unreal/getting-started/ue-plugin-structure',
            'game-integration/unreal/getting-started/ue-authentication',
            'game-integration/unreal/getting-started/ue-searching-ugc',
            'game-integration/unreal/getting-started/ue-subscribing',
            'game-integration/unreal/getting-started/ue-adding-ugc',
            'game-integration/unreal/getting-started/ue-ugc-best-practices',
          ],
        },
        {
          type: 'category',
          label: 'Feature Setup Guides',
          items: [
            'game-integration/unreal/feature-guides/ue-feature-guides',
            {
              type: 'category',
              label: 'Component UI',
              items: [
                'game-integration/unreal/component-ui/ue-principles',
                'game-integration/unreal/component-ui/ue-building-a-screen',
                'game-integration/unreal/component-ui/ue-substitute-components',
                'game-integration/unreal/component-ui/ue-custom-components',
                'game-integration/unreal/component-ui/ue-architecture',
                'game-integration/unreal/component-ui/ue-localization',
                'game-integration/unreal/component-ui/ue-helpers',
                'game-integration/unreal/component-ui/ue-enable-disable',
                'game-integration/unreal/component-ui/ue-gamepad-glyph-switching',
                'game-integration/ue-generated/ui/ue-ui-refdocs',
              ],
            },
            {
              type: 'category',
              label: 'Template UI',
              items: [
                'game-integration/unreal/template-ui/ue-tui-functionality',
                'game-integration/unreal/template-ui/ue-tui-layouts',
              ],
            },
            {
              type: 'category',
              label: 'ModioUGC',
              items: [
                'game-integration/unreal/ue-modio-ugc/overview',
                'game-integration/unreal/ue-modio-ugc/getting-started',
                'game-integration/ue-generated/ugc/modio-ugc-refdocs',
              ],
            },
            'game-integration/unreal/feature-guides/ue-marketplace',
            'game-integration/unreal/feature-guides/ue-temporary-mods',
            'game-integration/unreal/feature-guides/ue-metrics',
            'game-integration/unreal/feature-guides/ue-cloud-cooking',
          ],
        }, {
        type: 'category',
        label: 'Sample Project',
        link: {type: 'doc', id: 'game-integration/unreal/modio-action-rpg/overview'},
        items: [
          'game-integration/unreal/modio-action-rpg/getting-started',
          'game-integration/unreal/modio-action-rpg/modio-plugin-integration',
          'game-integration/unreal/modio-action-rpg/moddable-weapons',
          'game-integration/unreal/modio-action-rpg/troubleshooting',
        ],
    },
        'game-integration/ue-generated/core/ue-refdocs',
        'game-integration/unreal-legacy/ue4-quicklook',
      ],
    },
    unitySidebar,
    {
      type: 'category',
      label: 'C++ SDK',
      items: [
        'game-integration/cppsdk/index-sdk',
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'game-integration/cppsdk/getting-started/cpp-installation',
            'game-integration/cppsdk/getting-started/cpp-initialization',
            {
              type: 'category',
              label: 'Platform Installation',
              items: [
                {
                  type: 'category',
                  label: 'Windows',
                  items: [
                    'game-integration/cppsdk/win32/windows-getting-started',
                    'game-integration/cppsdk/win32/windows-cmake-integration',
                  ],
                },
                {
                  type: 'category',
                  label: 'Linux',
                  items: [
                    'game-integration/cppsdk/linux/linux-getting-started',
                    'game-integration/cppsdk/linux/linux-cmake-integration',
                  ],
                },
                {
                  type: 'category',
                  label: 'Mac',
                  items: [
                    'game-integration/cppsdk/macos/mac-getting-started',
                    'game-integration/cppsdk/macos/mac-cmake-integration',
                  ],
                },
                {
                  type: 'category',
                  label: 'iOS',
                  items: [
                    'game-integration/cppsdk/ios/ios-getting-started',
                    'game-integration/cppsdk/ios/ios-cmake-integration',
                  ],
                },
                {
                  type: 'category',
                  label: 'Android',
                  items: [
                    'game-integration/cppsdk/android/android-getting-started',
                    'game-integration/cppsdk/android/android-cmake-integration',
                  ],
                },
                {
                  type: 'category',
                  label: 'Meta Quest',
                  items: [
                    'game-integration/cppsdk/meta/meta-getting-started',
                    'game-integration/cppsdk/meta/meta-cmake-integration',
                  ],
                },
              ],
            },
            'game-integration/cppsdk/getting-started/cpp-structure',
            'game-integration/cppsdk/getting-started/cpp-authentication',
            'game-integration/cppsdk/getting-started/cpp-searching-ugc',
            'game-integration/cppsdk/getting-started/cpp-subscribing',
            'game-integration/cppsdk/getting-started/cpp-adding-ugc',
            'game-integration/cppsdk/getting-started/cpp-collections',
          ],
        },
        {
          type: 'category',
          label: 'Feature Setup Guides',
          items: [
            'game-integration/cppsdk/feature-guides/cpp-feature-list',
            'game-integration/cppsdk/feature-guides/cpp-marketplace',
            'game-integration/cppsdk/feature-guides/cpp-metrics',
            'game-integration/cppsdk/feature-guides/cpp-multiplayer',
            'game-integration/cppsdk/feature-guides/cpp-temporary-mods',
          ],
        },
        {
          type: 'doc',
          label: 'C++ SDK Reference',
          id: 'game-integration/cppsdk/refdocs',
        },
      ],
    },
    {
      type: 'category',
      label: 'REST API',
      items: [
        'game-integration/restapi/restapi-overview',
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'game-integration/restapi/getting-started/restapi-introduction',
            'game-integration/restapi/getting-started/restapi-filtering',
            'game-integration/restapi/getting-started/restapi-sorting',
            'game-integration/restapi/getting-started/restapi-platforms',
            'game-integration/restapi/getting-started/restapi-pagination',
            'game-integration/restapi/getting-started/restapi-status-and-visibility',
            'game-integration/restapi/getting-started/restapi-localization',
            'game-integration/restapi/getting-started/restapi-rate-limiting',
            'game-integration/restapi/getting-started/restapi-errors',
            'game-integration/restapi/getting-started/restapi-reports',
          ],
        },
        ...restApiSidebar,
        'game-integration/restapi/restapi-search',
        'game-integration/restapi/restapi-monetization',
      ],
    },
    // Platforms
    {
      type: 'html',
      value: `${startStylePush}PLATFORMS${endStyle}`,
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'PC',
      items: [
        'platforms/pc/pc',
        {
          type: 'category',
          label: 'Steam',
          items: [
            'platforms/pc/steam/authentication',
            'platforms/pc/steam/marketplace',
          ],
        },
        {
          type: 'category',
          label: 'Epic Games',
          items: ['platforms/pc/epic/authentication', 'platforms/pc/epic/marketplace'],
        },
        {
          type: 'category',
          label: 'GOG Galaxy',
          items: ['platforms/pc/gog/authentication'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Console',
      items: [
        'platforms/console/console',
        'platforms/console/console-sdks',
        'platforms/console/playstation',
        'platforms/console/gdk',
        'platforms/console/switch',
      ],
    },
    {
      type: 'category',
      label: 'VR',
      items: [
        'platforms/vr/vr',
        {
          type: 'category',
          label: 'Meta Quest',
          items: ['platforms/vr/meta/authentication', 'platforms/vr/meta/marketplace'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Mobile',
      items: [
        'platforms/mobile/mobile',
        {
          type: 'category',
          label: 'iOS',
          items: ['platforms/mobile/apple/authentication', 'platforms/mobile/apple/marketplace'],
        },
        {
          type: 'category',
          label: 'Android',
          items: ['platforms/mobile/google/authentication', 'platforms/mobile/google/marketplace'],
        },
      ],
    },
    // Game Management
    {
      type: 'html',
      value: `${startStylePush}FEATURES${endStyle}`,
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Authentication',
      items: [
        'features/authentication/authentication-overview',
        {
          type: 'category',
          label: 'For Users',
          items: [
            'features/authentication/authentication-openid',
            'features/authentication/authentication-website-studio-sso',
            'features/authentication/authentication-platform',
            'features/authentication/authentication-website-to-modio-sso',
            'features/authentication/authentication-device',
            'features/authentication/authentication-verification',
          ],
        },
        'features/authentication/authentication-s2s',
      ],
    },
    {
      type: 'category',
      label: 'Cloud Cooking',
      items: [
        'features/cloud-cooking/cloud-cooking-overview',
        'features/cloud-cooking/cloud-cooking-architecture',
        'features/cloud-cooking/cloud-cooking-configuration',
      ],
    },
    {
      type: 'category',
      label: 'Collections',
      items: [
        'features/collections/collections-overview',
        'features/collections/collections-configuration',
      ],
    },
    {
      type: 'category',
      label: 'Dependencies',
      items: [
        'features/dependencies/dependency-management',
        'features/dependencies/dependency-configuration',
      ],
    },
    {
      type: 'category',
      label: 'Discord',
      items: ['features/discord/discord', 'features/discord/discord-configuration'],
    },
    {
      type: 'category',
      label: 'Embed Hub',
      items: [
        'features/embed-hub/embed-hub-overview',
        'features/embed-hub/embed-hub-theme',
        'features/embed-hub/embed-hub-settings',
        'features/embed-hub/embed-hub-custom-css',
        'features/embed-hub/embed-hub-communication',
        'features/embed-hub/embed-hub-add-ugc',
        'features/embed-hub/embed-hub-deployment',
      ],
    },
    {
      type: 'category',
      label: 'In-Game UI',
      items: [
        'features/in-game-ui/in-game-ui-overview',
        'features/in-game-ui/in-game-ui-component',
        'features/in-game-ui/in-game-ui-template',
      ],
    },
    {
      type: 'category',
      label: 'Metrics',
      items: [
        {
          type: 'category',
          label: 'Dashboards',
          items: [
            'features/metrics/metrics-overview',
            'features/metrics/metrics-how-it-works',
            'features/metrics/dashboards/game-dashboard-data',
            'features/metrics/dashboards/ugc-dashboard-data',
            'features/metrics/dashboards/creator-dashboard-data',
          ],
        },
        'features/metrics/metrics-exporting',
      ],
    },
    {
      type: 'category',
      label: 'Moderation',
      items: [
        'features/moderation/moderation',
        'features/moderation/automated-scanning',
        {
          type: 'category',
          label: 'Rules Engine',
          items: [
            'features/moderation/rules-engine-overview',
            'features/moderation/rules-engine-configuration',
            'features/moderation/rules-engine-webhooks',
            'features/moderation/rules-engine-monitoring',
          ],
        },
        'features/moderation/manual-curation',
        'features/moderation/community-reports',
      ],
    },
    {
      type: 'category',
      label: 'Monetization',
      items: [
        'features/monetization/monetization',
        {
          type: 'category',
          label: 'Marketplace',
          items: [
            'features/monetization/marketplace/monetization-marketplace',
            'features/monetization/marketplace/monetization-how-it-works',
            'features/monetization/marketplace/monetization-enabling-monetization',
            'features/monetization/marketplace/monetization-onboarding',
            'features/monetization/marketplace/monetization-dashboard',
            'features/monetization/marketplace/monetization-approving-premium-ugc',
            'features/monetization/marketplace/monetization-marketplace-action',
          ],
        },
        'features/monetization/monetization-partner',
        {
          type: 'category',
          label: 'Purchase Servers',
          items: [
            'features/monetization/purchase-servers/monetization-purchase-servers',
            'features/monetization/purchase-servers/monetization-modio-as-purchase-server',
            'features/monetization/purchase-servers/monetization-studio-as-purchase-server',
          ],
        },
        {
          type: 'category',
          label: 'Payments',
          items: [
            'features/monetization/payments/monetization-invoices',
            'features/monetization/payments/monetization-earnings-payouts',
          ],
        },
        'features/monetization/monetization-payment-testing',
      ],
    },
    {
      type: 'category',
      label: 'Multiplayer',
      items: [
        'features/multiplayer/multiplayer',
        'features/multiplayer/dedicated-servers',
        'features/multiplayer/temp-mods',
      ],
    },
    // Support
    {
      type: 'html',
      value: `${startStylePush}SUPPORT${endStyle}`,
      defaultStyle: true,
    },
    {
      type: 'autogenerated',
      dirName: 'support',
    },
  ],
}

export default sidebars
