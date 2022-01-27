game();

function computerPlay(){
    let randomNumber=(Math.floor(Math.random()*3))+1;
    switch(randomNumber){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return;
    }
}

function playRound(playerPlay, computerPlay){
    let computer = computerPlay();
    if((playerPlay === 'paper' && computer === 'rock') || (playerPlay === 'rock' && computer === 'scissors') || (playerPlay === 'scissors' && computer === 'paper') ){
        console.log(`You win, ${playerPlay} beats ${computer} !`);
    }
    else if(playerPlay === computer){
        console.log(`It's a tie ${playerPlay} vs ${computer} !`);
    }
    else{
        console.log(`You lose, ${computer} beats ${playerPlay} !`)
    }
}

function game(){
    for(let i=0; i<5; i++){
        let input = false;
        let player = '';
        while(!input){
            player = prompt("rock,paper or scissors").toLowerCase();
            if(player === 'rock' || player === 'paper' || player === 'scissors') input=true;
        }
        
        playRound(player,computerPlay);
    }
}