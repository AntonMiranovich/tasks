// 15. На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]
const arr15 = ["hschool", "company"];
const res15 = [];
arr15.forEach((el) => res15.push("!" + el));
console.log(res15);
