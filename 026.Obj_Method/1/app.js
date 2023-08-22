// 1. На входе статичный объект и строка str.
// Необходимо найти в объекте ключ str и
// вывести true при наличии совпадения, false
// в противном случае

const obj = {
  id: "email",
  name: "anton",
  age: 18,
};


const str='id'
const bool=obj.hasOwnProperty(str)
console.log(bool);
