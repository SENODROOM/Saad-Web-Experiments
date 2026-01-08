const { useState } = React;

export function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const [draw, setDraw] = useState(false);

    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function calculateWinner(newSquares) {
        for (let i = 0; i < winningLines.length; i++) {
            const [a, b, c] = winningLines[i];
            if (
                newSquares[a] &&
                newSquares[a] === newSquares[b] &&
                newSquares[a] === newSquares[c]
            ) {
                return newSquares[a];
            }
        }
        return null;
    }

    function handleClick(index) {
        if (squares[index] || winner || draw) return;

        const newSquares = squares.slice();
        newSquares[index] = xIsNext ? "X" : "O";

        const win = calculateWinner(newSquares);

        setSquares(newSquares);
        setXIsNext(!xIsNext);

        if (win) {
            setWinner(win);
        } else if (!newSquares.includes(null)) {
            setDraw(true);
        }
    }

    function resetGame() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        setWinner(null);
        setDraw(false);
    }

    let statusMessage = "";
    if (winner) {
        statusMessage = `Winner: ${winner}`;
    } else if (draw) {
        statusMessage = "Draw";
    }

    return (
        <div className="game">
            <div className="board">
                {squares.map((value, index) => (
                    <button
                        key={index}
                        className="square"
                        onClick={() => handleClick(index)}
                    >
                        {value}
                    </button>
                ))}
            </div>

            <div className="status">{statusMessage}</div>

            <button id="reset" onClick={resetGame}>
                Reset
            </button>
        </div>
    );
}
