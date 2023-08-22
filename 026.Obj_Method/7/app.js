// 7. На вход подается число.
//  Необходимо каждое значение возвести в степень
// индекса и вычислить сумму.

const num = 12345;
const numStr = String(num);

function sumNum(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str[i] ** i;
  }
  return sum;
}

console.log(sumNum(numStr));
