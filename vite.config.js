import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  // Use relative base to work across different hosting setups (e.g., GitHub Pages, Netlify)
  base: './',
})
