// 5. Реализуйте класс Anagram (Анаграмма это слово или фраза ,
//     полученный путем
//     замены букв исходного слова или фразы).
//     Создать функцию для вывода ряда true,
//     если слова являются анаграммами.
//      Добавить проверки на ввод

class Anagram {
  str1;
  str2;

  isValid() {
    if (!isNaN(this.str1 || this.str2)) throw new Error("Ошибка ввода");
  }

  doCheck() {
    try {
        this.isValid()
      if (this.str1.split("").sort().join("") === this.str2.split("").sort().join("")) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return error.message;
    }
  }
}

const anagram = new Anagram();
anagram.str1 = "пила";
anagram.str2 = 'липа';
console.log(anagram.doCheck());
