// • GET “/” – получние всех элементов массива
// • GET “/:id” – получение отдельного элемента по id
// • POST “/” – с клиента приходит объект вида {"label": "TypeScript", "category":
// "programmingLanguages", "priority": 1 }. Добавить в массив объект в том случае, если
// совпадений label.toLowerCase() с id массива нет. Вернуть клиенту массив и статус
// • PUT “/:id” – обновить в массиве объект только в том случае, если есть совпадения с
// id. Вернуть клиенту массив и статус
// • DELETE “/:id” удалить из массива объект только в том случае, если id совпадает.
// Вернуть клиенту массив и статус

const express = require("express");
const bodyParser = require("body-parser");

const { getData } = require("./service");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  try {
    res.send(getData);
  } catch (error) {
    res.send(error.message);
  }
});





app.listen(3000,()=>{
  console.log('сервер работает на 3000 порте');
})
