// initilize function
function FiftyFifty(){
//Set the options into their respectful numbers
const optionsToIndex = {1: questions[questionIndex][difficultyIndex].options[0],
     2: questions[questionIndex][difficultyIndex].options[1],
     3: questions[questionIndex][difficultyIndex].options[2],
     4: questions[questionIndex][difficultyIndex].options[3]}
//turn the answer into a variable from the question
let correctIndex = questions[questionIndex][difficultyIndex].answer
//create an array to be filled with wrong options
let incorrectIndex = []
// fill IncorrectIndex with the wrong options via loop
for (let i;i<4;i++){
    if( i !== correctIndex){
        //add incorrect options to array
        incorrectIndex.push(i)
    }
}
//generate a random number between 1 and 3
let randomNumber = Math.floor(Math.random() * incorrectIndex.length)
//keep one of the incorrect options for the 50/50
let indexKeep = incorrectIndex[randomNumber]

//loop through the remaining questions and replace them with text leaving only 2
for( let i =0;i<4;i++){
    if (i !== correctIndex && i !== indexKeep) {
        questions[questionIndex][difficultyIndex].options[i] = "=REMOVED="
    }
}
console.log("Question "+ questionIndex + 1 + ": " + currentObj.question + "\n" +
    "A) "+ currentObj.options[0] + "\n" +
    "B) "+ currentObj.options[1] + "\n" +
    "C) "+ currentObj.options[2] + "\n" +
    "D) "+ currentObj.options[3] + "\n");

}



