(function(){
  "use strict";

/* ========================================================================== */
/*  BANK SWITCHER + FALLBACK + LABELS                                         */
/* ========================================================================== */
const DATA_SRC = "../default_showcase.jsonl";
const bankSelect = document.getElementById('bankSelect');
function getBanksFromSelect(){ return Array.from(bankSelect.options).map(o=>o.value); }
async function loadSelectedBank(){ await loadBankByName(bankSelect.value); }
function selectNextBank(){ const banks=getBanksFromSelect(); const i=Math.max(0,banks.indexOf(bankSelect.value)); bankSelect.value = banks[(i+1)%banks.length]; }

const FALLBACK = [
  {"id":"A1","type":"tri","tier":2,"lang":"es","category":"Operadores y Expresiones","subcat":"clasificacion","question":"Clasifica la expresión","code":"var ser=vivo || nombre>=18;","options":["correct","variable","incorrect"],"answer":"variable","hint":"Piensa si la expresión 'compila' antes de ejecutarse.","explain":"La sintaxis es correcta; el resultado depende de que `vivo` y `nombre` existan y de que `nombre` sea numérico. En ejercicios de clasificación lo tratamos como «Problema de variable»."},
  {"id":"A2","type":"tri","tier":2,"lang":"es","category":"Operadores y Expresiones","subcat":"clasificacion","question":"Clasifica la expresión","code":"edad=>18;","options":["correct","variable","incorrect"],"answer":"incorrect","hint":"Revisa la forma de las comparaciones (`>=`, `<=`, `===`).","explain":"En JavaScript la comparación es `>=`. La secuencia `=>` corresponde a arrow function y aquí no forma una expresión válida."}
];

const LABELS = {
  correct:{text:"Correcta ✅",badge:"ok"},
  variable:{text:"Variable 🟧",badge:"var"},
  incorrect:{text:"Incorrecta ⛔",badge:"bad"},
  "string": { text:"string", badge:"ok" },
  "number": { text:"number", badge:"var" },
  "undefined": { text:"undefined", badge:"bad" },
  "object": { text:"object", badge:"ok" },
  "array": { text:"array", badge:"var" },
  "function": { text:"function", badge:"ok" }
};

/* ========================================================================== */
/*  DOM STATE + TABS + THEME                                                  */
/* ========================================================================== */
const listEl = document.getElementById('list');
const checkBtn = document.getElementById('check');
const retryBtn = document.getElementById('retryWrong');
const onlyWrong = document.getElementById('onlyWrong');
const exportWrongBtn = document.getElementById('exportWrong');
const exportAllBtn = document.getElementById('exportAll');
const exportAllNoKeysBtn = document.getElementById('exportAllNoKeys');
const summaryEl = document.getElementById('summary');

const focusToggle = document.getElementById('focusMode');
const prevBtn = document.getElementById('prevItem');
const nextBtn = document.getElementById('nextItem');
const focusPos = document.getElementById('focusPos');
let focusMode = false;
let focusIndex = 0;
let attempts = new Map(); // id -> failed corrections

const tabButtons = document.querySelectorAll('.tab-btn');
const panelEx = document.getElementById('panel-ex');
const panelCx = document.getElementById('panel-cx');

const themeSwitch = document.getElementById('themeSwitch');
(function restoreTheme(){
  const saved = localStorage.getItem('tw:theme');
  if(saved) document.documentElement.setAttribute('data-theme', saved);
})();
themeSwitch?.addEventListener('click', ()=>{
  const r = document.documentElement;
  const cur = r.getAttribute('data-theme') || 'light';
  const next = (cur === 'dim') ? 'light' : 'dim';
  r.setAttribute('data-theme', next);
  localStorage.setItem('tw:theme', next);
});

tabButtons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    tabButtons.forEach(b=>b.dataset.active='false');
    btn.dataset.active='true';
    const tab = btn.dataset.tab;
    panelEx?.classList.toggle('show', tab==='ex');
    panelCx?.classList.toggle('show', tab==='cx');
    if (tab==='cx') loadConceptForBank(bankSelect.value);
  });
});

/* ========================================================================== */
/*  CONCEPTS: elements + import/export + markdown renderer                    */
/* ========================================================================== */
const cxInfo = document.getElementById('cxInfo');
const cxEdit = document.getElementById('cxEdit');
const cxView = document.getElementById('cxView');
const cxReloadBtn = document.getElementById('cxReload');
const cxSaveBtn = document.getElementById('cxSave');

// Import (json/md) into Concepts editor (if present)
(function(){
  const cxImportBtn  = document.getElementById('cxImport');
  const cxImportFile = document.getElementById('cxImportFile');
  if (!cxImportBtn || !cxImportFile || !cxEdit || !cxView || !bankSelect) return;

  cxImportBtn.addEventListener('click', ()=> cxImportFile.click());
  cxImportFile.addEventListener('change', async ()=>{
    const file = cxImportFile.files?.[0];
    if (!file) return;
    const text = await file.text();
    cxEdit.value = text;
    if (typeof renderMd === 'function') cxView.innerHTML = renderMd(text);
    const key = 'concepts:' + bankSelect.value;
    localStorage.setItem(key, text);
    alert('Notes imported and saved for ' + bankSelect.value);
  });
})();

