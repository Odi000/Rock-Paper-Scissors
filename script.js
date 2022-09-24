const button=document.querySelector('button');

button.addEventListener('click', () => console.log(getComputerChoice(1,3)));

const usrChoice = prompt("Rock, Paper, Scissors, shoot!","");
const pcChoice = getComputerChoice(1,3);

//This functiont generates a random choice for the PC
function getComputerChoice(min,max){
    const rndNumber = Math.floor(Math.random()*(max-min+1)+min);
    switch(rndNumber){
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
    }
}

//This is a single round of the game function
function playRound(usrSelection, pcSelection){
    if(usrSelection.toLowerCase() === pcSelection.toLowerCase()){
        return console.log(`Draw! You both chose ${pcSelection}`);
    } switch(true){
        case usrSelection.toLowerCase() === 'rock' && pcSelection.toLowerCase() === 'paper':
            return console.log('You Lost! Paper beats Rock')
            break;
        case usrSelection.toLowerCase() === 'rock' && pcSelection.toLowerCase() === 'scissors':
            return console.log('You Won! Rock beats Scissors')
            break;
        case usrSelection.toLowerCase() === 'paper' && pcSelection.toLowerCase() === 'rock':
            return console.log('You Won! Paper beats Rock')
            break;
        case usrSelection.toLowerCase() === 'paper' && pcSelection.toLowerCase() === 'scissors':
            return console.log('You Lost! Scissors beats Paper')
            break;
        case usrSelection.toLowerCase() === 'scissors' && pcSelection.toLowerCase() === 'rock':
            return console.log('You Lost! Rock beats Scissors')
            break;
        case usrSelection.toLowerCase() === 'scissors' && pcSelection.toLowerCase() === 'paper':
            return console.log('You Won! Scissors beats Paper')
    }
}