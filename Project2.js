let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const rendIdx = Math.floor(Math.random() * 3);   //comes in range betwwn 0 to 2 (where 2 is included) because we multiply the Math.random() with 3
    return options[rendIdx];
    
};

const drawGame = () => {
    //console.log("game was draw.");
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("You lose");
        msg.innerText = `You lose.  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //console.log("userChoice = ",userChoice);
    const compChoice = genCompChoice();
    //console.log("comp Choices = ",compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
     let userWin = true;
     if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true ;
     } else if(userChoice === "paper") {
        userWin = compChoice === "scissor" ? false : true ;
     }  else {
        userWin = compChoice === "rock" ? false : true ;
     }
     showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) => { 
    //console.log(choice);        // ye choice ka div print karva raha hai 
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});