// 10. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование


// function f<A, B>(a: A, b?: B){
//     if (typeof b !== 'undefined') {
//       return a + b;
//     } else {
//       return (b: B) => {
//         return  a + b;
//       }
//     }
//   }
  
//   console.log(f<number, number>(2, 3))
//   console.log(f<number, number>(2)(3))
