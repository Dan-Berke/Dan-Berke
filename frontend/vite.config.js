export default defineConfig({
  base: '/Dan-Berke/',     // ← exact repo name, case-sensitive
  build: { outDir: '../docs', emptyOutDir: true },
  plugins: [react()]
});
