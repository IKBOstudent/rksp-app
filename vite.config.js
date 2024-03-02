import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        modules: {
            generateScopedName: '[name]__[local]__[hash:8]',
            localsConvention: null,
        },
    },
    server: {
        host: true,
        port: 3001,
    },
});
