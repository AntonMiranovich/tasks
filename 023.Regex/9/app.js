// 9. Банкоматы позволяют использовать 4 или 6 значные PIN-коды, а PIN-коды не
// могут содержать ничего, кроме ровно 4 или ровно 6 цифр. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать
// "1234“ -> true
// "12345“ -> false
// "a234“ -> false

const pin1 = "2436";
const pin2 = "243691";

function checkPin(pin1, pin2) {
  try {
    if (isNaN(pin1) || isNaN(pin2))
      throw new Error(`В веденном пин коде присутствуют не только цифры`);
    if (!/^[0-9]{4}$/gm.test(pin1) && !/^[0-9]{6}$/gm.test(pin1))
      throw new Error("Пин1 введен неверно");
    if (!/^[0-9]{4}$/gm.test(pin2) && !/^[0-9]{6}$/gm.test(pin2))
      throw new Error("Пин2 введен неверно");
    return true;
  } catch (error) {
    return error.message;
  }
}

const resultCheck = checkPin(pin1, pin2);
console.log(resultCheck);
