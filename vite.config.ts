import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      // cache all the imports
      workbox: {
        globPatterns: ["**/*"],
      },
      // cache all the static assets in the public folder
      includeAssets: ["**/*"],
      manifest: {
        scope: "/",
        start_url: "/",
      },
    }),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./src/test/setup.ts"],
    exclude: [...configDefaults.exclude],
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        "./postcss.config.js",
        "./tailwind.config.js",
        "**/**.d.ts",
        "src/main.tsx",
        "**/**.test.{ts,tsx}",
      ],
    },
  },
});
