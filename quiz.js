// Your dynamic quiz data as a JavaScript object

console.log("hi")
const quizData = [
    {
        question: "What color do you like?",
        options: ["Red", "Blue", "Green", "Yellow"]
    },
    {
        question: "Which animal do you prefer?",
        options: ["Dog", "Cat", "Elephant", "Dolphin"]
    },
    {
        question: "What is your favorite food?",
        options: ["Pizza", "Sushi", "Burger", "Pasta"]
    }
    // Add more questions here if needed
];

let currentQuestion = 0;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextButton");

const userResponses = [];

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";

    question.options.forEach((option, index) => {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `question${currentQuestion}`;
        input.value = option;
        optionsElement.appendChild(input);

        const label = document.createElement("label");
        label.textContent = option;
        optionsElement.appendChild(label);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector(
        `input[name="question${currentQuestion}"]:checked`
    );

    if (selectedOption) {
        const userAnswer = selectedOption.value;
        userResponses.push(userAnswer);
    } else {
        userResponses.push(null); // Mark the response as null if no option was selected
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionElement.textContent = "Quiz finished!";
        optionsElement.innerHTML = "";
        nextButton.style.display = "none";

        // Display user responses
        console.log("User Responses:", userResponses);
    }
}

nextButton.addEventListener("click", checkAnswer);

// Load the first question when the page loads
loadQuestion();

console.log(userResponses)