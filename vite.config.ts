import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base: './'` makes every asset path relative, so the same build works on
// https://<user>.github.io/ (a user site) and https://<user>.github.io/<repo>/ (a project site).
export default defineConfig({
  plugins: [react()],
  base: './',
});
