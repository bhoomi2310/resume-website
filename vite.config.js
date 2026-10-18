import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'api-internal-middleware',
      configureServer(server) {
        // Fallback internal middleware if backend server is not running on 3001
        server.middlewares.use(async (req, res, next) => {
          if (req.url && req.url.startsWith('/api/')) {
            // Let the proxy try first; if proxy is not configured or bypassed, handle here
            const urlPath = req.url.split('?')[0];
            if (urlPath === '/api/health') {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ status: 'ok', source: 'vite-dev-middleware' }));
              return;
            }
          }
          next();
        });
      },
    },
  ],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
