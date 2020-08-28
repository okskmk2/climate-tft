module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],

  plugins: ["only-warn"],

  parserOptions: {
    parser: "babel-eslint"
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "comma-dangle": ["error", "never"]
  },

  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"]
};
