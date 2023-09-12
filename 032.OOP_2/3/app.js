// 3. Написать функцию на подсчет количества пар ключ значение
//  в объекте. Добавить
// проверки

const obj = {
  id: 1,
  name: "anton",
  years: 30,
};

function doPar(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count
}
console.log(doPar(obj));


const value=Object.values(obj)
console.log(value);
console.log(value.length);


