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
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", "ts", "tsx"] }],
  },
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  }
}
