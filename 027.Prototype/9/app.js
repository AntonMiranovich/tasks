// 9. На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Необходимо вывести количество пар ключ значение объекта)

const obj = {
  id: 12345,
  name: "Anton",
  surname: "Miranovich",
  age: 30
};

function sumKey(obj) {
  let check = 0;
  for (key in obj) {
    if (obj.key !== "") {
      check++;
    }
  }
  return check
}

console.log(sumKey(obj));