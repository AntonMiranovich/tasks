// 2. На входе 7 чисел. Все эти значения пользователь вводит с клавиатуры и заполяет
// 5 первыми значениями массив. Далее необходимо создать массив из тех
// значений, которые являются числами и НЕ равны 2 другим введенным. Если
// длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента. forEach

const n = 7;
let arr = [];
let num1 = prompt();
let num2 = prompt();

for (let i = 0; i < n - 2; i++) {
  arr.push(prompt(""));
}

let result = [];

arr.forEach(function (el) {
  if (!isNaN(el) && el !== num1 && el !== num2) {
    result.push(el);
  }
});

if (result.length === 0) {
  console.log("массив пуст");
} else {
  console.log(result);
}
