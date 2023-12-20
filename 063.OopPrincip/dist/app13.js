// 13. Реализуйте класс ServerPost. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая: middleware -> controller -> service -> repository, где:
// Задание:
// на вход подается JSON вида: `{ "email": "Test", "pwd": "test" }`
// Необходимо добавить в массив БД объект только в том случае, если нет
// совпадений по email.
class ServerPost {
    middleware(obj) {
        return this.controller(obj);
    }
    controller(obj) {
        try {
            return this.service(obj);
        }
        catch (error) {
            return error.message;
        }
    }
    service(obj) {
        return this.repository(obj);
    }
    repository(obj) {
        const arr = [{ email: "asdasda", pwd: "123123123" }];
        const res = arr.filter((el) => el.email == obj.email);
        if (!res.length) {
            arr.push(obj);
        }
        else {
            throw new Error("Error");
        }
        return arr;
    }
}
const obj = JSON.parse(`{ "email": "Test", "pwd": "test" }`);
const serverPost = new ServerPost();
console.log(serverPost.middleware(obj));
