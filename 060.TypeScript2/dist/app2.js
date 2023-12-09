// 2. Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'.
const arrStr = ["hello", "my", "name", "anton"];
const search = "a";
const arrRes = arrStr.filter((el) => {
    if (el.includes(search)) {
        return el;
    }
});
console.log(arrRes);
