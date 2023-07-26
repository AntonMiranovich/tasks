// 14. На входе статичный объект с повторяющимися значениями. Необходимо
// отфильтровать значения объекта и оставить только уникальные значения
// { {
// 0 : 7,
// 1 : 7,
// 2 : 6,
// 3 : 5,
// 4 : 2,
// 5 : 2
// 6 : 1
// }

const obj = {
  0: 7,
  1: 7,
  2: 6,
  3: 5,
  4: 2,
  5: 2,
  6: 1,
};

let newObj = {};
const arr = [];
for (let key in obj) {
  arr.push(obj[key]);
}

const arr2 = [];
arr.forEach(function (el) {
  arr2.includes(el) ? null : arr2.push(el);
});

for (let i = 0; i < arr2.length; i++) {
  newObj[i] = arr2[i];
}

console.log(newObj);
