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
/* 
//if (valid operator) {
ask for numbers
perform the correct arithmetic
} else {
invalid
} */
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



// 
// Compact version - less verbose and creating an array: we validate the operator first - then we ask for the input numbers. If the first prompt is not satisfied the program is escaped.  

// we create an array using  the .includes() - function to check 
// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
/* let opInc = prompt("Choose an arithmetic operation to perform :  +, -, *, /");
["+", "-", "*", "/"].includes(opInc)
if ( ["+", "-", "*", "/"].includes(opInc) ) {
let nu1 = Number(prompt("Introduce a first number :")); 
let nu2 = Number(prompt("Introduce a second number :")); 
if (opInc === "+"){
console.log("Addition: " + nu1 + " plus "  +  nu2 + " = " +(nu1 + nu2) );  
} else if (opInc === "-") {
console.log("Subtraction: " + nu1 + " minus "  +  nu2 + " = " +(nu1 - nu2) );    
}else if (opInc === "*") {
console.log("Multiplication: " + nu1 + " times "  +  nu2 + " = " +(nu1 * nu2) );    
} else if (opInc === "/") {
console.log("Division: " + nu1 + " divided "  +  nu2 + " = " +(nu1 / nu2) );    
} else {
console.log("Invalid operation.");   
}
}else{
console.log("Invalid operation.");    
}
*/

/* let opInc = prompt("Choose an arithmetic operation to perform :  +, -, *, /");

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



// More precise output  message using a ternary : 


/* let opInc = prompt("Choose an arithmetic operation to perform :  +, -, *, /");
 
if (["+", "-", "*", "/"].includes(opInc)) {

     let raw1 = prompt("Introduce a first number :");
     let raw2 = prompt("Introduce a second number :");

     let nu1 = Number(raw1);
     let nu2 = Number(raw2);
     if (isNaN(nu1) && isNaN(nu2)) {
          console.log(`Both inputs are invalid: "${raw1}" and "${raw2}"`);
     } if (isNaN(nu1) || isNaN(nu2)) {
          console.log(`Invalid number(s): ${isNaN(nu1) ? `"${raw1}"` : ""
               } ${isNaN(nu2) ? `"${raw2}"` : ""
               }`);
     }
     else {
          if (opInc === "+") {
               console.log("Addition: " + nu1 + " plus " + nu2 + " = " + (nu1 + nu2));
          } else if (opInc === "-") {
               console.log("Subtraction: " + nu1 + " minus " + nu2 + " = " + (nu1 - nu2));
          } else if (opInc === "*") {
               console.log("Multiplication: " + nu1 + " times " + nu2 + " = " + (nu1 * nu2));
          } else if (opInc === "/") {
               console.log("Division: " + nu1 + " divided " + nu2 + " = " + (nu1 / nu2));
          } else if (opInc === "%") {
               console.log("The remainder of a division: the remaider of  " + nu1 + " divided " + nu2 + " = " + (nu1 % nu2));
          }
          else if (opInc === "%") {
               console.log("The percentage of " + nu1 + " is   = " + (nu1 % 100));
          }
          else {
               console.log("Invalid operation.");
          }
     }

} */



// Raw calculator with percentage : 

/* let opInc = prompt("Choose an arithmetic operation to perform :  +, -, *, /, %, %0");
if (["+", "-", "*", "/", "%", "%0"].includes(opInc)) {

     // declaration available for conditions 
     let raw1, raw2, nu1, nu2;

     if (opInc !== "%0") {
          raw1 = prompt("Introduce a first number:");
          raw2 = prompt("Introduce a second number:");
          nu1 = Number(raw1);
          nu2 = Number(raw2);
     }

     if (opInc === "%0") {
          raw1 = prompt("Introduce a first number:");
          nu1 = Number(raw1);
     }

// validation block 

     // Case 1: two-number operations
     if (opInc !== "%0") {

          if (isNaN(nu1) && isNaN(nu2)) {
               console.log(`Both inputs are invalid: "${raw1}" and "${raw2}"`);
               
          }else;

          if (isNaN(nu1) || isNaN(nu2)) {
               console.log(`Invalid Input: 
               ${isNaN(nu1) ? `"${raw1}"` : ""} 
               ${isNaN(nu2) ? `"${raw2}"` : ""}`);
               
          }else;

          
     }

     // Case 2: one-number operation
     if (opInc === "%0" && isNaN(nu1)) {
          console.log(`Invalid input: "${raw1}"`);
          return;
     }

// ---- operations block 

     if (opInc === "+") {
          console.log("Addition: " + nu1 + " plus " + nu2 + " = " + (nu1 + nu2));
     } else if (opInc === "-") {
          console.log("Subtraction: " + nu1 + " minus " + nu2 + " = " + (nu1 - nu2));
     } else if (opInc === "*") {
          console.log("Multiplication: " + nu1 + " times " + nu2 + " = " + (nu1 * nu2));
     } else if (opInc === "/") {
          console.log("Division: " + nu1 + " divided " + nu2 + " = " + (nu1 / nu2));
     } else if (opInc === "%") {
          console.log("The remainder of a division: the remainder of " + nu1 + " divided " + nu2 + " = " + (nu1 % nu2));
     } 
     else if (opInc === "%0") {
          console.log("Percentage of " + nu1 + " is = " + (nu1 / 100));
     }
     else {
          console.log("Invalid operation.");
     }

}
 */

// version with objects 

let binaryOps = {
  "+": "binary",
  "-": "binary",
  "*": "binary",
  "/": "binary",
  "%": "binary"
};

let unaryOps = {
  "%0": "unary"
};
let op = prompt("Operation: Choose an operation: +,-,*,/,%,%0");

if (binaryOps[op]) {
 let a = Number(prompt("First number:")) ;
 let b = Number(promt("Second number:"));
 if (isNaN(a) || (isNaN(b))){
 console.log("Invalid Number")
 } else {
   if (op === "+") console.log((a+b));
   else if (op === "-") console.log(a - b); 
   else if (op === "*") console.log(a * b); 
   else if (op === "/") console.log(a / b);
   else if (op === "%") console.log(a % b);
 } 
} 
 else if(unaryOps[op]) {
 let x = Number(prompt("Enter a number:"));
 if (isNaN(x)){
console.log("Invalid number.")
 } else {
 if (op === "%0") console.log(x * 0.10);
  else{ console.log("Invalid operation.")}
 }
}


