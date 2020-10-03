const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((matrixFlat, item) => matrixFlat.concat(item),[]).filter(item => {
    return item === '^^'
  }).length;

};
