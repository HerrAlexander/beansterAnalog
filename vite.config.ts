/// <reference types="vitest" />

import {defineConfig} from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [analog({
    vite: {
      inlineStylesExtension: 'scss',
    },
    prerender: {
      routes: async () => [
        '/',
        '/about',
        '/blog',
        '/blog/posts/2022-12-27-my-first-post',
      ],
    }
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
