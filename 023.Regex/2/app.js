// 2. На вход подается строка вида “имя фамилия возраст”. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const str = "Anton Miranovich 30";

function checkStr(str_) {
  try {
    if (!/^[A-z]+ [A-z]+ [0-9]+$/g.test(str_))  throw new Error("неверный формат ввода");
    return true;
  } catch (error) {
    return error.message;
  }
}

const result = checkStr(str);
console.log(result);