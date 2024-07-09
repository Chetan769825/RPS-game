let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#User-score");
const compScorePara = document.querySelector("#Comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randomIdx =Math.floor(Math.random() * 3);
    return options[randomIdx];
};
const drawGame = () => {
    console.log("Game Was Draw.");
    msg.innerText = " Game Was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}
const showWinner =(userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win! ";
        msg.style.backgroundColor = "green";
    }
        else{
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = "You Lose!";
            msg.style.backgroundColor = "red";
        }  
};
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "paper"? true :false;
        } else if(userChoice === "Paper"){
                userWin = compChoice === "Scissor" ? false : true;
            }else{
                    userWin = compChoice === "Rock" ? false : true;
                }
                showWinner (userWin);
        }
    }


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});