//éléments du DOM
const testPrenom = document.getElementById("first");
const testNom = document.getElementById("last");
const testMail = document.getElementById("email");
const testDate = document.getElementById("birthdate");
const testTournois = document.getElementById("quantity");
const villeTournois = document.getElementById("ville") ;
const radios = document.querySelectorAll(".checkbox-input[type=radio]");
const testCGU = document.getElementById("checkbox1");
const content = document.querySelector(".modalConfirm");

//éléments de validation
const validPrenom = /^[a-zA-Zéèêîïöôç][a-zéèêîïöôç]+([-'\s][a-zA-Zéèêîïöôç][a-zéèêîïöôç]+)?/;
const validMail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;


//messages d'erreur
const messages ={
    tailleInput : "Ce champ doit contenir au moins 2 caracteres",
    formatInput : "format incorrect",
    mailInput : "Veuillez renseigner votre adresse mail",
    dateInput : "Veuillez entrer votre date de naissance",
    emptyInput : "Veuillez indiquer un nombre de tournois (0 si vous n'en avez jamais dispute)",
    selectVille : "Veuillez selectionner au moins une ville",
    acceptCGU : "Veuillez accepter les conditions d'utilisation"
}


// choix de la ville du tournois
function testingVilles() {
    let checked = false;
    for (let radio of radios){
        if (radio.checked == true){
            return true;
        }
    }
    return checked;
}

// création du span pour message d'erreur
function isInvalid(element, message) {
    let invalidMessage = document.createElement("span");
    invalidMessage.classList.add("error");
    invalidMessage.innerHTML = message;
    element.parentElement.appendChild(invalidMessage);

}

let isValid = true;

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

function validateVille() {
    if (!testingVilles()){
        isValid = false;
        isInvalid(villeTournois, messages.selectVille);
    }else {
        removeErrorMessage(villeTournois);
        return true;
    }
}

function validateCGU() {
    if(testCGU.checked == false){
        isValid = false;
        isInvalid(testCGU, messages.acceptCGU);
        testCGU.style.border = "2px solid red";
    }else {
        return true;
    }
}

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

// vérification et validation du formulaire
function validate(event){
    event.preventDefault();
    let isValid = true;
    if(!validatePrenom()){
        isValid = false;
        return;
    }
    if(!validateNom()){
        isValid = false;
        return;
    }
    if(!validateMail()){
        isValid = false;
        return;
    }
    if(!validateDate()){
        isValid = false;
        return;
    }
    if(!validateTournois()){
        isValid = false;
        return;
    }
    if(!validateVille()){
        isValid = false;
        return;
    }
    if(!validateCGU()){
        isValid = false;
        return;
    }
    if (isValid){
            document.querySelector(".form").style.display = "none";
            document.querySelector(".modalConfirm").style.display= "block";
            let btnFermer = document.createElement("button");
            btnFermer.innerText= "Fermer";
            btnFermer.classList.add("btn-submit");
            btnFermer.setAttribute("id","btn-Fermer");
            btnFermer.addEventListener("click", function () {
                modalbg.style.display = "none";
            })
            content.parentElement.appendChild(btnFermer);
    }
}
