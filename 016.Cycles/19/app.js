// Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. Проверить каждый
// prompt на число (ввод строки, проверка на isNaN)


let n = +prompt('Количество эллементов');
let arr = [];

for (let i = 0; i < n; i++) {
    value = prompt('Эллемент массива');
    if (!isNaN(value)) {
        arr.push(value);
    }
}

console.log(arr);