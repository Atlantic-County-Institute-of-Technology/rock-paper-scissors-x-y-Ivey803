function playRound(playerSelection,computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "it's a draw!";
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors')) {
        return "You win! Rock beats scissors.";
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper')) {
        return "You lose! Paper beats rock.";
    } else if ((playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock')) {
        return "You win! Paper beats rock.";
    } else if ((playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors')) {
        return "You lose! Scissors beats paper.";
    } else if ((playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')) {
        return "You win! Scissors beats paper.";
    } else if ((playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock')) {
        return "You lose! Rock beats scissors.";
    }
}