// Concepts Markdown renderer (local IIFE; not global by design)
(function(){
  function renderMd(md){
    if (!md) return '';
    const esc = s => s.replace(/[&<>]/g, m=>({ '&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
    let html = esc(md);
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (m,lang,code)=>(
      `<pre class="code"><code>${esc(code)}</code></pre>`
    ));
    html = html.replace(/^###### (.*)$/gm,'<h6>$1</h6>')
               .replace(/^##### (.*)$/gm,'<h5>$1</h5>')
               .replace(/^#### (.*)$/gm,'<h4>$1</h4>')
               .replace(/^### (.*)$/gm,'<h3>$1</h3>')
               .replace(/^## (.*)$/gm,'<h2>$1</h2>')
               .replace(/^# (.*)$/gm,'<h1 style="font-size:1.25rem;margin:.4rem 0">$1</h1>');
    html = html.replace(/`([^`]+)`/g,'<code>$1</code>');
    html = html.replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>');
    html = html.replace(/\*([^*]+)\*/g,'<i>$1</i>');
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noreferrer noopener">$1</a>');
    html = html.split(/\n{2,}/).map(p=>`<p>${p}</p>`).join('\n');
    return html;
  }

  async function loadConceptForBank(filename){
    if (!cxInfo || !cxEdit || !cxView) return;
    cxInfo.textContent = 'Bank: ' + filename;
    const key = 'concepts:' + filename;

    const local = localStorage.getItem(key);
    if (local){
      cxEdit.value = local;
      cxView.innerHTML = renderMd(local);
      return;
    }
    const mdName = filename.replace(/\.jsonl$/i, '.md');
    try{
      const res = await fetch(mdName, { cache: 'no-store' });
      if (!res.ok) throw new Error('fetch ' + mdName + ' -> ' + res.status);
      const text = await res.text();
      cxEdit.value = text;
      cxView.innerHTML = renderMd(text);
    }catch(_e){
      const placeholder = `# ${mdName}\n\nAdd definitions, examples, and quick rules here.\n\n- Equality vs Identity\n- Truthy / Falsy table\n- Operator precedence chart\n`;
      cxEdit.value = placeholder;
      cxView.innerHTML = renderMd(placeholder);
    }
  }

  if (cxEdit && cxView){
    cxEdit.addEventListener('input', ()=>{
      cxView.innerHTML = renderMd(cxEdit.value);
    });
  }
  if (cxSaveBtn && bankSelect){
    cxSaveBtn.addEventListener('click', ()=>{
      const key = 'concepts:' + bankSelect.value;
      localStorage.setItem(key, cxEdit.value);
      alert('Notes saved for ' + bankSelect.value);
    });
  }
  if (cxReloadBtn && bankSelect){
    cxReloadBtn.addEventListener('click', ()=>{
      const key = 'concepts:' + bankSelect.value;
      localStorage.removeItem(key);
      loadConceptForBank(bankSelect.value);
    });
  }

  // expose loader only (same as before)
  window.loadConceptForBank = loadConceptForBank;
})();

// Export Concepts as .md (if UI exists)
(function(){
  const cxExportBtn = document.getElementById('cxExport');
  if (!cxExportBtn || !cxEdit || !bankSelect) return;
  cxExportBtn.addEventListener('click', ()=>{
    const defaultName = (bankSelect.value || 'notes').replace(/\.jsonl$/i, '').concat('-notes.md');
    let name = prompt('Export filename (.md):', defaultName) || defaultName;
    if (!/\.md$/i.test(name)) name += '.md';
    const bank = bankSelect.value || 'bank.jsonl';
    const content = cxEdit.value || `# ${bank.replace(/\.jsonl$/i, '')} — Notes

> Add definitions, examples, and quick rules here.

- Key concepts
- Pitfalls
- Links
`;
    downloadTextFile(name, content);
  });
})();
function downloadTextFile(filename, text) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type: 'text/markdown' }));
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(a.href);
  a.remove();
}

/* ========================================================================== */
/*  BANK DATA + SCORE/HISTORY                                                 */
/* ========================================================================== */
let BANK = [];
let picks = new Map(); // id -> tri key | short text | code source
let lastResult = null;

const LS_KEYS = {
  PICKS:  (bank)=>`tw:picks:${bank}`,
  RUNS:   (bank)=>`tw:runs:${bank}`,
  SCORE:  (bank)=>`tw:score:${bank}`,
  MODE:   (bank)=>`tw:scoremode:${nsKey(bank)}` // new (see below)
};
function loadJSON(key, def){ try{ return JSON.parse(localStorage.getItem(key)) ?? def; }catch{ return def; } }
function saveJSON(key, val){ localStorage.setItem(key, JSON.stringify(val)); }
// --- User namespace (persist a simple id; defaults to 'default') ---
const USER = loadJSON('tw:user', { id: 'default' });
function setUserId(id){
  const clean = String(id||'default').trim() || 'default';
  saveJSON('tw:user', { id: clean });
  // optional: force a refresh so keys rebind cleanly
  location.reload();
}
// Helper to prefix keys by user
function nsKey(bank){ return `${USER.id}:${bank}`; }

function pct(num, den){ return den ? Math.round((num/den)*100) : 0; }

let SCORE = { total:0, correct:0, wrong:0, lastRunId:null };
function updateScoreUI(){
  const badge = document.getElementById('scoreBadge');
  const bar   = document.getElementById('scoreBar');
  const p = pct(SCORE.correct, SCORE.total);
  if (badge) badge.textContent = `Score: ${SCORE.correct}/${SCORE.total} (${p}%)`;
  if (bar)   bar.style.width   = p + '%';
}

// --- Score behavior mode per bank ---
// 'accumulate' (default): keep adding across runs
// 'fresh-on-load': reset to 0 whenever a bank is (re)loaded
// 'fresh-manual': only reset when user clicks Reset
const SCORE_MODES = ['accumulate', 'fresh-on-load', 'fresh-manual'];
function loadScoreMode(bank){
  const m = localStorage.getItem(LS_KEYS.MODE(bank));
  return SCORE_MODES.includes(m) ? m : 'accumulate';
}
function saveScoreMode(bank, mode){
  if (!SCORE_MODES.includes(mode)) return;
  localStorage.setItem(LS_KEYS.MODE(bank), mode);
}
function resetScore(bank, { alsoHistory=false } = {}){
  SCORE = { total:0, correct:0, wrong:0, lastRunId:null };
  saveJSON(LS_KEYS.SCORE(bank), SCORE);
  if (alsoHistory) localStorage.removeItem(LS_KEYS.RUNS(bank));
  updateScoreUI();
  renderBankMiniChart();
}

function applyScoreModeOnLoad(bank){
  const mode = loadScoreMode(bank);
  if (mode === 'fresh-on-load') { resetScore(bank, { alsoHistory:false }); }
  // 'accumulate' and 'fresh-manual' do nothing on load
}


function renderBankMiniChart(){
  const el = document.getElementById('bankSpark');
  if (!el) return;
  const ctx = el.getContext('2d');
  const W = el.width, H = el.height;
  ctx.clearRect(0,0,W,H);

  const runs = loadJSON(LS_KEYS.RUNS(bankSelect.value), []);
  if (!runs.length){ ctx.fillStyle='#aaa'; ctx.fillText('—', 4, H-6); return; }

  const vals = runs.slice(0,40).map(r => (r.total ? r.correct/r.total : 0));
  const n = vals.length;
  const step = W / Math.max(1, n-1);

  ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--ok') || '#10B981';
  ctx.lineWidth = 2; ctx.beginPath();
  vals.forEach((v,i)=>{
    const x = i*step;
    const y = H - v*(H-4) - 2;
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  });
  ctx.stroke();
}

async function loadBankByName(name){
  const data = await loadJSONL(name);
  BANK.length = 0;
  BANK.push(...data);
  window.BANK = BANK;

  SCORE = loadJSON(LS_KEYS.SCORE(name), { total:0, correct:0, wrong:0, lastRunId:null });
  updateScoreUI();
  renderBankMiniChart();
  // Apply configured score behavior for this bank
  applyScoreModeOnLoad(name);


  retryBtn.disabled = true;
  exportWrongBtn.disabled = true;
  const exportWrongJSONLBtn = document.getElementById('exportWrongJSONL');
  if (exportWrongJSONLBtn) exportWrongJSONLBtn.disabled = true;
  onlyWrong.checked = false;
  onlyWrong.disabled = (BANK.length === 0);

  picks.clear();
  lastResult = null;
  summaryEl.classList.add('hide');

  render();

  if (typeof window.loadConceptForBank === 'function') {
    window.loadConceptForBank(name);
  }
}

/* ========================================================================== */
/*  SANITY LOGS                                                               */
/* ========================================================================== */
(function sanity(){
  const ids = ['check','retryWrong','onlyWrong','exportWrong','list','summary'];
  const found = Object.fromEntries(ids.map(id=>[id, !!document.getElementById(id)]));
  console.table(found);

  const retryBtn = document.getElementById('retryWrong');
  const onlyWrong = document.getElementById('onlyWrong');
  const exportWrongBtn = document.getElementById('exportWrong');
  console.log('disabled:', {
    retry: retryBtn?.disabled,
    onlyWrong: onlyWrong?.disabled,
    exportWrong: exportWrongBtn?.disabled
  });

  const _oldRetry = retryBtn?.onclick;
  retryBtn && (retryBtn.onclick = function(){
    console.log('[probe] retry clicked');
    _oldRetry && _oldRetry.call(this);
  });

  console.log('lastResult type:', typeof window.lastResult, 'isArray:', Array.isArray(window.lastResult));
})();

/* ========================================================================== */
/*  VALIDATORS (expr/fn/prog) + GUARDS                                        */
/* ========================================================================== */
function guardCode(s) {
  if (!s) return true;
  const banned = /(window|document|globalThis|XMLHttpRequest|<\/script>)/;
  const bannedCalls = /\b(?:fetch|import)\s*\(|\b(?:new\s+)?Function\s*\(/;
  const tooLong = s.length > 3000;
  return !(banned.test(s) || bannedCalls.test(s) || tooLong);
}
function evalExpr(expr, env){ const keys=Object.keys(env||{}); const fn=new Function('env','"use strict"; const {'+keys.join(',')+'}=env; return ('+expr+');'); return fn(env||{}); }
function runTestOnResult(testExpr, result, env){ const fn=new Function('result','env','"use strict"; return ('+testExpr+');'); return !!fn(result, env||{}); }
function evalFunction(code, env){ const keys=Object.keys(env||{}); const fn=new Function('env','"use strict"; const {'+keys.join(',')+'}=env; return ('+code+');'); const out=fn(env||{}); if(typeof out!=='function') throw new Error('Se esperaba una función.'); return out; }
function runTestOnFn(testExpr, fnValue, env){ const test=new Function('fn','env','"use strict"; return ('+testExpr+');'); return !!test(fnValue, env||{}); }

function runProgram(source, env) {
  const keys = Object.keys(env || {});
  const fn = new Function(
    'env',
    '"use strict";' +
      'const {' + keys.join(',') + "} = env;" +
      'const exports = {};' +
      'let result;' +
      '\n' + source + '\n' +
      'return { exports, result };'
  );
  return fn(env || {});
}
function runProgTest(testExpr, bag, env) {
  const t = new Function('exports','result','env','"use strict"; return (' + testExpr + ');');
  return !!t(bag.exports, bag.result, env || {});
}
function evalProgram(code, env) {
  const keys = Object.keys(env || {});
  const fn = new Function(
    'env',
    `"use strict";
     const { ${keys.join(', ')} } = env;
     let result;
     const exports = {};
     ${code}
     return { result, exports };
    `
  );
  return fn(env || {});
}
function runTestOnProg(testExpr, progOut, env) {
  const test = new Function('result', 'exports', 'env', '"use strict"; return (' + testExpr + ');');
  return !!test(progOut.result, progOut.exports, env || {});
}

/* ========================================================================== */
/*  UI HELPERS + EXPORTS                                                      */
/* ========================================================================== */
function chip(key) {
  const lbl = LABELS?.[key];
  const btn = document.createElement('button');
  btn.type = 'button';
  const colorClass =
    key === 'correct' ? 'ok' :
    key === 'variable' ? 'var' :
    key === 'incorrect' ? 'bad' :
    'ok';
  btn.className = 'chip ' + colorClass;
  const txt = lbl?.text || key;
  btn.textContent = txt;
  btn.dataset.key = key;
  btn.setAttribute('aria-pressed', 'false');
  const hint =
    key === 'correct' ? '1' :
    key === 'variable' ? '2' :
    key === 'incorrect' ? '3' : '';
  btn.title = txt + (hint ? ' (atajo: ' + hint + ')' : '');
  return btn;
}
function buildHint(item){
  const wrap = document.createElement('div');
  wrap.className = 'hint-wrap';
  const pill = document.createElement('button');
  pill.type = 'button';
  pill.className = 'hint-pill';
  pill.textContent = '💡 Hint';
  pill.setAttribute('aria-haspopup', 'true');
  const tip = document.createElement('div');
  tip.className = 'hint-tip';
  tip.textContent = item.hint ? item.hint : 'No hint available for this item.';
  wrap.append(pill, tip);
  return wrap;
}
function makeQuestionEl(item){
  const el = document.createElement('div');
  el.className = 'question';
  const txt = item.question || (item.type === 'code' ? (item.prompt || '') : '');
  if (!txt) return null; el.textContent = txt; return el;
}
// stem helpers
function getStem(item){ return (item.type === 'code') ? (item.prompt || item.question || '') : (item?.prompt || item?.question || ''); }
function makeStemEl(item){ const stem = getStem(item); if (!stem) return null; const el = document.createElement('div'); el.className='question'; el.textContent = stem; return el; }

// --- unified tri answer label (keep THIS one)
function triAnswerText(answerKey){
  return (LABELS && LABELS[answerKey] && LABELS[answerKey].text) || String(answerKey);
}

function prettyVal(v){
  try {
    if (typeof v === 'string') return `"${v}" (string)`;
    if (typeof v === 'number' || typeof v === 'boolean' || typeof v === 'bigint' || typeof v === 'symbol')
      return String(v) + ' (' + typeof v + ')';
    if (v === null) return 'null';
    if (typeof v === 'undefined') return 'undefined';
    if (typeof v === 'function') return '[Function]';
    const s = JSON.stringify(v, (k, val)=> (typeof val === 'function' ? '[Function]' : val));
    return (s ?? String(v)) + ' (' + typeof v + ')';
  } catch (_){ return String(v) + ' (' + typeof v + ')'; }
}
function parseExpectedFromTest(testStr){
  const m = /^\s*result\s*===?\s*(.+?)\s*$/.exec(testStr);
  if (!m) return null;
  return m[1];
}
function tryFnPreview(fnVal, item){
  const pv = item?.validator?.preview;
  if (!pv || !Array.isArray(pv) || !pv.length) return null;
  const lines = [];
  for (const call of pv) {
    let args = [], label = '';
    if (Array.isArray(call)) { args = call; label = `fn(${args.map(a=>JSON.stringify(a)).join(', ')})`; }
    else if (call && typeof call === 'object') {
      args = Array.isArray(call.args) ? call.args : [];
      label = call.label || `fn(${args.map(a=>JSON.stringify(a)).join(', ')})`;
    }
    try { const out = fnVal(...args); lines.push(`${label} → ${prettyVal(out)}`); }
    catch(e){ lines.push(`${label} → throws ${String(e)}`); }
  }
  return lines;
}
function listExports(bag){
  try{ const keys = Object.keys(bag.exports || {}); return keys.length ? keys.join(', ') : '(none)'; }
  catch(_){ return '(none)'; }
}
function download(name, text){
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([text],{type:'text/markdown'}));
  a.download=name; document.body.appendChild(a); a.click(); URL.revokeObjectURL(a.href); a.remove();
}
function mdStem(item){ const s = getStem(item); return s ? `**Question:** ${s}\n\n` : ''; }

function itemToMarkdown(result){
  const { item, pick } = result;
  const mdCode = (lang, code) => code ? `\n**${lang.toUpperCase()}**\n\n\`\`\`${lang}\n${code}\n\`\`\`\n` : "";
  const mode  = item?.validator?.mode || "expr";
  const tests = item?.validator?.tests || [];
  const env   = item?.validator?.runtime?.vars || null;

  if (item.type === "tri") {
    const correctness = (pick === item.answer) ? "✅ Bien" : (pick ? "❌ Incorrecta" : "⏳ Sin responder");
    const correctLabel = (LABELS?.[item.answer]?.text) || String(item.answer);
    const chosen = pick ? (LABELS?.[pick]?.text || String(pick)) : "—";
    return (
      `### ${item.id} · Clasificación (tri)\n\n` +
      mdStem(item) +
      `**Tu selección:** ${chosen}\n\n` +
      `**Estado:** ${correctness} · **Correcta:** ${correctLabel}\n\n` +
      `**Explicación**\n\n${item.explain || ""}\n\n` +
      (item.hint ? `> 💡 *Pista:* ${item.hint}\n\n` : "") +
      (item.setup ? mdCode("js", item.setup) : "") +
      mdCode("js", item.code || "")
    );
  }

  if (item.type === "short") {
    const ok = String(pick ?? "").trim() === String(item.answer ?? "").trim();
    return (
      `### ${item.id} · Respuesta corta (short)\n\n` +
      mdStem(item) +
      `**Tu respuesta:** ${pick ?? "—"}\n\n` +
      `**Estado:** ${ok ? "✅ Bien" : "❌ Incorrecta"} · **Correcta:** ${item.answer}\n\n` +
      `**Explicación**\n\n${item.explain || ""}\n\n` +
      (item.hint ? `> 💡 *Pista:* ${item.hint}\n\n` : "") +
      (item.setup ? mdCode("js", item.setup) : "") +
      mdCode("js", item.code || "")
    );
  }

  if (item.type === "code") {
    const src = pick ?? "";
    const modeLabel = mode === "prog" ? "programa (prog)" : mode === "fn" ? "función (fn)" : "expresión (expr)";
    const testsList = tests.map(t => typeof t === "string" ? t : (t?.name || t?.expr || JSON.stringify(t)));
    let out =
      `### ${item.id} · Validador (code/${mode})\n\n` +
      mdStem(item) +
      `**Tu respuesta (código):**\n\n\`\`\`js\n${src}\n\`\`\`\n\n`;
    if (item.setup)    out += `**Setup**\n\n\`\`\`js\n${item.setup}\n\`\`\`\n\n`;
    if (item.scaffold) out += `**Scaffold**\n\n\`\`\`js\n${item.scaffold}\n\`\`\`\n\n`;
    if (env && Object.keys(env).length) out += `**Runtime vars**\n\n\`\`\`js\n${JSON.stringify(env, null, 2)}\n\`\`\`\n\n`;
    if (testsList.length) {
      const label = mode === "fn" ? "Tests (reciben `fn`, `env`)" :
                    mode === "prog" ? "Tests (evalúan estado/exports)" :
                    "Tests (reciben `result`, `env`)";
      out += `**${label}**\n\n${testsList.map(s => `- ${s}`).join("\n")}\n\n`;
    }
    out += `**Feedback**\n\n${item.explain || ""}\n\n`;
    if (item.hint) out += `> 💡 *Pista:* ${item.hint}\n\n`;
    return out;
  }
  return "";
}
function itemToMarkdownNoKeys(item){
  if(item.type==='tri'){
    return `### ${item.id} · Clasificación (tri)\n\n`+
      (item.hint ? `> 💡 *Hint:* ${item.hint}\n\n` : "") +
      (item.setup ? `**Setup**\n\n\`\`\`js\n${item.setup}\n\`\`\`\n\n` : "") +
      "```js\n"+(item.code||'')+"\n```\n" +
      (item.explain ? `**Explanation**\n\n${item.explain}\n\n` : "");
  } else if(item.type==='short'){
    return `### ${item.id} · Short answer\n\n`+
      (item.hint ? `> 💡 *Hint:* ${item.hint}\n\n` : "") +
      (item.setup ? `**Setup**\n\n\`\`\`js\n${item.setup}\n\`\`\`\n\n` : "") +
      "```js\n"+(item.code||'')+"\n```\n" +
      (item.explain ? `**Explanation**\n\n${item.explain}\n\n` : "");
  } else if(item.type==='code'){
    return `### ${item.id} · Code validator\n\n`+
      (item.prompt ? `**Prompt:** ${item.prompt}\n\n` : "") +
      (item.hint ? `> 💡 *Hint:* ${item.hint}\n\n` : "") +
      (item.setup ? `**Setup**\n\n\`\`\`js\n${item.setup}\n\`\`\`\n\n` : "") +
      (item.validator && item.validator.tests ? `**Tests**\n\n${item.validator.tests.map(t=>`- ${t}`).join('\n')}\n\n` : "");
  }
  return '';
}
function exportWrongMarkdown() {
  if (!lastResult) return;
  const wrong = lastResult.filter(r => !r.ok);
  if (!wrong.length) return;
  const lines = [
    "# Informe de revisión — Ítems a reforzar",
    "",
    `Total: ${lastResult.length} · Correctos: ${lastResult.filter(r=>r.ok).length} · A revisar: ${wrong.length}`,
    ""
  ];
  wrong.forEach(r => lines.push(itemToMarkdown(r)));
  download("reporte_fallos.md", lines.join("\n"));
}
function exportAllMarkdown({revealSolutions=true}={}){
  if(!Array.isArray(BANK)||!BANK.length){ alert("No hay ejercicios cargados."); return; }
  const lines = [];
  lines.push(revealSolutions ? "# Bank export — with solutions\n" : "# Bank export — no solutions\n", "");
  BANK.forEach(item=>{
    if(revealSolutions){
      const pick = picks.get(item.id) ?? null;
      const res = { id:item.id, ok:false, pick, item };
      if(item.type==='tri'){ res.ok = (pick===item.answer); }
      else if(item.type==='short'){ res.ok = String(pick??'').trim() === String(item.answer??'').trim(); }
      lines.push(itemToMarkdown(res));
    } else {
      lines.push(itemToMarkdownNoKeys(item));
    }
  });
  download(revealSolutions ? "bank_all_with_solutions.md" : "bank_all_no_solutions.md", lines.join("\n"));
}

/*  Export mistakes → JSONL  */
const exportWrongJSONLBtn = document.getElementById('exportWrongJSONL');
function exportWrongAsJSONL(){
  if (!lastResult) return alert('Run a correction first.');
  const wrong = lastResult.filter(r => !r.ok);
  if (!wrong.length) return alert('No mistakes to export.');
  const lines = wrong.map(r => JSON.stringify({
    id: r.id,
    type: r.item.type,
    bank: bankSelect.value,
    when: new Date().toISOString(),
    question: r.item.question ?? r.item.prompt ?? '',
    code: r.item.code ?? '',
    setup: r.item.setup ?? '',
    hint: r.item.hint ?? '',
    explain: r.item.explain ?? '',
    answer: r.item.type==='tri' ? r.item.answer : (r.item.answer ?? null),
    pick: r.pick ?? null
  }));
  const text = lines.join('\n') + '\n';
  const name = `mistakes_${(bankSelect.value||'bank').replace(/\W+/g,'_')}_${Date.now()}.jsonl`;
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], {type:'application/x-ndjson'}));
  a.download = name;
  document.body.appendChild(a); a.click(); URL.revokeObjectURL(a.href); a.remove();
}
exportWrongJSONLBtn?.addEventListener('click', exportWrongAsJSONL);

