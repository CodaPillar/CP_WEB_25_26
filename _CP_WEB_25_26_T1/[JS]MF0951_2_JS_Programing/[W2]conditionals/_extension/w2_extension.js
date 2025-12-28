// 💻 Reforç Condicionals
// Pots provar els exercicis un per un. Si no vols que tots surtin a la vegada,
// comenta temporalment els blocs que no estiguis provant.

// 📘 1. Positiu o Negatiu? (Nivell 1)
let numero = Number(prompt("Ex1 - Introdueix un número:"));

if (numero > 0) {
  console.log("És positiu");
} else if (numero < 0) {
  console.log("És negatiu");
} else {
  console.log("És zero");
}



// 📘 2. Aprovat o Suspès (Nivell 1)
let nota = Number(prompt("Ex2 - Introdueix la nota (0 a 10):"));

if (nota >= 5) {
  console.log("Has aprovat!");
} else {
  console.log("Has suspès");
}



// 📘 3. El número més gran (Nivell 2)
let numA = Number(prompt("Ex3 - Introdueix el primer número:"));
let numB = Number(prompt("Ex3 - Introdueix el segon número:"));

if (numA > numB) {
  console.log(numA + " és més gran que " + numB);
} else if (numB > numA) {
  console.log(numB + " és més gran que " + numA);
} else {
  console.log("Els dos números són iguals");
}



// 📘 4. Dies de la setmana (Nivell 2 - Switch)
let diaNumero = Number(prompt("Ex4 - Introdueix un número de l'1 al 7:"));
let diaNom;

switch (diaNumero) {
  case 1:
    diaNom = "Dilluns";
    break;
  case 2:
    diaNom = "Dimarts";
    break;
  case 3:
    diaNom = "Dimecres";
    break;
  case 4:
    diaNom = "Dijous";
    break;
  case 5:
    diaNom = "Divendres";
    break;
  case 6:
    diaNom = "Dissabte";
    break;
  case 7:
    diaNom = "Diumenge";
    break;
  default:
    diaNom = "Error: dia incorrecte";
    break;
}

console.log(diaNom);



// 📘 5. Botiga de descomptes (Nivell 3)
let preuProducte = Number(prompt("Ex5 - Introdueix el preu del producte:"));
let preuFinal = preuProducte;

if (preuProducte > 100) {
  let descompte = preuProducte * 0.10;
  preuFinal = preuProducte - descompte;
}

console.log("El preu final és: " + preuFinal + " €");



// 📘 6. Login senzill (Nivell 3 - String)
let usuari = prompt("Ex6 - Introdueix el nom d'usuari:");

if (usuari === "admin") {
  console.log("Benvingut administrador");
} else {
  console.log("Accés denegat");
}



// 📘 7. Login amb contrasenya (Nivell 4 - Operadors lògics)
let usuari2 = prompt("Ex7 - Introdueix el nom d'usuari:");
let password = prompt("Ex7 - Introdueix la contrasenya:");

if (usuari2 === "admin" && password === "1234") {
  console.log("Accés permès");
} else {
  console.log("Accés denegat");
}



// 📘 8. El cinema (Nivell 4 - Else if)
let edatCinema = Number(prompt("Ex8 - Introdueix la teva edat:"));

if (edatCinema < 5) {
  console.log("Gratis");
} else if (edatCinema >= 5 && edatCinema <= 15) {
  console.log("5€");
} else if (edatCinema >= 16 && edatCinema <= 65) {
  console.log("10€");
} else {
  console.log("Gratis");
}



// 📘 9. Tipus de triangle (Nivell 5 - Lògica)
let costatA = Number(prompt("Ex9 - Introdueix el costat A:"));
let costatB = Number(prompt("Ex9 - Introdueix el costat B:"));
let costatC = Number(prompt("Ex9 - Introdueix el costat C:"));

if (costatA === costatB && costatB === costatC) {
  console.log("Equilàter");
} else if (
  costatA === costatB ||
  costatA === costatC ||
  costatB === costatC
) {
  console.log("Isòsceles");
} else {
  console.log("Escalè");
}



// 📘 10. Puc sortir a jugar? (Nivell 5 - Condicions niuades)
let faSol = prompt("Ex10 - Fa sol? (si/no):").toLowerCase();
let deures = prompt("Ex10 - Has acabat els deures? (si/no):").toLowerCase();

if (faSol === "si" && deures === "si") {
  console.log("Pots sortir! ⚽");
} else if (faSol === "si" && deures === "no") {
  console.log("Acaba la feina primer!");
} else {
  console.log("Millor queda't a casa 🌧️");
}
