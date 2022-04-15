const capitalize = (s) => {
  return s[0].toUpperCase() + s.slice(1);
};

const reverseString = (s) => {
  let newString = "";
  s.split("").forEach(char => {
    newString = char + newString;
  });
  return newString;
}

export { capitalize, reverseString };
