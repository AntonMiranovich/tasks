// 9. Создать интерфейс iValidation. Создайте класс Validation с публичными методами
// isValidEmail, isValidDate, isValidPath, вызывающиеся через конструктор класса
// Validation. Конструктор принимает поля email, date, path и инициализирует их как
// поля класса. В каждом методе напишите соответствующую проверку

interface iValidation {
  email: String;
  data: String;
  path: String;
  isValidEmail(): void;
  isValidDate(): void;
  isValidPath(): void;
}

class Validation {
  email: String;
  data: String;
  path: String;

  constructor(email:string, data:string, path:string) {
    this.email = email;
    this.data = data;
    this.path = path;

    this.isValidEmail(email);
    this.isValidDate(data);
    this.isValidPath(path);
  }

  public isValidEmail(email:string) {
    try {
      if (!/^[a-zA-Z0-9]+\@[a-z]{2,8}\.[a-z]{2,5}/gm.test(email))
        throw new Error("Email is not corrected");
      console.log(true);
    } catch (error) {
      console.log(error.mmesage);
    }
  }
  public isValidDate(data:string) {
    try {
      if (!/^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}$/gm.test(data))
        throw new Error("Data is not corrected");
      console.log(true);
    } catch (error) {
      console.log(error.mmesage);
    }
  }
  public isValidPath(path:string) {
    try {
      if (!/^[C]\:\/\/[admin]+\//gm.test(path))
        throw new Error("Path is not corrected");
      console.log(true);
    } catch (error) {
      console.log(error.mmesage);
    }
  }
}

const validation = new Validation(
  "antonmir992@gmail.com",
  "14.12.2023",
  "C://admin/"
);