/* ========================================================================== */
/*  FOCUS NAV                                                                 */
/* ========================================================================== */
function updateFocusNav(){
  const n = BANK.length;
  prevBtn.disabled = !focusMode || n===0 || focusIndex<=0;
  nextBtn.disabled = !focusMode || n===0 || focusIndex>=n-1;
  focusPos.textContent = focusMode && n ? `Item ${focusIndex+1} / ${n}` : '';
}
focusToggle.addEventListener('change', ()=>{
  focusMode = focusToggle.checked;
  focusIndex = 0;
  render();
  updateFocusNav();
});
prevBtn.addEventListener('click', ()=>{
  if(focusIndex>0){ focusIndex--; render(); updateFocusNav(); }
});
nextBtn.addEventListener('click', ()=>{
  if(focusIndex<BANK.length-1){ focusIndex++; render(); updateFocusNav(); }
});
document.addEventListener('keydown', (e)=>{
  if(!focusMode) return;
  if(e.key==='ArrowRight'){ nextBtn.click(); }
  if(e.key==='ArrowLeft'){ prevBtn.click(); }
});

/* ========================================================================== */
/*  RENDER + CORRECTION                                                       */
/* ========================================================================== */
function addSendToConsoleButton(headEl, item){
  const btn = document.createElement('button');
  btn.className = 'btn tiny secondary';
  btn.textContent = '▶ Send to Console';
  btn.title = 'Añadir este setup+code a la Console Lab';
  btn.addEventListener('click', ()=>{
    const chunk = [item?.setup||'', item?.code||''].filter(Boolean).join('\n').trim();
    if(!chunk){ alert('No code to send.'); return; }
    if(consoleInputEl.value.trim().length) consoleInputEl.value += '\n// ---\n';
    consoleInputEl.value += chunk + '\n';
    showLab(true);
    logLine(`[info] Added ${item.id} to Console Lab.`, 'l-info');
  });
  const right = headEl.querySelector('.righthead') || headEl;
  right.appendChild(btn);
}

