// 5. Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2.

const arr5: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const res5: number[] = arr5.filter((el: number) => {
 return el % 3 === 0 && el % 2 !== 0;
});

console.log(res5);
