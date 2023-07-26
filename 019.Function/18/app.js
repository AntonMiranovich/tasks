// 18. Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”.
// Функция должна преобразовать строку в формат “xxxx-xx-xx”. 


const data='07/10/1992'

function newData(str){
str=str.replaceAll('/','-').split('-').reverse().join('-')
return str
}

const result=newData(data)
console.log(result);


