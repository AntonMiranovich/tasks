// 12. Работа с геттерами и сеттерами. Реализуйте класс Validator. Класс содержит
// getEmail, setEmail, а также метод IsEmail, проверяющий, является ли входная строка
// корректным email (Если является - возвращает true, если не является - false.
// Вызвать из экземпляра класса методы setEmail. getEmail, isEmail

class Validator {
  getEmail(email) {
    this.isEmail(email);
  }

  isEmail(email) {
    if (/^[A-z0-9]+\@(gmail|vk|mail|yandex)\.(com|ru|by)$/gm.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  setEmail() {
    return this.isEmail();
  }
}

const email = "antonmir992@gmail.com";
const validator = new Validator();
validator.getEmail(email);
console.log(validator.setEmail());
