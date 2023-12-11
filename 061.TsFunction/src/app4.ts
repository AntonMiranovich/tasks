// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести итоговую стоимость на складе.
// Итоговая стоимость = количество * цена + ...

interface iShop4 {
  id: number;
  title: string;
  count: number;
  price: number;
}

const shop4: iShop4[] = [
  { id: 1, title: "Часы", count: 10, price: 500 },
  { id: 2, title: "Смартфон", count: 33, price: 1500 },
  { id: 3, title: "Моноблок", count: 6, price: 2200 },
  { id: 4, title: "Ноутбук", count: 13, price: 3000 },
  { id: 5, title: "Планшет", count: 22, price: 2100 },
];

function priceShop4(shop4:iShop4[]): number {
  return shop4.reduce((sum: number, el: iShop4) => {
    return (sum += el.count * el.price);
  }, 0);
}

console.log(priceShop4(shop4));
