// Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы


let a = prompt('ВВедите название').trim();

if (isNaN(a)) {
    console.log(a == 'hschool' ? 'true' : 'false');
} else {
    console.log('Ошибка ввода');
}



