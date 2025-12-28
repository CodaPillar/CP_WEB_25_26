## Make directories and files recursively 

```bash
mkdir -p css js data \

 && touch css/style.css \

 && touch js/{app.js,fillcode.js,bank.js} \

 && touch data/{core.json,extra.json}
```



## Creating a  main folder and subfolders

```bash
mkdir -p "[Javascript]_Learning"/{_CoreLanguage,_Functions_Flow,_Advanced_Language,_Extensions_Ecosystem,_Patterns_Practices}

```

```bash

mkdir -p "[Javascript]_Learning"/{00_Core_Language,01_Functions_Flow,02_Advanced_Language,03_Extensions_Ecosystem,04_Patterns_Practices}

```

```js
project/
├── sources/
│   ├── my_notes.md
│   ├── chapter1.md
│   └── examples.js
├── data/
├── scripts/
│   ├── build_bank_from_sources.py
│   └── generate_questions.py
├── index.html
└── js/
    └── index.js

```



```bash
mkdir -p project/{sources,data,scripts,js} && \
touch project/sources/{my_notes.md,chapter1.md,examples.js} \
      project/scripts/{build_bank_from_sources.py,generate_questions.py} \
      project/index.html \
      project/js/index.js
```

