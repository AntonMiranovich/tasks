// 14. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235


const arr = [10, 20, 30, 50, 235, 3000]
let new_arr = []

for (let i = 0; i < arr.length; i++) {
    arr[i] = String(arr[i])
    arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5 ? new_arr.push(Number(arr[i])) : null
}

console.log(new_arr);