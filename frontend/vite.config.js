import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // <-- Imported to fix the plugin error

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000, 
    strictPort: true,
    hmr: {
      clientPort: 443, 
    },
    watch: {
      usePolling: true, 
    },
    // 👇 ADD THIS PROXY BLOCK HERE 👇
    proxy: {
      '/api': {
        target: 'http://backend:8000', // Docker's internal container address
        changeOrigin: true,
        secure: false,
      }
    }
  },
})

/*
    proxy: {
      // Any request starting with /api will be routed to your PHP container
      '/api': {
        target: 'http://localhost:8000', // Change 8000 to your PHP container's internal port
        changeOrigin: true,
        secure: false,
      }
    }
*/