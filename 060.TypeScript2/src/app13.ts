// 13. На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]

const arrayNums13: number[] = [1, 2, 3, 4, 5, 6];

const resultArray13: string[] = arrayNums13.map((el: number) => {
  if (+el % 2 === 0) {
    return `${el} чет`;
  } else {
    return `${el} нечет`;
  }
});

console.log(resultArray13);
