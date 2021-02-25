let counter = document.querySelector(".counter");
const addCount = document.querySelector("#addCountBtn");
const lowerCount = document.querySelector("#lowerCountBtn");

let count = 0;

addCount.addEventListener("click", increaseCounter);
lowerCount.addEventListener("click", decreaseCounter);

function increaseCounter(){
  count++;
  counter.innerHTML = count;
  if(counter.innerHTML >"0"){
    counter.style.color = "rgb(49, 231, 125)";
  } else if(counter.innerHTML === "0"){
    counter.style.color = "white";
  } 
  counter.animate([{opacity: "0.2"},{opacity: "1.0"}],{duration: 750, fill:"forwards"});
}

function decreaseCounter(){
  count--;
  counter.innerHTML = count;
  if(counter.innerHTML < "0"){
    counter.style.color = "red";
  } else if (counter.innerHTML === "0"){
    counter.style.color = "white";
  }
  counter.animate([{opacity: "0.2"},{opacity: "1.0"}],{duration: 750, fill: "forwards"});
}