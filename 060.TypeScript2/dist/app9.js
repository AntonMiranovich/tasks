// 9. Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.
const arr9 = ["anton", 9, "anton", 9];
const arrRes9 = [];
for (let i = 0; i < arr9.length; i++) {
    arrRes9.includes(arr9[i]) ? null : arrRes9.push(arr9[i]);
}
console.log(arrRes9);
