const prompt = require("readline-sync");
let halvesAvailable = true;
let safetyNetAvailable = true;
let skipsAvailable = true;
let correctAnswer = false;
let lifelineChoice = "";
let name = "";
let questionIndex = 0;
let difficultyIndex = 0;
let score = 0;
let currentMoney = 0;
let moneyWon = 0;
let checkpoint = "£0";
const moneyAmmounts = ["£0", "£100", "£200", "£300", "£500", "£1,000", "£2,000", "£4,000", "£8,000", "£16,000", "£32,000", "£64,000", "£125,000", "£250,000", "£500,000", "£1 Million"];


const questions = [
    [
{question:"What is the main ingredient in guacamole?",options:["Aniseed", "Apricot", "Avocado", "Apple"], answer:"C"},
{question:"What is the Chemical symbol for Potassium?",options:["J", "K", "L", "P"], answer:"B"},
{question:"Who invented the telephone?",options:["Alexander Graham Bell", "Ghengis Khan", "Andrei Teleph", "Howard Hughes"], answer:"A"},
{question:"Which of these is not a primary colour?", options:["Red", "Blue", "Green", "Yellow"], answer:"C"},
{question:"What is the largest bone in the human body?", options:["Tibia", "Femur", "Humerus", "Sternum"], answer:"B"}],
//EASY
[
{question:"How many sitting US presidents have been assassinated?",options:["1", "2", "3", "4"], answer:"D"},
{question:"Who created the comic book character Spawn?",options:["Stan Lee", "Joe Shuster", "Todd MacFarlane", "Bob Kane"], answer:"C"},
{question:"A group of crows is called a what?",options:["Coven", "Court", "Murder", "Cackle"], answer:"C"},
{question:"What year did Yuri Gagarin become the first human in space?", options:["1959", "1961", "1963", "1965"], answer:"B"},
{question:"In the movie Citizen Kane, what is Rosebud?", options:["A mistress", "A pet", "A sledge", "A flower"], answer:"C"}],
//MEDIUM
[
{question:"What was developed at Bletchley Park?",options:["Enigma Machine", "Windows 95", "DARPANET", "ChatGPT"], answer:"A"},
{question:"Which of these is not another name for Gandalf?",options:["Olorin", "Melkor", "Tharkun", "Mithrandir"], answer:"B"},
{question:"Who won the first World Cup final in 1930?",options:["Argentina", "Brazil", "France", "Uruguay"], answer:"D"},
{question:"What is the tallest mountain on Earth, if measured from base to peak?", options:["K2", "Mauna Kea", "Kilimanjaro", "Everest"], answer:"B"},
{question:"How many rings does the planet Saturn have?", options:["7", "8", "9", "10"], answer:"A"}]
    ];
//HARD  





//==========MAIN LOOP =============








Nameandstart()
for(let i = 0; i < 15 ; i++){
    AskQuestion();
    let answer = prompt.question("Enter your answer: ").toUpperCase();
    let correctAnswer = questions[difficultyIndex][questionIndex].answer;
    if (answer === "L"){
        lifelineChoice = prompt.question("What lifeline would you like to use: \nA: 50/50 \nB: Walk Away \nC: Skip \n").toUpperCase();
        lifelinesUpdate(lifelineChoice);
        i--;
        continue; // restarts the question
    }

        else if (answer === "H"){
            console.log("\nHelp Screen\nL: Lifelines = Choose from 50/50, skip and Walk Away.\n Walk Away = Leave with current winnnings and end the quiz.\n")
 
    } else if(answer === correctAnswer){
        
        setScore();
        console.log(score);
        questionIndex++;

        //check if cycle loop should move onto the next difficulty array
    if (questionIndex >= questions[difficultyIndex].length) {
    difficultyIndex++;
    console.log("Questions Increase Difficulty")
    // if so , set question position back to the first question in the next array
    questionIndex = 0;


        } 
    } else if ( answer !== correctAnswer){
        correctAnswer = false;
        endGame();
        
        break;
    }
}
    








//==================FUNCTIONS========================









// initilize function
function FiftyFifty(){
    if (halvesAvailable === true){
    let currentObj = questions[difficultyIndex][questionIndex];
//Set the options into their respectful numbers
//turn the answer into a variable from the question

const optionsToIndex = 
{
"A": 0,
"B": 1,
"C": 2,
"D": 3
};
let correctLetter = currentObj.answer
let correctIndex = optionsToIndex[correctLetter]

//create an array to be filled with wrong options
let incorrectIndex = []
// fill IncorrectIndex with the wrong options via loop
for (let i =0;i<4;i++){
    if( i !== correctIndex){
        //add incorrect options to array
        incorrectIndex.push(i)
    }
}

//generate a random number between 1 and 3
let randomNumber = Math.floor(Math.random() * incorrectIndex.length )
//keep one of the incorrect options for the 50/50
let indexKeep = incorrectIndex[randomNumber]

//loop through the remaining questions and replace them with text leaving only 2
for( let i = 0; i<4; i++){
    if (i !== correctIndex && i !== indexKeep) {
        currentObj.options[i] = "=REMOVED="
    }

}

}
else if (halvesAvailable === false){ 
    console.log("\nYou have already used 50/50. Try again.\n")
    
}
}




