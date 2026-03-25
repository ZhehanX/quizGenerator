// ============================================================
// QUIZ FILE CONFIGURATION
// All topics are parsed from this single Markdown file.
// ============================================================
const QUIZ_FILE = "./ISDCM_Tests_Completos.md";

// ============================================================
// MARKDOWN PARSER
// ============================================================

/**
 * Parses a Markdown quiz file and returns an array of question objects.
 *
 * Expected MD format:
 *   ### X.Y Section Title
 *   **Pregunta N:** Question text (may span multiple lines / include code blocks)
 *   - [ ] Option1
 *   - [ ] Option2
 *   > **Respuesta:** CorrectOption. Explanation text.
 *
 * @param {string} text - Raw markdown text
 * @returns {Array<{section: string, question: string, options: string[], correct: number, explanation: string}>}
 */
function parseMarkdown(text) {
  const lines = text.split("\n");
  const questions = [];

  let currentSection = "";
  let currentQuestion = null;
  let inCodeBlock = false;
  let questionTextLines = [];
  let collectingQuestion = false;

  function finalizeQuestion() {
    if (!currentQuestion) return;

    // Attach accumulated question text
    if (questionTextLines.length > 0) {
      currentQuestion.question +=
        (currentQuestion.question ? "\n" : "") + questionTextLines.join("\n");
      questionTextLines = [];
    }

    // Trim the question text
    currentQuestion.question = currentQuestion.question.trim();

    // Only add if we have a valid question with options
    if (
      currentQuestion.question &&
      currentQuestion.options.length > 0 &&
      currentQuestion.correct !== -1
    ) {
      questions.push(currentQuestion);
    }
    currentQuestion = null;
    collectingQuestion = false;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track fenced code blocks (``` or ~~~)
    if (line.trim().startsWith("```") || line.trim().startsWith("~~~")) {
      inCodeBlock = !inCodeBlock;
      if (collectingQuestion) {
        questionTextLines.push(line);
      }
      continue;
    }

    // Inside a code block, just accumulate into question text
    if (inCodeBlock) {
      if (collectingQuestion) {
        questionTextLines.push(line);
      }
      continue;
    }

    // --- Section header: ### X.Y Title ---
    const sectionMatch = line.match(/^###\s+(.+)/);
    if (sectionMatch) {
      finalizeQuestion();
      currentSection = sectionMatch[1].trim();
      continue;
    }

    // --- Question start: **Pregunta N:** ... ---
    const questionMatch = line.match(/\*\*Pregunta\s+\d+:\*\*\s*(.*)/);
    if (questionMatch) {
      finalizeQuestion();
      currentQuestion = {
        section: currentSection,
        question: questionMatch[1].trim(),
        options: [],
        correct: -1,
        explanation: "",
      };
      collectingQuestion = true;
      questionTextLines = [];
      continue;
    }

    // --- Option line: - [ ] OptionText ---
    const optionMatch = line.match(/^-\s+\[[\sx]\]\s+(.*)/);
    if (optionMatch && currentQuestion) {
      // If we were collecting multi-line question text, attach it now
      if (questionTextLines.length > 0) {
        currentQuestion.question +=
          (currentQuestion.question ? "\n" : "") + questionTextLines.join("\n");
        questionTextLines = [];
      }
      collectingQuestion = false;
      currentQuestion.options.push(optionMatch[1].trim());
      continue;
    }

    // --- Answer line: > **Respuesta:** Answer. Explanation. ---
    const answerMatch = line.match(/^>\s*\*\*Respuesta:\*\*\s*(.*)/);
    if (answerMatch && currentQuestion) {
      const answerText = answerMatch[1].trim();

      // The first word is the correct answer (e.g., "Verdadero." or "Falso.")
      // Strip trailing period/comma for matching
      const firstWord = answerText.split(/[\s.,;:]+/)[0];

      // Find which option matches
      const correctIndex = currentQuestion.options.findIndex(
        (opt) => opt.toLowerCase() === firstWord.toLowerCase()
      );
      currentQuestion.correct = correctIndex !== -1 ? correctIndex : 0;

      // Everything after the first word (and its trailing punctuation) is the explanation
      const explanationMatch = answerText.match(
        /^\S+[\s.,;:]*\s*(.*)/
      );
      currentQuestion.explanation = explanationMatch
        ? explanationMatch[1].trim()
        : "";

      continue;
    }

    // --- Continuation lines for multi-line question text ---
    if (collectingQuestion && currentQuestion && line.trim() !== "") {
      // Skip horizontal rules and top-level headers
      if (line.match(/^---\s*$/) || line.match(/^#{1,2}\s/)) {
        continue;
      }
      questionTextLines.push(line);
    }
  }

  // Don't forget the last question
  finalizeQuestion();

  return questions;
}

/**
 * Groups parsed questions by their section into topic objects.
 * @param {Array} allQuestions - Flat array from parseMarkdown()
 * @returns {Array<{name: string, questions: Array}>}
 */
function parseTopics(allQuestions) {
  const topicMap = new Map();

  for (const q of allQuestions) {
    const section = q.section || "Sin categoría";
    if (!topicMap.has(section)) {
      topicMap.set(section, []);
    }
    topicMap.get(section).push({
      question: q.question,
      options: q.options,
      correct: q.correct,
      explanation: q.explanation,
      section: q.section,
    });
  }

  return Array.from(topicMap.entries()).map(([name, questions]) => ({
    name,
    questions,
  }));
}

// ============================================================
// QUESTION TEXT FORMATTER
// ============================================================

/**
 * Converts raw question text (which may contain markdown code fences)
 * into safe HTML with styled code blocks.
 */
function formatQuestionHTML(text) {
  // Escape HTML entities first
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Convert fenced code blocks (```...```) to <pre><code>
  const formatted = escaped.replace(
    /```\w*\n([\s\S]*?)```/g,
    (_, code) =>
      `<pre style="background:#2d2d2d;color:#f8f8f2;padding:0.8em;border-radius:6px;overflow-x:auto;font-size:0.8em;text-align:left;margin:0.5em 0;"><code>${code.trim()}</code></pre>`
  );

  return formatted;
}

// ============================================================
// DOM ELEMENTS
// ============================================================
const startScreen = document.getElementById("start-screen");
const topicScreen = document.getElementById("topic-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const backToStartBtn = document.getElementById("back-to-start-btn");
const backToTopicsBtn = document.getElementById("back-to-topics-btn");

const questionText = document.getElementById("question-text");
const optionsGrid = document.getElementById("options-grid");
const questionCounter = document.getElementById("question-counter");
const scoreDisplay = document.getElementById("score-display");
const finalScore = document.getElementById("final-score");
const feedbackIcon = document.getElementById("feedback-icon");

const feedbackContainer = document.getElementById("feedback-container");
const explanationText = document.getElementById("explanation-text");
const nextBtn = document.getElementById("next-btn");

const topicList = document.getElementById("topic-list");
const loadingIndicator = document.getElementById("loading-indicator");
const errorContainer = document.getElementById("error-container");
const errorMessage = document.getElementById("error-message");
const retryBtn = document.getElementById("retry-btn");

// ============================================================
// GAME STATE
// ============================================================
let questions = [];
let originalQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let canClick = true;
let selectedTopicIndex = -1;

/** Cached topics parsed from the markdown file */
let cachedTopics = null;

// ============================================================
// SCREENS
// ============================================================
const allScreens = [startScreen, topicScreen, questionScreen, resultScreen];

function showScreen(screen) {
  allScreens.forEach((s) => s.classList.remove("active"));
  screen.classList.add("active");
}

// ============================================================
// TOPIC SELECTION
// ============================================================

async function showTopicSelection() {
  topicList.innerHTML = "";
  errorContainer.classList.add("hidden");
  topicList.classList.add("hidden");
  loadingIndicator.classList.remove("hidden");
  showScreen(topicScreen);

  try {
    // Fetch and parse only once, then cache
    if (!cachedTopics) {
      const response = await fetch(QUIZ_FILE);
      if (!response.ok) {
        throw new Error(
          `No se pudo cargar el archivo (${response.status} ${response.statusText})`
        );
      }
      const text = await response.text();
      const allQuestions = parseMarkdown(text);

      if (allQuestions.length === 0) {
        throw new Error(
          "No se encontraron preguntas en el archivo. Verifica el formato del Markdown."
        );
      }

      cachedTopics = parseTopics(allQuestions);
    }

    loadingIndicator.classList.add("hidden");
    topicList.classList.remove("hidden");

    // "All Topics" button
    const allBtn = document.createElement("button");
    const totalCount = cachedTopics.reduce((s, t) => s + t.questions.length, 0);
    allBtn.innerText = `📚 Todos los Temas (${totalCount})`;
    allBtn.classList.add("topic-btn");
    allBtn.addEventListener("click", () => handleTopicSelect(-1));
    topicList.appendChild(allBtn);

    // Individual topic buttons
    cachedTopics.forEach((topic, index) => {
      const btn = document.createElement("button");
      btn.innerText = `${topic.name} (${topic.questions.length})`;
      btn.classList.add("topic-btn");
      btn.addEventListener("click", () => handleTopicSelect(index));
      topicList.appendChild(btn);
    });
  } catch (err) {
    console.error("Error loading quiz file:", err);
    loadingIndicator.classList.add("hidden");
    topicList.classList.remove("hidden");
    errorContainer.classList.remove("hidden");
    errorMessage.innerText = `Error al cargar las preguntas: ${err.message}`;
  }
}

function handleTopicSelect(index) {
  selectedTopicIndex = index;

  if (index === -1) {
    // All topics
    questions = cachedTopics.flatMap((t) => t.questions.map((q) => ({ ...q })));
  } else {
    questions = cachedTopics[index].questions.map((q) => ({ ...q }));
  }

  originalQuestions = [...questions];
  startGame();
}

// ============================================================
// GAME LOGIC
// ============================================================

function startGame() {
  currentQuestionIndex = 0;
  score = 0;

  // Restore original order then shuffle
  questions.splice(0, questions.length, ...originalQuestions);

  // Fisher-Yates shuffle
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  showScreen(questionScreen);
  loadQuestion();
}

function resetGame() {
  currentQuestionIndex = 0;
  score = 0;
  questions = [];
  originalQuestions = [];
  showScreen(startScreen);
}

function loadQuestion() {
  canClick = true;
  feedbackContainer.classList.add("hidden");

  const currentQuestion = questions[currentQuestionIndex];

  questionCounter.innerText = `Pregunta ${currentQuestionIndex + 1}/${questions.length}`;
  scoreDisplay.innerText = `Puntuación: ${score}`;
  questionText.innerHTML = formatQuestionHTML(currentQuestion.question);

  optionsGrid.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => handleOptionClick(button, index));
    optionsGrid.appendChild(button);
  });
}

