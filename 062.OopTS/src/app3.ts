// 3. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, age происходит в конструкторе класса. Создайте
// несколько экземпляров класса Student и выведите свойства.

class Student3 {
  constructor(name: string, age: number) {
    this.name3 = name;
    this.age3 = age;
  }

  name3: string;
  age3: number;
}

const student3 = new Student3("Anton", 30);
console.log(student3.name3);
console.log(student3.age3);
