// 4. На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать


const str='antonmir@gmail.com'

function checkEmail(str_){
try{
if(!/^[\w\.\-\_\$]+@+[a-z]+\.[a-z]{2,4}$/g.test(str_)) throw new Error('не правильная почта')
return true
}catch(error){
    return error.message
}
}

const result=checkEmail(str)
console.log(result);