const sayisalLoto = () => {
  let arr = [];
  let sayi;
  let aynisiVar;
  for (let i = 1; i <= 6; i++) {
    do {
      aynisiVar = false;
      sayi = Math.floor(Math.random() * 49) + 1;
      if (arr.includes(sayi)) {
        aynisiVar = true;
      }
    } while (aynisiVar);
    arr.push(sayi);
  }
  return arr;
};

document.getElementById("buton").addEventListener("click", () => {
  document.getElementById("zahl1").innerHTML = "";
  let dizi = sayisalLoto();
  for (const item of dizi) {
    document.getElementById(
      "zahl1"
    ).innerHTML += `<div class="zahl text-white border border-0 rounded-circle border-black  bg-info  fw-bold"><span class='spanItem'>${item}</span></div>`;
  }
});
