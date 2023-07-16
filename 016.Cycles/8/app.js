// Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите каждый элемент массива
// без повторений -> [1, 2, 3, 4, 5] (for, for of)

const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
let result = [];

for (let i = 0; i < arr.length; i++) {
  if (!result.includes(arr[i])) {
    result.push(arr[i]);
  }
}
console.log(result);


for(let el of arr){
    if(!result.includes(el)){
        result.push(el)
    }
}
console.log(result);
