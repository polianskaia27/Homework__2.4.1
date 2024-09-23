const calculateBonus = require("./script");

test("The maximum bonus", () => {
  expect(calculateBonus(10, 67)).toBe(50);
});

test("Other value", () => {
  expect(calculateBonus(30, 7)).toBe(37);
});
