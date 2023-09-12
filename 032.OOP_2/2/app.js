// 2. На входе n – количество элементов массива.
//  Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию
//  возвращающую новый
// массив из элементов, каждое значение которого
//  имеет вид #name.
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const n = 5;
const arr = [];

function doArr(n) {
  for (let i = 0; i < n; i++) {
    arr.push(prompt("введите эл"));
  }
  return arr;
}

const res = doArr(n);

function doNewArr(res) {
  const resArr = res.map((el) => "#" + el);
  return resArr;
}

console.log(doNewArr(res));