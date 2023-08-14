// 9. Банкоматы позволяют использовать 4 или 6 значные PIN-коды, а PIN-коды не
// могут содержать ничего, кроме ровно 4 или ровно 6 цифр. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать
// "1234“ -> true
// "12345“ -> false
// "a234“ -> false

const pin = "243116";


function checkPin(pin) {
  try {
    if (isNaN(pin))
      throw new Error(`В веденном пин коде присутствуют не только цифры`);
    if (!/^[0-9]{4}$/gm.test(pin) && !/^[0-9]{6}$/gm.test(pin))
      throw new Error("Пин введен неверно");
    return true;
  } catch (error) {
    return error.message;
  }
}

const resultCheck = checkPin(pin);
console.log(resultCheck);
