// Два автомобиля едут друг к другу с постоянными скоростями V1 и V2 км/ч.
// Определите, через какое время автомобили встретятся, если расстояние между
// ними равно S км. Добавить проверку на ввод только чисел


let V1 = prompt('введите скорость первой машины');
let V2 = prompt('введите скорость второй машины');
let S = prompt('введите растояние');

if (isNaN(V1, V2, S)) {
    console.log('Ошибка ввода');
} else {
    let T = S / (V1 + V2);
    console.log(`Автомобили встретятся через ${T}`);
}





