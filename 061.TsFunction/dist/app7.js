// 7. У вас есть массив объектов вида приведенного в приложении. Необходимо 
// вывести тот товар, где количество * прайс является наибольшим значением
const shop7 = [
    { id: 1, title: "Часы", count: 10, price: 500 },
    { id: 2, title: "Смартфон", count: 33, price: 1500 },
    { id: 3, title: "Моноблок", count: 6, price: 2200 },
    { id: 4, title: "Ноутбук", count: 13, price: 3000 },
    { id: 5, title: "Планшет", count: 22, price: 2100 },
];
function maxPrice7(shop7) {
    let maxPriceTitle;
    let coutnMaxPrice = 0;
    shop7.forEach((el) => {
        if (el.price * el.count > coutnMaxPrice) {
            coutnMaxPrice = el.price * el.count;
            maxPriceTitle = el;
        }
    });
    return maxPriceTitle;
}
console.log(maxPrice7(shop7));
