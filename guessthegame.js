let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil((Math.random() * 100));
console.log(randomNumber);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High , Try Again";
        gameResult.style.backgroundColor = "#1e217f";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low , Try Again";
        gameResult.style.backgroundColor = "#1e217f";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulational!! You Won.";
        gameResult.style.backgroundColor = "green";

    }

}