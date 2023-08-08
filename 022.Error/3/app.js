// 7. Реализуйте функцию, которая принимает число
//  и возвращает возвенную в
// квадрат каждую цифру числа соединяя их.
// Добавить проверки
// 9119 -> 811181 (9
// 2 === 81, 1
// 2=== 1)

const num = "9119";

function doArray(num) {
  try {
    if (isNaN(num)) throw new Error("вы ввели не тот тип данных");
    let arr = num.split("");
    const res = arr.map((el) => el ** 2);
    return res.join("");
  } catch (error) {
    return error.message;
  }
}

let result = doArray(num);
console.log(result);
