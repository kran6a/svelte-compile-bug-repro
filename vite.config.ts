import type {RollupOptions} from "rollup";
import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';

const ROLLUP_OPTIONS = {
    output: {
        format: 'esm',
        preserveModules: false,
        entryFileNames: 'index.js',
        esModule: true
    },
} satisfies RollupOptions;

export default defineConfig({
    mode: 'development',
    build: {
        rollupOptions: ROLLUP_OPTIONS,
        lib: {
            formats: ['es'],
            entry: './Index.svelte'
        },
        target: 'esnext',
        emptyOutDir: true,
        outDir: './dist',
        minify: false,
    },
    plugins: [svelte()]
});