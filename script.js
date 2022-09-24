const button=document.querySelector('button');

button.addEventListener('click', () => game());

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
    if(Boolean(usrSelection)){
        if(usrSelection.toLowerCase() === pcSelection.toLowerCase()){
            return console.log(`Draw! You both chose ${pcSelection}`), 'draw';
        } switch(true){
            case usrSelection.toLowerCase() === 'rock' && pcSelection.toLowerCase() === 'paper':
                return console.log('You Lost! Paper beats Rock'), false;
                break;
            case usrSelection.toLowerCase() === 'rock' && pcSelection.toLowerCase() === 'scissors':
                return console.log('You Won! Rock beats Scissors'), true;
                break;
            case usrSelection.toLowerCase() === 'paper' && pcSelection.toLowerCase() === 'rock':
                return console.log('You Won! Paper beats Rock'), true;
                break;
            case usrSelection.toLowerCase() === 'paper' && pcSelection.toLowerCase() === 'scissors':
                return console.log('You Lost! Scissors beats Paper'), false;
                break;
            case usrSelection.toLowerCase() === 'scissors' && pcSelection.toLowerCase() === 'rock':
                return console.log('You Lost! Rock beats Scissors'), false;
                break;
            case usrSelection.toLowerCase() === 'scissors' && pcSelection.toLowerCase() === 'paper':
                return console.log('You Won! Scissors beats Paper'), true;
        }
    }else alert('Round Missed!\nYou should write Rock, Paper or Scissors to play.');
}

//Run the game function
function game(){
    let score = 0;

    for(let i=0; i<5; i++){
        const usrChoice = prompt("Rock, Paper, Scissors, shoot!","");
        const pcChoice = getComputerChoice(1,3);
        const result = playRound(usrChoice,pcChoice);

        if(result==='draw'){
            score+=0.5;
            console.log(`Score: ${score}/5`);
        }else if(result){
            score++
            console.log(`Score: ${score}/5`);
        }else{
            console.log(`Score: ${score}/5`);
        }
    }
    //Using tenerary operators just for fun
    score > 2.5? console.log('Congratz, You Won!'):
    score == 2.5? console.log('Wow it\'s a draw! Never happened before.'):
    console.log("You lost my firend, but don't worry life goes on.\nPeople have seen worse days.");
}