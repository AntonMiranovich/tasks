// 14. Напишите функцию, генерирующую пароль из 8 символов. (Math.random)

function doPass() {
  passw = "";
  for (let i = 0; i < 9; i++) {
    passw += count = Math.floor(Math.random() * 9);
  }
  console.log(passw);
}

doPass();
