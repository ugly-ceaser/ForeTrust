module.exports = {
    extends: ["next/core-web-vitals"], // Extends Next.js recommended rules
    rules: {
      "@next/next/no-img-element": "off", // Disable the <img> rule
      // Other rules can go here...
    },
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      es6: true,
      node: true,
    },
  };
  