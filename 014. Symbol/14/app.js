// На вход подается строка в виде электронной почты. Если строка содержит “@” и
// оканчивается на .com, .ru, то вывести true, иначе false

let a = prompt().toLowerCase();

console.log((a.endsWith('.com') || a.endsWith('.ru')) && a.includes('@') ? true : false);