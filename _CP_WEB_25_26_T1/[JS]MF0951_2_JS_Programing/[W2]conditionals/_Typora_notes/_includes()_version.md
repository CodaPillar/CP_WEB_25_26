### .includes();

```js
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

```

## 🧮 **Mini-Calculator Program — Overview (Caterpillar Logic Edition)**

This small JavaScript program performs arithmetic operations chosen by the user.
 It is designed to be **bullet-proof**, meaning:

1. It checks whether the operator is valid
2. It verifies that the numbers entered are true numbers
3. It only performs the calculation if **all three inputs** are correct

This approach creates a **robust, professional structure** suitable for learning and for future projects.

------

### **1. Operator Validation — The “Array Gatekeeper”**

Before doing anything else, we check whether the user has chosen a valid operator.

We use an **array plus `.includes()`**:

```js
["+", "-", "*", "/", "%", "mod"].includes(opInc)
```

If the operator is NOT inside the array,
 we **escape the program immediately** and show:

```js
Invalid operation.
```

This prevents unnecessary prompts and avoids invalid computations.

This pattern is called **early exit** or **flow gating** and is used in real-world applications.

------

### **2. Number Validation — Protecting Against NaN**

User inputs come as **strings**.
 We store the raw values first:

```js
let raw1 = prompt("First number:");
let raw2 = prompt("Second number:");
```

Then convert:

```js
let n1 = Number(raw1);
let n2 = Number(raw2);
```

We check for invalid numbers with:

```js
isNaN(n1) || isNaN(n2)
```

If one (or both) are invalid, the program says exactly which input failed.

Only **if both numbers are valid** do we proceed.

This creates a **second protection layer**, making the calculator safe and predictable.

------

### **3. Final Stage — Performing the Operation**

If:

- the operator is valid
- the numbers are both valid

…we evaluate the operation using a simple conditional structure.

At this stage, everything is guaranteed valid,
 so no errors can come from unexpected input.

This stage can include:

- addition
- subtraction
- multiplication
- division
- modulo (remainder)
- percentage

The calculator now behaves like a clean, reliable small application.

------

### ⭐ **4. Why This Structure Matters**

This program teaches several professional habits:

- validate early
- avoid unnecessary computation
- use readable logic
- provide meaningful error messages
- separate the program into conceptual layers
- ensure input integrity before doing math

These principles appear constantly in frontend development and in programming exams.ß