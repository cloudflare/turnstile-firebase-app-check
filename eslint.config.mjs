
import { defineConfig, globalIgnores } from "eslint/config";
import gts from "gts";

export default defineConfig([
  globalIgnores(["**/build/", ]),
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
  ...gts,
]);