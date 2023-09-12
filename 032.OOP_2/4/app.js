// 4. На входе статичный объект. Написать функцию на
// формирование массива
// значений данного объекта

const obj = {
  id: 1,
  name: "anton",
  years: 30,
};

function doPar(obj) {
  const arr = Object.values(obj);
  return arr;
}

console.log(doPar(obj));
