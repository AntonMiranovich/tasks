// 13. Создайте переменную sentence и присвойте ей строковое значение
// предложения. Напишите программу, которая преобразует первую букву каждого
// слова в предложении в верхний регистр. Например, для предложения "hello
// world" результатом должна быть строка "Hello World".

const sentence: string = "hello world i am anton";

let sentenceArr: string[] = sentence.split(" ");

let array: string[] = [];

for (let i = 0; i < sentenceArr.length; i++) {
  array.push(
    sentenceArr[i][0].toUpperCase() +
      sentenceArr[i].slice(1).toLocaleLowerCase() +
      " "
  );
}

console.log(array.join(""));
