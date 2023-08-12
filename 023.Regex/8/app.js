// 8. Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

const value = "243anton@#!";

function check(val) {
  try {
    let str=''
    for (let i = 0; i < val.length; i++) {
       if(i===/[a-zA-Z]/gm)
       str+=i 
    }
    if(val.length===str.length) throw new Error('Ошибка')
    return true
  } catch (error) {
    return error.message;
  }
}

const result = check(value);
console.log(result);
