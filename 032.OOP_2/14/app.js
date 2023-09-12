// 14. Наследование. Работа с геттерами и сеттерами. Классы Person и Customer.
// Напишите класс Person с атрибутами данных для имени, фамилии. Затем напишите
// класс Customer, который является подклассом класса Person. Класс Customer
// должен иметь поле телефонного номера человека. Продемонстрируйте экземпляр
// класса Customer вызвав геттеры и сеттеры собственного класса и базового

class Person {
  name;
  surname;

  getName() {
    return this.name;
  }

  getSurName() {
    return this.surname;
  }

  setName(name) {
    this.name = name;
  }

  setSurname(sur) {
    this.surname = sur;
  }
}

class Customer extends Person {
  numPhone;

  getNumPhone() {
    return this.numPhone;
  }

  setNumPhone(numP) {
    this.numPhone = numP;
  }
}

const customer = new Customer();
customer.setName("Anton");
customer.setSurname("Miranovich");
customer.setNumPhone("+375293217119");

console.log(customer.getName(), customer.getSurName(), customer.getNumPhone());
