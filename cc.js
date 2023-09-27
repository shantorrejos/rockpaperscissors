function getComputerChoice(){
    let randomNumber = Math.floor((Math.random()) * 3);
    const computerChoice = randomNumber === 0 ? 'Rock' : 
    randomNumber === 1 ? 'Paper': randomNumber === 2 ? 'Scissors' : 'Error';
    return computerChoice;
}


