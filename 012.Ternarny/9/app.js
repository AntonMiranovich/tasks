// Пользователь вводит число: 1, 2, 3 или 4. Если это значение '1', то вывести в консоль
// 'зима', '2' – 'весна' и так далее. Добавить проверку на ввод только чисел. Решите
// задачу через switch-case. 

let a = prompt('Введите число от 1 до 4');

if (isNaN(a)) {
    console.log('Ошибка ввода');
} else {
    a=+a;
    switch (a) {
        case 1:
            console.log('Зима');
            break;
        case 2:
            console.log('Весна');
            break;
        case 3:
            console.log('Лето');
            break;
        case 4:
            console.log('Осень');
            break;

        default:
            console.log('Ошибка');
            break
    }
}