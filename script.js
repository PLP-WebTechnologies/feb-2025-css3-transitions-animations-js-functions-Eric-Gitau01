let score = JSON.parse(localStorage.getItem('score')) ||  {
    wins: 0,
    losses: 0,
    ties: 0
}
updateScoreEl()

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    let result = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove;

}

function playGame(playerMove) {
    const computerMove = pickComputerMove()

     if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'its is a tie';
            } else if (computerMove === 'paper') {
                result = 'you lose';
            } else if (computerMove === 'scissors') {
                result = 'you win';
            }
     } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
        result = 'you win';
        } else if (computerMove === 'paper') {
            result = 'its is a tie';
        } else if (computerMove === 'scissors') {
            result = 'you lose';
        }
     } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'you lose';
            } else if (computerMove === 'paper') {
                result = 'you win';
            } else if (computerMove === 'scissors') {
                result = 'its is a tie';
            }
     }

     if (result === 'you win') {
        score.wins += 1
     } else if (result === 'you lose') {
        score.losses += 1
     } else if (result === 'its is a tie') {
        score.ties +=1
     }

     updateScoreEl()

     localStorage.setItem('score', JSON.stringify(score))
 
    document.querySelector('.js-result').innerHTML = ` You
        <img src="img/${playerMove}-emoji.png" class="move-icon">
        <img src="img/${computerMove}-emoji.png" class="move-icon">
        computer.`
    
}

function updateScoreEl() {
    document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}

function rock() {
   playGame('rock')
}


function paper() {
    playGame('paper')
 
}

function scissors() {
    playGame('scissors')
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score')
    updateScoreEl()
}




