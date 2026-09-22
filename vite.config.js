import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: 'src',
  base: './',
  publicDir: resolve(__dirname, '../public'),
  plugins: [tailwindcss()],
  build: {
    outDir: resolve(__dirname, '../dist'),
    emptyOutDir: true,
  },
});
