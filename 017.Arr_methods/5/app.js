// На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// противном случае false

let arr = [];
let arr2 = [];

for (let i = 1; i <= 5; i++) {
  arr.push(prompt());
}

for (let i = 1; i <= 5; i++) {
  arr2.push(prompt());
}

arr.join('') === arr2.join('') ? console.log(true) : console.log(false);
