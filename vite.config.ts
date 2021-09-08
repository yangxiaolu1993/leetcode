import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
		alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      { find: '@s', replacement: resolve(__dirname, './src/assets/scss') },
      { find: '@c', replacement: resolve(__dirname, './src/components') }]
	},
  css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/assets/scss/variable.scss";@import "./src/assets/scss/mixin.scss";`
			}
		}
	},
  plugins: [vue()]
})
