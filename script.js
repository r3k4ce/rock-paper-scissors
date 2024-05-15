let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(choices) {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getUserChoice(choices) {
    let choice;
    do {
        choice = prompt('rock, paper, scissors?');
        choice = choice.toLowerCase();
    } while (!choices.includes(choice));
    return choice;
}

function compareChoices(userChoice, computerChoice, choices) {
    if (userChoice === choices[0] && computerChoice === choices[2]) {
        return true;
    } else if (userChoice === choices[1] && computerChoice === choices[0]) {
        return true;
    } else if (userChoice === choices[2] && computerChoice === choices[1]) {
        return true;
    } else if (userChoice === choices[0] && computerChoice === choices[1]) {
        return false;
    } else if (userChoice === choices[1] && computerChoice === choices[2]) {
        return false;
    } else if (userChoice === choices[2] && computerChoice === choices[0]) {
        return false;
    } else {
        return undefined;
    }
}

function scoreAdded(comparisonResult, userScore, computerScore) {
    switch(comparisonResult) {
        case true:
            userScore += 1;
        case false:
            computerScore += 1;
    }
    return [userScore, computerScore];
}

function playGame() {
    
}