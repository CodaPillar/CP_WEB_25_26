### 3) How to run it (step-by-step, optimal setup)

**Folder layout**

```
trainer/
 ├─ index.html
 └─ pla2_actividad1_tri_cambridge.jsonl
```

**Option A — Quick preview (file://)**

- Just double-click `index.html`.
- It will use the inline fallback data (since `fetch()` can’t load local JSONL via `file://`).
- If you want it to use the JSONL, use Option B.

**Option B — Local server (recommended)**

1. **VS Code → Live Server**
   - Open the `trainer/` folder in VS Code.
   - Right-click `index.html` → **Open with Live Server**.
   - Ensure `DATA_SRC` is set to `"pla2_actividad1_tri_cambridge.jsonl"` (as in the code).
2. **Terminal (no VS Code)**
   - In `trainer/`, run:
     - macOS/Linux: `python3 -m http.server 5500`
     - Windows (PowerShell): `py -m http.server 5500`
   - Open `http://localhost:5500/` in your browser.

**Android (optional)**

- You can host the folder on your Mac and open it from your Android tablet using your existing HTTP File Server setup. Keep the two files together.

------

### 4) Usage notes

- **Hover for hint**: move the cursor over the choice chips to see a compact 💡 hint above the row.
- **Per-item MD export**: click **Exportar MD** on any card to download a neat Markdown section with your choice, the correct label, a Cambridge-tone explanation, and the code block.
- **Export wrong → MD**: after **Corregir**, click **Exportar fallos → MD** to get a consolidated mistake log, ready for Typora/Obsidian.
- **Retry flow**: **Reintentar fallos** hides correct items and clears the wrong ones so you get focused practice.

If you want the MD export to include **tags** (e.g., `#PLA2 #operadores #clasificacion`), or to save with **timestamped filenames**, I can wire that in next. 

es—spinning up **BenchProof_JSONL (SPOTTED)** right now. Here’s a tiny, no-friction **quick-start pack** you can copy into your workspace and begin the session.

# SPOTTED — Quick Start (current session)

## 1) Session naming

- **Folder:** `SPOTTED/2025-10-06/`
- **Session file (JSONL):** `spotted_2025-10-06_A.jsonl`
- **Log (MD):** `SPOTTED_2025-10-06_A.md`

## 2) JSONL schema (drop-in)

Each line = one item.

```
{
  "id": "SP-A1",
  "type": "tri",
  "tier": 2,
  "lang": "es",
  "category": "Operadores y Expresiones",
  "subcat": "clasificacion",
  "question": "Clasifica la expresión",
  "code": "edad=>18;",
  "options": ["correct", "variable", "incorrect"],
  "answer": "incorrect",
  "hint": "Revisa la forma de las comparaciones (`>=`, `<=`, `===`).",
  "explain": "En JavaScript la comparación es `>=`. La secuencia `=>` pertenece a una arrow function y aquí no forma una expresión válida."
}
```

## 3) Cambridge-tone micro-rubric (for `explain`)

- **Correcta:** “La sintaxis es adecuada y el comportamiento es el esperado en este contexto.”
- **Variable:** “La forma es correcta; el resultado depende de que X exista/tenga el tipo adecuado.”
- **Incorrecta:** “No es JavaScript válido / el operador no corresponde a esta función.”

Keep it warm, precise, non-confrontational.

## 4) Minimal SPOTTED session log (paste in Typora)

```
# SPOTTED — BenchProof_JSONL (2025-10-06 · Session A)

**Objetivo.** Verificar y clasificar expresiones JS en formato JSONL, con pistas y explicación breve (tono Cambridge).

**Criterios de sesión**
- Tri-estado: Correcta / Variable / Incorrecta
- Cada ítem incluye: `hint` (hover) y `explain` (feedback)

**Pendientes al cierre**
- [ ] Exportar fallos a MD desde TriWise
- [ ] Promocionar paquete a `trainer/` como `spotted_2025-10-06_A.jsonl`
```

## 5) Tiny console helper (turn an array into JSONL)

Paste in DevTools > Console, edit `items`, copy the output:

```
const items = [
  { id:"SP-A1", code:"edad=>18;", answer:"incorrect", hint:"Revisa `>=`.", explain:"`=>` no compara." },
  { id:"SP-A2", code:"var ser=vivo || nombre>=18;", answer:"variable", hint:"¿Compila sin contexto?", explain:"Sintaxis correcta; depende de variables." }
];

const base = {
  type:"tri", tier:2, lang:"es",
  category:"Operadores y Expresiones", subcat:"clasificacion",
  question:"Clasifica la expresión", options:["correct","variable","incorrect"]
};

const jsonl = items.map(it => JSON.stringify({...base, ...it})).join("\n");
console.log(jsonl);
```

→ Paste the console output into `spotted_2025-10-06_A.jsonl`.

## 6) Plug into TriWise

- Put both files in a small trainer folder:

```
trainer/
 ├─ index.html          ← (the improved app I gave you)
 └─ spotted_2025-10-06_A.jsonl
```

- In `index.html`, set:

```
const DATA_SRC = "spotted_2025-10-06_A.jsonl";
```

- Serve locally (VS Code Live Server or `python3 -m http.server 5500`) and train.

## 7) Session flow (SPOTTED → TriWise)

1. Draft or copy expressions into **SPOTTED** JSONL with `hint` + Cambridge `explain`.
2. Open **TriWise** (`index.html`) → load your `spotted_…jsonl`.
3. **Corregir** → **Exportar fallos → MD** to archive mistakes in your log.
4. Iterate items in SPOTTED until clean; then promote to your main bank.

If you want, I can mint the **initial `spotted_2025-10-06_A.jsonl`** with 5 seed items right now—say “seed 5” and I’ll drop it in this chat.



### UPLOAD NEW CREAED BANK

Great question. You’ve got two options:

## A) Quick way (what you’re doing now)

1. Add an `<option>` whose **value** is the JSONL filename:

```
<option value="my_new_bank.jsonl">Mi banco nuevo</option>
```

1. Add the **same filename** to `const BANKS = [...]` (order here should match the select’s order if you use “Siguiente banco”):

```
const BANKS = [
  "pla2_actividad1_tri_cambridge.jsonl",
  "spotted_actividad2_alerts.jsonl",
  // ...
  "my_new_bank.jsonl"
];
```

1. Put `my_new_bank.jsonl` in the same folder as `index.html` and serve with a local server.

## B) Robust way (no more mismatches — recommended)

Build the list of banks **from the `<select>` itself**, so you never have to maintain two places.

Drop this in your script (replace your `BANKS` constant + next/cargar handlers):

```js
const bankSelect = document.getElementById('bankSelect');

function getBanksFromSelect(){
  return Array.from(bankSelect.options).map(o => o.value);
}

async function loadSelectedBank(){
  const name = bankSelect.value;
  await loadBankByName(name);
}

document.getElementById('loadBank').addEventListener('click', loadSelectedBank);

document.getElementById('nextBank').addEventListener('click', async ()=>{
  const banks = getBanksFromSelect();
  const i = Math.max(0, banks.indexOf(bankSelect.value));
  const next = banks[(i + 1) % banks.length];
  bankSelect.value = next;
  await loadBankByName(next);
});

// init
(async function init(){
  // Ensure the select’s current value is loaded:
  await loadSelectedBank();
})();
```

Now the flow is:

- You **only** add an `<option value="...jsonl">` and place the file next to `index.html`.
- “Cargar banco” and “Siguiente banco” just work—no array to update, no index sync issues.

If you ever insert options dynamically (from UI), this still works because it always reads the current `<select>` options.