// define the function
function AskQuestion(){
//define the current object
let currentObj = questions[difficultyIndex][questionIndex];
// set questionIndex to the next question for next function loop cycle

//display the question and its respectfull options
console.log("Question "+ (score + 1) + ": " + currentObj.question + "\n" +
    "A) "+ currentObj.options[0] + "\n" +
    "B) "+ currentObj.options[1] + "\n" +
    "C) "+ currentObj.options[2] + "\n" +
    "D) "+ currentObj.options[3] + "\n");



return questions
} 




//Below is to update the available lifelines depending on which the player chooses to use.
function lifelinesUpdate(){

    if (lifelineChoice === "A"){
        FiftyFifty()
        // console.log("You have used 50/50 this lifeline is no longer available.")
        halvesAvailable = false
    }
    else if(lifelineChoice === "B"){
           walkAway();
    }
    else if (lifelineChoice === "C"){
        // console.log("You have used skip this lifeline is no longer available.")
        if (skipsAvailable === true){
            skipsAvailable = false
            score++;
            questionIndex++;
        } else {
            console.log("\nYou have already used skip. Try again.\n")
        }
    }
}

function Nameandstart(){

console.log("Welcome to Who Wants to be a Millionaire Team 12 edition. Im Jeremy Clarkson and Ill be your host for the game.")

name = prompt.question("To begin, what is your name: ")

prompt.question("Tell us a bit about yourself: ")
console.log("Thats sounds lovely " + name + ", Im your host Jeremy CLarkson and we will now begin the quiz.")

return name;
}

//Checks if answerCorrect is true and then adds one to score and displays the users current ammout of money
function setScore(){
   
        console.log("Congratulations " + name +", That is correct!");
        score += 1;
        currentMoney = moneyAmmounts[score];
        console.log("Your prize money is now up to " + currentMoney);
        
        function setCheckpoint(){
            if(currentMoney == "£1,000" || currentMoney == "£32,000"){
                checkpoint = currentMoney;
            }
            else{
                checkpoint = checkpoint;
            }
        }
        setCheckpoint();
    }

    // else if(walkAway == true){
    //     moneyWon = currentMoney;
    //     console.log("Youre leaving with " + currentMoney);
    // }

    //if(answer !== correctAnswer){
       // moneyWon == checkpoint;
        //console.log("But youre leaving the show with " + checkpoint);
    //}


//endGame runs at the end of the quiz, it checks what question the player has made it to, their total accumulated prize money and whethere they made it to and got the million pound question correct. 
//then displays a persdonalised player exit message telling the player these stats. 
function endGame(){
    //if else for checking question, answer correctness and then displaying the message to the terminal. 
    if(score <= 5 && correctAnswer == false){
        console.log(" Unfortunately " + name + ", that is not the answer we're looking for. \n You are going home with no prize money. \n Im Jeremy Clarkson, and this has been Who Wants to Be a Millionaire, Team 12 edition!")
    }else if(score > 5 && score <= 10 && correctAnswer == false){
        console.log(" Unlucky " + name + ". That is not correct. However, you'll still be leaving here with " + moneyWon + ". \n You've been " + name + ", and I've been Jeremy Clarkson. \n Thanks for playing Who Wants to Be a Millionaire, Team 12 edition!")
    }else if (score > 10 && correctAnswer == false){
        console.log(" So close " + name + ". Unfortunately that answer was incorrect. \n However, you still walk away with " + moneyWon + ". \n I've been Jeremy Clarkson and youve played Who Wants to Be a Millionaire, Team 12 edition!")
    }else if (score == 15 && correctAnswer == true){
        console.log(" Congratulations " + name + "!! You've made it to the end of the questions and answered correctly! Youre a millionaire! \n I've been your host Jeremy Clarkson, and youve played Who Wants to Be a Milionaire! \n Give it up for " + name + "! \n clap clap clap clap clap")
    }else if (lifelineChoice === "B"){
        walkAway();
    }
}

function walkAway(){
    moneyWon = currentMoney;
    console.log("Youre leaving with " + currentMoney);
    endGame();
}