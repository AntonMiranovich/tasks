// 1. Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
// и возвращает true, если оно является палиндромом (читается одинаково слева
// направо и справа налево), и false в противном случае.

function isPalindrome(word: string | number): boolean {
  try {
    if (!word) throw new Error("Empty");
    if (typeof word == "number") throw new Error("word is number");
    if (word == word.split("").reverse().join("")) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error.message;
  }
}

// 2. Напишите функцию calculateFactorial(n: number): number, которая принимает
// число n и возвращает его факториал.

function calculateFactorial(n: number | string): number {
  try {
    if (!n) throw new Error("Empty");
    if (typeof n != "number") throw new Error("Error type n");
    if (n <= 1) return 1;
    return n * calculateFactorial(n - 1);
  } catch (error) {
    return error.message;
  }
}

// 3. Напишите функцию capitalizeString(str: string): string, которая принимает строку и
// возвращает новую строку, в которой каждое слово начинается с заглавной буквы.

function capitalizeString(str: string | number): string {
  try {
    if (!str) throw new Error("Empty");
    if (typeof str != "string") throw new Error("Error type str");
    let newStr = str.split(" ");
    let res = "";
    for (let i = 0; i < newStr.length; i++) {
      res += newStr[i][0].toUpperCase() + newStr[i].slice(1) + " ";
    }
    return res;
  } catch (error) {
    return error.message;
  }
}

// 4. Напишите функцию flattenArray(array: any[]): any[], которая принимает массив, в
// котором могут быть вложенные массивы, и возвращает новый массив, в котором
// все элементы являются плоским списком без вложенности.

// function flattenArray(array: any[]): any[] {
//   try {
//    if (!array.length) throw new Error("Empty");
//     const newArr: any[] = [];
//     for (let i = 0; i < array.length; i++) {
//       if ((typeof array[i] == "number") || (typeof array[i] == "string")) {
//         newArr.push(array[i]);
//       } else {
//         newArr.push(...array[i]);
//       }
//     }
//     return newArr;
//   } catch (error) {
//     return error.message;
//   }
// }

function flattenArray(array: any[]): any[] {
  try {
    if (!array.length) throw new Error("Empty");
    return array.flat(Infinity);
  } catch (error) {
    return error.message;
  }
}

// 5. Напишите функцию chunkArray(array: any[], size: number): any[][], которая
// принимает массив и число size, и возвращает новый массив, разделенный на
// подмассивы указанного размера.

function chunkArray(array: any[], size: number): any[][] {
  try {
    if (!array.length) throw new Error("Empty");
    const result: any[][] = [];
    let temporaryArray: any[] = [];
    for (let i = 0; i < array.length; i++) {
      temporaryArray.push(array[i]);
      if (temporaryArray.length == size) {
        result.push(temporaryArray);
        temporaryArray = [];
      }
    }
    if (temporaryArray.length != 0) result.push(temporaryArray);
    return result;
  } catch (error) {
    return error.message;
  }
}

// 6. Напишите функцию findMissingNumber(numbers: number[]): number, которая
// принимает массив чисел, в котором пропущено одно число из
// последовательности, и возвращает пропущенное число.

function findMissingNumber(numbers: number[]): string {
  try {
    if (!numbers.length) throw new Error("Empty");
    let res: string = "";
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] !== numbers[i - 1] + 1) {
        res += `${numbers[i - 1] + 1}; `;
      }
    }
    return res;
  } catch (error) {
    return error.message;
  }
}

// 7. Напишите функцию findPairWithSum(numbers: number[], targetSum: number):
// [number, number] | null, которая принимает массив чисел и целевую сумму, и
// возвращает пару чисел из массива, сумма которых равна целевой сумме. Если
// такая пара не найдена, функция должна возвращать null.

function findPairWithSum(
  numbers: number[],
  targetSum: number
): [number, number] | null {
  try {
    if (!numbers.length) throw new Error("empty numbers");

    let result: [number, number] | null = null;

    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] == targetSum) {
          result = [numbers[i], numbers[j]];
        }
      }
    }

    return result;
  } catch (error) {
    return error.message;
  }
}

// 8. Создайте класс StringArray, который имеет свойство array (массив строк) и методы:
// getLongestWord(): string - возвращает самое длинное слово из массива.
// getUniqueWords(): string[] - возвращает массив уникальных слов из массива.

class StringArray {
  array: string[] = ["Anton", "Hi", "Hi"];

  getLongestWord(): string {
    try {
      let count: string = "";
      for (let i = 0; i < this.array.length; i++) {
        if (this.array.length > count.length) {
          count = this.array[i];
        }
      }
      return count;
    } catch (error) {
      return error.message;
    }
  }

  getUniqueWords(): string[] {
    try {
      let newArr: string[] = [];
      for (let i = 0; i < this.array.length; i++) {
        if (!newArr.includes(this.array[i])) {
          newArr.push(this.array[i]);
        }
      }
      return newArr;
    } catch (error) {
      return error.message;
    }
  }
}

// 9. Создайте класс NumberArray, который имеет свойство array (массив чисел) и
// методы:
// getSum(): number - возвращает сумму всех чисел в массиве.
// getEvenNumbers(): number[] - возвращает массив только четных чисел из массива.

class NumberArray {
  array: number[] = [];

  getSum(): number {
    try {
      if (!this.array.length) throw new Error("Empty");
      return this.array.reduce((sum: number, el: number) => sum + el, 0);
    } catch (error) {
      return error.message;
    }
  }

  getEvenNumbers(): number[] {
    try {
      if (!this.array.length) throw new Error("Empty");
      return this.array.filter((el: number) => el % 2 == 0);
    } catch (error) {
      return error.message;
    }
  }
}

// 10. Создайте класс PersonArray, который имеет свойство array (массив объектов
// Person) и методы:
// getNames(): string[] - возвращает массив имен всех людей.
// getAdults(): Person[] - возвращает массив только совершеннолетних людей.
// getAverageAge(): number - возвращает средний возраст всех людей.

interface iPerson {
  name: string;
  age: number;
}

class PersonArray {
  array: iPerson[] = [
    {
      name: "Anton",
      age: 31,
    },
    {
      name: "Vasia",
      age: 23,
    },
    {
      name: "Alesha",
      age: 12,
    },
  ];

  getNames(): string[] {
    const res: string[] = [];
    for (let i = 0; i < this.array.length; i++) {
      res.push(this.array[i].name);
    }
    return res;
  }

  getAdults(): iPerson[] {
    const res: iPerson[] = [];
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].age > 17) res.push(this.array[i]);
    }
    return res;
  }

  getAverageAge(): number {
    return this.array.reduce(
      (sum: number, el: iPerson) => sum + el.age / this.array.length,
      0
    );
  }
}

// 11. Создайте класс StringManipulator, который имеет свойство text (строка) и методы:
// getCharacterCount(): number - возвращает количество символов в тексте.
// getWords(): string[] - возвращает массив слов из текста.
// getReversedText(): string - возвращает текст в обратном порядке.

class StringManipulator {
  text: string = "Hello World All";

  getCharacterCount(): number {
    return this.text.length;
  }

  getWords(): string[] {
    return this.text.split(" ");
  }

  getReversedText(): string {
    return this.text.split("").reverse().join("");
  }
}

export {
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
};
