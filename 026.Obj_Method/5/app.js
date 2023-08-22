// 5. На входе объект и число n, символизирующее
// количество пар ключ-значение.
// Ключи и значения - автоинкремент (генерируется
//     автоматически от 1 до n).
// Проверить есть ли ключ 10 в объекте.

const n = 15;

function duObj(n) {
  const obj = {};
  for (let i = 1; i < n; i++) {
    obj[i] = i;
  }
  return obj;
}

function chekKey(obj) {
  const arrOfKeys = Object.keys(obj);
  let res = arrOfKeys.some(function (el) {
    if (el == 10) return true;
  });
  return res;
}

const res = duObj(n);
const result = chekKey(res);
console.log(result);