function render(){
  listEl.innerHTML = '';
  const items = (focusMode && BANK.length) ? [ BANK[focusIndex] ] : BANK;

  items.forEach((item, idxLocal) => {
    const idx = focusMode ? focusIndex : idxLocal;
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = item.id;

    const head = document.createElement('div');
    head.className = 'head';

    const answerLabel = item.type === 'tri' ? (LABELS[item.answer]?.text || String(item.answer)) : '';
    const badgeText   = item.type === 'tri' ? answerLabel : item.type === 'short' ? ('Solución: ' + (item.answer ?? '')) : 'Validador';
    const badgeClass  = item.type === 'tri' ? (LABELS[item.answer]?.badge || 'ok') : 'ok';

    head.innerHTML = `
      <div class="lefthead">
        <div><strong>#${idx + 1}</strong>
          <span class="badge ${badgeClass}" title="Etiqueta de corrección" style="display:none">${badgeText}</span>
        </div>
      </div>
      <div class="righthead">
        <button class="btn tiny secondary" data-action="export">Exportar MD</button>
      </div>
    `;

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent =
      item.type === 'tri'   ? 'Tipo: tri (clasificación)' :
      item.type === 'short' ? 'Tipo: short (respuesta corta)' :
                              'Tipo: code (validador)';

    let stem = null;
    if ((item.type === 'tri' || item.type === 'short') && item.question) {
      stem = document.createElement('div');
      stem.className = 'meta';
      stem.textContent = item.question;
    }

    let setup = null;
    if (item.setup && String(item.setup).trim().length){
      setup = document.createElement('div');
      setup.className = 'setup';
      setup.textContent = item.setup;
    }

    let codeBlock = null;
    if (item.code && String(item.code).trim().length) {
      codeBlock = document.createElement('div');
      codeBlock.className = 'code';
      codeBlock.textContent = item.code;
    }

    const row = document.createElement('div');
    row.className = 'row';

    if (item.type === 'tri') {
      const opts = Array.isArray(item.options) && item.options.length ? item.options : ['correct','variable','incorrect'];
      opts.forEach(k => {
        const c = chip(k);
        c.addEventListener('click', ()=>{
          picks.set(item.id, k);
          [...row.querySelectorAll('.chip')].forEach(x => { x.dataset.state = 'off'; x.setAttribute('aria-pressed','false'); });
          c.dataset.state = 'on'; c.setAttribute('aria-pressed','true');
        });
        row.appendChild(c);
      });
      row.appendChild(buildHint(item));
      card.append(head, meta);
      if (stem) card.append(stem);
      if (setup) card.append(setup);
      if (codeBlock) card.append(codeBlock);
      card.append(row);

    } else if (item.type === 'short') {
      const box = document.createElement('div');
      box.className = 'shortbox';
      const shortInput = document.createElement('input');
      shortInput.type = 'text';
      shortInput.placeholder = 'Escribe la salida…';
      shortInput.addEventListener('input', () => { picks.set(item.id, shortInput.value); });
      box.appendChild(shortInput);
      row.appendChild(box);
      row.appendChild(buildHint(item));
      card.append(head, meta);
      if (stem) card.append(stem);
      if (setup) card.append(setup);
      if (codeBlock) card.append(codeBlock);
      card.append(row);

    } else if (item.type === 'code') {
      const mode = (item.validator && item.validator.mode) || 'expr';
      const prompt = document.createElement('div');
      prompt.className = 'meta';
      const modeLabel = mode === 'prog' ? 'programa (prog)' : mode === 'fn' ? 'función (fn)' : 'expresión (expr)';
      prompt.textContent = item.prompt || `Escribe tu solución — modo ${modeLabel}`;

      const box = document.createElement('div');
      box.className = 'shortbox';

      const codeArea = document.createElement('textarea');
      codeArea.style.width = '100%';
      codeArea.rows = (mode === 'prog') ? 8 : 3;
      codeArea.spellcheck = false;
      codeArea.autocapitalize = 'off';
      codeArea.autocorrect = 'off';
      codeArea.placeholder =
        (mode === 'prog') ? (item.scaffold || `/* Programa multi-línea */`) :
        (mode === 'fn')   ? (item.scaffold || `/* Devuelve UNA función, p.ej: */\n(x)=>x*2`) :
                            (item.scaffold || `/* Escribe UNA expresión, p.ej: */\n5 * 2`);
      if (item.scaffold) { codeArea.value = item.scaffold; picks.set(item.id, item.scaffold); }
      codeArea.title =
        (mode === 'prog') ? 'Modo prog: usa result/exports.* si quieres' :
        (mode === 'fn')   ? 'Modo fn: la expresión debe evaluar a una función' :
                            'Modo expr: la expresión debe evaluar al valor esperado';
      codeArea.addEventListener('input', () => { picks.set(item.id, codeArea.value); });
      box.appendChild(codeArea);
      row.appendChild(box);
      row.appendChild(buildHint(item));
      card.append(head, meta);
      if (setup) card.append(setup);
      if (codeBlock) card.append(codeBlock);
      card.append(prompt, row);
    }

    const fb = document.createElement('div');
    fb.className = 'fb';
    fb.innerHTML = `<div class="status"></div><div class="why"></div><div class="hint"></div>`;
    card.appendChild(fb);

    head.querySelector('[data-action="export"]').addEventListener('click', ()=>{
      const res = { id:item.id, ok:false, pick: picks.get(item.id) ?? null, item };
      if (item.type==='tri') res.ok = (res.pick === item.answer);
      else if (item.type==='short') res.ok = String(res.pick ?? '').trim() === String(item.answer ?? '').trim();
      download(`${item.id}.md`, itemToMarkdown(res));
    });

    addSendToConsoleButton(head, item);
    listEl.appendChild(card);
  });

  updateFocusNav();
}

