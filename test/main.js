persons = [

    {
        id:0,
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fapi.time.com%2Fwp-content%2Fuploads%2F2017%2F12%2Fterry-crews-person-of-year-2017-time-magazine-2.jpg&imgrefurl=https%3A%2F%2Ftime.com%2F5049671%2Fterry-crews-interview-transcript-person-of-the-year-2017%2F&tbnid=UJOu7Z9OtzrXCM&vet=12ahUKEwjjnZ7izKz1AhWByioKHXKCBCAQMygPegUIARD7AQ..i&docid=myHq2S306pa3mM&w=2036&h=3055&q=images%20person&ved=2ahUKEwjjnZ7izKz1AhWByioKHXKCBCAQMygPegUIARD7AQ",
        description:"Cras sit amet diam sed metus interdum fringilla. Nulla volutpat semper hendrerit. Vestibulum et consectetur metus. Suspendisse potenti. Etiam id massa tellus. Nullam tristique porta odio quis consequat. Sed ut tempor risus. Nulla imperdiet justo quis metus mattis varius. Suspendisse potenti. Nunc ut fermentum risus, vitae sollicitudin dolor.",
        jobs : ["Designer", "Android Developer"],
    },
    {
        id:1,
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.now.howstuffworks.com%2Fmedia-content%2F0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg&imgrefurl=https%3A%2F%2Fplay.howstuffworks.com%2Fquiz%2Fwhat-kind-of-person-are-you&tbnid=ioc8TekMD0xRiM&vet=12ahUKEwjjnZ7izKz1AhWByioKHXKCBCAQMygTegUIARCDAg..i&docid=LXtvfEqq4Hfp2M&w=1920&h=1080&q=images%20person&ved=2ahUKEwjjnZ7izKz1AhWByioKHXKCBCAQMygTegUIARCDAg",
        description:"Cras sit amet diam sed metus interdum fringilla. Nulla volutpat semper hendrerit. Vestibulum et consectetur metus. Suspendisse potenti. Etiam id massa tellus. Nullam tristique porta odio quis consequat. Sed ut tempor risus. Nulla imperdiet justo quis metus mattis varius. Suspendisse potenti. Nunc ut fermentum risus, vitae sollicitudin dolor.",
        jobs : ["Designer", "Jeavscript Developer"],
    },
    {
        id:2,
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.generated.photos%2Fvue-static%2Fface-generator%2Flanding%2Fwall%2F20.jpg&imgrefurl=https%3A%2F%2Fgenerated.photos%2Fface-generator&tbnid=or4grAwFt4c4kM&vet=12ahUKEwjjnZ7izKz1AhWByioKHXKCBCAQMygZegUIARCVAg..i&docid=zTQhMgg7BgzjMM&w=388&h=388&q=images%20person&ved=2ahUKEwjjnZ7izKz1AhWByioKHXKCBCAQMygZegUIARCVAg",
        description:"Cras sit amet diam sed metus interdum fringilla. Nulla volutpat semper hendrerit. Vestibulum et consectetur metus. Suspendisse potenti. Etiam id massa tellus. Nullam tristique porta odio quis consequat. Sed ut tempor risus. Nulla imperdiet justo quis metus mattis varius. Suspendisse potenti. Nunc ut fermentum risus, vitae sollicitudin dolor.",
        jobs : ["Designer", "Java Developer"],
    }



];





next = document.querySelector(".btn-next");
prec = document.querySelector(".btn-prec");

next.addEventListener("click", () =>{
    

    for(let i = 0; i < persons.length - 1; i++){
        console.log(persons[i]);
    }

})

prec.addEventListener("click", () =>{
    console.log("hello");
    for(let i = 0; i < persons.length + 1 ; i--){
        console.log(persons[i]);
    }
})