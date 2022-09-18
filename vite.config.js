import {
    defineConfig
} from "vite";
import react from "@vitejs/plugin-react";
import fs from 'fs/promises'
import path from 'path'

const loadJSAsJSX = {
    name: 'load-js-files-as-jsx',
    setup(build) {
        build.onLoad({
                filter: /src\\.*\.js$/
            },
            async (args) => ({
                loader: 'jsx',
                contents: await fs.readFile(args.path, 'utf8'),
            })
        );
    },
}

export default defineConfig({
    plugins: [
        react()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname,'src')
        }
    },
    esbuild: {
        loader: 'jsx',
        include: /src\/.*\.jsx?$/,
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [loadJSAsJSX, ],
        },
    },
})