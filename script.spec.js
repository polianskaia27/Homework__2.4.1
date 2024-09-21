const calculateBonus = require("./script");

test("The maximum bonus", () => {
  expect(calculateBonus(10, 67)).toBe(50);
});

test("Mean value", () => {
  expect(calculateBonus(30, 7)).toBe(37);
});

test("Exactly fifty", () => {
  expect(calculateBonus(25, 25)).toBe(50);
});

test("Boundary value 49", () => {
  expect(calculateBonus(25, 24)).toBe(49);
});

test("Boundary value 1", () => {
  expect(calculateBonus(0, 1)).toBe(1);
});

test("Zero", () => {
  expect(calculateBonus(0, 0)).toBe(0);
});

test("Very large number", () => {
  expect(calculateBonus(1000000, 1000000)).toBe(50);
});
