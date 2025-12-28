/*Exercici 1
Donades dues variables numèriques A i B, que l'usuari ha d’introduir, farem un algoritme que intercanvií el valor de les variables i mostri el valor final de les variables.
Exemple:
Introdueix A: 23
Introdueix B: 45
El valor de A és 45 i el valor de B és 23
 */

/* let a = Number(prompt("Introduce el numero A"));
let b = Number(prompt("Introduce el numero B"));
a = b;
b = a;
console.log(" El valor de A es " + a +" El valor de B es " + b);  */

/*  Exercici 2
Calcular el perímetre i àrea d'un rectangle donada la seva base i alçada.
*/
/* let base = Number(prompt("Introduce la base"));
let altura = Number(prompt("Introduce la altura"));

console.log ("El perimitro de tu rectanglulo es = " + ((base * 2) + (altura * 2 )));
console.log ("La area de tu rectanglulo es = " + (base * altura ));  */

/* Exercici 3
El programa ha de demanar els 2 catets d’un triangle rectangle, calcular la hipotenusa i mostrar-la per pantalla.
 */

/* let catA = Number(prompt("Introduce el cateto A:"));
let catB = Number(prompt("Introduce el cateto B:"));

/* Verbose: 
 console.log("La hipotenusa es: " + Math.sqrt(catA*catA + catB*catB)); */

/* console.log("La hipotenusa es = "+ Math.sqrt((Math.pow(catA,2)) + (Math.pow(catB,2))));   */

/* Exercici 4
Escriu un programa que calculi la nota final d’un estudiant s’hauran d’introduir les respostes correctes que tindran un valor de 5 punts cadascuna, les respostes incorrectes que restaran un punt cadascuna i les respostes en blanc que ni sumaran ni restaran. El programa ha de fer els càlculs i mostrar el resultat per pantalla.
Exemple:
Respostes correctes: 10
Respostes incorrectes: 8
Respostes en blanc: 2
Nota final: 42
 */

/* let correct = Number(prompt("Introduce the number of correct answers: "));
let incorrect = Number(prompt("Introduce the number of incorrect answers: "));
let blank = Number(prompt("Introduce the number of blank answers: "));
//Verbose: 
//console.log("Your final score is = " + ((correct*5) - (incorrect) + (blank*0))); 
console.log(
  "Based on your inputs:\n" +
  "Correct answers: " + correct + "\n" +
  "Incorrect answers: " + incorrect + "\n" +
  "Blank: " + blank + "\n" +
  "Final score: " + (correct * 5 - incorrect)
);
 

/* Exercici 5
El programa ha de demanar un valor de temperatura en graus Fahrenheit i convertir-los a graus Celsius. Recordar que la fórmula para la conversió és:
Celsius = (Fahrenheit-32)*5/9
 */
/* let F = Number(prompt("Introduce the current temperature in Fahrenheit."));
console.log("The value in Celsius is = " + ((F - 32) * 5/9 )); 
 */
/* Exercici 6
Escriu un programa que ens digui els diners que tenim (en euros i cèntims) després de demanar-nos quantes monedes tenim (de 2 €, 1 €, 50 cèntims, 20 cèntims o 10 cèntims).
Exemple:
Monedes de 2 €: 6
Monedes d'1 €: 3
Monedes de 50 cèntims: 8
Monedes de 20 cèntims: 10
Monedes de 10 cèntims: 7

Tens 21 € i 70 cèntims
 */
//-------------------------------------------------------
/* remainder operator */
/* let tenth = Number(prompt("Introduce a number to test : "));
console.log("your number divided by 2 : " + (tenth / 10) + "the remaider is : "  + (test % 10));*/
//-------------------------------------------------------
/* 
// Very lengthy approach
let c2 = Number(prompt("Introduce the number of coins of 2 € : "));
let c1 = Number(prompt("Introduce the number of coins of 1 € : "));
let c50 = Number(prompt("Introduce the number of coins of 0.5 €: "));
let c20 = Number(prompt("Introduce the number of coins of 0.20 €: "));
let c10 = Number(prompt("Introduce the number of coins of 0.10 €: "));

// give me the units only - not remainder - go to floor not rounded 
let units = (c2 * 2) + c1 + Math.floor(c50/2) + Math.floor(c20/5) + Math.floor(c10/10);

let remaining = (coin2%2)*50 + (coin3%5)*20 + (coin4%10)*10;
final = final + Math.floor(remaining/100);
remaining = remaining%100;

console.log("In your account you have  = " + final + "€ " + remaining + " cents"); */

