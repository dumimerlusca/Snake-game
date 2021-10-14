import Snake, { modifySNAKE_SPEED, resetBugFix } from './snake.js'
import Food from './food.js'
import { SNAKE_SPEED} from './snake.js';
import { outsideGrid } from './grid.js';
import { resetInputDirections } from './input.js';
import { updateScore, resetScore } from './score.js';
import * as difficulty from './difficulty.js';

const levelEasy = document.querySelector('#difficulty-levels li:first-child')
console.log(levelEasy)

    // Get the game-board from the DOOM
const game_board = document.querySelector(".game-board");
    // Get the overlay container from the DOOM
const overlay_container = document.querySelector('.game-overlay-container')
    // Get the play again button from DOOM
const play_again_btn = document.getElementById('play-again-btn');
    // Add event listener ont he play-again button
play_again_btn.addEventListener('click',hideOverlay)

    // Create the first instance of the snake
let snake = new Snake();
    // Add the instance to a list
let snakeArray = [];
snakeArray.push(snake);

    // Create the first instance of the food
const food = new Food();
    // Add the instance to the list
let foodArray = [];
foodArray.push(food);

let lastRenderTime = 0;
let game_over = 1;
let last_snake_speed;


function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;

    if (game_over == 0) {
        return;
    }

    update();
    draw();

}
window.requestAnimationFrame(main)

    // Game functions

function update() {
    snakeArray[0].update(foodArray[0])
    foodArray[0].update(snakeArray[0])
    updateScore();
    loseGame()
}

function draw() {
    game_board.innerHTML = '';

    snakeArray[0].draw(game_board)
    foodArray[0].draw(game_board)
}

function loseGame() {
    if (outsideGrid(snakeArray[0].body[0]) || snakeArray[0].selfColision()) {
        displayOverlay();
    }
}

function restartGame() {
    snakeArray = [];
    let snake = new Snake();
    snakeArray.push(snake);
    resetInputDirections();
    resetScore();
    resetBugFix();

}
function displayOverlay() {
    overlay_container.style.display = 'block';
    freezeGame();
}
function hideOverlay() {
    overlay_container.style.display = 'none';
    unfreezeGame();
    restartGame();
}
function freezeGame() {
    last_snake_speed = SNAKE_SPEED;
    modifySNAKE_SPEED(0);
}
function unfreezeGame() {
    modifySNAKE_SPEED(last_snake_speed)
}


