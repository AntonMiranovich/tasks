// 2. На входе строка в виде пароля.
//  Необходимо написать функцию на проверку, что
// пароль является надежным
//  (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const str = "Anton-123456";

function doPassword(str) {
  if (str.length < 8) return "недостаточно символов";
  let countNum = 0;
  let countToUpper = 0;
  let countToLower = 0;
  let countSymbol = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      countNum++;
    } else {
      str[i].toUpperCase() === str[i] ? countToUpper++ : countToLower++;
    }
  }
  if (str.includes("@") || str.includes("-") || str.includes("$")) {
    countSymbol++;
  }
  if (
    countNum === 0 ||
    countToLower === 0 ||
    countToUpper === 0 ||
    countSymbol === 0
  ) {
    return "ненадежный пороль";
  } else {
    return "надежный пороль";
  }
}

console.log(doPassword(str));

 
