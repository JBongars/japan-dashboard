module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  parser: "babel-eslint",
  globals: {
    sleep: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",


    
    "plugin:prettier/recommended"
  ],
  plugins: ["react-hooks"],
  rules: {
    "no-console": 1,
    "react/display-name": 0,
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
