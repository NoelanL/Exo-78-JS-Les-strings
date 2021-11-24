let monText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte
alert(monText.length);


//Ajouter du code ci dessous pour réaliser la suite de l'exercice
let positionLettreI = monText.indexOf('i');
let position = document.getElementById('position');
position.innerHTML = positionLettreI;

let maj = monText.toUpperCase();
let stockMonText = document.getElementById('chaineMaj');
stockMonText.innerHTML = maj;

for ( let i = 0; i < monText.length; i++){
    let positionLettreA = monText.indexOf('a');
    alert('La lettre "A" trouver');
}







