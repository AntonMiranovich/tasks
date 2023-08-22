// *Дана таблица c 1 колонкой.
//  Под таблицей сделайте форму (инпут и кнопка),
//   с помощью которой можно будет добавить нового значение
//    в таблицу

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const inp = document.querySelector("input");
  const table = document.querySelector(".table");

  let trNew=document.createElement('tr')
  let tdNew=document.createElement('td')

  tdNew.innerHTML=inp.value
  table.appendChild(trNew)
  trNew.appendChild(tdNew)
  inp.value=''
});
