import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      // Pre-enforce plugin: transform JSX syntax in .js files before
      // Vite's import-analysis step (which rejects JSX in .js files).
      // Needed because .js is universally served as text/javascript,
      // while .jsx triggers application/octet-stream on non-Vite servers.
      name: 'treat-js-files-as-jsx',
      enforce: 'pre',
      async transform(code, id) {
        if (!/src\/[^?]*\.js(\?.*)?$/.test(id)) return null
        return transformWithEsbuild(code, id.replace(/\.js(\?|$)/, '.jsx$1'), {
          loader: 'jsx',
        })
      },
    },
    react(),
  ],
})
