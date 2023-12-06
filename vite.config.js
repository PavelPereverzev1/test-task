import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // baseUrl: '/test-task',
  plugins: [react()],
});
