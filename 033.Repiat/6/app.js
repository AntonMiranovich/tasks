// 6. Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив). Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении

class Server {
  controller(obj) {
    this.service(obj);
  }

  service(obj) {
    this.repository(obj);
  }

  repository(obj) {
    const database = [];
    database.push(obj);
    console.log(database);
  }
}

const server = new Server();
const getLog = {
    email: "antonmir992@gmail.com",
    password: "2436910",
};

server.controller(getLog);