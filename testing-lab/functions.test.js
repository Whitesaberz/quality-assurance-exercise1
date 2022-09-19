const {
  returnTwo,
  greeting,
  add,
  multiply,
  divide,
  subtract,
} = require("./functions.js");

test('Test should expect greeting("James") to equal "Hello, James." and greeting("Jill") to equal "Hello, Jill."', () => {
  expect(greeting("James")).toBe("Hello, James."),
    expect(greeting("Jill")).toBe("Hello, Jill.");
});

describe("Math Functions", () => {
  test("Test should expect returnTwo to equal 2.", () =>
    expect(returnTwo(2)).toBe(2));

  test("Test should expect add(1,2) to equal 3, and expect add (5,9) to equal 14", () => {
    expect(add(1, 2)).toBe(3), expect(add(5, 9)).toBe(14);
  });
  test("Test should expect multiply(8, 4) to equal 32, and expect multiply(2,4) to equal 8", () => {
    expect(multiply(8, 4)).toBe(32), expect(multiply(2, 4)).toBe(8);
  });
  test("Test should expect divide(14,2) to equal 7, and expect divide(9,3) to equal 3", () => {
    expect(divide(14, 2)).toBe(7), expect(divide(9, 3)).toBe(3);
  });
  test("Test should expect subtract(10,6) to equal 4, and expect subtract(15,6) to equal 9", () => {
    expect(subtract(10, 6)).toBe(4), expect(subtract(15, 6)).toBe(9);
  });
});
