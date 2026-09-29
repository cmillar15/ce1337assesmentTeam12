let questionIndex = 0;
let difficutlyIndex = 0;


function AskQuestion(questions){

let currentQuestion = questions[currentDifficulty][difficutlyIndex].question
let currentPrompts = questions[currentDifficulty][difficutlyIndex].options
questionIndex++;

if (questionIndex >= difficutlyIndex.lenght) {
    difficutlyIndex++;
    questionIndex = 0;
}

}