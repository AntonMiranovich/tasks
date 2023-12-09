// 11. На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты
const clientArr11 = [];
const n11 = 3;
for (let i = 0; i < n11; i++) {
    clientArr11.push(prompt("введите Email"));
}
const res11 = clientArr11.every((el) => /^[A-Za-z0-9]+\@[a-z]{2,5}\.[a-z]{2,5}$/gm.test(el));
console.log(res11);
