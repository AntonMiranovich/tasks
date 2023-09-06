// 6. Реализуйте класс Client, содержащий метод sendRequest. Ваша задача получить
// данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на
// сервер» (отправку запроса мы не проходили => просто вывести на экран
// образовавщийся объект вида: {email: email, pwd: pwd}

class Client {
  sendRequest() {
    const btn = document.querySelector(".doBut");
    btn.addEventListener("click", function () {
      const inpEmail = document.querySelector(".email");
      const inpPassword = document.querySelector(".password");
      const result = document.querySelector("div");
      const objRes = {};
      objRes.email = inpEmail.value;
      objRes.pwd = inpPassword.value;
      result.innerHTML = JSON.stringify(objRes);
      inpEmail.value = "";
      inpPassword.value = "";
    });
  }
}

const client = new Client();
client.sendRequest();
