// 8. Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Вариант если пропавших букв больше чем одна)

const arr = ['"O", "Q", "R", "S"'].join("").toLowerCase();

function checkAlp(arr) {
  try {
    for (let i = 0; i < arr.length; i++) {
      if (!isNaN(arr[i])) throw new Error("В массиве присутствуют числа");
    }

    const alp = "abcdefghijklmnopqrstuvwxyz";
    const firstLetter = arr[0];
    const lastLetter = arr[arr.length - 1];
    const partAlp = alp.slice(
      alp.indexOf(firstLetter),
      alp.lastIndexOf(lastLetter)
    );
    let res = "";
    let arr2 = arr;
    for (let i = 0; i < partAlp.length; i++) {
      if (partAlp[i] !== arr2[i]) {
        res += partAlp[i] + " ";
        arr2 = arr2.slice(arr2[0], arr2[i]) + "1" + arr2.slice(arr2[i]);
      }
    }
    return res;
  } catch (error) {
    return error.message;
  }
}

let result = checkAlp(arr);
console.log(result);
