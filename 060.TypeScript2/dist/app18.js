// 18. Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)
const book = [
    { name: "Булгаков", nameBook: "Мастер и Маргарита" },
    { name: "Оруэлл", nameBook: "1984" },
    { name: "Булгаков", nameBook: "Белая гвардия" },
];
const res18 = book.filter((el) => {
    if (el.name == "Булгаков")
        return el;
});
console.log(res18);
