/** éléments du DOM */
const testPrenom = document.getElementById("first");
const testNom = document.getElementById("last");
const testMail = document.getElementById("email");
const testDate = document.getElementById("birthdate");
const testTournois = document.getElementById("quantity");
const villeTournois = document.getElementById("ville") ;
const radios = document.querySelectorAll(".checkbox-input[type=radio]");
const testCGU = document.getElementById("checkbox1");
const content = document.querySelector(".modalConfirm");

/** éléments de validation du format */
const validPrenom = /^[a-zA-Zéèêîïöôç][a-zéèêîïöôç]+([-'\s][a-zA-Zéèêîïöôç][a-zéèêîïöôç]+)?/;
const validMail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

/** messages d'erreur */
const messages ={
    tailleInput : "Ce champ doit contenir au moins 2 caracteres",
    formatInput : "format incorrect",
    mailInput : "Veuillez renseigner votre adresse mail",
    dateInput : "Veuillez entrer votre date de naissance",
    emptyInput : "Veuillez indiquer un nombre de tournois (0 si vous n'en avez jamais dispute)",
    selectVille : "Veuillez selectionner au moins une ville",
    acceptCGU : "Veuillez accepter les conditions d'utilisation"
}

/**
 * choix de la ville du tournois
 * @returns {boolean}
 */
function testingVilles() {
    let checked = false;
    for (let radio of radios){
        if (radio.checked == true){
            return true;
        }
    }
    return checked;
}

/**
 * création du span pour message d'erreur
 * @param element
 * @param message
 */
function isInvalid(element, message) {
    let invalidMessage = document.createElement("span");
    invalidMessage.classList.add("error");
    invalidMessage.innerHTML = message;
    element.parentElement.appendChild(invalidMessage);

}

let isValid = true;

/**
 * test de la valeur et du format du prénom
 * efface le message d'erreur une fois le champ correctement rempli
 * @returns {boolean}
 */
function validatePrenom(){
    if(testPrenom.value.length < 2) {
        isValid = false;
        isInvalid(testPrenom, messages.tailleInput);
        testPrenom.style.border = "2px solid red";
    } else if (validPrenom.test(testPrenom.value) == false){
        isValid = false;
        isInvalid(testPrenom, messages.formatInput);
        testPrenom.style.border = "2px solid red";
    }else {
        removeErrorMessage(testPrenom);
        return true;
    }
}

/**
 * test de la valeur et du format du nom
 * efface le message d'erreur une fois le champ correctement rempli
 * @returns {boolean}
 */
function validateNom(){
    if(testNom.value.length < 2){
        isValid = false;
        isInvalid(testNom, messages.tailleInput);
        testNom.style.border = "2px solid red";
    } else if (validPrenom.test(testNom.value) == false){
        isValid = false;
        isInvalid(testNom, messages.formatInput);
        testNom.style.border = "2px solid red";
    }else {
        removeErrorMessage(testNom);
        return true;
    }
}

/**
 * test de la valeur et du format de l'adresse mail
 * efface le message d'erreur une fois le champ correctement rempli
 * @returns {boolean}
 */
function validateMail(){
    if (testMail.value.length == "") {
        isValid = false;
        isInvalid(testMail, messages.mailInput);
        testMail.style.border = "2px solid red";
    }else if (validMail.test(testMail.value) == false){
        isValid = false;
        isInvalid(testMail, messages.formatInput);
        testMail.style.border = "2px solid red";
    }else {
        removeErrorMessage(testMail);
        return true;
    }
}

/**
 * test si la date est renseignée
 * efface le message d'erreur une fois le champ correctement rempli
 * @returns {boolean}
 */
function validateDate(){
    if (testDate.value.length == ""){
        isValid = false;
        isInvalid(testDate, messages.dateInput);
        testDate.style.border = "2px solid red";
    }else {
        removeErrorMessage(testDate);
        return true;
    }
}

/**
 * test si un nombre de tournois est bien renseigné
 * efface le message d'erreur une fois le champ correctement rempli
 * @returns {boolean}
 */
function validateTournois(){
    if (testTournois.value == ""){
        isValid = false;
        isInvalid(testTournois, messages.emptyInput);
        testTournois.style.border = "2px solid red";
    }else {
        removeErrorMessage(testTournois);
        return true;
    }
}

/**
 * test si une ville est bien sélectionnée
 * efface le message d'erreur une fois le champ correctement rempli
 * @returns {boolean}
 */
function validateVille() {
    if (!testingVilles()){
        isValid = false;
        isInvalid(villeTournois, messages.selectVille);
    }else {
        removeErrorMessage(villeTournois);
        return true;
    }
}

/**
 * test si l'acceptation des CGU est bien cochée
 * efface le message d'erreur une fois le champ correctement rempli
 * @returns {boolean}
 */
function validateCGU() {
    if(testCGU.checked == false){
        isValid = false;
        isInvalid(testCGU, messages.acceptCGU);
        testCGU.style.border = "2px solid red";
    }else {
        return true;
    }
}

/**
 * efface le message d'erreur sous l'input
 * supprime le cadre rouge autour de l'input
 * @param input
 */
function removeErrorMessage(input){
    let errorMessages = document.querySelectorAll(".error");
    let inputs = document.querySelectorAll("input");
    if(errorMessages.length > 0){
        for (let errorMessage of errorMessages){
            errorMessage.style.display="none";
            for(let input of inputs){
                input.style.border =  "0px";
            }
        }
    }
}

/**
 * crée un bouton "fermer" au bas de la modale de confirmation d'inscription
 * ferme la modale lors du clic sur le bouton "fermer"
 */
function btmFermer(){
    let btnFermer = document.createElement("button");
    btnFermer.innerText= "Fermer";
    btnFermer.classList.add("btn-submit");
    btnFermer.setAttribute("id","btn-Fermer");
    btnFermer.addEventListener("click", function () {
        modalbg.style.display = "none";
    })
    content.parentElement.appendChild(btnFermer);
}

/**
 * vérification de chaque entrée du formulaire
 * si le formulaire est correctement rempli alors on ferme le formulaire et on laisse apparaitre la modale de confirmation
  */

function validate(event){
    event.preventDefault();
    let isValid = true;
    if(!validatePrenom()){
        return;
    }
    if(!validateNom()){
        return;
    }
    if(!validateMail()){
        return;
    }
    if(!validateDate()){
        return;
    }
    if(!validateTournois()){
        return;
    }
    if(!validateVille()){
        return;
    }
    if(!validateCGU()){
        return;
    }
    if (isValid){
            document.querySelector(".form").style.display = "none";
            document.querySelector(".modalConfirm").style.display= "block";
            btmFermer();
    }
}
