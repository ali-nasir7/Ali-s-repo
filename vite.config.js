import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use relative base so the build works on GoDaddy when uploaded
// to either the domain root OR a subfolder.
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
