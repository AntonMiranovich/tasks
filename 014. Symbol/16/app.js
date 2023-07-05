// На вход подается строка из нескольких слов. Необходимо преобразовать каждое
// предложение в хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany






let a = 'hSСhOol СomPAnY'.replaceAll(' ', '').toLowerCase();
if (isNaN(a)) {
    console.log(`#${a}`);
} else {
    console.log('Введите текст')
}