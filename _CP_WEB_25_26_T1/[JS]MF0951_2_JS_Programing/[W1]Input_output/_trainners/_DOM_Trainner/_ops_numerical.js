(function(){

  const BANK = [

    /* ----------------------------------------------------------
       ASSIGNMENT OPERATORS (+=, -=, *=, /=, %=, **=)
    ---------------------------------------------------------- */

    {
      "id":"OP-01",
      "type":"fillcode",
      "tier":1,
      "category":"Operators",
      "subcat":"assignment-plus",
      "question":"Use += to add 3 to x.",
      "template":"let x = 5;\nx {{1}} 3;",
      "answers":{ "1":["+="] }
    },

    {
      "id":"OP-02",
      "type":"fillcode",
      "tier":1,
      "category":"Operators",
      "subcat":"assignment-minus",
      "question":"Use -= to subtract 7 from total.",
      "template":"let total = 20;\ntotal {{1}} 7;",
      "answers":{ "1":["-="] }
    },

    {
      "id":"OP-03",
      "type":"fillcode",
      "tier":1,
      "category":"Operators",
      "subcat":"assignment-multiply",
      "question":"Use *= to multiply n by 4.",
      "template":"let n = 6;\nn {{1}} 4;",
      "answers":{ "1":["*="] }
    },

    {
      "id":"OP-04",
      "type":"fillcode",
      "tier":1,
      "category":"Operators",
      "subcat":"assignment-divide",
      "question":"Use /= to divide p by 5.",
      "template":"let p = 45;\np {{1}} 5;",
      "answers":{ "1":["/="] }
    },

    {
      "id":"OP-05",
      "type":"fillcode",
      "tier":1,
      "category":"Operators",
      "subcat":"assignment-modulo",
      "question":"Use %= to keep only the remainder of x divided by 4.",
      "template":"let x = 19;\nx {{1}} 4;",
      "answers":{ "1":["%="] }
    },

    {
      "id":"OP-06",
      "type":"fillcode",
      "tier":1,
      "category":"Operators",
      "subcat":"assignment-power",
      "question":"Use **= to raise value to the 3rd power.",
      "template":"let value = 2;\nvalue {{1}} 3;",
      "answers":{ "1":["**="] }
    },

    /* ----------------------------------------------------------
       UNARY OPERATORS (+value for casting, -value for negation)
    ---------------------------------------------------------- */

    {
      "id":"OP-07",
      "type":"mc",
      "tier":1,
      "category":"Operators",
      "subcat":"unary-plus",
      "question":"Which option uses unary plus to convert a DOM input string to number?",
      "options":[
        "+input.value",
        "input.value + 0",
        "Number + input.value",
        "input.value++"
      ],
      "answer":"+input.value",
      "hint":"Unary + converts a string to number if the content is numeric.",
      "explain":"+string → number. Other options either concatenate, create NaN, or increment the string value incorrectly."
    },

    {
      "id":"OP-08",
      "type":"mc",
      "tier":1,
      "category":"Operators",
      "subcat":"unary-minus",
      "question":"What does unary minus do?",
      "options":[
        "It flips the numeric sign.",
        "It removes decimals.",
        "It converts string to boolean.",
        "It appends a '-' to the string."
      ],
      "answer":"It flips the numeric sign.",
      "hint":"Unary - is purely numeric: positive ↔ negative.",
      "explain":"Unary minus negates a numeric value. It does not format or truncate."
    },

    /* ----------------------------------------------------------
       DOM + OPERATORS MIX
    ---------------------------------------------------------- */

    {
      "id":"OP-09",
      "type":"fillcode",
      "tier":1,
      "category":"Operators",
      "subcat":"dom-cast",
      "question":"Complete the line: read numeric value from inputA using Number().",
      "template":"const a = Number(inputA.value{{1}});",
      "answers":{ "1":[".trim()"] }
    },

    {
      "id":"OP-10",
      "type":"fillcode",
      "tier":1,
      "category":"Operators",
      "subcat":"dom-cast-unary",
      "question":"Complete the line: read numeric value from inputB using unary plus.",
      "template":"const b = +inputB.value{{1}};",
      "answers":{ "1":[".trim()"] }
    },

    {
      "id":"OP-11",
      "type":"mc",
      "tier":1,
      "category":"Operators",
      "subcat":"dom-assignment-plus",
      "question":"Which line correctly adds the value of B to A inside a DOM app?",
      "options":[
        "result.textContent = a += b;",
        "result.textContent = a =+ b;",
        "result.textContent = a + b =;",
        "result.textContent = (+= a b);"
      ],
      "answer":"result.textContent = a += b;",
      "hint":"`+=` modifies the left variable, `=+` is a common typo and means something else.",
      "explain":"Only `a += b` is valid assignment addition. `a =+ b` assigns positive b, not addition."
    },

    {
      "id":"OP-12",
      "type":"fillcode",
      "tier":1,
      "category":"Operators",
      "subcat":"dom-remainder",
      "question":"Compute leftover minutes from inputTime (DOM):",
      "template":"const t = Number(inputTime.value.trim());\nconst leftover = t {{1}} 60;",
      "answers":{ "1":["%"] }
    },

    {
      "id":"OP-13",
      "type":"fillcode",
      "tier":1,
      "category":"Operators",
      "subcat":"dom-normalization",
      "question":"Normalize total cents into leftover cents after extracting euros:",
      "template":"let totalCents = Number(input.value.trim());\nlet cents = totalCents {{1}} 100;",
      "answers":{ "1":["%"] }
    },

    {
      "id":"OP-14",
      "type":"mc",
      "tier":1,
      "category":"Operators",
      "subcat":"dom-power",
      "question":"Which expression correctly squares the DOM numeric value 'n'?",
      "options":[
        "n ** 2",
        "n * n * n",
        "n *= 1",
        "n **= 1"
      ],
      "answer":"n ** 2",
      "hint":"Power operator: x**y means x raised to the power y.",
      "explain":"n**2 squares the number. n**=1 leaves it unchanged."
    }

  ];

  // Load into Digester environment
  if (typeof window !== "undefined") {
    window.BANK = (window.BANK || []).concat(BANK);
    if (typeof window.loadQuestionsFromJSON === "function") {
      try { window.loadQuestionsFromJSON(BANK); } catch(e){}
    }
  }

})();
