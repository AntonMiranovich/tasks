// 10. Создайте класс Product, который содержит объект product (продукт) с полями и
// price (цена продукта), title (название продукта). Реализуйте метод
// displayProductInfo(), который выводит массив продуктов, где цена > 20. Создайте
// экземпляр класса Product и вызовите метод displayProductInfo().
class Product {
    product = [
        {
            price: 25,
            title: "Clock",
        },
        {
            price: 29,
            title: "Phone",
        },
        {
            price: 10,
            title: "Mouse",
        },
    ];
    displayProductInfo() {
        const arr10 = [];
        this.product.forEach((el) => {
            el.price > 20 ? arr10.push(el) : null;
        });
        return arr10;
    }
}
const product = new Product();
console.log(product.displayProductInfo());
