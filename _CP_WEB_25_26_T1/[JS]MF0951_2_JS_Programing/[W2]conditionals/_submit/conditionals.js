
// Exercici 1: Parell o Senar

/*Demana un número a l'usuari amb
prompt(). El programa ha de dir si el número és
parell o senar💡 Pista: Fes servir l'operador mòdul. Si numero % 2 == 0 , és parell */
let numero = Number(prompt("Introdueix un número:"));

if (numero % 2 === 0) {
  console.log("El número " + numero + " és parell.");
} else {
  console.log("El número " + numero + " és senar.");
}


// Exercici 2: El porter de discoteca
/*Demana l'edat a l'usuari.
Si té menys de 18 anys: Mostra "No pots entrar".
Si té entre 18 i 65 anys: Mostra "Pots entrar a la festa".
Si té més de 65 anys: Mostra "Tens entrada VIP gratuïta". */
let edat = Number(prompt("Introdueix la teva edat:"));

if (edat < 18) {
  console.log("No pots entrar.");
} else if (edat >= 18 && edat <= 65) {
  console.log("Pots entrar a la festa.");
} else {
  console.log("Tens entrada VIP gratuïta.");
}


// Exercici 3: Semàfor
/*Crea una variable color amb el valor "vermell", "groc" o "verd". Fes servir un switch:
Vermell -> "Stop!"
Groc -> "Prepara't..."
Verd -> "Endavant!"
Altres -> "Semàfor espatllat" */

let color = prompt("Introdueix un color (vermell, groc, verd):").toLowerCase();

switch (color) {
  case "vermell":
    console.log("Stop!");
    break;
  case "groc":
    console.log("Prepara't...");
    break;
  case "verd":
    console.log("Endavant!");
    break;
  default:
    console.log("Semàfor espatllat");
}


// Exercici 4: Calculadora Bàsica
/* Millora la calculadora de la unitat anterior. Demana dos números i un operador (+, -, *, /). Fes servir if/else o switch per fer l'operaciócorrecta.Si l'usuari posa un símbol estrany, mostra "Operació no vàlida". */


//Ref 
/* Exercici 10 – Calculadora bàsica
Demana a l’usuari dos números i l’operació a fer (+, -, * o /). Mostra el resultat amb console.log(). */

/* 
let a = Number(prompt("Introduce un primer numero"));
let b = Number(prompt("Introduce un segundo numero"));
let op = prompt("Operacion (+, -, *, /):");

console.log("Elige el resultado de tu opcion : " + op);
console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a * b = " + (a * b));
console.log("a / b = " + (a / b)); 

*/


let num1 = Number(prompt("Introdueix el primer número:"));
let num2 = Number(prompt("Introdueix el segon número:"));
let op = prompt("Introdueix l'operador (+, -, *, /):");

if (op === "+") {
  console.log("Resultat: " + (num1 + num2));
} else if (op === "-") {
  console.log("Resultat: " + (num1 - num2));
} else if (op === "*") {
  console.log("Resultat: " + (num1 * num2));
} else if (op === "/") {
  console.log("Resultat: " + (num1 / num2));
} else {
  console.log("Operació no vàlida");
}


/* //More controlled behaviour  
// 
let op = prompt("Introdueix l'operador (+, -, *, /):");

if (op === "+" || op === "-" || op === "*" || op === "/") {

  // Només demanem números si l'operador és vàlid!
  let num1 = Number(prompt("Primer número:"));
  let num2 = Number(prompt("Segon número:"));

  if (op === "+") {
    console.log(num1 + num2);
  } else if (op === "-") {
    console.log(num1 - num2);
  } else if (op === "*") {
    console.log(num1 * num2);
  } else if (op === "/") {
    console.log(num1 / num2);
  }

} else {
  console.log("Operació no vàlida");
}



*/