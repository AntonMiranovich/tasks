// На вход подается строка ''. Необходимо вернуть имя файла
// (подстрока после последнего символа “/" ) из полного пути к файлу('file.txt')


let a = '/home/user/dir/file.txt'.split('');

console.log(a.slice(a.lastIndexOf('/') + 1).join(''));
