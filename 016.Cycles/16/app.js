//Дано число 7, найдите все числа кратные 7 до 100

let check=''

for (let i = 7; i <= 100; i+=7) {
    check+=i+';'
}
console.log(check);

