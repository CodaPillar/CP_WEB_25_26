## Basic conditional calculator 

📘 Exercici 4: Calculadora Bàsica (Repàs)
Millora la calculadora de la unitat anterior. Demana dos números i un operador (+, -, *, /). Fes servir if/else o switch per fer l'operació correcta. Si l'usuari posa un símbol estrany, mostra "Operació no vàlida". 

### Version Switch

#### ✔ **CORE IDEA**

Switch **dispatches** work based on matching one value.
Clean, readable, structured, perfect for menus or commands.

```assembly
START
  ↓
ask operator
  ↓
switch(op)
    ├── case "+"
    │      ↓
    │   ask numbers
    │      ↓
    │   addition
    ├── case "-"
    │      ↓
    │   ask numbers
    │      ↓
    │   subtraction
    ├── case "*"
    │      ↓
    │   ask numbers
    │      ↓
    │   multiplication
    ├── case "/"
    │      ↓
    │   ask numbers
    │      ↓
    │   division
    └── default
            ↓
         invalid
END

```

```js
/* 📘 Exercici 4: Calculadora Bàsica (Repàs)
Millora la calculadora de la unitat anterior. Demana dos números i un operador (+, -, *, /). Fes servir if/else o switch per fer l'operació correcta. Si l'usuari posa un símbol estrany, mostra "Operació no vàlida". */

//Version switch 

let op = prompt("Choose an arithmetic operation to perform :  +, -, *, /");
let num1 = Number(prompt("Introduce a first number:"));
let num2 = Number(prompt("Introduce a second number:"));
     switch (op) {
     case "+":
          console.log("Addition " + num1 + " plus "  + num2 + " = " +(num1 + num2) );
     break;
     case "-":
          console.log("Substraction " + num1 + " minus "  + num2  + " = " +(num1 - num2));
     break;
     case "*":
          console.log("Multiplication " + num1 + " times "  + num2 + " = " +(num1 * num2));
     break;
     case "/":
          console.log("Division " + num1 + " divided by "  + num2 + " = " +(num1 / num2));
     break;
     default:
          console.log("Invalid operation.");
     }
```

#### Skeleton structure

```assembly
let op = prompt("...");

switch (op) {
  case "+":
    // ask numbers
    // addition
    break;
  case "-":
    // ask numbers
    // subtraction
    break;
  case "*":
    // ask numbers
    // multiplication
    break;
  case "/":
    // ask numbers
    // division
    break;
  default:
    // invalid operator
}
```

## 2️⃣ **IF / ELSE IF CALCULATOR (Pattern: Sequential Checking)**

### Version condition verbose 

📘 Exercici 4: Calculadora Bàsica (Repàs)
Millora la calculadora de la unitat anterior. Demana dos números i un operador (+, -, *, /). Fes servir if/else o switch per fer l'operació correcta. Si l'usuari posa un símbol estrany, mostra "Operació no vàlida". 

#### ✔ **CORE IDEA**

Sequential evaluation:
 **check → check → check → fallback**.
 Very explicit, easy to understand.

```js
// Version conditional
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
```

### ✔ **ASCII LOGIC MAP**

```assembly
START
  ↓
ask operator
  ↓
ask n1, n2
  ↓
if op == "+"
       addition
else if op == "-"
       subtraction
else if op == "*"
       multiplication
else if op == "/"
       division
else
       invalid
END
```

### ✔ **SKELETON (EMPTY)**

```assembly
let op = prompt("...");
let n1 = Number(prompt("..."));
let n2 = Number(prompt("..."));

if (op === "+") {
    // addition
} else if (op === "-") {
    // subtraction
} else if (op === "*") {
    // multiplication
} else if (op === "/") {
    // division
} else {
    // invalid
}
```



### Version condition compact nested conditional

```js
let operation = prompt("Choose an arithmetic operation to perform :  +, -, *, /");
if (valid operator) {
    ask for numbers(Prompt for numbers)
    perform the correct arithmetic
} else {
    invalid
} 
```

