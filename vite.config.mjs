import { defineConfig } from 'vite'
import glslify from 'rollup-plugin-glslify'

import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  base: '/', // for Github pages, otherwise use './'
  build: {
    outDir: '../dist',
    // rollupOptions: {
    //   output: {
    //     entryFileNames: `assets/[name].js`,
    //     chunkFileNames: `assets/[name].js`,
    //     assetFileNames: `assets/[name].[ext]`,
    //   },
    // },
    // },

    // lib: {
    //   // Could also be a dictionary or array of multiple entry points
    //   entry: resolve(__dirname, 'main.js'),
    //   name: 'wg-displacement',
    //   // the proper extensions will be added
    //   fileName: 'wg-displacement',
    // },
  },

  server: {
    host: true, // to test on other devices with IP address
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },

  plugins: [glslify()],
})
