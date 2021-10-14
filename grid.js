export const GRID_SIZE = 21;
const game_board = document.querySelector('.game-board');
game_board.style.gridTemplateColumns = `repeat(${GRID_SIZE},1fr)`;
game_board.style.gridTemplateRows = `repeat(${GRID_SIZE},1fr)`;

export function generateRandomPositionOnGrid(GRID_SIZE) {
    return Math.floor(Math.random() * (GRID_SIZE - 1 + 1) + 1);
}

export function outsideGrid(snake) {
    if (snake.x < 1 || snake.y < 1 || snake.x > GRID_SIZE || snake.y > GRID_SIZE) {
        return true;
    } else {
        return false;
    }
    
}
