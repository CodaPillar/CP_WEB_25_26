# Bank export — with solutions


### T1 · Clasificación (tri)

**Question:** What does typeof return for `(2.5).toFixed(0)`?

**Tu selección:** —

**Estado:** ⏳ Sin responder · **Correcta:** "string"

**Explicación**

toFixed returns a string representation of the rounded value.

> 💡 *Pista:* toFixed() formats as text.


**JS**

```js
typeof (2.5).toFixed(0);
```

### T2 · Clasificación (tri)

**Question:** Which is the most direct single id lookup?

**Tu selección:** —

**Estado:** ⏳ Sin responder · **Correcta:** document.getElementById('amount')

**Explicación**

`getElementById` is optimized and returns the element or null.

> 💡 *Pista:* Legacy, but optimized for id.


### S1 · Respuesta corta (short)

**Question:** What does the console print?

**Tu respuesta:** —

**Estado:** ❌ Incorrecta · **Correcta:** 14

**Explicación**

Multiplication first (3*4=12), then 2+12=14.

> 💡 *Pista:* Order of operations.


**JS**

```js
console.log(2 + 3 * 4);
```

### S2 · Respuesta corta (short)

**Question:** What is the exact output?

**Tu respuesta:** —

**Estado:** ❌ Incorrecta · **Correcta:** Emails = 3

**Explicación**

Backticks produce a string with the values inserted verbatim.

> 💡 *Pista:* Template literals interpolate exactly.


**JS**

```js
const n = 3; const label = 'Emails';
```

**JS**

```js
console.log(`${label} = ${n}`);
```

### C1 · Validador (code/expr)

**Question:** Write a single expression that evaluates strictly to 10.

**Tu respuesta (código):**

```js
5 * 2
```

**Scaffold**

```js
5 * 2
```

**Tests (reciben `result`, `env`)**

- result === 10

**Feedback**

Your expression should produce the number 10.

> 💡 *Pista:* Use arithmetic; no side effects.


### C2 · Validador (code/fn)

**Question:** Return a function that doubles a number.

**Tu respuesta (código):**

```js
(x)=>x*2
```

**Scaffold**

```js
(x)=>x*2
```

**Tests (reciben `fn`, `env`)**

- typeof fn==='function'
- fn.length===1
- fn(5)===10
- fn(-3)===-6

**Feedback**

In fn mode, your code must evaluate to a function; we then call it.

> 💡 *Pista:* Return the function value, don’t declare then return.


### C3 · Validador (code/prog)

**Question:** Define and export `makeLabel(label,n)` that returns `${label} = ${Number(n)}`. Attach it to `exports`.

**Tu respuesta (código):**

```js
function makeLabel(label="Value", n=0){
  return `${label} = ${Number(n)}`;
}
exports.makeLabel = makeLabel;
```

**Scaffold**

```js
function makeLabel(label="Value", n=0){
  return `${label} = ${Number(n)}`;
}
exports.makeLabel = makeLabel;
```

**Tests (evalúan estado/exports)**

- typeof exports.makeLabel==='function'
- exports.makeLabel('Emails',3)==='Emails = 3'

**Feedback**

In prog mode, anything on `exports` is visible to tests.

> 💡 *Pista:* Attach to `exports` so tests can see it.


### C4 · Validador (code/prog)

**Question:** Use the provided runtime var `rate` and export `addTax(x)` that returns `x * (1+rate)` (rounded to 2 decimals as a number).

**Tu respuesta (código):**

```js
// Example:
// exports.addTax = (x)=> Number((x*(1+rate)).toFixed(2));
```

**Scaffold**

```js
// Example:
// exports.addTax = (x)=> Number((x*(1+rate)).toFixed(2));
```

**Runtime vars**

```js
{
  "rate": 0.21
}
```

**Tests (evalúan estado/exports)**

- typeof exports.addTax==='function'
- exports.addTax(100)===121
- exports.addTax(12.5)===15.13

**Feedback**

We pass `rate` via runtime vars. Export a function reading it.

> 💡 *Pista:* Use `toFixed(2)` then wrap with Number(...).


### T3 · Clasificación (tri)

**Question:** Which is the modern way to run `init()` when DOM is ready?

**Tu selección:** —

**Estado:** ⏳ Sin responder · **Correcta:** document.addEventListener('DOMContentLoaded', init)

**Explicación**

`DOMContentLoaded` fires when the DOM is fully parsed, no inline attributes needed.

> 💡 *Pista:* Prefer event listeners over inline handlers.

