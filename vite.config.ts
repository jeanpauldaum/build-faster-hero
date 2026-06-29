import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from GitHub Pages project subpath: jeanpauldaum.github.io/build-faster-hero/
export default defineConfig({
  base: '/build-faster-hero/',
  plugins: [react()],
});
