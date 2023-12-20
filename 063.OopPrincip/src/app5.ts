// 5. Создайте абстрактный класс "Транспортное средство" (Vehicle), который содержит
// абстрактные методы "завести" (start) и "остановить" (stop). Реализуйте классы наследники "Автомобиль" (Car) и "Мотоцикл" (Motorcycle),
// которые расширяют
// класс "Транспортное средство" и реализуют абстрактные методы в соответствии с
// особенностями каждого транспортного средства. (седержимое методов:
// console.log)

abstract class Vehicle {
  abstract start():void;
  abstract stop():void;
}

class Car extends Vehicle {
  start():void {
    return console.log("Car start");
  }

  stop():void {
    return console.log("Car stop");
  }
}

class Motorcycle extends Vehicle {
  start():void {
    return console.log("Motorcycle start");
  }

  stop():void {
    return console.log("Motorcycle stop");
  }
}

const car = new Car();
const motorcycle = new Motorcycle();
car.start();
car.stop();
motorcycle.start();
motorcycle.stop();
