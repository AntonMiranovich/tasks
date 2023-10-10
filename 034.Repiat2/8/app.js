//8. Необходимо по нажатию на кнопку включать музыку

const btn = document.querySelector("button");
const audio = document.querySelector("audio");

btn.addEventListener("click", () => {
  audio.src = "./song.mp3";
  audio.play();
});
