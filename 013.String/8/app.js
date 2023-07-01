// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'


let a = 'aaa bbb ccc';
let ferst_b = a.indexOf('b');
let last_b = a.lastIndexOf('b')

console.log(a.slice(ferst_b, last_b + 1));
