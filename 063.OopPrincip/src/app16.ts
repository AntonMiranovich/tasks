// 16. Создайте базовый класс Person, представляющий человека. У класса Person
// должны быть свойства name и age. Создайте класс Student, наследующийся от
// Person, и добавьте ему свойство averageGrade. Реализуйте методы getName,
// getAge и getAverageGrade в классе Student. Создайте несколько объектов класса
// Student и выведите их данные.

class Person16 {
  name: string;
  age: number;
}

class Student16 extends Person16 {
  averageGrade: number;
  getName(a: string): void {
    this.name = a;
  }

  getAge(n: number): void {
    this.age = n;
  }

  getAverageGrade(g: number): void {
    this.averageGrade = g;
  }
}

const student16 = new Student16();
student16.getName("Anton");
student16.getAge(31);
student16.getAverageGrade(10106);

console.log(student16.name, student16.age, student16.averageGrade);
