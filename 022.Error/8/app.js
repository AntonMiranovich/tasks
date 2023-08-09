// 8. Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

const arr = ["O", "Q", "R", "S"].join("").toLowerCase();

// Вариант если пропавших букв больше чем одна 
function checkAlp(arr) {
  try {
    for (let i = 0; i < arr.length; i++) {
      if (!isNaN(arr[i])) throw new Error("В массиве присутствуют числа");
    }
  } catch (error) {
    return error.message;
  }

  const alp = "abcdefghijklmnopqrstuvwxyz";
  const firstLetter = arr[0];
  const lastLetter = arr[arr.length - 1];
  const partAlp = alp.slice(
    alp.indexOf(firstLetter),
    alp.lastIndexOf(lastLetter)
  );
  let res = "";
  let arr2 = arr;//новый временный массив с заглушками 
  for (let i = 0; i < partAlp.length; i++) {
    if (partAlp[i] !== arr2[i]) {
      res += partAlp[i]+' ';
      arr2 = arr2.slice(arr2[0], arr2[i]) + "2" + arr2.slice(arr2[i]);// "2" это заглушка чтобы индексы совпадали
    }
  }
  return res;
}

let result = checkAlp(arr);
console.log(result);



//Вариант с одной пропавшей буквой
// function checkAlp(arr) {
//   try {
//     for (let i = 0; i < arr.length; i++) {
//       if (!isNaN(arr[i])) throw new Error("В массиве присутствуют числа");
//     }
//   } catch (error) {
//     return error.message;
//   }

//   const alp = "abcdefghijklmnopqrstuvwxyz";
//   const firstLetter = arr[0];
//   const lastLetter = arr[arr.length - 1];
//   const partAlp = alp.slice(
//     alp.indexOf(firstLetter),
//     alp.lastIndexOf(lastLetter)
//   );
//   let res = "";
//   for (let i = 0; i < partAlp.length; i++) {
//     if (partAlp[i] !== arr[i]) {
//       res += partAlp[i];
//       break;
//     }
//   }
//   return res;
// }

// let result = checkAlp(arr);
// console.log(result);
