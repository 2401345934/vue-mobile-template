/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
// @ts-ignore
import stylePxToVw from './plugins/stylePxToVw'
import path from 'path'

function resolve(dir: string): string {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    stylePxToVw(), // 插件的引用顺序要注意 一定要放在第一位
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ]
})
