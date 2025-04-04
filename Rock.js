function getHumanChoice(){
    let choice = prompt("Rock, paper, or scissors?")
    return choice;
}
function getComputerChoice(){
    let choices = ["rock", "paper" ,"scissors"]
    let randomindex =Math.floor(Math.random()*3);
    return choices[randomindex]
}
console.log(getComputerChoice());



function playRound(humanScore , computerScore){

    let computerChoice = getComputerChoice();
    let humanChoice =getHumanChoice();

    console.log(`human choose: ${humanChoice}`);
    console.log(`computer choose: ${computerChoice}`);

    if(computerChoice ==humanChoice)
        {
            console.log("draw")
 
        }
        else if((humanChoice=="rock"&&computerChoice=="scissors")||
        (humanChoice=="paper"&&computerChoice=="rock")||
        (humanChoice=="scissors"&&computerChoice=="paper"))       
        {
            console.log("you win");
            humanScore++;

        }
        else{
            console.log("you lose")
            computerScore++;
        }
        return {humanScore , computerScore};
}

function playGame(){
    let humanscore = 0;
    let computerScore=0;
    
    for(let i = 1 ; i <= 5; i++){
        let scores = playRound(humanscore, computerScore);
        humanscore = scores.humanScore;
        computerScore = scores.computerScore;
        console.log(`current score - human:${humanscore} , computer:${computerScore}`);

    }
    console.log("final result");
    console.log(`human score:${humanscore}`);
    console.log(`computer score: ${computerScore}`);

    if(humanscore > computerScore){
        console.log("congratultions u win");
    }
    else if(humanscore < computerScore){
        console.log("sorry u lose")
    }
    else{
        console.log("tie");
    }
    
}
playGame();

