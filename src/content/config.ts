import { defineCollection, z } from "astro:content";

const demoCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
  }),
});

export const collections = {
  demos: demoCollection,
};