function handleOptionClick(selectedBtn, selectedIndex) {
  if (!canClick) return;
  canClick = false;

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedIndex === currentQuestion.correct;

  const allOptions = document.querySelectorAll(".option-btn");

  if (isCorrect) {
    score++;
    selectedBtn.classList.add("correct");
    explanationText.innerHTML =
      "<strong>¡Correcto!</strong> " + (currentQuestion.explanation || "");
  } else {
    selectedBtn.classList.add("wrong");
    allOptions[currentQuestion.correct].classList.add("correct");
    explanationText.innerHTML =
      "<strong>Incorrecto.</strong> " + (currentQuestion.explanation || "");
  }

  scoreDisplay.innerText = `Puntuación: ${score}`;

  // Fade out other options
  allOptions.forEach((btn, index) => {
    btn.disabled = true;
    if (index !== selectedIndex && index !== currentQuestion.correct) {
      btn.classList.add("fade");
    }
    btn.style.boxShadow = "none";
    btn.style.transform = btn.classList.contains("correct")
      ? "scale(1.05)"
      : "translateY(6px)";
  });

  // Show feedback
  feedbackContainer.classList.remove("hidden");
}

function handleNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  showScreen(resultScreen);

  let resultMessage = `¡Has acertado ${score} de ${questions.length}!\n`;

  if (score === questions.length) {
    feedbackIcon.innerText = "🏆";
    resultMessage += "¡Puntuación Perfecta!";
  } else if (score >= questions.length / 2) {
    feedbackIcon.innerText = "👍";
    resultMessage += "¡Buen Trabajo!";
  } else {
    feedbackIcon.innerText = "📚";
    resultMessage += "¡Sigue Aprendiendo!";
  }

  finalScore.innerText = resultMessage;
}

// ============================================================
// BACK BUTTONS LOGIC
// ============================================================
function goBackToStart() {
  showScreen(startScreen);
}

function goBackToTopics() {
  if (currentQuestionIndex > 0 && currentQuestionIndex < questions.length - 1) {
    if (!confirm("¿Seguro que quieres salir? Perderás tu progreso actual.")) {
      return;
    }
  }
  showTopicSelection();
}

// ============================================================
// EVENT LISTENERS
// ============================================================
startBtn.addEventListener("click", showTopicSelection);
restartBtn.addEventListener("click", resetGame);
backToStartBtn.addEventListener("click", goBackToStart);
backToTopicsBtn.addEventListener("click", goBackToTopics);
nextBtn.addEventListener("click", handleNextQuestion);
retryBtn.addEventListener("click", () => {
  cachedTopics = null;
  showTopicSelection();
});
