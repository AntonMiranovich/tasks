// Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx.

let a = prompt('ВВедите дату в формате хxxx-хx-xх');

console.log(a.replaceAll('-', '.'));


