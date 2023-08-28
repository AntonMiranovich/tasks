// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.

// 9. Дополнить класс Validator. Добавить метод isURL для проверки на url.

// 10. Дополнить класс Validator. Добавить метод isDate для проверки на дату.

// 11. Дополнить класс Validator. Добавить метод isPhone для проверки на номер
// телефона.

class Validator {
  isValidEmail(email) {
    try {
      if (
        !/^[A-z0-9\\\/\-\_\@]+(\@)(gmail|yandex|google|gmail|mail|vk)(.com|.ru|.by|.net)$/gm.test(
          email
        )
      )
        throw new Error("Email введен неправильно");
      return true;
    } catch (error) {
      return error.message;
    }
  }

  isValidPhone(phone) {
    try {
      if (!/^\+375[0-9]{9}$/gm.test(phone))
        throw new Error("Номер телефона введен неверно");
      return true;
    } catch (error) {
      return error.message;
    }
  }

  isValidData(data) {
    try {
      if (!/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/gm.test(data))
        throw new Error("Дата введена неверно");
      return true;
    } catch (error) {
      return error.message;
    }
  }

  isValidUrl(url) {
    try {
      if (!/^[a-z]{4,5}:\/\/[A-z0-9]+(.com|.ru|.by|.net)(|\/)$/gm.test(url))
        throw new Error("Url введен некоректно");
      return true;
    } catch (error) {
      return error.message;
    }
  }
}

const validator = new Validator();
const email = "antonmir992@gmail.com";
console.log(validator.isValidEmail(email));

const phone = "+375293217119";
console.log(validator.isValidPhone(phone));

const data = "07.10.1992";
console.log(validator.isValidData(data));

const urlUser = "https://regex101.com/";
console.log(validator.isValidUrl(urlUser));
