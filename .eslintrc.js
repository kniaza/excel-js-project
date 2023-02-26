module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["eslint:recommended", "google", "prettier"],
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    semi: "off",
    "no-undef": "off",
    "require-jsdoc": "off",
  },
};
