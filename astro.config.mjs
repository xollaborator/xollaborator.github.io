import path from 'node:path'
import { fileURLToPath } from 'node:url'

import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import AstroPWA from '@vite-pwa/astro'
import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import icon from 'astro-icon'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'assets',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
  },

  integrations: [
    AstroPWA({
      base: '/',

      experimental: {
        directoryAndTrailingSlashHandler: true,
      },

      includeAssets: ['favicon.svg'],

      manifest: {
        icons: [
          {
            sizes: '64x64',
            src: 'pwa-64x64.png',
            type: 'image/png',
          },
          {
            sizes: '192x192',
            src: 'pwa-192x192.png',
            type: 'image/png',
          },
          {
            sizes: '512x512',
            src: 'pwa-512x512.png',
            type: 'image/png',
          },
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: 'maskable-icon-512x512.png',
            type: 'image/png',
          },
        ],

        name: "Xollaborator's Homepage",
        short_name: 'Xollaborator',
        theme_color: '#ffffff',
      },

      registerType: 'autoUpdate',
      scope: '/',

      workbox: {
        globPatterns: [
          '**/*.{css,js,html,svg,png,jpg,webp,ico,txt,xml,webmanifest}',
        ],

        navigateFallback: '/404',
      },
    }),

    icon(),
    mdx(),

    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),

    sitemap({
      filter: (page) => page !== 'https://xollaborator.github.io/message-sent',
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          pl: 'pl-PL',
        },
      },
    }),

    tailwind(),

    compress({
      Exclude: ['favicon.svg'],
    }),
  ],

  prefetch: {
    prefetchAll: true,
  },

  server: {
    port: 4444,
  },

  site: 'https://xollaborator.github.io',

  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
})
