// 3. На входе статичный объект и строка str.
//  Написать функцию на поиск в объекте
// значения str. Values

const obj = {
  id: "email",
  name: "anton",
  age: 18,
};

const str = "email";

function searchStr(obj, str) {
  try {
    const string = Object.values(obj);
    if (string.includes(str) === true) {
      return string.includes(str);
    } else {
      throw new Error("обьект не содержит указоного ключа");
    }
  } catch (error) {
    return error.message;
  }
}

console.log(searchStr(obj, str));
