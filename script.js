//ivey speller 3/26/25


const choices = ["rock", "paper","scissors","computer","fridge"];
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0;
let computerScore = 0;


//this is the function
function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)]
let result= "";


//this is how the rock paper scissors works.
if(playerChoice === computerChoice){
    result="It's A tie"
}
else{
    switch(playerChoice){
        case "rock":
            result =(computerChoice === "scissors") ? "You Win!" : "You lose!"; break;
        case "paper":
          result =(computerChoice === "rock") ? "You Win!" : "You lose!"; break;
         case "scissors":
           result =(computerChoice === "paper") ? "You Win!" : "You lose!"; break;
           case "computer":
            result =(computerChoice === "paper") ? "You Win!" : "You lose!"; break;
           //fridge crushes everything
            case "fridge":
                result =(computerChoice === "rock" || "paper") ? "You Win!" : "You lose!"; break;


    }
}
 
    playerDisplay.textContent = `player: ${playerChoice}`;
    computerDisplay.textContent = `computer: ${computerChoice}`;
    resultDisplay.textContent=result;
    
   
   resultDisplay.classList.remove("greentext", "redtext")
   
    switch(result){
   case "You Win!":
   resultDisplay.classList.add("greentext");
   
   playerScore++;
   playerScoreDisplay.textContent = playerScore;
    break;
  case "You lose!":
    resultDisplay.classList.add("redtext");
  
  computerScore++;
   computerScoreDisplay.textContent = computerScore;
   break;
   }
}