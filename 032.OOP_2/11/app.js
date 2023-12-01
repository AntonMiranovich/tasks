// 11. Реализуйте класс WordString, который содержит: конструктор со входной строкой;
// метод ReverseString(). Ваша задача перевернуть исходную строку

class WordString {
  constructor(str) {
    this.str = str;
  }

  ReverseString() {
    return this.str.split('').reverse().join('')
  }
}

const str = "Anton";
const wordString = new WordString(str);
console.log(wordString.ReverseString());

