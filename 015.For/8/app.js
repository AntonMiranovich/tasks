// Преобразуйте первую букву каждого слова строки в верхний регистр.


let a = 'i am developer'.split(' ');

let a1 = '';

for (let i = 0; i < a.length; i++) {
    a1 += a[i][0].toUpperCase()+a[i].slice(1)+' ';
}

console.log(a1);




