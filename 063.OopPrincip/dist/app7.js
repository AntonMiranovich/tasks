// 7. Создайте класс StringManipulator, который будет иметь методы reverseString(str),
// isPalindrome(str), countVowels(str). Реализуйте функционал для разворота строки,
// проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
// Использовать Generics
class StringManipulator {
    reverseString(str) {
        return str.split("").reverse().join("");
    }
    isPalindrome(str) {
        return str == str.split("").reverse().join("") ? true : false;
    }
    countVowels(str) {
        /^[aeiouy]$/gm;
    }
}
const stringManipulator = new StringManipulator();
console.log(stringManipulator.reverseString("test"));
console.log(stringManipulator.isPalindrome("teet"));
