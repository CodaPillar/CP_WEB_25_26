## `project_logic_showcase.md`
# Project Logic — Glue Patterns

**Conditionals**
- Basic: `if (cond) { ... } else { ... }`
- Inclusive threshold: `>=` / `<=`
- Strict equality: `===`

**Data shaping**
- Nullish default: `const name = user.name ?? 'Anonymous'`
- Template strings: `` `Hello ${user}` ``

**Events**
- Typical UI: `element.addEventListener('click', handler)`

**Arrays**
- Filter pass list: `const pass = scores.filter(x => x >= 60)`
- Sum: `const total = scores.reduce((a,x)=>a+x, 0)`