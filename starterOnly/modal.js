function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

//vérification formulaire
const testPrenom = document.getElementById("first");
const testNom = document.getElementById("last");

function validate(event){
  if(testPrenom.value.length < 2){
    event.preventDefault();
    document.getElementById('prenomMissing').innerHTML = "Ce champ doit contenir au moins 2 caracteres" ;
  } else if(testNom.value.length<1){
    event.preventDefault();
    document.getElementById('nomMissing').innerHTML = "Ce champ ne doit pas etre vide" ;
  }
}
