let endQuestion = document.querySelector(".endquestion");
let containersensory = document.querySelector(".containersensory");
let countReady = document.querySelector(".count");
let TrainIndex = 0;
let congradulationSensory = document.querySelector(".congradulationSensory");

// array in it Questions
let levels = [
  {
    levelNum: " Level 1",

    img: "image/Games/sensory game/1.jpg",
    questions: [
      {
        title: "What is the function of this organ?",
        answers: [
          { text: "Touch " },
          { text: "smell  ", isCorrect: true },
          { text: "look" },
        ],
        labelName: "q1",
      },
    ],
  },

  {
    levelNum: " Level 2",

    img: "image/Games/sensory game/2.jpg",
    questions: [
      {
        title: "What is the function of this organ?",
        answers: [
          { text: "Touch " },
          { text: "smell  " },
          { text: "look", isCorrect: true },
        ],
        labelName: "q4",
      },
    ],
  },
  {
    levelNum: " Level 3",

    img: "image/Games/sensory game/3.jpg",
    questions: [
      {
        title: "What is the function of this organ?",
        answers: [
          { text: "smell  " },
          { text: "look" },
          { text: "Touch ", isCorrect: true },
        ],
        labelName: "q4",
      },
    ],
  },
];

// Function Dispaly Game
function createQuestionContainer(level, levelIndex) {
  // Span which contains Count Down Image
  let countDownImageNum = document.createElement("span");
  countDownImageNum.innerHTML = "";

  // Container Which Contains The Firt MSG before Start
  containersensory.innerHTML = `
    <div class="level-start">
      <h2>${level.levelNum}</h2>
      <p>
        Get ready. An image will appear for a specific time and then disappear. You must focus to solve the questions.
      </p>
      <span>Are You Ready</span>
      <span class="readyCount"></span>
    </div>`;

  // Functions To display Time before Start
  let counterInterval;
  let readyCountElement = document.querySelector(".readyCount");

  const countDownLevel = (duration) => {
    let remainingTime = duration;

    if (remainingTime >= 0) {
      counterInterval = setInterval(() => {
        const seconds = remainingTime % 60;

        remainingTime--;
        readyCountElement.innerHTML = `${seconds}`;

        if (remainingTime < 0) {
          clearInterval(counterInterval);
          showContent();
        }
      }, 1000);
    }
  };

  countDownLevel(5);

  // All The Content in setTime Out show after First MSG
  function showContent() {
    // Functions To display Time before hiden Img

    const countDownImages = (duration) => {
      let remainingTime = duration;

      if (remainingTime >= 0) {
        counterInterval = setInterval(() => {
          const seconds = remainingTime % 60;

          countDownImageNum.innerHTML = `${seconds}`;
          remainingTime--;

          if (remainingTime < 0) {
            clearInterval(counterInterval);

            // Additional logic can be added here when the countdown level reaches zero
          }
        }, 1000);
      }
    };

    countDownImages(10);

    // Container which contains All Questions
    containersensory.innerHTML = "";
    let levelContainer = document.createElement("div");
    levelContainer.classList.add("containerGame");
    // Title Level
    let levelName = document.createElement("h3");
    let levelNameTitle = document.createTextNode(level.levelNum);
    levelName.appendChild(levelNameTitle);
    levelContainer.appendChild(levelName);
    // Imge
    let imageGameDiv = document.createElement("div");
    imageGameDiv.classList.add("image-game");
    let image = document.createElement("img");
    image.src = level.img;
    image.alt = "";

    imageGameDiv.appendChild(countDownImageNum);
    imageGameDiv.appendChild(image);
    levelContainer.appendChild(imageGameDiv);

    let questionsDiv = document.createElement("div");
    questionsDiv.classList.add("questions");

    // Function which Dispaly Img Hiden

    setTimeout(() => {
      imageGameDiv.style.display = "none";
      showQuiz();
    }, 12000);

    // Function That Dispaly Questions Take Obj
    function showQuiz(questionIndex = 0) {
      //Current Question
      let question = level.questions[questionIndex];
      //Time For Imag
      let timeLeft = 30;
      let timerStopped = false;

      // Container which contains Questions And Answers
      let questionContainer = document.createElement("div");
      questionContainer.classList.add("question");
      //Titel Question
      let questionTitle = document.createElement("h2");
      questionTitle.textContent = question.title;
      questionContainer.appendChild(questionTitle);
      // Answers
      let answerAreaDiv = document.createElement("div");
      answerAreaDiv.classList.add("answer-area");
      // Counter
      let countdownDisplay = document.createElement("div");
      countdownDisplay.classList.add("countdown");
      countdownDisplay.textContent = `Time left: ${timeLeft} seconds`;
      questionContainer.appendChild(countdownDisplay);
      // Function Count Down Time Img
      let countdownInterval = setInterval(() => {
        if (!timerStopped) {
          timeLeft--;
          countdownDisplay.textContent = `Time left: ${timeLeft} seconds`;

          if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            timerStopped = true;
            answerAreaDiv.innerHTML = "";
            displayTimeoutMessage();
          }
        }
      }, 1000);

      //Loop INn aswer To cheak it true or False
      question.answers.forEach((answer, index) => {
        let answerDiv = document.createElement("div");
        answerDiv.classList.add("answer");
        // Input
        let inputRadio = document.createElement("input");
        inputRadio.setAttribute("type", "radio");
        inputRadio.setAttribute(
          "name",
          `level${levelIndex + 1}_question_${questionIndex}`
        );
        inputRadio.setAttribute(
          "id",
          `level${levelIndex + 1}_${question.labelName}_answer_${index}`
        );
        inputRadio.value = answer.text;
        // Label
        let label = document.createElement("label");
        label.setAttribute(
          "for",
          `level${levelIndex + 1}_${question.labelName}_answer_${index}`
        );
        label.textContent = answer.text;

        // Cheak Input
        inputRadio.addEventListener("change", function () {
          if (this.checked) {
            this.disabled = true;

            // Hide all input elements and labels when the correct answer is selected
            if (answer.isCorrect) {
              clearInterval(countdownInterval);
              const allInputsAndLabels = document.querySelectorAll(
                `input[name='level${
                  levelIndex + 1
                }_question_${questionIndex}'], label[for^='level${
                  levelIndex + 1
                }_${question.labelName}_answer_']`
              );
              allInputsAndLabels.forEach(
                (element) => (element.style.display = "none")
              );
            }

            question.answers.forEach((ans) => {
              const ansLabel = document.querySelector(
                `label[for='level${levelIndex + 1}_${
                  question.labelName
                }_answer_${question.answers.indexOf(ans)}']`
              );
              ansLabel.style.color = "";
            });

            const oldMessage = answerAreaDiv.querySelector("span");
            if (oldMessage) {
              oldMessage.remove();
            }
            // Condation
            if (!answer.isCorrect) {
              //if no Correct
              label.style.color = "red";
              let errorAnswerMessage = document.createElement("span");
              errorAnswerMessage.classList.add("errorAnswerMessage");
              errorAnswerMessage.textContent = "wrong answer Try Agin !";
              errorAnswerMessage.style.color = "red";
              answerAreaDiv.appendChild(errorAnswerMessage);
              clearInterval(countdownInterval);

              setTimeout(() => {
                errorAnswerMessage.remove();
                answerAreaDiv.innerHTML = "";
                imageGameDiv.style.display = "block";
                countDownImages(5);
              }, 1000);

              setTimeout(() => {
                imageGameDiv.style.display = "none";
                // Reset the timer and display the next question
                timerStopped = false;
                timeLeft = 30;
                countdownDisplay.textContent = `Time left: ${timeLeft} seconds`;
                showQuiz(questionIndex);
                questionContainer.remove();
              }, 8000);
            } else {
              //if no Correct

              label.style.color = "green";
              let goodAnswerMessage = document.createElement("span");
              goodAnswerMessage.classList.add("goodAnswerMessage");
              goodAnswerMessage.textContent =
                "you are very special Let`s Go To next!";
              goodAnswerMessage.style.color = "green";
              answerAreaDiv.appendChild(goodAnswerMessage);

              setTimeout(() => {
                goodAnswerMessage.remove();
                if (questionIndex < level.questions.length - 1) {
                  showQuiz(questionIndex + 1);
                  questionContainer.remove();
                } else {
                  setTimeout(() => {
                    TrainIndex++;
                    if (TrainIndex < levels.length) {
                      createQuestionContainer(levels[TrainIndex], TrainIndex);
                    } else {
                      console.log("All levels completed!");
                      containersensory.innerHTML = "";
                      congradulationSensory.classList.remove("d-none");
                    }
                  }, 1000);
                }
              }, 2000);
            }
          }
        });
        // Append Input And Label
        answerDiv.appendChild(inputRadio);
        answerDiv.appendChild(label);
        answerAreaDiv.appendChild(answerDiv);
      });

      // Try Agin
      function displayTimeoutMessage() {
        countdownDisplay.textContent = "Time's up! Try again.";

        let continueButton = document.createElement("button");
        continueButton.textContent = "Continue";
        continueButton.addEventListener("click", () => {
          clearInterval(countdownInterval);
          countDownImages(5);

          setTimeout(() => {
            imageGameDiv.style.display = "block";
          }, 1000);

          setTimeout(() => {
            imageGameDiv.style.display = "none";
          }, 6000);
          timerStopped = false;
          timeLeft = 30;
          countdownDisplay.textContent = `Time left: ${timeLeft} seconds`;
          continueButton.remove();
          questionContainer.remove(); // Remove the old question container
          showQuiz(questionIndex);
        });
        questionContainer.appendChild(continueButton);

        if (!timerStopped) {
          setTimeout(() => {
            imageGameDiv.style.display = "block";
          }, 1000);

          setTimeout(() => {
            imageGameDiv.style.display = "none";
            if (questionIndex < level.questions.length - 1) {
              showQuiz(questionIndex + 1);
            } else {
              setTimeout(() => {
                TrainIndex++;
                if (TrainIndex < levels.length) {
                  createQuestionContainer(levels[TrainIndex], TrainIndex);
                } else {
                  console.log("All levels completed!");
                  containersensory.remove();
                }
              }, 2000);
            }
          }, 5000);
        }
      }

      questionContainer.appendChild(answerAreaDiv);
      levelContainer.appendChild(questionContainer);
    }

    questionsDiv.appendChild(levelContainer);
    containersensory.appendChild(questionsDiv);
  }
}

createQuestionContainer(levels[TrainIndex], TrainIndex);
