import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    mode: 'development',
    build: {
        rollupOptions: {
            output: {
                format: 'esm',
                preserveModules: false,
                entryFileNames: 'entry.js',
                esModule: true
            },
        },
        lib: {
            formats: ['es'],
            entry: './index.html'
        },
        target: 'esnext',
        emptyOutDir: false,
        outDir: './dist',
        minify: false,
    },
    server: {
        port: 3007
    },
    plugins: [svelte()]
});