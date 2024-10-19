let userScore=0;
let CompScore=0;
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}
const msg=document.querySelector("#msg")
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game Draw!"
}
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        msg.innerText="You Win!"
        userScorepara.innerText=`${userScore}`;
    }
    else{
        CompScore++;
        msg.innerText="You Lost!"
        compScorepara.innerText=`${CompScore}`;
    }
}
const playGame=(userChoice)=>{
    const compChoice=genComputerChoice();
    console.log(compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const Userchoice=choice.getAttribute("id");
        console.log("choice was clicked",Userchoice);
        playGame(Userchoice);
    })
})
