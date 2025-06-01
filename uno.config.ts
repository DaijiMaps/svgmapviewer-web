import { defineConfig } from "unocss";

export default defineConfig({
  //
  rules: [
    [
      "my-10",
      {
        margin: "0 10",
      },
    ],
  ],
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
  },
})
