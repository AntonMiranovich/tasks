// 15. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для получения
// произведения всех элементов массива. Если результат функции проверки – true,
// то вызывать новую функцию, возвращающую произведение всех элементов
// массива

const n = prompt("Введите значение n");

function pushArr(a) {
  let arrFun = [];
  for (let i = 0; i < a; i++) {
    let arrEl = +prompt("Введите значение эддементов");
    arrFun.push(arrEl);
  }
  return arrFun;
}

const arr = pushArr(n);

function chekFun(array) {
  let chek = array.every(function (el) {
    return !isNaN(el) ? true : false;
  });
  return chek;
}

const chek = chekFun(arr);


function sumElArray(arr){
let sum=0
arr.forEach(function(el){
    sum+=el
})
return sum
}

const sumArr=sumElArray(arr)

console.log(chek===true?sumArr:'введите числа !!!');
