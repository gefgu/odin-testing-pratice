import { capitalize, reverseString, calculator } from "./index";

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

test("Z to A", () => {
  expect(caesarCipher("zebra", 1)).toBe("afcsb");
});

test("Ponctuation", () => {
  expect(caesarCipher("food?", 1)).toBe("gppe?");
});

test("Different Key", () => {
  expect(caesarCipher("abcdf", 5)).toBe("fghik");
})