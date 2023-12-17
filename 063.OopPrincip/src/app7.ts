// 7. Создайте класс StringManipulator, который будет иметь методы reverseString(str),
// isPalindrome(str), countVowels(str). Реализуйте функционал для разворота строки,
// проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
// Использовать Generics

class StringManipulator {
  reverseString(str: string):string {
    return str.split("").reverse().join("");
  }

  isPalindrome(str: string):boolean {
    return str == str.split("").reverse().join("") ? true : false;
  }

  countVowels(str:string) {
    /^[aeiouy]$/gm
  }
}

const stringManipulator = new StringManipulator();
console.log(stringManipulator.reverseString("test"));
console.log(stringManipulator.isPalindrome("teet"));
