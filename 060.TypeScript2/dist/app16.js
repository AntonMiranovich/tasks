// 16. Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.
const arr16 = [1, 4, 2, 4, 6, 7, 8, 9];
let flag16 = true;
for (let i = 0; i < arr16.length; i++) {
    if (arr16[i] >= arr16[i + 1]) {
        flag16 = false;
        break;
    }
}
console.log(flag16 == true
    ? "массив является строго возрастающей последовательностью"
    : "массив не является строго возрастающей последовательностью");
