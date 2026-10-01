//Check if answer is correct and Update score

const prompt = require("readline-sync");

//declare variables and array
let score = 0;
let currentMoney = 0;
let moneyWon = 0;
let walkAway = false
let checkpoint = "£0";
const moneyAmmounts = ["£0", "£100", "£200", "£300", "£500", "£1,000", "£2,000", "£4,000", "£8,000", "£16,000", "£32,000", "£64,000", "£125,000", "£250,000", "£500,000", "£1 Million"];

//Checks if answerCorrect is true and then adds one to score and displays the users current ammout of money
function setScore(){
    if(answerCorrect == true){
        console.log("Congratulations " + name +", That is correct!");
        score = score + 1;
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

    else if(walkAway == true){
        moneyWon = currentMoney;
        console.log("Youre leaving with " + currentMoney);
    }

    else{
        console.log("Im sorry " + name + ", that is incorrect.");
        moneyWon == checkpoint;
        console.log("But youre leaving the show with " + checkpoint);
    }
}
setScore();

