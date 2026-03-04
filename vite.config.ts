import { defineConfig } from 'vite';

export default defineConfig({
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
    open: true,
    allowedHosts: [
      'sackend.isi.edu',
    ]
  },
});
