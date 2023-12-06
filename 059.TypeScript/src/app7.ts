// 7. Напишите программу, которая находит факториал заданного числа num и 
// выводит результат в консоль.

const numFact: number = 20;

function factorialNum(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorialNum(n - 1);
  }
}

console.log(factorialNum(numFact));