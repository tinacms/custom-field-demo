import { defineStaticConfig } from "tinacms";

export default defineStaticConfig({
  clientId: null,
  branch: null,
  token: null,
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [
      {
        label: "Page Content",
        name: "page",
        path: "content/page",
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
          },
        ],
        ui: {
          router: () => {
            return `/`;
          },
        },
      },
    ],
  },
});
