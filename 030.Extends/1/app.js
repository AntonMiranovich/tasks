// 1. Классы Employee и ProductionWorker.
// Напишите класс Employee (Сотрудник), который содержит:
// • имя сотрудника;
// • номер сотрудника.
// Затем напишите класс ProductionWorker (Рабочий), который является подклассом
// класса Employee.
// Класс ProductionWorker содержит:
// • номер смены (целое число, к примеру, 1, 2 или 3);
// • ставка почасовой оплаты труда.
// Напишите методы получатели и методы-модификаторы для каждого класса.
// После того как эти классы будут написаны, напишите программу, которая создает
// объект класса ProductionWorker и предлагает пользователю ввести данные по
// каждому атрибуту данных этого объекта. Сохраните данные в объекте и
// примените в этом объекте методы получатели, чтобы получить эти данные и
// вывести их на экран.

class Employee {
  nameOfEmpluyee;
  numberOfEmpluyee;

  getNameOfEmpluyee() {
    return this.nameOfEmpluyee;
  }

  getNumberOfEmpluyee() {
    return this.numberOfEmpluyee;
  }

  setNameOfEmpluyee(name) {
    this.nameOfEmpluyee = name;
  }

  setNumberOfEmpluyee(num) {
    this.numberOfEmpluyee = num;
  }
}

class ProductionWorker extends Employee {
  numOfChange;
  rateOfChange;

  getNumOfChange() {
    return this.numOfChange;
  }

  getRatefChange() {
    return this.rateOfChange;
  }

  setNumOfChange(num) {
    this.numOfChange = num;
  }

  setRatefChange(change) {
    this.rateOfChange = change;
  }
}

const productionWorker = new ProductionWorker();
productionWorker.setNameOfEmpluyee("Anton");
productionWorker.setNumberOfEmpluyee(1);

productionWorker.setNumOfChange(2);
productionWorker.setRatefChange(100);

console.log(productionWorker.getNameOfEmpluyee());
console.log(productionWorker.getNumberOfEmpluyee());
console.log(productionWorker.getNumOfChange());
console.log(productionWorker.getRatefChange());