// Найдите минимальное значение в массиве используя цикл

let a=[2, 5, 65, 105, 3, 4, 205, 7];

let min=a[0];

for(let i=0;i<a.length;i++){
    if(a[i]<min){
        min=a[i]
    }
}

console.log(min);
