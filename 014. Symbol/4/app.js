// На вход подаются 2 строки. Необходимо сравнить их и если они одинаковы, то
// вывести true, в противном случае false.
// 'string', 'StRiNg' -> true



let a = prompt('введите первую строку');
let b = prompt('введите вторую строку');

console.log(a.toLowerCase() == b.toLowerCase() ? true : false);