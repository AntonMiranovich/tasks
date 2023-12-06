// 10. Напишите программу, которая определяет, является ли заданная строка 
// анаграммой (состоит из тех же символов, но в другом порядке) другой строки.

const strAna1:string='Anton'
const strAna2:string='noAnt'

if(strAna1.split("").sort().join("")==strAna2.split("").sort().join("")){
    console.log(`слово ${strAna1} является анаграммой слова ${strAna2}`);  
}else{
    console.log(`слово ${strAna1} не является анаграммой слова ${strAna2}`); 
}
