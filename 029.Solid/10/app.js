// 10. Реализуйте класс Сonversion, сдержащий метод doBinaryNumber, преобразующий
// все числа 2 системы счисления в 10

class Conversion {
  doBinaryNumber(num) {
    return parseInt(num,2);
  }
}

const num = 100101011;
const conversion = new Conversion();

console.log(conversion.doBinaryNumber(num));
