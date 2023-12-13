// 5. Создайте класс Rectangle, который содержит свойства width (ширина) и height
// (высота), а также метод getArea(), который возвращает площадь прямоугольника
// (ширина * высота). Создайте экземпляр класса Rectangle и выведите его площадь

// class Rectangle {
//   width: number;
//   height: number;

//   constructor(wid: number, hei: number) {
//     this.width = wid;
//     this.height = hei;
//   }

//   getArea(): number {
//     return this.width * this.height;
//   }
// }

// const rectangle = new Rectangle(25, 4);
// console.log(rectangle.getArea());

//Способ 2
// class Rectangle {
//   width: number;
//   height: number;

//   getArea(): number {
//     return this.width * this.height;
//   }
// }

// const rectangle = new Rectangle();
// rectangle.height = 25;
// rectangle.width = 4;

// console.log(rectangle.getArea());

//Вариант 3
class Rectangle {
  getArea(width: number, height: number): number {
    return width * height;
  }
}

const rectangle = new Rectangle();

console.log(rectangle.getArea(25, 4));
