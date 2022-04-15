import { capitalize } from "./index";

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


