/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.querySelector("#message")
const resetBtnEl = document.querySelector("#reset")
const winningCombos = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
]

/*---------------------------- Variables (state) ----------------------------*/
let board
let turn
let winner
let tie

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
const init = () => {
  board = ["", "", "", "", "", "", "", "", ""] //how to show 9 boards?
  turn = "X"
  winner = false
  tie = false
  render()
}

const render = () => {
  updateBoard()
  updateMessage()
}

const updateBoard = () => {
  squareEls.forEach((square, index) => {
    square.textContent = board[index]
  })
}

const updateMessage = () => {
  if (winner) {
    messageEl.textContent = `${turn} wins!`
  } else if (tie) {
    messageEl.textContent = `it is a tie!`
  } else {
    messageEl.textContent = `now it's ${turn} turn`
  }
}

const handleClick = (event) => {
  const tileIndex = event.target.id
  if (board[tileIndex] !== `` || winner) return
  playPiece(tileIndex)
  checkForWinner()
  checkForTie()
  switchPlayerTurn()
  render()
}

const playPiece = (index) => {
  board[index] = turn
  console.log(board)
}

const checkForWinner = () => {
  for (let i = 0; i < winningCombos.length; i++) {
    let combo = winningCombos[i]
    if (
      board[combo[0]] !== `` &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[0]] === board[combo[2]]
    ) {
      winner = true
      break
    }
  }
}

const checkForTie = () => {
  if (winner) return

  tie = true
  for (let i = 0; i < board.length; i++) {
    if (board[i] === ``) {
      tie = false
      break
    }
  }
}

const switchPlayerTurn = () => {
  if (winner) {
    return
  }
  if (turn === `O`) {
    turn = `X`
  } else {
    turn = `O`
  }
}
init()
/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((square) => {
  square.addEventListener(`click`, handleClick)
})

resetBtnEl.addEventListener(`click`, init)
