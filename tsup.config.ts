import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/**/*.ts'],
    target: "esnext",
    format: ["cjs", "esm", "iife"],
    sourcemap: true,
    dts: true,
    tsconfig: "./tsconfig.json"
});