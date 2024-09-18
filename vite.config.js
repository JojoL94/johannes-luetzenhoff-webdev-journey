import {defineConfig} from "vite";

export default defineConfig({
    base: 'basic-webdev-setup/',
    root: "src",
    assetsInclude: ["./assets/**/*.*"],
    build: {
        emptyOutDir: true,
        outDir: "../dist"
    }
})