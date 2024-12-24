// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api/": "http://localhost:3000",
//       "/uploads/": "http://localhost:3000",
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Explicitly set the output directory to 'dist'
  },
  server: {
    proxy: {
      "/api/": "http://localhost:3000",
      "/uploads/": "http://localhost:3000",
    },
  },
});
