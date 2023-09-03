// 2. Классы Person и Customer. Напишите класс Person с атрибутами данных для
// имени, адреса и телефонного номера человека. Затем напишите класс Customer
// (Клиент), который является подклассом класса Person. Класс Customer должен
// иметь поле для номера клиента и атрибут булевых данных,
// указывающий, хочет ли клиент быть в списке рассылки или нет.
// Продемонстрируйте методы получатели и модификаторы экземпляра класса
// Customer

class Person {
  name;
  address;
  phoneNumber;

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address;
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }

  setName(name) {
    this.name = name;
  }

  setAddress(add) {
    this.address = add;
  }

  setPhoneNumber(num) {
    this.phoneNumber = num;
  }
}

class Customer extends Person {
  numOfClient;
  bool;

  getNumofClient() {
    return this.numOfClient;
  }

  getBool() {
    return this.bool;
  }

  setNumofClient(num) {
    this.numOfClient = num;
  }

  setBool(bool) {
    this.bool = bool;
  }
}

const customer = new Customer();
customer.setName("Anton");
customer.setAddress("Minsk");
customer.setPhoneNumber("+375259761228");
customer.setNumofClient(27);
customer.setBool(true);

console.log(
  customer.getName(),
  customer.getAddress(),
  customer.getPhoneNumber(),
  customer.getNumofClient(),
  customer.getBool()
);
