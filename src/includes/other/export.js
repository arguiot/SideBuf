// Browserify / Node.js
if (typeof define === "function" && define.amd) {
  define(() => new SideBuf());
  // CommonJS and Node.js module support.
} else if (typeof exports !== "undefined") {
  // Support Node.js specific `module.exports` (which can be a function)
  if (typeof module !== "undefined" && module.exports) {
    exports = module.exports = new SideBuf();
  }
  // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
  exports.SideBuf = new SideBuf();
} else if (typeof global !== "undefined") {
  global.SideBuf = new SideBuf();
}
