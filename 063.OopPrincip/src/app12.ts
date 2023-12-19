// 12. Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая: controller -> service -> repository, где:
// Задание:
// Необходимо вывести в консоль массив из репозитория

interface iServer {
  id: number;
  name: string;
  surname: string;
  age: number;
}

class ServerGetAll {
  controller() {
    return this.service();
  }

  service() {
    return this.repository();
  }

  repository() {
    const arrObj = [
      {
        id: 1,
        name: "Anton",
        surname: "Miranovich",
        age: 31,
      },
      {
        id: 2,
        name: "Test",
        surname: "Test",
        age: 31,
      },
      {
        id: 3,
        name: "Testik",
        surname: "Testik",
        age: 31,
      },
    ];
    return arrObj;
  }
}

const serverGetAll = new ServerGetAll();
console.log(serverGetAll.controller());
