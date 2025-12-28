```js
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

     /* ---- validation block ----- */

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

     /* ---- operations block ----- */

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
```



### structure 

```assembly
Ask operator
↓
If operator valid → ask 1 or 2 numbers
↓
Validate numbers deeply
↓
If valid → perform correct operation
↓
Else print which one is invalid

```

###  Improved operation 

```js
let op = prompt("Choose an operation: +, -, *, /, %, %0");

// Check operation validity
if (!["+", "-", "*", "/", "%", "%0"].includes(op)) {
    console.log("Invalid operation.");
} else {

    // Ask for numbers (1 or 2 depending on the operation)
    let raw1 = prompt("Enter the first number:");
    let n1 = Number(raw1);

    let n2;
    if (op !== "%0") {
        let raw2 = prompt("Enter the second number:");
        n2 = Number(raw2);

        if (isNaN(n1) || isNaN(n2)) {
            console.log("Invalid number.");
        } else {
            // Two-number operations
            if (op === "+") console.log(`${n1} + ${n2} = ${n1 + n2}`);
            else if (op === "-") console.log(`${n1} - ${n2} = ${n1 - n2}`);
            else if (op === "*") console.log(`${n1} * ${n2} = ${n1 * n2}`);
            else if (op === "/") console.log(`${n1} / ${n2} = ${n1 / n2}`);
            else if (op === "%") console.log(`${n1} % ${n2} = ${n1 % n2}`);
        }

    } else {
        // Single-number percentage
        if (isNaN(n1)) {
            console.log("Invalid number.");
        } else {
            console.log(`10% of ${n1} is ${n1 * 0.10}`);
        }
    }
}

```

```assembly
Now we have:

if op needs 2 numbers:
    → ask 2 numbers
    → validate both
    → perform 2-number operations

else (op needs 1 number):
    → ask 1 number
    → validate it
    → perform 1-number operation


This is clean, readable, and logic-forward.
```

```assembly
🌱 You Just Discovered “Dispatch Architecture”

Let me show you what your brain has now built:

           [ User chooses op ]
                    │
          ┌─────────┴──────────┐
          │                    │
   [ unary domain ]      [ binary domain ]
          │                    │
      ask 1 input          ask 2 inputs
          │                    │
 validate nu1            validate nu1, nu2
          │                    │
   compute unary        compute binary
          │                    │
    show result          show result


This is what software engineers call a dispatch tree.

You arrived here organically, from completely beginner-friendly tools like if and prompt.

That’s extremely good.
```

