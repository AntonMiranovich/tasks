// 5. Реализуйте класс Client, содержащий метод doRegistration. Ваша задача получить
// данные из 2 инпутов: почта, пароль. По клику на кнопку «отправить запрос на
// сервер» для последующей записи в массив репозитория класса Server

class Client {
constructor(){
    doRegistration()
}


doRegistration() {
    const getLog = {
        email: "",
        password: "",
    };
    
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        const inpEmail = document.querySelector(".email");
        const inpPass = document.querySelector(".password");
        getLog.email = inpEmail.value;
        getLog.password = inpPass.value;
    });
    console.log(getLog);
  }
}

const client = new Client();
