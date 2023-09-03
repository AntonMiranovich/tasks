// 11. Реализуйте класс Сonversion, сдержащий метод doOctalNumber, преобразующий
// все числа 10 системы счисления в 8

class Conversion {
    doOctalNumber(num) {
      return num.toString(8);
    }
  }
  
  const num = 15;
  const conversion = new Conversion();
  
  console.log(conversion.doOctalNumber(num));
