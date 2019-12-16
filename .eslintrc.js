module.exports = {
  "extends": ["airbnb", "plugin:prettier/recommended"],
  "parserOptions": {
    "sourceType": "module"
  },
  "env": {
    "node": true,
    "jest": true,
    "es6": true,
    "browser": true
  },
  "parser": "babel-eslint",
  "rules": {
    "prettier/prettier": "error",
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", "ts", "tsx"] }],
    "react/jsx-one-expression-per-line": 0,
    "react/no-array-index-key": 0,
    "no-shadow": 0
  },
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  }
}
