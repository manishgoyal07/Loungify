import React, { useState, useEffect } from "react";
import TimerNavbar from "../NavbarTimer";

const WORDS = [
  "React",
  "Next",
  "Website",
  "Engineer",
  "TypeScript",
  "Developer",
  "Dream Job",
  "Time to code",
];


const Temp = () => {

  const [isPlayOn, setIsPlayOn] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [correctWord, setCorrectWord] = useState("");
  const [scrambledWord, setScrambledWord] = useState("");

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toUpperCase());
  };

  const selectWord = () => {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    const tempWord = WORDS[randomIndex];
    return tempWord;
  };

  const handleButtonClick = () => {
    if (inputValue !== "") {
      if (correctWord === inputValue) {
        setMessage("Correct Answer");
      } else {
        setMessage("Wrong Answer");
      }
    }
  };

  const handleStartGame = () => {
    setIsPlayOn(true);
    setInputValue("");
    setMessage("");

    const word = selectWord().toUpperCase();
    setCorrectWord(word);
    setScrambledWord(constructScrambledWord(word));
    //setScrambledWord(constructScrambledWordModernJS(word));
  };

  const constructScrambledWord = (word) => {
    const shuffledArray = word.split("");
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray.join("");
  };

  const constructScrambledWordModernJS = (word) => {
    const shuffledArray = word.split("").reduce(
      (newArr, _, i) => {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        return newArr;
      },
      [...word]
    );

    return shuffledArray.join("");
  };

  useEffect(() => {
    let clearMessage;
    if (message === "Wrong Answer") {
      clearMessage = setTimeout(() => setMessage(""), 800);
    }

    return () => {
      if (clearMessage) {
        clearTimeout(clearMessage);
      }
    };
  }, [message]);

  return (
    <div className="p-4 mb-4 flex flex-col items-center justify-center text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
      <TimerNavbar />
      <div className='word_scramble'>
        <h1 class="mb-9 text-3xl font-extrabold  text-gray-900 dark:text-white md:text-5xl lg:text-5xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Word Scramble</span></h1>
        <div className='content'>
          {isPlayOn ? (
            <>
              <div id="alert-border-2" class="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-600 dark:border-red-800" role="alert">
                <h2 class="text-4xl font-extrabold m-auto dark:text-green-600">{correctWord.split("").map((el, i) => (
                  <span key={`${el}_${i}`} className='square_bg'>
                    {inputValue[i]}
                  </span>
                ))}</h2>
              </div>
              <h2 class="text-4xl font-extrabold dark:text-green-600">{scrambledWord}</h2>
              <div className='field'>
                <div class="mb-6">
                  <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleInputChange}
                    value={inputValue} />
                </div>
                <button type="button" class="focus:outline-none bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-3 text-base text-center text-white mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={handleButtonClick}>Submit Word</button>
              </div>
            </>
          ) : (
            <button type="button" class="start_game px-5 py-3 text-base font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleStartGame}>
              Start Game
            </button>
          )}
          {isPlayOn && (
            <button type="button" class="start_game new inline-flex items-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleStartGame}>
              Restart
            </button>
          )}
          {!!message && (
            <h1 class="text-5xl font-extrabold dark:text-yellow-500 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">{message}</h1>
          )}
        </div>
      </div>

    </div>
  )
}

export default Temp