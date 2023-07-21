// На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
// способы обращения к первому и последнему элементам

const arr = ["hschool", "hschool_0", "hschool_1"];

// //Вариант 1
// console.log(arr[0] + arr[2]);

// //вариант 2
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   i == 0 || i == arr.length - 1 ? result.push(arr[i]) : null;
// }
// console.log(result);

// //Вариант 3
// let resultW = [];
// let i = 0;
// while (i < arr.length) {
//   i == 0 || i == arr.length - 1 ? resultW.push(arr[i]) : null;
//   i++;
// }
// console.log(resultW);

//Вариант 4
// let resultDW = [];
// let i = 0;
// do {
//   i == 0 || i == arr.length - 1 ? resultDW.push(arr[i]) : null;
//   i++;
// } while (i < arr.length);
// console.log(resultDW);

//Вариант 5
// let resultOf = [];
// for (let el of arr) {
//   el == "hschool" || el == "hschool_1" ? resultOf.push(el) : null;
// }
// console.log(resultOf);

//Вариант 6
// let resultFE = [];
// arr.forEach(function (el) {
//   el == "hschool" || el == "hschool_1" ? resultFE.push(el) : null;
// });
// console.log(resultFE);

//Вариант 7
// const resultFil = arr.filter(function (el) {
//   return el == "hschool" || el == "hschool_1" ? true : false;
// });
// console.log(resultFil);
