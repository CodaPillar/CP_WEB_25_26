/* 📘 Exercici 1: Parell o Senar?
Demana un número a l'usuari amb prompt(). El programa ha de dir si el número és parell o senar. */
let evenOdd = Number(prompt("please, input a number:"));
if (evenOdd % 2 == 0) {
     console.log("Your number is even.");
} else {
     console.log("Your number is odd.");
}

//💡 Pista: Fes servir l'operador mòdul %. Si numero % 2 == 0, és parell.

/* 📘 Exercici 2: El porter de discoteca
Demana l'edat a l'usuari.

Si té menys de 18 anys: Mostra "No pots entrar".
Si té entre 18 i 65 anys: Mostra "Pots entrar a la festa".
Si té més de 65 anys: Mostra "Tens entrada VIP gratuïta". */

let edat = Number(prompt("Que edat tienes? "));
if (edat < 18) {
     console.log(edat + " = " + "No puedes entrar.")
} else if (edat >= 18 && edat <= 65) {
     console.log(edat + " = " + "Puedes entrar.");
} else {
     console.log(edat + " = " + "Tienes entrada VIP.");
}


/* 📘 Exercici 3: Semàfor (Switch)
Crea una variable color amb el valor "vermell", "groc" o "verd". Fes servir un switch:

Vermell -> "Stop!"
Groc -> "Prepara't..."
Verd -> "Endavant!"
Altres -> "Semàfor espatllat" */
let colour = prompt("Choose a colour : red, yellow, green")
switch (colour) {
     case "red":
          console.log("Stop!");
          break;
     case "yellow":
          console.log("Be ready");
          break;
     case "green":
          console.log("Go!");
          break;
     default:
          console.log("The trafic lights are out of order.")
}


/* 📘 Exercici 4: Calculadora Bàsica (Repàs)
Millora la calculadora de la unitat anterior. Demana dos números i un operador (+, -, *, /). Fes servir if/else o switch per fer l'operació correcta. Si l'usuari posa un símbol estrany, mostra "Operació no vàlida". */

//Version switch 

let op = prompt("Choose an arithmetic operation to perform :  +, -, *, /");
let num1 = Number(prompt("Introduce a first number:"));
let num2 = Number(prompt("Introduce a second number:"));
switch (op) {
     case "+":
          console.log("Addition " + num1 + " plus " + num2 + " = " + (num1 + num2));
          break;
     case "-":
          console.log("Substraction " + num1 + " minus " + num2 + " = " + (num1 - num2));
          break;
     case "*":
          console.log("Multiplication " + num1 + " times " + num2 + " = " + (num1 * num2));
          break;
     case "/":
          console.log("Division " + num1 + " divided by " + num2 + " = " + (num1 / num2));
          break;
     default:
          console.log("Invalid operation.");
}


// Version conditional
let operation = prompt("Choose an arithmetic operation to perform :  +, -, *, /");
let number1 = Number(prompt("Introduce a first number:"));
let number2 = Number(prompt("Introduce a second number:"));
if (operation === "+") {
     console.log("Addition: " + number1 + " plus " + number2 + " = " + (number1 + number2));
} else if (operation === "-") {
     console.log("Substraction: " + number1 + " minus " + number2 + " = " + (number1 - number2));
} else if (operation === "*") {
     console.log("Multiplication: " + number1 + " times " + number2 + " = " + (number1 * number2));
} else if (operation === "/") {
     console.log("Division: " + number1 + " divided by " + number2 + " = " + (number1 / number2));
} else {
     console.log("Invalid operation.");
}

// Compact version: we validate the operator first - then we ask for the input numbers 

let opv2 = prompt("Choose an arithmetic operation to perform :  +, -, *, /");
if (opv2 === "+" || opv2 === "-" || opv2 === "*" || opv2 === "/") {
     let n1 = Number(prompt("Introduce a first number:"));
     let n2 = Number(prompt("Introduce a second number:"));
     if (opv2 === "+") {
          console.log("Addition: " + n1 + " plus " + n2 + " = " + (n1 + n2));
     } else if (opv2 === "-") {
          console.log("Substraction: " + n1 + " minus " + n2 + " = " + (n1 - n2));
     } else if (opv2 === "*") {
          console.log("Multiplication: " + n1 + " times " + n2 + " = " + (n1 * n2));
     } else if (opv2 === "/") {
          console.log("Division: " + n1 + " divided " + n2 + " = " + (n1 / n2));
     } else {
          console.log("Invalid operation.");
     }
} else {
     console.log("Invalid Operation.");
}




/* 
// Variations

let opInc = prompt("Choose an arithmetic operation to perform :  +, -, *, /");

if ( ["+", "-", "*", "/"].includes(opInc) ) {

let raw1 = prompt("Introduce a first number :"); 
let raw2 = prompt("Introduce a second number :"); 

let nu1 = Number(raw1);
let nu2 = Number(raw2); 

if (isNaN(nu1) && isNaN(nu2)) {
     console.log(`Both inputs are invalid: "${raw1}" and "${raw2}"`);
} else if (isNaN(nu1)) {
     console.log(`Invalid number: "${raw1}"`);
} else if (isNaN(nu2)) {
     console.log(`Invalid number: "${raw2}"`);
} else {

     if (opInc === "+") {
          console.log("Addition: " + nu1 + " plus "  +  nu2 + " = " +(nu1 + nu2));  
     } else if (opInc === "-") {
          console.log("Subtraction: " + nu1 + " minus "  +  nu2 + " = " +(nu1 - nu2));    
     } else if (opInc === "*") {
          console.log("Multiplication: " + nu1 + " times "  +  nu2 + " = " +(nu1 * nu2));    
     } else if (opInc === "/") {
          console.log("Division: " + nu1 + " divided "  +  nu2 + " = " +(nu1 / nu2));    
     } else {
          console.log("Invalid operation.");   
     }  
}

} else {
console.log("Invalid operation.");
}
*/








