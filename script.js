console.log(getComputerChoice(1,3));

function getComputerChoice(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}