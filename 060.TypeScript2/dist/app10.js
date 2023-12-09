// 10. Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.
const arr10 = ["anton", "my", "name"];
const alfa10 = "aeiouy";
for (let el = 0; el < arr10.length; el++) {
    for (let i = 0; i < alfa10.length; i++) {
        arr10[el].includes(alfa10[i]) ? null : arr10[el].replaceAll(alfa10[i], "");
    }
}
console.log(alfa10);
