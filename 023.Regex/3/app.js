// 3. На вход подается строка из 2 и более слов. Необходимо все симводы заменить на
// пустую строку.

const str = "Anton@Miranovich-30";

function replaceStr(str_) {
  try {
    let newStr = str_.replaceAll(/[@-]/g, " ");
    if (str_.length === 0) {
      throw new Error("строка пустая");
    }
    return newStr;
  } catch (error) {
    return error.message;
  }
}

const result = replaceStr(str);
console.log(result);
