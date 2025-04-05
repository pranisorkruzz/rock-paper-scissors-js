//get human choice
//get computer choice
// play one round function block
//repeat it 5 time and store scores
//display total score with winners and loosers


function getHumanChoice(){
    let choice = prompt("Rock, paper, or scissors?")
    return choice;
}
function getComputerChoice(){
    let choices = ["rock", "paper" ,"scissors"]
    let randomindex =Math.floor(Math.random()*3);
    return choices[randomindex]
}

function playRound(){
    let humanScore =0;
    let computerScore=0;
    
    for(i =1 ; i <= 5 ; i ++){
       
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    console.log(`human choice is:${humanChoice}`);
    console.log(`computer choice is:${computerChoice}`);

    if(humanChoice == computerChoice){
        console.log("it is draw");
    }
    else if((humanChoice == "rock" && computerChoice =="scissors")||
            (humanChoice == "paper" && computerChoice =="rock")||
            (humanChoice == "scissors" && computerChoice =="paper")){
                console.log("you win this round");
                humanScore++;
    }
    else{
        console.log("you lose this round");
        computerScore++;
    }
    console.log(`current score- human:${humanScore} , computer:${computerScore}`);
    
}

    console.log("final result")
    console.log(`human score: ${humanScore}`);
    console.log(`computer score: ${computerScore}`);

    if(humanScore > computerScore){
        console.log("YOU WON THIS GAME")

    }
    else if(humanScore < computerScore){
        console.log("YOU LOSE! COMPUTER WON");
    }
    else{
        console.log("TIE GAME")
    }


}
playRound();
