// 13. Напишите алгоритм для нахождения факториала числа

const num=10

function doFact(n){
if(n<=1) return 1
return n*doFact(n-1)
}

console.log(doFact(num));