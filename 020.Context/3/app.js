// 3. Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru. False в противном случае

const email = "anton@gmail.com";

function checkEmail(arr) {
  let obj = {};
  obj.email = arr;
  obj.active = (arr.includes("@") && arr.includes(".com")) || arr.includes(".ru") ? true : false;
    return obj
}

const obj = checkEmail(email);

console.log(obj);
