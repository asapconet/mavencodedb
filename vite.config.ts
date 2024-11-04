import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    plugins: [react()],
    build: {
      rollupOptions: {
        external: ["store/recoil/login"],
      },
    },
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        hooks: resolve(__dirname, "src", "hooks"),
        store: resolve(__dirname, "<rootdir>", "store"),
      },
    },
  };
});
