// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️  make sure the repo name is correct and the import line above is intact
export default defineConfig({
  base: '/Dan-Berke/',            // ← exact repo name
  plugins: [react()],
  build: { outDir: '../docs', emptyOutDir: true }
})
