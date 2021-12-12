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
      target: 'http://172.18.12.13:8000/',
      changeOrigin: true
    }
  },
  build: {
    sourcemap: true,
    cssCodeSplit: true
  },
  server: {
    host:'172.16.200.85'
  }
})