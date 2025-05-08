// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  // command === 'serve'  →  dev server
  base: command === 'serve' ? '/' : '/Dan-Berke/',

  plugins: [react()],
  build: { outDir: '../docs', emptyOutDir: true },
}));
