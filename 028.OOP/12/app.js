// 12. Реализуйте класс Hashtag. В него передается число n – количество элементов
// массива. На основании числа формируется динамический массив из n элементов
// внутри класса. Создать функцию doHashtag, заполняющую новый массив из
// элементов, каждое значение которого имеет вид #name

class Hashtag {
  isValid(n) {
    if (isNaN(n)) throw new Error("Вы ввели не коректное число N");
  }

  doHashtag(n) {
    try {
      this.isValid(n);
      const arr = [];
      for (let i = 0; i < n; i++) {
        const promtUser = prompt("введите слово");
        arr.push(`#${promtUser}`);
      }
      return arr;
    } catch (error) {
      return error.message;
    }
  }
}

const hashtag = new Hashtag();
const n = prompt("введите количество слов");
console.log(hashtag.doHashtag(n));
