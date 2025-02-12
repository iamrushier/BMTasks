console.log("Hello");
const questionDiv = document.querySelector(".question-display");
const optionsDiv = document.querySelector(".answer-choices");
const messageDiv = document.querySelector(".check-answer");
const scoreDiv = document.querySelector(".score");
const confirmBtn = document.querySelector(".confirm-btn");
const nextBtn = document.querySelector(".next-btn");
// console.log(questionDiv, optionsDiv);
interface IQuestion {
  question: string;
  choices: string[];
  correctAnswer: string;
}
class Quiz {
  questions: IQuestion[] = [];
  currentQuestionIndex: number = 0;
  private score: number = 0;
  constructor(questions: IQuestion[]) {
    this.questions = questions;
  }
  isAnswerCorrect(choice: string): boolean {
    if (
      choice.toLowerCase() ===
      this.questions[this.currentQuestionIndex].correctAnswer.toLowerCase()
    )
      return true;
    return false;
  }
  get Score(): number {
    return this.score;
  }
  incrementScore(): number {
    this.score += 10;
    return this.score;
  }
  getNextQuestion(): IQuestion {
    return this.questions[this.currentQuestionIndex];
  }
}

const quizQuestions: IQuestion[] = [
  {
    question: "How many legs does a spider have?",
    choices: ["6", "8", "10", "12"],
    correctAnswer: "8",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
];
const myQuiz = new Quiz(quizQuestions);

function renderQuestion(question: IQuestion): void {
  if (questionDiv && messageDiv && optionsDiv) {
    messageDiv.textContent = "Choose one option.";
    questionDiv.textContent = question.question;
    optionsDiv.innerHTML = "";
    for (const choice of question.choices) {
      const optionSpan = document.createElement("span");
      optionSpan.classList.add("option");
      optionSpan.innerHTML = `<input type="radio" name="quiz_question" value="${choice}" />
          <label>${choice}</label><br
        />`;
      optionsDiv?.appendChild(optionSpan);
    }
  }
}
function getSelectedAnswer(): string {
  const options = document.getElementsByName(
    "quiz_question"
  ) as NodeListOf<HTMLInputElement>;
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) return options[i].value;
  }
  return "";
}
confirmBtn?.addEventListener("click", () => {
  let choice: string = getSelectedAnswer();
  if (messageDiv) {
    if (
      myQuiz.questions[
        myQuiz.currentQuestionIndex
      ].correctAnswer.toLowerCase() === choice.toLowerCase()
    ) {
      messageDiv.textContent = "Correct answer!!";
      if (scoreDiv) scoreDiv.textContent = `Score: ${myQuiz.incrementScore()}`;
      myQuiz.currentQuestionIndex++;
    } else {
      messageDiv.textContent = "Wrong answer..";
    }
  }
  if (myQuiz.currentQuestionIndex < myQuiz.questions.length)
    setTimeout(() => {
      renderQuestion(myQuiz.getNextQuestion());
    }, 1500);
  else {
    if (questionDiv && optionsDiv) {
      optionsDiv.innerHTML = "";
      questionDiv.innerHTML = `<h2>Quiz Over</h2>\n<h2>Your score is ${myQuiz.Score}</h2>`;
    }
  }
  // console.log(choice);
});
renderQuestion(myQuiz.getNextQuestion());
