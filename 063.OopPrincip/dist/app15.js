// 15. Создайте класс Cat, представляющий кошку. У класса Cat должны быть приватные
// свойства name, age и color. Реализуйте методы getName, getAge и getColor,
// которые будут возвращать соответствующие свойства. Создайте несколько
// объектов класса Cat и выведите их данные.
class Cat15 {
    name = "Antonius";
    age = 5;
    color = "black";
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getColor() {
        return this.color;
    }
}
const cat15 = new Cat15();
console.log(cat15.getName());
console.log(cat15.getAge());
console.log(cat15.getColor());
