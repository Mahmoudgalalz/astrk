import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import robotsTxt from 'astro-robots-txt';
// import VueSocialSharing from "vue-social-sharing";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
// import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://woke.build",
  // server: {port:8080},
  integrations: [svelte(), tailwind(), robotsTxt(), sitemap(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), mdx(), vue({ appEntrypoint: '/src/pages/_app' })],
  // output: "server",
  // adapter: netlify()
});