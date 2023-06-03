const square = document.querySelector('#square');
const ball = document.querySelector('#btn');
const btnStart = document.querySelector('#start');
const gameOver = document.querySelector('#gameover');
const count = document.querySelector('#count');
const newGame = document.querySelector('#new-game');

let timeOutId = null;
let counter = 0;

btn.addEventListener('click', () => {
    let i = Math.floor(Math.random()*(square.clientWidth-50));
    let j = Math.floor(Math.random()*(square.clientHeight-50));
    // btn.style.left = i+'px';
    // btn.style.top = j+'px';
    ball.style.setProperty('--x', `${i}px`);
    ball.style.setProperty('--y', `${j}px`);
    clearTimeout(timeOutId);
    timeOutId = setTimeout(end, 3000);
    counter++;
    count.textContent = counter;
})

btnStart.addEventListener('click', () => {
    btnStart.classList.add('hidden'); 
    ball.classList.remove('hidden');
    count.classList.remove('hidden');
    clearTimeout(timeOutId);
    timeOutId = setTimeout(end, 2000);
})

function end(){
    gameOver.classList.remove('hidden');
    ball.classList.add('hidden');
    counter = null; 
    counter++;
    count.textContent = counter;
    count.classList.add('hidden');
}

newGame.addEventListener('click', () => {
    gameOver.classList.add('hidden');
    ball.classList.remove('hidden');
    count.classList.remove('hidden');
    counter = 0; 
    count.textContent = counter;
    ball.style.setProperty('--x', `${0}px`);
    ball.style.setProperty('--y', `${0}px`);
})