

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


// fuction for each button
const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');
    const fridgeBtn = document.querySelector('.fridge');
    const computerBtn = document.querySelector('.computer');
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ['rock', 'paper', 'scissors','fridge','computer']


// to play the game
playerOptions.forEach(option =>) {
    option.addEventListener('click', function () ) {


        const movesLeft = document.querySelector('.movesleft');
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;


        const choiceNumber = Math.floor(Math.random() * 5);
        const computerChoice = computerOptions[choiceNumber];

        // Function to check who wins
        winner(this.innerText, computerChoice)

        // Calling gameOver function after 10 moves
        if (moves == 10) {
            gameOver(playerOptions, movesLeft);




    }
})
})

}