// 17. Создайте массив чисел и найдите наибольшую разницу между двумя элементами.
const arr17 = [102, 4, 51, 7, 45, 46];
let res17 = 0;
for (let i = 0; i < arr17.length; i++) {
    for (let j = 0; j < arr17.length; j++) {
        if (arr17[i] - arr17[j] > res17 || arr17[j] - arr17[i] > res17) {
            if (arr17[i] > arr17[j]) {
                res17 = arr17[i] - arr17[j];
            }
            else {
                res17 = arr17[j] - arr17[i];
            }
        }
    }
}
console.log(`наибольшая разницу между двумя элементами ${res17}`);
