// 12. Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 5 циклом while

const arr = [2, 5, 9, 15, 0, 4];
let new_arr = [];

i = 0;
while (i < arr.length) {
    arr[i] % 5 == 0 ? new_arr.push(arr[i]) : null;
    i++;
}

console.log(new_arr);