// 8. Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.

const arr8: string[] = ["anna", "hohoh", "anton", "hello", "lol"];

let str8: string = "слова-палиндромы: ";

const arrPalendrom = arr8.filter((el: string) => {
  if (el == el.split("").reverse().join("")) {
    return el;
  }
});

for (let i = 0; i < arrPalendrom.length; i++) {
  str8 += arrPalendrom[i] + " ";
}

if (arrPalendrom.length > 0) {
  console.log(str8);
} else {
  console.log("слов-палиндромов не обнаружено");
}
