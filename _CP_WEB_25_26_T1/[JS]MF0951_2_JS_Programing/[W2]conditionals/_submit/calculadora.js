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


//Raw calculator with percentage : 

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
 



