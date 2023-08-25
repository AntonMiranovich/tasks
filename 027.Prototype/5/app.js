// 5. По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть
// символов 1 строки есть в другой.
// 'rkqodlw', 'world‘ – true
// 'kacvtas', 'steak' – false

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const inp1 = document.querySelector(".inp1");
  const inp2 = document.querySelector(".inp2");
  const result = document.querySelector("div");

  let check = 0;
  for (let i = 0; i < inp2.value.length; i++) {
    if (inp1.value.includes(inp2.value[i])) {
      check++;
    }
  }

  if (inp2.value.length === check) {
    result.innerHTML = true;
  } else {
    result.innerHTML = false;
  }

  inp1.value=''
  inp2.value=''

});
