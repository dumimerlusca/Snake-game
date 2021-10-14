import { getInputDirections } from "./input.js";
import * as score from "./score.js"
import { GRID_SIZE } from "./grid.js";


export let SNAKE_SPEED = 10;
export function modifySNAKE_SPEED(value) {
    SNAKE_SPEED = value;
}
const GROW_RATE = 1;
let bugFix = 0;
let index;

export default class Snake {
    constructor() {
        this.body = [{ x: Math.ceil(GRID_SIZE/2), y: Math.ceil(GRID_SIZE/2) }];
    }
    
    onSnake(food) {
        for (let i = 0; i < this.body.length; i++) {
            if ((food.body.x === this.body[i].x) && (food.body.y === this.body[i].y)) {
                return true;
            }   
        }
        return false;
    }
    growSnake() {
        for (let i = 0; i < GROW_RATE; i++) {
            this.body.push({ ...this.body[this.body.length - 1] })
            score.addScore();
        }
        bugFix += 1;
        
    }

    update(food) {
        this.moveSnake();
        if (this.onSnake(food)) {
            this.growSnake();
        }
    }

    draw(game_board) {
        index = 0;
        this.body.forEach(segment => {
            const snakeElement = document.createElement('div');
            game_board.appendChild(snakeElement)
            if (index == 0) {
                snakeElement.className = 'snake-head';
            }else snakeElement.className = 'snake';
            snakeElement.style.gridRowStart = segment.x;
            snakeElement.style.gridColumnStart = segment.y;
            index += 1;
        })
        
    }
    moveSnake() {
        for (let i = this.body.length - 2; i >= 0; i--) {
            this.body[i+1] = { ...this.body[i] };
        }
        const inputDirections = getInputDirections();
        this.body[0].x += inputDirections.x;
        this.body[0].y += inputDirections.y;
    }

    selfColision() {
        if (bugFix >=2) {
            for (let i = this.body.length-2; i > 0; i--){
                if ((this.body[0].x === this.body[i].x) && (this.body[0].y === this.body[i].y)) {
                    return true;
                }
            }
            return false;
        }
        
    }
}

export function resetBugFix() {
    bugFix = 0;
}
