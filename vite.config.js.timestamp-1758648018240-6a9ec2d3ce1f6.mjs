// vite.config.js
import { defineConfig } from "file:///mnt/c/Users/Usuario/Documents/01.%20Formaci%C3%B3n%20Developer/03.%20Repositorios/repositorios-personales/inviteme/node_modules/vite/dist/node/index.js";
import injectHTML from "file:///mnt/c/Users/Usuario/Documents/01.%20Formaci%C3%B3n%20Developer/03.%20Repositorios/repositorios-personales/inviteme/node_modules/vite-plugin-html-inject/dist/index.mjs";
import { ViteImageOptimizer } from "file:///mnt/c/Users/Usuario/Documents/01.%20Formaci%C3%B3n%20Developer/03.%20Repositorios/repositorios-personales/inviteme/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import concat from "file:///mnt/c/Users/Usuario/Documents/01.%20Formaci%C3%B3n%20Developer/03.%20Repositorios/repositorios-personales/inviteme/node_modules/@vituum/vite-plugin-concat/index.js";
import FastGlob from "file:///mnt/c/Users/Usuario/Documents/01.%20Formaci%C3%B3n%20Developer/03.%20Repositorios/repositorios-personales/inviteme/node_modules/fast-glob/out/index.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
var __vite_injected_original_import_meta_url = "file:///mnt/c/Users/Usuario/Documents/01.%20Formaci%C3%B3n%20Developer/03.%20Repositorios/repositorios-personales/inviteme/vite.config.js";
var htmlFilesList = Object.fromEntries(
  FastGlob.sync("src/*.html").map((file) => [
    // This remove `src/` as well as the file extension from each
    // file, so e.g. src/nested/foo.js becomes nested/foo
    path.relative(
      "src",
      file.slice(0, file.length - path.extname(file).length)
    ),
    // This expands the relative paths to absolute paths, so e.g.
    // src/nested/foo becomes /project/src/nested/foo.js
    fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
  ])
);
var inputFilesList = {
  ...htmlFilesList,
  "main": "src/js/main.js"
};
var vite_config_default = defineConfig({
  base: "./",
  root: "src",
  publicDir: "../public",
  build: {
    minify: "esbuild",
    outDir: "../docs",
    sourcemap: "inline",
    emptyOutDir: true,
    rollupOptions: {
      input: inputFilesList,
      output: {
        sourcemap: true,
        entryFileNames: ({ name }) => {
          if (name === "main") {
            return "js/main.js";
          }
          return "[name].js";
        }
      }
    }
  },
  server: {
    open: "/index.html",
    watch: {
      usePolling: true
    }
  },
  plugins: [
    injectHTML(),
    ViteImageOptimizer({
      /* pass your config */
    }),
    concat({
      input: ["main.js"]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvVXN1YXJpby9Eb2N1bWVudHMvMDEuIEZvcm1hY2lcdTAwRjNuIERldmVsb3Blci8wMy4gUmVwb3NpdG9yaW9zL3JlcG9zaXRvcmlvcy1wZXJzb25hbGVzL2ludml0ZW1lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2MvVXNlcnMvVXN1YXJpby9Eb2N1bWVudHMvMDEuIEZvcm1hY2lcdTAwRjNuIERldmVsb3Blci8wMy4gUmVwb3NpdG9yaW9zL3JlcG9zaXRvcmlvcy1wZXJzb25hbGVzL2ludml0ZW1lL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvYy9Vc2Vycy9Vc3VhcmlvL0RvY3VtZW50cy8wMS4lMjBGb3JtYWNpJUMzJUIzbiUyMERldmVsb3Blci8wMy4lMjBSZXBvc2l0b3Jpb3MvcmVwb3NpdG9yaW9zLXBlcnNvbmFsZXMvaW52aXRlbWUvdml0ZS5jb25maWcuanNcIjsvLyB2aXRlLmNvbmZpZy5qc1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbi8vIGh0bWwgcGFydGFsc1xuaW1wb3J0IGluamVjdEhUTUwgZnJvbSBcInZpdGUtcGx1Z2luLWh0bWwtaW5qZWN0XCI7XG4vLyBvcHRpbWl6ZSBpbWFnZXNcbmltcG9ydCB7IFZpdGVJbWFnZU9wdGltaXplciB9IGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlLW9wdGltaXplcic7XG4vLyBDb25jYXRlbmF0ZSBKYXZhU2NyaXB0IGZpbGVzIChsaWtlIGZvcm1lciBTdGFydGVyIEtpdClcbmltcG9ydCBjb25jYXQgZnJvbSAnQHZpdHV1bS92aXRlLXBsdWdpbi1jb25jYXQnXG4vLyBDYWxjdWxhdGUgcGF0aHNcbmltcG9ydCBGYXN0R2xvYiBmcm9tICdmYXN0LWdsb2InXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcblxuLy8gR2V0IGFsbCBodG1sIGZpbGVzXG5jb25zdCBodG1sRmlsZXNMaXN0ID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICBGYXN0R2xvYi5zeW5jKCdzcmMvKi5odG1sJykubWFwKGZpbGUgPT4gW1xuICAgIC8vIFRoaXMgcmVtb3ZlIGBzcmMvYCBhcyB3ZWxsIGFzIHRoZSBmaWxlIGV4dGVuc2lvbiBmcm9tIGVhY2hcbiAgICAvLyBmaWxlLCBzbyBlLmcuIHNyYy9uZXN0ZWQvZm9vLmpzIGJlY29tZXMgbmVzdGVkL2Zvb1xuICAgIHBhdGgucmVsYXRpdmUoXG4gICAgICAnc3JjJyxcbiAgICAgIGZpbGUuc2xpY2UoMCwgZmlsZS5sZW5ndGggLSBwYXRoLmV4dG5hbWUoZmlsZSkubGVuZ3RoKVxuICAgICksXG4gICAgLy8gVGhpcyBleHBhbmRzIHRoZSByZWxhdGl2ZSBwYXRocyB0byBhYnNvbHV0ZSBwYXRocywgc28gZS5nLlxuICAgIC8vIHNyYy9uZXN0ZWQvZm9vIGJlY29tZXMgL3Byb2plY3Qvc3JjL25lc3RlZC9mb28uanNcbiAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoZmlsZSwgaW1wb3J0Lm1ldGEudXJsKSlcbiAgXSkpO1xuXG5jb25zdCBpbnB1dEZpbGVzTGlzdCA9IHtcbiAgLi4uaHRtbEZpbGVzTGlzdCxcbiAgJ21haW4nOiAnc3JjL2pzL21haW4uanMnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiBcIi4vXCIsXG4gIHJvb3Q6IFwic3JjXCIsXG4gIHB1YmxpY0RpcjogXCIuLi9wdWJsaWNcIixcbiAgYnVpbGQ6IHtcbiAgICBtaW5pZnk6IFwiZXNidWlsZFwiLFxuICAgIG91dERpcjogXCIuLi9kb2NzXCIsXG4gICAgc291cmNlbWFwOiBcImlubGluZVwiLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiBpbnB1dEZpbGVzTGlzdCxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAoe25hbWV9KSA9PiB7XG4gICAgICAgICAgaWYoIG5hbWUgPT09ICdtYWluJyApIHtcbiAgICAgICAgICAgIHJldHVybiAnanMvbWFpbi5qcyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgICAvLyByZWY6IGh0dHBzOi8vcm9sbHVwanMub3JnL2NvbmZpZ3VyYXRpb24tb3B0aW9ucy8jb3V0cHV0LWVudHJ5ZmlsZW5hbWVzXG4gICAgICAgICAgcmV0dXJuIFwiW25hbWVdLmpzXCI7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIG9wZW46IFwiL2luZGV4Lmh0bWxcIixcbiAgICB3YXRjaDoge1xuICAgICAgdXNlUG9sbGluZzogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIGluamVjdEhUTUwoKSxcbiAgICBWaXRlSW1hZ2VPcHRpbWl6ZXIoe1xuICAgICAgLyogcGFzcyB5b3VyIGNvbmZpZyAqL1xuICAgIH0pLFxuICAgIGNvbmNhdCh7XG4gICAgICBpbnB1dDogWydtYWluLmpzJ11cbiAgICB9KSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBRTdCLE9BQU8sZ0JBQWdCO0FBRXZCLFNBQVMsMEJBQTBCO0FBRW5DLE9BQU8sWUFBWTtBQUVuQixPQUFPLGNBQWM7QUFDckIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMscUJBQXFCO0FBWDBSLElBQU0sMkNBQTJDO0FBY3pXLElBQU0sZ0JBQWdCLE9BQU87QUFBQSxFQUMzQixTQUFTLEtBQUssWUFBWSxFQUFFLElBQUksVUFBUTtBQUFBO0FBQUE7QUFBQSxJQUd0QyxLQUFLO0FBQUEsTUFDSDtBQUFBLE1BQ0EsS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLEtBQUssUUFBUSxJQUFJLEVBQUUsTUFBTTtBQUFBLElBQ3ZEO0FBQUE7QUFBQTtBQUFBLElBR0EsY0FBYyxJQUFJLElBQUksTUFBTSx3Q0FBZSxDQUFDO0FBQUEsRUFDOUMsQ0FBQztBQUFDO0FBRUosSUFBTSxpQkFBaUI7QUFBQSxFQUNyQixHQUFHO0FBQUEsRUFDSCxRQUFRO0FBQ1Y7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUEsSUFDYixlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxnQkFBZ0IsQ0FBQyxFQUFDLEtBQUksTUFBTTtBQUMxQixjQUFJLFNBQVMsUUFBUztBQUNwQixtQkFBTztBQUFBLFVBQ1Q7QUFHQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsV0FBVztBQUFBLElBQ1gsbUJBQW1CO0FBQUE7QUFBQSxJQUVuQixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsTUFDTCxPQUFPLENBQUMsU0FBUztBQUFBLElBQ25CLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
