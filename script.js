let choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice;
    do {
        choice = prompt("Please enter rock, paper, or scissors.");
    } while (!choices.includes(choice.toLowerCase()));
    return choice.toLowerCase();
}

let humanScore = 0
let computerScore = 0

let computerSelection = getComputerChoice(choices)
let humanSelection = getHumanChoice()

function playRound(humanChoice, computerChoice) {
    let humanLower = humanChoice.toLowerCase();

    let response = `You chose ${humanLower}. Computer chose ${computerChoice}: `
    let lost = "You lost!";
    let won = "You won!";
    let tie = "You Tied!";
    
    if (humanLower === "rock" && computerChoice === "paper") {
        console.log(response + lost);
        computerScore += 1;
    } else if (humanLower === "rock" && computerChoice === "scissors") {
        console.log(response + won);
        humanScore += 1;
    } else if (humanLower === "paper" && computerChoice === "rock") {
        console.log(response + won);
        humanScore += 1;
    } else if (humanLower === "paper" && computerChoice === "scissors") {
        console.log(response + lost);
        computerScore += 1;
    } else if (humanLower === "scissors" && computerChoice === "paper") {
        console.log(response + won);
        humanScore += 1;
    } else if (humanLower === "scissors" && computerChoice === "rock") {
        console.log(response + lost);
        computerScore += 1;
    }
}

playRound(humanSelection, computerSelection);