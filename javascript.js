console.log("Hello world!")
console.log(Math.random())
const buttons = document.querySelector("#buttons");
const buttons2 = document.querySelectorAll("button")
const resultdoc = document.querySelector('#results');
const scoreboard = document.querySelector('#score')
let humanScoreCounter = 0
let computerScoreCounter = 0

function getHumanChoice(){
    const choiceHuman = prompt("Rock, paper or scissors?");
    console.log("Human chose: " + choiceHuman.toString());
    return choiceHuman.toLowerCase();
}

function getComputerChoice(){
    let choice = Math.random();
    if (choice < 0.33) {
        choiceComputer = "rock"
    } else if (choice < 0.66 && choice >= 0.33){
        choiceComputer = "paper";
    } else {
        choiceComputer = "scissors";
    }
    console.log("Computer chose: " + choiceComputer.toString());
    return choiceComputer;
}


function playRound(choiceHuman, choiceComputer){
    const computerWin = "Computer won!";
    const humanWin = "Human won!";
    const gameTie = "It is tied!";
    let result = "";

    let scoreArray = {
        roundResult: result,
        computerScore: computerScoreCounter,
        humanScore: humanScoreCounter,
    }

    if (choiceComputer == "scissors" && choiceHuman=="paper"){
        console.log(computerWin);
        computerScoreCounter +=1;
        scoreArray.result = "Computer won!";
    }
    else if (choiceComputer == "rock" && choiceHuman == "scissors"){
        console.log(computerWin);
        computerScoreCounter +=1;
        scoreArray.result = "Computer won!";
    }
    else if (choiceComputer == "paper" && choiceHuman == "rock"){
        console.log(computerWin);
        computerScoreCounter +=1;
        scoreArray.result = "Computer won!";
    }
    else if (choiceComputer == choiceHuman){
        console.log(gameTie);
        scoreArray.result = "It is tied!";
    }
    else if (choiceHuman == "scissors" && choiceComputer=="paper"){
        console.log(humanWin)
        humanScoreCounter +=1;
        scoreArray.result = "Human won!";
    }
    else if (choiceHuman == "rock" && choiceComputer == "scissors"){
        console.log(humanWin);
        humanScoreCounter +=1;
        scoreArray.result = "Human won!";
    }
    else if (choiceHuman == "paper" && choiceComputer == "rock"){
        console.log(humanWin)
        humanScoreCounter +=1;
        scoreArray.result = "Human won!";
    }
    else {
        console.log("Please enter rock, paper or scissors.")
    }
    if (humanScoreCounter == 5){
        scoreArray.result = "Human is the winner!";
        buttons2.forEach((button) => button.setAttribute('disabled', true));

    } else if (computerScoreCounter == 5){
        scoreArray.result = "Computer is winner!";
        buttons2.forEach((button) => button.setAttribute('disabled', true));
    }
    return scoreArray;
}
function drawScore(scoreArray){
    const result1 = document.createElement("p");
    result1.textContent = scoreArray.result;
    scoreboard.textContent = `Human: ${humanScoreCounter} Computer: ${computerScoreCounter}`;
    resultdoc.appendChild(result1);
}
buttons.addEventListener('click', (event) =>{
    let target = event.target;
    if (humanScoreCounter < 5 && computerScoreCounter <5){
        switch(target.id) {
            case 'rock':
                drawScore(playRound('rock', getComputerChoice()))
                break;
            case 'paper':
                drawScore(playRound('paper', getComputerChoice()));
                break;
            case 'scissors':
                drawScore(playRound('scissors', getComputerChoice()));
                break;
        }
    }
});



/** function playGame(){
    let counter = 0;
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (computerScore > humanScore){
        console.log("Computer won the game!");
    }
    else if (computerScore == humanScore){
        console.log("The game is a tie!");
    }
    else {
        console.log("Human won the game!");
    }
}

playGame(); **/
