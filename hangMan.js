let posWords = ['cat', 'dog', 'frog', 'yes'];
let triesNum = 5;

ranNum = Math.floor(Math.random() * 4);
console.log(ranNum);


let finalWord = posWords[ranNum];
console.log(finalWord);


let finalWordArray = finalWord.split("");
console.log(finalWordArray);


document.body.style.backgroundColor = "#1a001a";
document.body.style.fontFamily = 'Plus Jakarta Sans', 'sans-serif';
document.body.style.color = "white";


while (triesNum > 0) {
    function guessWord(){
        let guess = prompt("What is your guess? ");
        while (guess === "") {
            guess = prompt("You need to type something in. What is your guess? ");
        }
        console.log(guess);
        return guess;
    }

    guess = guessWord();

    let guessArray = guess.split("");
    console.log(guessArray);
    guessNum = guess.length;

    finalWordNum = finalWord.length;
    console.log(finalWordNum);



    var dashes = [];
    for (let i = 0; i < finalWordNum; i++) {
            dashes.push("_ ");
    }


    let dupe = [];
    let y = 0
    finalWordArray.forEach(function(item) {
        for (let x = 0; x < guessNum; x++) {
            if (guessArray[x] === item) {
                console.log("MATCH");
                dashes.splice(y, 1);
                console.log(dashes);
                dashes.splice(y, 0, item);
                console.log(dashes);
                dupe.push(" " + guessArray[x]);
            }
            else {
                console.log("NOT A MATCH");
                dupe.push(" " + guessArray[x]);
            }
        }
        y++;
    })

    let wrongGuess = [...new Set(dupe)];



    dashesWithoutCommas = dashes.join('')

    let gameboard = document.getElementById('gameboard');
    gameboard.innerHTML = "Gameboard: " + dashesWithoutCommas;


    let tries = document.getElementById('triesLeft');
    tries.innerHTML = "Tries Left: " + triesNum;


    let wrongLet = document.getElementById('wrongLetters');
    wrongLet.innerHTML = "Wrong letters guessed: " + wrongGuess;

    triesNum--;
}