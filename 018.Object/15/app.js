// 15. На входе массив чисел. На основе этого массива сформировать объект, где ключ –
// число массива, значение – true/false. True – число четное, false – нечетное

const arr = [1, 2, 3, 4, 5];
const obj = {};

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = arr[i] % 2 === 0 ? true : false;
}
console.log(obj);
