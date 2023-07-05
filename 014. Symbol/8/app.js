// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// мем -> true
// тест -> false

let a = prompt();

console.log(a == a.split("").reverse().join("") ? true : false);