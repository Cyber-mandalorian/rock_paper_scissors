// console.log(Math.random())

function getComputerChoice() {
    const x = Math.floor(Math.random() * 3)

    if (x==0) return 'rock';
    if (x==1) return 'paper';
    if(x==2) return 'scissors';
}

function getHumanChoice(){
    const choice = prompt("Make a choice: rock, paper or scissors?");
    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice,computerChoice){
    
        humanChoice.toLowerCase();
    
        
        if(humanChoice=='rock' && computerChoice=='scissors'){
            humanScore++
            console.log("You win, rock beats scissors")
        }
    
        else if(humanChoice=='paper' && computerChoice=='rock'){
            humanScore++
            console.log("You win,paper beats rock")
        }
        
        else if(humanChoice=='scissors' && computerChoice=='paper'){
            humanScore++
            console.log("You win, scissors beats paper")
        }
        
        else{
            computerScore++
            (console.log("You lost this round, try again!"))
        }
    }
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
}

for (var i = 1; i < 6; i++) playGame(i);