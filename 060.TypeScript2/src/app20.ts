// 20.Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)

interface iBook20 {
  nameBook: string;
  count: number;
}

const book20: iBook20[] = [
  { nameBook: "Белая гвардия", count: 390 },
  { nameBook: "Мастер и Маргарита", count: 840 },
  { nameBook: "1984", count: 680 },
];

let res20: iBook20;

let countNum: number = 0;

book20.forEach((el: iBook20) => {
  if (el.count > countNum) {
    countNum = el.count;
    res20 = el;
  }
});

console.log(res20);
