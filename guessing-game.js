const { resolveCaa } = require("dns");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log("welcome to my stupid guessing game.")
console.log("guess a number between 1 and 18000")
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let SecretNumber = getRandomInt(18000)

function askGuess(){

rl.question('Hurry up and guess a bloody answer.  Hurry up already.', num => {
let guess = checkGuess(Number(num))

if (guess === true){
    console.log("YOU WON THE GODDAMN GAME!!!!!")
    rl.close()
}
if (guess === false){
    askGuess()
}
})



}

function checkGuess(number){
if (number < 1 || number > 18000){
    console.log("you are out of bounds.  Can you not follow basic directions?")
    return false
}
if (number === SecretNumber) return true

else if (number > SecretNumber){
    console.log("your too high.  Quit smoking pot")
    return false
}
else if (number < SecretNumber){
    console.log("your too low.  Look up")
    return false
}


}

askGuess()
