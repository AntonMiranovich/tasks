// На входе статичный объект.
//  Необходимо посчитать количество пар (ключ:
//     значение) где значение число и вывести количество

const obj = {
  name: "anton",
  age: 30,
  weight: 92,
  height: 188,
};

let count = 0;

for (let key in obj) {
  if (!isNaN(obj[key])) {
    count++;
  }
}
console.log(count);
