// 7. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел.
const clientArr7 = [];
const n7 = 5;
for (let i = 0; i < n7; i++) {
    clientArr7.push(prompt("введите значение эллемента"));
}
const res7 = clientArr7.filter((el) => {
    if (!isNaN(el)) {
        return +el;
    }
});
console.log(res7);
