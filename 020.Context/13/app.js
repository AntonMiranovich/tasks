// 13. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / значение. IIFE

const obj = {
  name: "Anton",
  age: 30,
  id: 1,
};

(function checkValum(a) {
  count = 0;
  for (let key in a) {
    a[key] !== "" ? (count += 1) : null;
  }
  console.log(count);
})(obj);
