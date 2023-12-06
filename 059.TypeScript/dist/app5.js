// 5. Напишите программу, которая находит сумму всех чисел от 1 до 100 и выводит
// результат в консоль.
const numb = 100;
function factorial(n) {
    if (n == 0) {
        return 0;
    }
    else {
        return n + factorial(n - 1);
    }
}
console.log(factorial(numb));
