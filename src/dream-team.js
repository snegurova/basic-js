const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  return Array.isArray(members) ? members.filter( item => typeof item === 'string').map(item => item.trim()[0].toUpperCase()).sort().join('') : false;
};
