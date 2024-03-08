// RANDOM CHOICE GENERATOR
function AiRandom() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return 'rock';
    } else if (num == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// COUNTERS
let turnCounter = 0;
let playerCounter = 0;
let AICounter = 0;

// THE MODAL
var span = document.getElementsByClassName('close')[0];

span.onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

function enterClose(e) {
    console.log(e)
    const key = e.keyCode;
    if (key == 13) {
        modal.style.display = 'none';
    }
}

// DECLARATIONS
const modal = document.getElementById('myModal');
const messagesDiv = document.getElementById('messages');
const messageChoicesDiv = document.getElementById('messages-choices');
const messageImgDiv = document.getElementById('message-img');
const turnCounterDiv = document.getElementById('turn-counter');
const playerScoreDiv = document.getElementById('player-score');
const AiScoreDiv = document.getElementById('AI-score');

// EVENTS
modal.onclick = () => {
    modal.style.display = 'none';
};

const rockImg = document.getElementById('rock');
rockImg.addEventListener('click', (event) => {
    rockImg.value = 'rock';
    compare(event);
});

const paperImg = document.getElementById('paper');
paperImg.addEventListener('click', (event) => {
    paperImg.value = 'paper';
    compare(event);
});

const scissorsImg = document.getElementById('scissors');
scissorsImg.addEventListener('click', (event) => {
    scissorsImg.value = 'scissors';
    compare(event);
});

// COMPARE
function compare(event) {
    messageImgDiv.textContent = '';
    messagesDiv.textContent = '';
    messageChoicesDiv.textContent = '';

    let AiChoice = AiRandom();
    let playerChoice = event.target.value;

    // TIE
    if (AiChoice == playerChoice) {
        mainMessage(AiChoice, playerChoice);
        tie();

        // AI WIN
    } else if (AiChoice == 'paper' && playerChoice == 'rock') {
        mainMessage(AiChoice, playerChoice);
        sad();
    } else if (AiChoice == 'rock' && playerChoice == 'scissors') {
        mainMessage(AiChoice, playerChoice);
        sad();
    } else if (AiChoice == 'scissors' && playerChoice == 'paper') {
        mainMessage(AiChoice, playerChoice);
        sad();
    }

    //PLAYER WIN
    else if (AiChoice == 'scissors' && playerChoice == 'rock') {
        mainMessage(AiChoice, playerChoice);
        happy();
    } else if (AiChoice == 'rock' && playerChoice == 'paper') {
        mainMessage(AiChoice, playerChoice);
        happy();
    } else if (AiChoice == 'paper' && playerChoice == 'scissors') {
        mainMessage(AiChoice, playerChoice);
        happy();
    }

    console.log(AiChoice, playerChoice);
}

// MESSAGES

//MAIN MESSAGE
function mainMessage(AiChoice, playerChoice) {
    modal.style.display = 'block';
    messageChoicesDiv.textContent = `computer choice: ${AiChoice}   |   your choice: ${playerChoice}`;

    turnCounter++;
    turnCounterDiv.textContent = `${turnCounter}`;
}

function happy() {
    let happyImg = document.createElement('img');
    happyImg.src = 'images/happy.svg';
    happyImg.classList.add('message-img-class');
    messageImgDiv.append(happyImg);
    messagesDiv.textContent = `YOU WON THIS ROUND!`;

    playerCounter++;
    playerScoreDiv.textContent = `${playerCounter}`;

    if (turnCounter == 5) {
        gameOver();
    }
}

function tie() {
    let tieImg = document.createElement('img');
    tieImg.src = 'images/tie.svg';
    tieImg.classList.add('message-img-class');
    messageImgDiv.append(tieImg);
    messagesDiv.textContent = `DRAW!`;

    playerCounter++;
    playerScoreDiv.textContent = `${playerCounter}`;

    AICounter++;
    AiScoreDiv.textContent = `${AICounter}`;

    if (turnCounter == 5) {
        gameOver();
    }
}

function sad() {
    let sadImg = document.createElement('img');
    sadImg.src = 'images/sad.svg';
    sadImg.classList.add('message-img-class');
    messageImgDiv.append(sadImg);
    messagesDiv.textContent = `YOU LOST THIS ROUND!`;
    AICounter++;
    AiScoreDiv.textContent = `${AICounter}`;

    if (turnCounter == 5) {
        gameOver();
    }
}

//GAME OVER
function gameOver() {
    if (playerCounter == AICounter) {
        setTimeout(() => tieGameOver(), 2000);
    } else if (playerCounter > AICounter) {
        setTimeout(() => happyGameOver(), 2000);
    } else {
        setTimeout(() => sadGameOver(), 2000);
    }
}

// GAME OVER MESSAGES
function happyGameOver() {
    messagesDiv.textContent = '';
    messageChoicesDiv.textContent = '';
    messageImgDiv.textContent = '';

    let happyImg = document.createElement('img');
    happyImg.src = 'images/happy.svg';
    happyImg.classList.add('message-img-class');
    happyImg.classList.add('rotate');

    messageImgDiv.append(happyImg);
    messagesDiv.textContent = `YOU WON THE GAME!`;
    messageChoicesDiv.textContent = `computer score: ${AICounter}   |   your score: ${playerCounter}`;
    modal.style.display = 'block';

    turnCounter = 0;
    AICounter = 0;
    playerCounter = 0;
    turnCounterDiv.textContent = `${turnCounter}`;
    AiScoreDiv.textContent = `${AICounter}`;
    playerScoreDiv.textContent = `${playerCounter}`;
}

function tieGameOver() {
    messagesDiv.textContent = '';
    messageChoicesDiv.textContent = '';
    messageImgDiv.textContent = '';

    let tieImg = document.createElement('img');
    tieImg.src = 'images/tie.svg';
    tieImg.classList.add('message-img-class');
    tieImg.classList.add('rotate');
    messageImgDiv.append(tieImg);

    messagesDiv.textContent = `THAT WAS A DRAW!`;
    messageChoicesDiv.textContent = `computer score: ${AICounter}   |   your score: ${playerCounter}`;
    modal.style.display = 'block';

    turnCounter = 0;
    AICounter = 0;
    playerCounter = 0;
    turnCounterDiv.textContent = `${turnCounter}`;
    AiScoreDiv.textContent = `${AICounter}`;
    playerScoreDiv.textContent = `${playerCounter}`;
}

function sadGameOver() {
    messagesDiv.textContent = '';
    messageChoicesDiv.textContent = '';
    messageImgDiv.textContent = '';

    let sadImg = document.createElement('img');
    sadImg.src = 'images/sad.svg';
    sadImg.classList.add('message-img-class');
    sadImg.classList.add('rotate');
    messageImgDiv.append(sadImg);

    messagesDiv.textContent = `YOU LOST THIS GAME!`;
    messageChoicesDiv.textContent = `computer score: ${AICounter}   |   your score: ${playerCounter}`;
    modal.style.display = 'block';

    turnCounter = 0;
    AICounter = 0;
    playerCounter = 0;
    turnCounterDiv.textContent = `${turnCounter}`;
    AiScoreDiv.textContent = `${AICounter}`;
    playerScoreDiv.textContent = `${playerCounter}`;
}
