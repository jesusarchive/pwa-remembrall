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
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
        type: "module",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.example\.com\//,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
            },
          },
        ],
      },
      includeAssets: ["**/*"],
      manifest: {
        name: "PWA Remembrall",
        short_name: "Remembrall",
        description: "Memory card game",
        theme_color: "#ffffff",
        icons: [
          {
            src: "path/to/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "path/to/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        scope: "/",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
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
  build: {
    rollupOptions: {
      external: ["workbox-window"],
    },
  },
});
