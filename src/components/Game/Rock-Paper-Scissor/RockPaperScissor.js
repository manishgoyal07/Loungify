import { useEffect, useState } from 'react'
import './RockPaperScissor.css'
import TimerNavbar from "../NavbarTimer";

const RockPaperScissor = () => {
  const [userChoice, setUserChoice] = useState('Rock')
  const [computerChoice, setComputerChoice] = useState('Rock')
  const [userPoints, setUserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [turnResult, setTurnResult] = useState(null)
  const [result, setResult] = useState('Let\'s see who wins')
  const [gameOver, setGameOver] = useState(false)
  const choices = ['Rock', 'Paper', 'Scissors']

  const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = userChoice + computerChoice
    if (userPoints <= 4 && computerPoints <= 4) {
      if (comboMoves === 'ScissorsPaper' || comboMoves === 'RockScissors' || comboMoves === 'PaperRock') {
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('User gets the point!')
        if (updatedUserPoints === 5) {
          setResult('User Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (comboMoves === 'PaperScissors' || comboMoves === 'ScissorsRock' || comboMoves === 'RockPaper') {
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer gets the point!')
        if (updatedComputerPoints === 5) {
          setResult('Computer Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (comboMoves === 'PaperPaper' || comboMoves === 'RockRock' || comboMoves === 'ScissorsScissors') {
        setTurnResult('No one gets the point!')
      }
    }
  }, [computerChoice, userChoice])

  return (
    <div className="App">
      <h1 class="my-5 text-3xl font-extrabold  text-gray-900 dark:text-white md:text-5xl lg:text-5xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Rock-Paper-Scissor</span></h1>
      <div className="my-8">
        <TimerNavbar />
      </div>
      <div className='score'>
        <div id="toast-default" class="flex items-center w-full my-5 max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z" />
            </svg>
            <span class="sr-only">Fire icon</span>
          </div>
          <div class="ms-3 text-lg font-normal">User Points: {userPoints}</div>
        </div>
        <div id="toast-default" class="flex items-center w-full my-5 max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-red-800 dark:text-blue-200">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z" />
            </svg>
            <span class="sr-only">Fire icon</span>
          </div>
          <div class="ms-3 text-lg font-normal">Computer Points: {computerPoints}</div>
        </div>

      </div>
      <div className='choice'>
        <div className='choice-user'>

          <img className='user-hand' src={`./images/${userChoice}.png`} alt={`${userChoice}`}></img>
        </div>
        <div className='choice-computer'>
          <img className='computer-hand' src={`./images/${computerChoice}.png`} alt={`${computerChoice}`}></img>
        </div>
      </div>

      <div className='button-div'>
        {choices.map((choice, index) =>
          <button class="focus:outline-none text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" key={index} onClick={() => handleClick(choice)} disabled={gameOver}>{choice}</button>
        )}
      </div>

      <div className='result'>
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">Turn Result: <span class="text-blue-600 dark:text-blue-400">{turnResult}</span></h1>
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">Final Result: <span class="text-blue-600 dark:text-green-400">{result}</span></h1>
      </div>

      <div className='button-div'>
        {gameOver &&
          <button type="button" class="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => reset()}>Restart</button>
        }
      </div>
    </div>
  )
}

export default RockPaperScissor
