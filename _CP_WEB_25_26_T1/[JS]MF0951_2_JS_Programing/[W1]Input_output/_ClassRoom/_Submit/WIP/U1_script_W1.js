/* // Exemple de sortida
console.log("Hola món");

// Exemple de sortida
console.log("Hola des de les illes!");


let nom = prompt("Com et dius?");
let edat = Number(prompt("Quina edat tens?"));
console.log("Benvingut/da " + nom +  " de " + edat + "!");

//Demana a l’usuari la seva edat i mostra quants anys tindrà d’aquí a 10 anys.
let anys = prompt("Quina edat tens?");
let future = Number(anys) + 10;
console.log(" En deu anys tindras " + future + " anys");

// Exercici 5 – Petit informe
//Demana tres dades: nom, edat i ciutat. Mostra-les dins la pàgina amb document.write().

let user = prompt("Com et dius?");
let birth = prompt("Quina edat?");
let city = prompt("On vas neixer?");
console.log(" Hola " + user + " de " + birth + " anys, que vius a " + city );

// Exercici 6 – Suma de dos nombres
//Demana dos números a l’usuari i mostra el resultat de la seva suma.
let math1 = Number(prompt("Introduce un primer numero"));
let math2 = Number(prompt("Introduce un segundo numero"));

console.log( math1 + math2 ); */
// Exercici 7 – Operacions matemàtiques
//Demana dos números i mostra la seva suma, resta, producte i divisió a la consola.
let aritmet1 = Number(prompt("Introduce un primer numero"));
let aritmet2 = Number(prompt("Introduce un segundo numero"));
console.log("La suma de " + aritmet1 + " + " + aritmet2 + " es: " + (aritmet1 + aritmet2));
console.log("La resta de " + aritmet1 + " - " + aritmet2 + " es: " + (aritmet1 - aritmet2));
console.log("La multiplicacion de " + aritmet1 + " * " + aritmet2 + " es: " + (aritmet1 * aritmet2));
console.log("La division de " + aritmet1 + " / " + aritmet2 + " es: " + (aritmet1 / aritmet2));


/* //Exercici 8 – Mitjana de tres números
//Demana tres números a l’usuari i calcula la seva mitjana.
let median1 = Number(prompt("Introduce un primer numero"));
let median2 = Number(prompt("Introduce un segundo numero"));
let median3 = Number(prompt("Introduce un tercer numero"));
console.log("La media de los tres numeros es " + ((median1 + median2 + median3) / 3));

//📘 Exercici 9 – Salutació amb alert()
//Demana el nom de l’usuari i mostra un missatge de salutació en una finestra emergent.
let welcome = prompt("Quin es el teu nom?");
alert( " Welcome " + welcome);
 
/* Exercici 10 – Calculadora bàsica
Demana a l’usuari dos números i l’operació a fer (+, -, * o /). Mostra el resultat amb console.log(). */

/* let a = Number(prompt("Introduce un primer numero"));
let b = Number(prompt("Introduce un segundo numero"));
let op = prompt("Operacion (+, -, *, /):");

console.log("Elige el resultado de tu opcion : " + op);
console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a * b = " + (a * b));
console.log("a / b = " + (a / b)); 

/*  Repte final: crea un petit programa que demani el teu nom, l’edat i el curs que estàs fent, i mostri un missatge complet a la consola i
també dins la pàgina web */
/* let nomUser = prompt("Com et dius?");
let edatUser = prompt("Quina edat tens?");
let curs = prompt("Quin curs estàs fent?");

let missatge = "Em dic " + nomUser + ", tinc " + edatUser + " anys i estic fent el curs de " + curs + ".";

console.log(missatge);
document.write("<p>" + missatge + "</p>");   */