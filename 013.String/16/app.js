// . На вход программе подается строка, состоящая из имени и фамилии человека,
// разделенных одним пробелом. Напишите программу, которая проверяет, что имя
// и фамилия начинаются с заглавной буквы.
// Chris Alan => true
// chris alan => false

let a = prompt(' Enter your name ').trim().split(' ');

console.log(a[0][0] === a[0][0].toUpperCase() && a[1][0] === a[1][0].toUpperCase() ? true : false);


