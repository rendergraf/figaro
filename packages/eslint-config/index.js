module.exports = {
  env: {
    browser: true, // Para el entorno del navegador
    es2021: true,  // Especificar que usas características de ECMAScript 2021
    node: true,    // Para el entorno de Node.js
  },
  parser: "@typescript-eslint/parser", // Usar el parser de TypeScript
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Permitir JSX
    },
    ecmaVersion: 12, // Especificar la versión de ECMAScript
    sourceType: "module", // Permitir imports
  },
  extends: [
    "eslint:recommended", // Reglas recomendadas de ESLint
    "plugin:@typescript-eslint/recommended", // Reglas recomendadas de TypeScript
    "plugin:react/recommended", // Reglas recomendadas de React
    "plugin:react-hooks/recommended", // Reglas recomendadas para hooks de React
    "prettier", // Integración con Prettier
  ],
  plugins: [
    "@typescript-eslint", // Plugin para TypeScript
    "react", // Plugin para React
    "react-hooks", // Plugin para React Hooks
  ],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off", // Desactivar la regla sobre las aserciones de no null
    "react/react-in-jsx-scope": "off", // Desactivar la regla que requiere importar React en JSX
    "react/prop-types": "off", // Desactivar la regla de PropTypes (ya que se usa TypeScript)
    "react/jsx-filename-extension": [
      1,
      { extensions: [".jsx", ".tsx"] }, // Permitir JSX en archivos .jsx y .tsx
    ],
    "no-console": "warn", // Advertencia para los usos de console.log
  },
  settings: {
    react: {
      version: "detect", // Detectar automáticamente la versión de React
    },
  },
};
