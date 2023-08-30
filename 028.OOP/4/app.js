// 4. Реализуйте класс MathСalculation.
//  В него передается число n – количество
// элементов массива. На основании числа
//  формируется динамический массив из n
// элементов внутри класса.
//  Создать функцию для подсчета всех четных чисел
// массива. Добавить проверки на ввод

class MathСalculatio {
  constructor(n) {
    this.n = n;
  }

  count() {
    const arr = [];
    for (let i = 0; i < this.n; i++) {
      arr.push(Math.floor(Math.random() * 10));
    }

    const newArr = arr.filter((el) => el % 2 === 0);
    return `${arr},количество четных элл ${newArr.length}`;
  }
}

const mathСalculation = new MathСalculatio(10);
console.log(mathСalculation.count());
