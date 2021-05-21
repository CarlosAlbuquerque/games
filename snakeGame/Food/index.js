import { gameboard, generateRandomBoardPosition} from '../Board/index.js';
import { collision as snakeCollision , expandSnake} from '../Snake/index.js'

const EXPANSION_RATE = 2;

let foodPosition = generateRandomPosition();

export function update(){
    // a cada frame que o jogo rodar validar se nao ocorreu a colisão entre a snake e a food
    if (snakeCollision(foodPosition)) {
        expandSnake(EXPANSION_RATE)
        foodPosition = generateRandomBoardPosition();
    }
};

export function draw(){
 
    //criar o elemento 
    const foodElement = document.createElement('div');

    //config css element
    foodElement.classList.add('food')

    // posição
    foodElement.style.gridRowStart = foodPosition.y;
    foodElement.style.gridColumnStart = foodPosition.x;

    //colocar no DOM
    gameboard.appendChild(foodElement)
};

function generateRandomPosition(){
    let newFoodPosition;

    // o loop vai validar se a food foi gerada dentro da cobra se gerado dentro
    // vai continuar gerando até não ser mais dentro da cobra ou undefined
    while (newFoodPosition === undefined || snakeCollision(newFoodPosition)) {
        newFoodPosition = generateRandomBoardPosition();
    }

    return newFoodPosition;
}