function summarize(result){
  const total=result.length; const ok=result.filter(r=>r.ok).length;
  const byPickTri={correct:0,variable:0,incorrect:0};
  const byAnswerTri={correct:0,variable:0,incorrect:0};
  result.forEach(r=>{
    if(r.item.type==='tri'){
      if(r.pick) byPickTri[r.pick]=(byPickTri[r.pick]||0)+1;
      byAnswerTri[r.item.answer]=(byAnswerTri[r.item.answer]||0)+1;
    }
  });
  summaryEl.classList.remove('hide');
  summaryEl.innerHTML = `
    <strong>Resultado:</strong> ${ok}/${total}
    ${ (byAnswerTri.correct+byAnswerTri.variable+byAnswerTri.incorrect)>0 ? `
    &nbsp;·&nbsp; <span class="badge ok">Correcta: ${byAnswerTri.correct||0}</span>
    <span class="badge var">Variable: ${byAnswerTri.variable||0}</span>
    <span class="badge bad">Incorrecta: ${byAnswerTri.incorrect||0}</span>
    <br><small class="sub">Tus elecciones (tri) → ✅ ${byPickTri.correct||0} · 🟧 ${byPickTri.variable||0} · ⛔ ${byPickTri.incorrect||0}</small>
    ` : ``}
  `;
}

