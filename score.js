const point = 1;
export let score = 0;
const scoreInput = document.getElementById('score');
scoreInput.textContent = `${score}`;

export function addScore() {
    score += point
}
export function updateScore() {
    scoreInput.textContent = `${score}`;
}
export function displayScore() {
    
}
export function resetScore() {
    score = 0;
}