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

// test du prenom
function testingPrenom() {
    if (testPrenom.value.length < 2) { //min 2 caractères
        return false;
    }
    return true;
}

// test du format du prénom
function testingFormatPrenom() {
    if (validPrenom.test(testPrenom.value) == false) { //format sans chiffres ni caractères spéciaux
        return false;
    }
    return true;
}

// test du nom
function testingNom(){
    if (testNom.value.length < 2) { // doit être renseigné
        return false;
    }
    return true;
}

// test du format du nom
function testingFormatNom() {
    if(validPrenom.test(testNom.value) == false){
        return false;
    }
    return true;
}

// test du mail
function testingMail(){
    if (testMail.value.length == "") { // doit être renseigné
        return false;
    }
    return true;
}

// test du format du mail
function testingFormatMail(){
    if (validMail.test(testMail.value) == false){
        return false;
    }
    return true;
}

// test de la date
function testingDate(){
    if (testDate.value.length == ""){
        return false;
    }
    return true
}

// test du nombre de tournois
function testingTournois() {
    if(testTournois.value == ""){
        return false;
    }
    return true;
}

// choix de la ville du tournois
function testingVilles() {
    for (let radio of radios){
        if (radio.checked == false){
            return false;
        }
        return true;
    }
}

// acceptation CGU
function testingCGU() {
    if(testCGU.checked == false){
        return false;
    }
    return true;
}

// création du span pour message d'erreur
function isInvalid (element, message){
    let invalidMessage = document.createElement("span");
    invalidMessage.classList.add("error");
    invalidMessage.innerHTML = message;
    element.parentElement.appendChild(invalidMessage);

}

let isValid = true;
let form = document.querySelector(".form");

// vérification et validation du formulaire
function validate(event){
    event.preventDefault();
    if(!testingPrenom()) {
        isValid = false;
        isInvalid(testPrenom, messages.tailleInput);
        testPrenom.style.border = "2px solid red";
    } else if (!testingFormatPrenom()){
        isValid = false;
        isInvalid(testPrenom, messages.formatInput);
        testPrenom.style.border = "2px solid red";
    } else if(!testingNom()){
        isValid = false;
        isInvalid(testNom, messages.tailleInput);
        testNom.style.border = "2px solid red";
    } else if (!testingFormatNom()){
        isValid = false;
        isInvalid(testNom, messages.formatInput);
        testNom.style.border = "2px solid red";
    } else if (!testingMail()) {
        isValid = false;
        isInvalid(testMail, messages.mailInput);
        testMail.style.border = "2px solid red";
    }else if (!testingFormatMail()){
        isValid = false;
        isInvalid(testMail, messages.formatInput);
        testMail.style.border = "2px solid red";
    } else if (!testingDate()){
        isValid = false;
        isInvalid(testDate, messages.dateInput);
        testDate.style.border = "2px solid red";
    }else if (!testingTournois()){
        isValid = false;
        isInvalid(testTournois, messages.emptyInput);
        testTournois.style.border = "2px solid red";
    }else if (!testingVilles()){
        isValid = false;
        isInvalid(villeTournois, messages.selectVille);
    }else if(!testingCGU()){
        isValid = false;
        isInvalid(testCGU, messages.acceptCGU);
        testCGU.style.border = "2px solid red";
    }else if (isValid){
        let valider = document.querySelector(".btn-submit");
        valider.addEventListener("click",function(){
            document.querySelector(".form").style.display = "none";
            document.querySelector(".modalConfirm").style.display= "block";
            let btnFermer = document.createElement("button");
            btnFermer.innerText= "Fermer";
            btnFermer.classList.add("btn-submit");
            btnFermer.setAttribute("id","btn-Fermer");
            content.parentElement.appendChild(btnFermer);
            console.log(isValid);
        });
    }
}

