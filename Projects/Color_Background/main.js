const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const color = document.querySelector(".color");
const btn = document.querySelector("#btn")

btn.addEventListener("click", changeColor);

function changeColor(){
    let randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
}

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}