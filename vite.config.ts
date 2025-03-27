import path from 'path'
import { defineConfig, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from "rollup-plugin-visualizer"

const PROD = process.env.NODE_ENV === 'production'
const vendorLibs: { match: string[]; output: string }[] = [
  {
    match: ['vue'],
    output: 'vue',
  },
  {
    match: ['vue-i18n'],
    output: 'i18n',
  },
  {
    match: ['crypto-js'],
    output: 'crypto',
  },
];

const configManualChunk = (id: string) => {
  if (/[\\/]node_modules[\\/]/.test(id)) {
    const matchItem = vendorLibs.find((item) => {
      const reg = new RegExp(`[\\/]node_modules[\\/]_?(${item.match.join('|')})(.*)`, 'ig');
      return reg.test(id);
    });
    return matchItem ? matchItem.output : null;
  }
};
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: "visualizer.html",
      open: false
    }) as PluginOption,
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  esbuild: {
    drop: PROD ? ['console', 'debugger'] : []
  },
  build: {
    // cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: configManualChunk
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
})


