// /*import react from '@vitejs/plugin-react';
// import path from "path";
// import { defineConfig } from 'vite';


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })
//   */



// import path from "path";
// import { fileURLToPath } from "url";
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // Simulate __dirname
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
      
//     },
//   },
  
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      
      "@": path.resolve("./src"),
    },
  },
});
