// 8. Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Вариант если пропавших букв больше чем одна)

const array = ["O", "R", "S", "v"].join("").toLowerCase();

function checkAlp(array) {
  try {
    for (let i = 0; i < array.length; i++) {
      if (!isNaN(array[i])) throw new Error("В массиве присутствуют числа");
    }

    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const firstLetter = array[0];
    const lastLetter = array[array.length - 1];
    const partAlpha = alpha.slice(
      alpha.indexOf(firstLetter),
      alpha.lastIndexOf(lastLetter)
    );
    let result = "";
    let arr = array;
    for (let i = 0; i < partAlpha.length; i++) {
      if (partAlpha[i] !== arr[i]) {
        result += partAlpha[i] + " ";
        arr = arr.slice(arr[0], arr[i]) + "1" + arr.slice(arr[i]);
      }
    }
    return result;
  } catch (error) {
    return error.message;
  }
}

console.log(`отсутствующую в массиве -- ${checkAlp(array)}`);
