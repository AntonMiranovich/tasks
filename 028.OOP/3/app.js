// 3. Реализуйте класс WordString,
// который будет иметь следующие методы: метод
// reverseString, переворачивающий строку,
// метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery,
//  который делает заглавной первую
// букву каждого слова этой строки.

class WordString {
  isValid(str) {
    if (!isNaN(str)) throw new Error("вы передали число");
  }

  reversString(str) {
    try {
      this.isValid(str);
      let reverse = str.split("").reverse().join("");
      return reverse;
    } catch (error) {
      return error.message;
    }
  }

  upperFirst(str) {
    try {
      this.isValid(str);
      let upper = str[0].toUpperCase() + str.slice(1);
      return upper;
    } catch (error) {
      return error.message;
    }
  }

  upperEvery(str) {
    try {
      this.isValid(str);
      const strArr = str.split(" ");
      let newStr = "";
      for (let i = 0; i < strArr.length; i++) {
        newStr += strArr[i][0].toUpperCase() + strArr[i].slice(1) + " ";
      }
      return newStr;
    } catch (error) {
      return error.message;
    }
  }
}

const wordString = new WordString();
const reverse = wordString.reversString("test");
console.log(reverse);

const upper = wordString.upperFirst("test");
console.log(upper);

const upperAll = wordString.upperEvery("hello world");
console.log(upperAll);
