// Преобразуйте первую букву каждого слова строки в верхний регистр.

const str = "i am developer".split(" ");

//Вариант 1
let result = "";

for (let i = 0; i < str.length; i++) {
  result += `${str[i][0].toUpperCase()}${str[i].slice(1)} `;
}
console.log(result);

//Вариант 2
const str2 = str.map((el) => `${el[0].toUpperCase()}${el.slice(1)} `);

console.log(str2.join(""));