function correctAll() {
  const results = [];
  const wrongIds = [];
  const cards = document.querySelectorAll('.card');

  for (const card of cards) {
    const id   = card.dataset.id;
    const item = BANK.find(x => x.id === id);
    if (!item) continue;

    const headBadge = card.querySelector('.badge');
    const fb        = card.querySelector('.fb');
    const pick      = picks.get(id);

    fb.className = 'fb show';
    fb.querySelector('.why').textContent  = item.explain || '';
    fb.querySelector('.hint').textContent = item.hint ? ('Pista: ' + item.hint) : '';

    let ok = false;

    if (item.type === 'tri') {
      const labelText = triAnswerText(item.answer);
      if (!pick) {
        card.classList.add('wrong');
        fb.classList.add('bad');
        fb.querySelector('.status').innerHTML = `Sin responder · La correcta es <b>${labelText}</b>`;
        headBadge.style.display = 'inline-block';
        wrongIds.push(id);
        results.push({ id, ok: false, pick: null, item });
        continue;
      }
      ok = (pick === item.answer);
    }
    else if (item.type === 'short') {
      const expected = String(item.answer ?? '').trim();
      const got      = String(pick ?? '').trim();
      ok = (expected === got);
      if (!pick) wrongIds.push(id);
    }
    else if (item.type === 'code') {
      const source = String(pick ?? '');
      let testReport = [];
      let extraLines = [];

      if (!source.trim()) {
        ok = false;
      } else if (!guardCode(source)) {
        ok = false;
        testReport.push({ expr: 'guard', ok: false, error: 'Código bloqueado por el validador de seguridad.' });
      } else {
        const env   = (item.validator?.runtime?.vars) || {};
        const tests = item.validator?.tests || [];
        const mode  = item.validator?.mode || 'expr';
        try {
          if (mode === 'expr') {
            const result = evalExpr(source, env);
            extraLines.push(`Tu resultado = ${prettyVal(result)}`);
            ok = true;
            for (const t of tests) {
              const pass = runTestOnResult(t, result, env);
              testReport.push({ label: t, ok: pass });
              ok = ok && pass;
              const expTxt = parseExpectedFromTest(t);
              if (expTxt) extraLines.push(`Esperado = ${expTxt}`);
            }
          } else if (mode === 'fn') {
            const fnVal = evalFunction(source, env);
            ok = true;
            for (const t of tests) {
              const pass = runTestOnFn(t, fnVal, env);
              testReport.push({ label: t, ok: pass });
              ok = ok && pass;
            }
            const pv = tryFnPreview(fnVal, item);
            if (pv && pv.length) { extraLines.push('Previews:'); extraLines.push(...pv.map(s=>'  • ' + s)); }
          } else if (mode === 'prog') {
            const bag = runProgram(source, env);
            ok = true;
            for (const t of tests) {
              const pass = runProgTest(t, bag, env);
              testReport.push({ label: t, ok: pass });
              ok = ok && pass;
            }
            extraLines.push(`exports: ${listExports(bag)}`);
            const pv = item?.validator?.preview;
            if (pv && Array.isArray(pv)) {
              extraLines.push('Previews:');
              for (const call of pv) {
                const expr = (call && call.call) ? call.call : null;
                if (!expr) continue;
                try {
                  const fn = new Function('bag','env',`"use strict"; with(bag){ with(env){ return (${expr}); } }`);
                  const out = fn(bag, env);
                  extraLines.push(`  • ${expr} → ${prettyVal(out)}`);
                } catch(e){ extraLines.push(`  • ${expr} → throws ${String(e)}`); }
              }
            }
          } else {
            ok = false;
            testReport.push({ expr: 'mode', ok: false, error: 'Unknown validator mode: ' + mode });
          }
        } catch (e) {
          ok = false;
          testReport.push({ expr: 'runtime', ok: false, error: String(e) });
        }
      }

      const linesTests = testReport.map(r => `• ${r.label}: ${r.ok ? '✓' : '✗'}${r.error ? ' — ' + r.error : ''}`);
      const lines = [].concat(extraLines.length ? extraLines : []).concat(linesTests.length ? ['Pruebas:', ...linesTests] : []);
      fb.querySelector('.why').textContent = (item.explain || '') + (lines.length ? ('\n\n' + lines.join('\n')) : '');
      if (!pick) { wrongIds.push(id); }
    }

    if (ok) {
      card.classList.remove('wrong');
      fb.classList.remove('bad'); fb.classList.add('ok');
      fb.querySelector('.status').textContent = 'Correct.';
    } else {
      card.classList.add('wrong');
      fb.classList.remove('ok'); fb.classList.add('bad');
      if (item.type === 'tri') {
        fb.querySelector('.status').innerHTML = `Review this point · Correct: <b>${triAnswerText(item.answer)}</b>`;
      } else if (item.type === 'short') {
        fb.querySelector('.status').innerHTML = `Revisa este punto · Correcta: <b>${item.answer}</b>`;
      } else {
        fb.querySelector('.status').innerHTML = `Review this point · Check your notes.`;
        attempts.set(id, (attempts.get(id) || 0) + 1);
        const n = attempts.get(id);
        if (n === 2 && item.hint) {
          const hintEl = fb.querySelector('.hint');
          if (hintEl) hintEl.textContent = 'Sugerencia extra: ' + item.hint;
        }
        const actions = document.createElement('div');
        actions.style.marginTop = '8px';
        const toConsole = document.createElement('button');
        toConsole.className = 'btn tiny secondary';
        toConsole.textContent = '▶ Try in Console Lab';
        toConsole.addEventListener('click', ()=>{
          const chunk = [item?.setup || '', (picks.get(id) || item.scaffold || '')].filter(Boolean).join('\n').trim();
          if (!chunk) return;
          if (consoleInputEl.value.trim().length) consoleInputEl.value += '\n// ---\n';
          consoleInputEl.value += chunk + '\n';
          showLab(true);
          logLine(`[info] Added ${item.id} to Console Lab.`, 'l-info');
        });
        actions.appendChild(toConsole);
        fb.appendChild(actions);
      }
      if (!wrongIds.includes(id)) wrongIds.push(id);
    }

    headBadge.style.display = 'inline-block';
    results.push({ id, ok, pick, item });
  }

  const okCount   = results.filter(r => r.ok).length;
  const wrongList = results.filter(r => !r.ok);

  const run = {
    id: Date.now(),
    bank: bankSelect.value,
    when: new Date().toISOString(),
    total: results.length,
    correct: okCount,
    wrong: results.length - okCount,
    items: results.map(r => ({
      id: r.id,
      type: r.item.type,
      ok: r.ok,
      pick: r.pick ?? null,
      answer: r.item.type==='tri' ? r.item.answer : (r.item.answer ?? null),
      prompt: r.item.prompt ?? r.item.question ?? '',
      code: r.item.code ?? '',
      setup: r.item.setup ?? '',
      hint: r.item.hint ?? '',
      explain: r.item.explain ?? ''
    }))
  };

  const runsKey = LS_KEYS.RUNS(bankSelect.value);
  const past = loadJSON(runsKey, []);
  past.unshift(run);
  saveJSON(runsKey, past);

  SCORE.total   += results.length;
  SCORE.correct += okCount;
  SCORE.wrong   += (results.length - okCount);
  SCORE.lastRunId = run.id;
  saveJSON(LS_KEYS.SCORE(bankSelect.value), SCORE);

  retryBtn.disabled       = wrongList.length === 0;
  exportWrongBtn.disabled = wrongList.length === 0;
  const exportWrongJSONLBtn2 = document.getElementById('exportWrongJSONL');
  if (exportWrongJSONLBtn2) exportWrongJSONLBtn2.disabled = wrongList.length === 0;
  onlyWrong.disabled      = results.length === 0;

  updateScoreUI();
  renderBankMiniChart();

  lastResult = results;
  summarize(results);
  applyOnlyWrongFilter();

  const hasAny   = results.length > 0;
  const hasWrong = wrongIds.length > 0;
  retryBtn.disabled       = !hasWrong;
  exportWrongBtn.disabled = !hasWrong;
  onlyWrong.disabled      = !hasAny;
}

