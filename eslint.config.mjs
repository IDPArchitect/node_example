import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node, // Include Node.js globals (e.g., `require`)
        ...globals.jest  // Include Jest globals (e.g., `test`, `expect`)
      }
    }
  },
  pluginJs.configs.recommended,
];
