/* 1 📘 1. Positiu o Negatiu? (Nivell 1)
Demana un número a l'usuari.
Si és major que 0, mostra: "És positiu".
Si és menor que 0, mostra: "És negatiu".
Si és 0, mostra: "És zero". */

let n = Number(prompt("Introduce un numero."));
if (n > 0) {
  console.log(n + " es positivo");
} else if (n == 0) {
  console.log(n + " = " + n);
} else {
  console.log(n + " es negativo");
}

/* 2 📘 2. Aprovat o Suspès (Nivell 1)
Demana la nota de l'examen (de 0 a 10).
Si la nota és 5 o més: "Has aprovat! 🎉".
Si és menys de 5: "Has suspès 😞".
  */

let grade = Number(prompt("Introduce la nota de tu examen de 0 - 10 "));
if (grade >= 5) {
  console.log("Has pasado el examen.");
} else {
  console.log(" Has  suspendido el examen.");
}

/* 3 📘 3. El número més gran (Nivell 2)
Demana dos números diferents a l'usuari.
El programa ha de dir quin dels dos és el més gran. Exemple: "El 20 és més gran que el 5".  */

let n1 = Number(prompt("introduce una cifra :"));
let n2 = Number(prompt("Imtroduce otra cifra:"));
if (n1 > n2) {
  console.log(n1 + " > " + n2);
} else {
  console.log(n1 + " < " + n2);
}

/*📘 4. Dies de la setmana (Nivell 2 - Switch)
Demana un número de l'1 al 7.
Fes servir un switch per mostrar el dia corresponent:
1 -> "Dilluns"
2 -> "Dimarts"
... fins al 7 -> "Diumenge"
Qualsevol altre número -> "Error: dia incorrecte". */

let dia = prompt(
  "Introduce un numero 1 - 7, correspondiete al dia de la semana empezando por lunes. "
);
switch (dia) {
  case "1":
    console.log("Lunes, café urgente");
    break;
  case "2":
    console.log("Martes, orden nuevo");
    break;
  case "3":
    console.log("Miércoles, mitad valiente");
    break;
  case "4":
    console.log("Jueves, ritmo suave");
    break;
  case "5":
    console.log("Viernes, ánimo alto");
    break;
  case "6":
    console.log("Sábado, calma merecida");
    break;
  case "7":
    console.log("Domingo, pausa dulce");
    break;
  default:
    console.log("Día no válido");
}

/*📘 5. Botiga de descomptes (Nivell 3)
Demana el preu d'un producte.
Si el preu és superior a 100€, aplica un descompte del 10%.
Mostra el preu final per pantalla.*/

let precio = Number(prompt("¿Cuál es el precio del producto? "));
if (precio > 100) {
  console.log(
    "Aplicamos un 10% de descuento a tu compra.\n" +
      "Precio original: " +
      precio +
      " €\n" +
      "Precio final: " +
      (precio - precio * 0.1) +
      " €"
  );
} else {
  console.log(
    "Tu compra de " +
      precio +
      " € no supera los 100 €.\n" +
      "Para beneficiarte del 10% de descuento, el importe debe ser mayor."
  );
}

/* 📘 6. Login senzill (Nivell 3 - String)
Crea un sistema d'accés.
1. Demana un usuari amb prompt
2. Si l'usuari és "admin", mostra "Benvingut administrador".
3.Si l'usuari és qualsevol altra cosa, mostra "Accés denegat".
*/

let who = prompt("Indica el usuario que inicia la sesion.")
  .trim()
  .toLowerCase();
if (who === "admin") {
  console.log("Welcome, admin!");
} else {
  console.log("Acces denied.");
}

/* 📘 7. Login amb contrasenya (Nivell 4 - Operadors lògics)
Ara demana dues coses:usuari i contrasenya.
Només pot entrar si: L'usuari és "admin" I la contrasenya és "1234". */

let user = prompt("Indica el usuario que inicia la sesion.")
  .trim()
  .toLowerCase();
let pass = Number(prompt("Indica el password."));
if (user === "admin" && pass === 1234) {
  console.log("Welcome, admin!");
} else {
  console.log("Acces denied.");
}

/* 8  📘 8. El cinema (Nivell 4 - Else if)
Un cinema cobra diferent segons l'edat. Demana l'edat i mostra el preu:
Menys de 5 anys: "Gratis".
Entre 5 i 15 anys: "5€".
Entre 16 i 65 anys: "10€".
Més de 65 anys: "Gratis".*/

let entryAge = Number(prompt("Introduce tu edad."));

if (entryAge < 5) {
  console.log(entryAge + " años = Entrada Gratis");
} else if (entryAge >= 5 && entryAge <= 15) {
  console.log(entryAge + " años = Entrada 5€");
} else if (entryAge >= 16 && entryAge <= 65) {
  console.log(entryAge + " años = Entrada 10€");
} else {
  console.log(entryAge + " años = Entrada Gratis");
}

/* 9  📘 9. Tipus de triangle (Nivell 5 - Lògica)
Demana la longitud dels 3 costats d'un triangle (costatA, costatB, costatC).
Si els 3 són iguals: "Equilàter".
Si 2 són iguals: "Isòsceles".
Si cap és igual: "Escalè".*/

let l1 = Number(prompt("Introduce  la longitud de l1."));
let l2 = Number(prompt("Introduce  la longitud de l2."));
let l3 = Number(prompt("Introduce  la longitud de l3."));
if (l1 === l2 && l2 === l3) {
  console.log(`${l1}, ${l2}, ${l3} = Triángulo Equilatero`);
} else if (l1 === l2 || l2 === l3 || l1 === l3) {
  console.log(`${l1}, ${l2}, ${l3} = Triángulo Isosceles`);
} else {
  console.log(`${l1}, ${l2}, ${l3} = Triángulo Escaleno`);
}

/* 10 📘 10. Puc sortir a jugar? (Nivell 5 - Condicions niuades)
Per sortir a jugar cal complir dues condicions: fer bon temps i haver acabat els deures.
1. Demana: "Fa sol? (si/no)"
2. Demana: "Has acabat els deures? (si/no)"
Si totes dues respostes són "si", mostra: "Pots sortir! ⚽".
Si fa sol però no has acabat els deures: "Acaba la feina primer!".
Si plou (no fa sol): "Millor queda't a casa 🌧️". */
let weather = prompt("Hace sol? - (si/no)").toLowercase;
let homework = prompt("Has acado tus deberes? - (si/no)").toLowercase;
if (weather === "si" && homework === "si") {
  console.log("Puedes salir!");
} else if (weather === "si" && homework === "no") {
  console.log(" Acaba los deberes!");
} else {
  console.log("Mejor quedate en casa!");
}
