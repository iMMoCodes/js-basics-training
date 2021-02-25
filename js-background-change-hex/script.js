const hexNumbers = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const hexBtn = document.querySelector(".hexBtn");
const bodyBcg = document.querySelector("body");
const hex = document.querySelector(".hex");

hexBtn.addEventListener("click",getHex);

function getHex (){
let hexColor = "#";

// to get 6 values from Array hexNumbers
for(let i = 0; i < 6; i++){
let random = Math.floor(Math.random() * hexNumbers.length);
hexColor += hexNumbers[random];
}

bodyBcg.style.backgroundColor = hexColor; //changes background
hex.innerHTML = hexColor; //adds hex code to span in HTML
}