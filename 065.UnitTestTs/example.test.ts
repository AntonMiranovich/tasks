import {
  isPalindrome,
  calculateFactorial,
  capitalizeString,
  StringArray,
  flattenArray,
  chunkArray,
  findMissingNumber,
  NumberArray,
  PersonArray,
  StringManipulator,
  findPairWithSum,
} from "./app";

//1
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

//2
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

//3
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

//4
describe("test StringArray", () => {
  test("test get getLongestWord", () => {
    const stringArray = new StringArray();
    const res = stringArray.getLongestWord();
    expect(res).toBe("Anton");
  });

  test("test get getUniqueWords", () => {
    const stringArray = new StringArray();
    const res = stringArray.getUniqueWords();
    expect(res).toEqual(["Anton", "Hi"]);
  });
});

//5
describe("test flattenArray", () => {
  test("test get flattenArray", () => {
    const res = flattenArray([1, 2, "a", [1, "a"]]);
    expect(res).toEqual([1, 2, "a", 1, "a"]);
  });

  test("return empty", () => {
    const res = flattenArray([]);
    expect(res).toBe("Empty");
  });
});

//6
describe("test chunkArray", () => {
  test("test get chunkArray", () => {
    const res = chunkArray([1, 2, "a", 1, "a", 4], 4);
    expect(res).toEqual([
      [1, 2, "a", 1],
      ["a", 4],
    ]);
  });

  test("return empty", () => {
    const res = chunkArray([], 3);
    expect(res).toBe("Empty");
  });
});

//7
describe("test findPairWithSum", () => {
  test("test tobe findPairWithSum", () => {
    const res = findPairWithSum([1, 2, 3, 4, 5], 5);
    expect(res).toEqual([4, 1]);
  });

  test("return empty", () => {
    const res = findPairWithSum([], 5);
    expect(res).toBe("empty numbers");
  });
});

//8
describe("test findMissingNumber", () => {
  test("test get findMissingNumber", () => {
    const res = findMissingNumber([1, 2, 4, 5, 7]);
    expect(res).toBe("3; 6; ");
  });

  test("return empty", () => {
    const res = findMissingNumber([]);
    expect(res).toBe("Empty");
  });
});

//9
describe("test NumberArray", () => {
  test("test get NumberArray", () => {
    const numberArray = new NumberArray();
    numberArray.array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const res = numberArray.getSum();
    expect(res).toBe(45);
  });

  test("test get NumberArray", () => {
    const numberArray = new NumberArray();
    numberArray.array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const res = numberArray.getEvenNumbers();
    expect(res).toEqual([2, 4, 6, 8]);
  });

  test("test get NumberArray", () => {
    const numberArray = new NumberArray();
    numberArray.array = [];
    const res = numberArray.getEvenNumbers();
    expect(res).toBe("Empty");
  });

  test("test get NumberArray", () => {
    const numberArray = new NumberArray();
    numberArray.array = [];
    const res = numberArray.getSum();
    expect(res).toBe("Empty");
  });
});

//10
describe("test PersonArray", () => {
  test("test get PersonArray", () => {
    const personArray = new PersonArray();
    const res = personArray.getNames();
    expect(res).toEqual(["Anton", "Vasia", "Alesha"]);
  });

  test("test get PersonArray", () => {
    const personArray = new PersonArray();
    const res = personArray.getAdults();
    expect(res).toHaveLength(2);
  });

  test("test get PersonArray", () => {
    const personArray = new PersonArray();
    const res = personArray.getAverageAge();
    expect(res).toBe(22);
  });
});

//11

describe("test StringManipulator", () => {
  test("test get StringManipulator", () => {
    const stringManipulator = new StringManipulator();
    const res = stringManipulator.getCharacterCount();
    expect(res).toBe(15);
  });

  test("test get StringManipulator", () => {
    const stringManipulator = new StringManipulator();
    const res = stringManipulator.getWords();
    expect(res).toEqual(["Hello", "World", "All"]);
  });

  test("test get StringManipulator", () => {
    const stringManipulator = new StringManipulator();
    const res = stringManipulator.getReversedText();
    expect(res).toBe("llA dlroW olleH");
  });
});
