// 6. Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
// (хначение инициализируется через конструктор класса), методы getAverage,
// getMax, getMin для вычисления среднего значения, максимального и
// минимального элементов массива.
class ArrayAnalyzer {
    arr = [];
    constructor(a, b, c, d, f) {
        this.arr.push(a, b, c, d, f);
    }
    getAverage() {
        return this.arr.reduce((sum, el) => {
            return sum + el / this.arr.length;
        }, 0);
    }
    getMax() {
        return Math.max(...this.arr);
    }
    getMin() {
        return Math.min(...this.arr);
    }
}
const arrayAnalyzer = new ArrayAnalyzer(1, 2, 3, 4, 5);
console.log(arrayAnalyzer.getAverage());
console.log(arrayAnalyzer.getMax());
console.log(arrayAnalyzer.getMin());
