// 8. Напишите функцию, принимающую массив в качестве параметра. Необходимо
// оставить в массиве символы без дубликатов. IIFE
// [1, 1, 2, 2, 2, 3, 4, 5, 5, 5] = [1, 2, 3, 4, 5]

(function filterArr(a) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.includes(a[i]) ? null : arr.push(a[i]);
  }
  console.log(arr);
})([1, 1, 2, 2, 2, 3, 4, 5, 5, 5]);