📘 Exercici 4: Calculadora Bàsica (Repàs)
Millora la calculadora de la unitat anterior. Demana dos números i un operador (+, -, *, /). Fes servir if/else o switch per fer l'operació correcta. Si l'usuari posa un símbol estrany, mostra "Operació no vàlida". 

```js
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
               }

```

## 3️⃣ COMPACT VALIDATION + NESTED CONDITIONS

(Pattern: Gatekeeper + Logic Block)**

This is the one you liked:

```
if (op === "+" || op === "-" || op === "*" || op === "/") { ... }
```

#### ✔ **CORE IDEA**

This structure has **two layers**:

- **Layer 1: “Gatekeeper” validation**
   Only let the program continue if the operator is valid.
- **Layer 2: The real work (nested operations)**

This creates a **professional flow**: only valid inputs lead to computation.

```js
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
               }

```

### ✔ **ASCII LOGIC MAP**

```assembly
START
  ↓
ask operator
  ↓
VALID?  (+ or - or * or /)
  ├── NO → invalid → END
  └── YES
         ↓
     ask n1, n2
         ↓
     if op == "+"
         addition
     else if op == "-"
         subtraction
     else if op == "*"
         multiplication
     else if op == "/"
         division
END
```

### ✔ **SKELETON (EMPTY)**

```js
let op = prompt("...");

if (op === "+" || op === "-" || op === "*" || op === "/") {

    let n1 = Number(prompt("..."));
    let n2 = Number(prompt("..."));

    if (op === "+") {
        // addition
    } else if (op === "-") {
        // subtraction
    } else if (op === "*") {
        // multiplication
    } else if (op === "/") {
        // division
    }

} else {
    // invalid
}
```



This is *training wheels coding*.

They want:

```js
IF big condition {
      IF nested condition {
      } ELSE {
      }
} ELSE {
}
```

Even if the nested ELSE is redundant.

------

### ⭐ 2. Your original logic DID NOT require the inner else

Your structure **already prevented invalid operators** in the outer IF.

So this inner block:

```
} else {
   console.log("Invalid operation.");
}
```

is logically impossible to reach.

Because you already gated everything with:

```
if (opv2 === "+" || opv2 === "-" || opv2 === "*" || opv2 === "/")
```

This means by the time you go inside the nested block,
 the operator is guaranteed to be valid.

So the inner “Invalid operation” is **logically dead code**.

But…

------

### ⭐ 3. The teacher insisted because of a pedagogical rule:

They want every IF ladder to look symmetrical:

```js
IF
   ELSE IF
      ELSE IF
         ELSE
```

Even if you are inside another IF.

They don’t want this:

```js
IF (condition) {
    IF (other conditions) {
       ...
    } else if (...) {
       ...
    } else if (...) {
       ...
    } // <- inner IF ends here without ELSE
} else {
    // outer ELSE
}
```

Your code was correct *logically*
 but “missing an else” *visually*.

The teacher wants to encourage:

- full closure
- explicit branching
- visible symmetry
- rigid beginner structure

This is: **teaching for teenagers**, not **coding for developers**.

------

### ⭐ 4. Here is what the teacher wanted you to write

They want **every conditional ladder to contain an ELSE**,
 even if logically redundant.

So:

### Outer validation IF → needs an ELSE

**AND**

### Inner operation IF chain → needs an ELSE

So they expect:

```js
let opv2 = prompt("Choose an arithmetic operation: +, -, *, /");

if (opv2 === "+" || opv2 === "-" || opv2 === "*" || opv2 === "/") {

    let n1 = Number(prompt("Introduce a first number:"));
    let n2 = Number(prompt("Introduce a second number:"));

    if (opv2 === "+") {
        console.log("...");
    } else if (opv2 === "-") {
        console.log("...");
    } else if (opv2 === "*") {
        console.log("...");
    } else if (opv2 === "/") {
        console.log("...");
    } else {
        console.log("Invalid operation.");  // ← redundant but teacher insists
    }

} else {
    console.log("Invalid operation.");      // ← main invalid operator case
}
```

