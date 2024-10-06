/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelector('.sqr')
const messageEl = documemt.querySelector('#message')
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
const resentBtnEl = document.querySelector('#reset')
/*---------------------------- Variables (state) ----------------------------*/
let board
let turn
let winner
let tie


/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
const init = () => {
board =['', '', '', '','', '','','','']; //how to show 9 boards?
turn = 'X';
winner = false;
tie = 'false';
render();
}

const render =() => {
updateBoard();
updateMessage();
}

const updateBoard = () => {
board.forEach((tile, index) => {
    squareEls[index].textContent = tile;
})
}

const updateMessage = (){
    if (winner === tie) {
        messageEl.textContent = `it is 2nd players turn`
    } else if(winner ==='false' && tie ==='true'){
        messageEl.textContent = `it is a tie!`
    }
    else {
        messageEl.textContent = `now it's ${turn} turn`
    }
}

const handleClick = (event) => {
    const tileIndex = event.target.id
    //unsure about Step6

    playPiece(tileIndex);
}

const playPiece = (index)=> {
    board[index] = turn;
    console.log(board);
}

const checkForWinner = () => {
winningCombos.forEach(combo => {
    //unsure about this step
})
}

const checkForTie = () => {
    if  ();
}

const switchPlayerTurn = () => {

}

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(tile => tile {
    tile.addEventListener('click',play)
})
resentBtnEl.addEventListener('click',init)

