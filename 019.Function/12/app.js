// 12. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово палиндром и false в противном случае

const str = "доход";

function chek(a) {
  return a === a.split("").reverse().join("") ? true : false;
}

const result = chek(str);
console.log(result);
