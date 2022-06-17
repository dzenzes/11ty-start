module.exports = function (config) {
  config.addPassthroughCopy("src/style.css");
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
