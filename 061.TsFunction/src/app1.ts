// 1. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10

interface iShop1 {
  id: number;
  title: string;
  count: number;
  price: number;
}

const shop1: iShop1[] = [
  { id: 1, title: "Часы", count: 10, price: 500 },
  { id: 2, title: "Смартфон", count: 33, price: 1500 },
  { id: 3, title: "Моноблок", count: 6, price: 2200 },
  { id: 4, title: "Ноутбук", count: 13, price: 3000 },
  { id: 5, title: "Планшет", count: 22, price: 2100 },
];

function countTitle(shop1: iShop1[]): iShop1[] {
  return shop1.filter((el: iShop1) => el.count > 10);
}

console.log(countTitle(shop1));
