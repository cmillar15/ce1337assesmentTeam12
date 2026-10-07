# CE1337-26-27-Assessment
# CE1337-26-27-Assessment

##Functions
- AskQuestion : selects the next question to be asked, when used inside a loop for the question
- setScore: checks if answerCorrect is True and then adds 1 to score and sets how much money they are on
- setCheckpoint: sets the safety net when the user reaches £1,000 and again at £32,000
- lifelinesUpdate: updates the available lifelines which can be used by the players
- FiftyFifty: executes the 50/50 lifeline, removing two incorrect answers from the multiple choice
- walkAway: executes walkaway lifeline, leaving the game with money banked without penalty.
- Nameandstart: runs the start of the quiz, asking name and explaining the game, then runs the quiz
- endGame: runs end of quiz, checking the question number, money won and displays a personalised message


##Variables
- questionIndex : checks which question we are on
- difficultyIndex: checks which difficulty we are on
- currentObj - the current object selected within an array
- score: 1 is added every time user selects correct answer
- currentMoney: stores what amount of money the user currently has
- moneyWon: how much the user wins when the quiz ends
- moneyAmmounts: Array that shows all the money ammounts
- correctAnswer: True/False, is set to true when user gets correct answer
- lifelineChoice: what lifeline they use
- halvesAvailable: if they have 50/50 lifeline 
- skipAvailable: if they have skips available
- safetynetAvailable: if they have safety net lifeline
- name: their team name
- checkpoint: used to track the money the player has banked when using walkaway

