// 7. Создайте класс StringManipulator, который будет иметь методы reverseString(str),
// isPalindrome(str), countVowels(str). Реализуйте функционал для разворота строки,
// проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
// Использовать Generics

class StringManipulator {
  reverseString<T>(str: T): string {
    if (typeof str === "string") {
      return str.split("").reverse().join("");
    }
  }

  isPalindrome<Е>(str: Е): boolean {
    if (typeof str === "string") {
      return str == str.split("").reverse().join("") ? true : false;
    }
  }

  countVowels<A>(str: A): number {
    if (typeof str === "string") {
      return str.split("").reduce((sum: number, el: string) => {
        if (/^[aeiouy]$/gm.test(el)) return sum++;
      }, 0);
    }
  }
}

const stringManipulator = new StringManipulator();
console.log(stringManipulator.reverseString<string>("test"));
console.log(stringManipulator.isPalindrome<string>("teet"));
console.log(stringManipulator.countVowels<string>("teet"));
