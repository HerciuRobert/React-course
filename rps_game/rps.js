
let choiceArray = ['rock', 'paper', 'scissors'];
let computer = '';
let user = '';

let userOption = document.querySelector('.optionu');
let computerOption = document.querySelector('.optionc');
const userWinner = document.querySelector('.user');
const compWinner = document.querySelector('.comp');
const tieWinner = document.querySelector('.tie');

const buttonPlay = document.querySelector('.play');
buttonPlay.addEventListener('click', play);

userWinner.classList.add('hidden');
compWinner.classList.add('hidden');
tieWinner.classList.add('hidden');


function play() {
    userChoice();
    computerChoice();
    displayWinner();
}


function userChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    user = choiceArray[randomNum];
    userOption.innerHTML = user;
    return userOption;
}

function computerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    computer = choiceArray[randomNum];
    computerOption.innerHTML = computer;
}

function displayWinner() {
    if( (user == choiceArray[0] && computer == choiceArray[2]) || 
    (user == choiceArray[1]) && (computer == choiceArray[0]) || 
    (user == choiceArray[2]) && (computer == choiceArray[1]) )
{
        userWinner.classList.remove('hidden');
        compWinner.classList.add('hidden');
        tieWinner.classList.add('hidden');
    } else if(user == computer) {
        tieWinner.classList.remove('hidden');
        compWinner.classList.add('hidden');
        userWinner.classList.add('hidden');
    } else {
        compWinner.classList.remove('hidden');
        userWinner.classList.add('hidden');
        tieWinner.classList.add('hidden');
    } 
}