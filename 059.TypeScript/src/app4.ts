// 4. Создайте переменную grade и присвойте ей значение от 1 до 5. Используя
// оператор switch, выведите в консоль описание оценки (например, "Отлично",
// "Хорошо" и т.д.) в зависимости от значения переменной grade.

const grade: number = +prompt("введите оценку");

switch (grade) {
  case 1:
    console.log("vary bad");
    break;
  case 2:
    console.log("bad");
    break;
  case 3:
    console.log("normal");
    break;
  case 4:
    console.log("good");
    break;
  case 5:
    console.log("vary good");
    break;
  default:
    console.log("grade is not defound");
    break;
}
