// 14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.

// const str14: string = "antonasdqweqwralksdjvhlkjjjjj";

// let res14: string = "";

// let maxCount: number = 0;

// let count14: number = 0;

// for (let i = 0; i < str14.length; i++) {
//   count14 = 0;
//   for (let j = 0; j < str14.length; j++) {
//     if (str14[i] == str14[j]) count14++;
//     if (count14 > maxCount) {
//       maxCount = count14;
//       res14 = str14[i];
//     }
//   }
// }

// console.log(
//   `наиболее часто встречающийся символ в заданной строке ${res14}, колличество вхождений ${maxCount}`
// );

const str14: string[] = ["a", "a", "b", "c", "b", "b", "a", "a"];

let res14: string = "";

let maxCount: number = 0;

for (let i = 0; i < str14.length; i++) {
  let count14: number = 0;
  const str123 = str14.map((el: string) => {
    if (el == str14[i]) {
      count14++;
    }
  });

  if (count14 > maxCount) {
    maxCount = count14;
    res14 = str14[i];
  }
}
console.log(
  `наиболее часто встречающийся символ в заданной строке ${res14}, колличество вхождений ${maxCount}`
);
