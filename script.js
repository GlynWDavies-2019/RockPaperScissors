// DOM Element References

const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

// Score

const scoreboard = {
    computer: 0,
    player: 0
}

// Play

function play(event) {
    restart.style.display = 'inline-block';
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice); 
    showWinner(winner,computerChoice);  
}

// Get Computer Choice

function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34) {
        return 'rock';
    } else if(rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Get Winner

function getWinner(p,c) {
    
    if(p === 'rock' && c === 'paper') {
        return 'computer';
    } else if(p === 'rock' && c === 'scissors') {
        return 'player';
    } else if(p === 'paper' && c === 'rock') {
        return 'player';
    } else if(p === 'paper' && c === 'scissors') {
        return 'computer';
    } else if(p === 'scissors' && c === 'rock') {
        return 'computer';
    } else if(p === 'scissors' && c === 'paper') {
        return 'player';
    } else {
        return 'draw';
    }
}

// Show Winner

function showWinner(winner, computerChoice) {
    if(winner === 'player') {
        scoreboard.player++;
        result.innerHTML = `
            <h1 class="text-win">You Win</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    } else if(winner === 'computer') {
        scoreboard.computer++;
        result.innerHTML = `
            <h1 class="text-lose">You Lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    } else {
        result.innerHTML = `
            <h1>Its A Draw</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    }
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
    `;
    modal.style.display = 'block';
}

// Restart Game

function restartGame() {
    scoreboard.computer = 0;
    scoreboard.player = 0; 
    score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0</p>
    `;
}

// Clear Modal

function clearModal(event) {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
}

// Event Listeners

choices.forEach(choice => choice.addEventListener('click', play));

window.addEventListener('click',clearModal);


restart.addEventListener('click', restartGame);