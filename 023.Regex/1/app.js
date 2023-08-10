// 1. На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать

const str = "123";

function isValid(str) {
  try {
    if (!/^[\d]+$/g.test(str)) {
      throw new Error("не подгохит");
    }
    return true;
  } catch (error) {
    return error.message;
  }
}

const result = isValid(str);
console.log(result);
