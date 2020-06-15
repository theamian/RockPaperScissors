function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function computerPlay() {
    let play = getRndInteger(1, 3);
    switch (play) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

// console.log(computerPlay());

function playerPlay () {
    let choice;
    do {
        choice = prompt("Please enter rock, paper or scissors: ").toLocaleLowerCase();
    }
    while (!(choice == "rock" || choice == "paper" || choice == "scissors"));
    
     return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        switch(computerSelection) {
            case "rock":
                return 0;
            case "paper":
                return -1;
            case "scissors":
                return 1;
        }
    }
    else if (playerSelection == "paper") {
        switch(computerSelection) {
            case "rock":
                return 1;
            case "paper":
                return 0;
            case "scissors":
                return -1;
        }
    }
    else {
        switch(computerSelection) {
            case "rock":
                return -1;
            case "paper":
                return 1;
            case "scissors":
                return 0;
        }
    }
}

function game() {
    let playerPoints = 0, computerPoints = 0;
    for (let i = 1; i <= 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        console.log(`ROUND ${i}: `)
        let round = playRound(playerSelection, computerSelection);
        console.log(`COMPUTER SELECTED ${computerSelection}`);
        if (round == -1) {
            console.log(`COMPUTER WINS ROUND ${i}`);
            computerPoints++;
            console.log(`SCORE Player: ${playerPoints} | Computer: ${computerPoints}`);
        }
        else if (round == 0) {
            console.log(`ROUND ${i} IS TIED`);
            computerPoints++;
            playerPoints++;
            console.log(`SCORE Player: ${playerPoints} | Computer: ${computerPoints}`);
        }
        else {
            console.log(`PLAYER WINS ROUND ${i}`);
            playerPoints++;
            console.log(`SCORE Player: ${playerPoints} | Computer: ${computerPoints}`);
        }
    }
    console.log("_______________________________________");

    (playerPoints > computerPoints) ? console.log("PLAYER WINS!") : console.log("COMPUTER WINS");
    console.log(`FINAL SCORE: PLAYER ${playerPoints} | COMPUTER ${computerPoints}`);
    
}

game();
