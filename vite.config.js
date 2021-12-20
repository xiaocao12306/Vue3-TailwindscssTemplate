import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  proxy: {
    '/': {
      // 后台地址
      target: 'http://172.16.84.201:8000/',
      changeOrigin: true
    }
  },
  build: {
    sourcemap: true,
    cssCodeSplit: true
  }
})