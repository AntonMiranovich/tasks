// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.

const str: string[] = "My name is Anton".split(" ");

let resStr: string = "";
let lengthStr: number = 0;

str.forEach((el: string) => {
  if (el.length > lengthStr) {
    lengthStr = el.length;
    resStr = el;
  }
});

console.log(`самое длинное слово в строке ${resStr} , его длинна ${lengthStr}`);
