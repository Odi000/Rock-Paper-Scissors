//First screen Html Elements
const container = document.querySelector('div.container');
const playBtn = document.querySelector('button');
const title = document.querySelector('.container>h2');

//The stage after you click the play button

//RPS Buttons Elements
const buttonsContainer = document.createElement('div'),
    rockBtn = document.createElement('button'),
    paperBtn = document.createElement('button'),
    scissorsBtn = document.createElement('button'),
    rockImg = document.createElement('img'),
    paperImg = document.createElement('img'),
    scissorsImg = document.createElement('img'),
    playAgainBtn = document.createElement('button');

playAgainBtn.textContent = 'Play Again';

rockBtn.appendChild(rockImg);
paperBtn.appendChild(paperImg);
scissorsBtn.appendChild(scissorsImg);
buttonsContainer.appendChild(rockBtn);
buttonsContainer.appendChild(paperBtn);
buttonsContainer.appendChild(scissorsBtn);



//Game-Play div Elements
const gamePlay = document.createElement('div'),
    divUsr = document.createElement('div'),
    divResult = document.createElement('div'),
    divPc = document.createElement('div'),
    scoreDispUsr = document.createElement('h1'),
    scoreDispPc = document.createElement('h1'),
    winImg = document.createElement('img'),
    loseImg = document.createElement('img'),
    drawImg = document.createElement('img'),
    para = document.createElement('p');

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
playAgainBtn.classList.add('play-again');

rockBtn.name = 'rock';
paperBtn.name = 'paper';
scissorsBtn.name = 'scissors';
playAgainBtn.disabled = true;
//Img sources
rockImg.src = './Images/stone.png';
paperImg.src = './Images/new-document.png';
scissorsImg.src = './Images/scissors.png';
winImg.src = './Images/check.png';
loseImg.src = './Images/cancel.png';
drawImg.src = './Images/balance.png';

//Start
playBtn.addEventListener('click', () => game());

const buttons = [rockBtn,paperBtn,scissorsBtn];
// const buttons = document.querySelectorAll('.select');
buttons.forEach(button => button.addEventListener('click', playRound));

//Function that runs the game
function game(){
    container.removeChild(playBtn);
    container.removeChild(title);

    container.appendChild(buttonsContainer);
    container.appendChild(gamePlay);
    container.appendChild(playAgainBtn);
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
        buttons.forEach(button => button.disabled = 1);
        divResult.innerHTML = '';
        divResult.appendChild(para);
        

        if(playerScore > pcScore) {
            para.textContent = 'You Won!';
            divUsr.classList.toggle('winner');
            playAgainBtn.disabled = false;
        }else {
            para.textContent = 'Game Over!';
            divPc.classList.toggle('winner');
            playAgainBtn.disabled = false;
        }
        para.classList.toggle('incline');
    }
}

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

//This function returns the winner of the round. 1 User won, 0 Draw, -1 PC won.
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

//Play-Again Button
playAgainBtn.addEventListener('click', playAgain)
function playAgain(){
    divUsr.classList.remove('winner');
    divPc.classList.remove('winner');
    scoreDispUsr.textContent = 0;
    scoreDispPc.textContent = 0;
    divResult.innerHTML = '';

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    playAgainBtn.disabled = true;
}