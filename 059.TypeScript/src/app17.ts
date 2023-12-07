// 17. *Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. Проверьте есть ли в массиве элемент
// со значением, равным 4. Посчитать количество повторений числа 4 в массиве

const arrayNum: number[] = [1, 2, 5, 9, 4, 13, 4, 10];

const numClient: number = 4;

let count: number = 0;

for (let i = 0; i < arrayNum.length; i++) {
  arrayNum[i] == numClient ? count++ : null;
}

console.log(
  count != 0
    ? `колличество повторений ${count} раз(а) эллемента  ${numClient}`
    : `эллемент ${numClient} не повторяется в массиве`
);
