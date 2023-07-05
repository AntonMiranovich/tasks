// Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
// fullstack => ua

let a = 'fullstack'.toLowerCase();

for (let i = 0; i < a.length; i++) {
    let b = ''
    if (a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u' || a[i] == 'y') {
        b += a[i];
    }
    console.log(b);
}



