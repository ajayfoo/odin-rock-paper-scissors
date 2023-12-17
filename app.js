function getRandomInt(upperBoundExclusive) {
    return Math.floor(Math.random() * upperBoundExclusive);
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[getRandomInt(choices.length)];
}