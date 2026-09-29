let questionIndex = 0; // set the current position of the questions to the first question
let difficultyIndex = 0; // set the current position of the array to the first array

// example array 
const questions = [
 [
    {question: "What colour is grass?",options:["Green","blue","red","purple"],answer:"A"},
    {question: "What colour is the sky?",options:["Green","blue","red","purple"],answer:"B"},
    {question: "What colour is Mars?",options:["Green","blue","red","purple"],answer:"C"},
    {question: "What colour is royal?",options:["Green","blue","red","purple"],answer:"D"}
], //easy
[
    {question: "What material does not rust?",options:["gold","silver","bronze","copper"],answer:"A"},
    {question: "What material kills warewovles?",options:["gold","silver","bronze","copper"],answer:"B"},
    {question: "What material has an age in history?",options:["gold","silver","bronze","copper"],answer:"C"},
    {question: "What material has the atomic symbol Cu",options:["gold","silver","bronze","copper"],answer:"D"}
], //medium
[
    {question: "What is 5+5?",options:["ten","eight","one","zero"],answer:"A"},
    {question: "What is 4+4?",options:["ten","eight","one","zero"],answer:"B"},
    {question: "What is 11-10?",options:["ten","eight","one","zero"],answer:"C"},
    {question: "What is 9 x 0?",options:["ten","eight","one","zero"],answer:"D"}
] //hard

]
// define the function
function AskQuestion(){
//define the current object
let currentObj = questions[difficultyIndex][questionIndex];
// set questionIndex to the next question for next function loop cycle
questionIndex++;
//display the question and its respectfull options
console.log(currentObj.question + "\n" +
    "A) "+ currentObj.options[0] + "\n" +
    "B) "+ currentObj.options[1] + "\n" +
    "C) "+ currentObj.options[2] + "\n" +
    "D) "+ currentObj.options[3] + "\n");

//check if cycle loop should move onto the next difficulty array
if (questionIndex >= questions[difficultyIndex].length) {
    difficultyIndex++;
    // if so , set question position back to the first question in the next array
    questionIndex = 0;

} 


}
// call function
AskQuestion();

console.log(questionIndex)
console.log(difficultyIndex)