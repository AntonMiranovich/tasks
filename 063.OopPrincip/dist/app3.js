// 3. Создайте абстрактный класс Fruit с полем array – массив объектов (id, title, price).
// Напишите дочерний класс Apple, функцию getAppleInfo, возвращающую
// информацию о фрукте, где title = яблоко.
class Fruit {
    array;
}
class Apple extends Fruit {
    array = [
        {
            id: 1,
            title: "яблоко",
            price: 10,
        },
        {
            id: 2,
            title: "груша",
            price: 20,
        },
    ];
    getAppleInfo() {
        return this.array.filter((el) => el.title == "яблоко");
    }
}
const apple = new Apple();
console.log(apple.getAppleInfo());
