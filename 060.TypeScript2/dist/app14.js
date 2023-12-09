// 14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.
// function mostFrequent(data) {
//   let result;
//   let max = 0;
//   let count;
//   for (let i = 0; i < data.length; i++) {
//     count = 0;
//     for (let k = i; k < data.length; k++) {
//       if (data[i] === data[k]) count++;
//       if (count > max) {
//         max = count;
//         result = data[i];
//       }
//     }
//   }
//   return result;
// }
// console.log(mostFrequent(["a", "a", "bi", "bi", "bi"]));
const str14 = "antonasdqweqwralksdjvhlkjjjjj";
let res14 = "";
let maxCount = 0;
let count14 = 0;
for (let i = 0; i < str14.length; i++) {
    count14 = 0;
    for (let j = 0; j < str14.length; j++) {
        if (str14[i] == str14[j])
            count14++;
        if (count14 > maxCount) {
            maxCount = count14;
            res14 = str14[i];
        }
    }
}
console.log(`наиболее часто встречающийся символ в заданной строке ${res14}, колличество вхождений ${maxCount}`);
