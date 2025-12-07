import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    port: 5173,
    open: true
  },
  optimizeDeps: {
    include: ['firebase/app', 'firebase/auth']
  },
  resolve: {
    mainFields: ['module', 'main']
  }
});
