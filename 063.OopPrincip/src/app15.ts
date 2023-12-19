// 15. Создайте класс Cat, представляющий кошку. У класса Cat должны быть приватные
// свойства name, age и color. Реализуйте методы getName, getAge и getColor,
// которые будут возвращать соответствующие свойства. Создайте несколько
// объектов класса Cat и выведите их данные.

class Cat15 {
  private name: string = "Antonius";
  private age: number = 5;
  private color: string = "black";

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getColor(): string {
    return this.color;
  }
}

const cat15=new Cat15()
console.log(cat15.getName());
console.log(cat15.getAge());
console.log(cat15.getColor());

