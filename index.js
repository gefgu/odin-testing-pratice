const capitalize = (s) => {
  return s[0].toUpperCase() + s.slice(1);
};

const reverseString = (s) => {
  let newString = "";
  s.split("").forEach((char) => {
    newString = char + newString;
  });
  return newString;
};

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

const caesarCipher = (str, shift) => {
  const convertChar = (char) => {
    const lowerCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
    const upperCaseAlphabet = lowerCaseAlphabet.toUpperCase();

    let isLowerCase = lowerCaseAlphabet.indexOf(char) === -1 ? false : true;
    if (isLowerCase) {
      let newIndex = lowerCaseAlphabet.indexOf(char) + shift;
      if (newIndex >= lowerCaseAlphabet.length) {
        newIndex = newIndex - lowerCaseAlphabet.length;
      }
      return lowerCaseAlphabet[newIndex];
    } else {
      let isUpperCase = upperCaseAlphabet.indexOf(char) === -1 ? false : true;
      if (isUpperCase) {
        let newIndex = upperCaseAlphabet.indexOf(char) + shift;
        if (newIndex >= upperCaseAlphabet.length) {
          newIndex = newIndex - upperCaseAlphabet.length;
        }
        return upperCaseAlphabet[newIndex];
      } else {
        return char;
      }
    }
  };

  let newString = "";
  str.split("").forEach((char) => {
    newString += convertChar(char);
  });
  return newString;
};

export { capitalize, reverseString, calculator, caesarCipher };
