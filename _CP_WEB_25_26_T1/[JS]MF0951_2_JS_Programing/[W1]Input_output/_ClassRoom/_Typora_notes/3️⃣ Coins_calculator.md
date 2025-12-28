## 3️⃣ Drills (same pattern, gentle practice)

Let’s create 3 drill prompts you can solve on your own, in your notebook or VS Code, **no functions**, just variables and console.log.

### 🔁 Drill 1 — Coins but *only* 0.25, 0.10, 0.05, 0.01 (all in cents)

> Ask the user:
>
> - number of 0.25€ coins
> - number of 0.10€ coins
> - number of 0.05€ coins
> - number of 0.01€ coins
>
> Calculate how many euros and cents they have in total.

**Hint structure (your job is to fill):**

```js
let c25 = Number(prompt("Monedas de 0.25:"));
let c10 = Number(prompt("Monedas de 0.10:"));
let c05 = Number(prompt("Monedas de 0.05:"));
let c01 = Number(prompt("Monedas de 0.01:"));

let totalCents = /* TU LÓGICA AQUÍ */;
let euros = Math.floor(totalCents / 100);
let cents = totalCents % 100;

console.log("Tienes " + euros + " euros y " + cents + " centimos");
```

------

### 🕒 Drill 2 — Seconds to hours, minutes, seconds

> Ask a total number of seconds,
>  show how many **hours, minutes, seconds** that is.

**Structure:**

```js
let totalSeconds = Number(prompt("Segundos totales:"));

let hours = Math.floor(totalSeconds / 3600);
let remainingSec = totalSeconds % 3600;
let minutes = Math.floor(remainingSec / 60);
let seconds = remainingSec % 60;

console.log(totalSeconds + " segundos son " + hours + " horas, " + minutes + " minutos y " + seconds + " segundos.");
```

Try to *re-derive* it from your coins logic:
 “big units first, modulo, then smaller units”.

------

### 📦 Drill 3 — Boxes and leftovers

> You have:
>
> - number of big boxes that hold 20 items
> - number of medium boxes that hold 5 items
> - number of loose items
>
> Show:
>
> - total items
> - how many full boxes of 20 you can build from everything
> - leftover items

Let:

```js
let big = Number(prompt("Cajas grandes (20):"));
let medium = Number(prompt("Cajas medianas (5):"));
let loose = Number(prompt("Objetos sueltos:"));

let totalItems = /* tu logica */;
// luego, cuantos grupos de 20 caben
let fullBoxes20 = Math.floor(totalItems / 20);
let leftoverItems = totalItems % 20;

console.log("En total tienes " + totalItems + " objetos.");
console.log("Puedes llenar " + fullBoxes20 + " cajas de 20.");
console.log("Sobran " + leftoverItems + " objetos.");
```

------

If you like, next step could be:

- You pick **one of these drills** (or your original coin code)