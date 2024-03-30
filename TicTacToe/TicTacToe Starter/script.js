const allSquares = document.querySelectorAll(".board__square")
const title = document.querySelector(".board__title")

let currentPlayer = "X"
let board = new Array(9).fill(undefined)
let gameOver = false

allSquares.forEach((square, i) => {
    square.addEventListener("click", () => {
        if (square.innerHTML || gameOver) {
            return 
        }

        board[i] = currentPlayer
        square.innerHTML = currentPlayer
        
        if (checkWin()) {
            title.innerHTML = `${currentPlayer} Won!`
            gameOver = true
            return 
        }

        if (checkDraw()) {
            title.innerHTML = "It's a Draw"
            gameOver = true
            return
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X"
        title.innerHTML = `${currentPlayer}'s Turn!`
    })
})

function restartGame() {
    gameOver = false
    title.innerHTML = `${currentPlayer}'s Turn!`
    allSquares.forEach(square => {
        square.innerHTML = ""
    })
    board = new Array(9).fill(undefined)
}

function checkDraw() {
    return board.every(symbol => {
        if (symbol) {
            return true
        }
    })
}

function checkWin() {
    const winningIndicies = [
        // Horizontal Wins
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical Wins
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal Wins
        [0, 4, 5],
        [2, 4, 6],
    ]

    for (let i = 0; i < winningIndicies.length; ++i) {
        const matchingIndicies = winningIndicies[i]
        let symbol1 = board[matchingIndicies[0]]
        let symbol2 = board[matchingIndicies[1]]
        let symbol3 = board[matchingIndicies[2]]

        if (!symbol1 || !symbol2 || !symbol3) {
            continue
        }

        if (symbol1 === symbol2 && symbol2 === symbol3) {
            return true
        }
    }
    
}