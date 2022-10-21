//First screen
const container = document.querySelector('div.container');
const playBtn = document.querySelector('button');
const title = document.querySelector('.container>h2');

//The stage after you click the play button

//Buttons
const buttonsContainer = document.createElement('div'),
    rockBtn = document.createElement('button'),
    paperBtn = document.createElement('button'),
    scissorsBtn = document.createElement('button'),
    rockImg = document.createElement('img'),
    paperImg = document.createElement('img'),
    scissorsImg = document.createElement('img');

rockBtn.appendChild(rockImg);
paperBtn.appendChild(paperImg);
scissorsBtn.appendChild(scissorsImg);
buttonsContainer.appendChild(rockBtn);
buttonsContainer.appendChild(paperBtn);
buttonsContainer.appendChild(scissorsBtn);

//Game-Play div
const gamePlay = document.createElement('div'),
    divUsr = document.createElement('div'),
    divResult = document.createElement('div'),
    divPc = document.createElement('div'),
    scoreDispUsr = document.createElement('h1'),
    scoreDispPc = document.createElement('h1'),
    winImg = document.createElement('img'),
    loseImg = document.createElement('img'),
    drawImg = document.createElement('img');

divUsr.textContent = 'Player Score:';
divPc.textContent = 'Computer Score:';
scoreDispUsr.textContent = 0;
scoreDispPc.textContent = 0;

divUsr.appendChild(scoreDispUsr);
divPc.appendChild(scoreDispPc);
gamePlay.appendChild(divUsr);
gamePlay.appendChild(divResult);
gamePlay.appendChild(divPc);


//Classes&Names
buttonsContainer.classList.add('buttons-container');
gamePlay.classList.add('game-play');
rockBtn.classList.add('select');
paperBtn.classList.add('select');
scissorsBtn.classList.add('select');
divResult.classList.add('result');

rockBtn.name = 'rock';
paperBtn.name = 'paper';
scissorsBtn.name = 'scissors';

//Img sources
rockImg.src = './Images/stone.png';
paperImg.src = './Images/new-document.png';
scissorsImg.src = './Images/scissors.png';
winImg.src = './Images/check.png'
loseImg.src = './Images/cancel.png'
drawImg.src = './Images/balance.png'

playBtn.addEventListener('click', () => game());

//This functiont generates a random choice for the PC between 3 options
function getComputerChoice(min,max){
    const rndNumber = Math.floor(Math.random()*(max-min+1)+min);
    switch(rndNumber){
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function getRoundWinner(usrChoice,pcChoice){
    if(usrChoice === pcChoice){
        return 0;
    } switch(true){
        case usrChoice === 'rock' && pcChoice === 'paper':
            return -1;            
        case usrChoice === 'rock' && pcChoice === 'scissors':
            return 1;
        case usrChoice === 'paper' && pcChoice === 'rock':
            return 1;
        case usrChoice === 'paper' && pcChoice === 'scissors':
            return -1;
        case usrChoice === 'scissors' && pcChoice === 'rock':
            return -1;
        case usrChoice === 'scissors' && pcChoice === 'paper':
            return 1;
        }
}

//This is a single round of the game function
function playRound(){
    const usrChoice = this.name;
    const pcChoice = getComputerChoice(1,3);
    const result = getRoundWinner(usrChoice,pcChoice);
    let playerScore = parseInt(scoreDispUsr.textContent);
    let pcScore = parseInt(scoreDispPc.textContent);
    
    divResult.innerHTML = '';

    if(result=== 1) {
        scoreDispUsr.textContent = ++playerScore;
        divResult.appendChild(winImg);
    }else if(result === -1) {
        scoreDispPc.textContent = ++pcScore;
        divResult.appendChild(loseImg);
    }else{
        divResult.appendChild(drawImg);
    }

    if(playerScore === 5 || pcScore === 5) {
        console.log('u ban pes pik');
    }
}

//Run the game function
function game(){
    container.removeChild(playBtn);
    container.removeChild(title);

    container.appendChild(buttonsContainer);
    container.appendChild(gamePlay);

    const buttons = document.querySelectorAll('.select');
    buttons.forEach(button => button.addEventListener('click', playRound))
}

drawImg.addEventListener('load', () => {
    console.log('u loadingu');
})