// 16. На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный треугольник.
// 4 –>****
// ***
// **
// *

const n: number = 10;

for (let i = n; i >= 1; i--) {
  console.log("*".repeat(i));
}
