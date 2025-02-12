console.log("Hello");
var questionDiv = document.querySelector(".question-display");
var optionsDiv = document.querySelector(".answer-choices");
var messageDiv = document.querySelector(".check-answer");
var scoreDiv = document.querySelector(".score");
var confirmBtn = document.querySelector(".confirm-btn");
var Quiz = /** @class */ (function () {
    function Quiz(questions) {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questions = questions;
    }
    Quiz.prototype.isAnswerCorrect = function (choice) {
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
    Quiz.prototype.incrementScore = function () {
        this.score += 10;
        return this.score;
    };
    Quiz.prototype.getNextQuestion = function () {
        return this.questions[this.currentQuestionIndex];
    };
    return Quiz;
}());
var quizQuestions = [
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
var myQuiz = new Quiz(quizQuestions);
function renderQuestion(question) {
    messageDiv.textContent = "Choose one option.";
    messageDiv.style.color = "Black";
    questionDiv.textContent = question.question;
    optionsDiv.innerHTML = "";
    toggleButtonState();
    for (var _i = 0, _a = question.choices; _i < _a.length; _i++) {
        var choice = _a[_i];
        var optionSpan = document.createElement("span");
        optionSpan.classList.add("option");
        optionSpan.innerHTML = "<input type=\"radio\" name=\"quiz_question\" value=\"".concat(choice, "\" />\n          <label>").concat(choice, "</label><br\n        />");
        optionsDiv === null || optionsDiv === void 0 ? void 0 : optionsDiv.appendChild(optionSpan);
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
    if (myQuiz.questions[myQuiz.currentQuestionIndex].correctAnswer.toLowerCase() === choice.toLowerCase()) {
        messageDiv.style.color = "Green";
        messageDiv.textContent = "Correct answer!!";
        scoreDiv.textContent = "Score: ".concat(myQuiz.incrementScore());
        myQuiz.currentQuestionIndex++;
    }
    else {
        messageDiv.style.color = "Red";
        messageDiv.textContent = "Wrong answer..";
        myQuiz.currentQuestionIndex++;
    }
    if (myQuiz.currentQuestionIndex < myQuiz.questions.length) {
        document.getElementsByName("quiz_question").forEach(function (node) { return (node.disabled = true); });
        toggleButtonState();
        setTimeout(function () {
            renderQuestion(myQuiz.getNextQuestion());
        }, 1500);
    }
    else {
        toggleButtonState();
        optionsDiv.innerHTML = "";
        scoreDiv.textContent = "";
        questionDiv.innerHTML = "<h2>Quiz Over</h2>\n<h2>Your score is ".concat(myQuiz.Score, "/").concat(myQuiz.questions.length * 10, "</h2>");
    }
});
function toggleButtonState() {
    confirmBtn.disabled = !confirmBtn.disabled;
}
toggleButtonState();
renderQuestion(myQuiz.getNextQuestion());
