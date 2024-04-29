import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  scopedStyleStrategy: 'class',
  compressHTML: false,
  devToolbar: {
    enabled: false
  },
  build: {
    format: 'file',
    inlineStylesheets: `never`,
    assets: 'css'
  },
  vite: {
    build: {
      minify: true,
      cssCodeSplit: false,
    }
  },
});