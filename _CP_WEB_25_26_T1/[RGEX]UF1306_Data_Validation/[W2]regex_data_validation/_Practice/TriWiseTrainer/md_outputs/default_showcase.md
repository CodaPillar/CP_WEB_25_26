# Bank export — no solutions


### T1 · Clasificación (tri)

> 💡 *Hint:* toFixed() formats as text.

```js
typeof (2.5).toFixed(0);
```
**Explanation**

toFixed returns a string representation of the rounded value.


### T2 · Clasificación (tri)

> 💡 *Hint:* Legacy, but optimized for id.

```js

```
**Explanation**

`getElementById` is optimized and returns the element or null.


### S1 · Short answer

> 💡 *Hint:* Order of operations.

```js
console.log(2 + 3 * 4);
```
**Explanation**

Multiplication first (3*4=12), then 2+12=14.


### S2 · Short answer

> 💡 *Hint:* Template literals interpolate exactly.

**Setup**

```js
const n = 3; const label = 'Emails';
```

```js
console.log(`${label} = ${n}`);
```
**Explanation**

Backticks produce a string with the values inserted verbatim.


### C1 · Code validator

**Prompt:** Write a single expression that evaluates strictly to 10.

> 💡 *Hint:* Use arithmetic; no side effects.

**Tests**

- result === 10


### C2 · Code validator

**Prompt:** Return a function that doubles a number.

> 💡 *Hint:* Return the function value, don’t declare then return.

**Tests**

- typeof fn==='function'
- fn.length===1
- fn(5)===10
- fn(-3)===-6


### C3 · Code validator

**Prompt:** Define and export `makeLabel(label,n)` that returns `${label} = ${Number(n)}`. Attach it to `exports`.

> 💡 *Hint:* Attach to `exports` so tests can see it.

**Tests**

- typeof exports.makeLabel==='function'
- exports.makeLabel('Emails',3)==='Emails = 3'


### C4 · Code validator

**Prompt:** Use the provided runtime var `rate` and export `addTax(x)` that returns `x * (1+rate)` (rounded to 2 decimals as a number).

> 💡 *Hint:* Use `toFixed(2)` then wrap with Number(...).

**Tests**

- typeof exports.addTax==='function'
- exports.addTax(100)===121
- exports.addTax(12.5)===15.13


### T3 · Clasificación (tri)

> 💡 *Hint:* Prefer event listeners over inline handlers.

```js

```
**Explanation**

`DOMContentLoaded` fires when the DOM is fully parsed, no inline attributes needed.

