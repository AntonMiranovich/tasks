// 14. Создайте класс Counter, который будет представлять счетчик. У класса Counter
// должно быть свойство count (первоначальное значение задается сеттером) и
// методы increment и decrement, которые будут увеличивать и уменьшать значение
// счетчика соответственно на 1. Создайте объект класса Counter и проверьте работу
// методов.
class Counter {
    count = 0;
    setCount(num) {
        this.count = num;
    }
    increment() {
        this.count++;
    }
    decrement() {
        this.count--;
    }
}
const counter = new Counter();
counter.setCount(5);
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.count);
