// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false


let url = "//codechick.io/tutorials/javascript/js-for-loop.com";

if (url.includes('http') && url.includes('/') && (url.includes('.com') || url.includes('.ru'))) {
    console.log(true);
} else {
    console.log(false);
}