function applyOnlyWrongFilter(){
  if (!lastResult) return;
  const only = onlyWrong.checked;
  const wrongSet = new Set(lastResult.filter(r => !r.ok).map(r => r.id));
  document.querySelectorAll('.card').forEach(card=>{
    if (!only) { card.style.display = ''; return; }
    card.style.display = wrongSet.has(card.dataset.id) ? '' : 'none';
  });
}
function retryWrongItems(){
  if (!lastResult) return;
  const wrongIds = new Set(lastResult.filter(r => !r.ok).map(r => r.id));
  document.querySelectorAll('.card').forEach(card=>{
    const id = card.dataset.id;
    const fb = card.querySelector('.fb');
    const badge = card.querySelector('.badge');
    if (wrongIds.has(id)){
      card.classList.remove('wrong');
      fb.className = 'fb';
      picks.delete(id);
      card.querySelectorAll('.chip').forEach(ch=>{ ch.dataset.state = 'off'; ch.setAttribute('aria-pressed','false'); });
      const inp = card.querySelector('.shortbox input'); if (inp) inp.value = '';
      const ta  = card.querySelector('.shortbox textarea'); if (ta) ta.value = '';
      if (badge) badge.style.display = 'none';
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
  summaryEl.classList.add('hide');
  retryBtn.disabled = true;
  exportWrongBtn.disabled = true;
  onlyWrong.checked = false;
  onlyWrong.disabled = true;
  lastResult = null;
}

/* ========================================================================== */
/*  LOADING                                                                   */
/* ========================================================================== */
async function loadJSONL(src){
  if(!src) return FALLBACK;
  try{
    const res=await fetch(src,{cache:'no-store'});
    if(!res.ok) throw new Error(res.status+' '+res.statusText);
    const text=await res.text();
    return text.split('\n').filter(Boolean).map(line=>JSON.parse(line));
  }catch(e){
    console.warn('Fallo al cargar JSONL; usando fallback.', e);
    return FALLBACK;
  }
}

/* ========================================================================== */
/*  CONSOLE LAB (iframe runner with injected boot)                            */
/* ========================================================================== */
const consoleLabEl = document.getElementById('consoleLab');
const consoleInputEl = document.getElementById('consoleInput');
const consoleOutEl = document.getElementById('consoleOutput');
const openConsoleLabBtn = document.getElementById('openConsoleLab');
const runConsoleBtn = document.getElementById('runConsoleText');
const clearConsoleBtn = document.getElementById('clearConsole');
const runAllItemsBtn = document.getElementById('runAllItems');

function showLab(v=true){ consoleLabEl.classList.toggle('hide', !v); }
function logLine(msg, cls){ const d=document.createElement('div'); d.className=cls||''; d.textContent=msg; consoleOutEl.appendChild(d); consoleOutEl.scrollTop=consoleOutEl.scrollHeight; }
function hr(){ logLine('────────', 'l-hr'); }

let runnerFrame = null;
function ensureRunner(){
  if (runnerFrame) return runnerFrame;

  const iframe = document.createElement('iframe');
  iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  // inlined boot (scoped safely here)
  const boot = `
<!doctype html><meta charset="utf-8">
<script>
(function(){
  var __EMITS__ = 0;
  const q = (type, payload) => { try { parent.postMessage({__console_lab__:true, type, payload}, '*'); } catch(_) {} };

  ['log','info','warn','error'].forEach(k=>{
    const orig = console[k].bind(console);
    console[k] = function(...args){
      __EMITS__++;
      q('console', {level:k, args: args.map(String)});
      return orig(...args);
    };
  });

  window.onerror = function(msg, src, line, col, err){
    q('error', {msg:String(msg), where:(src||'')+':'+line+':'+(col||0), stack:(err&&err.stack)? String(err.stack): ''});
  };
  window.addEventListener('unhandledrejection', ev=>{
    const e = ev.reason;
    q('error', {msg:'Unhandled Promise rejection', where:'', stack:(e && e.stack)? String(e.stack) : String(e)});
  });

  window.alert = function(){};

  window.__runSnippet = function(source){
    __EMITS__ = 0;
    try{
      var __VAL__ = (function(){ "use strict"; return (0,eval)(source); })();
      return {ok:true, emitted: __EMITS__, value: __VAL__};
    }catch(e){
      return {ok:false, emitted: __EMITS__, error: String(e && e.message ? e.message : e)};
    }
  };

  window.__runProgram = function(source, env){
    try{
      var exports = {};
      var result;
      (function(exports, env){
        "use strict";
        return (0,eval)(source);
      })(exports, env || {});
      return { ok: true, exports: exports, result: result };
    }catch(e){
      return { ok: false, error: String(e && e.message ? e.message : e) };
    }
  };
})();
<\/script>`;

  iframe.contentDocument.open();
  iframe.contentDocument.write(boot);
  iframe.contentDocument.close();
  runnerFrame = iframe.contentWindow;

  window.addEventListener('message', (ev)=>{
    const d = ev.data || {};
    if (!d.__console_lab__) return;
    if (d.type === 'console') {
      const lvl = d.payload.level;
      const cls = lvl==='warn' ? 'l-warn' : lvl==='error' ? 'l-error' : lvl==='info' ? 'l-info' : 'l-log';
      logLine(`[${lvl}] ${d.payload.args.join(' ')}`, cls);
    } else if (d.type === 'error') {
      const where = d.payload.where ? ` @ ${d.payload.where}` : '';
      const stack = d.payload.stack ? `\n${d.payload.stack}` : '';
      logLine(`[error] ${d.payload.msg}${where}${stack}`, 'l-error');
    }
  });

  return runnerFrame;
}

function runSourceBatch(text){
  try {
    ensureRunner();
    const parts = text.split(/^\/\/\s*---.*$/m).map(s=>s.trim()).filter(Boolean);
    if (!parts.length){ logLine('[info] Nothing to run', 'l-info'); return; }
    parts.forEach((src, i)=>{
      hr(); logLine(`Snippet #${i+1}`, 'l-info');
      let res;
      try { res = runnerFrame.__runSnippet(src); }
      catch (e) { logLine('[error] Cannot call runner: ' + e, 'l-error'); return; }
      if (!res || !res.ok) {
        logLine(`[error] ${res && res.error ? res.error : 'Unknown error'}`, 'l-error');
      } else if (!res.emitted) {
        if (typeof res.value !== 'undefined') logLine(`[result] ${String(res.value)}`, 'l-info');
        else logLine('[info] (no console output, no expression value)', 'l-info');
      }
    });
    hr();
  } catch (e) {
    logLine('[error] Runner failure: ' + e, 'l-error');
  }
}

/* ========================================================================== */
/*  EVENTS                                                                    */
/* ========================================================================== */
document.getElementById('loadBank').addEventListener('click', loadSelectedBank);
document.getElementById('nextBank').addEventListener('click', async ()=>{ selectNextBank(); await loadSelectedBank(); });
onlyWrong.addEventListener('change', applyOnlyWrongFilter);
exportWrongBtn.addEventListener('click', exportWrongMarkdown);
exportAllBtn.addEventListener('click', ()=> exportAllMarkdown({revealSolutions:true}));
exportAllNoKeysBtn.addEventListener('click', ()=> exportAllMarkdown({revealSolutions:false}));
checkBtn.addEventListener('click', correctAll);
document.addEventListener('keydown', (e)=>{ if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){ correctAll(); } });
retryBtn.addEventListener('click', retryWrongItems);

function isTypingTarget(el) {
  return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
}
document.addEventListener('keydown', (e)=>{
  if (!focusMode) return;
  if (isTypingTarget(e.target)) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); nextBtn.click(); }
  if (e.key === 'ArrowLeft')  { e.preventDefault(); prevBtn.click(); }
});
document.addEventListener('keydown', (e)=>{
  if (isTypingTarget(e.target)) return;
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); correctAll(); }
});

