// 16. На входе объект из 5 свойств. Значения вводим с клавиатуры. Необходимо
// проитерировать значения объекта и сформировать на основе этих чисел массив

const obj = {
  name: "",
  age: "",
  weight: "",
  height: "",
  shoeSize: "",
};

for (let key in obj) {
  obj[key] = prompt(`Введите ${key}`);
}

const arr = [];
for (let key in obj) {
  !isNaN(obj[key]) ? arr.push(obj[key]) : null;
}

console.log(obj);
console.log(arr);
