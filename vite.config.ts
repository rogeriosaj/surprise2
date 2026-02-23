import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/date_options/',
  server: {
    port: 5173,
    strictPort: true,
  }
})