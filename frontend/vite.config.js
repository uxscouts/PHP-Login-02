export default defineConfig({
  plugins: [react()],
  server: {
   // host: '0.0.0.0', 
    host: true,
    //port: 3000,
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 443, // Routes hot reload traffic through HTTPS proxy
    },
    watch: {
      usePolling: true, // Forces file watching to work inside the container
    },
  },
})