
let newScore = 20;
let highScore = 0;
let randomNum = Math.trunc(Math.random() * 20) + 1;
const checkBtn = document.querySelector(".check-btn");

checkBtn.addEventListener("click", () => {

    
    let  guessedNum = Number(document.querySelector(".guess-number").value);
    let score = document.querySelector(".score");
    
    if(!guessedNum) {
        let message = document.querySelector(".message");
        message.textContent = "⛔ No number!";
    }
    else if(guessedNum === randomNum) {
        let message = document.querySelector(".message");
        message.textContent = "🎉 Correct Number!";

        let bodyColor = document.querySelector("body");
        bodyColor.style.backgroundColor = "green";

        let numberBox = document.querySelector(".number");
        numberBox.textContent = randomNum;
        numberBox.style.width = "200px";

        if(score.textContent > highScore) {
          highScore = score.textContent;
          document.querySelector(".highscore").textContent = highScore;
        }
        
    }
    else if(guessedNum > randomNum) {
      if(newScore > 0){
        let message = document.querySelector(".message");
        message.textContent = "📈 Too high!";
        newScore--;
        score.textContent = newScore;
      }
      else {
        let message = document.querySelector(".message");
        message.textContent = "💥 You lost the game!";
        
      }
    } 
    else if(guessedNum < randomNum) {
      if(newScore > 0) {
        let message = document.querySelector(".message");
        message.textContent = "📉 Too low!";
        newScore--;
        score.textContent = newScore;
      }
      else {
        let message = document.querySelector(".message");
        message.textContent = "💥 Your score is zero!";
      }
      
    }
    
});



/*********************Refresh Button***********************/

document.querySelector(".again-btn").addEventListener("click", () => {
  newScore = 20;
  randomNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  let number = document.querySelector(".number");
  number.textContent = "?";
  number.style.width = "130px";
  document.querySelector(".score").textContent = newScore;
  document.querySelector(".guess-number").value = "";
  document.querySelector("body").style.backgroundColor = "#1E201E";
});





/*document.addEventListener("DOMContentLoaded", () => {
  let refreshBtn = document.querySelector(".again-btn");
  refreshBtn.addEventListener("click", () => {
    location.reload();
  });
}); */