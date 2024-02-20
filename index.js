//const monTitre = document.getElementById("titre");

//Formualire
const form = document.getElementById("form");

// Select
const select = document.getElementById("select");


//Bouton additionner
const addButton = document.getElementById("add");
//addButton.addEventListener("click", function (){
//    alert("ADDITION !");
//});
console.log(addButton);

//Bouton soustraction
const subButton = document.getElementById("sub");
//susButton.addEventListener("click", function () {
//    alert("SOUSTRACTION");
//});
console.log(susButton);

// Bouton multiplier
const mulButton = document.getElementById("mul");
//mulButton.addEventListener("click", function () {
//    alert("MULTIPLICATION");
//});
console.log(mulButton);

// Bouton diviser
const divButton = document.getElementById("div");
//divButton.addEventListener("click", function () {
//    alert("DIVISION");
//});
console.log(divButton);

// Création de events
form.onsubmit = (event) => {
    event.preventDefault();
    alert ("test");

    // récupération de la valuer du select (add, sub, mul, div)
    console.log("Valeur de l'élément select : ", select.value);

    // récupération de la valuer des inputs
    console.log("Valeur de l'élément input1 : ", input1.value);
    console.log("Valeur de l'élément input2 : ", input2.value);

    // utilisation de la valeur du select pour effectuer l'opération correspondante
    switch (select.value) {
        case "add":
            console.log("calcul choisi addition");
            // Aficher le résultat de l'addition
            result.innerText = Number(input1.value) + Number(input2.value);
            break;

        case "sus":
            console.log("calcul choisi soustraction");
            console.log(Number(input1.value) - Number(input2.value));
            break;

        case "mul":
            console.log("calcul choisi multiplication");
            console.log(Number(input1.value) * Number(input2.value));
            break;

        case "div":
            console.log("calcul choisi division");
            console.log(Number(input1.value) / Number(input2.value));
            break;

        default:
            console.log("calcul non géré");
            break;
    }
}

// Result
const result = document.getElementById("result");