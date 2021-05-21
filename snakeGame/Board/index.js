// Tamanho do Board, declaramos no CSS que ele teria 21 bloquinhos logo:
const BOARD_SIZE = 21;

// GameBoard
export const gameboard = document.getElementById('game-board');

// Gerar posições aleatorias no Board

export function generateRandomBoardPosition(){
        // Math.random vai gerar numero aleatorio entre 0 e 1 excluindo o 0. 
        // Adicionamos o * BOARD_SIZE pra gerar de 0 até o valor da const
        // Math.floor arrendoda o valor
        // como colocamos o Mathfloor, se deixamos sem o +1 no final só vai gerar um valor de 0 a 20
    return {
        x: Math.floor(Math.random() * BOARD_SIZE) +1,
        y: Math.floor(Math.random() * BOARD_SIZE) +1,
    }
}

// estamos validando se em alguma posição do board 
// a snake ultrapassou retornando true ou false
export function isOutsideBoard(position){
    return position.x > BOARD_SIZE || position.x < 1 || 
           position.y > BOARD_SIZE || position.y < 1;
}