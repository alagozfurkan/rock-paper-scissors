function getComputerChoice() {

    let getValue = Math.random() * 3;

    if (getValue >= 0 && getValue <= 1) {
        return "Rock"
    } else if (getValue > 1 && getValue <= 2) {
        return "Paper"
    } else if (getValue > 2 && getValue <= 3) {
        return "Scissors"
    }


}

function getHumanChoice() {
     let humanAnswer =  prompt("Rock, Paper or Scissors?");
     return humanAnswer
}

let humanScore = 0;
let computerScore = 0;


 function playRound(humanChoice, computerChoice) {

    if (humanChoice == "Rock") {
        if (computerChoice == "Rock") {
            console.log("It's a tie!!!")
        } else if (computerChoice == "Paper") {
            console.log("You Lose!!! Paper beats Rock")
            computerScore++
        } else if (computerChoice == "Scissors") {
            console.log("You Win!!! Rock beats Scissors")
            humanScore++
        }
        
    }

    if (humanChoice == "Paper") {
        if (computerChoice == "Paper") {
            console.log("It's a tie!!!")
        } else if (computerChoice == "Scissors") {
            console.log("You Lose!!! Scissors beats Paper")
            computerScore++
        } else if (computerChoice == "Rock") {
            console.log("You Win!!! Paper beats Rock")
            humanScore++
        }
    }

    if (humanChoice == "Scissors") {
        if (computerChoice == "Scissors") {
            console.log("It's a tie!!!")
        } else if (computerChoice == "Rock") {
            console.log("You Lose!!! Rock beats Scissors")
            computerScore++
        } else if (computerChoice == "Paper") {
            console.log("You Win!!! Scissors beats Paper")
            humanScore++
        }

    
    }

    
}

function playGame() {
    let round1 = playRound(humanSelection1, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
    let round2 = playRound(humanSelection2, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
    let round3 = playRound(humanSelection3, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
    let round4 = playRound(humanSelection4, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
    let round5 =playRound(humanSelection5, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
    
    if (humanScore > computerScore) {
        console.log(`Conguragilations you win: Your score is: ${humanScore} - Computer's score is: ${computerScore} `);
    } else if (computerScore > humanScore) {
        console.log(`Sorrryyyy you've lost: Your score is: ${humanScore} - Computer's score is: ${computerScore} `);
    }
    else {
        console.log("Its a tie!!!!!!!!!")
    }
    
}



const humanSelection1 = getHumanChoice();
const humanSelection2 = getHumanChoice();
const humanSelection3 = getHumanChoice();
const humanSelection4 = getHumanChoice();
const humanSelection5 = getHumanChoice();

const computerSelection = getComputerChoice();
playGame();
