let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };
console.log(inputDirection)

window.addEventListener('keydown', function(e) {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.x == 1) break;
            inputDirection = { x: -1, y: 0 };
            break;   
        case 'ArrowLeft':
            if (lastInputDirection.y == 1) break;
            inputDirection = { x: 0, y: -1 }
            break;
        case 'ArrowRight':
            if (lastInputDirection.y == -1) break;
            inputDirection = { x: 0, y: 1 }
            break;
        case 'ArrowDown':
            if (lastInputDirection.x == -1) break;
            inputDirection = { x: 1, y: 0 }
            break;
    }
})

export function getInputDirections() {
    lastInputDirection = inputDirection;
    return inputDirection;
}
export function resetInputDirections() {
    inputDirection = { x: 0, y: 0 };
}
