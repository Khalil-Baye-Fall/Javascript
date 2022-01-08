const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

let count = 0;
// console.log(btns);

btns.forEach(function(item){
    item.addEventListener("click", function(e){
        const btn = e.currentTarget.classList;
        
        if(btn.contains("decrease")){
            count--;
        }
        else if(btn.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }

        value.textContent = count;
        
        if (count > 0){
            value.style.color = "green";
        }
        else if (count < 0){
            value.style.color = "red";
        }
        else{
            value.style.color = "black"
        }

    })
})