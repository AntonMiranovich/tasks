// *На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо
// разбить данный одномерный массив на маленькие массивы в зависимости от
// того, какого число ввел пользователь. Добавить проверки на ввод числа
// (значение n не должно быть больше длины массива, 0, пустая строка, строковый
// тип данных). Использовать любой цикл / метод перебора массива
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]

const arr = [1, 2, 3, 4, 5, 6];
const n = +prompt('введиче число');

if (!isNaN(n) && n <= arr.length && n !== 0 && n !== "") {
  let arrResult = [];
  let count = 1;
  let temporaryArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (count === n) {
      temporaryArr.push([arr[i]]);
      arrResult.push(temporaryArr);
      count = 1;
      temporaryArr = [];
    } else {
      temporaryArr.push([arr[i]]);
      count++;
    }
  }
  temporaryArr.length === 0 ? null : arrResult.push(temporaryArr);
  console.log(arrResult);
} else {
  console.log("Введите корректное значение");
}
