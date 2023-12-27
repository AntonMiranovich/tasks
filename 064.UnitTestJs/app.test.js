// 1. Написать функцию которая принимает 2 числа и возводит 1 во 2 степень.
// Добавить необходимые проверки.
// Написать тест для функции

//task 1
// function doPow(a, b) {
//   if (typeof a == "string" || typeof b == "string") return false;
//   return a ** b;
// }

// describe("test doPow function", () => {
//   test("test toBe success", () => {
//     const res = doPow(2, 2);
//     expect(res).toBe(4);
//   });

//   test("test toBe false", () => {
//     const res = doPow("a", "b");
//     expect(res).toBeFalsy();
//   });
// });

// 2. Написать функцию которая принимает 2 числа и возвращает результат
// произведения 2 множителей. Добавить необходимые проверки.
// Написать тест для функции

//task 2
// function doMultiply(a, b) {
//   if (typeof a != "number" || typeof b != "number") return false;
//   if (!a || !b) return false;
//   return a * b;
// }

// describe("test doMultiply", () => {
//   test("test toBe success", () => {
//     const res = doMultiply(2, 3);
//     expect(res).toBe(6);
//   });

//   test("test toBe false", () => {
//     const res = doMultiply("a", "b");
//     expect(res).toBeFalsy();
//   });

//   test("test toBe false", () => {
//     const res = doMultiply();
//     expect(res).toBeFalsy();
//   });
// });

// 3. Написать функцию которая принимает массив чисел и находит сумму всех
// элементов. Добавить необходимые проверки.
// Написать тест для функции

// function doSum(arr) {
//   if (!arr.length) return false;
//   const res = arr.reduce((sum, el) => sum + el, 0);
//   if (typeof res != "number") return false;
//   return res;
// }

// describe("test doSum function", () => {
//   const arr = [1, 2, 3, 4, 5];
//   test("test toBe success", () => {
//     const res = doSum(arr);
//     expect(res).toBe(15);
//   });

//   test("test toBe false", () => {
//     const res = doSum([]);
//     expect(res).toBeFalsy();
//   });

//   test("test toBe false", () => {
//     const res = doSum([1, 2, "a", 4]);
//     expect(res).toBeFalsy();
//   });
// });

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10 и произведены в Германии
// Написать тест для функции

// function checkArr(arr) {
//   const filtered = arr.filter(
//     (el) => el.count > 10 && el.producer == "Германия"
//   );
//   if (!filtered.length) return false;
//   return filtered;
// }

// describe("test checkArr function", () => {
//   const arr = [
//     { id: 1, title: "Часы", count: 10, price: 500, producer: "Германия" },
//     { id: 2, title: "Смартфон", count: 33, price: 1500, producer: "Германия" },
//     { id: 3, title: "Моноблок", count: 6, price: 2200, producer: "Германия" },
//     { id: 4, title: "Ноутбук", count: 13, price: 3000, producer: "Китай" },
//     { id: 5, title: "Планшет", count: 22, price: 2100, producer: "Китай" },
//     { id: 6, title: "Телевизор", count: 4, price: 4100, producer: "Германия" },
//     {
//       id: 7,
//       title: "Холодильник",
//       count: 11,
//       price: 2400,
//       producer: "Германия",
//     },
//   ];

//   test("test toHaveLength", () => {
//     const res = checkArr(arr);
//     expect(res).toHaveLength(2);
//   });

//   test("toEqual", () => {
//     const res = checkArr(arr);
//     const equal = [
//       {
//         id: 2,
//         title: "Смартфон",
//         count: 33,
//         price: 1500,
//         producer: "Германия",
//       },
//       {
//         id: 7,
//         title: "Холодильник",
//         count: 11,
//         price: 2400,
//         producer: "Германия",
//       },
//     ];
//     expect(res).toEqual(equal);
//   });

//   test("to be false", () => {
//     const res = checkArr([]);
//     expect(res).toBeFalsy();
//   });
// });

// 5. У вас есть массив строковых значений, состоящий из номеров телефонов.
// Необходимо вывести значения массива без дубликатов. Добавить необходимые
// проверки.
// Написать тест для функции

// function isUnit(arr) {
//   const uniqArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number") return false;
//     if (!uniqArr.includes(arr[i])) uniqArr.push(arr[i]);
//   }
//   if (!uniqArr.length) return false;
//   return uniqArr;
// }

// describe("test checkArr function", () => {
//   const numberPhone = [
//     "375293217119",
//     "375293217119",
//     "421654987",
//     "123456789",
//   ];

//   test("test toGaveLength", () => {
//     const res = isUnit(numberPhone);
//     expect(res).toHaveLength(3);
//   });

//   test("toEqual", () => {
//     const res = isUnit(numberPhone);
//     const equal = ["375293217119", "421654987", "123456789"];
//     expect(res).toEqual(equal);
//   });

//   test("to be false", () => {
//     const res = isUnit([]);
//     expect(res).toBeFalsy();
//   });

//   test("test to be false", () => {
//     const res = isUnit([37529321, "375293217119", "421654987", "123456789"]);
//     expect(res).toBeFalsy();
//   });
// });

// 6. На входе статичный объект. Необходимо посчитать количество пар (ключ:
// значение) где значение число и вывести количество. Добавить необходимые
// проверки.
// Написать тест для функции

// function objLength(obj) {
//   if (Object.keys(obj).length == 0) return false;
//   if (typeof obj != "object") return false;
//   return Object.keys(obj).length;
// }

// describe("test objLength function", () => {
//   const obj = {
//     id: 1,
//     numberPhone: 231,
//     price: 10,
//   };

//   test("to be success", () => {
//     const res = objLength(obj);
//     expect(res).toBe(3);
//   });

//   test("to be falsy", () => {
//     const res = objLength({});
//     expect(res).toBeFalsy();
//   });

//   test("to be falsy", () => {
//     const res = objLength("anton");
//     expect(res).toBeFalsy();
//   });
// });

// 7. На входе статичный объект. Необходимо числовые значения удвоить на выходе.
// Написать тест для функции

// function sumObjNum(obj) {
//   let res = 0;
//   for (let key in obj) {
//     if (typeof obj[key] == "number") res += obj[key];
//   }
//   if (typeof res != "number") return false;
//   return res;
// }

// describe("test sumObjNum function", () => {
//   const obj = {
//     id: 1,
//     name: "Anton",
//     number: 10,
//     price: 40,
//   };

//   test("to be succses", () => {
//     const res = sumObjNum(obj);
//     expect(res).toBe(51);
//   });

//   test("to be falsy", () => {
//     const res = sumObjNum(25);
//     expect(res).toBeFalsy();
//   });
// });




// 8. На входе статичный объект. Необходимо сформировать массив из всх четных
// значений объекта.
// Написать тест для функции




// 9. На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо
// разбить данный одномерный массив на маленькие массивы в зависимости от
// того, какого число ввел пользователь. Добавить необходимые проверки.
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]
// Написать тест для функции

// 10. Реализуйте функцию, которая принимает в качестве параметра строку и
// возвращает массив без каких-либо элементов с одинаковым значением рядом
// друг с другом.
// Написать тест для функции
// 'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’]
// 'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’]
// '12233’ -> [1, 2, 3]
// Написать тест для функции
