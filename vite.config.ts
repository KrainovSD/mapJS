/* eslint-disable import/no-extraneous-dependencies */
import path from "node:path";
import { defineConfig } from "vite";

const PORT = 3000;
const STATIC_MAP_SERVICE = "http://map-static-service.streaming-platform.aps";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,
  },
  server: {
    port: PORT,
    proxy: {
      "/static": {
        target: STATIC_MAP_SERVICE,
        changeOrigin: true,
      },
    },
  },
});
