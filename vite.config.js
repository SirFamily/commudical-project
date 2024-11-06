// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA({
//       registerType: 'autoUpdate',
//       devOptions: {
//         enabled: true,
//       },
//       strategies: "generateSW",  // Changed to generateSW
//       srcDir: "src",
//       filename: "sw.js",  // Make sure this file doesn't conflict
//       manifest: {
//         name: "Smart Voice | ระบบสื่อสารสำหรับผู้ป่วย",
//         short_name: "Smart Voice",
//         theme_color: "#ffffff",
//         background_color: "#ffffff",
//         start_url: "/",
//         display: "standalone",
//         orientation: "portrait",
//         icons: [
//           {
//             "src": "pwa-64x64.png",
//             "sizes": "64x64",
//             "type": "image/png"
//           },
//           {
//             "src": "pwa-192x192.png",
//             "sizes": "192x192",
//             "type": "image/png"
//           },
//           {
//             "src": "pwa-512x512.png",
//             "sizes": "512x512",
//             "type": "image/png"
//           },
//           {
//             "src": "maskable-icon-512x512.png",
//             "sizes": "512x512",
//             "type": "image/png",
//             "purpose": "maskable"
//           }
//         ]
//       },
//     })
//   ],
// })







import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.js",
      injectManifest: {
        swDest: "dist/sw.js"
      },
      manifest: {
        name: "Smart Voice | ระบบสื่อสารสำหรับผู้ป่วย",
        short_name: "Smart Voice",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        orientation:"portrait",
        icons: [
          {
            "src": "pwa-64x64.png",
            "sizes": "64x64",
            "type": "image/png"
          },
          {
            "src": "pwa-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "pwa-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "maskable-icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ]
      },
    })
  ],
})
