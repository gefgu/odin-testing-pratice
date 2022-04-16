import { capitalize, reverseString, calculator, caesarCipher } from "./index";

// Capitalize

test("Simple capitalization", () => {
  expect(capitalize("gustavo")).toBe("Gustavo");
});

test("Already Capitalized", () => {
  expect(capitalize("Food")).toBe("Food");
});

test("Crazy Capitalized Word", () => {
  expect(capitalize("gUsTAvO")).toBe("GUsTAvO");
});

// Reverse String

test("Simple reversion", () => {
  expect(reverseString("gustavo")).toBe("ovatsug");
});

test("Capitalized reversion", () => {
  expect(reverseString("Radar")).toBe("radaR");
});

test("Reversion with numbers and symbols", () => {
  expect(reverseString("a2c4")).toBe("4c2a");
});

// Calculator

test("Simple add", () => {
  expect(calculator.add(1, 3)).toBe(4);
});

test("Add with negative numbers", () => {
  expect(calculator.add(1, -3)).toBe(-2);
});

test("Simple subtract", () => {
  expect(calculator.subtract(19, 3)).toBe(16);
});

test("Subtract with negative numbers", () => {
  expect(calculator.subtract(1, -3)).toBe(4);
});

test("Subtract with the first lower than the second", () => {
  expect(calculator.subtract(1, 3)).toBe(-2);
});

test("Simple multiply", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("Multiply with 1 negative number", () => {
  expect(calculator.multiply(2, -3)).toBe(-6);
});

test("Multiply with both negative numbers", () => {
  expect(calculator.multiply(-5, -3)).toBe(15);
});

test("Simple Divide", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("Divide with 1 negative number", () => {
  expect(calculator.divide(15, -3)).toBe(-5);
});

test("Divide with both negative numbers", () => {
  expect(calculator.divide(-30, -10)).toBe(3);
});

// Ceaser Cipher

test("Plain text", () => {
  expect(caesarCipher("abcdfg", 1)).toBe("bcdegh");
});

test("Capitalized text", () => {
  expect(caesarCipher("Attack at Dawn", 1)).toBe("Buubdl bu Ebxo");
});

test("z to a", () => {
  expect(caesarCipher("zebra", 1)).toBe("afcsb");
});

test("Z to A", () => {
  expect(caesarCipher("Zebra", 1)).toBe("Afcsb");
});

test("Ponctuation", () => {
  expect(caesarCipher("food?", 1)).toBe("gppe?");
});

test("Different Key", () => {
  expect(caesarCipher("abcdf", 5)).toBe("fghik");
});

test("Different Key A-Z", () => {
  expect(caesarCipher("Zbcdf", 5)).toBe("Eghik");
});

test("Different Key Ponctuation", () => {
  expect(caesarCipher("Zbcdf!", 5)).toBe("Eghik!");
});

test("Crazy Capitalized", () => {
  expect(caesarCipher("HeY ThERe!", 2)).toBe("JgA VjGTg!");
});

// Analyze Array

test("1-5 array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toBe({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test("1 element array", () => {
  expect(analyzeArray([3])).toBe({
    average: 3,
    min: 3,
    max: 3,
    length: 1,
  });
});

test("random array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toBe({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("array with negative numbers", () => {
  expect(analyzeArray([1, 2, -3, 4, 5])).toBe({
    average: 1.8,
    min: -3,
    max: 5,
    length: 5,
  });
});
