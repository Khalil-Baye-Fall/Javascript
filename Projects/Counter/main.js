// set initial count
let count = 0;

let value = document.querySelector(".value");
const btn_decrease = document.querySelector(".decrease");
const btn_reset = document.querySelector(".reset");
const btn_increase = document.querySelector(".increase");

btn_decrease.addEventListener("click", () =>{
    console.log("Button decrease clicked");
    count -= 1;
    value.innerHTML = count;
    if (count < 0){
        value.style.color = "red";
    }
    else if(count == 0){
        value.style.color = "black";
    }

})

btn_reset.addEventListener("click", () =>{
    console.log("Button reset clicked");
    count = 0;
    value.innerHTML = count;
    value.style.color = "black";
})

btn_increase.addEventListener("click", () =>{
    console.log("Button increase clicked");
    count++;
    value.innerHTML = count;
    if (count > 0){
        value.style.color = "green";
    }
    else if(count == 0){
        value.style.color = "black";
    }
  
})