console.log("School Website Loaded Successfully");



function toggleMenu(){

document
.getElementById("navbar")
.classList.toggle("active");

}

/* DROPDOWN */

function toggleDropdown(event,element){

if(window.innerWidth <= 768){

event.preventDefault();

element.parentElement
.classList.toggle("active");

}

}

