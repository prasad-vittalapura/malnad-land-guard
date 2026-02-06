import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-public-html',
      apply: 'build',
      enforce: 'post',
      generateBundle() {
        try {
          mkdirSync('./dist', { recursive: true })
          copyFileSync('./public/googlea6278f1a555bdd34.html', './dist/googlea6278f1a555bdd34.html')
          console.log('✓ Google verification file copied to dist')
        } catch (error) {
          console.error('Failed to copy HTML file:', error)
        }
      }
    }
  ],
  base: './', // Ensures relative paths for assets so file:// works
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    copyPublicDir: true, // Ensure public folder is copied
  }
})
