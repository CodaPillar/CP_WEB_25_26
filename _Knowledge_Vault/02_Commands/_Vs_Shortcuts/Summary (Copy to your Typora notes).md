### Summary (Copy to your Typora notes)

| Action              | macOS                         | Windows                        |
| ------------------- | ----------------------------- | ------------------------------ |
| Format document     | ⇧⌥F                           | Shift+Alt+F                    |
| Command Palette     | Cmd+Shift+P → Format Document | Ctrl+Shift+P → Format Document |
| Auto-format on save | Enable “Format On Save”       | Enable “Format On Save”        |

#### THE DEFINITIVE CLEAN-CODE SHORTCUT SHEET

(HTML • CSS • JS — VS Code — Mac & Windows)**

> **This is the cheat sheet that makes messy code impossible.**
>  Copy it into Typora. Print it. Use it in class.

------

#### 1) FORMAT EVERYTHING (THE MOST IMPORTANT)

### **Format whole document**

- **Mac:** `⇧ + ⌥ + F`
- **Windows:** `Shift + Alt + F`

Fixes:
 ✓ indentation
 ✓ spacing
 ✓ nesting
 ✓ extra whitespace removed
 ✓ tags aligned

This alone wins 80% of teacher approval.

------

####  2) INDENTATION CONTROL (NO STRANDED LINES)

### **Indent selected lines**

- **Mac:** `⌘ + ]`
- **Windows:** `Ctrl + ]`

### **Unindent selected lines**

- **Mac:** `⌘ + [`
- **Windows:** `Ctrl + [`

Use this after pasting large blocks of HTML/CSS/JS.

------

#### 3) KILL STRANDED CHARACTERS / FIX STRUCTURE

### **Delete entire line**

- **Mac:** `⌘ + ⇧ + K`
- **Windows:** `Ctrl + Shift + K`

This removes broken tags, half-typed CSS rules, or mistaken Emmet expansions **instantly**.

------

#### 4) MOVE CODE BLOCKS CLEANLY

### **Move line/block up or down**

- **Mac:** `⌥ + ↑` or `⌥ + ↓`
- **Windows:** `Alt + ↑` or `Alt + ↓`

Perfect for reorganizing:

- `<li>` list items
- `<div>` blocks
- CSS rules
- JS function lines

No copy-paste needed — structure stays perfect.

------

#### 5) DUPLICATE WITHOUT BREAKING STRUCTURE

### **Duplicate line or block**

- **Mac:** `⌥ + ⇧ + ↓`
- **Windows:** `Shift + Alt + ↓`

Great for:

- quickly making `<li>` lists
- duplicating `<div class="box">`
- repeating CSS selectors
- duplicating JS `if` blocks

------

####  6) FIX MISALIGNED HTML TAGS

VS Code has a built-in command:

### **Balance Outward / Balance Inward**

- **Mac:** `⌘ + ⇧ + A` (outward), `⌘ + ⇧ + J` (inward)
- **Windows:** `Ctrl + Shift + A` / `Ctrl + Shift + J`

This selects:

- a whole tag block
- the inner content
- the outer wrapper

Prevents **opening/closing tag mismatches** — a teacher’s favorite complaint.

------

####  7) MULTI-CURSOR = FIX EVERYTHING FAST

### **Add multiple cursors**

- **Mac:** `⌥ + Click`
- **Windows:** `Alt + Click`

### **Select next matching word**

- **Mac:** `⌘ + D`
- **Windows:** `Ctrl + D`

### **Select all matches**

- **Mac:** `⌘ + ⇧ + L`
- **Windows:** `Ctrl + Shift + L`

Use these to:

- fix repeated stranded commas
- remove repeated stray semicolons
- adjust attributes in repeated tags
- align CSS properties

------



#### 8) EMMET: NO MORE HAND-TYPING HTML

These avoid stranded characters because Emmet never misnests tags.

### Expand HTML structures instantly

Type:

```
ul>li*5
```

Press **Tab** → perfect list, no mistakes.

Examples:

```
header>nav>ul>li*3
section>div.container>p
```

### Quick element shortcuts:

- `.box` → `<div class="box"></div>`
- `#main` → `<div id="main"></div>`
- `p.mytext` → `<p class="mytext"></p>`
- `img` → `<img src="" alt="">`
- `a` → `<a href=""></a>`

**Zero stranded tags. Zero missing closes. Perfect indentation.**

------

#### 9) WRAP TEXT IN TAGS (FIX BROKEN HTML)

### **Wrap selection with HTML tag**

- **Mac:** `⌘ + ⇧ + P` → “Emmet: Wrap with Abbreviation”
- **Windows:** `Ctrl + Shift + P` → same

Enter the tag:

`p`, `div`, `span`, `strong`, etc.

------

#### 10) CLEAN TRAILING SPACES

### Remove trailing spaces automatically:

Settings → search **"Trim Trailing Whitespace"** → enable

Teachers LOVE this because it removes invisible garbage.

------

#### 11) AUTOFORMAT ON SAVE (PREVENT ALL MESS FOREVER)

Settings → search: **Format On Save** → enable

Now every:

- **Cmd + S** (Mac)
- **Ctrl + S** (Windows)

produces clean, perfect HTML/CSS/JS.

------







#### 12) EVERY USEFUL SHORTCUT IN ONE TABLE

| Action          | macOS              | Windows            |
| --------------- | ------------------ | ------------------ |
| Format document | ⇧⌥F                | Shift+Alt+F        |
| Indent          | ⌘ ]                | Ctrl ]             |
| Unindent        | ⌘ [                | Ctrl [             |
| Duplicate line  | ⌥⇧↓                | Shift+Alt+↓        |
| Move line       | ⌥↑ / ↓             | Alt↑ / ↓           |
| Delete line     | ⌘⇧K                | Ctrl+Shift+K       |
| Multiple cursor | ⌥ Click            | Alt Click          |
| Select next     | ⌘D                 | CtrlD              |
| Select all      | ⌘⇧L                | Ctrl+Shift+L       |
| Wrap with tag   | Cmd+Shift+P        | Ctrl+Shift+P       |
| Emmet expand    | Tab                | Tab                |
| Balance tags    | Cmd+Shift+A        | Ctrl+Shift+A       |
| Format on save  | enable in settings | enable in settings |