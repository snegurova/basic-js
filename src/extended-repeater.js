const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';

  createRepeatedStr = (string, repeat, separator) => {
    if (string === null) {
      string = 'null';
    }
    if (string || string === false) {
      string = string.toString();
    } else {
      return '';
    }

    if (!repeat) {
      return string;
    }

    let strArr = [];
    for (let i = 0; i < repeat; i++) {
      strArr.push(string);
    }

    return strArr.join(separator);
  }

  str += createRepeatedStr(options.addition, options.additionRepeatTimes,
    options.additionSeparator || '|');

  result += createRepeatedStr(str, options.repeatTimes,
    options.separator || '+');

  return result;
};

// repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })