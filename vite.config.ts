import {defineConfig} from "vite";
import {VitePWA} from "vite-plugin-pwa";
import React from "@vitejs/plugin-react-swc";
import CommonJS from "vite-plugin-commonjs";
import Legacy from "@vitejs/plugin-legacy";
import TSConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        React(),
        CommonJS(),
        VitePWA({
            registerType: "autoUpdate",
            workbox: {
                cleanupOutdatedCaches: true,
            },
        }),
        TSConfigPaths(),
        Legacy({targets: ["cover 95%"]}),
    ],
});
