// 4. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, age происходит в getter, setter класса. Создайте
// экземпляр класса Student и выведите свойства.

class Student4 {
  name: string;
  age: number;

  setName(name_: string): void {
    this.name = name_;
  }

  setAge(age_: number): void {
    this.age = age_;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }
}

const student4 = new Student4();

student4.setName("Anton");
student4.setAge(31);
console.log(student4.getName());
console.log(student4.getAge());


