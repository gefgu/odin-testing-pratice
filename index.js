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

export { capitalize, reverseString, calculator };
