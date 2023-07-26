// 13. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово анаграмма и false в противном случае

const str = "банка";
const str2 = "кабан";

function chek(a, b) {
  return a.split("").sort().join("") === b.split("").sort().join("")? true : false;
}

let result = chek(str, str2);
console.log(result);
