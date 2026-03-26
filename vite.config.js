import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),

    sitemap({
      hostname: "https://redwoods.prushal.com",

      dynamicRoutes: [
        "/about",
        "/contact",
        "/team",
        "/transaction",
        "/business",
        "/business/real-estate-advisory",
        "/business/renewable-energy",
        "/business/heritage-hospitality",
        "/real-estate/development",
        "/real-estate/advisory",
        "/renewable-energy/khodri-solar",
        "/renewable-energy/dadajalalpur-solar",
        "/renewable-energy/dhakrani-solar",
        "/heritage-hospitality/barsana-mahal",
        "/heritage-hospitality/shukla-talab",
        "/heritage-hospitality/pilibhit-house",
      ],
    }),
  ],

  server: {
    host: true,
    port: 5173,
  },
});