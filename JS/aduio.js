let game = [
    {
        audioSound: "image/Games/3dsrv943cc74ca161429bddaefcfcbd6128db.mp3",
        story: `There was a young boy named Ahmed who had trouble controlling his temper when he got angry.
        He would say anything that came to his mind that would hurt people.
        So his father gave him a bag of nails and a hammer and told him, “Every time you get angry, hammer one nail into the wall of our backyard.”
        
        In the first few days the boy hammered so many nails that he emptied half the bag.
        Over the weeks, the number of nails he drives has decreased
        On the wall daily, he became more in control of his nerves.
        Then there came a day when he didn't lose his temper at all.
        His father asked him to remove one nail every day so that he would not lose his temper.
        
        Finally, on the day the boy was removing the last nail, his father said to him, “You did well, boy.
        But do you see the holes in the wall? The fence will never be the same again, even after repainting.
        Likewise, when you say hurtful words in anger, they will leave a scar on the person’s mind, like nails did to a wall.”
        The Messenger of God, may God bless him and grant him peace, said: “The strong man is not the one who fights, but the strong man is the one who controls himself when angry.`,
        questions: [
            {
                title: "What was the boy's problem?",
                answers: [
                    { text: "Aggressiveness", value: "Aggressiveness" },
                    { text: "Anger", isCorrect: true, value: "Anger" },
                    { text: "Anarchism", value: "Anarchism" },
                ],
                labelName: "q1",
            },
            {
                title: "What is the boy's name?",
                answers: [
                    { text: "Ahmed", isCorrect: true, value: "Ahmed" },
                    { text: "Mohammed", value: "Mohammed" },
                    { text: "age", value: "age" },
                ],
                labelName: "q2",
            },
            {
                title: "What did the father give to his child?",
                answers: [
                    { text: "Hammer and wooden board", value: "Hammer and wooden board" },
                    { text: "Nails and saw", value: "Nails and saw" },
                    { text: "Nails and hammer", isCorrect: true, value: "Nails and hammer" },
                ],
                labelName: "q3",
            },
        ],
    },
];






