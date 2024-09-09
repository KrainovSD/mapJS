/* eslint-disable import/no-extraneous-dependencies */
import path from "node:path";
import { defineConfig } from "vite";

const PORT = 3000;

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
  },
});
