// 3. На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива
const arrNum3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr3 = arrNum3.reduce((sum, el) => {
    return (sum += el);
}, 0);
console.log(newArr3);
