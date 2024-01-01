import {
  isPalindrome,
  calculateFactorial,
  capitalizeString,
  StringArray,
} from "./app";

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
    const res = calculateFactorial("anton");
    expect(res).toBe("Error type n");
  });
});

describe("test capitalizeString", () => {
  test("return true", () => {
    const res = capitalizeString("hello world");
    expect(res).toBe("Hello World ");
  });

  test("return empty", () => {
    const res = capitalizeString("");
    expect(res).toBe("Empty");
  });

  test("return str is no string ", () => {
    const res = capitalizeString(4);
    expect(res).toBe("Error type str");
  });
});

describe("test StringArray", () => {
  test("test get getLongestWord", () => {
    const stringArray = new StringArray();
    const res = stringArray.getLongestWord();
    expect(res).toBe("Anton");
  });

  test("test get getUniqueWords", () => {
    const stringArray = new StringArray();
    const res = stringArray.getUniqueWords();
    expect(res).toEqual(["Anton","Hi"]);
  });
});
