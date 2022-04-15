import { capitalize } from "./index";

test("Simple capitalization", () => {
  expect(capitalize("gustavo")).toBe("Gustavo");
});

test("Already Capitalized", () => {
  expect(capitalize("Food")).toBe("Food");
});

test("Crazy Capitalized Word", () => {
  expect(capitalize("gUsTAvO")).toBe("GUsTAvO");
});
