import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import elmPlugin from 'vite-plugin-elm'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),elmPlugin()],
})
