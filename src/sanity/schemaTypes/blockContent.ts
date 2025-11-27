import { defineType } from "sanity";

export default defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "Blockquote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        annotations: [
          {
            name: "link",
            title: "Link",
            type: "object",
            fields: [{ name: "href", type: "url", title: "URL" }],
          },
        ],
      },
    },
    {
      type: "image",
      options: { hotspot: true },
    },
  ],
});
