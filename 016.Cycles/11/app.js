// 11. У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива


// const arr = [1, 3, 'Anton', 54, true];
// let new_arr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]===Number(arr[i])) {
//         new_arr.push(arr[i])
//     }
// }

// console.log(new_arr);




// const arr = [1, 3, 'Anton', 54, true];
// let new_arr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!isNaN(arr[i])&&arr[i]!=true) {
//         new_arr.push(arr[i])
//     }
// }

// console.log(new_arr);


const arr = [1, 3, 'Anton', 54];
let new_arr = [];
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        new_arr.push(arr[i])
    }
}

console.log(new_arr);