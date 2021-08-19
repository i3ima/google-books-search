import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from "vite-tsconfig-paths";
import istanbul from "rollup-plugin-istanbul";

require('dotenv').config()

if (!process.env.GOOGLE_API_KEY) throw Error('Not found google api key in your .env. Aborting')

// https://vitejs.dev/config/
export default defineConfig(({ }) => ({
 plugins: [reactRefresh(), tsconfigPaths(), istanbul({ include: ["src/**/*.tsx"] })],
 server: {
	fs: {
	 allow: ['..']
	},
	proxy: {
	 '/api': {
		target: 'https://www.googleapis.com/books/v1',
		changeOrigin: true,
		secure: true,
		rewrite: (path) => path.replace(/^\/api/, '') + `&key=${process.env.GOOGLE_API_KEY}`
	 },
	}
 }
}))
