// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива

const arr = ['i','am','Anton'];

function isStr(a) {
  let chekStr = a.every(function (el) {
    return isNaN(el) ? true : false;
  });
  return chekStr;
}

const chek = isStr(arr);

if (chek == true) {
  function sumArr(a) {
    let sum = ''
    a.forEach(function(el){
        sum+=`${el} `
    })
    return sum;
  }
  let resultSum = sumArr(arr);
  console.log(resultSum);
} else {
  console.log("Введите слова !!!!");
}
