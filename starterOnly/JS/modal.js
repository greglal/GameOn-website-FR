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

/**
 * launch modal
 * si 1ère ouverture affiche le formulaire vierge
 * sinon reset du formulaire
 * --- et fermeture message de confirmation
 * --- et enlève bouton fermer
  */

function launchModal() {
  modalbg.style.display = "block";
  document.querySelector("form").style.display = "block";
  document.querySelector("form").reset();
  document.getElementById("hehe").style.display = "none";
  document.getElementById("btn-Fermer").style.display = "none";
}

// close modal form
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}


