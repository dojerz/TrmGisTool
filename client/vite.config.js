import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
    plugins: [vue({
        template: { transformAssetUrls }
    }),
        quasar({
            ssr: true,
        sassVariables: 'src/quasar-variables.sass'
    })],
    server: {
        port: 5000
    },
    build: {
        outDir: "../wwwroot/client",
        emptyOutDir: true
    }
})