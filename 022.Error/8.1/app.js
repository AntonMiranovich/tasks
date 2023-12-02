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
    const partAlpha = alpha.slice(
      alpha.indexOf(array[0]),
      alpha.lastIndexOf(array[array.length - 1])
    );
    let result = "";
    let arr = array;
    for (let i = 0; i < partAlpha.length; i++) {
      if (partAlpha[i] !== arr[i]) {
        result += partAlpha[i] + " ";
        arr = arr.slice(0, i) + "1" + arr.slice(i);
      }
    }
    return result;
  } catch (error) {
    return error.message;
  }
}

console.log(`отсутствующую в массиве -- ${checkAlp(array)}`);
