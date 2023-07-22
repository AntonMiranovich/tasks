// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив, где каждый элемент
// возведен в квадрат. map

const n = prompt();
let arr = [];

for (let i = 0; i < n; i++) {
  let value = prompt();
  arr.push(value);
}

const arr2=arr.map(function(el){
    return el**2
})

console.log(arr2);

