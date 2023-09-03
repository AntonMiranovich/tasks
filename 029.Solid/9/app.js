// 9. Реализуйте класс Сonversion, сдержащий метод do DecimalNumber, преобразующий
// все числа 10 системы счисления в 2

class Conversion {
  DecimalNumber(num) {
    return num.toString(2);
  }
}

const num = 23;
const conversion = new Conversion();

console.log(conversion.DecimalNumber(num));
