import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs"; // 1. Importe o 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 2. Remova o basicSsl() daqui (se ele estiver)
  ],

  server: {
    host: "0.0.0.0",
    port: 8080,
    open: true,
    // 3. Configure o HTTPS para usar os arquivos do mkcert
    https: {
      key: fs.readFileSync(path.resolve(__dirname, './.certs/key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, './.certs/cert.pem')),
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});