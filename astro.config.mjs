import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

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
      cssCodeSplit: false
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: false
    },
  },
  integrations: [mdx()]
});