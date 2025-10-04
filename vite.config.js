import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // Conditionally set the base path.
    // It will be '/dept-conf-site/' for production builds,
    // and '/' for local development.
    base: mode === "production" ? "/dept-conf-site/" : "/",
  };
});
