// . Найдите максимальное значение в статичном массиве используя цикл. 

let a = [2, 5, 65, 105, 3, 4, 205, 7];

let max = a[0];

for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];
    }
}
console.log(max);