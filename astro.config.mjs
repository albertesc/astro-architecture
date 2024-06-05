import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import path from 'path';

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
    assets: 'assets',
    assetsPrefix: {
      'css': '../',
      'fallback': '../'
    }
  },
  vite: {
    build: {
      minify: false,
      cssCodeSplit: false,
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          entryFileNames: chunk => {
            const dir = path.dirname(chunk.moduleIds[0]);
            const basename = path.basename(dir).toLocaleLowerCase();

            if(chunk.moduleIds[0].includes('/pages/')) return `${basename}/${basename}.js`;
            return `_components/${basename}/${basename}.js`;
          },
          assetFileNames: 'style.css',
        }
      }
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