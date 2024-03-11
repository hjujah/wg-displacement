import { defineConfig } from 'vite'
import glslify from 'rollup-plugin-glslify'
// import glsl from 'vite-plugin-glsl'

import * as path from 'path'

export default defineConfig({
  root: 'src',
  base: '/', // for Github pages, otherwise use './'
  build: {
    outDir: '../dist',
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  server: {
    host: true, // to test on other devices with IP address
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  plugins: [glslify()],
})
