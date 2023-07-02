// Пользователь вводит строку. Необходимо посчитать количество гласных

const a = prompt().trim().toLowerCase();
let b = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] === 'a' || a[i] === 'i' || a[i] === 'o' || a[i] === 'e' || a[i] === 'u') {
        b += 1
    };
}
console.log(b);


