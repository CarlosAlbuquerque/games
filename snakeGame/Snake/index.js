import { getInputDirection } from './input.js'
import { gameboard } from '../Board/index.js';

// Velocidade da cobra
export const snakeSpeed = 4;

let newSegment = 0;

const snakeBody = [
    { x: 11, y: 11 },
]

export function update(){
    addSegments()
    const inputDirection = getInputDirection();

    // fazer mover os segmentos da cobra
    // loop do penultimo elemento até o primeiro
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        //os ... vai dentro do elemento e traz tudo que tem dentro dele, x e o y
        snakeBody[i + 1] = {...snakeBody[i]};
    }

    // fazer mover a cabeça
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
};

export function draw(){

    snakeBody.forEach(segment => {
    //criar o elemento 
    const snakeElement = document.createElement('div');

    //config css element
    snakeElement.classList.add('snake')

    // posição
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;

    //colocar no DOM
        gameboard.appendChild(snakeElement);
    })
};

export function collision(position){
    // O some vai retorna true se pelo menos uma das condições for positiva, mesmo havendo inumeras negativas.
    return snakeBody.some(segment => {
        // quando se a posição que eu receber do onbejto externo for igual 
        // o segmento que esta em loop tanto no x quanto no y, vai retorna  true, um está sobre o outro então colidiu(comeu a fruta).
        return position.x === segment.x && position.y === segment.y;
    })
}

// expandindo a cobra
export function expandSnake(amount){
    newSegment += amount;
}

function addSegments(){
    if(newSegment > 0){
        snakeBody.push({
            //estamos pegando o ultimo segmento dentro do array e add um novo elemento
            ...snakeBody[snakeBody.length - 1],
        });

        newSegment -= 1;
    }
}

// auxiliar functions 

// pegando a cabeça da snake do
export function getSnakeHead(){
    return snakeBody[0];
}

export function hasSelfCollision(){
    const snakeHead = snakeBody[0];

        return snakeBody.some((segment, index) => {
            if (index === 0) return false;
            
            return snakeHead.x === segment.x && snakeHead.y === segment.y;
        })
}