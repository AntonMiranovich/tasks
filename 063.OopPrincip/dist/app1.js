// 1. Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)
class Shape {
}
class Rectangle extends Shape {
    calculateArea(height, wigth) {
        return height * wigth;
    }
}
const rectangle = new Rectangle();
console.log(rectangle.calculateArea(10, 20));
// abstract class Shape {
//   abstract calculateArea(): number;
// }
// class Rectangle extends Shape {
//   height: number;
//   wigth: number;
//   calculateArea(): number {
//     return this.height * this.wigth;
//   }
// }
// const rectangle = new Rectangle();
// console.log(rectangle.calculateArea());