This produces **two** invalid cases.

In the real world you would never do this.
 But in a Week 1 class you follow their structure.

------

# ⭐ 5. Why the teacher insisted you “weren’t closed”

Because your structure looked like this:

```js
IF outer condition {
   IF operation chain {
   } else if {
   } else if {
   }  ← they expect an ELSE before closing this IF ladder
} else {
}
```

So to them:

- “your IF ladder isn’t closed”
- “you must finish the else chain”
- “the structure must be symmetrical”

Teachers trained in old-school pedagogy absolutely insist on this.



------

------

------



## 🧾 **4️⃣ CALCULATOR USING `.includes()` — DIAGRAM + SKELETON**

------

### ⭐ **ASCII LOGIC MAP — The Includes Pattern**

```assembly
START
  ↓
ask operator
  ↓
is operator in the allowed list?    ← ["+", "-", "*", "/"].includes(op)
  ├── NO → "Invalid operation" → END
  └── YES
         ↓
     ask n1, n2
         ↓
     now check which operation:
         ↓
     if op == "+" → addition
     else if op == "-" → subtraction
     else if op == "*" → multiplication
     else if op == "/" → division

END
```

### 💡 What changes from the compact OR-chain version?

Only this line:

```js
op === "+" || op === "-" || op === "*" || op === "/"
```

becomes:

```js
["+", "-", "*", "/"].includes(op)
```

Meaning:

> “Is `op` one of the allowed symbols?”

This is extremely clean, scales beautifully, and avoids repetition.

# ⭐ **ARRAY VALUES vs ARRAY POSITIONS**

### ✔ The array we want is:

```
["+", "-", "*", "/"]
```

### ✔ These are the **VALUES**:

```
"+"   "-"   "*"   "/"
```

### ✔ These are the **POSITIONS (indices)**:

```
 0     1     2     3
```

`.includes()` **does not care about positions**.
 It only checks the **VALUES**.

------

### ⭐ **So `.includes(opInc)` means:**

```
["+","-","*","/"].includes(opInc)
```

Which translates to:

> “Is opInc one of these values?”
>  +, -, *, /

# ⭐ Your final, correct understanding:

### 👉 Step 1 — Ask for operator:

```
let opInc = prompt("Choose an arithmetic operation to perform :  +, -, *, /");
```

### 👉 Step 2 — The includes check:

```
["+", "-", "*", "/"].includes(opInc)
```

### 👉 Step 3 — Full IF condition:

```
if ( ["+", "-", "*", "/"].includes(opInc) ) {

}
```

✨ This is EXACTLY RIGHT.
 ✨ This is the **correct syntax**.
 ✨ This is a **clean, professional validation**.
 ✨ This is what real developers use.

You’re not behind — you simply needed the pattern once.

------

### ⭐ Understanding WHY it works (very clear recap)

#### 🔸 1. `["+","-","*","/"]`

is an **array** containing the allowed operators.

#### 🔸 2. `.includes(opInc)`

checks whether `opInc` is one of those values.

#### 🔸 3. The whole expression:

```
["+", "-", "*", "/"].includes(opInc)
```

evaluates to:

- **true** → if opInc is `"+"`, `"-"`, `"*"`, or `"/"`
- **false** → if opInc is anything else

#### 🔸 4. So the IF statement becomes:

> **If the operator is valid → continue**
>  **Otherwise → show “Invalid operation”**

That’s it — simple and elegant.

### Stage 1

```js
let opInc = prompt("Choose an arithmetic operation to perform :  +, -, *, /");
["+", "-", "*", "/"].includes(opInc)
if ( ["+", "-", "*", "/"].includes(opInc) ) {

}
```

### Stage 2

```js
if ( ["+", "-", "*", "/"].includes(opInc) ) {
    // your two Number(prompt()) lines here
} else {
    console.log("Invalid operation.");
}
```

#### Implementation 

```js
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
```

