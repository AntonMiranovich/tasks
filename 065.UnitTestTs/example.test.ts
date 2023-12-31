import { isPalindrome, calculateFactorial } from "./app";

describe("test isPalindrome", () => {
  test("return true", () => {
    const res = isPalindrome("anna");
    expect(res).toBeTruthy();
  });

  test("return empty", () => {
    const res = isPalindrome("");
    expect(res).toBe("Empty");
  });

  test("return word is number", () => {
    const res = isPalindrome(4);
    expect(res).toBe("word is number");
  });
});


describe("test calculateFactorial", () => {
  test("return true", () => {
    const res = calculateFactorial(3);
    expect(res).toBe(6);
  });

  test("return empty", () => {
    const res = calculateFactorial("");
    expect(res).toBe("Empty");
  });

  test("return n is string ", () => {
    const res = calculateFactorial('anton');
    expect(res).toBe("Error type n");
  });
});
