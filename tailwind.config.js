module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#051b2c",
      secondary: "#262626",
      danger: "#e3342f",
    }),
  },
};
