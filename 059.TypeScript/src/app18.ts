// 18. *На вход подается строка чисел произвольной длины. Необходимо обратиться к
// каждому значению числа и выявить четность/нечетность
// 1234 -> 1 неч 2 чет 3 неч 4 чет
// 444444 -> 4 чет 4 чет 4 чет 4 чет 4 чет 4 чет

const arrayNums: string[] = "1234456899043242".split("");

const resultArray: string[] = arrayNums.map((el: string) => {
  if (+el % 2 === 0) {
    return `${el} чет`;
  } else {
    return `${el} нечет`;
  }
});

console.log(resultArray);
