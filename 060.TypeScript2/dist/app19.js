// 19. Создайте массив объектов, представляющих книги, и отобразите книги где цена
// каждой > 50 (price – одно из полей объекта)
const book19 = [
    { nameBook: "Мастер и Маргарита", price: 60 },
    { nameBook: "1984", price: 55 },
    { nameBook: "Белая гвардия", price: 45 },
];
const res19 = book19.filter((el) => el.price > 50);
console.log(res19);
