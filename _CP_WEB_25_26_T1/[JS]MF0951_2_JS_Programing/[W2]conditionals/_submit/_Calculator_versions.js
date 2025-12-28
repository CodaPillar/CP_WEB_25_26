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

//ARRAY VERSION 

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
 */
     /* ---- validation block/

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



// OBJECT VERSION 

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

