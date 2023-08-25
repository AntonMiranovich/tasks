// 11. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

const obj = {
  id: 12345,
  name: 'anton',
  age: 30,
  email: 'anton@mail.ru'
};


 (function (object) {
    let newObj = {};
    for (const key in object) {
      if (!isNaN(object[key])) {
        newObj[key] = object[key];
      }
    }
    console.log(newObj);
  }(obj));
