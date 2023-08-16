// У вас есть кнопка. После каждого нажатия менять background.

const btn = document.querySelector("button");
let flag = 1;

btn.addEventListener("click", function () {
  if (flag === 1) {
    btn.style = "background-color:red";
    flag = 2;
  } else if (flag === 2) {
    btn.style = "background-color:green";
    flag = 3;
  } else if (flag === 3) {
    btn.style = "background-color:blue";
    flag = 1;
  }
});
