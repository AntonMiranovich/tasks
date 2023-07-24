// 17. Найти значение массива, повторяющееся в нем наибольшее количество раз

const arr = [1, 1, 1, 2, 3, 4, 4, 4, 3, 2, 5, 6, 7, 6, 6, 5, 4, 1, 1, 1];
let obj = {};

//Есди есть то добовляет к эл+1
for (let el of arr) {
  obj[el] ? obj[el] += 1 : obj[el] = 1;
}

const repetition = [];
for (let key in obj) {
    repetition.push(obj[key]);
}

const maxNum = Math.max(...repetition);

//for для того чтобы знать какое значение повторяется чаще 
for (let key in obj) {
  obj[key] == maxNum ?
     console.log(`Значение массива ${key} повторяющееся в нем наибольшее количество раз,колличество повторений ${obj[key]} раз`): null;
}
