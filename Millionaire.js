const prompt = require("readline-sync");



function Nameandstart(){

console.log("Welcome to Who Wants to be a Millionaire Team 12 edition. Im Jeremy Clarkson and Ill be your host for the game.")

let name = prompt.question("To begin, what is your name: ")

prompt.question("Tell us a bit about yourself: ")
console.log("Thats sounds lovely " + name + ", Im your host Jeremy CLarkson and we will now begin the quiz.")

return name;
}

Nameandstart()
module.exports = {Nameandstart}
const questions = [
    [
{question:"What is the main ingredient in guacamole?",options:["A- Aniseed", "B- Apricot", "C- Avocado", "D- Apple"], answer:"C"},
{question:"What is the Chemical symbol for Potassium?",options:["A- J", "B- K", "C- L", "D- P"], answer:"B"},
{question:"Who invented the telephone?",options:["A- Alexander Graham Bell", "B- Ghengis Khan", "C- Andrei Teleph", "D- Howard Hughes"], answer:"A"},
{question:"Which of these is not a primary colour?", options:["A- Red", "B- Blue", "C-Green", "D- Yellow"], answer:"C"},
{question:"What is the largest bone in the human body?", options:["A- Tibia", "B- Femur", "C- Humerus", "D- Sternum"], answer:"B"}],
//EASY
[
{question:"How many sitting US presidents have been assassinated?",options:["A- 1", "B- 2", "C- 3", "D- 4"], answer:"D"},
{question:"Who created the comic book character Spawn?",options:["A- Stan Lee", "B- Joe Shuster", "C- Todd MacFarlane", "D- Bob Kane"], answer:"C"},
{question:"A group of crows is called a what?",options:["A- Coven", "B- Court", "C- Murder", "D- Cackle"], answer:"C"},
{question:"What year did Yuri Gagarin become the first human in space?", options:["A- 1959", "B- 1961", "C-1963", "D- 1965"], answer:"B"},
{question:"In the movie Citizen Kane, what is Rosebud?", options:["A- A mistress", "B- A pet", "C- A sledge", "D- A flower"], answer:"C"}],

//MEDIUM
[
{question:"What was developed at Bletchley Park?",options:["A- Enigma Machine", "B- Windows 95", "C- DARPANET", "D- ChatGPT"], answer:"A"},
{question:"Which of these is not another name for Gandalf?",options:["A- Olorin", "B- Melkor", "C- Tharkun", "D- Mithrandir"], answer:"B"},
{question:"Who won the first World Cup final in 1930?",options:["A- Argentina", "B- Brazil", "C- France", "D- Uruguay"], answer:"D"},
{question:"What is the tallest mountain on Earth, if measured from base to peak?", options:["A- K2", "B- Mauna Kea", "C-Kilimanjaro", "D- Everest"], answer:"B"},
{question:"How many rings does the planet Saturn have?", options:["A- 7", "B- 8", "C- 9", "D- 10"], answer:"A"}]
];
//HARD  


let questionIndex = 0;
let difficultyIndex = 0;
let answer = "";
let score = 0;

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
return currentObj;

}
for(let i=0; i<questions.length; i++){
for(let j=0; j<questions[i].length; j++){
    let currentObj = AskQuestion();
    answer = prompt.question("Enter your answer: ");


 
    if(answer === currentObj.answer)
    {
        score += 1;
    } else{
        score += 0;
    }
console.log(score);
}
}