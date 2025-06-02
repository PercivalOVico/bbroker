import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    //port: 8080,
    port: 5000,
    allowedHosts: [
      "474d1f33-d192-4591-b114-5ec94cabd890-00-1t9dcl01zdiyp.spock.replit.dev",
      "localhost",
      ".replit.dev",
    ],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean,
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));