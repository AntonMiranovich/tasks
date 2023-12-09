// 12. Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.
const arr12 = [1, 24, 2, 54, 12, 4312, 23];
const newArr12 = [];
for (let i = 0; i < arr12.length; i++) {
    i % 2 !== 0 ? newArr12.push(arr12[i]) : null;
}
const res12 = newArr12.reduce((sum, el) => {
    return (sum += el);
}, 0);
console.log(res12);
