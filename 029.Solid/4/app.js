// 4. Реализуйте класс ServerGetById. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": 1
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой
// имеется. В противном случае бросить исключение. Добавить проверки

class ServerGetById {
  controller(obj) {
    return this.service(obj);
  }

  service(obj) {
    return this.repository(obj);
  }

  repository(obj) {
    const arr = [
      { id: 1, name: "Yesenia", age: 22 },
      { id: 2, name: "Hanna", age: 22 },
      { id: 3, name: "Stanislau", age: 25 },
      { id: 4, name: "German", age: 18 },
      { id: 5, name: "Maria", age: 27 },
    ];

    const newObj=[];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === obj.id) newObj.push(arr[i]);
    }
    return newObj;
  }
}

const obj = JSON.parse(`{"id": 1}`);
const serverGetById = new ServerGetById();
console.log(serverGetById.controller(obj));
