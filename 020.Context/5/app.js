// 5. На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const pass = "121dasaAWQ@S";

function checkPass(passw) {
  let specSymbol;
  let upperCase;
  let includeNum;
  let includeLetter;
  let passLenght;

if(passw.includes("@") || passw.includes("$") || passw.includes("#")){
    specSymbol = true
}else{
    specSymbol = false
}

  for (let i = 0; i < passw.length; i++) {
    if (passw[i] === passw[i].toUpperCase()) {
      upperCase = true;
      break;
    } else {
      upperCase = false;
    }
  }

  for (let i = 0; i < passw.length; i++) {
    if (!isNaN(passw[i])) {
      includeNum = true;
      break;
    } else {
      includeNum = false;
    }
  }

  for (let i = 0; i < passw.length; i++) {
    if (isNaN(passw[i])) {
      includeLetter = true;
      break;
    } else {
      includeLetter = false;
    }
  }

  passw.length >= 8 ? (passLenght = true) : (passLenght = false);

  return specSymbol  &&
    upperCase  &&
    includeNum  &&
    includeLetter &&
    passLenght == true
    ? "Надежный пороль"
    : "Ненадежный пороль";
}

const result = checkPass(pass);
console.log(result);

