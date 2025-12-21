import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Rakesh-portfolio/', // 👈 ADD THIS (must match your repo name exactly)
})
