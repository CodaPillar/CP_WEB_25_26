/* 📘 Exercici 1: Compte enrere Fes un bucle for que mostri els números del 10 al 0 (10, 9, 8...). Quan arribi a 0, mostra "Enlairem!!". */
for ( i = 10; i >= 0;  i -- ) {
  console.log(i);
}
console.log("Despegue");

/* Exercici 2: La taula de multiplicar
Demana un número a l'usuari (per exemple el 5). Utilitza un bucle per mostrar la seva taula de multiplicar a la consola:
5 x 1 = 5 5 x 2 = 10...5 x 10 = 50 */

let n = prompt("Introduce un numero:");
n = Number(n);
for ( i = 1; i <= 10 ;i++ ){
     console.log(n + " x "+ i + " = " + (n * i));
}

/* 📘 Exercici 3: Suma acumulada
Calcula la suma dels primers 50 números (1 + 2 + 3 + ... + 50) utilitzant un bucle. */
// Correct result 
let total = 0;
for (let i = 1; i <= 50; i++) {
  total += i;
}
  console.log(total);
/*
// Incorrect result 
let sum = 0;
for (let i = 1; i <= 50; i++) {
  //sum += i;
}
// out of scope 
sum += i;
console.log(sum);
*/

/* Exercici 4: Endevina el número (Joc)
Aquest exercici necessita un bucle
while o do...while
1. El programa té un número secret (per exemple, el 7).
2. Demana a l'usuari que endevini el número.
3.Si falla, li torna a demanar.
4.Si l'encerta, el bucle s'acaba i felicita l'usuari.
💡Extra: Si vols que el número secret sigui aleatori, fes servir:
let secret = Math.floor(Math.random() * 10) + 1; */

//let secret = Math.floor(Math.random() * 10) + 1;
let secret = 7; 
let guess = Number(prompt("Gues the secret number: "));
while (guess !== secret) {
  guess = Number(prompt("Wrong. Try again:"));
}
console.log("Correct! The secret number is " + secret);

// version do while 
let secretNum = 7;
let guessNun;

do {
  guess = Number(prompt("Guess the number:"));
} while (guessNum !== secretNum);
console.log("Correct! The secret number was " + secretNum);


/* Repte Final: Triangle d'asteriscos
Pots fer que la consola dibuixi això fent servir bucles?
*************** */
let stars = "";
for (let i = 1; i <= 5; i++) {
  stars = stars + "*";   
  console.log(stars + "+");    
}