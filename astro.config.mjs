import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import rehypeRaw from "rehype-raw";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
  integrations: [mdx(), tailwind()],
  markdown: {
    rehypePlugins: [
      rehypeRaw,
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          content: {
            type: "text",
            value: " ↗",
          },
        },
      ],
    ],
  },
});
