function getComputerChoice(){
    let randomNumber = Math.floor((Math.random()) * 3);
    const computerChoice = randomNumber === 0 ? 'Rock' 
    : randomNumber === 1 ? 'Paper'
    : randomNumber === 2 ? 'Scissors' 
    : 'Error';

    return computerChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt("unsa man imo?");

    return playerChoice;
}   

function playOneRound(){
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    
    if (playerChoice === 'Paper' && computerChoice ==='Rock'
     || playerChoice === 'Scissor' && computerChoice === 'Paper'
     || playerChoice === 'Rock' && computerChoice === 'Scissor') {
        
        console.log('Winner!')
        playerScore += 1;
    }else if (playerChoice === computerChoice){
        console.log('TIE!')
        playOneRound();
    }else{
        console.log('Loser!')
        computerScore += 1;
    }
}
let playerScore = 0;
let computerScore = 0;

function game(){

    playOneRound();
    playOneRound();
    playOneRound();
    playOneRound();
    playOneRound();

    if (playerScore > 2){
        alert('You Won! POOGGERS');
    }else{
        alert('Lost to bot oh nonono pepelaugh');
    }


}

game();
