// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.
const str = "My name is Anton".split(" ");
let resStr = "";
str.forEach((el) => {
    if (el.length > resStr.length) {
        resStr = el;
    }
});
console.log(`самое длинное слово в строке ${resStr} , его длинна ${resStr.length}`);
