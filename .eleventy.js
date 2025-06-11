module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "blog",
      includes: "../_includes", // assuming _includes is at root
      output: "_site"
    }
  };
};