import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      platform: 'node', // forces pure JS deps
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code === 'MODULE_NOT_FOUND' &&
          /@rollup\/rollup-linux/.test(warning.message)
        ) {
          return; // ignore Rollup native binary warnings
        }
        warn(warning);
      },
    },
  },
  server: {
    host: true, // expose dev server in Docker
  },
});
