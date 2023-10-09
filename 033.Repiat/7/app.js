// 7. На сервере реализуйте возможность регистрации doRegistration. Если почта
// клиента уникальна и массив репозитория не содержит такую почту, то сохранить
// клиентский объект в массив

class Server {
  controller(obj) {
    this.service(obj);
  }

  service(obj) {
    this.repository(obj);
  }

  repository(obj) {
    const database = [
      { email: "asddasd@gmail.com", password: "2436910" },
      { email: "antonasdadmir992@gmail.com", password: "2436910" },
      { email: "antdasdasda@gmail.com", password: "2436910" },
      { email: "antonadsdasd@gmail.com", password: "2436910" },
    ];

    const CheckDataBaseEmail = database.some((el) => {
      return el.email == obj.email ? true : false;
    });

    CheckDataBaseEmail == false ? database.push(obj) : null;
    console.log(database);
  }
}

const server = new Server();
const getLog = {
  email: "antonmir992@gmail.com",
  password: "2436910",
};

server.controller(getLog);
