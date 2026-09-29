function FiftyFifty(){
const optionsToIndex = {1: questions[questionIndex][difficultyIndex].options[0],
     2: questions[questionIndex][difficultyIndex].options[1],
     3: questions[questionIndex][difficultyIndex].options[2],
     4: questions[questionIndex][difficultyIndex].options[3]}
let correctIndex = questions[questionIndex][difficultyIndex].answer
let incorrectIndex = []
for (let i;i<4;i++){
    if( i !== correctIndex){
        incorrectIndex.push(i)
    }
}
let randomNumber = Math.floor(Math.random() * incorrectIndex.length)
let indexKeep = incorrectIndex[randomNumber]

for( let i =0;i<4;i++){
    if (i !== correctIndex && i !== indexKeep) {
        questions[questionIndex][difficultyIndex].options[i] = "=REMOVED="
    }
}


}



