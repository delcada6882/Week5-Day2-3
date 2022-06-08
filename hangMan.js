let posWords = ['cat', 'dog', 'frog', 'yes', 'muddle', 'invincible','mind','morning','entertain','friends','slave','continue','cynical','wakeful','sassy', 'present'];
let triesNum = 10;

ranNum = Math.floor(Math.random() * 16);
console.log(ranNum);


let finalWord = posWords[ranNum];
console.log(finalWord);


let finalWordArray = finalWord.split("");
console.log(finalWordArray);


document.body.style.backgroundColor = "#1a001a";
document.body.style.fontFamily = 'Plus Jakarta Sans', 'sans-serif';
document.body.style.color = "white";

finalWordNum = finalWord.length;
console.log(finalWordNum);


var dupe = [];
var dashes = [];
for (let i = 0; i < finalWordNum; i++) {
        dashes.push("_ ");
        console.log("done");
}

function guessWord(){
    let guess = prompt("What is your guess? ");
    while (guess === "") {
        guess = prompt("You need to type something in. What is your guess? ");
    }
    console.log(guess);
    return guess;
}

let wrongLetters = [];

while (triesNum > 0) {
    guess = guessWord();

    let guessArray = guess.split("");
    console.log(guessArray);
    guessNum = guess.length;


    let y = 0
    finalWordArray.forEach(function(item) {
        for (let x = 0; x < guessNum; x++) {
            if (guessArray[x] === item) {
                console.log("MATCH");
                dashes.splice(y, 1);
                console.log(dashes);
                dashes.splice(y, 0, item);
                console.log(dashes);
            }
            else {
                console.log("NOT A MATCH");
                dupe.push(" " + guessArray[x]);
            }
        }
        y++;
    })

    

    let wrongGuess = [...new Set(dupe)];
    console.log(wrongGuess);

    
    guessArray.forEach(function(item){
        let correct = 'false';
        for (let c = 0; c < finalWordNum; c++) {
            console.log(item);
            console.log(finalWordArray[c])
            if ((item) === (finalWordArray[c])) {
                console.log("Correct letter");
                correct = 'true';
            }
            else {
                console.log("InCorrect letter");
            }


        }
        if (correct === 'false') {
            wrongLetters.push(" " + item);
        }
        })

    console.log(wrongLetters);
    wrongLetters = [...new Set(wrongLetters)];

    dashesWithoutCommas = dashes.join('')

    let gameboard = document.getElementById('gameboard');
    gameboard.innerHTML = "Gameboard: " + dashesWithoutCommas;


    let tries = document.getElementById('triesLeft');
    tries.innerHTML = "Tries Left: " + (triesNum - 1);


    let wrongLet = document.getElementById('wrongLetters');
    wrongLet.innerHTML = "Wrong letters: " + wrongLetters;

    let endAllBeAll = "true";
    dashes.forEach(function(item) {
        if (item === "_ ") {
            endAllBeAll = 'false';
            console.log("LOSS");
        }
        else {
            console.log("WIN");
        }
    })

    if (endAllBeAll === 'true') {
        break;
    }

    alert(`Gameboard: ${dashesWithoutCommas} \nTries left: ${triesNum - 1} \nLetters guessed: ${wrongGuess} \nWrong letters: ${wrongLetters}`);

    triesNum--;
}

console.log(dashes);

var loss = "false";
dashes.forEach(function(item) {
    if (item === "_ ") {
        loss = 'true';
        console.log("LOSS");
    }

})

if (loss === 'true') {
    alert(`I'm so sorry, you didn't get the word. You have lost. \nThe word was '${finalWord}'.`);
}
else if (loss === 'false' && triesNum > 1) {
    alert(`Hey good job! You figured out the word was '${finalWord}'. \nYou also figured it out with ${triesNum - 1} tries remaining! You win!`);
}
else {
    alert(`Hey good job! You figured out the word was '${finalWord}'. \nYou also figued it out in the nick of time, nice. You win!`);
}