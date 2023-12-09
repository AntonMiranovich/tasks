// 22. Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.

interface iPeople {
  name: string;
  price: number;
}

const people: iPeople[] = [
  { name: "Anton", price: 5000 },
  { name: "Andrei", price: 1000 },
  { name: "Anna", price: 3000 },
];

const res22: number = people.reduce((sum: number, el: iPeople) => {
  return (sum += el.price / people.length);
}, 0);

console.log(`средняя зарплата ровна ${res22}`);
