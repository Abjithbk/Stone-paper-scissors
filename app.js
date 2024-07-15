let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const msgPara = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock","paper","scissors"]
    const rdmIdx = Math.floor(Math.random() * 3)
    return options[rdmIdx]
}
const showWinner = (userWin) => {
    if(userWin) {
        userScore++
        msgPara.innerText = "You Win!"
        userScorePara.innerText = userScore
        msgPara.style.background= "green"
    }
    else {
        compScore++
        msgPara.innerText = "You lose"
        compScorePara.innerText = compScore
        msgPara.style.background= "red"
    }
}
const playGame = (userChoice) => {    
    const compChoice = genCompChoice();
    if(userChoice === compChoice) {
        msgPara.innerText = "Game Was Draw.Play again"
        msgPara.style.background= "#071952"
    }
    else {
        userChoice = true
        if(userChoice === "rock") {
           userWin = compChoice=== "paper"?true:false
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "rock"?false:true
        }
        else {
            userWin = compChoice === "paper"?false:true
        }
        showWinner(userWin);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",() => {   
    const userChoice = choice.getAttribute("id")
    playGame(userChoice);
    })
})