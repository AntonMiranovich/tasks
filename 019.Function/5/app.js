// 5. На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае

const arr = [1, 3, "Anton", 7, 3, "Hello"];

function isTrue(a) {
  let result2 = a.every((el) => (!isNaN(el) ? true : false));
  return result2;
}

let result = isTrue(arr);
console.log(result);
