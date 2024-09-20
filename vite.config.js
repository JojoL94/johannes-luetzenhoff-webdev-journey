import { defineConfig } from "vite";

export default defineConfig({
  base: "johannes-luetzenhoff-webdev-journey/",
  root: "",
  assetsInclude: ["./assets/**/*.*"],
  /*build: {
        emptyOutDir: true,
        outDir: "/dist"
    }*/
  "scss.validate": false,
  "stylelint.validate": ["css", "scss"],
});
