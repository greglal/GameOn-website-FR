//éléments du DOM
const testPrenom = document.getElementById("first");
const testNom = document.getElementById("last");
const testMail = document.getElementById("email");
const testDate = document.getElementById("birthdate");
const testTournois = document.getElementById("quantity");
const testVilleTournois = document.getElementById("ville") ;
const testVilles = document.querySelectorAll(".checkbox-input[type=radio]");
const testCGU = document.getElementById("checkbox1");

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
function testingPrenom(event) {
    if (testPrenom.value.length < 2) { //min 2 caractères
        return false;
    }
    return true;
}

// test du format du prénom
function testingFormatPrenom(event) {
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
function testingFormatNom(event) {
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
    for (let radio of testVilles){
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

// vérification et validation du formulaire
function validate(event){
    //event.preventDefault();
    if(!testingPrenom()) {
        event.preventDefault();
        isValid = false;
        isInvalid(testPrenom, messages.tailleInput);
    } else if (!testingFormatPrenom()){
        event.preventDefault();
        isValid = false;
        isInvalid(testPrenom, messages.formatInput);
    } else if(!testingNom()){
        event.preventDefault();
        isValid = false;
        isInvalid(testNom, messages.tailleInput);
    } else if (!testingFormatNom()){
        event.preventDefault();
        isValid = false;
        isInvalid(testNom, messages.formatInput);
    } else if (!testingMail()) {
        event.preventDefault();
        isValid = false;
        isInvalid(testMail, messages.mailInput);
    }else if (!testingFormatMail()){
        event.preventDefault();
        isValid = false;
        isInvalid(testMail, messages.formatInput);
    } else if (!testingDate()){
        event.preventDefault();
        isValid = false;
        isInvalid(testDate, messages.dateInput);
    }else if (!testingTournois()){
        event.preventDefault();
        isValid = false;
        isInvalid(testTournois, messages.emptyInput);
    }else if (!testingVilles()){
        event.preventDefault();
        isValid = false;
        isInvalid(testVilleTournois, messages.selectVille);
    }else if(!testingCGU()){
        event.preventDefault();
        isValid = false;
        isInvalid(testCGU, messages.acceptCGU);
    }else if (isValid){
        form.submit()
    }


}
