// 7. Создайте класс StringManipulator, который будет иметь методы reverseString(str),
// isPalindrome(str), countVowels(str). Реализуйте функционал для разворота строки,
// проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
// Использовать Generics
class StringManipulator {
    reverseString(str) {
        if (typeof str === "string") {
            return str.split("").reverse().join("");
        }
    }
    isPalindrome(str) {
        if (typeof str === "string") {
            return str == str.split("").reverse().join("") ? true : false;
        }
    }
    countVowels(str) {
        if (typeof str === "string") {
            return str.split("").reduce((sum, el) => {
                if (/^[aeiouy]$/gm.test(el))
                    return sum++;
            }, 0);
        }
    }
}
const stringManipulator = new StringManipulator();
console.log(stringManipulator.reverseString("test"));
console.log(stringManipulator.isPalindrome("teet"));
console.log(stringManipulator.countVowels("teet"));
