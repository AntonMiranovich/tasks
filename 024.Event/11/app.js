// По нажатию на кнопку поменять местами значения 2 инпутов.

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const inp1 = document.querySelector(".inp1");
  const inp2 = document.querySelector(".inp2");
  let tempInp1 = inp1.value;
  let tempInp2 = inp2.value;
  inp1.value = tempInp2;
  inp2.value = tempInp1;
});
