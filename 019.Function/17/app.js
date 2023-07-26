// 17. Написать функцию, принимающую в параметрах строку текста в маленьком
// регистре. Разбить строку на массив. Функция должна вернуть строку, где каждый
// элемент массива в чередование регистров toLowerCase, toUpperCase
// hschool -> HsChOoL

let str = "hschool".split("");

function updeit(str) {
  let string = [];
  for (let i = 0; i < str.length; i++) {
    i % 2 === 0 ? string.push(str[i].toUpperCase()) : string.push(str[i].toLowerCase());
  }
  return string.join('')
}

const upStr = updeit(str);
console.log(upStr);
