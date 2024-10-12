import { defineConfig } from "vite";
import wyw from "@wyw-in-js/vite";

export default defineConfig(() => ({
  plugins: [
    wyw({
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
    }),
  ],
}));
