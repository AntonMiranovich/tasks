// 5. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом
const shop5 = [
    { id: 1, title: "Часы", count: 10, price: 500 },
    { id: 2, title: "Смартфон", count: 33, price: 1500 },
    { id: 3, title: "Моноблок", count: 6, price: 2200 },
    { id: 4, title: "Ноутбук", count: 13, price: 3000 },
    { id: 5, title: "Планшет", count: 22, price: 2100 },
];
function maxPrice(shop5) {
    let maxPriceTitle;
    let coutnMaxPrice = 0;
    shop5.forEach((el) => {
        if (el.price > coutnMaxPrice) {
            coutnMaxPrice = el.price;
            maxPriceTitle = el;
        }
    });
    return maxPriceTitle;
}
console.log(maxPrice(shop5));
