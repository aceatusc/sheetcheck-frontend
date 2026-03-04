import { defineConfig } from 'vite';

export default defineConfig({
  base: '/sheetcheck/frontend/', // Required for Nginx sub-path routing
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
  },
  resolve: {
    alias: [{ find: /^~(.*)$/, replacement: '$1' }],
  },
  server: {
    host: true, // Listens on all addresses
    port: 5173,
    allowedHosts: [
      'sackend.isi.edu',
    ],
  },
});