// 6. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования массива.
// Вторая для нахождения количества элементов массива

const n = +prompt("Введите значение n");

function filing(a) {
  let arr2 = [];
  for (let i = 0; i < a; i++) {
    let per = prompt();
    arr2.push(per);
  }
  return arr2;
}

let arr = filing(n);


function resEl(a){
    let result=a.length
    return result
}
let result=resEl(arr)

console.log(arr);
console.log(result);