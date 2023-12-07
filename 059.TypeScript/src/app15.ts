// 15. Напишите программу, которая принимает строку и возвращает новую строку, в
// которой каждое слово заменено на последнюю букву этого слова, а все остальные
// символы остаются без изменений.
// "Hello World" -> "o d“

const strLastSumbol: string[] = "Hello World".split(" ");

let resultSumbol: string=''

for (let i = 0; i < strLastSumbol.length; i++) {
  resultSumbol += strLastSumbol[i][strLastSumbol[i].length - 1]+' ';
}

console.log(resultSumbol);
