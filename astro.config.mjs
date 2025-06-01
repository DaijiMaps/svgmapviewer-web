import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import rehypeRaw from "rehype-raw";
import rehypeExternalLinks from "rehype-external-links";
import UnoCSS from "unocss/astro";

export default defineConfig({
  integrations: [
    mdx(),
    UnoCSS({
      injectReset: true,
    }),
  ],
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
