// 18. Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)

interface iBook {
  name: string;
  nameBook: string;
}

const book: iBook[] = [
  { name: "Булгаков", nameBook: "Мастер и Маргарита" },
  { name: "Оруэлл", nameBook: "1984" },
  { name: "Булгаков", nameBook: "Белая гвардия" },
];

const res18: iBook[] = book.filter((el: iBook) => {
  if (el.name == "Булгаков") return el;
});

console.log(res18);
