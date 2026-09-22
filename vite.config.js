import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: 'src',
  base: './',
  publicDir: resolve(import.meta.dirname, 'public'),
  plugins: [tailwindcss()],
  build: {
    outDir: resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
  },
});
