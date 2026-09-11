import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    // Permite acceder al servidor de desarrollo a través de un túnel
    // (VS Code Dev Tunnels / port forwarding), que llega con un Host
    // distinto a "localhost" y que Vite bloquea por defecto.
    allowedHosts: ['.devtunnels.ms']
  }
})
