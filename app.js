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


const choicesElem = document.querySelector('.choices');
const roundResultElem = document.getElementById('round-result');
const scoreElem = document.getElementById('score');
const resultElem = document.getElementById('result');
const playerScoreElem = document.getElementById('score-player');
const computerScoreElem = document.getElementById('score-computer');
let playerScore = 0;
let computerScore = 0;

function checkAndDisplayResult() {
    if (playerScore >= 5) {
        resultElem.textContent = "You've won the game";
    }
    else if (computerScore >= 5) {
        resultElem.textContent = 'Computer has won the game';
    }
}
function playRound(playerChoice) {
    const computerChoice = getComputerChoice().toLowerCase();
    const result = beginGameRound(playerChoice, computerChoice);
    if (result === 0) {
        roundResultElem.textContent = `It's a TIE, ${playerChoice} - ${computerChoice}, will replay the round`;
    }
    else if (result === 1) {
        roundResultElem.textContent = `You've won the round, ${playerChoice} beats ${computerChoice}`;
        playerScoreElem.textContent = ++playerScore;
    } else {
        roundResultElem.textContent = `You've lost the round, ${computerChoice} beats ${playerChoice}`;
        computerScoreElem.textContent = ++computerScore;
    }
    checkAndDisplayResult();
}

choicesElem.addEventListener('click', (event) => {
    playRound(event.target.id);
})