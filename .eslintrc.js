module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "taro/react",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/no-commonjs": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
};
