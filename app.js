const buttons = document.querySelectorAll('button');
const message = document.getElementsByClassName('message')[0];

let playerScore = 0;
let computerScore = 0;


buttons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let player = btn.innerText.toLowerCase();
        playRound(player,computerPlay);
        if(playerScore === 5 || computerScore === 5){
            document.getElementsByClassName('buttons')[0].style.display = 'none';
            (playerScore === 5) ? 
            message.innerText = "Player win! Reload page to play again! " : 
            message.innerText = "Computer win! Reload page to play again! ";   
        } 
    })
});


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
        message.innerText = `${playerPlay} beats ${computer} !`;
        playerScore++;
        document.getElementById('player').textContent = playerScore;
    }
    else if(playerPlay === computer){
        console.log(`It's a tie ${playerPlay} vs ${computer} !`);
        message.innerText = `It's a tie ${playerPlay} vs ${computer} !`;
    }
    else{
        console.log(`You lose, ${computer} beats ${playerPlay} !`);
        message.innerText = `${computer} beats ${playerPlay} !`;
        computerScore++;
        document.getElementById('computer').textContent = computerScore;
    }
}