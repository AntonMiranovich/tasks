// 3. Дана строка массива чисел. Необходимо спарсить строку. Если же после того как
// вы спарсили данные у вас не массив – бросить исключение. Добавить проверку
// на числа. Далее вывести только те числа, которые кратны 3

const arr = JSON.parse(`[1,2,3,4,5,6,7,8,9]`);

function checkArr(arr) {
  try {
    if (!Array.isArray(arr)) throw new Error("спарсили не массив");
    let bool = arr.every(function (el) {
      if (!isNaN(el)) return true;
      return false;
    });
    if (bool == false) throw new Error(" В массиве присутствуют не числа");
    let res = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 3 === 0) {
        res += arr[i];
      }
    }
    return res;
  } catch (error) {
    return error.message;
  }
}

const result = checkArr(arr);
console.log(result);
