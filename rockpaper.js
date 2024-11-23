let container = document.querySelector("#container");
let buttonOne = document.createElement("button");
let buttonTwo = document.createElement("button");
let buttonThree = document.createElement("button");
let whowon = document.createElement("p");
let scorekeeper = document.createElement("p");
let computershand = document.createElement("p");
whowon.textContent = "Somone won!!!"
let textcontainer = document.querySelector("#textcontainer")
textcontainer.appendChild(whowon);
textcontainer.appendChild(computershand);
textcontainer.appendChild(scorekeeper);
computershand.textContent = "Computer choosed: "
computershand.style.fontSize = "18px";
scorekeeper.textContent = "Here will be score";
scorekeeper.style.fontSize ="18px";
container.appendChild(buttonOne);
container.appendChild(buttonTwo);
container.appendChild(buttonThree);
buttonOne.textContent = "Rock"
buttonTwo.textContent = "Paper"
buttonThree.textContent = "Scissor"

    buttonOne.addEventListener("click", function() {
        let computerChoice = getComputerChoice();
        computershand.textContent = `Computer choosed: ${computerChoice} `;
        if (computerChoice == "Rock") {
            whowon.textContent = "It's a Tie!!"
        } else if (computerChoice == "Paper") {
            whowon.textContent = "You Lose!!! Paper beats Rock"
            computerScore++
        } else if (computerChoice == "Scissors") {
            whowon.textContent = "You Win!!! Rock beats Scissors"
            humanScore++
        }

        scorekeeper.textContent = `Computer score: ${computerScore}           Your score: ${humanScore}`;
        if (computerScore == 3|| humanScore == 3) {
            buttonOne.disabled = true;
            buttonTwo.disabled = true;
            buttonThree.disabled = true;
        }
    });
    
    buttonTwo.addEventListener("click", function() {
        
        let computerChoice = getComputerChoice();
        computershand.textContent = `Computer choosed: ${computerChoice} `;
        if (computerChoice == "Paper") {
            whowon.textContent = "It's a Tie!!"
        } else if (computerChoice == "Scissors") {
            whowon.textContent = "You Lose!!! Scissors beats Paper"
            computerScore++
        } else if (computerChoice == "Rock") {
            whowon.textContent = "You Win!!! Paper beats Rock"
            humanScore++
        }

        scorekeeper.textContent = `Computer score: ${computerScore}           Your score: ${humanScore}`;
        if (computerScore == 3|| humanScore == 3) {
            buttonOne.disabled = true;
            buttonTwo.disabled = true;
            buttonThree.disabled = true;
        }
    });
    
    buttonThree.addEventListener("click", function() {
        let computerChoice = getComputerChoice();
        computershand.textContent = `Computer choosed: ${computerChoice} `;
        if (computerChoice == "Scissors") {
            whowon.textContent = "It's a Tie!!"
        } else if (computerChoice == "Rock") {
            whowon.textContent = "You Lose!!! Rock beats Scissors"
            computerScore++
        } else if (computerChoice == "Paper") {
            whowon.textContent = "You Win!!! Scissors beats Paper"
            humanScore++
        }

        scorekeeper.textContent = `Computer score: ${computerScore}           Your score: ${humanScore}`;
        if (computerScore == 3|| humanScore == 3) {
            buttonOne.disabled = true;
            buttonTwo.disabled = true;
            buttonThree.disabled = true;
        }
    });






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

let humanScore = 0;
let computerScore = 0;


 /*function playRound(humanChoice, computerChoice) {

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

    
} */

/*function playGame() {
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
playGame(); */
