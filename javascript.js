console.log("Hello world!")
console.log(Math.random())
let humanScore = 0
let computerScore = 0

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
    if (choiceComputer == "scissors" && choiceHuman=="paper"){
        console.log("Computer won!");
        computerScore +=1;
    }
    else if (choiceComputer == "rock" && choiceHuman == "scissors"){
        console.log("Computer won!");
        computerScore +=1;
    }
    else if (choiceComputer == "paper" && choiceHuman == "rock"){
        console.log("Computer won!");
        computerScore +=1;
    }
    else if (choiceComputer == choiceHuman){
        console.log("Its a tie!");
    }
    else if (choiceHuman == "scissors" && choiceComputer=="paper"){
        console.log("Human won!")
        humanScore +=1;
    }
    else if (choiceHuman == "rock" && choiceComputer == "scissors"){
        console.log("Human won!")
        humanScore +=1;
    }
    else if (choiceHuman == "paper" && choiceComputer == "rock"){
        console.log("Human won!")
        humanScore +=1;
    }
    else {
        console.log("Please enter rock, paper or scissors.")
    }
    return computerScore, humanScore;
}

function playGame(){
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

playGame();
