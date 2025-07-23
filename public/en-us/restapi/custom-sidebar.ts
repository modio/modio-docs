/**
 * Custom Rest API sidebar
 *
 * These items will be appended to the top of the sidebar when running
 * the command 'npm run modify-restapi-docs'. They are not accessed directly.
 */
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  extrasidebar: [
    {
      type: "category",
      label: "Getting Started",
      items: [
        {
          type: "doc",
          id: "restapi/restapi-getting-started",
          label: "Introduction",
        },
        {
          type: "doc",
          id: "restapi/filtering",
          label: "Filtering",
        },
        {
          type: "doc",
          id: "restapi/sorting",
          label: "Sorting",
        },
        {
          type: "doc",
          id: "restapi/platforms",
          label: "Platforms",
        },
        {
          type: "doc",
          id: "restapi/pagination",
          label: "Pagination",
        },
        {
          type: "doc",
          id: "restapi/status-and-visibility",
          label: "Status & Visibility",
        },
        {
          type: "doc",
          id: "restapi/localization",
          label: "Localization",
        },
        {
          type: "doc",
          id: "restapi/rate-limiting",
          label: "Rate Limiting",
        },
        {
          type: "doc",
          id: "restapi/restapi-errors",
          label: "Errors",
        },
      ],
    },
  ],
};

export default sidebar.extrasidebar;
