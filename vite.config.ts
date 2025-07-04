import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-website/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    host: true,
    port: 5173,
  },
  build: {
    sourcemap: false,
    outDir: "dist",
    assetsDir: "assets",
  },
  assetsInclude: ["**/*.jpg", "**/*.jpeg", "**/*.png", "**/*.pdf"],
});
