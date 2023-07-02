// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false


let url = prompt('ВВедите адрес');

if (url[0].includes('http') && url.includes('/') && url.includes('.ru') || url.includes('.com')) {
    console.log(true);
} else {
    console.log(false);
}

