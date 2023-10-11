const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const inp = document.querySelector("input").value;
  const glas = document.querySelector(".glas");
  const soglas = document.querySelector(".soglas");

  const strGlass = "aiuyeo";
  let countGlas = 0;
  for (let i = 0; i < inp.length; i++) {
    if (strGlass.includes(inp[i])) {
      countGlas += 1;
    }
  }
  const countSoglas = inp.length - countGlas;
  glas.innerHTML = countGlas;
  soglas.innerHTML = countSoglas;
});
