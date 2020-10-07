const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!arr.some(el => Array.isArray(el))) {
      return 1;
    } else {
      arr = arr.reduce( (result, element) => result.concat(element), []);
      return 1 + this.calculateDepth(arr);
    }
  }
};
