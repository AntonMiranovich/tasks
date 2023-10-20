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

const { getData, getDataById, postData } = require("./service");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  try {
    const data = getData();
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = getDataById(id);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/", (req, res) => {
  try {
    const { label, category, priority } = req.body;
    const data=postData(label, category, priority)
    res.send(data)
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(3000, () => {
  console.log("сервер работает на 3000 порте");
});
