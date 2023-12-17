function getRandomInt(upperBoundExclusive) {
    return Math.floor(Math.random() * upperBoundExclusive);
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[getRandomInt(choices.length)];
}

function beginGameRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        return 'I\'s a TIE';
    }
    let result;
    switch (playerChoice) {
        case 'rock':
            {
                // computer's choice can either be scissors or paper
                if (computerChoice === 'scissors') {
                    result = 'You won, rock beats scissors';
                } else {
                    result = 'You lost, paper beats rock';
                }
                break;
            }
        case 'paper':
            {
                // computer's choice can either be rock or scissors
                if (computerChoice === 'rock') {
                    result = 'You won, paper beats rock';
                } else {
                    result = 'You lost, scissors beats paper';
                }
                break;
            }
        case 'scissors':
            {
                // computer's choice can either be paper or rock
                if (computerChoice === 'paper') {
                    result = 'You won, scissors beats paper';
                } else {
                    result = 'You lost, rock beats scissors';
                }
                break;
            }

    }
    return result;
}