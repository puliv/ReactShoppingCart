import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    proxy: {
    '/api': {
      target: 'https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/all',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
})
