module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 15,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "semi": ["error", "always"],
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "no-console": ["warn"],
        "curly": ["error", "all"],
        "no-unused-vars": ["error"],
        "camelcase": ["error"],
        "max-len": ["error", { "code": 100 }],
    }
};
