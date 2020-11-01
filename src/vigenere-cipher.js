const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  tabulaRecta = {
    a: "abcdefghijklmnopqrstuvwxyz",
    b: "bcdefghijklmnopqrstuvwxyza",
    c: "cdefghijklmnopqrstuvwxyzab",
    d: "defghijklmnopqrstuvwxyzabc",
    e: "efghijklmnopqrstuvwxyzabcd",
    f: "fghijklmnopqrstuvwxyzabcde",
    g: "ghijklmnopqrstuvwxyzabcdef",
    h: "hijklmnopqrstuvwxyzabcdefg",
    i: "ijklmnopqrstuvwxyzabcdefgh",
    j: "jklmnopqrstuvwxyzabcdefghi",
    k: "klmnopqrstuvwxyzabcdefghij",
    l: "lmnopqrstuvwxyzabcdefghijk",
    m: "mnopqrstuvwxyzabcdefghijkl",
    n: "nopqrstuvwxyzabcdefghijklm",
    o: "opqrstuvwxyzabcdefghijklmn",
    p: "pqrstuvwxyzabcdefghijklmno",
    q: "qrstuvwxyzabcdefghijklmnop",
    r: "rstuvwxyzabcdefghijklmnopq",
    s: "stuvwxyzabcdefghijklmnopqr",
    t: "tuvwxyzabcdefghijklmnopqrs",
    u: "uvwxyzabcdefghijklmnopqrst",
    v: "vwxyzabcdefghijklmnopqrstu",
    w: "wxyzabcdefghijklmnopqrstuv",
    x: "xyzabcdefghijklmnopqrstuvw",
    y: "yzabcdefghijklmnopqrstuvwx",
    z: "zabcdefghijklmnopqrstuvwxy"
  };

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(plainText, keyword) {
    if (!plainText || !keyword) {
      throw new Error('Parameter is absent');
    }

    plainText = plainText.toLowerCase();
    keyword = keyword.toLowerCase();

    let encryptedText = '';
    let specialCharacterCount = 0;

    for (let i = 0; i < plainText.length; i++) {
      let keyLetterIndex = (i - specialCharacterCount) % keyword.length;
      let columnIndex = this.tabulaRecta.a.indexOf(keyword[keyLetterIndex]);
      let rowLetterToCheck = plainText[i];

      if (this.tabulaRecta[rowLetterToCheck]) {
        encryptedText += this.tabulaRecta[rowLetterToCheck][columnIndex];
      } else {
        encryptedText += rowLetterToCheck;
        specialCharacterCount++;
      }
    }

    if (!this.direct) {
      encryptedText = encryptedText.split('').reverse().join('');
    }

    encryptedText = encryptedText.toUpperCase();

    return encryptedText;
  }
  decrypt(encryptedText, keyword) {
    if (!encryptedText || !keyword) {
      throw new Error('Parameter is absent');
    }

    encryptedText = encryptedText.toLowerCase();
    keyword = keyword.toLowerCase();

    let decryptedText = '';
    let specialCharacterCount = 0;

    for (let i = 0; i < encryptedText.length; i++) {
      let keyLetterIndex = (i - specialCharacterCount) % keyword.length;
      let row = this.tabulaRecta[keyword[keyLetterIndex]];
      let letterToCheck = encryptedText[i];

      if (row.indexOf(letterToCheck) !== -1) {
        decryptedText += this.tabulaRecta.a[row.indexOf(letterToCheck)];
      } else {
        decryptedText += letterToCheck;
        specialCharacterCount++;
      }
    }

    if (!this.direct) {
      decryptedText = decryptedText.split('').reverse().join('');
    }

    decryptedText = decryptedText.toUpperCase();

    return decryptedText;
  }
}

module.exports = VigenereCipheringMachine;
