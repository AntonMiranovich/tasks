// 2. Create
// На входе объект вида
// { "label": "Test", "category": "test", "priority": 1 },
// Неоходимо запушить в БД объект только в том случае, если нет совпадений по
// label.
// Если совпадения нет, то в объект клиента добавить ключ id со значением label в
// toLowerCase таким образом, чтобы в БД был запушен объект вида
// {"id": "test" "label": "Test", "category": "test", "priority": 1 },
// Если совпадение есть – ошибка

const obj = {
  label: "Test",
  category: "test",
  priority: 1,
};

const bd = {};

for (let key in obj) {
  if (obj.label === (obj.category||obj.priority)) {
    console.log("Ошибка");
    break;
  } else {
    bd.id = obj.label.toLowerCase();
    bd[key]=obj[key]
  }
}

console.log(bd);
