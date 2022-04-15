import { capitalize } from "./index";

test("Simple capitalization", () => {
  expect(capitalize("gustavo")).toBe("Gustavo");
});

test("Already Capitalized", () => {
  expect(capitalize("Gustavo")).toBe("Gustavo");
});

test("Crazy Capitalized Word", () => {
  expect(capitalize("gUsTAvO")).toBe("GUsTAvO");
});
