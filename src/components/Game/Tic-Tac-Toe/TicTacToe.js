import './TicTacToe.css';
import Board from "./Board";
import Square from "./Square";
import TimerNavbar from "../NavbarTimer";
import { useState, useEffect } from 'react';

const defaultSquares = () => (new Array(9)).fill(null);

const lines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function TicTacToe() {
  const [squares, setSquares] = useState(defaultSquares());
  const [winner, setWinner] = useState(null);
  const [isTied, setIsTied] = useState(false); // New state for tied game


  useEffect(() => {
    const isComputerTurn = squares.filter(square => square !== null).length % 2 === 1;
    const linesThatAre = (a, b, c) => {
      return lines.filter(squareIndexes => {
        const squareValues = squareIndexes.map(index => squares[index]);
        return JSON.stringify([a, b, c].sort()) === JSON.stringify(squareValues.sort());
      });
    };
    const emptyIndexes = squares
      .map((square, index) => square === null ? index : null)
      .filter(val => val !== null);
    const playerWon = linesThatAre('x', 'x', 'x').length > 0;
    const computerWon = linesThatAre('o', 'o', 'o').length > 0;
    if (playerWon) {
      setWinner('x');
    }
    if (computerWon) {
      setWinner('o');
    }
    if (!winner && emptyIndexes.length === 0) {
      setIsTied(true); // Check for a tied game
    }
    const putComputerAt = index => {
      let newSquares = squares;
      newSquares[index] = 'o';
      setSquares([...newSquares]);
    };
    if (isComputerTurn) {

      const winingLines = linesThatAre('o', 'o', null);
      if (winingLines.length > 0) {
        const winIndex = winingLines[0].filter(index => squares[index] === null)[0];
        putComputerAt(winIndex);
        return;
      }

      const linesToBlock = linesThatAre('x', 'x', null);
      if (linesToBlock.length > 0) {
        const blockIndex = linesToBlock[0].filter(index => squares[index] === null)[0];
        putComputerAt(blockIndex);
        return;
      }

      const linesToContinue = linesThatAre('o', null, null);
      if (linesToContinue.length > 0) {
        putComputerAt(linesToContinue[0].filter(index => squares[index] === null)[0]);
        return;
      }

      const randomIndex = emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)];
      putComputerAt(randomIndex);
    }
  }, [squares]);

  function resetGame() {
    setSquares(defaultSquares());
    setWinner(null);
    setIsTied(false);
  }


  function handleSquareClick(index) {
    const isPlayerTurn = squares.filter(square => square !== null).length % 2 === 0;
    if (isPlayerTurn) {
      let newSquares = squares;
      newSquares[index] = 'x';
      setSquares([...newSquares]);
    }
  }

  return (
    <div className='main'>
      <div className="m-8">
        <TimerNavbar />
      </div>
      <div className='players'>
        <h3 class="text-2xl font-bold text-gray-500 dark:text-gray-400">Player-1 (You):<h1 class="text-4xl font-extrabold dark:text-white">X</h1></h3>
        <h3 class="text-2xl font-bold text-gray-500 dark:text-gray-400">Player-2 (Computer):<h1 class="text-4xl font-extrabold dark:text-white">O</h1></h3>
      </div>
      <div className='container flex flex-row justify-between w-4/5'>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={resetGame}>Restart</button>
        <Board>
          {squares.map((square, index) =>
            <Square
              x={square === 'x' ? 1 : 0}
              o={square === 'o' ? 1 : 0}
              onClick={() => handleSquareClick(index)} />
          )}
        </Board>
        <div className='result'>
          {!!winner && winner === 'x' && (
            <h1 class="text-5xl font-extrabold dark:text-green-600 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">You Won</h1>
          )}
          {!!winner && winner === 'o' && (
            <h1 class="text-5xl font-extrabold dark:text-red-600 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">You Lost</h1>
          )}
          {isTied && !winner && (
            <h1 class="text-5xl font-extrabold dark:text-yellow-600 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Game Tied</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
