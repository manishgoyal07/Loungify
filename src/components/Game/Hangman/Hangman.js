import React, { Component } from "react";
import { randomWord } from "./RandomWord";
import "./Hangman.css";
import image0 from "./images/0.jpg";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
import TimerNavbar from "../NavbarTimer";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [image0, image1, image2, image3, image4, image5, image6],
  };

  constructor(props) {
    super(props);
    this.state = {
      noOfWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      noOfWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    });
  }

  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
  }

  handleGuess(evt) {
    let letter = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      noOfWrong: st.noOfWrong + (st.answer.includes(letter) ? 0 : 1),
    }));
  }

  generateKeypad() {
    return "QWERTYUIOPASDFGHJKLZXCVBNM".split("").map((letter) => (
      <button
        className='key text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  render() {
    const gameOver = this.state.noOfWrong >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameState = this.generateKeypad();
    if (isWinner) gameState = "Congrats, You have won the Game";
    if (gameOver) gameState = "Better Luck Next Time";
    let restart = gameOver || isWinner;
    return (
      <div className="hangman-container flex flex-col">
        <h1 class="mb-9 text-3xl font-extrabold  text-gray-900 dark:text-white mt-4 md:text-5xl lg:text-5xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Hangman</span></h1>
        <div className="timer-class">
          <TimerNavbar />
        </div>
        <div className="Hangman flex justify-around text-center">
          <img src={this.props.images[this.state.noOfWrong]} alt="HangMan" />
          <div className="container-2">
            <p className="text-3xl">
              Guesses Left: {this.props.maxWrong - this.state.noOfWrong} /{" "}
              {this.props.maxWrong}
            </p>
            <p className="header2 text-2xl">Guess the Programming Language</p>
            <p className="Hangman-word text-3xl font-bold text-orange-600">
              {!gameOver ? this.guessedWord() : this.state.answer}
            </p>
            <p className="Hangman-btns text-center inline-block font-bold text-xl mt-5">{gameState}</p>
            {restart && (
              <button class="reset text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " onClick={this.reset}>Restart</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Hangman;
