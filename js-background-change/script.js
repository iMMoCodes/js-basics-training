// valitsee osat
const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector("body");
// tekee jonon (array)
const colors = ["black", "red", "Yellow", "#25b255"];
// rekisteröi click
colorBtn.addEventListener("click",changeColor);
// vaihtaa taustaa
function changeColor (){
//  bodyBcg.style.backgroundColor = colors[2];
let random = Math.floor(Math.random() * colors.length);
bodyBcg.style.backgroundColor = colors[random];
}