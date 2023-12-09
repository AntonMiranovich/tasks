// 2. Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'.

const arrStr: string[] = ["hello", "my", "name", "anton"];
const search: string = "a";

const arrRes: string[] = arrStr.filter((el: string) => {
  if (el.includes(search)) {
    return el;
  }
});

console.log(arrRes);
