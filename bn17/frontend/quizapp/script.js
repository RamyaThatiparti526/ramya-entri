const quizData = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },
  // Add more questions as needed
];

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(questionData) {
  questionContainer.innerHTML = `<p>${questionData.question}</p>`;
  answerButtons.innerHTML = "";
  questionData.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("answer-button");
    button.innerText = answer.text;
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function selectAnswer(answer) {
  // You can add your logic here to handle the selected answer
  // For simplicity, let's just check if it's correct and show the next question
  if (answer.correct) {
    // Handle correct answer logic
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion(quizData[currentQuestionIndex]);
  } else {
    // Quiz completed, you can add your completion logic here
    alert("Quiz completed!");
  }
}

nextButton.addEventListener("click", nextQuestion);

// Start the quiz when the page loads
startQuiz();
