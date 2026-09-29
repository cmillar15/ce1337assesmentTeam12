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
    {question: "What colour is grass?",options:["Green","blue","red","purple"],answer:"A"},
    {question: "What colour is the sky?",options:["Green","blue","red","purple"],answer:"B"},
    {question: "What colour is Mars?",options:["Green","blue","red","purple"],answer:"C"},
    {question: "What colour is royal?",options:["Green","blue","red","purple"],answer:"D"}
], //medium
[
    {question: "What colour is grass?",options:["Green","blue","red","purple"],answer:"A"},
    {question: "What colour is the sky?",options:["Green","blue","red","purple"],answer:"B"},
    {question: "What colour is Mars?",options:["Green","blue","red","purple"],answer:"C"},
    {question: "What colour is royal?",options:["Green","blue","red","purple"],answer:"D"}
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