// 9. Напишите программу, которая принимает строку и возвращает новую строку, в
// которой все символы уникальны (не повторяются). Например, для строки "hello"
// результатом должна быть строка "helo".
const string = "qweqweqweqweqwqsdwefweqwASADQW";
let res = '';
for (let i = 0; i < string.length; i++) {
    res.includes(string[i]) ? null : res += string[i];
}
console.log(res);
