// 5. На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать

const url = "https://redex101.com";

function testUrl(url_) {
  try {
    if (!/^(http|https):\/\/[a-z0-9]+\.(com|by|ru|net)$/g.test(url_)) {
      throw new Error("неверное названия сайта");
    }
    return true;
  } catch (error) {
    return error.message;
  }
}

const result = testUrl(url);
console.log(result);
