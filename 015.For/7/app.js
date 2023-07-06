// Преобразуйте первую букву строки в верхний регистр несколькими способами

const a = 'hello Arina'.toLowerCase();

for (let i = 0; i < a.length; i++) {
    if (i === 0) {
        console.log(a[i].toUpperCase() + a.slice(1));
    }
}

console.log(a[0].toUpperCase() + a.slice(1));



