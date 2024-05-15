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
    let userScore = 0
    let computerScore = 0

    while (userScore < 3 && computerScore < 3) {
        let userChoice = getUserChoice(choices);
        let computerChoice = getComputerChoice(choices);
        let comparisonResult = compareChoices(userChoice, computerChoice, choices);

        if (comparisonResult == true) {
            console.log(`You chose ${userChoice}. Computer chose ${computerChoice}: You won this round.`);
        } else if (comparisonResult == false) {
            console.log(`You chose ${userChoice}. Computer chose ${computerChoice}: You lost this round.`);
        } else {
            console.log(`You chose ${userChoice}. Computer chose ${computerChoice}: This round is a tie.`)
        }

        console.log(scoreAdded(comparisonResult, userScore, computerScore));
    }
    return userScore > computerScore ? console.log('User wins!') : console.log('Computer wins!');
}

playGame()