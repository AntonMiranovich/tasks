// 23. Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...

interface iBook23 {
  name: string;
  price: number;
  count: number;
}

const book23: iBook23[] = [
  { name: "Мастер и Маргарита", price: 60, count: 10 },
  { name: "1984", price: 55, count: 5 },
  { name: "Белая гвардия", price: 45, count: 7 },
];

const res23: number = book23.reduce((sum: number, el: iBook23) => {
  return (sum += el.price * el.count);
}, 0);

console.log(`сумарная стоимость всех товаров ${res23}`);
