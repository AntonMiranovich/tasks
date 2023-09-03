// 4. Реализовать следующие классы Круг, Треугольник и Квадрат, которые
// наследуются от Figure. Каждый экземпляр класса должен содержать свойства
// Площадь и Имя. Вывести всю информацию о фигурах в консоль. Площадь должна
// рассчитываться по математическим формулам. Класс Figure содержит поля: pi =
// 3.14, r = radius, a = side, h = height, а также сеттеры для данных полей. Дочерние
// классы содержать геттеры на получение площади

class Figure {
  pi = 3.14;
  r;
  a;
  h;

  setR(r) {
    this.r = r;
  }

  setA(a) {
    this.a = a;
  }

  setH(h) {
    this.h = h;
  }
}

class Circle extends Figure {
  nameFigure = "Circle";
  getAreaOfCircli() {
    return `${this.nameFigure} площадь ${this.pi * this.r ** 2}`;
  }
}

class Triangle extends Figure {
  nameFigure = "Triangle";
  getAreaOfTriangle() {
    return `${this.nameFigure} площадь ${(this.a * this.h) / 2}`;
  }
}

class Square extends Figure {
  nameFigure = "Square";
  getAreaOfSquare() {
    return `${this.nameFigure} площадь ${this.a**2}`;
  }
}

const circle = new Circle();
circle.setR(10);
console.log(circle.getAreaOfCircli());

const triangle = new Triangle();
triangle.setA(30);
triangle.setH(20);
console.log(triangle.getAreaOfTriangle());

const square = new Square();
square.setA(10);
console.log(square.getAreaOfSquare());