let containerLevel1 = document.querySelector(".containerQuestions");
let countReady = document.querySelector(".count");
let TrainIndex = 0;
let congradulationAduio = document.querySelector(".congradulationAduio");
let imageGameDiv = document.createElement("div"); // Add this line
// Function to Display Game
function createQuestionContainer(level, levelIndex) {
    // Span which contains Countdown Image
    let countDownAudioNum = document.createElement("span");
    countDownAudioNum.classList.add("specials")
    countDownAudioNum.innerHTML = "";

    // Container Which Contains The First Message before Start
    containerLevel1.innerHTML = `
      <div class="level-start">
        <p>
        get ready. The audio clip will appear for a specific period of time and then disappear. You should focus on solving the questions.
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

    // All The Content in setTime Out show after the First MSG
    function showContent() {


        let storeElement = document.createElement("p")
        let storeText = document.createTextNode(game[0].story)
        storeElement.appendChild(storeText)

        // Create a div for audio
        let audioDiv = document.createElement("div");
        audioDiv.classList.add("audio-container");

        // Create an audio element
        let audioElement = document.createElement("audio");
        audioElement.src = game[0].audioSound;
        audioElement.controls = true;

        // Append audio element to audio div
        audioDiv.appendChild(audioElement);
        audioDiv.appendChild(storeElement)


        audioElement.addEventListener("loadedmetadata", function () {
            // Get the duration of the audio file
            let duration = audioElement.duration;
            console.log("Audio duration:", duration, "seconds");
            timeAudio = duration
        });

        // Load audio metadata
        audioElement.load();

        // Functions To display Time before hidden Img

        const countDownImages = (duration) => {
            let remainingTime = duration + 5;

            if (remainingTime >= 0) {
                counterInterval = setInterval(() => {
                    // Calculate minutes and seconds
                    let minutes = Math.floor(remainingTime / 60);
                    let seconds = Math.floor(remainingTime % 60);

                    // Format minutes and seconds with leading zeros if necessary
                    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
                    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

                    // Display remaining time
                    countDownAudioNum.innerHTML = `${formattedMinutes}:${formattedSeconds}`;

                    remainingTime--;

                    if (remainingTime < 0) {
                        clearInterval(counterInterval);
                        imageGameDiv.style.display = "none";
                        showQuiz();

                        // Additional logic can be added here when the countdown level reaches zero
                    }
                }, 1000);
            }
        };

        countDownImages(71)



        // Container which contains All Questions
        containerLevel1.innerHTML = "";
        let levelContainer = document.createElement("div");
        levelContainer.classList.add("containerGame");



        imageGameDiv.appendChild(countDownAudioNum);
        imageGameDiv.appendChild(audioDiv);
        levelContainer.appendChild(imageGameDiv);

        let questionsDiv = document.createElement("div");
        questionsDiv.classList.add("questions");




        // Function That Displays Questions Taking Object
        function showQuiz(questionIndex = 0) {
            // Current Question
            let question = level.questions[questionIndex];
            // Time For Img
            let timeLeft = 30;
            let timerStopped = false;

            // Container which contains Questions And Answers
            let questionContainer = document.createElement("div");
            questionContainer.classList.add("question");
            // Title Question
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

            // Loop In Answer To Check if it's true or False
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

                // Check Input
                inputRadio.addEventListener("change", function () {
                    if (this.checked) {
                        this.disabled = true;

                        // Hide all input elements and labels when the correct answer is selected
                        if (answer.isCorrect) {
                            clearInterval(countdownInterval);
                            const allInputsAndLabels = document.querySelectorAll(
                                `input[name='level${levelIndex + 1
                                }_question_${questionIndex}'], label[for^='level${levelIndex + 1
                                }_${question.labelName}_answer_']`
                            );
                            allInputsAndLabels.forEach(
                                (element) => (element.style.display = "none")
                            );
                        }

                        question.answers.forEach((ans) => {
                            const ansLabel = document.querySelector(
                                `label[for='level${levelIndex + 1}_${question.labelName
                                }_answer_${question.answers.indexOf(ans)}']`
                            );
                            ansLabel.style.color = "";
                        });

                        const oldMessage = answerAreaDiv.querySelector("span");
                        if (oldMessage) {
                            oldMessage.remove();
                        }
                        // Condition
                        if (!answer.isCorrect) {
                            // If not correct
                            label.style.color = "red";
                            let errorAnswerMessage = document.createElement("span");
                            errorAnswerMessage.classList.add("errorAnswerMessage");
                            errorAnswerMessage.textContent = "Wrong answer! Try Again!";
                            errorAnswerMessage.style.color = "red";
                            answerAreaDiv.appendChild(errorAnswerMessage);
                            clearInterval(countdownInterval);




                            let againTime = 80
                            setTimeout(() => {
                                errorAnswerMessage.remove();
                                answerAreaDiv.innerHTML = "";
                                imageGameDiv.style.display = "block";

                                let countdownIntervals = setInterval(() => {
                                    if (!timerStopped) {
                                        againTime--;
                                        document.querySelector(".specials").innerHTML = ` ${againTime} `;

                                        if (againTime <= 0) {
                                            clearInterval(countdownIntervals);
                                            timerStopped = true;
                                            answerAreaDiv.innerHTML = "";
                                            displayTimeoutMessage();
                                        }
                                    }
                                }, 1000);


                            }, 1000);





                            // Get the duration of the audio file
                            let duration = audioElement.duration;
                            console.log("Audio duration:", duration, "seconds");


                            setTimeout(() => {

                                imageGameDiv.style.display = "none";
                                // Reset the timer and display the next question
                                timerStopped = false;
                                timeLeft = 30;
                                countdownDisplay.textContent = `Time left: ${timeLeft} seconds`;
                                showQuiz(questionIndex);
                                questionContainer.remove();
                            }, 90000)


                        } else {
                            // If correct
                            label.style.color = "green";
                            let goodAnswerMessage = document.createElement("span");
                            goodAnswerMessage.classList.add("goodAnswerMessage");
                            goodAnswerMessage.textContent = "You are very special! Let's Go To the next one!";
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
                                        if (TrainIndex < game.length) {
                                            createQuestionContainer(game[TrainIndex], TrainIndex);
                                        } else {
                                            console.log("All game completed!");
                                            containerLevel1.innerHTML = "";
                                            congradulationAduio.classList.remove("d-none");
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

            // Try Again
            function displayTimeoutMessage() {
                countdownDisplay.textContent = "Time's up! Try again.";

                let continueButton = document.createElement("button");
                continueButton.textContent = "Continue";
                continueButton.addEventListener("click", () => {
                    // Reset the timer and display the next question
                    clearInterval(countdownInterval);

                    setTimeout(() => {
                        answerAreaDiv.innerHTML = "";
                        imageGameDiv.style.display = "block";
                        // countDownImages(71);
                    }, 1000);

                    // Get the duration of the audio file
                    let duration = audioElement.duration;
                    console.log("Audio duration:", duration, "seconds");


                    setTimeout(() => {

                        imageGameDiv.style.display = "none";
                        timerStopped = false;
                        timeLeft = 30;
                        countdownDisplay.textContent = `Time left: ${timeLeft} seconds`;
                        showQuiz(questionIndex);
                        questionContainer.remove();
                    }, 90000)

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
                                if (TrainIndex < game.length) {
                                    createQuestionContainer(game[TrainIndex], TrainIndex);
                                } else {
                                    console.log("All game completed!");
                                    containerLevel1.remove();
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
        containerLevel1.appendChild(questionsDiv);
    }
}

createQuestionContainer(game[TrainIndex], TrainIndex);
