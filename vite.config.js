import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'jsx-mime-type',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && /\.(jsx|tsx)(\?.*)?$/.test(req.url)) {
            res.setHeader('Content-Type', 'text/javascript; charset=utf-8')
          }
          next()
        })
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && /\.(jsx|tsx)(\?.*)?$/.test(req.url)) {
            res.setHeader('Content-Type', 'text/javascript; charset=utf-8')
          }
          next()
        })
      },
    },
  ],
})
