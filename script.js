const container = document.querySelector('div.container');
const playBtn = document.querySelector('button');
const title = document.querySelector('.container>h2');

//The stage after you click the play button
const gamePlay = document.createElement('div'),
    rockBtn = document.createElement('button'),
    paperBtn = document.createElement('button'),
    scissorsBtn = document.createElement('button');

gamePlay.classList.add('game-play');
rockBtn.classList.add('rock');
paperBtn.classList.add('paper');
scissorsBtn.classList.add('scissors');

rockBtn.textContent = 'Rock';
paperBtn.textContent = 'Paper';
scissorsBtn.textContent = 'Scissors';

playBtn.addEventListener('click', () => game());

//This functiont generates a random choice for the PC between 3 options
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
    if(!usrSelection) return;
    
    const usrSel = usrSelection.toLowerCase(),
          pcSel = pcSelection.toLowerCase();


        if(usrSel === pcSel){
            return console.log(`Draw! You both chose ${pcSelection}`), 0;
        } switch(true){
            case usrSel === 'rock' && pcSel === 'paper':
                return console.log('You Lost! Paper beats Rock'),
                -1;
                break;
            case usrSel === 'rock' && pcSel === 'scissors':
                return console.log('You Won! Rock beats Scissors'),
                1;
                break;
            case usrSel === 'paper' && pcSel === 'rock':
                return console.log('You Won! Paper beats Rock'),
                1;
                break;
            case usrSel === 'paper' && pcSel === 'scissors':
                return console.log('You Lost! Scissors beats Paper'),
                -1;
                break;
            case usrSel === 'scissors' && pcSel === 'rock':
                return console.log('You Lost! Rock beats Scissors'),
                -1;
                break;
            case usrSel === 'scissors' && pcSel === 'paper':
                return console.log('You Won! Scissors beats Paper'),
                1;
            default:
                return alert('Round Missed!\nYou should write Rock, Paper or Scissors to play.');
        }
}

//Run the game function
function game(){
    container.removeChild(playBtn);
    container.removeChild(title);

    container.appendChild(rockBtn);
    container.appendChild(paperBtn);
    container.appendChild(scissorsBtn);

    let playerScore = 0, pcScore = 0;

    // while(playerScore < 5 && pcScore < 5){
    //     // const usrChoice = prompt("Rock, Paper, Scissors, shoot!","");
    //     const pcChoice = getComputerChoice(1,3);
    //     const result = playRound(usrChoice,pcChoice);

    //     if(result=== 1) playerScore++;
    //     if(result === -1) pcScore++

    //     console.log(`My Score:${playerScore} | PC Score:${pcScore}`);
    // }
    //Using tenerary operators just to not forget that they exist
    playerScore > pcScore? console.log('Congratz, You Won!'):
    console.log("You lost my firend, but don't worry life goes on.\nPeople have seen worse days.");
}