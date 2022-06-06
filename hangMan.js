let posWords = ['cat', 'dog', 'frog', 'yes'];

ranNum = Math.floor(Math.random() * 4);
console.log(ranNum);

let finalWord = posWords[ranNum];
console.log(finalWord);


// let guess = prompt("What is your first guess? ");
// console.log(guess);


let gameboard = document.getElementById('gameboard');
gameboard.style.color = 'red';


function guessWord(){
    let guess = prompt("")
}