console.log("Hello");
var questionDiv = document.querySelector(".question-display");
var optionsDiv = document.querySelector(".answer-choices");
var confirmBtn = document.querySelector(".confirm-btn");
var nextBtn = document.querySelector(".next-btn");
var Quiz = /** @class */ (function () {
    function Quiz(questions) {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questions = questions;
    }
    Quiz.prototype.evaluateAnswer = function (choice) {
        if (choice.toLowerCase() ===
            this.questions[this.currentQuestionIndex].correctAnswer.toLowerCase())
            return true;
        return false;
    };
    Object.defineProperty(Quiz.prototype, "Score", {
        get: function () {
            return this.score;
        },
        enumerable: false,
        configurable: true
    });
    return Quiz;
}());
var quizQuestions = [
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
function renderQuestion(question) {
    if (questionDiv) {
        questionDiv.textContent = question.question;
        for (var _i = 0, _a = question.choices; _i < _a.length; _i++) {
            var choice = _a[_i];
            var optionSpan = document.createElement("span");
            optionSpan.classList.add("option");
            optionSpan.innerHTML = "<input type=\"radio\" name=\"quiz_question\" value=\"".concat(choice, "\" />\n          <label>").concat(choice, "</label><br\n        />");
            optionsDiv === null || optionsDiv === void 0 ? void 0 : optionsDiv.appendChild(optionSpan);
        }
    }
}
function getSelectedAnswer() {
    var options = document.getElementsByName("quiz_question");
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked)
            return options[i].value;
    }
    return "";
}
confirmBtn === null || confirmBtn === void 0 ? void 0 : confirmBtn.addEventListener("click", function () {
    var choice = getSelectedAnswer();
    console.log(choice);
});
renderQuestion(quizQuestions[0]);
