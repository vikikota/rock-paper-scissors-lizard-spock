// RANDOM CHOICE GENERATOR
function AiRandom() {
    let num = Math.floor(Math.random() * 5);
    if (num == 0) {
        return 'rock';
    } else if (num == 1) {
        return 'paper';
    } else if (num == 2) {
        return 'scissors';
    } else if (num == 3) {
        return 'lizard';
    } else {
        return 'spock';
    }
}

fetch('http://localhost:3000/results')
    .then((response) => response.json())
    .then((results) => {
        results.forEach((result) => {
            scoreBoard(
                result.history.player,
                result.history.computer,
                result.history.winner,
                result.id
            );
        });
    })
    .catch((error) => console.log(error));

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
    console.log(e);
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

const lizardImg = document.getElementById('lizard');
lizardImg.addEventListener('click', (event) => {
    lizardImg.value = 'lizard';
    compare(event);
});

const spockImg = document.getElementById('spock');
spockImg.addEventListener('click', (event) => {
    spockImg.value = 'spock';
    compare(event);
});

// COMPARE
function compare(event) {
    messageImgDiv.textContent = '';
    messagesDiv.textContent = '';
    messageChoicesDiv.textContent = '';

    let AiChoice = AiRandom();
    let playerChoice = event.target.value;

    // DRAW
    if (AiChoice == playerChoice) {
        mainMessage(AiChoice, playerChoice);
        draw();

    // AI WIN
    } else if (AiChoice == 'paper' && playerChoice == 'rock') {
        mainMessage(AiChoice, playerChoice);
        sad();
    } else if (AiChoice == 'paper' && playerChoice == 'spock') {
        mainMessage(AiChoice, playerChoice);
        sad();
    } else if (AiChoice == 'rock' && playerChoice == 'scissors') {
        mainMessage(AiChoice, playerChoice);
        sad();
    } else if (AiChoice == 'rock' && playerChoice == 'lizard') {
        mainMessage(AiChoice, playerChoice);
        sad();
    } else if (AiChoice == 'scissors' && playerChoice == 'paper') {
        mainMessage(AiChoice, playerChoice);
        sad();
    } else if (AiChoice == 'scissors' && playerChoice == 'lizard') {
        mainMessage(AiChoice, playerChoice);
        sad();
    } else if (AiChoice == 'lizard' && playerChoice == 'spock') {
        mainMessage(AiChoice, playerChoice);
        sad();
    } else if (AiChoice == 'lizard' && playerChoice == 'paper') {
        mainMessage(AiChoice, playerChoice);
        sad();
    } else if (AiChoice == 'spock' && playerChoice == 'scissors') {
        mainMessage(AiChoice, playerChoice);
        sad();
    } else if (AiChoice == 'spock' && playerChoice == 'rock') {
        mainMessage(AiChoice, playerChoice);
        sad();
    }

    //PLAYER WIN
    else if (AiChoice == 'scissors' && playerChoice == 'rock') {
        mainMessage(AiChoice, playerChoice);
        happy();
    } else if (AiChoice == 'lizard' && playerChoice == 'rock') {
        mainMessage(AiChoice, playerChoice);
        happy();
    } else if (AiChoice == 'rock' && playerChoice == 'paper') {
        mainMessage(AiChoice, playerChoice);
        happy();
    } else if (AiChoice == 'spock' && playerChoice == 'paper') {
        mainMessage(AiChoice, playerChoice);
        happy();
    } else if (AiChoice == 'paper' && playerChoice == 'scissors') {
        mainMessage(AiChoice, playerChoice);
        happy();
    } else if (AiChoice == 'lizard' && playerChoice == 'scissors') {
        mainMessage(AiChoice, playerChoice);
        happy();
    } else if (AiChoice == 'paper' && playerChoice == 'lizard') {
        mainMessage(AiChoice, playerChoice);
        happy();
    } else if (AiChoice == 'spock' && playerChoice == 'lizard') {
        mainMessage(AiChoice, playerChoice);
        happy();
    } else if (AiChoice == 'rock' && playerChoice == 'spock') {
        mainMessage(AiChoice, playerChoice);
        happy();
    } else if (AiChoice == 'scissors' && playerChoice == 'spock') {
        mainMessage(AiChoice, playerChoice);
        happy();
    }

    console.log(AiChoice, playerChoice);
}

// MESSAGES

// MAIN MESSAGE
function mainMessage(AiChoice, playerChoice) {
    modal.style.display = 'block';
    messageChoicesDiv.textContent = `computer choice: ${AiChoice}   |   your choice: ${playerChoice}`;

    turnCounter++;
    turnCounterDiv.textContent = `${turnCounter}`;
}

// HAPPY MESSAGE
function happy() {
    let happyImg = document.createElement('img');
    happyImg.src = './images/happy.svg';
    happyImg.classList.add('message-img-class');
    messageImgDiv.append(happyImg);
    messagesDiv.textContent = `YOU WON THIS ROUND!`;

    playerCounter++;
    playerScoreDiv.textContent = `${playerCounter}`;

    if (turnCounter == 5) {
        gameOver();
    }
}

function draw() {
    let drawImg = document.createElement('img');
    drawImg.src = './images/draw.svg';
    drawImg.classList.add('message-img-class');
    messageImgDiv.append(drawImg);
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
    sadImg.src = './images/sad.svg';
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
        drawGameOver();
    } else if (playerCounter > AICounter) {
        happyGameOver();
    } else {
        sadGameOver();
    }
}

let winner = '';

// GAME OVER MESSAGES
function happyGameOver() {
    winner = 'Player';
    scoreBoard(AICounter, playerCounter, winner);
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

function drawGameOver() {
    winner = 'Tie';
    scoreBoard(AICounter, playerCounter, winner);
    messagesDiv.textContent = '';
    messageChoicesDiv.textContent = '';
    messageImgDiv.textContent = '';

    let drawImg = document.createElement('img');
    drawImg.src = 'images/draw.svg';
    drawImg.classList.add('message-img-class');
    drawImg.classList.add('rotate');
    messageImgDiv.append(drawImg);

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
    winner = 'Computer';
    scoreBoard(AICounter, playerCounter, winner);
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

let boardCounter = 0;
let userID;
function scoreBoard(AICounter, playerCounter, winner, id) {
    userID = id++;
    boardCounter++;
    const scoreBoardDiv = document.getElementById('score-board');
    const round = document.createElement('p');
    round.textContent = `ROUND ${boardCounter}. computer score: ${AICounter}| your score: ${playerCounter} | winner: ${winner}`;
    scoreBoardDiv.prepend(round);
    if (turnCounter > 4) {
        dataUpload(AICounter, playerCounter, winner, userID);
    }
}

function dataUpload(AICounter, playerCounter, winner, userID) {
    let newResult = {
        id: userID,
        history: {
            player: playerCounter,
            computer: AICounter,
            winner: winner,
        },
    };

    fetch('http://localhost:3000/results', {
        method: 'POST',
        body: JSON.stringify(newResult),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        console.log(response);
    })
    .catch((error) => console.log(error));
}
