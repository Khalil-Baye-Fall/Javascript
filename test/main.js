persons = [

    {
        id:0,
        img: "images 1",
        name: "First person",
        description:"Cras sit amet diam sed metus interdum fringilla. Nulla volutpat semper hendrerit. Vestibulum et consectetur metus. Suspendisse potenti. Etiam id massa tellus. Nullam tristique porta odio quis consequat. Sed ut tempor risus. Nulla imperdiet justo quis metus mattis varius. Suspendisse potenti. Nunc ut fermentum risus, vitae sollicitudin dolor.",
        jobs : ["Designer", "Android Developer"],
    },
    {
        id:1,
        img: "images 2",
        name: "Second person",
        description:"Cras sit amet diam sed metus interdum fringilla. Nulla volutpat semper hendrerit. Vestibulum et consectetur metus. Suspendisse potenti. Etiam id massa tellus. Nullam tristique porta odio quis consequat. Sed ut tempor risus. Nulla imperdiet justo quis metus mattis varius. Suspendisse potenti. Nunc ut fermentum risus, vitae sollicitudin dolor.",
        jobs : ["Designer", "Jeavscript Developer"],
    },
    {
        id:2,
        img: "images 3",
        name: "Third person",
        description:"Cras sit amet diam sed metus interdum fringilla. Nulla volutpat semper hendrerit. Vestibulum et consectetur metus. Suspendisse potenti. Etiam id massa tellus. Nullam tristique porta odio quis consequat. Sed ut tempor risus. Nulla imperdiet justo quis metus mattis varius. Suspendisse potenti. Nunc ut fermentum risus, vitae sollicitudin dolor.",
        jobs : ["Designer", "Java Developer"],
    }



];



const img = document.querySelector('.img');
const desc = document.querySelector('.desc');
const image = document.querySelector('.img');
const person_name = document.querySelector('.name');
const jobs_title = document.querySelector('.job-title');
const next = document.querySelector(".btn-next");
const prec = document.querySelector(".btn-prec");
const rand = document.querySelector(".btn-ran");



let currentPerson = 0


function showPeson(person) {
    let item = persons[person];
    // image.src = item.img;
    person_name.textContent = item.name;
    desc.textContent = item.description;
    jobs_title.textContent = item.jobs


}

next.addEventListener("click", () =>{
    currentPerson ++;
    showPeson(currentPerson);    

})

prec.addEventListener("click", () =>{
    currentPerson --;
    showPeson(currentPerson);
    
})