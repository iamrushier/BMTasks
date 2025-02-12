console.log("Hello");
const questionDiv = document.querySelector(".question-display");
const optionsDiv = document.querySelector(".answer-choices");
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
  private currentQuestionIndex: number = 0;
  private score: number = 0;
  constructor(questions: IQuestion[]) {
    this.questions = questions;
  }
  evaluateAnswer(choice: string): boolean {
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
}

const quizQuestions: IQuestion[] = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
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
];

function renderQuestion(question: IQuestion): void {
  if (questionDiv) {
    questionDiv.textContent = question.question;
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
  console.log(choice);
});
renderQuestion(quizQuestions[0]);
