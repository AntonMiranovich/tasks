// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.

const str: string[] = "My name is Anton".split(" ");

let resStr: string = "";

str.forEach((el: string) => {
  if (el.length > resStr.length) {
    resStr = el;
  }
});

console.log(`самое длинное слово в строке ${resStr} , его длинна ${resStr.length}`);
