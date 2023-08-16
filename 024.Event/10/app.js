// После нажатия на кнопку «Разблокировать» мы можем вносить изменения в инпут.
//  После нажатия на заблокировать данное действие запрещается,
//  тем самым выключая возможность редактирования значения инпута

const btnLock = document.querySelector(".lock");
const btnUnlock = document.querySelector(".unlock");
const inp = document.querySelector("input");

btnLock.addEventListener("click", function () {
  inp.disabled = true;
});

btnUnlock.addEventListener("click", function () {
  inp.disabled = false;
});
