import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // ➊ Replace <REPO> with the repository name
  base: '/Dan-Berke/',

  // ➋ Kick the build output one level up so it lives at repo-root/docs
  build: {
    outDir: '../docs',
    emptyOutDir: true          // cleans the old docs/ on each build
  }
})
