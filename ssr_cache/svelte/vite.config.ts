import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    experimental: {
      dynamicCompileOptions: ({ filename, compileOptions }) => {
        // Dynamically set hydration per Svelte file
        if (/* compileWithHydratable(filename) && */ !compileOptions.hydratable) {
        return { hydratable: true };
      }
     }
    }
  })],
  build: {
    outDir: '../dist',
    lib: {
      name: "template",
      entry: './src/main.ts',
      formats: ['iife'],
      fileName: (format, entry) => `${entry}${format == 'iife' ? '' : '.' + format}.js`,
    },
    sourcemap: true
  }
})
