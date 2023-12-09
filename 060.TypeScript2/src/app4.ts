// 4. Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов

const arr4: string[] = [];

const n4: number = 3;

for (let i = 0; i < n4; i++) {
  arr4.push(prompt(`введите значение ${i + 1} элемента`));
}

const res4: boolean = arr4.some((el: string) => el.length > 5);

console.log(res4);