/* Exercici 6
Escriu un programa que ens digui els diners que tenim (en euros i cèntims) després de demanar-nos quantes monedes tenim (de 2 €, 1 €, 50 cèntims, 20 cèntims o 10 cèntims).
Exemple:
Monedes de 2 €: 6
Monedes d'1 €: 3
Monedes de 50 cèntims: 8
Monedes de 20 cèntims: 10
Monedes de 10 cèntims: 7

Tens 21 € i 70 cèntims
 */

//-------------------------------------------------------
//Clean approach
/* let c2 = Number(prompt("Introduce the number of coins of 2 € : "));
let c1 = Number(prompt("Introduce the number of coins of 1 € : "));
let c50 = Number(prompt("Introduce the number of coins of 0.5 €: "));
let c20 = Number(prompt("Introduce the number of coins of 0.20 €: "));
let c10 = Number(prompt("Introduce the number of coins of 0.10 €: "));

let totalCents = (c2 * 200) + (c1 * 100) + (c50 * 50) + (c20 * 20) + (c10 * 10);
let euros = Math.floor(totalCents / 100);
let cents = totalCents % 100;

console.log(euros + " euros and " + cents + " cents"); */

/*
El programa ha de demanar un valor de temperatura en graus Fahrenheit i convertir-los a graus Celsius. Recordar que la fórmula para la conversió és:
Celsius = (Fahrenheit-32)*5/9
 */
/* 
let F = Number(prompt("Introduce the current temperature in Fahrenheit."));
console.log("The value in Celsius is = " + ((F - 32) * 5/9 )); 
 */


/*Exercici 7
Realitza un programa que demani una quantitat de minuts i mostri per pantalla a quantes hores i minuts correspon.
Exemple: 1000 minuts són 16 hores i 40 minuts.
  */
// Demanem els minuts a l'usuari
let totalMinuts = Number(prompt("Introdueix la quantitat de minuts:"));

// Calculem hores i minuts restants
let hores = Math.floor(totalMinuts / 60);
let minutsRestants = totalMinuts % 60;

// Mostrem resultat
console.log(totalMinuts + " minuts són " + hores + " hores i " + minutsRestants + " minuts.");

/*Exercici 8
Un venedor rep un sou base de 1200€ més un 10% extra per comissió del total de les seves vendes, el venedor vol saber quants diners obtindrà en concepte de comissions, per les 3 vendes que ha fet aquest mes i el total que rebrà.
Exemple:
Venda 1: 200, venda 2: 1500, venda 3: 1000
Total comissió: 270 €
Total sou: 1470 € */
// Sou base
let souBase = 1200;

// Vendes del mes (amb prompt)
let venda1 = Number(prompt("Introdueix la venda 1:"));
let venda2 = Number(prompt("Introdueix la venda 2:"));
let venda3 = Number(prompt("Introdueix la venda 3:"));

// Total venut
let totalVendes = venda1 + venda2 + venda3;

// Comissió del 10%
let comissio = totalVendes * 0.10;

// Sou final
let souFinal = souBase + comissio;

// Resultats
console.log("Total comissió: " + comissio + " €");
console.log("Total sou: " + souFinal + " €");

// Resultats
console.log("Total comissió: " + comissio + " €");
console.log("Total sou: " + souFinal + " €");
/*Exercici 9
Una botiga ofereix un descompte del 15% sobre el total de la compra i un client vol saber quina quantitat pagarà finalment per la seva compra.
Exemple: 
Introdueix el preu: 500
El preu amb descompte és: 425 €
 */
// Preu original
let preu = Number(prompt("Introdueix el preu de la compra:"));

// Descompte
let descompte = preu * 0.15;

// Preu final
let preuFinal = preu - descompte;

// Resultat
console.log("El preu amb descompte és: " + preuFinal + " €");

/*Exercici 10
Un alumne vol saber quina serà la seva qualificació final de l’assignatura de programació. L’assignatura té els següents percentatges:
55% de la mitjana dels 3 exàmens parcials.
30% de la qualificació de l'examen final.
15% de la qualificació d'un treball final.
Exemple:
mitjana dels 3 parcials: 8
Examen final: 6
Treball: 8
Nota final: 7,4
 */

// Notes introduïdes per l'usuari
let mitjanaParcials = Number(prompt("Introdueix la mitjana dels 3 parcials:"));
let examenFinal = Number(prompt("Introdueix la nota de l'examen final:"));
let treballFinal = Number(prompt("Introdueix la nota del treball final:"));

// Percentatges
let pesParcials = 0.55;
let pesExamen = 0.30;
let pesTreball = 0.15;

// Càlcul nota final
let notaFinal = mitjanaParcials * pesParcials + examenFinal * pesExamen + treballFinal * pesTreball;

// Mostrem resultat
console.log("Nota final: " + notaFinal);
