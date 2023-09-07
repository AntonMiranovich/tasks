// 13. Реализуйте класс Calculator, который будет содержать метод doSqrt,
// возвращающий корень числа принимаемого в параметрах.

class Calculator {
  doSqrt(n) {
    const result = Math.sqrt(n);
    return result;
  }
}

const calculator = new Calculator();
console.log(calculator.doSqrt(16));
