import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  package: {
    source: "./src",
    dir: "../../../dist",
    files: (filepath) => {
      return !filepath.includes("__tests__");
    },
  },
  inspector: true
}
