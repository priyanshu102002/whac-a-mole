const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const buttonElement = document.querySelector('.js-btn');

let result = 0;
let hitposition ;
let currentTime = 60;
let timeId = null;

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole');

    hitposition = randomSquare.id;
}

squares.forEach(square =>{
    square.addEventListener('mousedown',()=>{
        if(square.id == hitposition){
            result++;
            score.textContent = result;
            hitposition = null;
        }
    })
})

function moveMole(){
    timeId = setInterval(randomSquare,600);
}

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(countDownTimer);
        clearInterval(timeId);
        // alert('This Game is Over and your final score is '+result);
    }
}

function enterKey(event){
    if(event.key === 'Enter'){
        moveMole();
    }
}

moveMole();

let countDownTimer = setInterval(countDown,1000);
