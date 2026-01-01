import { defineConfig } from "vite";
import motionCanvas from "@motion-canvas/vite-plugin";
import ffmpeg from "@motion-canvas/ffmpeg";
import { glob } from "glob";
import { unlink } from "fs/promises";

export default defineConfig({
  plugins: [
    motionCanvas(),
    ffmpeg(),
    {
      name: "clean-mjs",
      async buildStart() {
        // Delete all .mjs files in src/ on startup
        const files = await glob("src/**/*.mjs");
        await Promise.all(files.map((f) => unlink(f).catch(() => {})));
      },
      async handleHotUpdate({ file }) {
        // Delete .mjs files on any file change
        if (file.includes("/src/")) {
          const files = await glob("src/**/*.mjs");
          await Promise.all(files.map((f) => unlink(f).catch(() => {})));
        }
      },
    },
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".cljs"],
  },
});
