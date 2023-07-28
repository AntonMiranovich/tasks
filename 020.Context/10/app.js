// 10. Напишите функцию, которая принимает два параметра: предложение из
// нескольких слов и букву. Функция должна подсчитывать количество вхождений
// указанной буквы в строке. Добавить проверки

const str1 = "hello , i am anton";
const str2 = "a";

function checkStr(str1, str2) {
  let check = 0;
  if (isNaN(str1) && isNaN(str2)) {
    for (let i = 0; i < str1.length; i++) {
      str1[i] == str2 ? (check += 1) : null;
    }
  }else{
    console.log('значение не слова или буквы');
  }
  return check
}

const result = checkStr(str1, str2);
console.log(`количество вхождений указанной буквы в строке ровна ${result}`);
