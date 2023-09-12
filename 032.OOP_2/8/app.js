// 8. На странице расположен маркированный список. Пользователь кликает на
// каждый item списка. Необходимо отловить на какой из элементов нажал
// пользователь и отобразить в div расположенном ниже маркированного списка

const ulLi = document.querySelector("ul");

ulLi.addEventListener("click", function (event) {
  const res = document.querySelector("div");

  res.innerHTML = event.target.textContent;
});
