let posWords = ['cat', 'dog', 'frog', 'yes'];

ranNum = Math.floor(Math.random() * 4);
console.log(ranNum);

let finalWord = posWords[ranNum];
console.log(finalWord);

function guessWord(){
    let guess = prompt("What is your first guess? ");
    console.log(guess);
    return guess;
}

document.body.style.backgroundColor = "#1a001a";
document.body.style.fontFamily = 'Plus Jakarta Sans', 'sans-serif';
document.body.style.color = "white";

guess = guessWord();

finalWordNum = finalWord.length;
console.log(finalWordNum);

function findUnder() {
    var dashes = [];
    for (let i = 0; i < finalWordNum; i++) {
        dashes.push("_ ");
    }
    return dashes;
}

dashes = findUnder();

// function dashOut(guess, finalWord) {
//     if () {

//     }
//     else {

//     }
//     return gameboardText;
// }


let gameboard = document.getElementById('gameboard');
gameboard.innerHTML = "Gameboard: " + dashes;