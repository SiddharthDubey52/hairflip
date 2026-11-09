import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works on Netlify, S3, or a GitHub Pages subpath.
export default defineConfig({
  base: './',
  plugins: [react()],
});
