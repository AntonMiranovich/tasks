// 7. Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив) при условии, что email уникальный. Создать
// генерацию нового id. Обязательными функциями считаются функции middleware,
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении

class Server {
  controller(bd) {
    console.log(bd);
  }

  service(bd) {
    this.controller(bd);
  }

  repository() {
    const bd = [];

    const btnPush = document.querySelector(".push");
    btnPush.addEventListener("click", () => {
      try {
        const objJson = JSON.parse(document.querySelector("div").textContent);
        if (objJson.email == "" || objJson.pwd == "")
          throw new Error("Вы неможите добавить в Баззу данных пустой обьект");

        for (let i = 0; i < bd.length; i++) {
          if (bd[i].email === objJson.email)
            throw new Error("В базе данных уже есть такой Email");
        }

        bd.push({ id: bd.length + 1, ...objJson });

        this.service(bd);
      } catch (error) {
        alert(error.message);
      }
    });
  }
}

const server = new Server();
server.repository();
