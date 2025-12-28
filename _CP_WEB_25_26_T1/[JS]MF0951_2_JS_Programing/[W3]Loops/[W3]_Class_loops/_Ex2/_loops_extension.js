/* 📘 1. Comptar fins a 20 (Nivell 1)
Fes un bucle for que mostri a la consola els números de l'1 al 20. */
for (let i = 1; i <=20; i++)
 console.log(i);

/* 2. Només els parells (Nivell 1)
Fes un bucle que mostri només els números parells fins al 50.
💡
Pista: Pots fer i = i + 2 en lloc de i++. */
for (let p = 2; p <=50; p = p+2 )
     console.log(p);
/* 3. La repetidora (Nivell 1) Demana una paraula a l'usuari amb
prompt. Mostra aquesta paraula 10 vegades seguides a la consola. */
/* let word = prompt("Indica una palabra");
 */
let word = prompt("Indica una palabra");
let rep = "";

for (let w = 1; w <= 10; w++) {
  rep = rep + word + "\n";   
}

console.log(rep);
/* 📘 4. Sumar fins a N (Nivell 2)
Demana un número a l'usuari (anomenat N). Calcula la suma de tots els números des de l'1 fins a N.
Exemple: Si l'usuari posa 5, has de sumar 1+2+3+4+5 = 15 */

let n = Number(prompt("introduce un numero: "));
let value  = 0; 
for (let i = 1; i <=n; i++){
     // fins a n limit
     value = value + i
    console.log("Total =", value);
}
/* 📘 5. Compte enrere amb avisos (Nivell 2)
Fes un compte enrere del 10 al 0.
Si el número és 3, 2 o 1, mostra: "Atenció, llançament imminent!".
Si és 0, mostra: "Enlairament! 🚀".
Per la resta, mostra només el número. */
for (let i = 10; i >= 0; i--) {
if (i === 3 || i === 2 || i === 1) {
    console.log(i + " - Attention, imminent launching!");
} else if (i === 0) {
    console.log("Take off!");
} else {
    console.log(i);
}
}


/* 📘 6. Endevina la lletra (Nivell 3 - Do While)
El programa té una lletra secreta (per exemple la "S" de Sortida).
Fes servir un bucle do...while.Demana a l'usuari que escrigui una lletra.
Repeteix la pregunta fins que l'usuari escrigui la "S".
Al final, digues "Adeu!". */
let letter;
do {
  letter = prompt("Escribe una letra:");
} while (letter !== "R");

console.log("Bye!");

/* 

let secretNum = 7;
let guessNun;

do {
  guess = Number(prompt("Guess the number:"));
} while (guessNum !== secretNum);
console.log("Correct! The secret number was " + secretNum);
 */