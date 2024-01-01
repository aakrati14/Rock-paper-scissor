let userScore = 0;
let deviceScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const deviceScorePara = document.querySelector("#device-score");

const genDeviceChoice = () => {
    let options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    
    msg.innerText = "Game was draw! Play Again.";
    msg.style.background = "#081b31" ;
};

const showWin = (userWin , userChoice , deviceChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
      
        msg.innerText = `You win! Your ${userChoice} beats ${deviceChoice}`;
        msg.style.backgroundColor = "green" ;

    }else{
        deviceScore++;
        deviceScorePara.innerText = deviceScore;
      
        msg.innerText = `You lose! ${deviceChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red" ;
    }
};

const playGame=(userChoice) =>{

const deviceChoice = genDeviceChoice();

if(userChoice === deviceChoice) {
    drawGame();
} else {
    let userWin = true ;
    if(userChoice === "rock") {
        userWin = deviceChoice === "paper" ? false : true ;
    } else if (userChoice === "paper") {
        userWin = deviceChoice === "scissors" ? false : true ;
    } else {
        userWin = deviceChoice === "rock" ? false : true ;
    }
    showWin(userWin , userChoice , deviceChoice);
}
};
                                                                                                                                           
choices.forEach((choice)  =>{
    console.log(choice);
    choice.addEventListener("click" , () => {
        const userchoice= choice.getAttribute("id");
      
       playGame(userchoice);

    });
});

