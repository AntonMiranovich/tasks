// На вход подаются 2 строки. Если исходная 1 строка заканчивается на 2 строку
// вывести true, в противном случае false


let a = 'Настя не берет нас в Грецию'
let b = 'не берет нас в Грецию'

if (a.endsWith(b)) {
    console.log(true);
} else {
    console.log(false);
}