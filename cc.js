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
    }else if (playerChoice === computerChoice){
        console.log('TIE!')
        playOneRound();
    }else{
        console.log('Loser!')
    }
}


