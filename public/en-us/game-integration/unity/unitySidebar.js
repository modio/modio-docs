
const unitySidebar = {
    type: 'category',
    label: 'Unity',
    items: [
        {
            type: 'doc',
            label: 'Overview',
            id: 'game-integration/unity/unity',
        },
        {
            type: 'category',
            label: 'Getting Started',
            items: [
                'game-integration/unity/getting-started/unity-installation',
                'game-integration/unity/getting-started/unity-initialization',
                'game-integration/unity/getting-started/unity-authentication',
                'game-integration/unity/getting-started/unity-adding-ugc',
                'game-integration/unity/getting-started/unity-searching-ugc',
                'game-integration/unity/getting-started/unity-subscribing',
                'game-integration/unity/getting-started/unity-ugc-best-practices',
            ]
        },
        {
            type: 'category',
            label: 'Feature Setup Guides',
            items: [
                'game-integration/unity/feature-guides/unity-feature-guides',
                'game-integration/unity/feature-guides/unity-component-ui',
                {
                    type: 'category',
                    label: 'Template UI',
                    items: [
                        'game-integration/unity/feature-guides/unity-template-ui/unity-tui-functionality',
                        'game-integration/unity/feature-guides/unity-template-ui/unity-tui-layouts',
                        'game-integration/unity/feature-guides/unity-template-ui/unity-tui-integration',
                    ]
                },
                {
                    type: 'category',
                    label: 'Monetization',
                    items: [
                        'game-integration/unity/feature-guides/unity-marketplace',
                        'game-integration/unity/feature-guides/unity-mobile-iap',
                    ]
                },
                'game-integration/unity/feature-guides/unity-metrics',
                'game-integration/unity/feature-guides/unity-tempmods',
            ]
        },
        {
            type: 'category',
            label: 'Unity Plugin API Reference',
            items: [
                'game-integration/unity/unity-cs-ref',
                'game-integration/unity/unity-unity-ref',
                'game-integration/unity/unity-builder-ref',
            ]
        },
        {
            type: 'category',
            label: 'Legacy Plugin',
            items: [
                'game-integration/unity/legacy/unity',
                'game-integration/unity/legacy/unity-setup',
                'game-integration/unity/legacy/unity-getting-started',
                'game-integration/unity/legacy/unity-marketplace',
                'game-integration/unity/legacy/unity-unityref',
            ]
        },
    ],
}

export default unitySidebar;