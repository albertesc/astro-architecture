import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  scopedStyleStrategy: 'class',
  compressHTML: false,
  devToolbar: {
    enabled: false
  },
  build: {
    format: 'preserve',
    trailingSlash: 'never',
    inlineStylesheets: `never`,
    assets: 'css',
    assetsPrefix: {
      'css': '../',
      'fallback': '../'
    }
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
    }
  },
  integrations: [mdx(), icon({
    iconDir: "public/assets/icons",
  })]
});