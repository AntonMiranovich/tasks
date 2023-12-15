// 6. Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
// (хначение инициализируется через конструктор класса), методы getAverage,
// getMax, getMin для вычисления среднего значения, максимального и
// минимального элементов массива.

class ArrayAnalyzer {
  arr: number[] = [];

  constructor(a: number, b: number, c: number, d: number, f: number) {
    this.arr.push(a, b, c, d, f);
  }

  getAverage(): number {
    return this.arr.reduce((sum: number, el: number) => {
      return sum + el / this.arr.length;
    }, 0);
  }

  getMax(): number {
    return Math.max(...this.arr);
  }

  getMin(): number {
    return Math.min(...this.arr);
  }
}

const arrayAnalyzer = new ArrayAnalyzer(1, 2, 3, 4, 5);

console.log(arrayAnalyzer.getAverage());
console.log(arrayAnalyzer.getMax());
console.log(arrayAnalyzer.getMin());
