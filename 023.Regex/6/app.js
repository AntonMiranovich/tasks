// 6. На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

const value = "C:/Users/Admin/Desktop/test.txt";

function check(val) {
  try {
if(!/^[A-Z]:(\\|\/)[A-Za-z]+(\\|\/)[A-Za-z]+(\\|\/)[A-Za-z]+(\\|\/)[A-Za-z]+\.(txt|img|exe)$/gm.test(val)) throw new Error('Введен неверный путь')
return true
  } catch (error) {
    return error.message;
  }
}

const result = check(value);
console.log(result);
