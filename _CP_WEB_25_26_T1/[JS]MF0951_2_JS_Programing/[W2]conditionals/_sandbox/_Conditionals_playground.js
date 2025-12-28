/*let color = prompt("Introdueix un color (vermell, groc, verd):").toLowerCase();

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
}*/

/*let num1 = Number(prompt("Introdueix el primer número:"));
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
}*/

/*let op = prompt("Introdueix l'operador (+, -, *, /):");

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
} */

/*let edat = Number(prompt("How old are you? "));
     if (edat< 18){
          console.log("You cannot come in.")
     }else if(edat >= 18 && edat <= 65) {
          console.log ("You can enter.");
     }else {
          console.log("You have a VIP member entry.")
     } */
/*let colour = prompt("Choose a colour : red, yellow, green")
switch (colour){
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
     console.log("The trafic lights are out of order")
} */


/*let op = prompt("Choose an arithmetic operation to perform :  +, -, *, /");
 let num1 = Number(prompt("Introduce a first number:"));
 let num2 = Number(prompt("Introduce a second number:"));
 switch (op) {
 case "+":
     console.log("Addition " + num1 + "plus "  + num2 + " = " +(num1 + num2) );
 break;
 case "-":
     console.log("Substraction " + num1 + "minus "  + num2  + " = " +(num1 - num2));
 break;
  case "*":
     console.log("Multiplication " + num1 + " by "  + num2 + " = " +(num1 * num2));
 break;
case "/":
     console.log("Division " + num1 + " divided by "  + num2 + " = " +(num1 / num2));
 break;
 default:
     console.log("Not a number.")
 }
*/
/*
let operation = prompt("Choose an arithmetic operation to perform :  +, -, *, /");
let number1 = Number(prompt("Introduce a first number:"));
let number2 = Number(prompt("Introduce a second number:"));
if (operation === "+" ){
console.log("Addition: " + number1 + " plus "  +  number2 + " = " +(number1 + number2) );  
} else if(operation === "-"){
  console.log("Substraction: " + number1 + " minus "  +  number2 + " = " +(number1 - number2) );    
} else if(operation === "*"){
   console.log("Multiplication: " + number1 + " times "  +  number2 + " = " +(number1 * number2) );      
}else if(operation === "/"){
   console.log("Division: " + number1 + " divided by "  +  number2 + " = " +(number1 / number2) );      
}else {
   console.log("Invalid operation.");  
}
*/
/*
let opv2 = prompt("Choose an arithmetic operation to perform :  +, -, *, /");
if (opv2 === "+" || opv2 === "-" || opv2 === "*" || opv2 === "/") {
     let n1 = Number(prompt("Introduce a first number:"));
     let n2 = Number(prompt("Introduce a second number:"));
     if (opv2 === "+") {
     console.log("Addition: " + n1 + " plus "  +  n2 + " = " +(n1 + n2) );  
     } else if (opv2 === "-") {
     console.log("Substraction: " + n1 + " minus "  +  n2 + " = " +(n1 - n2) );  
          } else if (opv2 === "*") {
     console.log("Multiplication: " + n1 + " times "  +  n2 + " = " +(n1 * n2) );  
          }else if (opv2 === "/") {
     console.log("Division: " + n1 + " divided "  +  n2 + " = " +(n1 / n2) );  
          } else {
     console.log("Invalid operation.");  
               }  
               } */

/*let opInc = prompt("Choose an arithmetic operation to perform :  +, -, *, /");
["+", "-", "*", "/"].includes(opInc)
if ( ["+", "-", "*", "/"].includes(opInc) ) {
 let nu1 = Number(prompt("Introduce a first number :")); 
 let nu2 = Number(prompt("Introduce a second number :"))  
 if (opInc === "+"){
 console.log("Addition: " + nu1 + " plus "  +  nu2 + " = " +(nu1 + nu2) );  
 } else if (opInc === "-") {
   console.log("Subtraction: " + nu1 + " minus "  +  nu2 + " = " +(nu1 - nu2) );    
 }else if (opInc === "*") {
   console.log("Multiplication: " + nu1 + " times "  +  nu2 + " = " +(nu1 * nu2) );    
 } else if (opInc === "/") {
   console.log("Division: " + nu1 + " divided "  +  nu2 + " = " +(nu1 / nu2) );    
 }
}else{
 console.log("Invalid operation.")    
} */
/*
let opInc = prompt("Choose an arithmetic operation to perform :  +, -, *, /");
["+", "-", "*", "/"].includes(opInc)
if ( ["+", "-", "*", "/"].includes(opInc) ) {
 let nu1 = Number(prompt("Introduce a first number :")); 
 let nu2 = Number(prompt("Introduce a second number :"))  
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

/*
// Lenghthy version isNaN is checked and displayed twice 
let opInc = prompt("Choose an arithmetic operation to perform :  +, -, *, /");
["+", "-", "*", "/"].includes(opInc)
if ( ["+", "-", "*", "/"].includes(opInc) ) {
     
     let raw1 = prompt("Introduce a first number :"); 
     let raw2 = prompt("Introduce a second number :"); 
     
     let nu1 = Number(raw1);
     let nu2 = Number(raw2); 
if (isNaN(nu1) && isNaN(nu2)) {
    console.log(`Both inputs are invalid: "${raw1}" and "${raw2}"`);
} else if (isNaN(nu1)) {console.log(`Invalid input: "${raw1}" and "${raw2}"`);
    console.log(`Invalid number: "${raw1}"`);
} else if (isNaN(nu2)) {
    console.log(`Invalid number: "${raw2}"`);
}
else {
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
}

}
*/

/*

let opInc = prompt("Choose an arithmetic operation to perform :  +, -, *, /, %, %0");

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

     /* ---- validation block /

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
          
     } else;

     /* ---- operations block /

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
// Objects version isNaN is checked and displayed once 
 
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
 let b = Number(prompt("Second number:"));
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
