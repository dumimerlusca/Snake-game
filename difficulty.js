import { SNAKE_SPEED,modifySNAKE_SPEED } from "./snake.js"
const levelEasy = document.querySelector('#difficulty-levels li:nth-child(2')
const levelMedium = document.querySelector('#difficulty-levels li:nth-child(3)')
const levelHard = document.querySelector('#difficulty-levels li:nth-child(4)')
const levelVeryHard = document.querySelector('#difficulty-levels li:nth-child(5)')
const levelList = document.querySelector('#difficulty-levels')
console.log(levelList.children)

const bg_color = 'grey';

    // Default difficulty
levelMedium.style.background = bg_color;
modifySNAKE_SPEED(10);

levelEasy.addEventListener('click', function () {
    resetLiBackground();
    modifySNAKE_SPEED(5);
    levelEasy.style.background = bg_color;
})
levelMedium.addEventListener('click', function () {
    resetLiBackground();
    levelMedium.style.background = bg_color;
    modifySNAKE_SPEED(10);
})
levelHard.addEventListener('click', function () {
    resetLiBackground();
    levelHard.style.background = bg_color;
    modifySNAKE_SPEED(15);
})
levelVeryHard.addEventListener('click', function () {
    resetLiBackground();
    levelVeryHard.style.background = bg_color;
    modifySNAKE_SPEED(20);
})

function resetLiBackground() {
    for (let i = 0; i < levelList.children.length; i++) {
        if (levelList.children[i].style.background == bg_color) {
            levelList.children[i].style.background = 'none';
        }
    }
}