// На вход подается число произвольной длины. Необходимо обратиться к каждому
// значению числа и выявить четность/нечетность
// 1234 -> 1 неч 2 чет 3 неч 4 чет
// 444444 -> 4 чет 4 чет 4 чет 4 чет 4 чет 4 чет

//Вариант 1:
const a = prompt().trim();

for (let i = 0; i < a.length; i++) {

    console.log(a[i] % 2 === 0 ? `${a[i]} чет` : `${a[i]} неч`);
}


//Вариант 2:

const b = prompt().trim();
let c = '';

for (let i = 0; i < b.length; i++) {
    c += (b[i] % 2 === 0 ? ` ${b[i]}-чет ` : ` ${b[i]}-неч `);
}
console.log(c);