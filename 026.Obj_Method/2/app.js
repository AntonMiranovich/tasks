// 2. Написать функцию на подсчет количества
//  пар ключ значение в объекте. Добавить
// проверки

const obj = {
  id: "email",
  name: "anton",
  age: 18,
};

function cont(obj) {
  try {
    const parKey = Object.entries(obj).length;
    if (parKey === 0) throw new Error("пар ключей не найдено");
    return parKey;
  } catch (error) {
    return error.message;
  }
}

const result = cont(obj);
console.log(result);
