import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    // The Alloy preview proxies to this server under its own hostname, so the
    // default host-header allowlist would reject those requests.
    allowedHosts: true,
    hmr: { clientPort: 8080 },
  },
});