document.getElementById('openConsoleLab').addEventListener('click', ()=> showLab(consoleLabEl.classList.contains('hide')));
document.getElementById('runConsoleText').addEventListener('click', ()=> runSourceBatch(consoleInputEl.value));
document.getElementById('clearConsole').addEventListener('click', ()=> (consoleOutEl.textContent=''));
document.getElementById('runAllItems').addEventListener('click', ()=>{
  if(!Array.isArray(BANK)||!BANK.length){ alert('No items loaded.'); return; }
  const chunks = BANK.map(it=>[it?.setup||'', it?.code||''].filter(Boolean).join('\n').trim()).filter(Boolean);
  if(!chunks.length){ alert('Bank has no runnable code.'); return; }
  consoleInputEl.value = chunks.join('\n// ---\n');
  consoleOutEl.textContent = '';
  showLab(true);
  runSourceBatch(consoleInputEl.value);
});

document.getElementById('addExercise').addEventListener('click', ()=>{
  const type=document.getElementById('newType').value;
  const id=document.getElementById('newId').value.trim();
  const code=document.getElementById('newCode').value;
  const answer=document.getElementById('newAns').value.trim();
  const hint=document.getElementById('newHint').value.trim();
  const explain=document.getElementById('newExplain').value.trim();
  const setup=document.getElementById('newSetup').value;
  const validatorText=document.getElementById('newValidator').value.trim();

  if(type==='short' && (!id||!code||!answer)){ alert("Para SHORT rellena ID, código y respuesta esperada."); return; }
  if(type==='tri' && (!id||!code)){ alert("Para TRI rellena ID y código."); return; }
  if(type==='code' && !validatorText){ alert("Para CODE añade un Validator (JSON)."); return; }

  const base={ id, type, tier:2, lang:"es", category:"Operadores y Expresiones",
    subcat: type==="tri" ? "clasificacion" : (type==="short" ? "alert-output" : "validator"),
    question: type==="tri" ? "Clasifica la expresión" : (type==="short" ? "¿Qué muestra el console.log?" : undefined)
  };
  const item = {...base, code, hint, explain};
  if(type==="tri"){
    item.options=["correct","variable","incorrect"];
    item.answer = ["correct","variable","incorrect"].includes(answer) ? answer : "variable";
  }else if(type==="short"){
    item.answer=answer; if(setup) item.setup=setup;
  }else if(type==="code"){
    if(setup) item.setup=setup;
    try{ item.validator = JSON.parse(validatorText); }catch(e){ alert("Validator JSON inválido"); return; }
  }
  BANK.push(item); window.BANK=BANK; render(); alert(`Ejercicio ${id} añadido.`);
});
// Score reset with events 
// Score reset buttons (optional)
const scoreResetBtn = document.getElementById('scoreReset');
const scoreResetAllBtn = document.getElementById('scoreResetAll');

scoreResetBtn?.addEventListener('click', ()=>{
  if (!bankSelect.value) return;
  if (!confirm('Reset score to 0 for this bank?')) return;
  resetScore(bankSelect.value, { alsoHistory:false });
});

scoreResetAllBtn?.addEventListener('click', ()=>{
  if (!bankSelect.value) return;
  if (!confirm('Reset score to 0 AND delete past runs for this bank?')) return;
  resetScore(bankSelect.value, { alsoHistory:true });
});

// Score mode selector (optional)
const scoreModeSel = document.getElementById('scoreMode');
if (scoreModeSel){
  // hydrate
  scoreModeSel.value = loadScoreMode(bankSelect.value);
  // keep current bank mode up to date
  scoreModeSel.addEventListener('change', ()=>{
    saveScoreMode(bankSelect.value, scoreModeSel.value);
    // If user just switched to 'fresh-on-load', apply immediately for clarity
    if (scoreModeSel.value === 'fresh-on-load') resetScore(bankSelect.value, { alsoHistory:false });
  });

  // when bank changes, reflect its mode in the UI
  const _origLoadSelectedBank = loadSelectedBank;
  // wrap once (idempotent guard)
  if (!_origLoadSelectedBank.__wrapped){
    window.loadSelectedBank = async function(){
      await _origLoadSelectedBank();
      if (scoreModeSel) scoreModeSel.value = loadScoreMode(bankSelect.value);
    };
    window.loadSelectedBank.__wrapped = true;
  }
}
// quick user switch (call from a menu item or dev console)
window.promptUserSwitch = function(){
  const cur = USER.id;
  const next = prompt('User id (namespace for scores/runs):', cur) || cur;
  setUserId(next);
};


/* ========================================================================== */
/*  INIT                                                                      */
/* ========================================================================== */
(async function init(){
  const hasDefault = Array.from(bankSelect.options).some(o=>o.value===DATA_SRC);
  bankSelect.value = hasDefault ? DATA_SRC : (bankSelect.options[0]?.value || "");
  if(!bankSelect.value){ BANK = FALLBACK.slice(); window.BANK=BANK; render(); return; }
  await loadSelectedBank();
  loadConceptForBank(bankSelect.value);
})();

})(); // end IIFE
