import { glob } from "astro/loaders";import { defineCollection } from "astro:content";
import { z } from "zod";

const demoCollection = defineCollection({
  loader: glob({ base: "./src/content/demos", pattern: "**/*.mdx" }),
  schema: z.object({
    title: z.string(),
    mapId: z.string(),
    pubDate: z.date(),
  }),
});

const floormapCollection = defineCollection({
  loader: glob({ base: "./src/content/floormaps", pattern: "**/*.mdx" }),
  schema: z.object({
    title: z.string(),
    mapId: z.string(),
    pubDate: z.date(),
  }),
});

export const collections = {
  demos: demoCollection,
  floormaps: floormapCollection,
};
