/*let n = Number(prompt("Introduce un numero."));
if (n > 0 ){
console.log( n + " es positivo");
} else if(n == 0){
     console.log(n + " = " + n);
}else{
     console.log( n +" es negativo");
}*/
/*let grade = Number(prompt("Introduce la nota de tu examen de 0 - 10 "));
if (grade >= 5){
console.log("Has pasado el examen.");
}else {
console.log ("No has pasado el examen.")
}*/

/*
let n1 = Number(prompt("introduce una cifra :"));
let n2 = Number(prompt("Imtroduce otra cifra:"));
if(n1 > n2){
     console.log(n1 + " > " +n2);
}
else{
 console.log(n1 + " < " +n2);
}
*/
/*
let dia = prompt("Introduce un numero 1 - 7, correspondiete al dia de la semana empezando por lunes.");

switch(dia){
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
*/
/*
let precio = Number(prompt("¿Cuál es el precio del producto? "));
if (precio > 100) {
  console.log(
    "Aplicamos un 10% de descuento a tu compra.\n" +
    "Precio original: " + precio + " €\n" +
    "Precio final: " + (precio - precio * 0.10) + " €"
  );
} else {
  console.log(
    "Tu compra de " + precio + " € no supera los 100 €.\n" +
    "Para beneficiarte del 10% de descuento, el importe debe ser mayor."
  );
}*/

/*
let who = prompt("Indica el usuario que inicia la sesion ");
who = who.trim().toLowerCase(); 
if (who === "admin"){
     console.log("Welcome, admin!");
}else{
     console.log("Denied access");
}
*/

/*
let user = prompt("Indica el usuario que inicia la sesion.").trim().toLowerCase(); 
let pass = Number(prompt("Indica el password."));
 if (user === "admin" && pass === 1234){
     console.log("Welcome, admin!");
}else{
     console.log("Acces denied.");
}
*/
/*
let entryAge = Number(prompt("Introduce tu edad."));
if (entryAge < 5){
console.log( entryAge + "  anos = " + " Entrada Gratis");
}else if (entryAge == 5 && entryAge <= 15) {
console.log( edat + " = " + " Entrada 5€");
}else if (entryAge == 16 && entryAge <= 65) {
console.log( entryAge + " = " + " Entrada 10€");
}else{
console.log( entryAge + " = " + " Entrada Gratis");
}*/
 /*
let entryAge = Number(prompt("Introduce tu edad."));

if (entryAge < 5) {
  console.log(entryAge + " años = Entrada Gratis");
} else if (entryAge >= 5 && entryAge <= 15) {
  console.log(entryAge + " años = Entrada 5€");
} else if (entryAge >= 16 && entryAge <= 65) {
  console.log(entryAge + " años = Entrada 10€");
} else {
  console.log(entryAge + " años = Entrada Gratis");
} */
/*
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
*/


let weather = prompt("Hace sol? - (si/no)").toLowercase;
let homework = prompt("Has acado tus deberes? - (si/no)").toLowercase;
if(weather === "si" && homework === "si") {
     console.log("Puedes salir!");
} else if (weather === "si" && homework === "no"){
     console.log(" Acaba los deberes!");
} else{
     console.log("Mejor quedate en casa!"); 
}
