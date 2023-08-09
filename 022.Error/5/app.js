// 5. На вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в
// диапазоне 10<n< 100, то занести в новый массив. Добавить проверки и обработать
// их. Обратите внимание, тут как минимум 3 функции. Первая: формирование
// массива. Вторая: валидация. Третья: основная логика задачи

const n = 6;

function doArr(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
}

function inValid(arr) {
  try {
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) throw new Error("В массиве присутствует буква");
    }
  } catch (error) {
    return error.message;
  }
}

function newArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10 && arr[i] < 100) newArr.push(arr[i]);
  }
  return newArr;
}

const arr = doArr(n);
const checkValid = inValid(arr);
const newArr = newArray(arr);
console.log(newArr);
