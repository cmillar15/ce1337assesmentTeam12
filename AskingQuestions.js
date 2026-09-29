let questionIndex = 0;
let difficultyIndex = 0;
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

function AskQuestion(){

let currentObj = questions[difficultyIndex][questionIndex]

questionIndex++;
console.log(currentObj.question + "\n" +
    "A) "+ currentObj.options[0] + "\n" +
    "B) "+ currentObj.options[1] + "\n" +
    "C) "+ currentObj.options[2] + "\n" +
    "D) "+ currentObj.options[3] + "\n")

if (questionIndex >= questions[difficultyIndex].length) {
    difficultyIndex++;
    questionIndex = 0;

}


}

AskQuestion()

