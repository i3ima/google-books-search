import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from "vite-tsconfig-paths";

require('dotenv').config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  server: {
    fs: {
      allow: ['..']
    },
    proxy: {
      '/api': {
        target: 'https://www.googleapis.com/books/v1',
        changeOrigin: true,
        secure: true,
        ssl: process.env.MODE === 'production',
        rewrite: (path) => path.replace(/^\/api/, '') + `&key=${process.env.GOOGLE_API_KEY}`
      },
    }
  }
})
