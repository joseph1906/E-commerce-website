import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // <--- Import the 'path' module

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This tells Vite that '@/' maps to your 'src' directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
