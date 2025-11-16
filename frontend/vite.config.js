import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Use relative paths so Apache can serve from any directory
  base: '/cws/',

  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5050'
    }
  }
});
