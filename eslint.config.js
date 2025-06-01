import eslintPluginAstro from "eslint-plugin-astro";
import unocss from "@unocss/eslint-config/flat";
import prettier from "eslint-config-prettier/flat/recommended"

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
  unocss,
  prettier,
]
