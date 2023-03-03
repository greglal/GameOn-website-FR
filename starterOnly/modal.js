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

//vιrification formulaire
/*const testPrenom = document.getElementById("first");
let validName = /^[a-zA-Zιθκξοφτη][a-zιθκξοφτη]+([-'\s][a-zA-Zιθκξοφτη][a-zιθκξοφτη]+)?/;
const testNom = document.getElementById("last");
const testMail = document.getElementById("email");
let validMail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

function validate(event) {
  if (testPrenom.value.length < 2) {
    event.preventDefault();
    document.getElementById('prenomMissing').innerHTML = "Ce champ doit contenir au moins 2 caracteres";
  } else if (validName.test(testPrenom.value) == false){
    event.preventDefault();
    document.getElementById('prenomMissing').innerHTML = "format incorrect";
  } else if (testNom.value.length < 1) {
    event.preventDefault();
    document.getElementById('nomMissing').innerHTML = "Ce champ ne doit pas etre vide";
  }else if (validName.test(testNom.value) == false){
      event.preventDefault();
      document.getElementById('nomMissing').innerHTML = "format incorrect";
  } else if(validMail.test(testMail.value) == false){
    event.preventDefault();
    document.getElementById('mailIncorrect').innerHTML = "Veuillez indiquer une adresse mail valide";
  }
}*/
