# Développement web : javascript, web api fetch et json -

<u>B1 ESGI Initial - Semestre 2 - LYON</u>

## Introduction à JavaScript

## Sélectionner des éléments

PAR ID
```js
let element = document.getElementById("monId");
```

PAR CLASSE
``` js
let elements = document.getElementsByClassName("maClasse");
```

## Modifier des éléments

CHANGER LE TEXTE
``` js
document.getElementById("monId").textContent = "nouveau texte!";
```

CHANGER LE HTML INTERNE
``` js
document.getElementById("monId").innerHTML = "<span>Nouveau contenu HTML</span>;
```

## Modifier les styles

CHANGER LE STYLE D'UN ELEMENT
``` js
document.getElementById("monId").style.color = "red";
```

## Ecouter et Réagir aux évènements

AJOUTER UN ECOUTEUR D'EVENEMENTS
``` js
document.getElementById("monBouton").addEventListener("click", function () {
    alert("Bouton cliqué !");
});
```

## Fonctions
``` js
function nomDeLaFonction(param1, param2, param3)
{
    //Code à exécuter
}
```
function -> callback : fonction passée en paramètre d'une autre fonction

``` js
const nomDeLaFonction = function (param1, param2, param3)
{
    //Code à exécuter
}
```

``` js
const nomDeLaFonction = (param1, param2, param3)
{
    //Code à exécuter
}
```

## Event
Le paramètre event est passé de façon implicite. Son nom peut être changé mais il est préférable de le laisser tel quel pour une meilleure compréhension.
``` js
form.onsubmit = (event) => {
    alert ("test");
}
```

## Chaînes de caractères

Pour déclarer une string en js :

``` js
let str = "Hello World";
let str = 'Hello World';

```