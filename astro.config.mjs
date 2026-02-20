// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import rehypeKatex from 'rehype-katex';


// https://astro.build/config
export default defineConfig({
  site: 'https://pranithchowdary.github.io',
  base: './',
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax, rehypeKatex],
  },
});

