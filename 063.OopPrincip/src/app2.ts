// 2. Создайте абстрактный класс Animal, содержащий абстрактный метод
// makeSound(). Напишите дочерние классы Dog и Cat, которые наследуют Animal и
// реализуют метод makeSound() для издания соответствующего звука. Создайте
// объекты классов Dog и Cat и вызовите их методы makeSound().

abstract class Animal {
  abstract makeSound(): string;
}

class Dog extends Animal {
  makeSound(): string {
    return "GAV";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "MAY";
  }
}

const dog = new Dog();
const cat = new Cat();
console.log(dog.makeSound());
console.log(cat.makeSound());
