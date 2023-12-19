// 11. Создайте абстрактный класс University, который содержит абстрактный метод
// getStudentById и поле students – массив объектов. Student – класс наследник,
// реализующий абстрактный метод getStudentById.

interface iStudents {
  id: number;
  name: string;
  surname: string;
  age: number;
}

abstract class University {
  students: iStudents[] = [
    {
      id: 1,
      name: "Anton",
      surname: "Miranovich",
      age: 31,
    },
    {
      id: 2,
      name: "Test",
      surname: "Test",
      age: 31,
    },
    {
      id: 3,
      name: "Testik",
      surname: "Testik",
      age: 31,
    },
  ];

  abstract getStudentById(num: number): iStudents[];
}

class Student extends University {
  getStudentById(num: number): iStudents[] {
    return this.students.filter((el: iStudents) => el.id == num);
  }
}

const student = new Student();
console.log(student.getStudentById(2));
