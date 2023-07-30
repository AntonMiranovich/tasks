// 15. *Вычислить факториал числа используя рекурсию

const num = 5;

function fac(a) {
  return a > 1 ? a * fac(a - 1) : 1;
}

const result = fac(num);
console.log(result);
