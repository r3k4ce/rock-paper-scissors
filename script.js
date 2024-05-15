// Array of possible choices
let choices = ['rock', 'paper', 'scissors'];

// Function to get the computer's choice
function getComputerChoice(choices) {
    // Generate a random index between 0 and 2
    let randomIndex = Math.floor(Math.random() * 3);
    // Return the choice at the random index
    return choices[randomIndex];
}

// Function to get the user's choice
function getUserChoice(choices) {
    let choice;
    do {
        // Prompt the user to enter a choice
        choice = prompt('rock, paper, scissors?');
        // Convert the choice to lowercase to ensure consistency
        choice = choice.toLowerCase();
    // Repeat until the user enters a valid choice
    } while (!choices.includes(choice));
    return choice;
}

// Function to compare the user's choice with the computer's choice
function compareChoices(userChoice, computerChoice, choices) {
    // If the user chooses rock and the computer chooses scissors, the user wins
    if (userChoice === choices[0] && computerChoice === choices[2]) {
        return true;
    // If the user chooses paper and the computer chooses rock, the user wins
    } else if (userChoice === choices[1] && computerChoice === choices[0]) {
        return true;
    // If the user chooses scissors and the computer chooses paper, the user wins
    } else if (userChoice === choices[2] && computerChoice === choices[1]) {
        return true;
    // If the user chooses rock and the computer chooses paper, the computer wins
    } else if (userChoice === choices[0] && computerChoice === choices[1]) {
        return false;
    // If the user chooses paper and the computer chooses scissors, the computer wins
    } else if (userChoice === choices[1] && computerChoice === choices[2]) {
        return false;
    // If the user chooses scissors and the computer chooses rock, the computer wins
    } else if (userChoice === choices[2] && computerChoice === choices[0]) {
        return false;
    // If the user's choice is the same as the computer's choice, it's a tie
    } else {
        return undefined;
    }
}

// Function to update the scores based on the result of the comparison
function scoreAdded(comparisonResult, userScore, computerScore) {
    switch(comparisonResult) {
        // If the user won, increment the user's score
        case true:
            userScore += 1;
            break;
        // If the computer won, increment the computer's score
        case false:
            computerScore += 1;
            break;
    }
    // Return the updated scores
    return [userScore, computerScore];
}

// Function to control the flow of the game
function playGame() {
    // Initialize the scores
    let userScore = 0
    let computerScore = 0

    // Continue playing until either the user or the computer reaches 3 points
    while (userScore < 3 && computerScore < 3) {
        // Get the user's and computer's choices
        let userChoice = getUserChoice(choices);
        let computerChoice = getComputerChoice(choices);
        // Compare the choices
        let comparisonResult = compareChoices(userChoice, computerChoice, choices);

        // Log the result of the round
        if (comparisonResult == true) {
            console.log(`You chose ${userChoice}. Computer chose ${computerChoice}: You won this round.`);
        } else if (comparisonResult == false) {
            console.log(`You chose ${userChoice}. Computer chose ${computerChoice}: You lost this round.`);
        } else {
            console.log(`You chose ${userChoice}. Computer chose ${computerChoice}: This round is a tie.`)
        }

        // Update the scores
        [userScore, computerScore] = scoreAdded(comparisonResult, userScore, computerScore);
        // Log the scores
        console.log(`Scores: User - ${userScore}, Computer - ${computerScore}`);
    }
    // Log the winner of the game
    return userScore > computerScore ? console.log('User wins!') : console.log('Computer wins!');
}

// Start the game
playGame()