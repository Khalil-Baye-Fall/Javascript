const form = document.querySelector("#form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Form submitted!");
    console.log(username.value +" your password: "+ password.value);
});

