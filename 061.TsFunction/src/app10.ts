// 10. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование

function f(a:number, b?) {
  if (a && b) return a + b;
  return (b: number) => {
    return a + b;
  };
}


console.log(f(2)(3));
console.log(f(2, 3));
