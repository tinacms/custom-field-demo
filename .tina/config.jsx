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
        format: "mdx",
        fields: [
          {
            type: "string",
            label: "Button Text",
            name: "buttonText",
          },
          {
            type: "number",
            label: "Confetti Volume",
            name: "confettiVolume",
            ui: {
              component: (props) => {
                return (
                  <div className="flex flex-col">
                    <label
                      className="font-bold text-sm"
                      htmlFor={props.input.name}
                    >
                      {props.field.name}
                    </label>

                    <input
                      className="my-4"
                      type="range"
                      id={props.input.name}
                      {...props.input}
                      min="0"
                      max="1000"
                    />
                  </div>
                );
              },
            },
          },
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            return undefined;
          },
        },
      },
    ],
  },
});
