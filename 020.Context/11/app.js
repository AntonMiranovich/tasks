// 11. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE
const obj = {
  id: 1,
  name: "Anton",
  age: 30,
};

(function doValue(a) {
  let newObj = {};
  for (let key in a) {
    !isNaN(a[key]) ? (newObj[key] = a[key]) : null;
  }
  console.log(newObj);
})(obj);
