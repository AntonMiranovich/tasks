// Найдите минимальное значение в массиве используя цикл

const arr = [5, 65, 105, 3, 4, 205, 7];

let minNum = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < minNum) {
    minNum = arr[i];
  }
}

console.log(minNum);


