// 14. Напишите функцию, генерирующую пароль из 8 символов. (Math.random)

function pass(){
    passw=''
    for (let i = 0; i < 9; i++) {
        passw+= count = Math.floor(Math.random() * 10)
    }
    console.log(passw);
}

pass()