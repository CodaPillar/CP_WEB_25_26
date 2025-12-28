const questions = [
     {
          id: 1,
          title: "Match a Date",
          prompt: "Write a regex to match a date in the format YYYY-MM-DD. (e.g. 2023-12-25)",
          testCases: [
               { text: "2023-12-25", shouldMatch: true },
               { text: "1999-01-01", shouldMatch: true },
               { text: "25-12-2023", shouldMatch: false },
               { text: "2023/12/25", shouldMatch: false },
               { text: "ABCD-EF-GH", shouldMatch: false }
          ],
          solution: "^\\d{4}-\\d{2}-\\d{2}$"
     },
     {
          id: 2,
          title: "Match a Hex Color",
          prompt: "Match a valid hex color code. It starts with # followed by 6 hexadecimal characters (0-9, a-f). Case insensitive.",
          flags: "i",
          testCases: [
               { text: "#ff0000", shouldMatch: true },
               { text: "#AbC123", shouldMatch: true },
               { text: "#123456", shouldMatch: true },
               { text: "#gggggg", shouldMatch: false },
               { text: "ff0000", shouldMatch: false },
               { text: "#12345", shouldMatch: false }
          ],
          solution: "^#[0-9a-f]{6}$"
     },
     {
          id: 3,
          title: "Find the Cat",
          prompt: "Match the word 'cat' only if it appears at the very beginning of the string.",
          flags: "",
          testCases: [
               { text: "cat in the hat", shouldMatch: true },
               { text: "caterpillar", shouldMatch: true },
               { text: "the cat sat", shouldMatch: false },
               { text: "black cat", shouldMatch: false }
          ],
          solution: "^cat"
     },
     {
          id: 4,
          title: "Match US Phone Number",
          prompt: "Match a US phone number in the format 'xxx-xxx-xxxx'.",
          testCases: [
               { text: "123-456-7890", shouldMatch: true },
               { text: "000-000-0000", shouldMatch: true },
               { text: "1234567890", shouldMatch: false },
               { text: "12-345-67890", shouldMatch: false }
          ],
          solution: "^\\d{3}-\\d{3}-\\d{4}$"
     },
     {
          id: 5,
          title: "Match Non-Digits",
          prompt: "Match any string that is NOT a digit.",
          testCases: [
               { text: "abc", shouldMatch: true },
               { text: "!", shouldMatch: true },
               { text: "1", shouldMatch: false },
               { text: "9", shouldMatch: false }
          ],
          solution: "^\\D+$"
     },
     {
          id: 6,
          title: "Match Repeated Words",
          prompt: "Match any word that is immediately repeated (e.g. 'cat cat'). You'll need backreferences.",
          testCases: [
               { text: "cat cat", shouldMatch: true },
               { text: "hello hello", shouldMatch: true },
               { text: "cat dog", shouldMatch: false },
               { text: "hello help", shouldMatch: false }
          ],
          solution: "(\\b\\w+\\b) \\1"
     }
];

const QUESTIONS_PER_PAGE = 3;
let currentPage = 0;

const questionsContainer = document.getElementById('questions-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressIndicator = document.getElementById('progress-indicator');

function initApp() {
     renderPage(0);

     prevBtn.addEventListener('click', () => {
          if (currentPage > 0) {
               currentPage--;
               renderPage(currentPage);
          }
     });

     nextBtn.addEventListener('click', () => {
          const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
          if (currentPage < totalPages - 1) {
               currentPage++;
               renderPage(currentPage);
          }
     });
}

function renderPage(pageIndex) {
     questionsContainer.innerHTML = '';
     const start = pageIndex * QUESTIONS_PER_PAGE;
     const end = start + QUESTIONS_PER_PAGE;
     const pageQuestions = questions.slice(start, end);

     pageQuestions.forEach(q => {
          const card = createQuestionCard(q);
          questionsContainer.appendChild(card);
     });

     updateControls(pageIndex);
}

function createQuestionCard(question) {
     const card = document.createElement('div');
     card.className = 'question-card';

     // Create Test Case elements string
     const testCasesHtml = question.testCases.map((tc, idx) => `
        <div class="test-case" id="tc-${question.id}-${idx}">
            <div class="dot"></div>
            <div class="test-case-text">"${tc.text}"</div>
            <div class="test-case-expectation">${tc.shouldMatch ? 'Should Match' : 'Should NOT Match'}</div>
        </div>
    `).join('');

     card.innerHTML = `
        <div class="question-header">
            <div class="question-title">${question.title}</div>
            <div class="difficulty-badge">Practice</div>
        </div>
        <div class="prompt-text">${question.prompt}</div>
        <div class="input-area">
            <div class="regex-input-wrapper">
                <span class="slash">/</span>
                <input type="text" class="regex-input" placeholder="Enter regex..." id="input-${question.id}">
                <span class="slash">/</span>
                <span class="flags">${question.flags || 'g'}</span>
            </div>
            <div class="status-msg" id="msg-${question.id}"></div>
        </div>
        <div class="test-cases">
            ${testCasesHtml}
        </div>
        <div class="actions">
            <button class="btn secondary small" id="show-answer-${question.id}">Show Answer</button>
            <div class="answer-reveal hidden" id="answer-${question.id}">
                Correct Regex: <code>${question.solution || "Solution not provided"}</code>
            </div>
        </div>
    `;

     // Add event listener for input
     const input = card.querySelector(`#input-${question.id}`);
     input.addEventListener('input', (e) => validateInput(e.target.value, question));

     // Add event listener for Show Answer
     const showBtn = card.querySelector(`#show-answer-${question.id}`);
     const answerDiv = card.querySelector(`#answer-${question.id}`);

     showBtn.addEventListener('click', () => {
          answerDiv.classList.remove('hidden');
          showBtn.disabled = true;
          // Optionally fill the input
          // input.value = question.solution;
          // validateInput(question.solution, question);
     });

     return card;
}

function validateInput(pattern, question) {
     const msgEl = document.getElementById(`msg-${question.id}`);

     // Reset test cases UI
     question.testCases.forEach((tc, idx) => {
          const tcEl = document.getElementById(`tc-${question.id}-${idx}`);
          tcEl.classList.remove('pass', 'fail');
     });

     if (!pattern) {
          msgEl.textContent = '';
          msgEl.className = 'status-msg';
          return;
     }

     try {
          const flags = question.flags || 'g';
          const regex = new RegExp(pattern, flags);

          // Run against test cases
          let allPass = true;

          question.testCases.forEach((tc, idx) => {
               const tcEl = document.getElementById(`tc-${question.id}-${idx}`);
               // Note: Use .test() for simple matches
               const isMatch = regex.test(tc.text);
               const passed = isMatch === tc.shouldMatch;

               if (passed) {
                    tcEl.classList.add('pass');
               } else {
                    tcEl.classList.add('fail');
                    allPass = false;
               }
          });

          if (allPass) {
               msgEl.textContent = "Great job! All tests passed.";
               msgEl.className = 'status-msg success';
          } else {
               msgEl.textContent = "Some tests failed.";
               msgEl.className = 'status-msg error';
          }

     } catch (e) {
          msgEl.textContent = "Invalid Regex";
          msgEl.className = 'status-msg error';
     }
}

function updateControls(pageIndex) {
     const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
     progressIndicator.textContent = `Page ${pageIndex + 1} of ${totalPages}`;

     prevBtn.disabled = pageIndex === 0;
     nextBtn.disabled = pageIndex >= totalPages - 1;
}

initApp();
