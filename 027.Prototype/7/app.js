// 7. Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина
// столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на
// кнопку вызывается функция, принимающая три параметра: количество столбов
// (≥ 1); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50
// сантиметров). Рассчитайте расстояние между первым и последним столбом в
// сантиметрах

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const inpNumPilar = document.querySelector(".numOfPilars");
  const inpDistance = document.querySelector(".distance");
  const inpWidth = document.querySelector(".widthOfPilars");
  const result = document.querySelector("div");

  result.innerHTML =
    inpNumPilar.value * (inpWidth.value / 100) +
    inpDistance.value * (inpNumPilar.value - 1);
});
