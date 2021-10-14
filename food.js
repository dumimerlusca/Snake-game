import { generateRandomPositionOnGrid } from './grid.js'
import { GRID_SIZE } from './grid.js'



export default class Food {
    constructor() {
        this.body = { x: generateRandomPositionOnGrid(GRID_SIZE), y: generateRandomPositionOnGrid(GRID_SIZE) };
    }
    update(snake) {
        if (snake.onSnake(this)) {
            this.body.x = generateRandomPositionOnGrid(GRID_SIZE);
            this.body.y = generateRandomPositionOnGrid(GRID_SIZE);
        }
    }

    draw(game_board) {
        const foodElement = document.createElement('div');
        foodElement.className = 'food';
        foodElement.style.gridRowStart = this.body.x;
        foodElement.style.gridColumnStart = this.body.y;
        game_board.appendChild(foodElement);

    }
}