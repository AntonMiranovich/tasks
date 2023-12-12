// 8. У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту
const arr8 = [
    "antonmir@gmail.com",
    "dwqedawe@gmail.com",
    "antonmir@gmail.com",
];
function isValidEmail(arr8) {
    if (!Array.isArray(arr8))
        throw new Error("Тип данных не массив");
    if (!arr8.every((el) => /^[a-zA-Z0-9]+@[a-z]{2,8}\.[a-z]{2,5}$/gm.test(el)))
        throw new Error("Неверный ввод почты");
}
function checkEmail8(arr8) {
    try {
        isValidEmail(arr8);
        let newArr8 = [];
        for (let i = 0; i < arr8.length; i++) {
            if (!newArr8.includes(arr8[i])) {
                newArr8.push(arr8[i]);
            }
        }
        return newArr8;
    }
    catch (error) {
        return error.message;
    }
}
console.log(checkEmail8(arr8));
