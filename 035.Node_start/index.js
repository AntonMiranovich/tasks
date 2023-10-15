//1 Установить пакет npm
//2 Поставить сервер
//3 Добавить 3 обработчика маршрута get с url: "/ “, "/about“, "/contact"
//4 Отправить клиенту ответы по каждому из маршутов
//5 Изменить функционал роута get “/”. На сервере хранится массив из чисел. Необходимо вернуть клиенту только уникальные значения
//6 Создать обработчик маршрута get с url: "/:id “. Необходимо получить значение id и отправить клиенту. (Для того чтобы получить значение из url необходимо воспользоваться деструктуризацией из request.params)
//7 Создать обработчик маршрута get с url: "/:id“. Необходимо получить значение id. На сервере хранится массив из чисел. Напишите функцию, которая разделяет массив на части заданного размера. Необходимо вернуть клиенту массив
//8 Создать обработчик маршрута get с url: "/task/:id “. Необходимо получить значение id. На сервере хранится массив объектов, в каждом из которых есть поле id int. Напишите функцию, которая находит по id объект. Необходимо вернуть клиенту объект (Вспомнить ServerGetById)

const express = require("express");

const app = express();

app.get("/", (request, response) => {
  const arr = [1, 1, 4, 3, 6, 6, 4, 2, 2, 7];
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) newArr.push(arr[i]);
  }
  response.send(newArr);
});

app.get("/about", (request, response) => {
  response.send("Hello. This is route about");
});

app.get("/contact", (request, response) => {
  response.send("Hello. This is route contact");
});

app.get("/:id", (request, response) => {
  const { id } = request.params;
  const arr = [1, 2, 3, 4, 5, 6];
  const resArr = [];
  let itemArr = [];
  for (let i = 0; i < arr.length; i++) {
    itemArr.push(arr[i]);
    if (itemArr.length == id) {
      resArr.push(itemArr);
      itemArr = [];
    }
  }
  response.send(resArr);
});

app.listen(3000, () => {
  console.log("этот порт 3000");
});
