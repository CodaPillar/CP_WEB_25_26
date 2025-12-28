<p id='created-timestamp'>Created: 2025-10-19 21:56:34</p>
# Bank export — with solutions


### EVT-10 · Clasificación (tri)

**Question:** Select the element with id 'btnStart'. Which line is correct?

**Tu selección:** const el = document.getElementById('btnStart');

**Estado:** ✅ Bien · **Correcta:** const el = document.getElementById('btnStart');

**Explicación**

`getElementById('id')` expects just the id text, not a CSS selector.

> 💡 *Pista:* getElementById uses the raw id (no #).


### EVT-11 · Clasificación (tri)

**Question:** Using querySelector, pick the line that selects id='title'.

**Tu selección:** const el = document.querySelector('#title');

**Estado:** ✅ Bien · **Correcta:** const el = document.querySelector('#title');

**Explicación**

`querySelector('#title')` returns the first element with that id.

> 💡 *Pista:* Use CSS syntax: # for id, . for class.


### EVT-12 · Clasificación (tri)

**Question:** Select all elements with class 'card' using querySelectorAll.

**Tu selección:** const cards = document.querySelectorAll('.card');

**Estado:** ✅ Bien · **Correcta:** const cards = document.querySelectorAll('.card');

**Explicación**

`querySelectorAll('.card')` returns a static NodeList of all matches.

> 💡 *Pista:* CSS class uses a leading dot.


### EVT-13 · Clasificación (tri)

**Question:** Bind a click event so that runCalc is called on click (not immediately).

**Tu selección:** btn.addEventListener('click', runCalc);

**Estado:** ✅ Bien · **Correcta:** btn.addEventListener('click', runCalc);

**Explicación**

`runCalc` (no parentheses) defers execution until the event occurs.

> 💡 *Pista:* Pass a reference, not the result of calling it.


**JS**

```js
const btn = document.getElementById('btnCalc');
```

### EVT-14 · Clasificación (tri)

**Question:** You need to pass `42` to `run(x)` when the button is clicked. Pick the correct binding.

**Tu selección:** btn.addEventListener('click', () => run(42));

**Estado:** ✅ Bien · **Correcta:** btn.addEventListener('click', () => run(42));

**Explicación**

`()=>run(42)` creates a function to be invoked on click with argument 42.

> 💡 *Pista:* Wrap the call in an arrow to defer execution.


**JS**

```js
const btn = document.getElementById('go'); function run(x){ /* ... */ }
```

### EVT-15 · Clasificación (tri)

**Question:** To react when the page scrolls, which target should you bind on?

**Tu selección:** window.addEventListener('scroll', onScroll)

**Estado:** ✅ Bien · **Correcta:** window.addEventListener('scroll', onScroll)

**Explicación**

In standard layouts, page scrolling is observed on `window` (or a scrollable container).

> 💡 *Pista:* Who actually emits the scroll event in a normal page?


### EVT-16 · Clasificación (tri)

**Question:** Choose the safest delegated click body for a list of <li class="item"> inside #list.

**Tu selección:** const it = e.target.closest('.item'); if (it && list.contains(it)) selectItem(it);

**Estado:** ✅ Bien · **Correcta:** const it = e.target.closest('.item'); if (it && list.contains(it)) selectItem(it);

**Explicación**

`closest('.item')` finds the intended li even if a child was clicked; `contains` ensures it belongs to this list.

> 💡 *Pista:* Climb from target to the nearest .item and guard containment.


**JS**

```js
const list = document.getElementById('list'); list.addEventListener('click',(e)=>{ /* choose one body */ });
```

### EVT-17 · Clasificación (tri)

**Question:** Which line correctly removes a previously added keydown listener?

**Tu selección:** document.removeEventListener('keydown', onKey);

**Estado:** ✅ Bien · **Correcta:** document.removeEventListener('keydown', onKey);

**Explicación**

Removal only works with the exact same reference that was registered.

> 💡 *Pista:* Same type + same function reference (and same options).


**JS**

```js
function onKey(e){} document.addEventListener('keydown', onKey);
```

### EVT-18 · Clasificación (tri)

**Question:** Select only the buttons inside #menu (not global). Which query is correct?

**Tu selección:** document.querySelectorAll('#menu button')

**Estado:** ✅ Bien · **Correcta:** document.querySelectorAll('#menu button')

**Explicación**

`'#menu button'` restricts matches to buttons contained within #menu.

> 💡 *Pista:* Use a descendant CSS selector.


### FN-10 · Validador (code/fn)

**Question:** Return a function `fn(s)` that returns true if `s` looks like an id selector (starts with '#').

**Tu respuesta (código):**

```js
(s)=> typeof s==='string' && s.startsWith('#')
```

**Scaffold**

```js
(s)=> typeof s==='string' && s.startsWith('#')
```

**Tests (reciben `fn`, `env`)**

- typeof fn==='function'
- fn('#title')===true
- fn('.title')===false
- fn('title')===false

**Feedback**

A simple prefix test distinguishes id selectors in CSS syntax.

> 💡 *Pista:* Check the first character.


### FN-11 · Validador (code/fn)

**Question:** Return a function `fn(s)` that returns true if `s` looks like a class selector (starts with '.').

**Tu respuesta (código):**

```js
(s)=> typeof s==='string' && s.startsWith('.')
```

**Scaffold**

```js
(s)=> typeof s==='string' && s.startsWith('.')
```

**Tests (reciben `fn`, `env`)**

- typeof fn==='function'
- fn('.btn')===true
- fn('#id')===false
- fn('button')===false

**Feedback**

Class selectors begin with '.' in CSS selector syntax.

> 💡 *Pista:* Check for a leading dot.


### FN-12 · Validador (code/fn)

**Question:** Return a function `fn(s)` that returns true if `s` is a common DOM event type among this set: 'click','input','scroll','change'.

**Tu respuesta (código):**

```js
(s)=> typeof s==='string' && ['click','input','scroll','change'].includes(s)
```

**Scaffold**

```js
(s)=> typeof s==='string' && ['click','input','scroll','change'].includes(s)
```

**Tests (reciben `fn`, `env`)**

- typeof fn==='function'
- fn('click')===true
- fn('scroll')===true
- fn('keydown')===false

**Feedback**

This checks membership in a fixed array of common event types.

> 💡 *Pista:* Use an inclusion check on a small whitelist.
