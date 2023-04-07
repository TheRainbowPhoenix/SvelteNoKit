import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

/*
// Invalid options in svelte config. Move the following options into 'vitePlugin:{...}': emitCss, prebundleSvelteLibraries
  emitCss: true,
  prebundleSvelteLibraries: true,
*/

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: '../dist',
    lib: {
      entry: './src/main.ts',
      formats: ['es'],
      fileName: (format, entry) => `${entry}${format == 'es' ? '' : '.' + format}.js`,
    },
    sourcemap: true
  }
})
