function getRandomInt(upperBoundExclusive) {
    return Math.floor(Math.random() * upperBoundExclusive);
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[getRandomInt(choices.length)];
}

function beginGameRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 0;
    }
    switch (playerChoice) {
        case 'rock':
            {
                // computer's choice can either be scissors or paper
                if (computerChoice === 'scissors') {
                    return 1;
                } else {
                    return -1;
                }
            }
        case 'paper':
            {
                // computer's choice can either be rock or scissors
                if (computerChoice === 'rock') {
                    return 1;
                } else {
                    return -1;
                }
            }
        case 'scissors':
            {
                // computer's choice can either be paper or rock
                if (computerChoice === 'paper') {
                    return 1;
                } else {
                    return -1;
                }
            }

    }
    throw 'InvalidValue';
}

function playRound() {
    let playerChoice;
    let result;
    let computerChoice;
    while (true) {
        playerChoice = prompt("Enter 'rock', 'paper' or 'scissors'").toLowerCase();
        computerChoice = getComputerChoice().toLowerCase();
        result = beginGameRound(playerChoice, computerChoice);
        if (result !== 0) break;
        console.log(`It's a TIE, ${playerChoice} - ${computerChoice}, will replay the round`);
    }
    if (result === 1) {
        console.log(`You've won, ${playerChoice} beats ${computerChoice}`);
    } else {
        console.log(`You've lost, ${computerChoice} beats ${playerChoice}`);
    }
}
