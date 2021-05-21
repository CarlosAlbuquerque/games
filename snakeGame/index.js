import { gameboard, isOutsideBoard } from './Board/index.js';
import { snakeSpeed, draw as snakeDraw, update as snakeUpdate , getSnakeHead, hasSelfCollision as hasSnakeSelfCollision} from './Snake/index.js';
import { draw as foodDraw, update as foodUpdate} from './Food/index.js'


// pegar quanto tempo se passo desde a ultima renderização que a cobrinha andou
let lastTimeRender = 0;


// Duração do Game e Velocidade da cobra
// currentTime --> milisegundos
function main(currentTime){

    if (checkGameOver()){
        if(confirm('Você perdeu o jogo!')){
            window.location.reload();
        } else {
            window.requestAnimationFrame(main);
        }

        return;
    }    

    window.requestAnimationFrame(main)

    const secondsSinceLastRender = ( currentTime - lastTimeRender ) / 1000

    if(secondsSinceLastRender < 1 / snakeSpeed)return;

    lastTimeRender = currentTime;

    update();

    draw();
}

function update(){
    gameboard.innerHTML = '';
    snakeUpdate();
    foodUpdate();
}

function draw(){
    snakeDraw();
    foodDraw();
}

function checkGameOver(){
   return isOutsideBoard(getSnakeHead()) || hasSnakeSelfCollision();
}

window.requestAnimationFrame(main)