import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
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
    processor: unified({
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
    }),
  },
});
